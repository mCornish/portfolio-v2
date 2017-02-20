<template>
  <nav>
    <Logo />
    <a href="#about" @click="handleClick">Me</a>
    <a href="#blog" @click="handleClick">Blog</a>
    <a href="#experience" @click="handleClick">Projects</a>
    <a href="#writing" @click="handleClick">Writing</a>
    <a href="#design" @click="handleClick">Design</a>
    <a href="#contact" @click="handleClick">Contact Me</a>
  </nav>
</template>

<script>
import $ from 'jquery'
import Logo from './Logo'
import { scrollTo, keyScroll } from '../utils'
import { mixpanel } from '../main'

export default {
  name: 'vert-nav',
  components: {
    Logo
  },

  ready () {
    $(document.on('scroll', scrollTo))
    $(document).on('keydown', keyScroll)
  },

  methods: {
    handleClick (e) {
      $('nav a').removeClass('is-active')
      $(e.target).addClass('is-active')
      scrollTo(e)
      mixpanel.track('Link Click', {
        'name': $(e.target).text()

      })
    }
  }
}
</script>

<style scoped lang="sass">
@import '../styles/variables'

nav
  position: fixed
  flex-direction: column
  right: 0
  top: 0
  height: 100vh
  padding: 3em 2em 0
  margin-right: -1em /* To make room for transform */
  background-color: $color-brand-1
  box-shadow: 0  0 3px 1px hsla(0,0,0, .5)
  transform: none
  transition: transform .2s, background-color 3s
  z-index: 1
  @media screen and (min-width: 1px)
    display: none
  @media screen and (min-width: $break-tablet)
    display: flex
    width: calc(20vw - 4em + 1em) /* -4em for padding, +1 em for transform */
  @media screen and (min-width: $break-desktop)
    width: calc(15vw - 4em + 1em) /* -4em for padding, +1 em for transform */

nav:hover
  background-color: $color-brand-2
  transform: translateX(-1em)

nav a,
nav a:visited
  text-decoration: none
  color: rgb(250,250,250)
  opacity: .6
  margin: 1em 0
  font-weight: normal
  transform: none
  transition: transform .2s, opacity .2s

nav a:hover,
nav a.is-active
  color: rgb(250,250,250)
  opacity: 1
  font-weight: bold
  transform: scale(1.1)
</style>
