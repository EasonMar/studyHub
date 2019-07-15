<template>
  <div id="app" :style="appStyle">
    <!-- <GlobalComponent content="全局组件1"/>
    <GlobalComponent content="全局组件2"/>
    <h3>{{ msg }}</h3>
    <h4>Essential Links</h4>
    <h4>Ecosystem</h4> -->
    <!-- 使用 v-bind 来动态向子组件传递 prop -->
    <!-- <Test @change-color="changeColor" 
      v-for="(test,index) in testGroup"
      v-bind:key="index"
      v-bind:prop_msg="test"/>
    <Form/> -->
    <BMap/>
  </div>
</template>

<script>
import Test from './components/Test'
import Form from './components/Form'
import BMap from './components/BMap'
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      appStyle: {
        color: 'white'
      },
      testGroup: ['co_a','co_b','co_c','co_d'],
      currentColor: 0
    };
  },
  components: { Test, Form, BMap },
  methods: {
    changeColor() {
      let colorSet = [
        {
          background:'red',
          color:'white'
        },{
          background:'yellow',
          color:'#000'
        },{
          background:'green',
          color:'white'
        },{
          background:'blue',
          color:'white'
        },{
          background:'pink',
          color:'#000'
        }];
      let index = Math.floor(Math.random()*5);
      while(index == this.currentColor){
        index = Math.floor(Math.random()*5);
      }
      this.currentColor = index;
      this.appStyle = colorSet[index];
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}
</style>
