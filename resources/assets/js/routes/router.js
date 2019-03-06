import VueRouter from 'vue-router'                          // Импорт Библиотека Vue-Router
import UsersComponent from '../components/UsersComponent'   // Импорт UserComponent


export default new VueRouter({      // Экспортирование объекта

    routes: [
        {
            path: "/home",
            component: UsersComponent,
        }
    ],

    mode: "history",

});
