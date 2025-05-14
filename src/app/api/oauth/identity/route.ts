import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const client_id = process.env.CLIENT_ID
    const redirect_uri = 'http://localhost:3000/api/oauth/redirect'

    const githubURL =
        'https://github.com/login/oauth/authorize' +
        `?client_id=${client_id}&` +
        `redirect_uri=${redirect_uri}`

    redirect(githubURL)
}
