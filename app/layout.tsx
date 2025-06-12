import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RJC',
  description: 'Created and Designed by Uddheshya Studio',
  generator: 'react',
  icons:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Rohit_J_Chettri.jpg/1200px-Rohit_J_Chettri.jpg'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
