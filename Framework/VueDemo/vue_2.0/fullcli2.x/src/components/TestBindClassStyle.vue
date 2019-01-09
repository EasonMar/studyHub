<template>
  <div>
    <!-- 通过事件向父级组件发送消息 -->
    <p class="foo" @click="$emit('childClick')">Hi</p>
    <p class="aoo" v-bind:style="finalColor" @click="add">五光十色</p>
  </div>
</template>
<script>
export default {
  name: 'TestBindClassStyle',
  data () {
    return {
      colorIndex: 0
    }
  },
  methods: {
    add () {
      this.colorIndex < 4 ? this.colorIndex++ : (this.colorIndex = 0)
    }
  },
  computed: {
    finalColor () {
      let choice = ['green', 'rgb(154, 0, 255)', 'red', 'blue', 'grey']
      return {
        backgroundColor: choice[this.colorIndex]
      }
    }
  }
}
</script>
<style scoped>
.foo,.aoo{
  margin: 2vw;
  padding: 2vw 2vw;
  border: 2vw solid rgba(0, 0, 0, 0.452);
  background: red;
  color: yellow;
  /* 文字一般不随着屏幕尺寸变化，这里做个随着变化的试验 */
  font-size: 4vw;
}
.bar .foo{
  border: 2vw solid rgb(47, 0, 255);
  background: #fff;
  color: #000;
}
</style>
