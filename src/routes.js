import Home from "./views/Home";
import Images from "./views/Images";
import Videos from "./views/Videos";
import CurricularMap from "./views/CurricularMap";
import RUP from "./views/RUP";
import Poll from "./views/Poll";
import Quiz from "./views/Quiz";
import Activity from "./views/Activity";
import Memorama from "./views/Memorama";
import About from "./views/About";

export default [
  { path: "/", component: Home, name: "Inicio" },
  { path: "/rup", component: RUP, name: "👨‍💻️ ¿Qué es RUP?" },
  { path: "/images", component: Images, name: "🖼️ Imágenes" },
  { path: "/videos", component: Videos, name: "🎥 Vídeos" },
  { path: "/poll", component: Poll, name: "🗳 Encuesta" },
  { path: "/quiz", component: Quiz, name: "📝 Quiz" },
  { path: "/activity", component: Activity, name: "🕹️ Actividad" },
  {
    path: "/curricular-map",
    component: CurricularMap,
    name: "🎓 Mapa curricular"
  },
  { path: "/memorama", component: Memorama, name: "🃏 Memorama" },
  { path: "/about", component: About, name: "👪 Acerca de" },
  { path: "*", component: Home }
];
