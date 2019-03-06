<template>
     <div class="flex-center position-ref full-height">

        <div class="content">
            <div class="title m-b-md">
                Laravel
            </div>

            <div class="links">
                <a href="https://laravel.com/docs">Documentation</a>
                <a href="https://laracasts.com">Laracasts</a>
                <a href="https://laravel-news.com">News</a>
                <a href="https://forge.laravel.com">Forge</a>
                <a href="https://github.com/laravel/laravel">GitHub</a>
            </div>
        </div>

        <ul>
            <li v-for="(user, index) in users" :key="index">
                <!-- {{ user.first_name }} -->
                {{ user.email }}
            </li>
        </ul>

    </div>
</template>

<script>

    import axios from "axios";
    import r from "../route";   // routes

    export default {
        data() {
            return {
                users: [],
            }
        },
        methods: {
            getUsers() {
                axios.get(r("users.index"))
                .then((response) => {
                    this.users = response.data.users
                })
            }
        },
        computed: {
            cUsers() {
                return this.users;
            }
        },
        mounted() {
            this.getUsers();
            console.log(this.users);
            console.log('UsersComponent mounted.')
        }
    }
</script>

<style>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Raleway', sans-serif;
        font-weight: 100;
        height: 100vh;
        margin: 0;
    }

    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .content {
        text-align: center;
    }

    .title {
        font-size: 84px;
    }

    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

    .m-b-md {
        margin-bottom: 30px;
    }
</style>
