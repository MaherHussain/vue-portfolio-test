<template>
  <div id="app">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-1">
          <NavBar />
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <GlobalInfo />
        </div>
        <div class="col-lg-7 col-md-7 col-sm-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/global/NavBar.vue";

import GlobalInfo from "@/global/globalInfo.vue";
export default {
 
  name: "App",
  components: {
    NavBar,
    GlobalInfo
  },
};
</script>
 <style src="./main.css">

</style>
 