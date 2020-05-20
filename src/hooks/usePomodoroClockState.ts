import { useEffect, useReducer } from 'react'
import produce from 'immer'
import { PomodoroClockActions } from '../types/actions'
import {
  CLOCK_TICK,
  DECREMENT_BREAK_LENGTH,
  DECREMENT_SESSION_LENGTH,
  INCREMENT_BREAK_LENGTH,
  INCREMENT_SESSION_LENGTH,
  START_CLOCK,
  STOP_CLOCK
} from '../types/actionTypes'

type PomodoroClockState = {
  settings: {
    breakLength: number
    sessionLength: number
  }
  currentIntervalSettings: {
    name: 'Session' | 'Break'
    initialTime: number
    timeLeft: number
    isRunning: boolean
    isAlarm: boolean
  }
}

const defaultBreakLength = 5
const defaultSessionLength = 25
const pomodoroClockInitialState: PomodoroClockState = {
  settings: {
    breakLength: defaultBreakLength,
    sessionLength: defaultSessionLength
  },
  currentIntervalSettings: {
    name: 'Session',
    initialTime: defaultSessionLength * 60,
    timeLeft: defaultSessionLength * 60,
    isRunning: false,
    isAlarm: false
  }
}

const pomodoroClockReducer = produce((draft: PomodoroClockState, action: PomodoroClockActions) => {
  switch (action.type) {
    case INCREMENT_BREAK_LENGTH:
      {
        const nextLength = draft.settings.breakLength + 1 > 60 ? 1 : draft.settings.breakLength + 1

        draft.settings.breakLength = nextLength

        if (draft.currentIntervalSettings.name === 'Break') {
          draft.currentIntervalSettings.initialTime = nextLength * 60
          draft.currentIntervalSettings.timeLeft = nextLength * 60
        }
      }

      break
    case DECREMENT_BREAK_LENGTH:
      {
        const nextLength = draft.settings.breakLength - 1 < 1 ? 60 : draft.settings.breakLength - 1

        draft.settings.breakLength = nextLength

        if (draft.currentIntervalSettings.name === 'Break') {
          draft.currentIntervalSettings.initialTime = nextLength * 60
          draft.currentIntervalSettings.timeLeft = nextLength * 60
        }
      }

      break
    case INCREMENT_SESSION_LENGTH:
      {
        const nextLength = draft.settings.sessionLength + 1 > 60 ? 1 : draft.settings.sessionLength + 1

        draft.settings.sessionLength = nextLength

        if (draft.currentIntervalSettings.name === 'Session') {
          draft.currentIntervalSettings.initialTime = nextLength * 60
          draft.currentIntervalSettings.timeLeft = nextLength * 60
        }
      }

      break
    case DECREMENT_SESSION_LENGTH:
      {
        const nextLength = draft.settings.sessionLength - 1 < 1 ? 60 : draft.settings.sessionLength - 1

        draft.settings.sessionLength = nextLength

        if (draft.currentIntervalSettings.name === 'Session') {
          draft.currentIntervalSettings.initialTime = nextLength * 60
          draft.currentIntervalSettings.timeLeft = nextLength * 60
        }
      }

      break
    case START_CLOCK:
      draft.currentIntervalSettings.isRunning = true

      break

    case STOP_CLOCK:
      draft.currentIntervalSettings.isRunning = false

      break
    case CLOCK_TICK:
      {
        const nextTimeLeft = draft.currentIntervalSettings.timeLeft - 1

        if (nextTimeLeft > 0) {
          draft.currentIntervalSettings.timeLeft = nextTimeLeft

          break
        }

        const nextIntervalName = draft.currentIntervalSettings.name === 'Session' ? 'Break' : 'Session'
        const nextTime = nextIntervalName === 'Session' ? draft.settings.sessionLength * 60 : draft.settings.breakLength * 60

        draft.currentIntervalSettings.name = nextIntervalName
        draft.currentIntervalSettings.initialTime = nextTime
        draft.currentIntervalSettings.timeLeft = nextTime
        draft.currentIntervalSettings.isAlarm = true
      }

      break
  }
})

let timerId: number | null = null

export default function usePomodoroClockState (initialState: PomodoroClockState = pomodoroClockInitialState) {
  const [state, dispatch] = useReducer(pomodoroClockReducer, initialState)
  const isRunning = state.currentIntervalSettings.isRunning

  useEffect(() => {
    if (isRunning) {
      timerId = window.setInterval(() => {
        dispatch({
          type: CLOCK_TICK
        })
      }, 1000)
    } else {
      if (timerId) {
        clearInterval(timerId)
      }
    }
  }, [isRunning])

  const incrementBreakLength = () => {
    dispatch({
      type: INCREMENT_BREAK_LENGTH
    })
  }

  const decrementBreakLength = () => {
    dispatch({
      type: DECREMENT_BREAK_LENGTH
    })
  }

  const incrementSessionLength = () => {
    dispatch({
      type: INCREMENT_SESSION_LENGTH
    })
  }

  const decrementSessionLength = () => {
    dispatch({
      type: DECREMENT_SESSION_LENGTH
    })
  }

  const startClock = () => {
    dispatch({
      type: START_CLOCK
    })
  }

  const stopClock = () => {
    dispatch({
      type: STOP_CLOCK
    })
  }

  const actions = {
    incrementBreakLength,
    decrementBreakLength,
    incrementSessionLength,
    decrementSessionLength,
    startClock,
    stopClock
  }

  return {
    state,
    actions
  }
}
