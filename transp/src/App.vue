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
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:400,400i,900,900i');
*{
  font-family: 'Nunito', sans-serif;
  color: #FD7057;
}
/* Style the header with a grey background and some padding */

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
  display:block;
  height:175px;
}

/* Style the header links */
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

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
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

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ddd;
  color: #FD7057;
}

/* Style the active/current link*/
.header a.active {
  background-color: dodgerblue;
  color: white;
}

/* Float the link section to the right */
.header-right {
  float:right;
  display:block;
  position:relative;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
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
