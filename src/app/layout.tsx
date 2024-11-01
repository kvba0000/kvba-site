import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "kvba | meowpa.ws",
    template: "%s | meowpa.ws"
  },
  description: "Welcome on my (kvba) personal website with various informations about me and projects! I hope you'll stay for longer by following me on other platforms!",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
