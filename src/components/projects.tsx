import styles from "@/styles/projects.module.css"
import { normalizeString } from "@/utils"

import Link from "next/link"

const PROJECTS: string[] = [
  "VencordPlugins",
  "bunny-plugins",
  "gif-validator",
  "rust-discord-bot"
]

export default function Projects() {    
    if (PROJECTS.length === 0) return <span>No projects found... :(</span>
    
    return PROJECTS.map((name, i) => <span key={`project-${i}`} className={"my-3 text-pink-600 hover:text-amber-400 break-all " + styles.featuredProject}><Link href={`https://github.com/kvba0000/${name}`} target="_blank" title={`Visit repo ${name}`}>{normalizeString(name)}</Link></span>)
}