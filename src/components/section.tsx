"use client"

import Link from "next/link"
import { useLayoutEffect, useState } from "react"


const MAX_LENGTHS = {
    none: 0,
    small: 20,
    medium: 30,
    large: 40
}
const DEFAULT_MAX_LENGTH = MAX_LENGTHS.small

const SEPARATOR_STRING = "-"

type Props = {
    title?: string,
    children?: React.ReactNode
}

export default function Section({ title = "", children }: Props) {
    const [maxLength, setMaxLength] = useState(DEFAULT_MAX_LENGTH)

    useLayoutEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            if (width < 650) setMaxLength(MAX_LENGTHS.none)
            else if (width < 900) setMaxLength(MAX_LENGTHS.small)
            else if (width < 1100) setMaxLength(MAX_LENGTHS.medium)
            else setMaxLength(MAX_LENGTHS.large)
        }
        handleResize()

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    title = title.trim()

    const titleString = (title.length > 0 ? ` ${title} ` : "")
    const textLength = titleString.length >= maxLength ? 0 : maxLength - titleString.length
    const separator = SEPARATOR_STRING.repeat(textLength/2)
    const id = title.length > 0 ? `section-${title.replaceAll(" ", "-")}` : undefined

    return (
        <div className="flex flex-col justify-center text-center w-2/3 m-14">
            <h2 id={id} className="text-2xl font-bold mb-7">{separator}{title.length > 0 && <Link href={`#${id}`} title={title}>{titleString}</Link>}{separator}</h2>
            {children}
        </div>
    )
}