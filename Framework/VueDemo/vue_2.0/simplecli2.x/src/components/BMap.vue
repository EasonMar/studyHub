<template>
  <baidu-map class="bm-view" ak="2mj1wyIG1HMuIXENsSGDSqkn4WWOOyiL" center="广州" @ready="handler"></baidu-map>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  components: {
    BaiduMap
  },
  methods: {
    handler: ({BMap, map}) => {
      console.log(BMap);
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          console.log(r)
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            console.log(BMAP_STATUS_SUCCESS);
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            alert("您的位置：" + r.point.lng + "," + r.point.lat);
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
    }
  }
};
</script>

<style>
.bm-view {
  width: 100%;
  height: 900px;
}
</style>