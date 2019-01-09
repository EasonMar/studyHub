<template>
  <ul class="iterator">
    <li v-for="item in items" :key="item.id">
      {{ item.message }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'TestIterator',
  props: ['itemsProp'],
  data () {
    return {
      items: this.itemsProp
    }
  }
}
</script>
<style scoped>
/* 不加scoped有可能会影响到外部的样式... */
/* 特别是这种普通标签的样式 */
ul{
  margin: 2vw;
  padding: 2vw;
  background: yellow;
  list-style: none;
}
li{
  margin: 2vw;
  padding: 2vw;
  background: rgba(0, 0, 0, 0.363);
  color: #fff;
  font-size: 18px;
  text-align: left;
}
</style>
