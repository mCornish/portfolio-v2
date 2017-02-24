import _ from 'lodash'
import shortid from 'shortid'
import blogThumb from './assets/blog-thumb.jpg'
import novelThumb from './assets/novel-thumb.jpg'
import timestampThumb from './assets/timestamp-thumb.jpg'
import headerThumb from './assets/header-thumb.jpg'
import shortenerThumb from './assets/shortener-thumb.jpg'
import searchThumb from './assets/search-thumb.jpg'

const projects = [
  {
    'name': 'devStory Blog',
    'thumbnail': blogThumb,
    'description': 'My blog, which documents my experiences as a web developer and general creative.',
    'link': 'http://devstory.mikecornish.net',
    'tools': ['HTML5', 'CSS3'],
    'created_on': new Date('6/16/15'),
    'featured': true
  },
  {
    'name': 'Novel Website',
    'thumbnail': novelThumb,
    'link': 'http://novel.mikecornish.net',
    'tools': ['Angular', 'HTML5', 'CSS3'],
    'created_on': new Date('9/1/16')
  },
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
  const newProj = _.assign(project, {id})
  return newProj
}

export default projects.sort(dateSort).map(addId)
