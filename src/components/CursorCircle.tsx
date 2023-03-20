import React from 'react'
import { useEffect, useState } from 'react'

type Props = {}

function CursorCircle({ }: Props) {
    const [cursorPos, setCursorPos] = useState<number[]>([])

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e
            const scrollX = window.scrollX || window.pageXOffset
            const scrollY = window.scrollY || window.pageYOffset
            setCursorPos([clientX + scrollX, clientY + scrollY])
        }
        document.addEventListener('mousemove', handleMouseMove)

        return () => removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="cursor-circle" style={{ left: `${cursorPos[0]}px`, top: `${cursorPos[1]}px` }}></div>
    )
}

export default CursorCircle