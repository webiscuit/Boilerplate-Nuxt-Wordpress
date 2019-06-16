<template lang="pug">
  main
    .jumbotron
      .container
        h1.display-3 Hello, world!
        p
          | This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
        p
          a.btn.btn-primary.btn-lg(href='#', role='button') Learn more »
    .container
      .row
        b-col(md="4")
          h2 Heading
          p
            | Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          p
            a.btn.btn-secondary(href='#', role='button') View details »
        b-col(md="4")
          h2 Heading
          p
            | Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          p
            a.btn.btn-secondary(href='#', role='button') View details »
        b-col(md="4")
          h2 Heading
          p
            | Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          p
            a.btn.btn-secondary(href='#', role='button') View details »
</template>

<script>

export default {
  scrollToTop: true,

  data() {
    return {
      bodyClass: 'home', /* bodyに設定するclass */
    }
  },
  head() {
    return {
      title: process.env.site_name, /* ページタイトル（初期値：サイト名） */
      titleTemplate: null,
      meta: [
        { hid: 'description', name: 'description', content: process.env.def_description } /* descriptionを変更するときは"process.env.def_description"を差し替え */
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
