import Home from "./views/Home";
import Images from "./views/Images";
import Videos from "./views/Videos";
import CurricularMap from "./views/CurricularMap";

export default [
  { path: "/", component: Home, name: "Inicio" },
  { path: "/images", component: Images, name: "🖼️ Imágenes" },
  { path: "/videos", component: Videos, name: "🎥 Vídeos" },
  { path: "/poll", component: Images, name: "🗳 Encuesta" },
  { path: "/quiz", component: Images, name: "📝 Quiz" },
  { path: "/activity", component: Images, name: "🕹️ Actividad" },
  {
    path: "/curricular-map",
    component: CurricularMap,
    name: "🎓 Mapa curricular"
  }
];
