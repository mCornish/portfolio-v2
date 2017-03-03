import _ from 'lodash'
import shortid from 'shortid'
import fbUrl from './assets/writing/FacebookAds.pdf'
import ppUrl from './assets/writing/NBPublishingPitfalls.pdf'

const writing = [
  {
    'name': 'Lessons From Building Express APIs',
    'url': 'http://www.devstory.mikecornish.net/posts/appendix-a/',
    'created': new Date('10/17/16')
  },
  {
    'name': 'Remembering How to Be a Web Developer',
    'url': 'http://www.devstory.mikecornish.net/posts/chapter-5/',
    'created': new Date('9/5/16')
  },
  {
    'name': 'How to Use Facebook Ads to Drive Sales for Your Business',
    'url': fbUrl,
    'created': new Date('6/22/16')
  },
  {
    'name': 'Authors: Avoid These 4 Publishing Pitfalls',
    'url': ppUrl,
    'created': new Date('6/22/16')
  }
]

// Most recent date gets rendered first
const dateSort = (a, b) => {
  if (a.created < b.created) {
    return 1
  } else if (b.created < a.created) {
    return -1
  } else {
    return 0
  }
}

const addId = design => {
  const id = shortid.generate()
  const newDesign = _.assign(design, {id})
  return newDesign
}

export default writing.sort(dateSort).map(addId)
