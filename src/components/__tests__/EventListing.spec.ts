import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import EventListing from '../EventListing.vue'

describe('EventListing.vue', () => {
  it('ensures the EventListing component is rendered containing key sections', () => {
    const wrapper = mount(EventListing, {
      props: {
        event: {
          id: '101',
          title: 'Time Space Warp Album Launch',
          location: 'Hard Rock Café Toronto, Canada',
          date: 'May 17 2013',
          imageUrl: 'tsw-album-launch.png',
          content:
            "<p>UPPERCASE launched their debut full-length album '<i>Time Space Warp</i>' at Toronto's legendary Hard Rock Cafe.</p>",
          externalUrl:
            'https://www.youtube.com/watch?v=yNt0JV8or3k&list=PL0AgfLYM2K_sKTvDMqLY4sDr8Pi1zadB0'
        }
      }
    })

    expect(wrapper.findAll('.event-item')).to.have.lengthOf(1)
    expect(wrapper.findAll('.event-title')).to.have.lengthOf(1)
    expect(wrapper.findAll('.event-date')).to.have.lengthOf(1)
    expect(wrapper.findAll('.event-location')).to.have.lengthOf(1)
    expect(wrapper.findAll('.event-content')).to.have.lengthOf(1)
    expect(wrapper.findAll('.event-url')).to.have.lengthOf(1)
  })
})
