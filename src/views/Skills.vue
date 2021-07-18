<template>
  <div class="skills">
    <h1>Maher's Skills</h1>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12" v-for="skill in skillsitems" :key="skill.skillName">
        <skill   :name="skill.skillName" :img="skill.skillImg"/>
       </div>
    </div>
   
  </div>
</template>

<script>

import skill from "@/components/skill.vue";

export default {
 
data: () => {
  return {
    skillsitems : [],
  }
   

},
  name: "skills",

  components: { skill },
 /*  mounted : function(){
    this.skillsData();
  }, */
   created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.skillsData()
  },
  methods: {
    skillsData : function (){
      const skillsFetching = async () => {
        let url = "http://localhost:3000/skills";

        fetch(url)
        .then(response => response.json())
        .then(data => {/* this.skillsitems.push(data); console.log(data) */
        data.forEach(element => {
          this.skillsitems.push(element);
          
        });
        console.log(data)});

       /*  const res = await fetch(url);
        const skills = await res.json();
        this.skillsitems == skills;
        console.log(skills); */
      }
      return skillsFetching();
    }
  },
};
</script>
