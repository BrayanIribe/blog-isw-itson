<template>
  <div>
    <b-container class='main' style='text-align:center;'>
      <b-carousel
        id='carousel-1'
        controls
        indicators
        background='black'
        img-width='1024'
        img-height='480'
        style='text-shadow: 1px 1px 2px #333;'
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          v-for='(slide,i) in slides'
          v-bind:key='"s"+i'
          :caption='slide.caption'
          :text='slide.text'
          :img-src='slide.src'
        ></b-carousel-slide>
      </b-carousel>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'CurricularMap',
  data() {
    return {
      slides: []
    }
  },
  created() {
    this.slides.push({
      caption: '🏠 Fase de Inicio',
      text: '',
      src: 'assets/Diapositiva1.PNG'
    })
    this.slides.push({
      caption: '🔧 Fase de Elaboración',
      text: '',
      src: 'assets/Diapositiva2.PNG'
    })
    this.slides.push({
      caption: '🏗️ Fase de Construcción',
      text: '',
      src: 'assets/Diapositiva3.PNG'
    })
    this.slides.push({
      caption: '😄 Fase de Transición',
      text: '',
      src: 'assets/Diapositiva4.PNG'
    })
  }
}
</script>

<style scoped>
</style>
