<template>
  <div class="skill">
    <h2>{{ name }}</h2>
    <img src="'../assets/'{{img}}" alt="" />
  </div>
</template>

<script>
export default {
  props: ["name", "img"],
  name: "skill",
};
</script>
