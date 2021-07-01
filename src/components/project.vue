<template>
  <div class="project">
    <h2>{{ projectName }}</h2>
    <a href="">{{ projectLink }}</a>
    <div>
      <span v-for="(tool, index) in tools" :key="index">{{ tool }}, </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectName", "projectLink", "tools"],
  name: "project",
};
</script>
