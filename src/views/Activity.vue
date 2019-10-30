<template>
  <div class='frame'>
    <p class='instruction'>
      Bienvenido a la actividad 🕹️! Para ingresar una palabra selecciona la celda donde se encuentra el número.
      <br />Cuando escribas la palabra correcta, la celda se marcará en
      <span
        class='text-danger'
      >rojo</span>.
    </p>
    <iframe
      src='https://www.puzzlefast.com/en/puzzles/2019102723204536/embedded-puzzle'
    >Cargando&#8230;</iframe>
  </div>
</template>

<script>
export default {
  name: 'Activity'
}
</script>

<style lang="scss" scoped>
.instruction {
  background-color: white;
  font-size: 200%;
  width: 100%;
  padding: 20px;
  margin: 0;
}
.frame {
  width: 100%;
  height: 100%;
  padding-left: 25px;
  padding-right: 25px;
}
iframe {
  background-color: white;
  border: 0;
  width: 100%;
  height: 900px;
  font-size: 200%;
}
</style>