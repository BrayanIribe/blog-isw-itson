(function(e){function a(a){for(var t,r,n=a[0],c=a[1],l=a[2],u=0,p=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);d&&d(a);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,a=0;a<o.length;a++){for(var s=o[a],t=!0,n=1;n<s.length;n++){var c=s[n];0!==i[c]&&(t=!1)}t&&(o.splice(a--,1),e=r(r.s=s[0]))}return e}var t={},i={app:0},o=[];function r(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,a,s){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)r.d(s,t,function(a){return e[a]}.bind(null,t));return s},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,a,s){e.exports=s("56d7")},"0ed7":function(e,a,s){},"10c2":function(e,a,s){},"2fc4":function(e,a,s){},"38e4":function(e,a,s){},"4a56":function(e,a,s){"use strict";var t=s("ceb3"),i=s.n(t);i.a},"52cf":function(e,a,s){"use strict";var t=s("c5d9"),i=s.n(t);i.a},"56d7":function(e,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var t=s("2b0e"),i=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{attrs:{id:"app"}},[s("NavBar"),e.showHelp?s("transition",{attrs:{name:"fade"}},[s("a",{staticClass:"to-up-bt",attrs:{href:"#app"},on:{click:function(a){e.showHelp=!1}}},[s("font-awesome-icon",{attrs:{icon:"chevron-up"}})],1)]):e._e(),s("transition",{attrs:{name:"fade"}},[s("router-view",{staticStyle:{"margin-top":"20px"}})],1)],1)},o=[],r={name:"app",data:function(){return{showHelp:!1}},created:function(){var e=this;setInterval((function(){e.showHelp=document.getElementById("html").scrollTop>300}),500)}},n=r,c=s("2877"),l=Object(c["a"])(n,i,o,!1,null,null,null),d=l.exports,u=(s("f9e3"),s("2dd8"),s("5f5b")),p=s("8c4f"),b=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticStyle:{width:"100%","padding-top":"8%"}},[s("div",{staticClass:"main"},[s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[e._v("👨‍💻️ RUP")]),s("div",{staticClass:"info"},[s("p",{staticClass:"phase"},[e._v(" Bienvenido a nuestro blog! Disfruta de su contenido. Selecciona una de las opciones que aparecen arriba. ")])])])])])}],h={name:"Home"},f=h,v=(s("5849"),Object(c["a"])(f,b,m,!1,null,"11e52895",null)),g=v.exports,_=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("b-container",{staticClass:"main",staticStyle:{"text-align":"center"}},[s("h2",{staticClass:"phase mb-4"},[e._v("🔁 Fases del RUP")]),s("hr"),s("div",{staticClass:"row"},e._l(e.fases,(function(a,t){return s("div",{key:"a"+t,staticClass:"col-6 mb-3"},[s("div",{staticClass:"tag-name"},[e._v(e._s(a.name))]),s("b-img",{attrs:{src:a.src,"fluid-grow":""}})],1)})),0),s("hr"),s("h2",{staticClass:"phase mb-4"},[e._v("👨‍🔧️ Disciplinas del RUP")]),s("hr"),s("div",{staticClass:"row"},e._l(e.disciplinas,(function(a,t){return s("div",{key:"b"+t,staticClass:"col-6 mb-3"},[s("div",{staticClass:"tag-name red"},[e._v(e._s(a.name))]),s("b-img",{attrs:{src:a.src,fluid:""}})],1)})),0)]),s("Footer")],1)},A=[],C={name:"Images",data:function(){return{fases:[],disciplinas:[]}},methods:{add:function(e,a){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;0===s?this.fases.push({name:e,src:a}):this.disciplinas.push({name:e,src:a})}},created:function(){this.add("🏠 Inicio","https://1.bp.blogspot.com/-jtZPCQ_4cAU/XbCX7L5AvVI/AAAAAAAAAo4/HI3JGdl57RcnxE4ebcqGD2wk2TE4CX8AACEwYBhgL/s1600/1278360_beb4_3.jpg"),this.add("🔧 Elaboración","https://1.bp.blogspot.com/-dXunrY3FI74/XbCX77cKKRI/AAAAAAAAApM/XmdfeBwgiLwR0ClxAbKw2S25y6MPBA-VACEwYBhgL/s1600/65437551-negocios-equipo-de-trabajo-profesional-presentaci%25C3%25B3n-de-la-formaci%25C3%25B3n-del-personal-reuni%25C3%25B3n-de-personal-seminari.jpg"),this.add("🏗️ Construcción","https://1.bp.blogspot.com/-kru_5PEQVYk/XbCX7JgnsII/AAAAAAAAAo8/zZxOTUkZaM4Nf6nlTv61MKI3tojZnlCgwCEwYBhgL/s1600/-tips-para-ayudarte-a-comenzar-a-escribir-la-tesis-jpg-.jpg"),this.add("😄 Transición","https://1.bp.blogspot.com/-bsFfnlKrPZs/XbCX7DZuxZI/AAAAAAAAApA/qYLWm6EKwy0jSGt9kjySK5er2euaTDSfQCEwYBhgL/s1600/13-ideas-para-tener-exito-en-tu-primera-reunion-con-un-potencial-nuevo-cliente.png"),this.add("👨‍💼️ Modelado de negocio","https://1.bp.blogspot.com/-t8ioB2dS874/XbCcVbPw7iI/AAAAAAAAAqc/3j_4-nyG1tIWqH-qkleJJX5grDnnTmM4ACEwYBhgL/s1600/meeting_1r8.png",1),this.add("📝 Requerimientos","https://1.bp.blogspot.com/-8vSfodPTHhE/XbCcUAJjgvI/AAAAAAAAAqg/oV6lBIQtHiIrq0QqKOgOwxkqWifnLivaACEwYBhgL/s1600/KarlaRequerimientos1200Comprimido.jpg",1),this.add("📊 Análisis y 🎨 Diseño","https://1.bp.blogspot.com/-wS9US79LzWI/XbCcVFIevWI/AAAAAAAAAqc/49bXFYFB36QdbE1xnMlgA3mx-BmUiAgpQCEwYBhgL/s1600/ingenieria.png",1),this.add("👨‍💻️ Implementación","https://1.bp.blogspot.com/-QPZDg026aJk/XbCcVs9vqwI/AAAAAAAAAqc/AZcx79Zh6TYVIuEBFOjyY5sM55-SZz3UACEwYBhgL/s1600/trabajo-colaborativo-dise-o-desarrollo-web-4_orig.png",1),this.add("📝 Pruebas","https://1.bp.blogspot.com/-L3YTgZLPBis/XbCcUEwOo_I/AAAAAAAAAqM/ctG1Dy96SRgLl24tkTpjK8ZlAQc4iQWYgCEwYBhgL/s1600/Prueba-de-usabilidad-movil.png",1),this.add("🚀 Despliegue","https://1.bp.blogspot.com/-lN48aNVR4r0/XbCcVD9o_4I/AAAAAAAAAqk/9Bs9w2-w2scMCNdGJGgbY4L-NOPZyR3HACEwYBhgL/s1600/man-1351346_960_720.png",1),this.add("💼 Gestión del proyecto","https://1.bp.blogspot.com/-m6TEcMac29Q/XbCcU_pX8tI/AAAAAAAAAqU/-UjB_u10Ego6DWw3zKEv9srOrjQ5OQhUACEwYBhgL/s1600/depositphotos_71550381-stock-illustration-business-management-meeting.jpg",1),this.add("🛠️ Configuración y control de cambios","https://1.bp.blogspot.com/-gmQA5n7DL1o/XbCcUIrIXyI/AAAAAAAAAqQ/uflLUkEMkbU-7CATkbgoUnMK3LBQQDH1ACEwYBhgL/s1600/51022789-la-configuraci%25C3%25B3n-del-programa-icono-de-dibujos-animados-.jpg",1),this.add("🌎 Ambiente","https://1.bp.blogspot.com/-nNuNJd4wCWI/XbCcUoQkITI/AAAAAAAAAqY/ezfSETgf1eEqAJEQNs92d1fDqdME0djeQCEwYBhgL/s1600/contenidotexto.jpg",1)}},w=C,y=Object(c["a"])(w,_,A,!1,null,"5ceaaa76",null),j=y.exports,k=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("b-container",{staticClass:"main",staticStyle:{"text-align":"center"}},[e._l(e.videos,(function(a,t){return s("div",{key:t,staticClass:"mb-3"},[s("div",{staticClass:"tag-name"},[e._v(e._s(a.name))]),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item",attrs:{src:a.src,allowfullscreen:""}})])])})),s("h2",{staticClass:"phase mb-4"},[e._v("📕 Bibliografías")]),s("hr"),s("Biography",{attrs:{src:"http://blogs.upn.edu.pe/ingenieria/wp-content/uploads/sites/4/2016/10/upn_blog_ing_software-rup_12-oct.jpg",href:"https://youtu.be/AY5Dh3XYshk"}},[e._v("Julián Vanegas. (2016). Metodología RUP. 22 de octubre del 2019, de YouTube.")]),s("Biography",{attrs:{src:"https://cdn.goconqr.com/uploads/slide_property/image/735278/desktop_a2ab7898-7965-49a8-a47f-de4c93be620f.jpg",href:"https://www.youtube.com/watch?v=7paA_3VxSrQ"}},[e._v("Ingenieros2011 (2016). Ejemplo RUP. 2019, de Youtube.")])],2),s("Footer")],1)},x=[],E={name:"Images",data:function(){return{videos:[]}},methods:{add:function(e,a){this.videos.push({name:e,src:a})}},created:function(){this.add("🤔 ¿Qué es la metodología RUP?","https://www.youtube.com/embed/AY5Dh3XYshk"),this.add("💭 ¿Cómo se usa en la vida diaria?","https://www.youtube.com/embed/7paA_3VxSrQ")}},S=E,q=Object(c["a"])(S,k,x,!1,null,"3c611e6c",null),B=q.exports,P=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("b-container",{staticClass:"main",staticStyle:{"text-align":"center"}},[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",controls:"",indicators:"",background:"black","img-width":"1024","img-height":"480"}},e._l(e.slides,(function(e,a){return s("b-carousel-slide",{key:"s"+a,attrs:{caption:e.caption,text:e.text,"img-src":e.src}})})),1),s("p",{staticClass:"mt-3"},[s("a",{attrs:{href:"https://www.itson.mx/oferta/isw/Documents/mapa_isw2016_v4_seriacion_simplificada_febrero2017.pdf"}},[e._v("Ver mapa curricular oficial del ITSON 2016.")])]),s("p",[s("a",{attrs:{href:"https://www.itson.mx/oferta/isw/Paginas/isw.aspx"}},[e._v("Ir a la oferta académica de ISW del ITSON.")])])],1),s("Footer")],1)},I=[],U={name:"CurricularMap",data:function(){return{slides:[]}},created:function(){this.slides.push({caption:"🏠 Mapa curricular de Ingeniería en Software plan 2016 ITSON",text:"",src:"assets/mapa.png"}),this.slides.push({caption:"🏠 Fase de Inicio",text:"",src:"assets/Diapositiva1.PNG"}),this.slides.push({caption:"🔧 Fase de Elaboración",text:"",src:"assets/Diapositiva2.PNG"}),this.slides.push({caption:"🏗️ Fase de Construcción",text:"",src:"assets/Diapositiva3.PNG"}),this.slides.push({caption:"😄 Fase de Transición",text:"",src:"assets/Diapositiva4.PNG"})}},D=U,O=Object(c["a"])(D,P,I,!1,null,"940fe024",null),R=O.exports,L=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticStyle:{width:"100%","padding-top":"8%"}},[s("transition",{attrs:{name:"fade"}},[e.showBookmarks?s("b-list-group",{staticClass:"floating-navbar"},[s("b-list-group-item",{attrs:{href:"#rup"}},[e._v("👨‍💻️ RUP")]),s("b-list-group-item",{attrs:{href:"#caracteristicas"}},[e._v("📜 Características")]),s("b-list-group-item",{attrs:{href:"#ciclo-de-vida"}},[e._v("🍃 Ciclo de vida")]),s("b-list-group-item",{attrs:{href:"#disciplinas"}},[e._v("👨‍🔧️ Disciplinas")]),s("b-list-group-item",{attrs:{href:"#flujo-de-trabajo"}},[e._v("💼 Flujo de trabajo")]),s("b-list-group-item",{attrs:{href:"#roles"}},[e._v("👨‍💻 Roles")]),s("b-list-group-item",{attrs:{href:"#bibliografias"}},[e._v("📕 Bibliografías")])],1):e._e()],1),s("div",{staticClass:"main"},[s("div",{staticClass:"body"},[s("div",{staticClass:"title",attrs:{id:"rup"}},[e._v("👨‍💻️ RUP")]),s("div",{staticClass:"info"},[s("p",{staticClass:"block"},[e._v("El presente blog se refiere al tema “Rational Unified Process (RUP)” el cual puede ser definido como un proceso de ingeniería de software, para producir software de calidad, que cumpla con las normas a nivel mundial y que ofrezca flexibilidad en plazos y presupuestos.")]),s("p",{staticClass:"phase center mb-4",attrs:{id:"caracteristicas"}},[e._v("📜 Características")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🏢 Dirigido por Casos de Uso")]),s("p",{staticClass:"block"},[e._v("Se define un caso de uso como un fragmento de funcionalidad del sistema que proporciona al usuario un valor añadido. Los casos de uso representan los requisitos funcionales del sistema.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🎯 Proceso centrado en la arquitectura")]),s("p",{staticClass:"block"},[e._v("La arquitectura es la estructura de los componentes importantes de un sistema interactuando mediante interfaces. Es una vista del diseño completo con las características más importantes resaltadas, dejando los detalles de lado.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🔄 Proceso iterativo e incremental")]),s("p",{staticClass:"block"},[e._v(" Cada mini proyecto es una iteración que resulta en un incremento. Las iteraciones hace referencia a pasos en el flujo de trabajo, y los incrementos a crecimientos en el producto. Las iteraciones deben estar controladas, esto significa que deben seleccionarse y ejecutarse de una forma planificada. ")]),s("p",{staticClass:"phase center mb-4",attrs:{id:"ciclo-de-vida"}},[e._v("🍃 Ciclo de vida")]),s("p",{staticClass:"block"},[e._v("El ciclo de vida del software del RUP se descompone en cuatro fases secuenciales. En cada extremo de una fase se realiza una evaluación para determinar si los objetivos de la fase se han cumplido. Una evaluación satisfactoria permite que el proyecto se mueva a la próxima fase.")]),s("p",{staticClass:"block"},[e._v("El ciclo de vida del software del RUP se descompone en cuatro fases secuenciales.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🏠 Inicio")]),s("p",{staticClass:"block"},[e._v("Se enfoca hacia la comprensión del problema y la tecnología, la delimitación del ámbito del proyecto, la eliminación de los riesgos críticos, y al establecimiento de una base de la arquitectura.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🔧 Elaboración")]),s("p",{staticClass:"block mb-4"},[e._v("Durante la fase de elaboración se especifican en detalle la mayoría de los casos de uso del producto y se diseña la arquitectura.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🏗️ Construcción")]),s("p",{staticClass:"block mb-4"},[e._v("Durante la fase de construcción se crea el producto. La línea base de la arquitectura crece hasta convertirse en el sistema completo.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("😄 Transición")]),s("p",{staticClass:"block mb-4"},[e._v(" Durante la fase de transición se asegurar que el software está disponible para los usuarios finales, principalmente incluye pruebas, la preparación del producto para su entrega y ajustes menores debido a la retroalimentación del usuario. ")]),s("p",{staticClass:"phase mb-4",attrs:{id:"disciplinas",name:"disciplinas"}},[e._v("👨‍🔧️ Disciplinas")]),s("p",{staticClass:"block"},[e._v("Cada disciplina es un conjunto de actividades relacionadas (flujos de trabajo) vinculadas a un área específica dentro del proyecto total. A continuación se describe rápidamente cada una de estas disciplinas.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("👨‍💼️ Modelado de negocio")]),s("p",{staticClass:"block mb-4"},[e._v("Esta disciplina tiene como objetivos comprender la estructura y la dinámica de la organización, comprender problemas actuales e identificar posibles mejoras, comprender los procesos de negocio.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("📝 Requerimientos")]),s("p",{staticClass:"block mb-4"},[e._v("Esta disciplina tiene como objetivos establecer lo que el sistema debe hacer, definir los límites del sistema, y una interfaz de usuario, realizar una estimación del costo y tiempo de desarrollo.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("📊 Análisis y 🎨 Diseño")]),s("p",{staticClass:"block mb-4"},[e._v("Esta disciplina tiene como objetivos establecer lo que el sistema debe hacer, definir los límites del sistema, y una interfaz de usuario, realizar una estimación del costo y tiempo de desarrollo.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("👨‍💻️ Implementación")]),s("p",{staticClass:"block mb-4"},[e._v("En este flujo de trabajo se implementan las clases y objetos en archivos fuente, binarios, ejecutables y demás. El resultado final de este flujo de trabajo es un sistema ejecutable.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("📝 Pruebas")]),s("p",{staticClass:"block mb-4"},[e._v("Este flujo de trabajo es el encargado de evaluar la calidad del producto que estamos desarrollando, pero no para aceptar o rechazar el producto al final del proceso de desarrollo, sino que debe ir integrado en todo el ciclo de vida.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🚀 Despliegue")]),s("p",{staticClass:"block mb-4"},[e._v("El objetivo de este flujo de trabajo es producir con éxito distribuciones del producto y distribuirlo a los usuarios.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("💼 Gestión del proyecto")]),s("p",{staticClass:"block mb-4"},[e._v("La Gestión del proyecto nos permite lograr un balance al gestionar objetivos, riesgos y restricciones para desarrollar un producto que sea acorde a los requisitos de los clientes y los usuarios.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🛠️ Configuración y control de cambios")]),s("p",{staticClass:"block mb-4"},[e._v("La finalidad de este flujo de trabajo es mantener la integridad de todos los artefactos que se crean en el proceso, así como de mantener información del proceso evolutivo que han seguido.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🌎 Ambiente")]),s("p",{staticClass:"block mb-4"},[e._v("La finalidad de este flujo de trabajo es dar soporte al proyecto con las adecuadas herramientas, procesos y métodos. Brinda una especificación de las herramientas que se van a necesitar en cada momento, así como definir la instancia concreta del proceso que se va a seguir.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🛠 Artefactos")]),s("p",{staticClass:"block mb-4"},[e._v("Un producto o artefacto es un trozo de información que es producido, modificado o usado durante el proceso de desarrollo de software.")]),s("p",{staticClass:"phase mb-4",attrs:{id:"flujo-de-trabajo"}},[e._v("💼 Flujo de trabajo")]),s("p",{staticClass:"block mb-4"},[e._v("Un flujo de trabajo describe la secuencia en que se realizan las actividades en una disciplina, quienes la realizan (trabajadores) y que artefactos producen.")]),s("p",{staticClass:"phase mb-4",attrs:{id:"roles"}},[e._v("👨‍💻 Roles")]),s("p",{staticClass:"block"},[e._v("Son los personajes encargados de la realización de las actividades definidas dentro de los flujos de trabajo de cada una de las disciplinas del RUP, estos actores se dividen en varias categorías.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("📊 Analistas")]),s("p",{staticClass:"block"},[e._v("Son los encargados de ponerse de acuerdo con el cliente y recibir los requerimientos.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("👨‍💻️ Desarrolladores")]),s("p",{staticClass:"block"},[e._v("Son los que desarrollan el software encargado por el cliente, según los requerimientos y el criterio del analista.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("👨‍💼️ Gestores")]),s("p",{staticClass:"block"},[e._v("Son los jefes de proyecto. Se encargan de mantener en orden el equipo.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("⛑️ Apoyo")]),s("p",{staticClass:"block"},[e._v("Desempeñan diferentes roles, como documentadores, artistas, administradores de sisteas, etc.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("📝 Especialistas en pruebas")]),s("p",{staticClass:"block"},[e._v("Se encargan de hacer las pruebas del software requerido o llevar el diseño de las pruebas.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🛠️ Otros roles")]),s("p",{staticClass:"block"},[e._v("Estas personas pueden desempeñar cualquier rol, como desarrollador, gestor, etc.")]),s("p",{staticClass:"phase mb-4",attrs:{id:"bibliografias"}},[e._v("📕 Bibliografías")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"http://dsc.itmorelia.edu.mx/web/images/logo.png",href:"http://dsc.itmorelia.edu.mx/~jcolivares/courses/pm10a/rup.pdf",white:"yes",bgcolor:"white"}},[e._v("Gustavo Torossi. (s/f). El Proceso Unificado de Desarrollo de Software. 2019, de Departamento de Sistemas y Computación del Instituto Tecnológico de Morelia.")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"http://3.bp.blogspot.com/-GQI9FjY84MM/Ti4rVWnVY4I/AAAAAAAAAB8/MBOTgUxDPno/s240/usac-sin-fondo.png",href:"http://biblioteca.usac.edu.gt/tesis/08/08_0308_CS.pdf",white:"yes",bgcolor:"white"}},[e._v("Julio Cesar Rueda Chacón. (2006). Aplicación de la metodología RUP para el desarrollo de rápido de aplicaciones. 2019, de Universidad de San Carlos de Guatemala.")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"http://rd.udb.edu.sv:8080/jspui/image/logo.gif",href:"http://rd.udb.edu.sv:8080/jspui/bitstream/11715/478/1/47400_tesis.pdf",white:"yes",bgcolor:"white"}},[e._v("Belloso Cicilia, Claudia Ivonne. (2009). Monografía sobre la metodología de desarrollo de software, rational unified proccess (RUP). 2019, de Universidad Don Bosco.")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"https://www.uaeh.edu.mx/images/uaeh_logo_color.png",href:"https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/11150/Flujo%20de%20trabajo%20del%20análisis%20y%20diseño%20de%20Rup.pdf",white:"yes",bgcolor:"white"}},[e._v("Sergio Demián Gracián Hernández. (2006). Flujo de trabajo del análisis y diseño del RUP. 2019, de Universidad Autónoma del Estado de Hidalgo.")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"https://www.unam.mx/sites/default/files/images/eventos/acciones_0.jpg",href:"http://www.ptolomeo.unam.mx:8080/xmlui/bitstream/handle/132.248.52.100/175/A8%20Cap%C3%ADtulo%205.pdf?sequence=8",white:"yes",bgcolor:"white"}},[e._v("s/a. (s/f). Proceso Unificado Rational Aplicado. 2019, de Repositorio digital de la Facultad de Ingeniería de la Universidad de la UNAM.")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/3b/bd/a0/3bbda010-224e-f149-e1b4-ec9dcf3b649f/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/320x0w.jpg",href:"https://youtu.be/AY5Dh3XYshk",white:"yes",bgcolor:"white"}},[e._v("Julián Vanegas. (2016). Metodología RUP. 22 de octubre del 2019, de YouTube .")])],1)])])],1)},Y=[],M={name:"RUP",data:function(){return{showBookmarks:!0}},created:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(this.showBookmarks=!1)}},T=M,Q=(s("c0f3"),Object(c["a"])(T,L,Y,!1,null,"8d235ea0",null)),X=Q.exports,F=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("b-container",{staticClass:"main",staticStyle:{"text-align":"center","background-color":"transparent"}},[s("iframe",{staticStyle:{"background-color":"white"},attrs:{frameborder:"0",height:"900",marginheight:"0",marginwidth:"0",src:"https://docs.google.com/forms/d/e/1FAIpQLSfjOX4FLuHJPEVJk14UULa38ghZ47v0zl20yNwchDPFHCKElw/viewform?embedded=true",width:"640"}},[e._v("Cargando…")])])],1)},z=[],G={name:"Images",data:function(){return{videos:[]}},methods:{add:function(e,a){this.videos.push({name:e,src:a})}},created:function(){this.add("🤔 ¿Qué es la metodología RUP?","https://www.youtube.com/embed/AY5Dh3XYshk"),this.add("💭 ¿Cómo se usa en la vida diaria?","https://www.youtube.com/embed/7paA_3VxSrQ")}},N=G,V=Object(c["a"])(N,F,z,!1,null,"32835ac7",null),$=V.exports,J=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticStyle:{width:"100%","padding-top":"8%"}},[s("div",{staticClass:"main"},[s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[e._v("👪 Acerca de")]),e._m(0),s("Footer")],1)])])},H=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"info"},[s("p",{staticClass:"block mt-3"},[e._v(" Este blog fue creado a partir de una asignación de la materia Ingeniería en Software en el ITSON durante el segundo parcial en el semestre 2019-B. ")]),s("p",{staticClass:"block mt-3"},[e._v("👨‍🏫️ Docente: Verónica Sierra García.")])])}],Z={name:"About"},K=Z,W=(s("cbee"),Object(c["a"])(K,J,H,!1,null,"3dcbf12a",null)),ee=W.exports,ae=[{path:"/",component:g,name:"Inicio"},{path:"/rup",component:X,name:"👨‍💻️ ¿Qué es RUP?"},{path:"/images",component:j,name:"🖼️ Imágenes"},{path:"/videos",component:B,name:"🎥 Vídeos"},{path:"/poll",component:$,name:"🗳 Encuesta"},{path:"/quiz",component:j,name:"📝 Quiz"},{path:"/activity",component:j,name:"🕹️ Actividad"},{path:"/curricular-map",component:R,name:"🎓 Mapa curricular"},{path:"/about",component:ee,name:"👪 Acerca de"}],se=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("b-navbar",{attrs:{toggleable:"xl",type:"dark"}},[s("b-navbar-toggle",{attrs:{target:"nav-text-collapse",right:""}}),s("transition",{attrs:{name:"fade"}},["/"!=e.$route.fullPath?s("b-navbar-brand",{staticStyle:{cursor:"pointer"},on:{click:function(a){return e.$router.push("/")}}},[e._v("👨‍💻️ RUP")]):e._e()],1),s("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto",attrs:{right:""}},e._l(e.routes,(function(a,t){return s("b-nav-item",{key:t,class:{active:e.$route.fullPath===a.path},attrs:{right:""},on:{click:function(s){return e.pickRoute(a)}}},[e._v(e._s(a.name))])})),1)],1)],1)},te=[],ie=(s("d81d"),{name:"NavBar",data:function(){return{routes:[]}},methods:{pickRoute:function(e){this.$router.push(e.path)}},created:function(){var e=this;this.$routes.map((function(a){"/"!==a.path&&e.routes.push(a)}))}}),oe=ie,re=(s("4a56"),Object(c["a"])(oe,se,te,!1,null,"1f85114d",null)),ne=re.exports,ce=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},le=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticStyle:{width:"100%"}},[s("div",{staticClass:"row footer"},[s("div",{staticClass:"col-sm-12 thanks-to"},[s("a",{staticClass:"logo itson",attrs:{href:"https://itson.mx"}}),s("a",{staticClass:"logo vue",attrs:{href:"https://vuejs.org"}}),s("a",{staticClass:"logo github",attrs:{href:"https://github.com/BrayanIribe"}})])])])}],de={name:"Footer"},ue=de,pe=(s("7094"),Object(c["a"])(ue,ce,le,!1,null,"d845c4da",null)),be=pe.exports,me=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"bio"},[s("div",{staticClass:"pic",style:e.image}),s("div",{staticClass:"info"},[s("div",{staticClass:"quote"},[e._t("default")],2),s("a",{class:{white:"yes"===this.white},attrs:{href:e.href}},[e._v(e._s(e.href))])])])},he=[],fe={props:["src","href","white","bgcolor"],name:"Biography",computed:{image:function(){return"background-image: url('".concat(this.src,"'); ")+(this.bgcolor?"background-color: "+this.bgcolor:"")}}},ve=fe,ge=(s("52cf"),Object(c["a"])(ve,me,he,!1,null,"d7aac5f0",null)),_e=ge.exports,Ae=s("ecee"),Ce=s("c074"),we=s("ad3d");s("2fc4");t["default"].config.productionTip=!1,t["default"].prototype.$routes=ae,t["default"].use(u["a"]),Ae["c"].add(Ce["a"]),t["default"].component("font-awesome-icon",we["a"]),t["default"].component("NavBar",ne),t["default"].component("Footer",be),t["default"].component("Biography",_e);var ye=new p["a"]({routes:ae});t["default"].use(p["a"]),new t["default"]({router:ye,render:function(e){return e(d)}}).$mount("#app")},5849:function(e,a,s){"use strict";var t=s("10c2"),i=s.n(t);i.a},7094:function(e,a,s){"use strict";var t=s("0ed7"),i=s.n(t);i.a},"9f7b":function(e,a,s){},c0f3:function(e,a,s){"use strict";var t=s("38e4"),i=s.n(t);i.a},c5d9:function(e,a,s){},cbee:function(e,a,s){"use strict";var t=s("9f7b"),i=s.n(t);i.a},ceb3:function(e,a,s){}});
//# sourceMappingURL=app.c69779e2.js.map