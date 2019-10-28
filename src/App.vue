<template>
  <div id='app'>
    <NavBar></NavBar>
    <transition name='fade' v-if='showHelp'>
      <a href='#app' @click='showHelp = false' class='to-up-bt'>
        <font-awesome-icon icon='chevron-up'></font-awesome-icon>
      </a>
    </transition>
    <transition name='fade'>
      <router-view style='margin-top:20px'></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      showHelp: false
    }
  },
  created() {
    setInterval(() => {
      this.showHelp = document.getElementById('html').scrollTop > 300
    }, 500)
  }
}
</script>
