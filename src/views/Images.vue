<template>
  <div>
    <b-container class='main' style='text-align:center;'>
      <h2 class='phase mb-4'>🔁 Fases del RUP</h2>
      <hr />
      <div class='mb-3' v-for='(fase, i) in fases' v-bind:key='"a"+i'>
        <div class='tag-name'>{{ fase.name }}</div>
        <b-img :src='fase.src' fluid-grow></b-img>
      </div>
      <h2 class='phase mb-4'>👨‍🔧️ Disciplinas del RUP</h2>
      <hr />
      <div
        class='mb-3'
        v-for='(disciplina, i) in disciplinas'
        v-bind:key='"b"+i'
      >
        <div class='tag-name red'>{{ disciplina.name }}</div>
        <b-img :src='disciplina.src' fluid></b-img>
      </div>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'Images',
  data() {
    return {
      fases: [],
      disciplinas: []
    }
  },
  methods: {
    add(name, src, type = 0) {
      if (type === 0) this.fases.push({ name, src })
      else this.disciplinas.push({ name, src })
    }
  },
  created() {
    this.add(
      '🏠 Inicio',
      'https://1.bp.blogspot.com/-jtZPCQ_4cAU/XbCX7L5AvVI/AAAAAAAAAo4/HI3JGdl57RcnxE4ebcqGD2wk2TE4CX8AACEwYBhgL/s1600/1278360_beb4_3.jpg'
    )
    this.add(
      '🔧 Elaboración',
      'https://1.bp.blogspot.com/-dXunrY3FI74/XbCX77cKKRI/AAAAAAAAApM/XmdfeBwgiLwR0ClxAbKw2S25y6MPBA-VACEwYBhgL/s1600/65437551-negocios-equipo-de-trabajo-profesional-presentaci%25C3%25B3n-de-la-formaci%25C3%25B3n-del-personal-reuni%25C3%25B3n-de-personal-seminari.jpg'
    )
    this.add(
      '🏗️ Construcción',
      'https://1.bp.blogspot.com/-kru_5PEQVYk/XbCX7JgnsII/AAAAAAAAAo8/zZxOTUkZaM4Nf6nlTv61MKI3tojZnlCgwCEwYBhgL/s1600/-tips-para-ayudarte-a-comenzar-a-escribir-la-tesis-jpg-.jpg'
    )
    this.add(
      '😄 Transición',
      'https://1.bp.blogspot.com/-bsFfnlKrPZs/XbCX7DZuxZI/AAAAAAAAApA/qYLWm6EKwy0jSGt9kjySK5er2euaTDSfQCEwYBhgL/s1600/13-ideas-para-tener-exito-en-tu-primera-reunion-con-un-potencial-nuevo-cliente.png'
    )

    // disclipinas

    this.add(
      '👨‍💼️ Modelado de negocio',
      'https://1.bp.blogspot.com/-t8ioB2dS874/XbCcVbPw7iI/AAAAAAAAAqc/3j_4-nyG1tIWqH-qkleJJX5grDnnTmM4ACEwYBhgL/s1600/meeting_1r8.png',
      1
    )

    this.add(
      '📝 Requerimientos',
      'https://1.bp.blogspot.com/-8vSfodPTHhE/XbCcUAJjgvI/AAAAAAAAAqg/oV6lBIQtHiIrq0QqKOgOwxkqWifnLivaACEwYBhgL/s1600/KarlaRequerimientos1200Comprimido.jpg',
      1
    )

    this.add(
      '📊 Análisis y 🎨 Diseño',
      'https://1.bp.blogspot.com/-wS9US79LzWI/XbCcVFIevWI/AAAAAAAAAqc/49bXFYFB36QdbE1xnMlgA3mx-BmUiAgpQCEwYBhgL/s1600/ingenieria.png',
      1
    )

    this.add(
      '👨‍💻️ Implementación',
      'https://1.bp.blogspot.com/-QPZDg026aJk/XbCcVs9vqwI/AAAAAAAAAqc/AZcx79Zh6TYVIuEBFOjyY5sM55-SZz3UACEwYBhgL/s1600/trabajo-colaborativo-dise-o-desarrollo-web-4_orig.png',
      1
    )

    this.add(
      '📝 Pruebas',
      'https://1.bp.blogspot.com/-L3YTgZLPBis/XbCcUEwOo_I/AAAAAAAAAqM/ctG1Dy96SRgLl24tkTpjK8ZlAQc4iQWYgCEwYBhgL/s1600/Prueba-de-usabilidad-movil.png',
      1
    )

    this.add(
      '🚀 Despliegue',
      'https://1.bp.blogspot.com/-lN48aNVR4r0/XbCcVD9o_4I/AAAAAAAAAqk/9Bs9w2-w2scMCNdGJGgbY4L-NOPZyR3HACEwYBhgL/s1600/man-1351346_960_720.png',
      1
    )

    this.add(
      '💼 Gestión del proyecto',
      'https://1.bp.blogspot.com/-m6TEcMac29Q/XbCcU_pX8tI/AAAAAAAAAqU/-UjB_u10Ego6DWw3zKEv9srOrjQ5OQhUACEwYBhgL/s1600/depositphotos_71550381-stock-illustration-business-management-meeting.jpg',
      1
    )

    this.add(
      '🛠️ Configuración y control de cambios',
      'https://1.bp.blogspot.com/-gmQA5n7DL1o/XbCcUIrIXyI/AAAAAAAAAqQ/uflLUkEMkbU-7CATkbgoUnMK3LBQQDH1ACEwYBhgL/s1600/51022789-la-configuraci%25C3%25B3n-del-programa-icono-de-dibujos-animados-.jpg',
      1
    )

    this.add(
      '🌎 Ambiente',
      'https://1.bp.blogspot.com/-nNuNJd4wCWI/XbCcUoQkITI/AAAAAAAAAqY/ezfSETgf1eEqAJEQNs92d1fDqdME0djeQCEwYBhgL/s1600/contenidotexto.jpg',
      1
    )
  }
}
</script>

<style lang='scss' scoped>
</style>
