<template>
  <section id="story" class="blog-post">
    <h2 class="blog-post__chapter">Chapter 5 <span class="blog-post__title">The New Kid (Again)</span></h2>
    <h3 class="blog-post__subtitle">Remembering How to Be a <span class="blog-post__highlight">Web Developer</span></h3>
    <div class="excerpt">
      <p>I remember the moment I felt like I <em>might</em> actually belong. Before that moment, I was never fully aware of the importance of community in web development. For years, I was just a web developer after that moment, I was part of the web development community.</p>
      <a role="button" href="http://devstory.mikecornish.net/posts/chapter-5" target="_blank" @click="trackClick">Explore My Story</a>
    </div>
  </section>
</template>

<script>
import { mixpanel } from '../main'

export default {
  name: 'blog',

  methods: {
    trackClick () {
      mixpanel.track('Blog CTA Click')
    }
  }
}
</script>

<style scoped lang="sass">
@import '../styles/variables'

.blog-post
  padding-top: $spacer * 5
  padding-bottom: $spacer * 5
  color: $color-text-light
  background-color: mix(black, $color-brand-1, 80)
  background-image: url('../assets/blog-back.png')
  background-attachment: fixed
  transition: background-image 1s

.blog-post:hover
  background-image: url('../assets/blog-back-hover.png')

.blog-post__chapter
  font-weight: normal
  text-align: center
  margin: 0
  font-size: 2.3em

.blog-post__title
  color: $color-brand-1
  font-weight: bold

.blog-post__subtitle
  text-align: center
  margin-top: 0
  font-size: 1.7em

.blog-post__highlight
  color: $color-brand-2
</style>
