<template>
  <section id="writing">
    <h2>My Writing</h2>
    <ul class="writing">
      <li 
        v-bind:key="item.url"
        v-for="item in writing"
        class="writing__item"
       >
        <div class="writing__date">{{formatDate(item.created)}}</div> 
        <a class="writing__link" :href="item.url" target="_blank">{{item.name}}</a>
      </li>
    </ul>
  </section>
</template>


<script>
import moment from 'moment'
import writing from '../writing-data'

export default {
  name: 'writing',

  data () {
    return {
      writing
    }
  },

  methods: {
    formatDate (date) {
      return moment(date).fromNow().toUpperCase()
    }
  }
}
</script>


<style lang="sass" scoped>
@import '../styles/variables'

.writing
  list-style: none
  padding: 0

.writing__item + .writing__item
  margin-top: 2em

.writing__date
  font-size: 1em
  font-family: $font-stack-2
  color: hsl(0,0,50)

.writing__link
  font-size: 1.5em
</style>
