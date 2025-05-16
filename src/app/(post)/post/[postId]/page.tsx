import { findPostById, update } from '@/app/actions/publish'
import CommenetList from '@/components/cmtList'
import { getSession } from '@/lib/getSession'
import Form from 'next/form'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

export default async function PostDetail({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = await params
    const post = await findPostById(+postId)
    const session = await getSession()
    if (!post) return notFound()

    const isAuthor = session?.id === post.UserId

    return (
        <div className="mx-auto max-w-3xl p-4">
            <Form action={update.bind(null, post.id)}>
                <header className="mb-4 flex items-center gap-4">
                    <img
                        src={post.User.avatar || '/user.svg'}
                        alt={post.User.nickname}
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                        <div className="text-sm font-semibold">{post.User.nickname}</div>
                        <div className="text-xs text-gray-500">
                            {new Date(post.createdAt).toLocaleString()}
                        </div>
                    </div>
                </header>
                {isAuthor ? (
                    <input
                        name="title"
                        defaultValue={post.title}
                        className="mb-4 w-full text-2xl font-bold outline-none"
                    />
                ) : (
                    <h1 className="mb-4 text-2xl font-bold">{post.title}</h1>
                )}
                {isAuthor ? (
                    <textarea
                        name="content"
                        defaultValue={post.content}
                        className="mb-4 h-60 w-full rounded p-2 outline-0"
                    />
                ) : (
                    <div className="prose">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                )}
                {isAuthor && (
                    <button
                        type="submit"
                        className="mt-2 inline-block rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700"
                    >
                        保存修改
                    </button>
                )}
            </Form>
            <CommenetList postId={postId} />
        </div>
    )
}
