// app/api/send-code/route.ts
import { getSession } from '@/lib/getSession'
import request from '@/lib/request/request'
import { buildGetCodeHeaders } from '@/lib/request/user/config'
import dayjs from 'dayjs'
import md5 from 'md5'
import { NextRequest } from 'next/server'
import { CodeType } from './config'

export async function POST(req: NextRequest) {
    const session = await getSession()
    // 配置请求参数
    const { to } = await req.json() // 手机号码
    const appId = process.env.APPID!
    const authToken = process.env.AUTH_TOKEN!
    const accountId = process.env.ACCOUNT_ID!
    const timestamp = dayjs().format('YYYYMMDDHHmmss')
    const sig = md5(`${accountId}${authToken}${timestamp}`)

    const url = `https://app.cloopen.com:8883/2013-12-26/Accounts/${accountId}/SMS/TemplateSMS?sig=${sig}`

    // 构造验证码
    const code = Math.floor(Math.random() * (9999 - 1000) + 1000).toString()

    const body = {
        to,
        appId,
        templateId: '1',
        datas: [code, '5'],
    }

    const { statusCode, statusMsg } = await request.post<CodeType>(url, body, {
        headers: buildGetCodeHeaders(),
    })
    console.log(statusCode, code)

    if (statusCode === '000000') {
        session.code = code
        await session.save()
        return new Response(JSON.stringify({ msg: statusMsg, code }), { status: 200 })
    } else {
        return new Response(JSON.stringify({ msg: statusMsg }), { status: 500 })
    }
}
