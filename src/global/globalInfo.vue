<template>
  <div class="container">
    <div class="row">
      <h1>{{ name }}</h1>
      <h4>{{ JobTitle }}</h4>
      <span class="social">
        <ul>
          <li v-for="item in info.social" :key="item.sm - name">
            <a href="">{{ item.sm_name }}</a>
          </li>
        </ul>
      </span>

      <!-- <social/> -->
    </div>
  </div>
</template>

<script>
import infoData from "@/Data/info.json";
/* import social from '../components/social.vue' */
export default {
  data: function () {
    return {
      info: infoData,
    };
  },
  props: ["name", "JobTitle"],
  name: "globalInfo",
  componets: [],
};
</script>
