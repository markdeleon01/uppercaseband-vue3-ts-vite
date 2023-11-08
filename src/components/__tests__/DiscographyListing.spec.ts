import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DiscographyListing from '../DiscographyListing.vue'

describe('DiscographyListing.vue', () => {
  it('ensures the DiscographyListing component is rendered containing key sections', () => {
    const wrapper = mount(DiscographyListing, {
      props: {
        release: {
          title: 'Time Space Warp',
          releaseType: 'ALBUM',
          releaseDate: 'May 17 2013',
          imageUrl: 'timespacewarp_albumcover.png',
          spotifyUrl:
            'https://open.spotify.com/album/42XqkGCyqyjzf4kB0kFdvu?si=tn4ChbihRoy9PIfaSjPyYg'
        }
      }
    })

    expect(wrapper.findAll('.release-thumbnail')).to.have.lengthOf(1)
    expect(wrapper.findAll('.release-title')).to.have.lengthOf(1)
    expect(wrapper.findAll('.release-date')).to.have.lengthOf(1)
    expect(wrapper.findAll('.release-url')).to.have.lengthOf(1)
  })
})
