"use client";

import styles from "@/styles/logo.module.css"

import { parseFont, textSync } from "figlet"
import font from "figlet/importable-fonts/AMC Neko"

parseFont("AMC Neko", font)
const logoText = textSync("KVBA", { font: "AMC Neko" })
    .split("\n")
    .map(l => l.trim())
    .join("\n")

export default function Logo({ className = "" }: { className?: string }) {
    return <span className={`whitespace-pre text-left ${className} ${styles.biText}`}>{logoText}</span>
}