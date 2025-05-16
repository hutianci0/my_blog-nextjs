'use server'
import { getSession } from '@/lib/getSession'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function addComment(postId: number, formData: FormData) {
    console.log(postId)
    const session = await getSession()
    const userId = session.id
    await prisma.comment.create({
        data: {
            Content: formData.get('comment') as string,
            User: { connect: { id: userId } },
            Post: { connect: { id: postId } },
        },
    })

    revalidatePath(`/post/${postId}`)
}

export async function getAllComment(id: number) {
    return await prisma.comment.findMany({
        where: {
            Post: {
                id,
            },
        },
        include: {
            User: true,
        },
    })
}
