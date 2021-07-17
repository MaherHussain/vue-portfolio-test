<template>
  <div id="nav" class="position-fixed d-block">
   
    <div id="menu">
       <div class="menu-icon" @click="extendMenu" >
      <i class="material-icons arrow" v-if="extended">west </i>
      <i class="material-icons " v-else>menu</i>
      
    </div>
      <div class="icons">
        <div class="nav-icon">
          <router-link to="/" exact
            ><i class="material-icons"> home </i></router-link
          >
        </div>

        <div class="nav-icon">
          <router-link to="/about"
            ><i class="material-icons"> info </i></router-link
          >
        </div>

        <div class="nav-icon">
          <router-link to="/portfolio"
            ><i class="material-icons"> apps</i></router-link
          >
        </div>

        <div class="nav-icon">
          <router-link to="/skills"
            ><i class="material-icons"> bolt</i></router-link
          >
        </div>
      </div>
      <div class="links">
        <div>
          <router-link to="/" exact>Home</router-link>
        </div>
        <div><router-link to="/about">About</router-link></div>

        <div><router-link to="/portfolio">Portfolio</router-link></div>
        <div><router-link to="/skills">Skills</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    openIcon:'<i class="material-icons">menu </i>',
    colseIcon : '<span class="material-icons">west</span>',
    extended : false,
    }
  },
  name: "navBar",

  methods: {
    extendMenu : function(){
      /* const menuIcon = document.getElementsByClassName("menu-icon"); */
      /* const menu = document.getElementById("menu"); */
      const links = document.getElementsByClassName("links");
      const nav_bar = document.getElementById("nav")
      this.extended = !this.extended;
      if(this.extended){
       
        nav_bar.style.width="300px";
        setTimeout(function (){links[0].style.display ="block"},300)
        
      }
      else {
         nav_bar.style.width="120px";
        
        links[0].style.display ="none"
        
      }
      
      
      
    }
  }
}
</script>
