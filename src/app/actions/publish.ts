'use server'

import { getSession } from '@/lib/getSession'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { postSchema } from './formSchema'

interface PrevState {
    success: boolean
    error?: {
        title?: string[] | undefined
        mdContent?: string[] | undefined
        general?: string[] | undefined
    }
    data: {
        content?: string
        title?: string
    } | null
}

const createPost = async (id: number, data: { title: string; content: string }) => {
    await prisma.post.create({
        data: {
            ...data,
            User: { connect: { id } },
        },
    })
}

export const findPostById = async (id: number) => {
    return await prisma.post.findUnique({
        where: {
            id,
        },
        include: {
            User: true,
        },
    })
}

export const updatePost = async (id: number, data: { title: string; content: string }) => {
    await prisma.post.update({
        where: {
            id,
        },
        data,
    })
}

export const getPost = async () => {
    return await prisma.post.findMany({ include: { User: true } })
}

export async function publish(prevState: PrevState, formData: FormData): Promise<PrevState> {
    const content = formData.get('md-content') as string
    const title = formData.get('title') as string

    const session = await getSession()
    const { id } = session
    console.log('id is...', id)
    console.log('action received...', content, title)

    const isValid = postSchema.safeParse({ title, content })

    console.log(isValid.error)

    if (!isValid.success) {
        return {
            success: false,
            error: isValid.error.flatten().fieldErrors,
            data: null,
        }
    }

    // TODO: publish to server
    try {
        await createPost(id, { title, content })
    } catch (e) {
        return {
            success: false,
            error: { general: ['something is wrong '] },
            data: null,
        }
    }

    return {
        success: true,
        data: {
            content,
            title,
        },
    }
}

export async function update(id: number, formData: FormData) {
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    await updatePost(id, { title, content })
    revalidatePath(`/post/${id}`)
}
