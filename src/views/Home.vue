<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

        <!-- mint-ui 实现整个系统头部-->
        <mt-header title="主页"></mt-header>
        <!--调用九宫格-->
        <Gridview></Gridview>

        <!--调用data return 的 selected-->
        <Tabbar :selected="selected"></Tabbar>

    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue';
    import Tabbar from '@/components/Tabbar.vue';
    import Gridview from '@/components/Gridview.vue';

    export default {
        name: 'home',
        components: {
            Tabbar,
            Gridview
        },
        data(){
            return {
                // 通过这里传递给tabbar
                selected: 'index',
            }
        }
    };
</script>
