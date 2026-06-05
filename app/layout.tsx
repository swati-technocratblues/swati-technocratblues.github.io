import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import SmoothScrolling from "./components/SmoothScrolling"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Swati Goel | Founder & Architect",
  description:
    "Portfolio website of Swati Goel showcasing expertise in software architecture, enterprise systems, Android engineering, cloud infrastructure, and scalable digital solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full bg-[#030303] text-white overflow-x-hidden">

        <SmoothScrolling>
          {children}
        </SmoothScrolling>

      </body>

    </html>
  )
}