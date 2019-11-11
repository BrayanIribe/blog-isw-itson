<template>
  <div style='width:100%;padding-top:2%;'>
    <div class='main'>
      <div class='body'>
        <div
          v-for='(card, i) in cards'
          :key='"c"+i'
          class='i-card'
          :class='{"block": block  && (open[0].i !== i && open[1].i !== i), "margin": card.show || card.big}'
        >
          <Card
            :card='card'
            @click='pick(card, i)'
            :style='block ? "pointer-events: none" : ""'
          ></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './../components/Card'
export default {
  name: 'Memorama',
  components: { Card },
  data() {
    return {
      cards: [],
      open: [],
      block: false
    }
  },
  methods: {
    pick(card, i) {
      if (this.block || card.success) return
      card.show = true
      this.open.push({ i, card })
      if (this.open.length >= 2) {
        this.open[0].card.big = true
        this.open[1].card.big = true
        this.block = true
        setTimeout(() => {
          this.open[0].card.show = false
          this.open[0].card.big = false
          this.open[1].card.show = false
          this.open[1].card.big = false
          if (this.open[0].card.id === this.open[1].card.id) {
            this.open[0].card.success = true
            this.open[1].card.success = true
            this.open[0].card.show = true
            this.open[1].card.show = true
          }
          this.block = false
          this.open = []
        }, 2500)
      }
    },
    add(card, cardPar) {
      card.show = false
      card.success = false
      card.big = false
      let par = JSON.parse(JSON.stringify(card))
      delete par.description
      if (cardPar.url) par.url = cardPar.url
      if (cardPar.title) par.title = cardPar.title
      this.cards.push(card)
      this.cards.push(par)
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
    }
  },
  created() {
    this.add(
      {
        id: 'fast-design',
        title: 'Fase 2 - Diseño rápido',
        description:
          'Se crea un diseño simple del sistema. Da una breve idea del sistema al usuario. El diseño rápido ayuda a desarrollar el prototipo.'
      },
      {
        url: 'https://i.imgur.com/2eAEOoQ.jpg'
      }
    )

    this.add(
      {
        id: 'what-is',
        title: '¿Qué es la metodología de prototipos?',
        description:
          'Modelo de desarrollo de software en el que se construye, prueba y luego se vuelve a trabajar cuando sea necesario hasta que se logre un prototipo aceptable.'
      },
      { url: 'https://i.imgur.com/A9dRaxZ.png' }
    )

    this.add(
      {
        id: 'low-participation',
        title: 'Desventajas - Poca disposición a participar',
        description:
          'Los clientes pueden no estar dispuestos a participar en el ciclo de iteración'
      },
      {
        url:
          'http://userscontent2.emaze.com/images/e3afafdf-4ec9-4977-a3fd-da9c2df7869d/Slide6_Pic6_636086765364287696.png'
      }
    )

    this.add(
      {
        id: 'fast-error-detection',
        title: 'Ventajas - Detección de errores',
        description:
          'Los usuarios participan activamente en el desarrollo. Por lo tanto, se pueden detectar errores en la etapa inicial del proceso de desarrollo de software.'
      },
      {
        url:
          'https://i1.wp.com/blog.sqlauthority.com/wp-content/uploads/2018/03/errorman.jpg'
      }
    )

    this.add(
      {
        id: 'low-risk',
        title: 'Ventajas - Reducción de riesgo',
        description:
          'Se puede identificar la funcionalidad que falta, lo que ayuda a reducir el riesgo de falla, ya que la creación de prototipos también se considera una actividad de reducción de riesgos.'
      },
      {
        url:
          'https://blogdelacalidad.com/app/uploads/2019/08/software-para-gestao-de-riscos.png'
      }
    )

    this.add(
      {
        id: 'when-to-use',
        title: '¿Cuándo es conveniente usarlo?',
        description:
          'Cuando el cliente esté dispuesto a participar en el proceso y cuando los requisitos no sean claros.'
      },
      {
        url: 'https://e-bon.ir/wp-content/uploads/2018/07/684-2.jpg'
      }
    )

    this.add(
      {
        id: 'first-user-test',
        title: 'Fase 4 - Evaluación inicial del usuario',
        description:
          'En esta etapa, el sistema propuesto se presenta al cliente para una evaluación inicial. Ayuda a descubrir la fuerza y la debilidad del modelo de trabajo.'
      },
      {
        title: 'Fase 4 - Evaluación inicial del usuario',
        url: 'https://i.imgur.com/Qdd8FEp.png'
      }
    )

    this.shuffle(this.cards)
  }
}
</script>

<style lang="scss" scoped>
.i-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 20%;
  transition: 0.25s;
  &.block {
    opacity: 0.5 !important;
  }
}
.body {
  width: 120vh;
  height: 100vh;
  color: black;
  font-size: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 3rem;
  background: white;
  text-align: center;
}
.center {
  width: 100%;
  text-align: center !important;
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
</style>