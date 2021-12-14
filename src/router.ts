import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/home.vue";
import Doc from "./views/document.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import Intro from "./views/Intro.vue"
import Install from "./views/Install.vue"
import Start from "./views/Start.vue"

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc", component: Doc, children: [
                { path: "", component: DocDemo },
                { path: 'intro', component: Intro },
                { path: 'install', component: Install },
                { path: 'start', component: Start },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ],
        },
    ],
});
