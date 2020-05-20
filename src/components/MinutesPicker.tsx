import React from 'react'

type MinutesPickerProps = {
  minutes: number
  decrementButtonId: string
  minutesViewerId: string
  incrementButtonId: string
  isActive: boolean
  incrementMinutes: () => void
  decrementMinutes: () => void
}

const MinutesPicker: React.FC<MinutesPickerProps> = ({
  minutes,
  decrementButtonId,
  minutesViewerId,
  incrementButtonId,
  isActive,
  incrementMinutes,
  decrementMinutes
}: MinutesPickerProps) => {
  return (
    <div className='bg-gray-700 px-2 py-2 rounded flex justify-center items-center'>
      <button className='bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded text-xl'
        id={decrementButtonId}
        onClick={() => decrementMinutes()}
        disabled={!isActive}>
          -
      </button>
      <span className='px-4 font-bold text-white text-2xl'
        id={minutesViewerId}>
        {minutes}
      </span>
      <button className='bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded text-xl'
        id={incrementButtonId}
        onClick={() => incrementMinutes()}
        disabled={!isActive}>
          +
      </button>
    </div>
  )
}

export default MinutesPicker
