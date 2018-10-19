<template>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="/release">
                        <span class="mui-icon mui-icon-spinner mui-spin"></span>
                        <div class="mui-media-body">代码发布</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="/changeenv">
                        <span class="mui-icon mui-icon-settings"></span>
                        <div class="mui-media-body">蓝绿切换</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="/chat">
                        <span class="mui-icon mui-icon-chatbubble"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">通知</div>
                    </a>
                </li>

            </ul>
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
</style>