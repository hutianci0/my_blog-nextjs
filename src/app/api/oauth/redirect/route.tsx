import { queryUser } from '@/app/actions/login'
import { getSession } from '@/lib/getSession'
import { getGithubInfo } from '@/lib/request/oauth/getGithubInfo'
import { getToken } from '@/lib/request/oauth/getToken'
import { redirect } from 'next/navigation'

import { NextRequest } from 'next/server'

// 接受来自Github的redirect
// Github在确认用户identity 返回一个 callbackURL?code=xxxx
// code换tokem
export async function GET(req: NextRequest) {
    const session = await getSession()
    const code = req.nextUrl.searchParams.get('code')
    const client_id = process.env.CLIENT_ID
    const client_secret = process.env.CLIENT_SECRET
    const tokenURL = `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`
    const res = await getToken(tokenURL)
    const { access_token } = res

    const userInfo = await getGithubInfo(access_token)
    session.nickname = userInfo.login
    session.avatar = userInfo.avatar_url
    session.isLoggedIn = true

    console.log('session is... ', session)
    console.log('returned Github info is ...', userInfo)

    const user = await queryUser({
        identity_type: 'github',
        identifier: client_id!,
        credential: access_token,
        profile: { nickname: userInfo.login, avatar: userInfo.avatar_url },
    })

    if (!user.user) {
        return new Response('用户不存在', { status: 404 })
    }

    session.id = user.user.id

    await session.save()

    redirect('/')
}
