<template>
  <div id = "app">
    <div class = "wrap">
      <div v-for = "admin in admins" v-key:bind = "admin.id" class= "card">
        <div class = "container">
          <h4><b>{{admin.name}}</b></h4>
          <p>{{admin.PhoneNumber}}</p>
          <p>{{admin.Job}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

      admins: [
      {"name":"Ishaq Asfour", "PhoneNumber":"president@yaseen.org", "Job":"President", "Salary": "75K/year"},

      {"name":"Ziyad Dahbour", "PhoneNumber":"vp@yaseen.org", "Job":"Vice President", "Salary": "75K/year"},
      {"name":"Qassim Moon", "PhoneNumber":"treasurer@yaseen.org", "Job":"Treasurer", "Salary": "75K/year"},
      {"name":"Mohammad Bhatti", "PhoneNumber":"secretary@yaseen.org", "Job":"Secretary", "Salary": "75K/year"},
      {"name":"Kamal Fallaha", "PhoneNumber":"pr@yaseen.org", "Job":"Public Relations", "Salary": "75K/year"}
      ]
    }
  }
}
</script>

<style>
.wrap {
  width: 1000px;
  margin:auto;
  margin-top: 100px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
  transition: 0.4s;
  width: 300px;
  background: #fff;
  text-align:center;
  font-size:16px;
  font-family: sans-serif;
  float:left;
  margin: 10px;
}
</style>
