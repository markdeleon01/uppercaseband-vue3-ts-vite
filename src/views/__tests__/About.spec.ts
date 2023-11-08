import { mount } from '@vue/test-utils'
import { describe, it, expect, vitest } from 'vitest'
import About from '../AboutPage.vue'
import { createTestingPinia } from '@pinia/testing'
// import any store you want to interact with in tests
import { useMembersStore } from '../../stores/Members'

describe('About.vue', () => {
  it('ensures the About page is rendered containing key sections', () => {
    const wrapper = mount(About, {
      global: {
        plugins: [
          createTestingPinia({
            //When using Jest, or vitest with globals: true, createTestingPinia automatically stubs actions using the spy function based on the existing test framework (jest.fn or vitest.fn). If you are using a different framework, you'll need to provide a createSpy option.
            createSpy: vitest.fn,

            //set the initial state of all of your stores when creating a testing pinia by passing an initialState object
            initialState: {
              // use the unique id of the store
              members: {
                members: []
              }
            },
            //createTestingPinia stubs out all store actions unless told otherwise. This allows you to test your components and stores separately.
            stubActions: false
          })
        ]
      }
    })

    expect(wrapper.find('.about').exists()).to.equal(true)

    const store = useMembersStore() // uses the testing pinia!

    // state can be directly manipulated
    store.members = []
    // can also be done through patch
    store.$patch({ members: [] })

    expect(wrapper.findAll('.member-item')).to.have.lengthOf(0)

    // actions are stubbed by default, meaning they don't execute their code by default.
    // specify stubActions: false to normally execute your actions during tests
    store.fetchMembers().then(() => {
      expect(store.fetchMembers).toHaveBeenCalledTimes(1)
      expect(store.fetchMembers).toHaveBeenLastCalledWith()
      expect(store.members).to.have.lengthOf(4)

      // since stubbing was set to false, the action will execute its code
      expect(wrapper.findAll('.member-item')).to.have.lengthOf(4)

      expect(wrapper.find('.band-pic').exists()).to.equal(true)
      expect(wrapper.find('.biography').exists()).to.equal(true)
    })
  })
})
