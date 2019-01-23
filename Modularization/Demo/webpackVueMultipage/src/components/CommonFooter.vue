<template>
    <footer>
        <div class="entrance_box">
            <span class="product_info">产品条款</span>
        </div>
        <div class="preview-container">
            <span data-ga="preview-plan-app" id="preview-plan">生成计划书</span>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'CommonFooter'
}
</script>
<style lang="less" scoped>
footer {
    display: -webkit-box;
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 60;
    background: #f7f7f7;
}
</style>

