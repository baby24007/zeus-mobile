<template>
    <div>
        <h3>设置页面</h3>
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