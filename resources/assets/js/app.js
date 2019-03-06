
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require('vue');            // Подключение фреймворк Vue

import VueRouter from 'vue-router'      // Импорт Vue-Router Библиотека
import Router from './routes/router'    // Импорт Router Маршрутизатора
import App from './components/App'      // Импорт App

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.use(VueRouter);

const app = new Vue({                   // Объект Vue
    el: '#app',
    render: h => h(App),
    router: Router,
});


// import route from './route'
// console.log(route('test', ['5']));
