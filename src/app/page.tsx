"use client"
import "@/styles/main.css"

import Cursor from "@/components/cursor";
import Logo from "@/components/logo";
import Projects from "@/components/projects";
import Section from "@/components/section";
import Socials from "@/components/socials";
import { calculateAge } from "@/utils";



export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center text-center py-24 px-5">
        <div className="flex flex-col items-center">
          <Logo className="my-5"/>
          <h1 className="text-3xl">Welcome on my personal website!</h1>
          <span>Here you can find various informations about me and my projects. Enjoy your stay!</span>
        </div>
        <Section title="About me">
          <span>Hi! I&apos;m Kuba! I&apos;m a {calculateAge("2005-05-27")} year old software developer. I passionate in AI, analytics and automation of various stuff. I like to make things that makes other&apos;s life easier or that makes me happy. In the free time I like to experiment with other hobbies like video editing or making music. I&apos;d be more than happy if you could show me support by checking out my projects on GitHub! (and maybe even contribute to them! :D)</span>
        </Section>
        <Section title="Featured Projects">
          <Projects />
        </Section>
        <Section title="Social Media & Contact">
          <Socials />
        </Section>
        <div className="flex flex-col mt-20">
          <div>
            <span>Made with <span className="text-red-500 animate-pulse">&lt;3</span> by kvba</span>
          </div>
        </div>
      </main>

      <Cursor />
    </>
  );
}
