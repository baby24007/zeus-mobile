<template>
    <div>
        <mt-header title="设置"></mt-header>
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