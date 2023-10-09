import type { Metadata } from 'next'

import { Raleway } from 'next/font/google'

import { TrincaLogo } from '@/components/icons'
import Link from 'next/link'

import './globals.css'
const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'iChurras | App',
  description: 'A simpe Agenda for your Churras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={raleway.className}>
        <header
          className='flex items-center justify-center w-full h-[203px]'
          style={{ backgroundImage: 'url("/bg.png")' }}
        >
          <h1 className='flex gap-4 text-[2rem] font-extrabold text-black cursor-pointer'>
            <Link href='/'>Agenda de Churras</Link>
          </h1>
        </header>
        {children}
        <footer className='fixed bottom-0 flex items-center w-full justify-center mt-auto mb-4'>
          <TrincaLogo />
        </footer>
      </body>
    </html>
  )
}
