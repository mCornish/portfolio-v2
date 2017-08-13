<template>
<div class="project-detail flex-col">
  <button class="--close flex-right" @click="close">✖</button>
  <div class="flex-row">
    <img class="project-detail__thumbnail" :src="project.thumbnail" />
    <div class="flex-col">
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
</style>
