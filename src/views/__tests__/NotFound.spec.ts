import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NotFound from '../NotFound.vue'

describe('NotFound.vue', () => {
  it('ensures the NotFound page is rendered containing key sections', () => {
    const section = 'section'
    const wrapper = shallowMount(NotFound, {
      props: {
        resource: section
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.find('.not-found').exists()).to.equal(true)
    expect(wrapper.find('h1').exists()).to.equal(true)
    expect(wrapper.find('h3').exists()).to.equal(true)
    expect(wrapper.find('h3').text()).toContain(section)
    expect(wrapper.find('.back').exists()).to.equal(true)
  })
})
