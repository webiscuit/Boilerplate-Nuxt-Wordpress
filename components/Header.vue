<template lang="pug">
  header.header
    nav.navbar.sticky-top.navbar-expand-lg.navbar-light.bg-light
      a.navbar-brand(href='#') Navbar
      button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarNavAltMarkup', aria-controls='navbarNavAltMarkup', aria-expanded='false', aria-label='Toggle navigation')
        span.navbar-toggler-icon
      #navbarNavAltMarkup.collapse.navbar-collapse
        .navbar-nav
          a.nav-item.nav-link.active(href='#')
            | Home 
            span.sr-only (current)
          nuxt-link.nav-item.nav-link(to='company') Company
          a.nav-item.nav-link(href='#') Features
          a.nav-item.nav-link(href='#') Pricing
          a.nav-item.nav-link.disabled(href='#', tabindex='-1', aria-disabled='true') Disabled
</template>