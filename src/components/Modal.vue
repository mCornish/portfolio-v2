<template>
<dialog
  v-show="isOpen"
  class="modal flex-row content-center"
>
  <button
    class="--close modal__close"
    @click.stop="close"
  >✖</button>
  <div class="flex-col">
    <img 
      class="modal__image"
      :src="item.url"
      :alt="item.name"
      target="_blank"
    />
    <div class="project__text">
      <h2 class="project__title">{{item.name}}</h2>
      <div
        class="project__description"
        v-html="item.description"
      ></div>
    </div>
  </div>
</dialog>
</template>


<script>
import { events } from '../main'

export default {
  name: 'modal',

  created () {
    events.$on('modal:open', (name) => {
      if (name === this.name) this.open()
      else this.close()
    })
    events.$on('modal:close', this.close)
  },

  beforeDestroy () {
    events.$off('modal:open')
    events.$off('modal:close')
  },

  props: {
    name: {
      type: String
    },
    item: {
      type: Object,
      default: () => {}
    }
  },

  data: () => ({
    isOpen: false
  }),

  methods: {
    open () {
      this.isOpen = true
    },

    close () {
      this.isOpen = false
    }
  }
}
</script>


<style scoped lang="sass">
@import '../styles/variables'

.modal
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  padding-top: 5em
  background-color: hsla(0,0,0,.9)
  color: $color-text-light
  z-index: 3

.modal__image
  max-height: 70vh

.modal__close
  position: absolute
  top: 1em
  right: 3em
  font-size: 2em
</style>
