'use client'

import { mockEventData } from '@/__mocks__/eventListData'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const hasLogged = localStorage.getItem('HASLOGGED')

    if (hasLogged) {
      router.push('/agenda')
    } else {
      localStorage.setItem('EVENTSDATA', JSON.stringify(mockEventData));
      router.push('/signin')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='flex items-center w-full h-full justify-center'>
      <strong className='text-3xl'>Seja Bem vindo 🍻</strong>{' '}
    </main>
  )
}
