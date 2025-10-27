import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { headers } from "next/headers"

import "./globals.css"
import Navbar from "@/components/navbar"
import { Footer } from "react-day-picker"
import Providers from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TESSERACT - Digital Transformation & AI Consulting",
  description: "Strategic consulting, digital transformation, software development, AI solutions, recruitment and training services.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const hideLayout = headersList.get('x-hide-layout') === 'true'

  console.log('Hide layout:', hideLayout)

  if (hideLayout) {
    return (
      <html lang="en" className="dark" suppressHydrationWarning>
        <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    )
  }

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="pt-20 flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}