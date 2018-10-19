<template>
    <div>
        <!--顶部导航栏-->
        <mt-header title="代码发布">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!-- 选项卡 navbar 需要关联tab-container使用-->
        <mt-navbar v-model="selected">
            <mt-tab-item id="prod" @click.native="httpget('prod','zhangzhidao')">生产环境</mt-tab-item>
            <mt-tab-item id="uat" @click.native="httpget('uat','zhangzhidao')">UAT环境</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="prod">
                <!--<mt-cell v-for="item in this.res" :title="item.app_name" value="haha"/>-->
                <mt-cell v-for="item in this.res" :title="item.app_name">
                    <mt-button type="primary" size="small" plain>升级</mt-button>
                    <span>&nbsp</span>
                    <mt-button type="danger" size="small" plain>终止</mt-button>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="uat">
                <mt-cell v-for="item in this.res" :title="item.app_name">
                    <mt-button type="primary" size="small" plain>升级</mt-button>
                    <span>&nbsp</span>
                    <mt-button type="danger" size="small" plain>终止</mt-button>
                </mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "Release",
        data() {
            return {
                res: [],
                selected: '',

            }
        },
        created() {
            // this.httpget('uat', 'zhangzhidao');
        },
        methods: {
            httpget: function (env_name, auth_user) {
                const self = this;
                this.axios.get('/api/v1.0/element',{
                    params: {
                        page: 1,
                        env_name: env_name,
                        auth_user: auth_user
                    }
                }).then(function (response) {
                    self.res = response.data.data;
                }).catch(function (error) {
                    console.log(error);
                })

            }

        },
    }
</script>

<style scoped>

</style>