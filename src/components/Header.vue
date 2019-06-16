<template lang="pug">
  header.header(:class="{'is-scrolled': scrollPosition > 0}")
    nav.navbar.sticky-top.navbar-expand-lg.navbar-light.bg-light
      nuxt-link(to='/').navbar-brand
        Logo
      b-navbar-toggle(target="navbarNavAltMarkup")
      b-collapse#navbarNavAltMarkup(is-nav)
        .navbar-nav
          nuxt-link(to='/').nav-item.nav-link.active
            | Home 
            span.sr-only (current)
          nuxt-link.nav-item.nav-link(to='/company') Company
          nuxt-link.nav-item.nav-link(to='/test') Test
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  },
  data() {
    return {
      scrollPosition: 0
    }
  },
  mounted() {
    if (process.client) {
      /* Scroll */
      document.onscroll = (e) => {
        this.scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      }
    }
  }
}
</script>
