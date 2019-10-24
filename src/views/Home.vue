<template>
  <div style='width:100%;height:100%;min-height:100%;'>
    <div class='main'>
      <div class='body'>
        <div class='title'>👨‍💻️ RUP</div>
        <div class='info'>
          <p>El Proceso Unificado Racional (Rational Unified Process – RUP) es un Proceso de Ingeniería de Software que provee un acercamiento disciplinado para asignar tareas y responsabilidades en una organización.</p>
          <p class='phase mb-4'>🔁 Fases del RUP</p>
          <p class='phase mb-4'>👨‍🔧️ Disciplinas del RUP</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang='scss' scoped>
.body {
  width: 50%;
  color: white;
  font-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.phase {
  font-size: 200%;
  text-align: center !important;
  width: 40%;
}
.body > .info {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.info > p:not(.phase) {
  width: 100%;
  font-size: 130%;
  text-align: justify;
}
.body {
  background: transparent;
  color: white;
  text-align: center;
  user-select: none;

  .title {
    font-size: 800%;
    margin-bottom: 50px;
    font-weight: normal;
  }
}

@media only screen and (max-width: 600px) {
  .main {
    height: auto !important;
    min-height: auto !important;
  }
  .body {
    width: 100% !important;
  }
}

.main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 100%;
  min-height: 100%;
}

.i-bt-picker {
  width: 100%;
  height: 60%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.picker {
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3rem !important;
  border-radius: 100% !important;
  width: 300px;
  height: 300px;
  font-weight: lighter !important;
}
</style>
