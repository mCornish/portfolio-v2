<template>
  <section id="experience" class="experience flex-center-col">
    <projects></projects>
    <tools 
      :set-active="this.setActive" 
      :clear-active="this.clearActive"
    ></tools>
  </section>
</template>

<script>
import Projects from './Projects'
import Tools from './Tools'

export default {
  name: 'experience',
  components: {
    Projects, Tools
  },

  data () {
    return {
      activeTool: null
    }
  },

  methods: {
    setActive (tool) {
      this.activeTool = tool
    },

    clearActive () {
      this.activeTool = null
    }
  }
}
</script>

<style scoped lang="sass">
.experience
  padding: 0
</style>
