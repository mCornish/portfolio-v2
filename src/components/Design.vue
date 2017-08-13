<template>
<section id="designs">
  <h2>My Designs</h2>
  <div role="grid" class="designs">
    <div 
      v-for="design in designs" 
      role="gridcell" 
      class="design"
      :class="{'landscape': design.landscape}"
      @click="expand(design.name)"
      v-bind:key="design.name"
     >
      <img :src="design.url" :alt="design.name" />
      <modal
        :name="design.name"
        :item="design"
      ></modal>
    </div>
  </div>
</section>
</template>

<script>
import { events } from '../main'
import Modal from './Modal'
import designs from '../design-data'

export default {
  name: '',
  components: {
    Modal
  },

  data () {
    return {
      designs
    }
  },

  methods: {
    expand (name) {
      events.$emit('modal:open', name)
    }
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
  cursor: pointer

  &.landscape
    width: 100%

.design img
  width: 100%
</style>
