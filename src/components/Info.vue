<template>
  <div id="information">
    <img src="" alt="">
    <h1>{{name}}</h1>
    <p>{{JobTitle}}</p>
  </div>
</template>
<script>
export default {
  
  props:["name","JobTitle","email","social"],
  name: "Info",
};
</script>
