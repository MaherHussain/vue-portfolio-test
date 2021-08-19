<template>
  <div class="project" :style="{background: ` url('/imgs/projects/${projectImg}') no-repeat center center #42b983 `}">
  <div class="shine"> 
    
     <!--  <div class="project-img">
        <img :src="'/imgs/projects/'+ projectImg " alt="" />
      </div> -->
      
      <div class="project-text">
        <h2>{{ name }}</h2>
        <a :href="link" target="_blank" class="plink">visit project </a>
        <div class="langs">
          <span v-for="(tool, index) in tools" :key="tool">
            {{ tool }}
            <span v-if="index != tools.length - 1">- </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project{
  background-size: cover;
}
</style>
<script>
export default {
  props: ["name", "link", "tools", "projectImg"],
  name: "project",
};
</script>
