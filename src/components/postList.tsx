import { getPost } from '@/app/actions/publish'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export default async function PostList() {
    const posts = await getPost()

    return (
        <div className="mx-auto max-w-3xl p-4">
            {posts.length > 0 ? (
                posts.map((item) => (
                    <article
                        key={item.id}
                        className="mb-6 h-56 overflow-scroll rounded-lg border border-gray-200 p-6 shadow transition hover:shadow-md"
                    >
                        <header className="mb-4 flex items-center gap-4">
                            <img
                                src={item.User.avatar || '/user.svg'}
                                alt={item.User.nickname}
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <div>
                                <div className="text-sm font-semibold">{item.User.nickname}</div>
                                <div className="text-xs text-gray-500">
                                    {item.User.Job || '未填写职业'} ·{' '}
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        </header>

                        <h2 className="mb-2 text-xl font-bold">{item.title}</h2>

                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            <ReactMarkdown>{item.content}</ReactMarkdown>
                        </div>

                        <footer className="mt-4 flex justify-between text-sm text-gray-500">
                            <div>👁️ {item.views} 阅读</div>
                            <Link href={`/post/${item.id}`}>查看详情</Link>
                        </footer>
                    </article>
                ))
            ) : (
                <div className="text-center text-gray-500">📭 没有文章，快去发布吧！</div>
            )}
        </div>
    )
}
