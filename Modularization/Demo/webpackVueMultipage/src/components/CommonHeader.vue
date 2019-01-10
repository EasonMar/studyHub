<template>
    <header class="common-head">
        <a class="left" href="javascript:;"></a>
        <span class="center">title</span>
        <a class="right white" href="javascript:;">company</a>
    </header>
</template>
<script>
export default {
    name: 'CommonHeader',
    created () {
        console.log('init header')
    }
}
</script>
<style lang="less" scoped>
.common-head {
    display: -webkit-box;
    height: 51px;
    background: #fff;
    line-height: 50px;
    border-bottom: solid 1px #dedede;
    .center{
        color: red;
    }
}
</style>


