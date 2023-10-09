'use client'
import { GrillIcon } from '@/components/icons'
import { EventCard, TEventCard } from './EventCard'
import { useEffect, useState } from 'react'

export default function Agenda() {
  const [eventData, setEventData] = useState<TEventCard[]>([])

  useEffect(() => {
    const storedEventData = localStorage.getItem('EVENTSDATA')

    if (storedEventData) {
      setEventData(JSON.parse(storedEventData))
    }
  }, [])

  return (
    <main className='bg-[#FAFAFA] flex flex-wrap h-full max-h-[calc(80%-5vh)] px-6'>
      {eventData.length > 0 && (
        <ul className='-mt-9 flex flex-wrap justify-center h-full max-h-[500px] overflow-auto'>
          {eventData.map((event) => (
            <li key={event.id} className='mb-6 h-fit ml-4  '>
              <EventCard event={event} />
            </li>
          ))}
          <button className='flex flex-col items-center h-auto bg-[#F1F1F1] ml-4  shadow-iChurras_cardShadow min-w-[282px] max-h-[192px] p-6 cursor-pointer font-bold text-[21px]'>
            <span className='bg-[#FFD836] w-[90px] h-[90px] rounded-full p-[23px] mb-2'>
              <GrillIcon />
            </span>
            Adicionar Churras
          </button>
        </ul>
      )}
    </main>
  )
}
