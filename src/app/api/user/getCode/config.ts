export type CodeType = {
    statusCode: string
    templateSMS?: {
        smsMessageSid: string
        dateCreated: string
    }
    statusMsg?: string
}

export interface User {
    id: number
    nickname: string | null
    avatar: string | null
    Introduce: string | null
    Job: string | null
}
interface SessionState {
    code?: string
    isLoggedIn?: boolean | false
}

interface userInfo {
    name: string
}

export type SessionData = User & SessionState & userInfo
