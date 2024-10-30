import { useEffect, useState } from "react"

export default function Cursor() {
    const [ position, setPosition ] = useState({ left: -999, top: -999 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => setPosition({ left: e.clientX, top: e.clientY })

        document.addEventListener("mousemove", handleMouseMove)
        return () => document.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return <div className="w-2 h-4 backdrop-invert fixed pointer-events-none select-none z-50" style={{ left: position.left, top: position.top }}></div>
}