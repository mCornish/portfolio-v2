<template>
  <div class="social-icons" :class="[themeClass, modifierClass]">
    <a
      v-for="icon in icons"
      class="social-icon" 
      :class="[themeClass, modifierClass]"
      :href="icon.url" 
      target="_blank" 
      @click=trackClick(icon.name)
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
    themeClass: String,
    modifierClass: String
  },

  data () {
    return {
      icons
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
  width: 5em
  text-decoration: none

.social-icon__image
  fill: $color-text-dark
  transition: fill .2s

.is-dark .social-icon__image
  fill: $color-text-light

.social-icon:hover .social-icon__image
  fill: $color-brand-1

.social-icon:nth-child(2n):hover .social-icon__image
  fill: $color-brand-2


.social-icon__text
  text-align: center
  color: $color-brand-1
  text-decoration: none
  text-transform: capitalize
  opacity: 0
  transition: opacity .2s

a:nth-child(2n) .social-icon__text
  color: $color-brand-2

.social-icon:hover .social-icon__text
  opacity: 1


.social-icons--footer .social-icon
  width: 2em

.social-icons--footer .social-icon__image:hover
  fill: $color-brand-2

.social-icons--footer .social-icon__text
  display: none
</style>
