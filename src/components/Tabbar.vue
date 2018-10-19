<template>
    <div>
        <!--绑定message-->
        <mt-tabbar v-model="message">
            <mt-tab-item id="index">
                <img slot="icon" src="../assets/home.png">
                主页
            </mt-tab-item>
            <mt-tab-item id="setting">
                <img slot="icon" src="../assets/tools.png">
                设置
            </mt-tab-item>
            <mt-tab-item id="my">
                <img slot="icon" src="../assets/person.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>

</template>

<script>
    export default {
        name: 'Tabbar',
        data() {
            return {
                // 外面传来的值selected
                message: this.selected,
            }
        },
        // 通过props声明获取父组件传递的数据
        props: {
            selected: String,
        },
        watch: {
            //通过v-model获得mt-tab-item id匹配实现url跳转
            message: function (val, oldVal) {
                console.log(val)
                switch (val) {
                    case 'index':
                        this.$router.push('/');
                        break;
                    case 'setting':
                        this.$router.push('/setting');
                        break;
                    case 'my':
                        this.$router.push('my');
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>