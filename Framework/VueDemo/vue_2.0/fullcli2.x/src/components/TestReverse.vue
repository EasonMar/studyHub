<template>
  <div>
    <p @click="reverseTheMsg">{{ msg }}</p>
    <p @click="reverseTheMsg" class="reverse">{{ reverseMsg }}</p>
  </div>
</template>

<script>
export default {
  name: 'TestReverse',
  props: ['msgProp'],
  data () {
    return {
      msg: this.msgProp
    }
  },
  // 注意,方法的字段是 methods 复数的
  methods: {
    reverseTheMsg () {
      this.msg = this.msg
        .split('')
        .reverse()
        .join('')
    }
  },
  computed: {
    reverseMsg () {
      return this.msg
        .split('')
        .reverse()
        .join('')
    }
  }
}
</script>

<style scoped>
div {
  padding: 2vw;
  margin: 2vw;
  background: rgba(255, 41, 41, 0.575);
}
p {
  height: 4vw;
  padding: 4vw;
  margin: 2vw;
  text-align: center;
  background: rgb(36, 17, 212);
  color: rgb(251, 255, 8);
  border-radius: 2vw;
}
.reverse {
  background: #fff;
  color: rgb(36, 17, 212);
}
</style>
