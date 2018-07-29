<template>
  <div id = "app">
      <div id="projectCard" v-for="(project,i) in projects1" v-bind:key="project.id" @click='message(project)'>
        <img v-bind:src="project.thumbnail" width=100px height=100px style="float:left;border-radius:5px"/>
        <div id="projectTitle">{{project.title}}</div>
        <div>
          <div id="fundsInfo" style="display:inline-block;">${{project.current_fund}} out of ${{project.fund_goal}} raised
          <progress style="display:inline-block;float:right;margin-right:150px;" id="file" name="file" :max="project.fund_goal" :value="project.current_fund">
          </progress>
          <router-link to="/projectDetail" style="color: black"><a class="button3">Donate</a></router-link>
        </div>
        </div>
        <div id="fundsInfo" style="font-weight:400i">Category: {{project.category}}</div>
      </div>
  </div>
</template>

<style>
a.button3 {
    float:right;
    padding: 0.3em 1.2em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    color: #FFFFFF;
    background-color: #4eb5f1;
    text-align: center;
    transition: all 0.2s;
    display: inline-block;
    position: relative;
    margin-right: 15px;
    margin-top: -20px;
    margin-bottom: -20px;
}
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
  color:black;
  font-size: 15px;
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
      projects1: [
        {title: "Carpet cleaning", fund_goal:300, current_fund:0, thumbnail: "https://s8.postimg.cc/fvd2ktpmd/carpet1.jpg", days_left:8, category:"Cleaning", projectID:"walls", mosqueID:"yaseen"}
      ],
    }
  },
  methods: {
    message: function(i) {
      console.log(i);
    }
  }
}
</script>
