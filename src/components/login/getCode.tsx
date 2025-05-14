'use client'
import { getCode } from '@/lib/request/user/getCode'

import { useCountDown } from '@/lib/useCountDown'

import { Button } from '../ui/button'

export default function GetCode({ disabled }: { disabled: boolean }) {
    // custome countdown hook
    const { count, start, isOver } = useCountDown()
    const handleGetCode = async () => {
        start()
        await getCode()
    }
    return (
        <Button
            variant={'ghost'}
            className="h-fit w-fit hover:font-extrabold"
            onClick={handleGetCode}
            disabled={isOver || disabled}
        >
            <span>{isOver ? count : '获取验证码'}</span>
        </Button>
    )
}
