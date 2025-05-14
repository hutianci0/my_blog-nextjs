export interface TokenResponse {
    access_token: string
    token_type: string
    scope: string
}

export interface GitHubUser {
    id: number
    avatar_url: string
    login: string
}
