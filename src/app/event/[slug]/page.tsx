'use client'
import { TEventCard, TPeopleToContribute } from '@/app/agenda/EventCard'
import { CustomCheckbox } from '@/components/CustomCheckbox'
import { BudgetIcon, PeopleIcon } from '@/components/icons'
import { formatCurrencyToBRL } from '@/utils/formatters'
import { useEffect, useState } from 'react'

type TEvent = {
  params: {
    slug: string
  }
}

export default function Event(props: TEvent) {
  const { params } = props

  const parseSlug = Number(params.slug) - 1

  const [eventData, setEventData] = useState<TEventCard[]>([])

  const [items, setItems] = useState<TPeopleToContribute[] | undefined>(
    eventData[parseSlug]?.peopleList,
  )

  const totalBudget = items?.reduce((total, item) => {
    if (!item.havePaid) {
      total += item.amount
    }
    return total
  }, 0)

  function handleCheckboxChange(id: number) {
    setItems((prevItems) => {
      const updatedItems = prevItems?.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            havePaid: !item.havePaid,
          };
        }
        return item;
      });
      const updatedEventData = eventData.map((event, index) => {
        if (index === parseSlug) {
          return {
            ...event,
            peopleList: updatedItems || [],
          };
        }
        return event;
      });
      localStorage.setItem('EVENTSDATA', JSON.stringify(updatedEventData));
      return updatedItems;
    });
  }

  useEffect(() => {
    const storedEventData = localStorage.getItem('EVENTSDATA')

    if (storedEventData) {
      const parseStoredEventData = JSON.parse(storedEventData)
      setEventData(parseStoredEventData)
      setItems(parseStoredEventData[parseSlug].peopleList)
    }
  }, [])

  return (
    <main className='w-full flex flex-wrap h-full max-h-[calc(80%-8vh)] px-6'>
      <section className='p-6 w-full bg-[#FFF] -mt-9 flex flex-col h-full  overflow-auto'>
        <div className='flex items-center justify-between '>
          <span className='font-extrabold text-[28px]'>{`${eventData[parseSlug]?.date}`}</span>
          <span className='flex items-center gap-4 min-w-[100px] text-xl'>
            <PeopleIcon /> {eventData[parseSlug]?.peopleList?.length}
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <p className='font-extrabold text-[#000000CC] text-4xl'>
            {eventData[parseSlug]?.title}
          </p>
          <span className='flex items-center gap-4 min-w-[100px] text-xl'>
            <BudgetIcon /> {formatCurrencyToBRL(totalBudget || 0)}
          </span>
        </div>
        {items && items.length > 0 && (
          <ul className='mt-8 gap-4'>
            {items?.map((item) => (
              <li
                key={item.id}
                className='w-full flex justify-between border-b-[1px] border-[#E5C231] pb-2 mb-4 z-[100]'
              >
                <div className='flex items-center gap-4 text-'>
                  <CustomCheckbox
                    isChecked={item.havePaid}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <strong>{item.name}</strong>
                </div>
                <strong className={item.havePaid ? 'line-through' : ''}>
                  {formatCurrencyToBRL(item.amount)}
                </strong>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
