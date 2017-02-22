<template>
<div class="projects">
  <h2 class="text-center">My Projects</h2>
  <div class="projects__featured">
    <div
      v-for="project in featured"
      class="card"
    >
      <img 
        class="project__thumbnail"
        :src="project.thumbnail"
        width="384"
        height="225"
        :alt="project.name"
        target="_blank"
      />
      <div class="card__text">
        <h2>{{project.name}}</h2>
        <p>{{project.description}}</p>
      </div>
    </div>
    <button @click="showGrid">More Projects</button>
    <div role="grid">
      <a
        v-for="project in projects"
        role="gridcell"
        :href="project.link"
        target="_blank"
        class="project"
        :class="{'is-active': isActive(project)}"
        @click="trackClick(project.name)"
      >
        <img 
          class="project__thumbnail"
          :src="project.thumbnail"
          width="384"
          height="225"
          :alt="project.name"
          target="_blank"
        />
        <div class="project__name">{{project.name}}</div>
        <div class="project__shade"></div>
      </a>
  </div>
</div>
</template>

<script>
// import _ from 'lodash'
import projects from '../project-data'
// import { mixpanel } from '../main'

export default {
  name: '',
  components: {
  },

  data () {
    return {
      projects
    }
  },

  methods: {
  }
}
</script>

<style scoped lang="sass">
</style>
