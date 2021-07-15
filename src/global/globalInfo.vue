<template>
  <div id="fixed-con">
    <div class="img-con">
      <img src="../assets/icons/html5.png" alt="" class="icon-img wave" />
      <img src="../assets/icons/javascript.png" alt="" class="icon-img wave" />
      <img src="../assets/icons/logo.png" alt="" class="icon-img wave" />
      <img src="../assets/icons/react.png" alt="" class="icon-img wave" />
      <img id="my-img" src="../assets/Home/my_photo.jpg" alt="" />
    </div>
    <h1>{{ my_name }}</h1>
    <h4>{{ job_title }}</h4>
    <div class="social">
      <ul>
        <li v-for="item in social" :key="item.s_name">
          <a :href="item.s_url" target="_blank">{{ item.s_name }}</a>
        </li>
      </ul>
    </div>
    <div class="cv">
      <a href="../assets/Home/cv.pdf" download>download my cv </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      my_name: " Maher Hussain ",
      job_title: "fullstack web developer ",
      social: [
        {
          s_name: "linkedind",
          s_url: "https://www.linkedin.com/in/maher-hussain/",
        },
        { s_name: "github", s_url: "https://github.com/Maherhussain" },
      ],
      cvFile: "cv.pdf",
      email: "maherhussain6@gmail.com",
    };
  },

  name: "globalInfo",
  mounted: function () {
    this.icons_movement(); //icons_movement() will execute at pageload
  },
  methods: {
     icons_movement: function(){ 
     let icons = document.querySelectorAll(".icon-img");
     icons.forEach((icon,index) => {
       icon.style.width = "3px";
       if(index == 0){
         setTimeout(function(){
           icon.classList.remove("wave");
           icon.style.width = "50px";
           icon.classList.add("fullWidth");

           },3000);
           
     }
     else if(index == 1){
         setTimeout(function(){
           icon.classList.remove("wave");
           icon.style.width = "50px";
           icon.classList.add("fullWidth");

           },4000);
           
     }
     else if(index == 2){
         setTimeout(function(){
           icon.classList.remove("wave");
           icon.style.width = "50px";
           icon.classList.add("fullWidth");

           },5000);
           
     }
     else{
         setTimeout(function(){
           icon.classList.remove("wave");
           icon.style.width = "50px";
           icon.classList.add("fullWidth");

           },6000);
           
     }
     });
  },
  }
};
</script>
