<template>
  <div id="app">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-1">
          <NavBar />
        </div>
      
        <div class="col-lg-11 " >
          <div class="content">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/global/NavBar.vue";


export default {
 
  name: "App",
  components: {
    NavBar,
   
  },
};
</script>
 <style src="./main.css">

</style>
 