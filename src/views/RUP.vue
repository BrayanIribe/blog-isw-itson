<template>
  <div style='width:100%;padding-top:8%;'>
    <transition name='fade'>
      <b-list-group class='floating-navbar' v-if='showBookmarks'>
        <b-list-group-item href='#rup'>👨‍💻️ RUP</b-list-group-item>
        <b-list-group-item href='#caracteristicas'>📜 Características</b-list-group-item>
        <b-list-group-item href='#ciclo-de-vida'>🍃 Ciclo de vida</b-list-group-item>
        <b-list-group-item href='#disciplinas'>👨‍🔧️ Disciplinas</b-list-group-item>
        <b-list-group-item href='#flujo-de-trabajo'>💼 Flujo de trabajo</b-list-group-item>
        <b-list-group-item href='#roles'>👨‍💻 Roles</b-list-group-item>
        <b-list-group-item href='#bibliografias'>📕 Bibliografías</b-list-group-item>
      </b-list-group>
    </transition>
    <div class='main'>
      <div class='body'>
        <div class='title' id='rup'>👨‍💻️ RUP</div>
        <div class='info'>
          <p
            class='block'
          >El presente blog se refiere al tema “Rational Unified Process (RUP)” el cual puede ser definido como un proceso de ingeniería de software, para producir software de calidad, que cumpla con las normas a nivel mundial y que ofrezca flexibilidad en plazos y presupuestos.</p>
          <p class='phase center mb-4' id='caracteristicas'>📜 Características</p>
          <p class='sub-phase mb-4'>🏢 Dirigido por Casos de Uso</p>
          <p
            class='block'
          >Se define un caso de uso como un fragmento de funcionalidad del sistema que proporciona al usuario un valor añadido. Los casos de uso representan los requisitos funcionales del sistema.</p>
          <p class='sub-phase mb-4'>🎯 Proceso centrado en la arquitectura</p>
          <p
            class='block'
          >La arquitectura es la estructura de los componentes importantes de un sistema interactuando mediante interfaces. Es una vista del diseño completo con las características más importantes resaltadas, dejando los detalles de lado.</p>
          <p class='sub-phase mb-4'>🔄 Proceso iterativo e incremental</p>
          <p class='block'>
            Cada mini proyecto es una iteración que resulta en un incremento.
            Las iteraciones hace referencia a pasos en el flujo de trabajo, y los incrementos a crecimientos en el producto. Las iteraciones deben estar controladas, esto significa que deben seleccionarse y ejecutarse de una forma planificada.
          </p>
          <p class='phase center mb-4' id='ciclo-de-vida'>🍃 Ciclo de vida</p>
          <p
            class='block'
          >El ciclo de vida del software del RUP se descompone en cuatro fases secuenciales. En cada extremo de una fase se realiza una evaluación para determinar si los objetivos de la fase se han cumplido. Una evaluación satisfactoria permite que el proyecto se mueva a la próxima fase.</p>
          <p
            class='block'
          >El ciclo de vida del software del RUP se descompone en cuatro fases secuenciales.</p>
          <p class='sub-phase mb-4'>🏠 Inicio</p>
          <p
            class='block'
          >Se enfoca hacia la comprensión del problema y la tecnología, la delimitación del ámbito del proyecto, la eliminación de los riesgos críticos, y al establecimiento de una base de la arquitectura.</p>
          <p class='sub-phase mb-4'>🔧 Elaboración</p>
          <p
            class='block mb-4'
          >Durante la fase de elaboración se especifican en detalle la mayoría de los casos de uso del producto y se diseña la arquitectura.</p>
          <p class='sub-phase mb-4'>🏗️ Construcción</p>
          <p
            class='block mb-4'
          >Durante la fase de construcción se crea el producto. La línea base de la arquitectura crece hasta convertirse en el sistema completo.</p>
          <p class='sub-phase mb-4'>😄 Transición</p>
          <p class='block mb-4'>
            Durante la fase de transición se asegurar que el software está disponible para los usuarios finales,
            principalmente incluye pruebas, la preparación del producto para su entrega y ajustes
            menores debido a la retroalimentación del usuario.
          </p>
          <p
            class='phase mb-4'
            id='disciplinas'
            name='disciplinas'
          >👨‍🔧️ Disciplinas</p>
          <p
            class='block'
          >Cada disciplina es un conjunto de actividades relacionadas (flujos de trabajo) vinculadas a un área específica dentro del proyecto total. A continuación se describe rápidamente cada una de estas disciplinas.</p>
          <p class='sub-phase mb-4'>👨‍💼️ Modelado de negocio</p>
          <p
            class='block mb-4'
          >Esta disciplina tiene como objetivos comprender la estructura y la dinámica de la organización, comprender problemas actuales e identificar posibles mejoras, comprender los procesos de negocio.</p>
          <p class='sub-phase mb-4'>📝 Requerimientos</p>
          <p
            class='block mb-4'
          >Esta disciplina tiene como objetivos establecer lo que el sistema debe hacer, definir los límites del sistema, y una interfaz de usuario, realizar una estimación del costo y tiempo de desarrollo.</p>
          <p class='sub-phase mb-4'>📊 Análisis y 🎨 Diseño</p>
          <p
            class='block mb-4'
          >Esta disciplina tiene como objetivos establecer lo que el sistema debe hacer, definir los límites del sistema, y una interfaz de usuario, realizar una estimación del costo y tiempo de desarrollo.</p>
          <p class='sub-phase mb-4'>👨‍💻️ Implementación</p>
          <p
            class='block mb-4'
          >En este flujo de trabajo se implementan las clases y objetos en archivos fuente, binarios, ejecutables y demás. El resultado final de este flujo de trabajo es un sistema ejecutable.</p>
          <p class='sub-phase mb-4'>📝 Pruebas</p>
          <p
            class='block mb-4'
          >Este flujo de trabajo es el encargado de evaluar la calidad del producto que estamos desarrollando, pero no para aceptar o rechazar el producto al final del proceso de desarrollo, sino que debe ir integrado en todo el ciclo de vida.</p>
          <p class='sub-phase mb-4'>🚀 Despliegue</p>
          <p
            class='block mb-4'
          >El objetivo de este flujo de trabajo es producir con éxito distribuciones del producto y distribuirlo a los usuarios.</p>
          <p class='sub-phase mb-4'>💼 Gestión del proyecto</p>
          <p
            class='block mb-4'
          >La Gestión del proyecto nos permite lograr un balance al gestionar objetivos, riesgos y restricciones para desarrollar un producto que sea acorde a los requisitos de los clientes y los usuarios.</p>
          <p class='sub-phase mb-4'>🛠️ Configuración y control de cambios</p>
          <p
            class='block mb-4'
          >La finalidad de este flujo de trabajo es mantener la integridad de todos los artefactos que se crean en el proceso, así como de mantener información del proceso evolutivo que han seguido.</p>
          <p class='sub-phase mb-4'>🌎 Ambiente</p>
          <p
            class='block mb-4'
          >La finalidad de este flujo de trabajo es dar soporte al proyecto con las adecuadas herramientas, procesos y métodos. Brinda una especificación de las herramientas que se van a necesitar en cada momento, así como definir la instancia concreta del proceso que se va a seguir.</p>
          <p class='sub-phase mb-4'>🛠 Artefactos</p>
          <p
            class='block mb-4'
          >Un producto o artefacto es un trozo de información que es producido, modificado o usado durante el proceso de desarrollo de software.</p>

          <p class='phase mb-4' id='flujo-de-trabajo'>💼 Flujo de trabajo</p>
          <p
            class='block mb-4'
          >Un flujo de trabajo describe la secuencia en que se realizan las actividades en una disciplina, quienes la realizan (trabajadores) y que artefactos producen.</p>
          <p class='phase mb-4' id='roles'>👨‍💻 Roles</p>
          <p
            class='block'
          >Son los personajes encargados de la realización de las actividades definidas dentro de los flujos de trabajo de cada una de las disciplinas del RUP, estos actores se dividen en varias categorías.</p>
          <p class='sub-phase mb-4'>📊 Analistas</p>
          <p
            class='block'
          >Son los encargados de ponerse de acuerdo con el cliente y recibir los requerimientos.</p>
          <p class='sub-phase mb-4'>👨‍💻️ Desarrolladores</p>
          <p
            class='block'
          >Son los que desarrollan el software encargado por el cliente, según los requerimientos y el criterio del analista.</p>
          <p class='sub-phase mb-4'>👨‍💼️ Gestores</p>
          <p
            class='block'
          >Son los jefes de proyecto. Se encargan de mantener en orden el equipo.</p>
          <p class='sub-phase mb-4'>⛑️ Apoyo</p>
          <p
            class='block'
          >Desempeñan diferentes roles, como documentadores, artistas, administradores de sisteas, etc.</p>
          <p class='sub-phase mb-4'>📝 Especialistas en pruebas</p>
          <p
            class='block'
          >Se encargan de hacer las pruebas del software requerido o llevar el diseño de las pruebas.</p>
          <p class='sub-phase mb-4'>🛠️ Otros roles</p>
          <p
            class='block'
          >Estas personas pueden desempeñar cualquier rol, como desarrollador, gestor, etc.</p>
          <p class='phase mb-4' id='bibliografias'>📕 Bibliografías</p>
          <Biography
            src='http://dsc.itmorelia.edu.mx/web/images/logo.png'
            href='http://dsc.itmorelia.edu.mx/~jcolivares/courses/pm10a/rup.pdf'
            style='border: 2px solid white;'
            white='yes'
            class='mb-3'
            bgcolor='white'
          >Gustavo Torossi. (s/f). El Proceso Unificado de Desarrollo de Software. 2019, de Departamento de Sistemas y Computación del Instituto Tecnológico de Morelia.</Biography>
          <Biography
            src='http://3.bp.blogspot.com/-GQI9FjY84MM/Ti4rVWnVY4I/AAAAAAAAAB8/MBOTgUxDPno/s240/usac-sin-fondo.png'
            href='http://biblioteca.usac.edu.gt/tesis/08/08_0308_CS.pdf'
            style='border: 2px solid white;'
            white='yes'
            bgcolor='white'
            class='mb-3'
          >Julio Cesar Rueda Chacón. (2006). Aplicación de la metodología RUP para el desarrollo de rápido de aplicaciones. 2019, de Universidad de San Carlos de Guatemala.</Biography>
          <Biography
            src='http://rd.udb.edu.sv:8080/jspui/image/logo.gif'
            href='http://rd.udb.edu.sv:8080/jspui/bitstream/11715/478/1/47400_tesis.pdf'
            style='border: 2px solid white;'
            white='yes'
            bgcolor='white'
            class='mb-3'
          >Belloso Cicilia, Claudia Ivonne. (2009). Monografía sobre la metodología de desarrollo de software, rational unified proccess (RUP). 2019, de Universidad Don Bosco.</Biography>
          <Biography
            src='https://www.uaeh.edu.mx/images/uaeh_logo_color.png'
            href='https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/11150/Flujo%20de%20trabajo%20del%20análisis%20y%20diseño%20de%20Rup.pdf'
            style='border: 2px solid white;'
            white='yes'
            bgcolor='white'
            class='mb-3'
          >Sergio Demián Gracián Hernández. (2006). Flujo de trabajo del análisis y diseño del RUP. 2019, de Universidad Autónoma del Estado de Hidalgo.</Biography>
          <Biography
            src='https://www.unam.mx/sites/default/files/images/eventos/acciones_0.jpg'
            href='http://www.ptolomeo.unam.mx:8080/xmlui/bitstream/handle/132.248.52.100/175/A8%20Cap%C3%ADtulo%205.pdf?sequence=8'
            style='border: 2px solid white;'
            white='yes'
            bgcolor='white'
            class='mb-3'
          >s/a. (s/f). Proceso Unificado Rational Aplicado. 2019, de Repositorio digital de la Facultad de Ingeniería de la Universidad de la UNAM.</Biography>
          <Biography
            src='https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/3b/bd/a0/3bbda010-224e-f149-e1b4-ec9dcf3b649f/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/320x0w.jpg'
            href='https://youtu.be/AY5Dh3XYshk'
            style='border: 2px solid white;'
            white='yes'
            bgcolor='white'
            class='mb-3'
          >Julián Vanegas. (2016). Metodología RUP. 22 de octubre del 2019, de YouTube .</Biography>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RUP',
  data() {
    return {
      showBookmarks: true
    }
  },
  created() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.showBookmarks = false
    }
  }
}
</script>

<style lang="scss" scoped>
.what-is {
  font-size: 200%;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: lighter;
}
.body {
  width: 40%;
  color: white;
  font-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
}

.phase {
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  border-radius: 2px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.phase,
.sub-phase {
  font-size: 200%;
  text-align: center;
  width: 100%;
}

.sub-phase {
  font-size: 150%;
  text-align: left;
}
.body > .info {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.center {
  width: 100%;
  text-align: center !important;
}

.info > .block {
  width: 100%;
  font-size: 130%;
  text-align: justify;
}

.body {
  background: transparent;
  color: white;
  text-align: center;

  .title {
    user-select: none;
    font-size: 800%;
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