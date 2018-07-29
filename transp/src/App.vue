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
    <ul id="navigation_bar" >
    <li>
       <router-link to="/projects" style="color: black">Projects</router-link>
    </li>
    <li>
       <router-link to="/performance" style="color: black">Performance</router-link>
    </li>
    <li>
       <router-link to="/team" style="color: black">Team</router-link>
    </li>
    </ul>

</div>
<router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:400,400i,900,900i');
#navigation_bar {
  width: 100%;
  color: white;
  background-color:#FD7057;
  list-style-type:none;
  display: inline-block;
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
  color: #FD7057;
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
  color: #FD7057;
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
  color: #FD7057;
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
      arr: [
      {"name":"Projects", "link":"/projects"},
      {"name":"History", link:"/"},
      {"name":"About", link: "/"}
      ]
    }
  }
}
</script>
