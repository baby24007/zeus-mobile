<template>
    <div>
        <h3>我的页面</h3>
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