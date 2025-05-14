'use server'
import { getIronSession, IronSession } from 'iron-session'

import { cookies } from 'next/headers'

import { SessionData, User } from '@/app/api/user/getCode/config'

export async function getSession() {
    const cookieStore = await cookies()
    const session = await getIronSession<SessionData>(cookieStore, {
        password: process.env.SESSION_PSW!,
        cookieName: 'code',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production',
        },
    })
    return session
}

export async function removeSession() {
    const session = await getSession()
    session.destroy()
}

export async function setSession(user: User, session: IronSession<SessionData>) {
    session.id = user.id
    session.nickname = user.nickname
    session.avatar = user.avatar
    session.Job = user.Job
    session.Introduce = user.Introduce
    session.isLoggedIn = true
    return await session.save()
}
