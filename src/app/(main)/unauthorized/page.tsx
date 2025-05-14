import LoginDialog from '@/components/login/loginDialog'

export default function UnauthorizedPage() {
    return (
        <div className="p-4 text-center">
            <h2 className="mb-2 text-xl font-bold">未授权访问</h2>
            <p className="mb-4">您需要登录才能访问该页面。</p>
            <LoginDialog />
        </div>
    )
}
