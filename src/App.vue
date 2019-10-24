<template>
  <div id='app'>
    <NavBar></NavBar>
    <transition name='slide-left'>
      <router-view style='margin-top:20px;'></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
