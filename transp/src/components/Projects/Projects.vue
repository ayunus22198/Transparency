<template>
  <div id = "app" style="background-color:black, overflow-y">
      <div id="projectCard" v-for="project in projects" v-bind:key="project.id">
        <div>{{project.title}}</div>
      </div>
  </div>
</template>
<style>
#projectCard {
  width:50%;
  height:100px;
  border-radius:5px;
  margin-left:28%;
  border:1px red solid;
}
</style>
<script>
export default {
  name: 'app',
  data () {
    return {
      projects: [
        {title:"Repaint The Walls", fund_goal:300, current_fund:200, thumbnail:"./images/wall1.jpg", days_left:8},
        {title:"Fix the carpet", fund_goal:900, current_fund:150, images:"./images/carpet1.jpg", days_left:19}
      ],
    }
  }
}
</script>
