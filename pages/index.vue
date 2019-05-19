<template lang="pug">
  main
    p Top page
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: null,
      title: process.env.site_name,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style>
</style>
