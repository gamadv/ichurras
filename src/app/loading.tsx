import { Spinner } from "@/components/Spinner";

export default function Loading() {
  return (
    <div className='flex items-center w-full h-full justify-center'>
      <Spinner />
    </div>
  )
}
