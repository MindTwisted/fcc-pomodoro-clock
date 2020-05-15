import React from 'react'

function App () {
  return (
    <div className='min-h-screen min-w-full flex items-center justify-center select-none'>
      <div className='w-full max-w-2xl rounded overflow-hidden shadow-xl'>
        <div className='px-6 py-4'>
          <div className='font-bold text-3xl text-center mb-4'>Pomodoro clock</div>
          <div className='flex justify-around'>
            <div className='w-40'>
              <div className='text-center text-gray-700 text-xl'
                id='break-label'>Break Length</div>
              <div className='bg-gray-700 px-2 py-2 rounded flex justify-center items-center'>
                <button className='bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded text-xl'
                  id='break-decrement'>-</button>
                <span className='px-4 font-bold text-white text-2xl'
                  id='break-length'>5</span>
                <button className='bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded text-xl'
                  id='break-increment'>+</button>
              </div>
            </div>
            <div className='w-40'>
              <div className='text-center text-gray-700 text-xl' id='session-label'>Session Length</div>
              <div className='bg-gray-700 px-2 py-2 rounded flex justify-center items-center'>
                <button className='bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded text-xl'
                  id='session-decrement'>-</button>
                <span className='px-4 font-bold text-white text-2xl'
                  id='session-length'>25</span>
                <button className='bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded text-xl'
                  id='session-increment'>+</button>
              </div>
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
    </div>
  )
}

export default App
