<template>
  <div class="portfolio">
    <h1>maher's projects</h1>
    <div class="row mx-5">
      <div
        class="col-lg-3 col-md-6 col-sm-12"
        v-for="item in projetcsItems"
        :key="item.projectName"
      >
        <!-- <h2>{{ item.projectName }}</h2> -->
        <project
          :name="item.projectName"
          :link="item.projectLink"
          :tools="item.langs"
          :projectImg="item.projectImg"
        />
        <!-- <span v-for ="tool in item.langs" :key="tool">{{tool}}</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import project from "@/components/project.vue";

export default {
  data: () => {
    return {
      projetcsItems: [],
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.projectData();
  },
  methods: {
    projectData: function () {
      let url = "http://localhost:3000/porjects",
        proFecting = async () => {
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              data.forEach((element) => {
                this.projetcsItems.push(element);
              });
            });
        };
      return proFecting();
    },
  },
  name: "portfolio",

  components: { project },
};
</script>
