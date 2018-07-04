import Frontpage from "../views/Frontpage.vue";
import About from "../views/About.vue";


const Routes = [{
    path: "/",
    name: "Frontpage",
    component: Frontpage
}, {
    path: "/about",
    name: "About Page",
    component: About
}];

export default Routes;