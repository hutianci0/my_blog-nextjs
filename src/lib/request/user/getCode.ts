import request from '@/lib/request/request'

export const getCode = async (mobile = '15971588211') => {
    try {
        const res = await request.post('/api/user/getCode', { to: mobile })

        return res
    } catch (err) {
        console.error('短信发送失败', err)
        return null
    }
}
