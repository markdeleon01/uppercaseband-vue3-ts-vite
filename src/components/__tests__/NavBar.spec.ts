import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NavBar from '../NavBar.vue'

describe('NavBar.vue', () => {
  it('ensures the nav bar is rendered containing key sections', async () => {
    const wrapper = shallowMount(NavBar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.find('nav').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="home"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="about"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="discography"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="events"]').exists()).toBeTruthy()
  })
})
