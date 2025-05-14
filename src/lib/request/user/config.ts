// requestConfig.ts
import dayjs from 'dayjs'
import { encode } from 'js-base64'

export const generateAuthorization = () => {
    return encode(`${process.env?.ACCOUNT_ID}:${dayjs().format('YYYYMMDDHHmmss')}`)
}

export const buildGetCodeHeaders = () => ({
    Authorization: generateAuthorization(),
    Accept: 'application/json',
    'Content-Type': 'application/json',
})
