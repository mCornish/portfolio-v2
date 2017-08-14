<template>
<div class="project-detail flex-col">
  <button class="--close flex-right" @click="close">✖</button>
  <div class="flex-row">
    <div class="project-detail__thumbnail-wrapper">
      <img class="project-detail__thumbnail" :src="project.thumbnail" />
    </div>
    <div class="flex-col project-detail__text">
      <h2>{{project.name}}</h2>
      <div 
        class="project__description"
        v-html="project.description"
      ></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'project-detail',
  props: {
    project: {
      type: Object,
      required: true
    },
    close: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>

<style scoped lang="sass">
.project-detail
  width: 70%

.project-detail__thumbnail-wrapper
  width: 20vw
  height: 20vw
  border: 3px solid hsla(0,0,0,.05)
  border-radius: 50%
  overflow: hidden

.project-detail__thumbnail
  height: 100%
  transform: translateX(-8em)

.project-detail__text
  margin-left: 3em
</style>
