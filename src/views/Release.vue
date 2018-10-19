<template>
    <div>
        <!--顶部导航栏-->
        <mt-header title="代码发布">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!-- 选项卡 navbar -->
        <mt-navbar v-model="selected">
            <mt-tab-item id="prod" @click.native="httpGet('prod','zhangzhidao')">生产环境</mt-tab-item>
            <mt-tab-item id="uat" @click.native="httpGet('uat','zhangzhidao')">UAT环境</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="prod">
                <!--<mt-cell v-for="item in this.res" :title="item.app_name" value="haha"/>-->
                <mt-cell v-for="item in this.res" :title="item.app_name">
                    <mt-button type="primary" size="small" plain
                               @click.native="httpPost(item.env_name, item.app_name, item.last_branch_name,'zhangzhidao')">
                        升级
                    </mt-button>
                    <span>&nbsp</span>
                    <mt-button type="danger" size="small" plain>终止</mt-button>
                    <span>&nbsp</span>
                    <mt-button type="primary" size="small" plain>历史</mt-button>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="uat">
                <mt-cell v-for="item in this.res" :title="item.app_name">
                    <mt-button type="primary" size="small" plain
                               @click.native="httpPost(item.env_name, item.app_name, item.last_branch_name,'zhangzhidao')">
                        升级
                    </mt-button>
                    <span>&nbsp</span>
                    <mt-button type="danger" size="small" plain>终止</mt-button>
                    <span>&nbsp</span>
                    <mt-button type="primary" size="small" plain>历史</mt-button>
                </mt-cell>

            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import {Indicator} from 'mint-ui';

    export default {
        name: "Release",
        data() {
            return {
                res: [],
                selected: '',
                value: '',

            }
        },
        created() {
            // this.httpget('uat', 'zhangzhidao');
        },
        methods: {
            httpGet: function (env_name, auth_user) {
                const self = this;
                this.$axios.get('/api/v1.0/element', {
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

            },

            httpPost(env_name, app_name, branch_name, auth_user) {
                Indicator.open('加载中...');
                this.$axios({
                    method: 'post',
                    url: '/api/v1.0/jenkins',
                    data: this.qs.stringify({
                        env_name: env_name,
                        app_name: app_name,
                        branch_name: branch_name,
                        username: auth_user
                    })
                }).then(function (response) {
                    Indicator.close();
                    console.log(response.data.data);
                    this.$router.push('/');
                }).catch(function (error) {
                    Indicator.close();
                    console.log(error);
                })
            }

        },
    }
</script>

<style scoped>

</style>