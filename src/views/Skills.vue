<template>
  <div class="skills">
    <h1>This is an skills page</h1>
    <skill
      v-for="skill in skills"
      :key="skill.id"
      :name="skill.name"
      :img="skill.img"
    />
  </div>
</template>

<script>
import skills from "@/Data/skills.json";
import skill from "@/components/skill.vue";

export default {
  data: function () {
    return {
      skills: skills,
    };
  },

  name: "skills",

  components: { skill },
};
</script>
