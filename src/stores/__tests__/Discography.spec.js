import { setActivePinia, createPinia } from 'pinia'
import { useDiscographyStore } from '@/stores/Discography'
import { beforeEach, describe, it, expect } from 'vitest'

describe('Discography Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('retrieves the number of releases', () => {
    const store = useDiscographyStore()
    expect(store.releases.length).toBe(0)

    store.fetchReleases().then(() => {
      expect(store.releases.length).toBe(6)
    })
  })
})
