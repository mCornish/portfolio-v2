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
    <button @click="toggleGrid">More Projects</button>
    <div v-show="hasGrid" role="grid">
      <a
        v-for="project in projects"
        role="gridcell"
        :href="project.link"
        target="_blank"
        class="project"
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
import _ from 'lodash'
import projects from '../project-data'
// import { mixpanel } from '../main'

export default {
  name: 'projects',
  components: {
  },

  data () {
    return {
      projects,
      hasGrid: false
    }
  },

  computed: {
    featured () {
      const isFeatured = _.partial(_.has, _, 'featured')
      return this.projects.filter(isFeatured)
    }
  },

  methods: {
    toggleGrid () {
      this.hasGrid = !this.hasGrid
    }
  }
}
</script>


<style scoped lang="sass">
@import '../styles/variables'

.projects
  width: 90%

.project
  position: relative
  will-change: transform
  transform: none
  transition: transform .2s, margin .2s
  @media screen and (min-width: 1px)
    width: calc(100% - 2em)
  @media screen and (min-width: $break-tablet)
    width: calc(50% - 2em)
  @media screen and (min-width: $break-desktop)
    width: calc(25% - 2em)

.project.is-active,
.project:hover
  transform: scale(1.1)
  z-index: 1

.project__thumbnail
  width: 100%
  height: 100%
  border: 1px solid rgba(0,0,0,.2)

.project__placeholder
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 12em
  background-color: rgb(230,230,230)

.project__placeholder span
  color: rgb(150,150,150)

.project__name
  position: absolute
  left: 50%
  top: 50%
  color: rgb(250,250,250)
  transform: translate(-50%, -50%)
  opacity: 0
  transition: opacity .2s
  z-index: 1

.project:hover .project__name,
.is-active .project__name
  opacity: 1

.project__shade
  background-color: mix($color-brand-1, black, 30);
  opacity: 0
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  transition: opacity .2s

.project:nth-child(2n) .project__shade
  background-color: mix($color-brand-2, black, 30);

.project:hover .project__shade,
.is-active .project__shade
  opacity: .7
</style>
