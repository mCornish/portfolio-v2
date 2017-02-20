<template>
  <div id="app">
    <nav></nav>
    <main id="main">
      <about></about>
      <blog></blog>
      <experience></experience>
      <writing></writing>
      <contact></contact>
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav'
import About from './components/About'
import Blog from './components/Blog'
import Experience from './components/Experience'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Footer from './components/Footer'

import mixpanel from 'mixpanel-browser'

mixpanel.init('5fbd1f3532c9111fee31a61c8132bc25')
mixpanel.track('Page View')
export { mixpanel }

export default {
  name: 'app',
  components: {
    Nav, About, Blog, Experience, Writing, Contact, Footer
  }
}
</script>

<style lang="sass">
</style>
