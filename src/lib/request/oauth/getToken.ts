import request from '../request'
import { TokenResponse } from './config'

export const getToken = async (url: string) => {
    const res = await request.post<TokenResponse>(
        url,
        {},
        {
            headers: {
                Accept: 'application/json',
            },
        }
    )

    return res
}
