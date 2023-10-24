import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OG Clothier',
  description: 'We deliver quality and style',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-screen !overflow-x-hidden'>
        {children}
      </body>
    </html>
  )
}
