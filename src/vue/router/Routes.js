import Frontpage from "../views/Frontpage.vue";
import About from "../views/About.vue";


const Routes = [{
    path: "/",
    component: Frontpage
}, {
    path: "/about",
    component: About
}];

export default Routes;