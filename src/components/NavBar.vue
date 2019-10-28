<template>
  <b-navbar toggleable='xl' type='dark'>
    <b-navbar-toggle target='nav-text-collapse' right></b-navbar-toggle>
    <transition name='fade'>
      <b-navbar-brand
        style='cursor:pointer'
        v-on:click='$router.push("/")'
        v-if='$route.fullPath != "/"'
      >👨‍💻️ RUP</b-navbar-brand>
    </transition>
    <b-collapse id='nav-text-collapse' is-nav>
      <b-navbar-nav class='ml-auto' right>
        <b-nav-item
          v-for='(route,i) in routes'
          v-bind:key='i'
          v-on:click='pickRoute(route)'
          v-bind:class='{"active": $route.fullPath === route.path}'
          right
        >{{ route.name }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      routes: []
    }
  },
  methods: {
    pickRoute(route) {
      this.$router.push(route.path)
    }
  },
  created() {
    this.$routes.map((route) => {
      if (route.path !== '/' && route.path !== '*') this.routes.push(route)
    })
  }
}
</script>

<style lang="scss" scoped>
.active {
  background-color: white;
  color: black !important;
}

.active a {
  color: black !important;
}
</style>
