import request from '../request'
import { GitHubUser } from './config'

export async function getGithubInfo(accessToken: string) {
    return await request.get<GitHubUser>('https://api.github.com/user', {
        headers: {
            Accept: 'application/json',
            Authorization: `token ${accessToken}`,
        },
    })
}
