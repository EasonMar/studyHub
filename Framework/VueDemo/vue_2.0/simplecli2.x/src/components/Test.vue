<template>
    <!-- 往父组件中发送一事件 -->
    <p @click="$emit('change-color')">{{ msg + ',props:' +prop_msg }}</p>
</template>

<script>
export default {
    // name:'' // 这个name属性有啥用：递归调用、方便调试
    props: ['prop_msg'], // 属性
    data() {
        return {
            msg: 'Without name'
        }
    }
}
</script>

<style scoped>
p {
    width: 40%;
    margin: 10px auto;
    padding: 20px 5px;
    background: #eee;
    cursor: pointer;
    user-select: none;
    color: #000;
    border: 2px solid #000;
}
</style>


