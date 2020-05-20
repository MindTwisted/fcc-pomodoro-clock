import React from 'react'

type ClockCountdownProps = {
  intervalName: 'Session' | 'Break'
  initialTime: number
  timeLeft: number
}

const ClockCountdown: React.FC<ClockCountdownProps> = ({
  intervalName,
  initialTime,
  timeLeft
}: ClockCountdownProps) => {
  const appendZero = (value: number): string => String(value).length === 1 ? `0${value}` : String(value)
  const formatTime = (time: number): string => {
    const seconds = time % 60
    const minutes = (time - seconds) / 60

    return `${appendZero(minutes)}:${appendZero(seconds)}`
  }

  return (
    <div className={`rounded-full bg-${intervalName === 'Session' ? 'red' : 'green'}-400 w-64 h-64 my-8 mx-auto shadow-lg overflow-hidden relative`}>
      <div className='min-w-full min-h-full bg-white absolute left-0'
        style={{ top: `${-100 * (timeLeft / initialTime)}%` }}
      />
      <div className='min-w-full min-h-full flex items-center justify-center relative'>
        <div className='text-gray-800 text-2xl text-center'>
          <span className='font-semibold'
            id='timer-label'>{intervalName}</span>
          <div className='text-5xl font-medium'
            id='time-left'>{formatTime(timeLeft)}</div>
        </div>
      </div>
    </div>
  )
}

export default ClockCountdown
