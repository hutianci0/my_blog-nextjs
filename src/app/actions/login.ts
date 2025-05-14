'use server'

import { getSession, setSession } from '@/lib/getSession'
import prisma from '@/lib/prisma'
import { User } from '../api/user/getCode/config'
import { formSchema } from './formSchema'

interface initialState {
    errors?: {
        mobile?: string[]
        verification?: string[]
    }
    message?: string
    success?: boolean
    user?: User
}

interface AuthParams {
    identity_type: 'phone' | 'github'
    identifier: string // 手机号 or GitHub ID
    credential: string // 手机验证码 or GitHub token 等
    profile?: {
        nickname: string
        avatar?: string | null
        job?: string | null
        introduce?: string | null
    }
}
// Form validation
const validateForm = (formData: FormData) => {
    const rawFormData = {
        mobile: formData.get('mobile') as string,
        verification: formData.get('verification') as string,
    }

    // Validate with Zod
    const res = formSchema.safeParse(rawFormData)
    return res
}

// db_query
export const queryUser = async (params: AuthParams): Promise<initialState> => {
    const { identifier, identity_type, credential, profile } = params
    // 获取session
    const session = await getSession()

    // 针对手机验证码单独校验逻辑
    if (identity_type === 'phone') {
        const code = session.code
        console.log('code', code)
        if (credential !== code) {
            return {
                success: false,
                message: '验证码不正确',
                errors: { verification: ['验证码不正确'] },
            }
        }
    }

    const Auth = await prisma.nEXT_AUTH.findFirst({
        // 查询电话
        where: {
            Identifier: identifier,
            Identity_type: identity_type,
        },
    })
    // 新用户: 根据传入类型创建
    if (!Auth) {
        try {
            const newUser = await prisma.nEXT_USER.create({
                data: {
                    nickname:
                        identity_type === 'phone'
                            ? `用户${Math.floor(Math.random() * 10000)}`
                            : `GitHub_${profile?.nickname}`,
                    avatar: profile?.avatar || null,
                    Job: 'new user',
                    Introduce: 'new user',
                    NEXT_AUTH: {
                        create: [
                            {
                                Identity_type: identity_type,
                                Identifier: identifier,
                                credential: credential!,
                            },
                        ],
                    },
                },
            })

            await setSession(newUser, session)

            return {
                success: true,
                message: '用户创建成功',
                user: newUser,
            }
        } catch (e) {
            console.log(e)
            return {
                success: false,
                message: '用户创建失败',
            }
        }
    }

    // 如果用户存在, 则讲用户信息储存到session中
    const user = await prisma.nEXT_USER.findUnique({
        where: {
            id: Auth?.UserId,
        },
    })

    if (!user) {
        return {
            success: false,
            message: '未能找到对应的用户信息',
        }
    }

    // 更新credential
    await prisma.nEXT_AUTH.update({
        where: {
            id: Auth?.id,
        },
        data: {
            credential: credential,
        },
    })
    await setSession(user, session)

    return {
        success: true,
        message: '登录成功',
        user: user,
    }
}
// Server actio: Login
export async function loginAction(
    prevState: initialState | null,
    formData: FormData
): Promise<initialState> {
    const isValidate = validateForm(formData)

    if (isValidate.error) {
        return {
            success: false,
            errors: isValidate.error.flatten().fieldErrors,
        }
    }

    const queryRes = await queryUser({
        identifier: isValidate.data.mobile,
        credential: isValidate.data.verification,
        identity_type: 'phone',
    })

    console.log('sever action查询结果', queryRes)

    return queryRes
}
