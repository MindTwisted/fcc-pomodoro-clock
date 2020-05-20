import React from 'react'
import usePomodoroClockState from '../hooks/usePomodoroClockState'
import MinutesPicker from './MinutesPicker'

const PomodoroClock = () => {
  const { state, actions } = usePomodoroClockState()

  return (
    <div className='w-full max-w-2xl rounded overflow-hidden shadow-xl'>
      <div className='px-6 py-4'>
        <div className='font-bold text-3xl text-center mb-4'>Pomodoro clock</div>
        <div className='flex justify-around'>
          <div className='w-40'>
            <div className='text-center text-gray-700 text-xl'
              id='break-label'>
              Break Length
            </div>
            <MinutesPicker
              minutes={state.settings.breakLength}
              decrementButtonId='break-decrement'
              minutesViewerId='break-length'
              incrementButtonId='break-increment'
              incrementMinutes={actions.incrementBreakLength}
              decrementMinutes={actions.decrementBreakLength} />
          </div>
          <div className='w-40'>
            <div className='text-center text-gray-700 text-xl'
              id='session-label'>
              Session Length
            </div>
            <MinutesPicker
              minutes={state.settings.sessionLength}
              decrementButtonId='session-decrement'
              minutesViewerId='session-length'
              incrementButtonId='session-increment'
              incrementMinutes={actions.incrementSessionLength}
              decrementMinutes={actions.decrementSessionLength} />
          </div>
        </div>
        <div className='rounded-full bg-red-400 w-64 h-64 my-8 mx-auto shadow-lg overflow-hidden relative'>
          <div className='min-w-full min-h-full bg-white absolute left-0' style={{ top: '-85%' }} />
          <div className='min-w-full min-h-full flex items-center justify-center'>
            <div className='text-gray-800 text-2xl text-center'>
              <span className='font-semibold'
                id='timer-label'>Session</span>
              <div className='text-5xl font-medium'
                id='time-left'>25:00</div>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'
            id='start_stop'>
            Start
          </button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m2'
            id='reset'>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default PomodoroClock
