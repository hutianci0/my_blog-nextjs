import { addComment, getAllComment } from '@/app/actions/comment'
import Form from 'next/form'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default async function CommenetList({ postId }: { postId: string }) {
    const commentList = await getAllComment(+postId)
    const addCommentWithId = addComment.bind(null, +postId)

    return (
        <div>
            <h3>Commet List</h3>

            <Form action={addCommentWithId}>
                <Input placeholder="comment" name="comment" />
                <Button type="submit">comment</Button>
            </Form>

            <div>
                {commentList.length === 0 && <p>no comments yet</p>}
                {commentList.map((item) => (
                    <div>
                        {' '}
                        <p>user: {item.User.nickname}</p>
                        <p>posted at: {item.createdAt.toDateString()}</p>
                        <p key={item.id}>{item.Content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
