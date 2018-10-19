<template>

  <div id="app">
    <div id="sidebar">
      <ul>
        <h2>Kind veilig thuis</h2>
        <li><router-link to="/">Introductie</router-link></li>
        <li><router-link to="/risico">Risico indicatie</router-link></li>
        <li><router-link to="/trajectkeuze">Trajectkeuze</router-link></li>
        <!-- <li><a href="#">Over</a></li>
        <li><a href="#">Contact</a></li> -->
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import risico from "./components/risico"

export default {
  name: 'App',
  components: {
    risico
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  grid-column: 2/ span 3;
}
body{
  margin:0px;
  padding: 0px;
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: #f5f6fa;
}
h2{
  color: #ccc;
}
#sidebar{
  background: #1c1e1f;
  width:20%;
  height: 100%;
  display: block;
  position: fixed;
  left:0px;
  right:0px;
  margin-top: -60px;
  grid-column: 1;
}
ul{
  margin:0px;
  padding: 0px;
}
ul li{
  list-style: none;
}
ul li a{
  background: #1c1e1f;
  color: #ccc;
  border-bottom: 1px solid #111;
  display: block;
  width: 100%;
  padding: 10px 0;
  text-decoration: none;
}
.router-link-exact-active{
  color: #F6F6F6;
  background-color: #46719C;
  font-weight: bold;
}
</style>
