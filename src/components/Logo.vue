<template>
  <div class="logo">
    <svg width="100%" height="100%" viewBox="0 0 257 185"><path d="M11.28,184.441c-5.485,-15.811 -17.015,-63.16 -7.865,-101.805c15.182,-64.115 84.039,-83.075 124.508,-82.628c73.809,0.815 111.152,45.836 123.251,82.628c12.885,39.183 -3.63,101.805 -3.63,101.805l-44.506,0l-27.431,-101.805l-30.78,101.805l-30.443,0l-27.291,-101.805l-31.307,101.805c0,0 -44.402,0.3 -44.506,0Z"/></svg>
  </div>
</template>

<script>
export default {
  name: 'logo'
}
</script>

<style scoped lang="sass">
.logo
  width: 40%
  margin: 0 auto 2em

.logo svg
  fill: rgb(0,0,0)
  opacity: .3
  transition: opacity .2s

nav:hover svg
  opacity: .5
</style>
