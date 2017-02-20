<template>
  <div class="social-icons" :class="[themeClass, modifierClass]">
    <a
      v-for="icon in icons"
      class="social-icon" 
      :href="icon.url" 
      target="_blank" 
      @click=handleClick(name)
    >
      <svg viewBox="0 0 512 512" className="social-icon__image">
        {{icon.svg}}
      </svg>
      <div className="social-icon__text">{icon.name}</div>
    </a>
  </div>
</template>

<script>
import icons from '../socialIcons'
import { mixpanel } from '../App'

export default {
  name: 'social-icons',

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

<style>
</style>
