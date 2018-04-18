import _ from 'lodash'
import shortid from 'shortid'
import missImg from './assets/designs/miss-2017.jpg'
import failImg from './assets/designs/fail-instagram.jpg'
// import heartImg from './assets/designs/binary-heart-ig.jpg'
// import quitImg from './assets/designs/mondaymotivation-insta.png'
import runImg from './assets/designs/make-it-run-insta.jpg'

const designs = [
  {
    'name': 'I Miss 2017',
    description: `
      <p>In February of 2017, I decided I wanted to try blogging about things other than web development. There was still plenty of for my to write about in the world of JavaScript, but there was also a lot more than programming going on in my life and the world.</p>
      <p>I began by writing a short musing called Introspection Imminent, inspired by another image I created (see “Make It Run”). Then, I wrote a reflective piece called “My Fundamental Flaws. Finally, I wrote a piece called “I Miss 2017”, which led to the creation of this image.</p>
      <p>I Miss 2017 is a criticism of the many extreme responses to the 2017 US election. In it, I attempt to paint a picture of a much worse future in order to create a contrast to the many great aspects of life in America today.</p>
      <p>Despite my best efforts, the responses to the piece were muted and hardly controversial.</p>
    `,
    'url': missImg,
    'landscape': true,
    'created': new Date('2/19/17')
  },
  {
    'name': 'Fail More',
    description: `
      <p>In my efforts to constantly improve myself, I occasionally happen upon fundamental flaws in my nature. One flaw I discovered in early 2017 was that I had a tendency to shirk from the possibility of failure (see “Make It Run”). I created this image as I was learning to remedy that flaw.</p>
      <p>I started trying things that I would usually avoid out of fear of embarrassment. I posted personal musings on Facebook in an attempt to polarize my friends into interacting with my content. I reached out to content creators to see if they wanted to collaborate, knowing I probably didn’t have the credential to deserve a response. I created images like this one even though I knew other, more experienced designers could do a much better job at it.</p>
      <p>This culminated my getting an article published on one of my favorite JavaScript blogs, Javascript Scene. The article is called <a href="https://medium.com/javascript-scene/fail-more-6e7719048618" target="_blank">Fail More</a>.</p>
    `,
    'url': failImg,
    'created': new Date('2/13/17')
  },
  // {
  //   'name': 'Binary Heart',
  //   'url': heartImg,
  //   'created': new Date('2/7/17')
  // },
  {
    'name': 'Make It Run',
    description: `
      <p>I’ve found that one of the biggest differences between programming as a hobby and programming professionally is that quality matters less in a professional environment. This probably sounds counterintuitive, but when you strive for quality as aggressively as I do, it almost starts to become a shortcoming.</p>
      <p>In a professional environment, speed matters. Things don’t just need to work, they need to work yesterday. As a programmer, then, it is important to understand that sometimes programs just need to do the job they’re meant to do.</p>
      <p>It sounds simple, but it is a concept that I still sometimes struggle with.</p>
      <p>I love code that is reusable, well-named, consistent, and that conforms to best practices. Yet, time doesn’t always allow for these things. Before all else, code must work. Then, time permitting, it can be good.</p>
    `,
    'url': runImg,
    'created': new Date('2/3/17')
  }
  // {
  //   'name': 'Don\'t Quit',
  //   'url': quitImg,
  //   'created': new Date('1/30/17')
  // }
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
  const newDesign = _.assign({}, design, { id })
  return newDesign
}

export default designs.sort(dateSort).map(addId)
