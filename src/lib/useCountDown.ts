import { useEffect, useState } from 'react'

export const useCountDown = (initial = 5) => {
    const [isOver, setisOver] = useState(false)
    const [count, setCount] = useState(initial)

    let timer: ReturnType<typeof setTimeout>
    useEffect(() => {
        if (isOver && count > 0) {
            timer = setTimeout(() => {
                setCount(count - 1)
            }, 1000)
        }
        if (count === 0) {
            setisOver(false)
            setCount(initial)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [isOver, count])

    const start = () => {
        if (!isOver) {
            setisOver(true)
            setCount(initial)
        }
    }

    return { count, isOver, start }
}
