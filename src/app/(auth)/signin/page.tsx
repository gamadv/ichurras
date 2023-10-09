'use client'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function SignIn() {
  const history = useRouter()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    localStorage.setItem('HASLOGGED', 'true')
    history.push('/agenda')
  }
  return (
    <main className='mt-[-6.5rem] w-full h-full flex justify-center bg-iChurras_bg pt-16'>
      <form onSubmit={handleSubmit} className='w-full max-w-[282px] h-fit'>
        <fieldset className='flex flex-col mb-9'>
          <label className='font-bold text-[21px]' htmlFor='email'>
            Login
          </label>
          <input
            className='italic w-full mt-1 pl-5 py-4'
            type='email'
            id='email'
            placeholder='e-mail'
            required
          />
        </fieldset>
        <fieldset className='flex flex-col'>
          <label className='font-bold text-[21px]' htmlFor='password'>
            Senha
          </label>
          <input
            className='italic w-full mt-1 pl-5 py-4'
            type='password'
            placeholder='senha'
            required
          />
        </fieldset>
        <button className='w-full rounded-[18px] bg-black px-[115px] py-[14px] mt-[74px] text-white text-center'>
          Entrar
        </button>
      </form>
    </main>
  )
}
