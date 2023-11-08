import { setActivePinia, createPinia } from 'pinia'
import { useMembersStore } from '@/stores/Members'
import { beforeEach, describe, it, expect } from 'vitest'

describe('Members Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked up by any use..Store() call without having to pass it to it:  `use..Store(pinia)`
    setActivePinia(createPinia())
  })

  it('retrieves the number of members', () => {
    const store = useMembersStore()
    expect(store.members.length).toBe(0)

    store.fetchMembers().then(() => {
      expect(store.members.length).toBe(4)
      store.$reset()
      expect(store.members.length).toBe(0)
      store.$patch([
        {
          name: 'Mark de Leon',
          role: 'vocals, guitars',
          'image-url': 'mark-deleon.png'
        },
        {
          name: 'Allan Lagat',
          role: 'bass',
          'image-url': 'allan-lagat.png'
        },
        {
          name: 'Joey Giagonia',
          role: 'lead guitars',
          'image-url': 'joey-giagonia.png'
        },
        {
          name: 'Kyle Saliva',
          role: 'drums',
          'image-url': 'kyle-saliva.png'
        }
      ])
      expect(store.members.length).toBe(4)
    })
  })
})
