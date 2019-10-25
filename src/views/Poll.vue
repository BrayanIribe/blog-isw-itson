<template>
  <div>
    <b-container
      class='main'
      style='text-align:center;background-color:transparent;'
    >
      <iframe
        frameborder='0'
        height='900'
        marginheight='0'
        marginwidth='0'
        style='background-color:white;'
        src='https://docs.google.com/forms/d/e/1FAIpQLSfjOX4FLuHJPEVJk14UULa38ghZ47v0zl20yNwchDPFHCKElw/viewform?embedded=true'
        width='640'
      >Cargando&#8230;</iframe>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Images',
  data() {
    return {
      videos: []
    }
  },
  methods: {
    add(name, src) {
      this.videos.push({ name, src })
    }
  },
  created() {
    this.add(
      '🤔 ¿Qué es la metodología RUP?',
      'https://www.youtube.com/embed/AY5Dh3XYshk'
    )
    this.add(
      '💭 ¿Cómo se usa en la vida diaria?',
      'https://www.youtube.com/embed/7paA_3VxSrQ'
    )
  }
}
</script>

<style scoped>
</style>
