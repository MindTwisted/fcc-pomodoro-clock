import { useReducer } from 'react'
import produce from 'immer'
import { PomodoroClockActions } from '../types/actions'
import {
  DECREMENT_BREAK_LENGTH,
  INCREMENT_BREAK_LENGTH,
  INCREMENT_SESSION_LENGTH,
  DECREMENT_SESSION_LENGTH
} from '../types/actionTypes'

type PomodoroClockState = {
  settings: {
    breakLength: number
    sessionLength: number
  }
}

const pomodoroClockInitialState: PomodoroClockState = {
  settings: {
    breakLength: 5,
    sessionLength: 25
  }
}

const pomodoroClockReducer = produce((draft: PomodoroClockState, action: PomodoroClockActions) => {
  switch (action.type) {
    case INCREMENT_BREAK_LENGTH:
      draft.settings.breakLength = draft.settings.breakLength + 1 > 60 ? 1 : draft.settings.breakLength + 1

      break
    case DECREMENT_BREAK_LENGTH:
      draft.settings.breakLength = draft.settings.breakLength - 1 < 1 ? 60 : draft.settings.breakLength - 1

      break
    case INCREMENT_SESSION_LENGTH:
      draft.settings.sessionLength = draft.settings.sessionLength + 1 > 60 ? 1 : draft.settings.sessionLength + 1

      break
    case DECREMENT_SESSION_LENGTH:
      draft.settings.sessionLength = draft.settings.sessionLength - 1 < 1 ? 60 : draft.settings.sessionLength - 1

      break
  }
})

export default function usePomodoroClockState (initialState: PomodoroClockState = pomodoroClockInitialState) {
  const [state, dispatch] = useReducer(pomodoroClockReducer, initialState)

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

  const actions = {
    incrementBreakLength,
    decrementBreakLength,
    incrementSessionLength,
    decrementSessionLength
  }

  return {
    state,
    actions
  }
}
