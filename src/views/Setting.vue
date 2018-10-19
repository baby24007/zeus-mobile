<template>
    <div>
        <!--顶部导航栏-->
        <mt-header title="设置">
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
        name: "Setting",
        components: {
            Tabbar
        },
        data(){
            return {
                selected: 'setting',
            }
        }
    }
</script>

<style scoped>

</style>