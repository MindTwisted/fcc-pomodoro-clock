import {
  CLOCK_TICK,
  DECREMENT_BREAK_LENGTH,
  DECREMENT_SESSION_LENGTH,
  INCREMENT_BREAK_LENGTH,
  INCREMENT_SESSION_LENGTH, RESET_CLOCK,
  START_CLOCK,
  STOP_ALARM,
  STOP_CLOCK
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

type StartClockAction = {
  type: typeof START_CLOCK
}

type StopClockAction = {
  type: typeof STOP_CLOCK
}

type ClockTickAction = {
  type: typeof CLOCK_TICK
}

type StopAlarmAction = {
  type: typeof STOP_ALARM
}

type ResetClockAction = {
  type: typeof RESET_CLOCK
}

export type PomodoroClockActions = IncrementBreakLengthAction |
DecrementBreakLengthAction |
IncrementSessionLengthAction |
DecrementSessionLengthAction |
StartClockAction |
StopClockAction |
ClockTickAction |
StopAlarmAction |
ResetClockAction
