'use client'
import { publish } from '@/app/actions/publish'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import dynamic from 'next/dynamic'
import Form from 'next/form'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import 'react-markdown-editor-lite/lib/index.css'
import { toast, Toaster } from 'sonner'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false })

export default function MarkdownEditor() {
    const router = useRouter()
    const [content, setmd] = useState('')
    const [state, formAction] = useActionState(publish, {
        success: false,
        data: null,
    })

    useEffect(() => {
        if (state.success) {
            toast.success(`发布成功`)
            router.push('/')
        }
    }, [state.success])

    console.log(state.data)

    return (
        <div className="grid h-full w-full gap-4 px-4">
            <div>
                <p className="text-2xl">This is post page</p>
            </div>

            <Form action={formAction} onSubmit={() => setmd('')}>
                <div className="grid gap-4">
                    <div className="grid w-full gap-2">
                        <Input id="title" name="title" type="text" placeholder="请输入标题" />
                        {state.error && (
                            <p aria-describedby="title" className="font-bold text-red-500">
                                {state.error.title}
                            </p>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="markdown" className='"text-sm font-medium"'>
                            编辑内容:{' '}
                        </label>
                        <MdEditor
                            id="markdown"
                            name="md-content"
                            style={{ height: '50vh' }}
                            renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
                            value={content}
                            onChange={({ text }) => setmd(text)}
                        />
                        {state.error && (
                            <p aria-describedby="content" className="font-bold text-red-500">
                                {state.error.title}
                            </p>
                        )}
                    </div>

                    <div className="w-1/2">
                        <Button type="submit" className="w-1/2">
                            发布
                        </Button>
                    </div>
                    {!state.success && <p>{state.error?.general}</p>}
                </div>
            </Form>
            <Toaster />
        </div>
    )
}
