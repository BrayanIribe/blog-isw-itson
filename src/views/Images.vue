<template>
  <div>
    <b-container class='main' style='text-align:center;'>
      <h2 class='phase mb-4'>🔁 Fases del RUP</h2>
      <hr />
      <div class='row'>
        <div class='col-6 mb-3' v-for='(fase, i) in fases' v-bind:key='"a"+i'>
          <div class='tag-name'>{{ fase.name }}</div>
          <b-img :src='fase.src' fluid-grow></b-img>
        </div>
      </div>
      <hr />
      <h2 class='phase mb-4'>👨‍🔧️ Disciplinas del RUP</h2>
      <hr />
      <div class='row'>
        <div
          class='col-6 mb-3'
          v-for='(disciplina, i) in disciplinas'
          v-bind:key='"b"+i'
        >
          <div class='tag-name red'>{{ disciplina.name }}</div>
          <b-img :src='disciplina.src' fluid></b-img>
        </div>
      </div>
    </b-container>
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
      'https://media.istockphoto.com/vectors/webpage-building-and-software-technology-development-vector-id898623886'
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
      'https://www.juangalera.com/wp-content/uploads/2017/08/disen%CC%83o-web-jerez-de-la-frontera-desarrollo-web.jpg',
      1
    )

    this.add(
      '👨‍💻️ Implementación',
      'https://1.bp.blogspot.com/-QPZDg026aJk/XbCcVs9vqwI/AAAAAAAAAqc/AZcx79Zh6TYVIuEBFOjyY5sM55-SZz3UACEwYBhgL/s1600/trabajo-colaborativo-dise-o-desarrollo-web-4_orig.png',
      1
    )

    this.add(
      '📝 Pruebas',
      'https://www.criptomonedaseico.com/wp-content/uploads/2018/09/www.criptomonedaseico.com-crisis-de-bitcoin-evitada-por-el-descubrimiento-de-errores-de-software-750x430.jpg',
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
      'https://previews.123rf.com/images/rastudio/rastudio1708/rastudio170809252/84748293-icono-de-l%C3%ADnea-de-vector-de-configuraci%C3%B3n-de-equipo-aislado-sobre-fondo-blanco-icono-de-l%C3%ADnea-de-configurac.jpg',
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
