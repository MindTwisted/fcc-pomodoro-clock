import React from 'react'
import usePomodoroClockState from '../hooks/usePomodoroClockState'
import MinutesPicker from './MinutesPicker'
import ClockCountdown from './ClockCountdown'

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
              isActive={!state.currentIntervalSettings.isRunning}
              incrementMinutes={actions.incrementBreakLength}
              decrementMinutes={actions.decrementBreakLength}
            />
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
              isActive={!state.currentIntervalSettings.isRunning}
              incrementMinutes={actions.incrementSessionLength}
              decrementMinutes={actions.decrementSessionLength}
            />
          </div>
        </div>

        <ClockCountdown
          intervalName={state.currentIntervalSettings.name}
          initialTime={state.currentIntervalSettings.initialTime}
          timeLeft={state.currentIntervalSettings.timeLeft}
        />

        <div className='text-center'>
          {state.currentIntervalSettings.isRunning ? (
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2'
              id='start_stop'
              onClick={actions.stopClock}>
                Stop
            </button>
          ) : (
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'
              id='start_stop'
              onClick={actions.startClock}>
                Start
            </button>
          )
          }
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
