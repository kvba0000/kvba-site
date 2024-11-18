import { useEffect, useRef } from "react"

// Using ref instead of state to prefent lags
export default function Cursor() {
    const cursor = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if(!cursor.current) return;
            
            cursor.current.style.left = `${e.clientX}px`
            cursor.current.style.top = `${e.clientY}px`
        }

        document.addEventListener("mousemove", handleMouseMove)
        return () => document.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return <div ref={cursor} className="w-2 h-4 backdrop-invert fixed pointer-events-none select-none z-[999]"></div>
}