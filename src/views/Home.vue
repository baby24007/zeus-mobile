<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <!-- mint-ui 实现整个系统头部-->
        <mt-header title="主页"></mt-header>


        <!--使用mui中九宫格的样式-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="/release">
                        <span class="mui-icon mui-icon-spinner mui-spin"></span>
                        <div class="mui-media-body">代码发布</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="/changeenv">
                        <span class="mui-icon mui-icon-settings"></span>
                        <div class="mui-media-body">蓝绿切换</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="/chat">
                        <span class="mui-icon mui-icon-chatbubble"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">通知</div>
                    </a>
                </li>


            </ul>
        </div>

        <!--调用data return 的 selected-->
        <Tabbar :selected="selected"></Tabbar>

    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue';
    import Tabbar from '@/components/Tabbar.vue';

    export default {
        name: 'home',
        components: {
            Tabbar
        },
        data(){
            return {
                selected: 'index',
            }
        }
    };
</script>
