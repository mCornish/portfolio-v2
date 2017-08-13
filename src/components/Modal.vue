<template>
<div class="modal__wrapper">
  <dialog
    class="modal" 
  >
    <div class="flex-row">
      <img 
        class="project__thumbnail"
        :src="item.thumbnail"
        width="384"
        height="225"
        :alt="item.name"
        target="_blank"
      />
      <div class="project__text">
        <h2 class="project__title">{{item.name}}</h2>
        <p class="project__description">{{item.description}}</p>
      </div>
    </div>
    <div class="flex-row">
      <p v-for="paragraph in item.description" v-bind:key="paragraph">
        {{paragraph}}
      </p>
    </div>
  </dialog>
</div>
</template>


<script>
import { mixpanel } from '../main'

export default {
  name: 'featured-project',

  data () {
    return {
      isOpen: false,
      item: {}
    }
  },

  computed: {
  },

  methods: {
    open(item) {
      this.item = item;
      this.isOpen = true;
    },

    close() {
      this.isOpen = false;
    }
  },

  events: {
    'modal:open'(item) {
      this.open(item);
    },

    'modal:close'() {
      this.close();
    }
  }
}
</script>


<style scoped lang="sass">
</style>
