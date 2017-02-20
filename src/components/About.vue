<template>
  <section id="about" className="about">
    <div className="h-card">
      <h1><span className="p-name">Mike Cornish</span> is a</h1>
      <h2>Frontend Developer</h2>
      <div className="bio">
        <p>When I'm not designing and developing websites, I like to write stories and blog posts, sketch from life and my imagination, and occasionally create music. My main passion is learning, because it allows me to execute bigger, better, more ambitious creations.</p>

        <p>Some of my most notable accompliishments include working on a Best in Show award-winning website, writing two novels (unpublished), interviewing a chart-topping musician, and writing hundreds of blog posts over the past six years.</p>

        <p>Mostly I just play with JavaScript, though.</p>
      </div>
      <SocialIcons />
    </div>
    <div className="transition-shape">
      <div className="trapezoid"></div>
      <div className="trapezoid"></div>
      <div className="trapezoid"></div>
    </div>
  </section>
</template>

<script>
  import SocialIcons from './SocialIcons'
  export default {
    name: 'about',
    components: {
      SocialIcons
    }
  }
</script>

<style scoped lang="sass">
  @import '../styles/variables'

  $shape-height: 4em
  $shape-width: 5em

  .about
    position: relative
    color: $color-text-dark
    background-color: $color-text-light
    padding-bottom: 0

  .about + section
    margin-top: 0

  .about .social-icons
    position: absolute
    left: 50%
    bottom: 0
    transform: translateX(-50%) translateY(70%)
    z-index: 5

  .h-card
    position: relative
    opacity: .85
    padding-bottom: 2em
    z-index: 3

  .transition-shape
    display: flex
    position: absolute
    width: 100%
    bottom: 0
    left: 0
    transform: translateY(100%)

  .trapezoid
    border-top: $shape-height solid $color-text-light
    border-left: $shape-width solid transparent
    border-right: $shape-width solid transparent
    height: 0
    width: 60%

  .trapezoid:first-child,
  .trapezoid:last-child
    width: calc(40% / 2)

  .trapezoid:first-child:before
    content: ''
    display: block
    position: absolute
    left: 0
    top: 0
    width: 0
    height: 0
    border-bottom: $shape-height solid $color-text-light
    border-right: $shape-width solid transparent

  .trapezoid:last-child:after
    content: ''
    display: block
    position: absolute
    right: 0
    top: 0
    width: 0
    height: 0
    border-bottom: $shape-height solid $color-text-light
    border-left: $shape-width solid transparent
</style>
