import uniqid from 'uniqid'

const EventBus: {
  callbacks: any,
  on: Function,
  emit: Function
} = {
  callbacks: {},
  on (event: string, callback: Function): Function {
    if (!this.callbacks[event]) {
      this.callbacks[event] = {}
    }

    const callbackId = uniqid()

    this.callbacks[event][callbackId] = callback

    return () => {
      delete this.callbacks[event][callbackId]
    }
  },
  emit (event: string) {
    if (!this.callbacks[event]) {
      return
    }

    Object.values(this.callbacks[event]).forEach((callback: any) => {
      callback()
    })
  }
}

export default EventBus
