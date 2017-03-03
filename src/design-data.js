import _ from 'lodash'
import shortid from 'shortid'
import missImg from './assets/designs/miss-2017.jpg'
import failImg from './assets/designs/fail-instagram.jpg'
import heartImg from './assets/designs/binary-heart-ig.jpg'
import quitImg from './assets/designs/mondaymotivation-insta.png'
import runImg from './assets/designs/make-it-run-insta.jpg'

const designs = [
  {
    'name': 'I Miss 2017',
    'url': missImg,
    'landscape': true,
    'created': new Date('2/19/17')
  },
  {
    'name': 'Fail More',
    'url': failImg,
    'created': new Date('2/13/17')
  },
  {
    'name': 'Binary Heart',
    'url': heartImg,
    'created': new Date('2/7/17')
  },
  {
    'name': 'Make It Run',
    'url': runImg,
    'created': new Date('2/3/17')
  },
  {
    'name': 'Don\'t Quit',
    'url': quitImg,
    'created': new Date('1/30/17')
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

export default designs.sort(dateSort).map(addId)
