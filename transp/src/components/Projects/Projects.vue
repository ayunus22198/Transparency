<template>
  <div id = "app">
      <div id="projectCard" v-for="project in projects" v-bind:key="project.id">
        <img v-bind:src="project.thumbnail" width=100px height=100px style="float:left;border-radius:5px"/>
        <div id="projectTitle">{{project.title}}</div>
        <div id="fundsInfo">${{project.current_fund}} out of ${{project.fund_goal}} raised
        <progress style="float:right;margin-right:150px;" id="file" name="file" :max="project.fund_goal" :value="project.current_fund">
        </progress>
        </div>
        <div id="fundsInfo" style="font-weight:400i">{{project.days_left}} days remaining</div>
      </div>
  </div>
</template>

<style>

.progress-example {
    display: table;
}

.progress-example div {
    display: table-row;
}

label,
progress {
    display: table-cell;
}

label {
    padding-right: 10px;
    text-align: right;
}


#projectCard {
  width:50%;
  height:100px;
  background-color:#F1F1F1;
  border-radius:5px;
  margin-left:28%;
  margin-top:15px;
  padding:10px;
}

#projectTitle{
  float:right;
  font-size:19px;
  width:80%;
  font-weight:600;
}

#fundsInfo {
  margin-top:10px;
  float:right;
  width:80%;
  font-weight:400;
}
</style>
<script>

function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

export default {
  name: 'app',
  data () {
    return {
      projects: [
        {title: "Repaint The Walls", fund_goal:300, current_fund:200, thumbnail: "https://s8.postimg.cc/fvd2ktpmd/carpet1.jpg", days_left:8},
        {title:"Fix the carpet", fund_goal:900, current_fund:150, thumbnail:"https://s8.postimg.cc/z1q9nwb85/wall1.jpg", days_left:19}
      ],
    }
  }
}
</script>
