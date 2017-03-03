<template>
  <section id="contact" class="contact">
    <h2>LET'S TALK</h2>
    <p>If you're interested in working together, have a question about web development, or just want to say hi, feel free to
      send me an email at <a href="mailto:cornishmw@gmail.com">cornishmw@gmail.com</a>. Just let me know you came from my
      website and I'll get back to you within 24 hours.</p>
    <a role="button" href="mailto:cornishmw@gmail.com" @click="trackClick">Email Me</a>
  </section>
</template>

<script>
import { mixpanel } from '../App'
export default {
  name: 'contact',

  methods: {
    trackClick () {
      mixpanel.track('Email CTA Click')
    }
  }
}
</script>

<style scoped lang="sass">
@import '../styles/variables'

.contact
  background-color: hsl(259, 64, 10)
  background-image: url('../assets/contact-back.svg')
  background-repeat: no-repeat
  background-size: fit
  background-position: center
  background-attachment: fixed
  padding-top: $spacer * 10
  padding-bottom: $spacer * 10
  color: $color-text-light
</style>
