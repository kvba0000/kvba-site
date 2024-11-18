import NikoLook from "#/img/nikolook.webp"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "404"
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <Image priority src={NikoLook} alt="NikoLook" width={100} height={100} />
    </div>
  )
}