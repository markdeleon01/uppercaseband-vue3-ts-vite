import { mount } from '@vue/test-utils'
import { describe, it, expect, vitest } from 'vitest'
import Events from '../EventsPage.vue'
import { createTestingPinia } from '@pinia/testing'
import { useEventsStore } from '@/stores/Events'

describe('Events.vue', () => {
  it('ensures the Events page is rendered containing key sections', () => {
    const wrapper = mount(Events, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
            initialState: {
              events: {
                events: []
              }
            },
            stubActions: false
          })
        ]
      }
    })

    expect(wrapper.find('.events').exists()).to.equal(true)

    const store = useEventsStore()

    store.events = []
    store.$patch({ events: [] })

    store.fetchEvents().then(() => {
      expect(store.fetchEvents).toHaveBeenCalledTimes(1)
      expect(store.fetchEvents).toHaveBeenLastCalledWith()
      expect(store.events).to.have.lengthOf(6)

      expect(wrapper.findAll('.event-item')).to.have.lengthOf(6)
      expect(wrapper.findAll('.event-item > a')).to.have.lengthOf(6)
    })
  })
})
