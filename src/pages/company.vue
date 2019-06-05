<template lang="pug">
  main
    .container
      h2 Company
</template>

<script>
export default {
  scrollToTop: true,
  
  head() {
    return {
      title: 'Company',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
