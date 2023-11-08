import { setActivePinia, createPinia } from 'pinia'
import { useEventsStore } from '@/stores/Events'
import { beforeEach, describe, it, expect } from 'vitest'

describe('Events Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('retrieves the number of events', () => {
    const store = useEventsStore()
    expect(store.events.length).toBe(0)

    store.fetchEvents().then(() => {
      expect(store.events.length).toBe(6)
    })
  })
})
