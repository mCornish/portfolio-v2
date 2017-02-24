<template>
  <div id="app">
    <vert-nav></vert-nav>
    <main id="main">
      <about></about>
      <blog></blog>
      <projects></projects>
      <design></design>
      <writing></writing>
      <contact></contact>
    </main>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import VertNav from './components/VertNav'
  import About from './components/About'
  import Blog from './components/Blog'
  import Projects from './components/Projects'
  import Design from './components/Design'
  import Writing from './components/Writing'
  import Contact from './components/Contact'
  import MainFooter from './components/MainFooter'

  export default {
    name: 'app',
    components: {
      VertNav, About, Blog, Projects, Design, Writing, Contact, MainFooter
    }
  }
</script>

<style lang="sass">
  @import './styles/variables'

  body
    position: relative
    margin: 0
    padding: 0
    font-family: $font-stack-1


  h1, h2, p, a
    line-height: 1.48

  h1, h2
    font-family: $font-stack-2
    text-transform: uppercase
    margin-top: 0
  * + h1, * + h2
    margin-top: 1em

  h1
    font-size: 3rem
    line-height: 1.3
    margin-bottom: .5em

  h2
    font-size: 2.5rem
    margin-bottom: .5em

  h3
    margin-top: 2em

  p, a
    font-size: 1rem

  a
    color: $color-brand-1
  a:hover
    color: $color-brand-2

  a:visited
    color: rgb(160,180,210)


  p
    line-height: 1.8
    text-indent: 2em
  p + p
    margin-top: 1em

  td
    padding: .5em 1em

  main
    position: relative
    @media screen and (min-width: 1px)
      width: 100vw
    @media screen and (min-width: $break-tablet)
      width: 80vw /* 100vw - 15vw VertNav */
    @media screen and (min-width: $break-desktop)
      width: 85vw /* 100vw - 15vw VertNav */

  section
    max-width: 100%

  section + section
    margin-top: 5em

  section:first-child
    padding-top: 3em

  @media screen and (min-width: 1px)
    section
      padding: 1em

  @media screen and (min-width: 768px)
    section
      padding-left: 5vw
      padding-right: 5vw

  @media screen and (min-width: 1366px)
    section
      padding-left: 20vw
      padding-right: 20vw

  button,
  [role=button],
  a[role=button]
    display: block
    width: calc(100% - 2em)
    color: $color-text-light
    background-color: transparent
    border: 3px solid $color-text-light
    padding: 1em
    margin: 0 auto
    border-radius: 10em
    font-weight: bold
    font-size: 1.5em
    font-family: $font-stack-2
    text-align: center
    text-decoration: none
    text-transform: uppercase
    cursor: pointer
    transition: color .2s, background-color .2s

    &.--minor
      background-color: $color-text-dark
      color: $color-text-light
      border: none
      width: calc(50% - 2em)
    &:hover,
    &:focus
      color: $color-text-light
      background-color: $color-brand-2
      border-color: $color-brand-2
      outline: none


  * + [role=button],
  * + a[role=button]
    margin-top: 2em


  [role=grid]
    display: flex
    flex-wrap: wrap
    justify-content: center

  [role=gridcell]
    margin: 1em

  a[role=gridcell]
    text-decoration: none
    color: inherit



  /* UTILITIES */
  .flex-row
    display: flex !important
    flex-direction: row !important

  .flex-center-row
    display: flex
    justify-content: center

  .flex-center-col
    display: flex
    flex-direction: column
    align-items: center

  .text-center
    text-align: center !important
</style>
