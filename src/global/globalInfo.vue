<template>
  <div id="fixed-con" >
    <div class="info-con">
      <div class="img-con">
        <img src="../assets/icons/html5.png" alt="" class="icon-img wave" />
        <img
          src="../assets/icons/javascript.png"
          alt=""
          class="icon-img wave"
        />
        <img src="../assets/icons/logo.png" alt="" class="icon-img wave" />
        <img src="../assets/icons/react.png" alt="" class="icon-img wave" />
        <img id="my-img" src="../assets/Home/my_photo.jpg" alt="" />
      </div>
      <h1>{{ my_name }}</h1>
      <h4>{{ job_title }}</h4>
      <div class="social">
        <ul>
          <li v-for="item in social" :key="item.s_name">
            <img :src="'/imgs/' + item.s_icon" :alt="item.s_name" />
            <a v-if="item.s_name == 'mail me'" :href="'mailto:'" > </a>
            <a :href="item.s_url" target="_blank">{{ item.s_name }}</a>
          </li>
          <li>
            <img src="../../public/imgs/email.png" alt="email" />
            
            <a href="mailto:maherhuusain6@gmail.com">mail me</a>
          </li>
        </ul>
      </div>
      <div class="cv">
        <a :href="'src/assets/Home/' + this.cvFile" download>download my cv </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      my_name: " Maher Hussain ",
      job_title: "fullstack web developer ",
      cvFile: "cv.pdf",
      social: [
        {
          s_name: "linkedind",
          s_url: "https://www.linkedin.com/in/maher-hussain/",
          s_icon: "linkedin.png",
        },
        {
          s_name: "github",
          s_url: "https://github.com/Maherhussain",
          s_icon: "github.png",
        },
        
      ],
    };
  },

  name: "globalInfo",
  mounted: function () {
    this.icons_movement(); //icons_movement() will execute at pageload
  },
  methods: {
    icons_movement: function () {
      let icons = document.querySelectorAll(".icon-img");
      icons.forEach((icon, index) => {
        icon.style.width = "3px";
        if (index == 0) {
          setTimeout(function () {
            icon.classList.remove("wave");
            icon.style.width = "50px";
            icon.classList.add("fullWidth");
          }, 3000);
        } else if (index == 1) {
          setTimeout(function () {
            icon.classList.remove("wave");
            icon.style.width = "50px";
            icon.classList.add("fullWidth");
          }, 4000);
        } else if (index == 2) {
          setTimeout(function () {
            icon.classList.remove("wave");
            icon.style.width = "50px";
            icon.classList.add("fullWidth");
          }, 5000);
        } else {
          setTimeout(function () {
            icon.classList.remove("wave");
            icon.style.width = "50px";
            icon.classList.add("fullWidth");
          }, 6000);
        }
      });
    },
  },
};
</script>
