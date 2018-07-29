<template>
<div id='app'>
  <div class="header flex-container">
    <div style="position: absolute;margin-left: 20%">
      <img src="./images/download-1.jpg" width=100px height=100px style="float: left;border-radius:15px">
    </div>
    <div class="header-right">
      <a href="#contact">Follow</a>
      <a href="#about">Donate</a>
    </div>
    <div id="title">Yaseen Foundation</div>
    <div id="subtitle">1722 Gilbreth Rd, Burlingame, CA 94010</div>
    <div id="subtitle">(650) 591-3690</div>
    <div id="subsubtitle">1,123 followers</div>
  </div>
  <div >
    <ul id="navigation_bar">
    <li>
       <router-link to="/projects" style="color: black">Projects</router-link>
    </li>
    <li>
       <router-link to="/performance" style="color: black">Performance</router-link>
    </li>
    <li>
       <router-link to="/history"style="color: black">Team</router-link>
    </li>
    </ul>
</div>
<div id="projectCard" v-for="(project,i) in projects" v-bind:key="project.id" @click='message(project)'>
  <img v-bind:src="project.thumbnail" width=100px height=100px style="float:left;border-radius:5px"/>
  <div id="projectTitle">{{project.title}}</div>
  <div>
    <div id="fundsInfo" style="display:inline-block;">${{project.current_fund}} out of ${{project.fund_goal}} raised
    <progress style="display:inline-block;float:right;margin-right:150px;" id="file" name="file" :max="project.fund_goal" :value="project.current_fund">
    </progress>
    <a @click ="project_button(project.projectID)" class="button3">Donate</a>
  </div>
  </div>
  <div id="fundsInfo" style="font-weight:400i">Category: {{project.category}}</div>
</div>
<router-view></router-view>
<div v-if = "is_viewing_funds" style = "display:block;border-radius:0 12 12 0 ;width:49.5%;padding-top:1%;padding-left:1%;padding-right:1%;margin-top:-2px;margin-left:28%;height:150px;background-color:#EEEEEE;">
  <div class = "listview" style ="height:100px;overflow-y:scroll;">
    <div v-for = "row in filteredFundArr" style = "position:relative;border-top:1px solid grey;height:55px"><div style = "position:absolute;margin-top:16px;margin-left:5px;display:inline-block;color:black;">{{row.paymentPerson}} payed {{row.payed}}</div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:400,400i,600,900,900i');

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
#navigation_bar {
  width: 100%;
  color: white;
  background-color:#EB5638;
  list-style-type:none;
  display: inline-block;
  margin: 0;
}

li {
    float: left;
    display:block;
    text-align:center;
    padding: 14px 16px;
    text-decoration:none;
    width: 30%;
}

li:hover {
  background-color: white;
  opacity:0.6;
  transition: 0.3s;
}

*{
  font-family: 'Nunito', sans-serif;
  color: #EB5638;
  margin: 0;
}

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
  display:block;
  height:175px;
}

.header a {
  float: left;
  color: #EB5638;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

#title {
  font-size: 35px;
  font-weight: 900;
  text-align:center;
  width:40%;
  margin-left:30%;
  display:block;
}

#subtitle {
  font-size: 25px;
  font-weight: 400;
  text-align:center;
  width:40%;
  margin-left:30%;
  margin-top:5px;
}

#subsubtitle{
  font-style: italic;
  font-size: 20px;
  width:40%;
  text-align:center;
  margin-left:30%;
  margin-top:5px;
}

.header a:hover {
  background-color: #ddd;
  color: #EB5638;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float:right;
  display:block;
  position:relative;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>

<script>
export default {
  name: 'app',
  data () {
    return {
      projects: [
        {title:"Repaint the Walls", fund_goal:900, current_fund:750, thumbnail:"https://s8.postimg.cc/z1q9nwb85/wall1.jpg", days_left:19, projectID:"walls", mosqueID:"yaseen",category:"Architecture"},
        {title:"New Basketball Hoop", fund_goal:500, current_fund:200, thumbnail:"https://s15.postimg.cc/ekc0mno23/IMG_4238.jpg", days_left:30, projectID:"basketball", mosqueID:"yaseen", category:"Gym",}
      ],
      mosqueInfo: {
        name:'Yaseen Foundation',
        address: '1722 Gilbreth Rd, Burlingame, CA 94010',
        phone: '(650) 591-3690',
        followers: '1,123',
        mosqueID:"yaseen"
      },
      funds: [{
        "id":"walls",
        "paymentPerson": "Omar",
        "payed": "150"
      },
      {
        "id":"walls",
        "paymentPerson": "Mohammed",
        "payed": "550"
      },
      {
        "id":"walls",
        "paymentPerson": "Anonymous",
        "payed": "50"
      },
      {
        "id":"basketball",
        "paymentPerson": "Shyaan",
        "payed": "80"
      },
      {
        "id":"basketball",
        "paymentPerson": "Anonymous",
        "payed": "120"
      }
      ],
      filteredFundArr: [],
      is_viewing_funds: false
    }
  },
  methods: {
    message: function(i) {
      console.log(i);
    },
    project_button: function (id) {
      this.filteredFundArr = [];
       // The button to edit a memo has been pressed.
       for(var i = 0;i<this.funds.length;i++) {
         if((this.funds[i].id) == id) {
           this.filteredFundArr.push(this.funds[i]);
         }
       }
       this.is_viewing_funds = true;
       console.log(this.filteredFundArr);
     }

  }
}
</script>
