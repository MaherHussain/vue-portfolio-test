<template>
  <div class="home">
    <p>{{ page_name }}</p>

    <Information :name="info.name" :JobTitle="info.JobTitle" />
  </div>
</template>

<script>
// @ is an alias to /src
import Information from "@/components/Info.vue";
import infoData from "../Data/info.json";

export default {
  data: function () {
    return {
      page_name: "Home",
      description: "this is home page",
      info: infoData,
    };
  },

  name: "Home",
  components: {
    Information,
  },
};
</script>
