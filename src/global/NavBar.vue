<template>
  <div id="nav" class="nav">
    <ul>
      <li class="logo">
        <h2>M@her</h2>
      </li>
      <li class="nav-bar">
        <div class="icons">
          <div>
            <router-link class="nav-item" to="/" exact>
              <span class="icon"  data-text="HOME"
                ><i class="material-icons"> home </i></span
              >
              <!-- <span v-else class="link"> Home</span> -->
            </router-link>
          </div>
          <div>
            <router-link class="nav-item" to="/portfolio">
              <span class="icon"  data-text="PORTFOLIO"
                ><i class="material-icons"> apps</i></span
              >
              <!-- <span v-else class="link" data-aos="flip-down">Portfolio</span> -->
            </router-link>
          </div>
          <div>
            <router-link class="nav-item"  to="/skills">
              <span  class="icon"  data-text=" SKILLS"
                ><i class="material-icons"> bolt</i></span
              >
             <!--  <span v-else class="link" data-aos="flip-down">Skills</span> -->
            </router-link>
          </div>
        </div>
        <!-- <div class="links">
           <div>
               
               <router-link to="/" exact>
              <span v-if="!extended"><i class="material-icons" > home </i></span> 
               <span > Home</span>

              </router-link>

            </div>
            <div>
              
               <router-link to="/portfolio">
                <span v-if="!extended"><i class="material-icons"> apps</i></span>
                <span >Portfolio</span>
               </router-link>

            </div>
            <div>
              
              <router-link to="/skills">
               <span v-if="!extended"><i class="material-icons" > bolt</i></span>
               <span >Skills</span> 
                
              </router-link>

            </div> 
            </div> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openIcon: '<i class="material-icons">menu </i>',
      colseIcon: '<span class="material-icons">west</span>',
      extended: false,
    };
  },
  name: "navBar",
  mounted: function () {
    setInterval(() => {
      this.changeMenu();
    }, 3000);
  },

  methods: {
    changeMenu: function () {
      /*  const icons = document.getElementsByClassName("icons");
      const links = document.getElementsByClassName("links"); */

      this.extended = !this.extended;
      /*  if(this.extended){
          
          icons[0].style.display ="none";
          
          links[0].style.display ="flex";
         icons[0].setAttribute("data-aos", "flip-down");
       }
       else{
         
         links[0].style.display ="none"
          icons[0].style.display ="flex"
          links[0].setAttribute("data-aos", "flip-down");
         

       } */

      
    },
  },
};
</script>
