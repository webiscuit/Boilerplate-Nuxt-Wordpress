<template lang="pug">
  main
    .container
      h2 Company
</template>

<script>
export default {
  scrollToTop: true,

  data() {
    return {
      bodyClass: 'company', /* bodyに設定するclass */
    }
  },
  head() {
    return {
      title: 'Test',  /* ページタイトル */
      // titleTemplate: null,   /* デフォルトのタイトル記述「ページ名｜サイト名」から変更する際はコメントアウトを外す */
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ],
      bodyAttrs: {
        class: this.bodyClass
      }
    }
  }
}
</script>

<style scoped>
</style>
