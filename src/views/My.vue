<template>
    <div>
        <mt-header title="我的"></mt-header>
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