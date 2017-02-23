<template>
  <div 
    class="social-icons" 
    :class="[themeClass, modifierClass]"
  >
    <a
      v-for="icon in icons"
      class="social-icon" 
      :href="icon.url" 
      target="_blank" 
      @click="trackClick(icon.name)"
    >
      <svg viewBox="0 0 512 512" class="social-icon__image" v-html="icon.svg"></svg>
      <div class="social-icon__text">{{icon.name}}</div>
    </a>
  </div>
</template>

<script>
import icons from '../socialIcons'
import { mixpanel } from '../App'

export default {
  name: 'social-icons',

  props: {
    theme: String,
    modifier: String
  },

  data () {
    return {
      icons
    }
  },

  computed: {
    themeClass () {
      return this.theme ? `is-${this.theme}` : ''
    },

    modifierClass () {
      return this.modifier ? `social-icons--${this.modifier}` : ''
    }
  },

  methods: {
    trackClick (socialName) {
      mixpanel.track('Social Click', {
        type: name
      })
    }
  }
}
</script>

<style scoped lang="sass">
@import '../styles/variables'

.social-icons
  display: flex
  justify-content: center

.social-icon
  position: relative
  width: 5em
  text-decoration: none

.social-icon:hover 
  .social-icon__image
    opacity: 0
    fill: $color-brand-1
  .social-icon__text
    opacity: 1
    color: $color-brand-1

.social-icon:nth-child(2n):hover 
  .social-icon__image
    fill: $color-brand-2
  .social-icon__text
    color: $color-brand-2

.social-icon__image
  fill: $color-text-dark
  opacity: 1
  transition: fill .2s, opacity .2s

.is-dark .social-icon__image
  fill: $color-text-light


.social-icon__text
  position: absolute
  top: 50%
  left: 50%
  text-align: center
  color: $color-text-dark
  text-decoration: none
  text-transform: capitalize
  transform: translate(-50%, -50%)
  opacity: 0
  transition: opacity .2s, color .2s

a:nth-child(2n) .social-icon__text
  color: $color-brand-2


.social-icons--footer .social-icon
  width: 2em

.social-icons--footer .social-icon__image:hover
  fill: $color-brand-2

.social-icons--footer .social-icon__text
  display: none
</style>
