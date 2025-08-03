import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SNOOK - The Royal Cat Token on Base Network",
  description:
    "SNOOK - The coolest cat in the crypto jungle! Built on Base Network and available on Ape Store. Join the royal revolution and rule your way to success!",
  keywords: "SNOOK, meme token, Base Network, cryptocurrency, royal cat, DeFi, Ape Store",
  authors: [{ name: "SNOOK Team" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "SNOOK - The Royal Cat Token",
    description: "The coolest cat in the crypto jungle! Built on Base Network.",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 512,
        height: 512,
        alt: "SNOOK Royal Cat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNOOK - The Royal Cat Token",
    description: "The coolest cat in the crypto jungle! Built on Base Network.",
    images: ["/favicon.ico"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
