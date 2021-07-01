<template>
  <div class="portfolio">
    <h1>projects page</h1>
    <h2>hello</h2>
    <project
      v-for="item in projects"
      :key="item.id"
      :projectName="item.project_name"
      :projectLink="item.project_link"
      :tools="item.project_tools"
    >
    
    </project>

    
  </div>
</template>

<script>
import project from "../components/project.vue";
import ProjectsData from "../Data/projects.json";
/* import skills from "@/Data/skills.json"; */

export default {
  data: function () {
    return {
      projects: ProjectsData,
    };
  },
  name: "portfolio",

  components: { project },
};
</script>
