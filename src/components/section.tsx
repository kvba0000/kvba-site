"use client"

import styles from "@/styles/section.module.css"

type Props = {
    title?: string,
    children?: React.ReactNode
}

const titleToId = (title: string) => title.replace(/[^a-zA-Z0-9-_]/g, "")

export default function Section({ title = "", children }: Props) {
    title = title.trim()
    const id = `section-${titleToId(title)}`

    return (
        <div className="flex flex-col justify-center text-center w-2/3 m-14">
            <h2 id={id} className={"text-2xl font-bold mb-7 " + styles.separator}>{title.length > 0 && <a href={`#${id}`} title={title}> {title} </a>}</h2>
            {children}
        </div>
    )
}