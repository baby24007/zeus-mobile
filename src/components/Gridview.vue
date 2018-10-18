<template>
    <div class="gridview">
        <mt-header fixed title="Zeus-moible">
            <router-link to="/" slot="right">
                <mt-button>分享</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <div class="box">

                <div class="content">
                    <!--<img src="../assets/100x100.png" class="img-responsive">-->
                    代码发布
                </div>
            </div>
            <div class="box">
                <div class="content">
                    蓝绿切换
                </div>
            </div>
            <div class="box">
                <div class="content">
                    小工具
                </div>
            </div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>



    </div>


</template>

<script>
    export default {
        name: "Gridview",
        props: {
            msg2: String,
        },
    };
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    .main {

        background-color: #fff;
        width: 100%;
        padding-bottom: 100%;
        padding-left: 0.5%;
        padding-top: 0.5%;
    }

    .main .box {
        width: 31%;
        padding-bottom: 31%;
        border: 1% solid #fff;
        background-color: aliceblue;
        border-radius: 3%;
        float: left;
        margin: 1%;
        position: relative; /*父元素给相对定位*/
    }

    .main .box .content {
        　　position: absolute; /*子元素给绝对定位*/
        　　width: 100%;
        　　height: 100%;
    }

    .img-responsive {
      display: inline-block;
      height: auto;
      max-width: 100%;
    }
</style>