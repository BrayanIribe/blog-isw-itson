import Home from "./views/Home";
import Images from "./views/Images";
import Videos from "./views/Videos";
import CurricularMap from "./views/CurricularMap";
import RUP from "./views/RUP";
import Poll from "./views/Poll";
import About from "./views/About";

export default [
  { path: "/", component: Home, name: "Inicio" },
  { path: "/rup", component: RUP, name: "👨‍💻️ ¿Qué es RUP?" },
  { path: "/images", component: Images, name: "🖼️ Imágenes" },
  { path: "/videos", component: Videos, name: "🎥 Vídeos" },
  { path: "/poll", component: Poll, name: "🗳 Encuesta" },
  { path: "/quiz", component: Images, name: "📝 Quiz" },
  { path: "/activity", component: Images, name: "🕹️ Actividad" },
  {
    path: "/curricular-map",
    component: CurricularMap,
    name: "🎓 Mapa curricular"
  },
  { path: "/about", component: About, name: "👪 Acerca de" }
];
