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
        :interval='interval'
        class='mb-3'
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
      <p
        class='parr'
      >En base al mapa curricular de la carrera Ingeniería en Software que imparte ITSON, hemos decidido dividir las materias y ordenarlas para que sea más visible que materias son de cada fase de la metodología RUP.</p>
      <p class='phase mb-4'>🏠 Inicio</p>
      <p
        class='parr'
      >Es importante que en la fase de inicio estén bien fundamentadas las habilidades de la comunicación, ya que en esta fase debemos prestar demasiada atención en comprender lo que el cliente nos está pidiendo, por lo que optamos por las materias de Emprendimiento, Comunicación efectiva, Optativa 1 y 2 de formación general e Inglés. También pensamos que al estar en el ámbito del software, tener conocimientos fundamentales de Ingeniería en software, administración de proyectos de software, además de tener razonamiento matemático para presentar un presupuesto adecuado a través de las materias de matemáticas y concluyendo con conocimiento general para un ingeniero como es Arquitectura de las computadoras y Sistemas Operativos.</p>
      <p class='phase mb-4'>🔧 Elaboración</p>
      <p
        class='parr'
      >En esta fase es imprescindible tener bastante claro cómo se va a desarrollar el proyecto, para que la arquitectura del proyecto sea la más adecuada. Pensamos que es necesario la materia Métodos ágiles de desarrollo, ya que ayuda a reducir el tiempo del proceso, como las Tecnologías de la información, además de tener conocimientos de programación y estructura de datos para efectuar el tiempo de demora, bases mucho más sólidas de matemáticas computacionales y tener la capacidad de Diseñar sistemas interactivos, Aplicaciones móviles y Sistemas empotrados para tener una idea de la magnitud de tiempo que se tardará en realizar el proyecto.</p>
      <p class='phase mb-4'>🏗️ Construcción</p>
      <p
        class='parr'
      >En esta fase decidimos optar por materias relacionadas con la mejora de la calidad del software, como Base de datos avanzadas, ya que es importante que el proyecto sea lo más seguro y confiable posible con ayuda de la Seguridad informática, además de aplicar Pruebas de software para conocer si los requerimientos que se pactaron en el inicio se han cumplido, de asegurar la Calidad del software y aplicar una Evaluación de software para que digamos con certeza que el proyecto ya está listo para ser implementado. Además de tener conocimiento de Redes para que la implementación sea adaptada de manera correcta.</p>
      <p class='phase mb-4'>😄 Transición</p>
      <p
        class='parr'
      >Pensamos que la materia de Proyecto de software integrador tiene una increíble manera de cómo se puede implementar de manera adecuada un proyecto de proporción masiva. A través de esta materia tenemos la idea de que nos brindará las herramientas necesarias para asegurar que el software esté disponible para el usuario final. Optamos por el tópico de Temas emegentes de aplicaciones web ya que nos parece de gran relevancia en un proyecto ya que nos ayuda a pulir los mínimos detalles y tener la seguridad de que el proyecto fue desarrollado con una calidad adecuada.</p>
      <p class='phase mb-4'>🌎 Recursos</p>
      <p class='mt-3'>
        <a
          href='https://www.itson.mx/oferta/isw/Documents/mapa_isw2016_v4_seriacion_simplificada_febrero2017.pdf'
        >Ver mapa curricular oficial del ITSON 2016.</a>
      </p>
      <p>
        <a
          href='https://www.itson.mx/oferta/isw/Paginas/isw.aspx'
        >Ir a la oferta académica de ISW del ITSON.</a>
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'CurricularMap',
  data() {
    return {
      slides: [],
      interval: 0
    }
  },
  created() {
    this.slides.push({
      caption: '🏠 Mapa curricular de Ingeniería en Software plan 2016 ITSON',
      text: '',
      src: 'assets/mapa.png'
    })
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

<style lang='scss' scoped>
.phase {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-radius: 2px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 150%;
}

.parr {
  text-align: justify;
  width: 100%;
}
</style>
