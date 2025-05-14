import { z } from 'zod'

// Schema
export const formSchema = z.object({
    mobile: z.string().regex(/^1[3-9]\d{9}$/, '请输入有效的中国手机号码'),
    verification: z.string().trim().nonempty({ message: '请输入验证码' }),
})

// validate post inputs: only nonemepty
export const postSchema = z.object({
    title: z.string().nonempty({ message: 'please enter title' }),
    content: z.string().nonempty({ message: 'please enter content' }),
})
