import type { Metadata } from 'next'
import { Inter, Open_Sans, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const opensans = Open_Sans({subsets: ['latin']})
const souce_sans = Source_Sans_3({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Quick Pay',
  description: 'A Landing page for quick pay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  )
}
