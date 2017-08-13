<template>
<section id="designs">
  <h2>My Designs</h2>
  <div role="grid" class="designs">
    <div 
      v-for="design in designs" 
      role="gridcell" 
      class="design"
      :class="{'landscape': design.landscape}"
      v-bind:key="design.name"
     >
      <img :src="design.url" :alt="design.name" />
    </div>
  </div>
</section>
</template>

<script>
import designs from '../design-data'

export default {
  name: '',
  components: {
  },

  data () {
    return {
      designs
    }
  },

  methods: {
  }
}
</script>

<style scoped lang="sass">
.designs
  display: flex
  flex-wrap: wrap

.design
  width: 50%
  margin: 0
  outline: 1px solid hsla(0,0,100,.3)

  &.landscape
    width: 100%

.design img
  width: 100%
</style>
