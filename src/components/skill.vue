<template>
  
    <div class="skill-item" data-aos="flip-right">
      <div class="shine">
      <h2>{{ name }}</h2>
      <img :src="'/imgs/skills-icons/' + img" :alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "img"],
  name: "skill",
};
</script>
