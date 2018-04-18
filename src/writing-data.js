import _ from 'lodash'
import moment from 'moment'
import shortid from 'shortid'
import fbUrl from './assets/writing/FacebookAds.pdf'
import ppUrl from './assets/writing/NBPublishingPitfalls.pdf'

const writing = [
  {
    name: 'Fail More',
    url: 'https://medium.com/javascript-scene/fail-more-6e7719048618',
    created: moment('03/05/17', 'MM-DD-YYYY')
  },
  {
    name: 'Lessons From Building Express APIs',
    url: 'http://devstory.mikecornish.me/posts/appendix-a/',
    created: moment('10/17/2016', 'MM-DD-YYYY')
  },
  {
    name: 'Remembering How to Be a Web Developer',
    url: 'http://devstory.mikecornish.me/posts/chapter-5/',
    created: moment('09/05/2016', 'MM-DD-YYYY')
  },
  {
    name: 'How to Use Facebook Ads to Drive Sales for Your Business',
    url: fbUrl,
    created: moment('06/22/2016', 'MM-DD-YYYY')
  },
  {
    name: 'Authors: Avoid These 4 Publishing Pitfalls',
    url: ppUrl,
    created: moment('06/22/2016', 'MM-DD-YYYY')
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
