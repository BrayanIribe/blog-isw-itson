<template>
  <div>
    <b-container class='main' style='text-align:center;'>
      <div class='mb-3' v-for='(video, i) in videos' v-bind:key='i'>
        <div class='tag-name'>{{ video.name }}</div>
        <div class='embed-responsive embed-responsive-16by9'>
          <iframe
            class='embed-responsive-item'
            :src='video.src'
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <h2 class='phase mb-4'>📕 Bibliografías</h2>
      <hr />
      <Biography
        src='http://blogs.upn.edu.pe/ingenieria/wp-content/uploads/sites/4/2016/10/upn_blog_ing_software-rup_12-oct.jpg'
        href='https://youtu.be/AY5Dh3XYshk'
      >Julián Vanegas. (2016). Metodología RUP. 22 de octubre del 2019, de YouTube.</Biography>
      <Biography
        src='https://cdn.goconqr.com/uploads/slide_property/image/735278/desktop_a2ab7898-7965-49a8-a47f-de4c93be620f.jpg'
        href='https://www.youtube.com/watch?v=7paA_3VxSrQ'
      >Ingenieros2011 (2016). Ejemplo RUP. 2019, de Youtube.</Biography>
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
