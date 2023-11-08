import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Home from '../HomePage.vue'

describe('Home.vue', () => {
  it('ensures the home page is rendered containing key sections', () => {
    const wrapper = mount(Home)

    expect(wrapper.find('.home').exists()).toBeTruthy()
    expect(wrapper.find('.home > h2').exists()).toBeTruthy()
    expect(wrapper.find('.home > .band-logo').exists()).toBeTruthy()
    expect(wrapper.find('.home > .band-logo img').exists()).toBeTruthy()
    expect(wrapper.find('.home > .home-content').exists()).toBeTruthy()
  })
})
