import Frontpage from "../views/Frontpage.vue";
import About from "../views/About.vue";
import Cards from "../views/Cards.vue";


const Routes = [{
    path: "/",
    name: "Frontpage",
    component: Frontpage,
    iconType: "material",
    icon: "home"
}, {
    path: "/about",
    name: "About Page",
    component: About,
    iconType: "material",
    icon: "person"
}, {
  path: "/cards",
  name: "Cards Page",
  component: Cards,
  iconType: "fa",
  icon: "file"
}];

export default Routes;