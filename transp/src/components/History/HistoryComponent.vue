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
      {"name":"Adnan Yunus", "PhoneNumber":"(925)-234-8117", "Job":"Web Intern at Gap", "Salary": "75K/year"},
      {"name":"Shyaan Khan", "PhoneNumber":"-", "Job":"Software Intern at Natix", "Salary": "75K/year"},
      {"name":"Tariq bhai", "PhoneNumber":"-", "Job":"Founder of startup", "Salary": "75K/year"},
      {"name":"Tariq bhai", "PhoneNumber":"-", "Job":"Founder of startup", "Salary": "75K/year"}
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
