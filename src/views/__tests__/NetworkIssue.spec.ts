import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NetworkIssue from '../NetworkIssue.vue'

describe('NetworkIssue.vue', () => {
  it('ensures the NetworkIssue page is rendered containing key sections', () => {
    const wrapper = shallowMount(NetworkIssue, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.find('.network-issue').exists()).to.equal(true)
    expect(wrapper.find('h1').exists()).to.equal(true)
    expect(wrapper.find('h3').exists()).to.equal(true)
    expect(wrapper.find('h3').text()).toContain('Unable to retrieve page content.')
    expect(wrapper.find('.back').exists()).to.equal(true)
  })
})
