import { normalizeLink } from "@/utils"
import Link from "next/link"

type Social = {
    name: string,
    /** Optional. Used as a replacement for the link when showing on site */
    value?: string,
    link: string
}

type Socials = { [type in "socials" | "contact"]: Social[] }

const SOCIALS: Socials = {
    "socials": [
        {
            "name": "YouTube",
            "link": "https://youtube.com/@kvba0000"
        },
        {
            "name": "GitHub",
            "link": "https://github.com/kvba0000"
        },
        {
            "name": "Bluesky",
            "link": "https://bsky.app/profile/kuba.lol"
        }
    ],
    "contact": [
        {
            "name": "Email",
            "link": "mailto:hi@kuba.lol"
        },
        {
            "name": "Discord",
            "value": ".kb.",
            "link": "https://discord.gg/users/105170831130234880"
        },
        {
            "name": "Telegram",
            "link": "https://t.me/kvba0000"
        }
    ]
}

function SocialComponent({ name, value, link }: Social) {
    return <div className="flex flex-row justify-between w-full gap-10">
        <span className="font-bold">{name}</span>
        <Link className="hover:underline" href={link} title={`Check out my ${name}!`}>{value ?? normalizeLink(link)}</Link>
    </div>
}

export default function Socials() {
    const { socials, contact } = SOCIALS

    return (
        <div className="flex flex-row items-center justify-between max-lg:flex-col gap-10">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-7">Socials</h2>
                <div className="flex flex-col items-center">
                    {socials.map((s, i) => <SocialComponent key={i} {...s} />)}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-7">Contact</h2>
                <div>
                    {contact.map((s, i) => <SocialComponent key={i} {...s} />)}
                </div>
            </div>
        </div>
    )
}