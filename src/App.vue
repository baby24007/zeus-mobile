<template>
    <div id="app">
        <!--<div id="nav">-->
        <!--<router-link to="/login">登录</router-link>-->
        <!--<router-link to="/register">注册</router-link>-->
        <!--<router-link to="/">Home</router-link>-->
        <!--<router-link to="/about">About</router-link>-->
        <!--</div>-->

        <!--路由占位符-->
        <router-view/>



    </div>
</template>

<script>

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 10px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    body {
        background: #fff;
    }

    #tml {
        margin-top: 40px;
        margin-bottom: 50px;
    }
</style>
