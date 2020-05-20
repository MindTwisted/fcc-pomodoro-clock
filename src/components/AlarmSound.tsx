import React, { useEffect, useRef } from 'react'
// @ts-ignore
import BeepSound from '../assets/BeepSound.wav'
import EventBus from '../utils/EventBus'

const AlarmSound = () => {
  const audioEl = useRef<HTMLAudioElement | null>(null)
  const play = () => {
    const currentAudioEl = audioEl.current

    if (!currentAudioEl) {
      return
    }

    currentAudioEl.play()
  }
  const stop = () => {
    const currentAudioEl = audioEl.current

    if (!currentAudioEl) {
      return
    }

    currentAudioEl.pause()
    currentAudioEl.currentTime = 0
  }

  useEffect(() => {
    const removeStartAlarmListener = EventBus.on('startAlarm', play)
    const removeStopAlarmListener = EventBus.on('stopAlarm', stop)

    return () => {
      removeStartAlarmListener()
      removeStopAlarmListener()
    }
  }, [])

  return (
    <audio id='beep'
      ref={audioEl}
      src={BeepSound}
    />
  )
}

export default AlarmSound
