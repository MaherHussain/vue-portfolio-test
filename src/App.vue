<template>
  <div id="app">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-1">
          <NavBar />
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12">
          <GlobalInfo :name="info.name" :JobTitle="info.JobTitle" />
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/global/NavBar.vue";
import InfoData from "./Data/info.json";
import GlobalInfo from "@/global/globalInfo.vue";
export default {
  data: function () {
    return {
      info: InfoData,
    };
  },
  name: "App",
  components: {
    NavBar,
    GlobalInfo,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #000;
  
  div {
    padding: 50px 0;
  }
  a {
    font-weight: bold;
    color:#fff; 

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
