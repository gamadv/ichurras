import { BudgetIcon, PeopleIcon } from '@/components/icons'
import { formatCurrencyToBRL } from '@/utils/formatters'
import { useRouter } from 'next/navigation'

export type TPeopleToContribute = {
  id: number
  havePaid: boolean
  name: string
  amount: number
}

export type TEventCard = {
  id: string
  date?: string | Date
  title?: string,
  peopleList?: TPeopleToContribute[]
}

type EventCardProps = {
  event: TEventCard
}

export function EventCard(props: EventCardProps) {
  const { id, date, title = 'Sem Motivo', peopleList } = props.event

  const peopleCount = peopleList?.length

  const totalBudget = peopleList?.reduce((total, item) => {
    if (!item.havePaid) {
      total += item.amount
    }
    return total
  }, 0)

  const history = useRouter()
  const parseDate = `${date}`

  function handleSelectEvent(id: string) {
    history.push(`/event/${id}`)
  }

  return (
    <article
      className='flex flex-col justify-between h-auto bg-white shadow-iChurras_cardShadow w-full min-w-[282px] min-h-[192px] p-8 cursor-pointer'
      onClick={() => handleSelectEvent(id)}
    >
      <header>
        <span className='font-extrabold text-[28px]'>{parseDate}</span>
        <p className='font-extrabold text-[#000000CC] text-xl'>{title}</p>
      </header>
      <section className="flex items-center justify-between">
        <span className='flex items-center gap-4'>
          <PeopleIcon /> {peopleCount}
        </span>
        <span className='flex items-center gap-4'>
          <BudgetIcon /> {formatCurrencyToBRL(totalBudget || 0)}
        </span>
      </section>
    </article>
  )
}
