import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Social Media application',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className={`${inter.className} bg-purple-950`}>
      {children}
    </body>
  )
}
