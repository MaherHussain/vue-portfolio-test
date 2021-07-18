<template>
  <div class="skill-item">
    <h2>{{ name }}</h2>
    <img :src="'/imgs/skills-icons/' + img" :alt="img" />
  </div>
</template>

<script>
export default {
  props: ["name", "img"],
  name: "skill",
};
</script>
