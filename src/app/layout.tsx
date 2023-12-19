import type { Metadata } from 'next'

import { poppins } from '@/libs/fonts'

import './globals.css'

export const metadata: Metadata = {
  title: 'Dzaki Rozaan',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
