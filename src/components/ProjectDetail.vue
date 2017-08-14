<template>
<div class="project-detail flex-col">
  <button class="--close flex-right" @click="close">✖</button>
  <div class="flex-row">
    <div>
      <a 
        class="project-detail__thumbnail-wrapper"
        :href="project.link"
        target="_blank"
      >
        <img class="project-detail__thumbnail" :src="project.thumbnail" />
      </a>
    </div>
    <div class="flex-col project-detail__text">
      <h2 class="project-detail__title">
        <a :href="project.link" target="_blank">{{project.name}}</a>
      </h2>
      <h3 class="project-detail__subtitle">Main Tool: {{project.tools[0]}}</h3>
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
  display: block
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

.project-detail__title,
.project-detail__title > a
  margin: 0
  font-size: 1.5em

.project-detail__subtitle
  margin: 0
  margin-bottom: 1em
</style>
