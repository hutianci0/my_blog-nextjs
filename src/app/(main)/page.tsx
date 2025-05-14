// app/page.tsx 或其他 page 文件
import PostList from '@/components/postList'
import { getSession } from '@/lib/getSession'

export default async function Home() {
    const session = await getSession()

    if (!session || !session.nickname) {
        return <div>请先登录</div>
    }

    const { nickname } = session

    return (
        <div>
            <div>👋 Hello, {nickname}</div>
            <p>This is Home</p>
            <PostList />
        </div>
    )
}
