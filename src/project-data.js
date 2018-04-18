import _ from 'lodash'
import shortid from 'shortid'
import blogThumb from './assets/projects/blog-thumb.jpg'
import novelThumb from './assets/projects/novel-thumb.jpg'
import playpositThumb from './assets/projects/playposit-thumb.png'
// import timestampThumb from './assets/projects/timestamp-thumb.jpg'
// import headerThumb from './assets/projects/header-thumb.jpg'
// import shortenerThumb from './assets/projects/shortener-thumb.jpg'
// import searchThumb from './assets/projects/search-thumb.jpg'

const projects = [
  {
    name: 'devStory Blog',
    thumbnail: blogThumb,
    description: `
      <p>When I decided to create a blog focused on web development, I knew I wanted it to be something different. There are thousands of blogs that talk about how to write code or design web pages or recreate a cool widgets. When I started devStory, I wasn’t a very confident web developer. In fact, I was much more secure in my ability to write than my ability to create websites. So, I decided to play to my strengths.</p>
      <p>I design devStory to be focus on my journey as a developer. From the book-like reading experience to the novel-inspired content, devStory is about storytelling more than anything else. It has evolved over time, but story has always been at its core.</p>
      <p>Though I haven’t kept up with the analytics of devStory, I have received occasional praise for the personality and inspiration in its content. That’s more than enough reason to keep writing.</p>
    `,
    link: 'http://devstory.mikecornish.me',
    tools: ['Jekyll', 'HTML5', 'CSS3'],
    created_on: new Date('6/16/15'),
    featured: true
  },
  {
    name: 'Novel Website',
    thumbnail: novelThumb,
    description: `
      <p>I built this website to promote my campaign to publish my novel, The Dawn of Man. While the website didn’t get my novel published, it was a fun exercise in designing for marketing.</p>
      <p>The focus of the website is the header, which uses CSS animations to recreate a moment from the opening scene of the novel. Most of my time was spent on creating that effect. The other major programming effort was the smooth scrolling triggered when clicking on a link. The end result looks simple, but a lot of JavaScript work went into getting it just right.</p>
      <p>Ultimately, the website was only seen by my family and friends, some of whom supported my campaign. With more focus on analytics, I could have possibly created a bit of a case study from this project. I would like to try something similar in the future and complete a more detailed analysis of the results.</p>
    `,
    link: 'http://novel.mikecornish.me',
    tools: ['Vanilla JS', 'HTML5', 'CSS3'],
    created_on: new Date('9/1/16'),
    featured: true
  },
  {
    name: 'PlayPosit Content Browser',
    thumbnail: playpositThumb,
    description: `
      <p>I was originally hired at PlayPosit in the position of “quality assurance engineer”. However, it quickly became clear that I was more useful building UI as a front-end developer.</p>
      <p>A couple months into my time at PlayPosit, I was assigned the job of implementing a redesign of the platform’s core UI. It was modeled after Google Drive, and was meant to serve as a sort of content browser.</p>
      <p>The design of the browser evolved rapidly, requiring a good amount of iteration, reimagination, and speed. Finally, though, we launched the new UI for users to try out in early 2017. We’re continuing to iterate using customer feedback in order to make the content browser into a fantastic user experience.</p>
    `,
    link: 'https://playposit.com',
    tools: ['Vue.js', 'HTML5', 'CSS3'],
    created_on: new Date('12/1/16'),
    featured: true
  }
  /*
  {
    'name': 'Weather App',
    'thumbnail': null,
    'codepenId': 'pgmZXo',
    'tools': ['HTML5', 'CSS3', 'Sass'],
    'created_on': new Date('2/19/16')
  },
  {
    'name': 'Wikipedia Viewer',
    'thumbnail': null,
    'codepenId': 'WrqBPE',
    'tools': ['HTML5', 'CSS3', 'Sass'],
    'created_on': new Date('2/22/16')
  },
  {
    'name': 'Javascript Calculator',
    'thumbnail': null,
    'codepenId': 'jqNwvx',
    'tools': ['HTML5', 'CSS3', 'Sass'],
    'created_on': new Date('2/25/16')
  },
  {
    'name': 'Simon Game',
    'thumbnail': novelThumb,
    'description': 'A Free Code Camp project that emulates the popular toy, Simon.',
    'codepenId': 'xOZjXA',
    'tools': ['HTML5', 'CSS3', 'Sass'],
    'created_on': new Date('8/19/16'),
    'featured': true
  },
  {
    'name': 'Markdown Previewer',
    'thumbnail': null,
    'codepenId': 'zKObRp',
    'tools': ['HTML5', 'CSS3', 'Sass', 'React'],
    'created_on': new Date('8/31/16')
  },
  {
    'name': 'Free Code Camp Leaderboard',
    'thumbnail': null,
    'codepenId': 'pEJPbL',
    'tools': ['HTML5', 'CSS3', 'Sass', 'React'],
    'created_on': new Date('9/7/16')
  },
  {
    'name': 'Recipe List with Local Storage',
    'thumbnail': null,
    'codepenId': 'bwVxLG',
    'tools': ['HTML5', 'CSS3', 'Sass', 'React'],
    'created_on': new Date('9/11/16')
  },
  {
    'name': 'Bar Chart with D3.js',
    'thumbnail': null,
    'codepenId': 'WGGZaQ',
    'tools': ['HTML5', 'CSS3', 'Sass', 'D3'],
    'created_on': new Date('9/18/16')
  },
  {
    'name': 'Scatterplot with D3.js',
    'thumbnail': null,
    'codepenId': 'vXgNAr',
    'tools': ['HTML5', 'CSS3', 'Sass', 'D3'],
    'created_on': new Date('9/22/16')
  },
  {
    'name': 'Timestamp Microservice',
    'thumbnail': timestampThumb,
    'link': 'http://mctimestamp.herokuapp.com',
    'tools': ['HTML5', 'CSS3', 'Express', 'Node'],
    'created_on': new Date('9/24/16')
  },
  {
    'name': 'Header Parser Microservice',
    'thumbnail': headerThumb,
    'link': 'http://mc-header-parser.herokuapp.com/',
    'tools': ['HTML5', 'CSS3', 'Express', 'Node'],
    'created_on': new Date('10/3/16')
  },
  {
    'name': 'URL Shortener',
    'thumbnail': shortenerThumb,
    'description': 'An Express service that shortens URLs.',
    'link': 'http://mcshort.herokuapp.com/',
    'tools': ['HTML5', 'CSS3', 'Express', 'Node'],
    'created_on': new Date('10/4/16'),
    'featured': true
  },
  {
    'name': 'Image Search Microservice',
    'thumbnail': searchThumb,
    'link': 'http://mcsearch.herokuapp.com/',
    'tools': ['HTML5', 'CSS3', 'Express', 'Node'],
    'created_on': new Date('10/6/16')
  }
  */
]

// Most recent date gets rendered first
const dateSort = (a, b) => {
  if (a.created_on < b.created_on) {
    return 1
  } else if (b.created_on < a.created_on) {
    return -1
  } else {
    return 0
  }
}

const addId = project => {
  const id = shortid.generate()
  const newProj = _.assign({}, project, { id })
  return newProj
}

export default projects.sort(dateSort).map(addId)
