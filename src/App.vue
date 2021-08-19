<template>
  <div id="app">
    <div class="container-fluied ">
      <div class="row">
        <NavBar />
      </div>
      <div class="row">
        <div class="content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/global/NavBar.vue";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "App",
  components: {
    NavBar,
  },
  created() {
    AOS.init();
  },
};
</script>
<style src="./main.css"></style>
