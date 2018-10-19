<template>
    <div>
        <!--顶部导航栏-->
        <mt-header title="我的">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <Tabbar :selected="selected"></Tabbar>
    </div>

</template>

<script>
    import Tabbar from '@/components/Tabbar.vue';
    export default {
        name: "My",
        components: {
            Tabbar
        },
        data(){
            return {
                selected: 'my',
            }
        }
    }
</script>

<style scoped>

</style>