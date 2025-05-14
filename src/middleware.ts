import { getSession } from '@/lib/getSession'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    // get path
    const session = await getSession()

    // private route & not logged in
    if (!session?.id) {
        return NextResponse.redirect(new URL('/unauthorized', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/post/:path*', '/profile/:path*'],
}
