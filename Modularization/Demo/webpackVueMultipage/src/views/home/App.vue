<template>
  <div id="app">
    <CommonHeader/>
    <CommonFooter/>
  </div>
</template>
<script>
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
export default {
  name: "app",
  components: { CommonHeader, CommonFooter }
};
</script>
