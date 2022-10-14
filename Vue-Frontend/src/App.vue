<template>
  <component v-bind:is="layout"></component>
</template>
<script>
  import LayoutDefault from './layouts/Default'
  import LayoutBlank from './layouts/Blank'

  export default {
    components: {
      'layout-default': LayoutDefault,
      'layout-blank': LayoutBlank,
    },
    computed: {
      layout() {
        if (this.$route.path === '/login') {
          return LayoutBlank;
        } else {
          return LayoutDefault;
        }
      }
    }
  }
</script>