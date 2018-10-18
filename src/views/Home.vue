<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <!-- mint-ui 实现整个系统头部-->
        <mt-header title="管理"></mt-header>


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

        <!--利用mui中的tabbar组件实现系统的底部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">管理</span>
            </router-link>
            <router-link class="mui-tab-item" to="/setting">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
            <router-link class="mui-tab-item" to="/my">
                <span class="mui-icon mui-icon-person"></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue';

    export default {
        name: 'home',
        components: {
            // HelloWorld,
        },
    };
</script>
