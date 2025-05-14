'use client'
import { formSchema } from '@/app/actions/formSchema'
import { loginAction } from '@/app/actions/login'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import Form from 'next/form'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'
import { toast, Toaster } from 'sonner'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { DialogHeader } from '../ui/dialog'
import { Input } from '../ui/input'
import GetCode from './getCode'

export default function LoginDialog() {
    const router = useRouter()
    // 设置对话框是否打开
    const [open, setOpen] = useState(false)
    // Using useActionState for form handling
    const [state, formAction, isPending] = useActionState(loginAction, null)
    const [mobileValue, setMobileValue] = useState('')
    const isMobileValid = formSchema.shape.mobile.safeParse(mobileValue).success
    useEffect(() => {
        if (state?.success) {
            toast.success(state.message)
            setOpen(false)
            router.push('/')
        } else if (state?.message && !state.success) {
            toast.error(state.message)
        }
    }, [state, router])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>登录</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <div className="flex h-full min-h-[50vh] w-full flex-col items-center justify-center px-4">
                    <Card className="mx-auto w-full">
                        <CardHeader>
                            <CardTitle className="text-2xl">Phone Login</CardTitle>
                            <CardDescription>
                                Enter your phone number and verification code to login to your
                                account.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form action={formAction} className="w-full space-y-8">
                                <div className="grid w-full gap-4">
                                    <div className="grid gap-2">
                                        <label htmlFor="mobile" className="text-sm font-medium">
                                            Mobile
                                        </label>
                                        <Input
                                            id="mobile"
                                            name="mobile"
                                            placeholder="13812345678"
                                            type="tel"
                                            autoComplete="tel"
                                            value={mobileValue}
                                            onChange={(e) => setMobileValue(e.target.value)}
                                        />
                                        {state?.errors?.mobile && (
                                            <p className="text-sm text-red-500">
                                                {state.errors.mobile[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="grid gap-2">
                                        <label
                                            htmlFor="verification"
                                            className="text-sm font-medium"
                                        >
                                            Verification Code
                                        </label>
                                        <div className="relative">
                                            <Input
                                                id="verification"
                                                name="verification"
                                                placeholder="Verification code"
                                                type="text"
                                            />
                                            <div className="absolute top-0 right-0">
                                                <GetCode disabled={!isMobileValid} />
                                            </div>
                                        </div>
                                        {state?.errors?.verification && (
                                            <p className="text-sm text-red-500">
                                                {state.errors.verification[0]}
                                            </p>
                                        )}
                                        <Link
                                            href="#"
                                            className="ml-auto inline-block text-sm underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <Button type="submit" className="w-full" disabled={isPending}>
                                        {isPending ? 'Logging in...' : 'Login'}
                                    </Button>
                                    <Button variant={'outline'} type="button">
                                        <Link href="/api/oauth/identity" className="text-center">
                                            Login with Github
                                        </Link>
                                    </Button>
                                </div>
                            </Form>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{' '}
                                <Link href="#" className="underline">
                                    Sign up
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </DialogContent>
            <Toaster richColors />
        </Dialog>
    )
}
