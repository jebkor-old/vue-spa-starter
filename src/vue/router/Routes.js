import Frontpage from "../views/Frontpage.vue";
import About from "../views/About.vue";


const Routes = [{
    path: "/",
    name: "Frontpage",
    component: Frontpage,
    icon: "home"
}, {
    path: "/about",
    name: "About Page",
    component: About,
    icon: "person"
}];

export default Routes;