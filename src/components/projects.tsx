"use client"

import styles from "@/styles/projects.module.css"
import { normalizeString } from "@/utils"

import { getPinnedProjects } from "@/utilsServer"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Projects() {
    const [projects, setProjects] = useState<string[] | null>(null)

    useEffect(() => {
        const fetchProjects = async () => {
          const p = await getPinnedProjects(5)
          setProjects(p)
        }
    
        fetchProjects()
      }, [])

    if (!projects) return <span>Loading...</span>
    if (projects.length === 0) return <span>No projects found... :(</span>
    
    return projects?.map((p, i) => <span key={i} className={"my-3 text-pink-600 hover:text-amber-400 break-all " + styles.featuredProject}><Link href={`https://github.com/kvba0000/${p}`} target="_blank" title={`Visit repo ${p}`}>{normalizeString(p)}</Link></span>)
}