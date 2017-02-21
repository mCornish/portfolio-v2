<template>
  <footer>
    <p>&copy; Mike Cornish.</p>
    <div class="footer__int-links">
      <a href="#about" @click=handleClick>About</a>
      <a href="#story" @click=handleClick>Story</a>
      <a href="#experience" @click=handleClick>Experience</a>
      <a href="#contact" @click=handleClick>Contact</a>
    </div>
    <div class="footer__ex-links">
      <a href="http://www.devstory.mikecornish.net" target="_blank">My Blog</a>
      <social-icons 
        theme="dark"
        modifier="footer"
      ></social-icons>
    </div>
  </footer>
</template>

<script>
import SocialIcons from './SocialIcons'
import { scrollTo } from '../utils'

export default {
  name: 'footer',
  components: {
    SocialIcons
  },

  methods: {
    handleClick (e) {
      scrollTo(e.target)
    }
  }
}
  </script>

<style scoped lang="sass">
@import '../styles/variables'

$_color-text: mix(black, $color-brand-1, 40)
$_color-hover: $color-brand-2

footer
  position: relative
  bottom: 0
  left: 0
  width: calc(100vw - 6em)
  padding: 2em 3em
  background-color: mix(black, $color-brand-1, 90);
  color: $_color-text
  z-index: 1

  @media screen and (min-width: 1px)
    display: flex
    justify-content: center
  @media screen and (min-width: $break-desktop)
    display: block


footer > *
  display: inline-block

footer p
  margin: 0

footer a,
footer a:visited
  margin-left: 1em
  color: $_color-text
  text-decoration: none
  font-weight: bold

footer a:hover
  color: $_color-hover


.footer__int-links
  margin-left: 1em

.footer__ex-links
  float: right
  margin-right: 1em

  @media screen and (min-width: 1px)
    display: none
  @media screen and (min-width: $break-desktop)
    display: flex

.footer__ex-links > * + *
  margin-left: 1em

footer .is-dark .social-icon__image
  fill: $_color-text
footer .is-dark .social-icon__image:hover
  fill: $_color-hover
</style>
