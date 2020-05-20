import {
  DECREMENT_BREAK_LENGTH,
  DECREMENT_SESSION_LENGTH,
  INCREMENT_BREAK_LENGTH,
  INCREMENT_SESSION_LENGTH
} from './actionTypes'

type IncrementBreakLengthAction = {
  type: typeof INCREMENT_BREAK_LENGTH
}

type DecrementBreakLengthAction = {
  type: typeof DECREMENT_BREAK_LENGTH
}

type IncrementSessionLengthAction = {
  type: typeof INCREMENT_SESSION_LENGTH
}

type DecrementSessionLengthAction = {
  type: typeof DECREMENT_SESSION_LENGTH
}

export type PomodoroClockActions = IncrementBreakLengthAction |
DecrementBreakLengthAction |
IncrementSessionLengthAction |
DecrementSessionLengthAction
