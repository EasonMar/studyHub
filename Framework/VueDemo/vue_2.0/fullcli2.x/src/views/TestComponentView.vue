<template>
  <div id="TestComponentView">
    <router-link to="/">Go Home</router-link>
    <TestReverse msg-prop="This word is reversed"/>
    <TestReverse msg-prop="How about this"/>
    <!-- 需要 `v-bind` 来告诉 Vue,这是一个 JavaScript 表达式而不是一个字符串 -->
    <TestIterator v-bind:items-prop="iterItem"/>
    <TestBindClassStyle v-bind:class="{ bar: isBar }" @childClick="shiftBar"/>
  </div>
</template>

<script>
import TestReverse from '@/components/TestReverse'
import TestIterator from '@/components/TestIterator'
import TestBindClassStyle from '@/components/TestBindClassStyle'
export default {
  name: 'TestComponentView',
  data () {
    return {
      iterItem: [
        { id: '1', message: 'Foo' },
        { id: '2', message: 'Bar' }
      ],
      isBar: false
    }
  },
  methods: {
    shiftBar () {
      this.isBar = !this.isBar
    }
  },
  // 这个是ES6的新写法：对象的扩展-属性的简写
  // 属性名为变量名, 属性值为变量的值
  components: { TestReverse, TestIterator, TestBindClassStyle }
}
</script>

<style scoped>
#TestComponentView {
  background: rgba(45, 133, 248, 0.507);
  padding: 2vw;
}
a{
  font-size: 20px;
  font-weight: bold;
  color: rgba(139, 2, 251, 0.986);
}
</style>
