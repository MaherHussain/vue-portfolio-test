<template>
  <div class="project">
    <h2>{{ name }}</h2>
    <a :href="link">click</a>
    <div>
      <img :src="'/imgs/projects/' + projectImg" alt="projectImg">
      <span v-for="(tool, index) in tools" :key="tool">
        {{ tool }}
        <span v-if="index != tools.length - 1">-</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "link", "tools","projectImg"],
  name: "project",
};
</script>
