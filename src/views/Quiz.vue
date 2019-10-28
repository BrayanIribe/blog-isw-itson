<template>
  <div class='frame'>
    <div class='body'>
      <Quiz :questions='questions'></Quiz>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizV',
  data() {
    return {
      questions: []
    }
  },
  methods: {},
  created() {
    this.questions.push({
      title: '👨‍💻️ ¿Qué es RUP?',
      answers: [
        'Un proceso para hacer una base de datos.',
        'Una metodología para desarrollar software.',
        'Es el nombre del procedimiento donde el cliente da los requerimientos.'
      ],
      correct: 1
    })

    this.questions.push({
      title: '🍃 ¿Qué es un ciclo de vida?',
      answers: [
        'Es el que determina la vida del producto.',
        'Es el proceso donde se codifica el producto.',
        'Es una fase secuencial para determinar si los objetivos se han cumplido.'
      ],
      correct: 2
    })

    this.questions.push({
      title: '🏗️ ¿Qué ocurre en la fase de construcción?',
      answers: [
        'Se crea el producto.',
        'Se construyen las bases del producto.',
        'No sé.'
      ],
      correct: 0
    })

    this.questions.push({
      title: '👨‍🔧️ ¿Qué son las disciplinas?',
      answers: [
        'Se encarga de estudiar los estándares para hacer software.',
        'Normas utilizadas para desarrollar productos.',
        'Conjunto de actividades de un área específica del proyecto.'
      ],
      correct: 2
    })

    this.questions.push({
      title: '📝 ¿Qué ocurre en la disciplina de requerimientos?',
      answers: [
        'Establecer lo que el sistema debe hacer, realizar estimaciones, etc.',
        'Conocer los requerimientos del cliente.',
        'Requerir al desarrollador hacer el producto.'
      ],
      correct: 0
    })

    this.questions.push({
      title: '🚀 ¿Para qué sirve la disciplina de despliegue?',
      answers: [
        'Almacenar el código.',
        'Distribuir el producto al usuario final.',
        'Se hacen pruebas del producto.'
      ],
      correct: 1
    })

    this.questions.push({
      title: '📊 ¿Qué hacen los analistas?',
      answers: [
        'Analizan la información',
        'Llegan a un acuerdo con el cliente.',
        'No sé'
      ],
      correct: 1
    })

    this.questions.push({
      title: '👨‍💻️ ¿Qué hacen los desarrolladores?',
      answers: [
        'Hacer el procedimiento indicado.',
        'Crear el esquema de análisis.',
        'Desarrollar el software requerido.'
      ],
      correct: 2
    })
  }
}
</script>

<style lang="scss" scoped>
.frame {
  width: 100%;
  height: 1000px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.body {
  width: 50%;
  background-color: white;
}

@media only screen and (max-width: 900px) {
  .body {
    width: 100% !important;
  }
}
</style>