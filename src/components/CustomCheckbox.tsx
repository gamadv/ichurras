import React from 'react'

export type CheckboxProps = {
  activeBackground?: string
  borderColor?: string
  isChecked?: boolean
  tickColor?: string
  onChange?: () => void
}

export const CustomCheckbox = (props: CheckboxProps) => {
  const {
    activeBackground = '#FFD836',
    borderColor = '#FFD836',
    isChecked = false,
    onChange,
  } = props

  return (
    <div
      className={`relative flex items-center justify-center w-6 h-6 border-[3px] border-[#FFD836] rounded-full ${
        isChecked ? `bg-${activeBackground} border-${borderColor}` : ''
      } cursor-pointer`}
      onClick={onChange}
    >
      {isChecked && (
        <span className='bg-[#FFD836] w-6 h-6 rounded-full'/>
      )}
    </div>
  )
}
