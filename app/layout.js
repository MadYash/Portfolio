import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '👋 Yash Sharma ',
  description: 'It is a portfolio website simply made by Next.js and tailwind css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
