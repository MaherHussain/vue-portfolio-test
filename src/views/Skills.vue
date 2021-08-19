<template>
  <div class="skills">
    <h1>Maher's Skills</h1>
    <div class="row">
      <div class="lds-roller" v-if="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <!-- <div class="loading" >loading......</div> -->
      <div
        class="col-lg-3 col-md-6 col-sm-12"
        v-for="skill in skillsitems"
        :key="skill.skillName"
        v-else
      >
        <skill :name="skill.skillName" :img="skill.skillImg" />
      </div>
    </div>
  </div>
</template>

<script>
import skill from "@/components/skill.vue";

export default {
  data: () => {
    return {
      skillsitems: [],
      loading: true,
    };
  },
  name: "skills",

  components: { skill },

  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.skillsData();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    skillsData: function () {
      const skillsFetching = async () => {
        let url = "http://localhost:3000/skills";

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            data.forEach((element) => {
              this.skillsitems.push(element);
            });
            console.log(data);
          });

        /*  const res = await fetch(url);
        const skills = await res.json();
        this.skillsitems == skills;
        console.log(skills); */
      };
      return skillsFetching();
    },
  },
};
</script>
