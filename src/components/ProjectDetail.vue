<template>
<div class="project-detail">
  <button class="--close" @click="close">✖</button>
  <img class="project-detail__thumbnail" :src="project.thumbnail" />
  <h2>{{project.name}}</h2>
  <p>{{project.description}}</p>
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
</style>
