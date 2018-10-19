<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <trajectkeuze/>
    <Module2/>
    <test/>

    <div>
      <ul>
        <li v-for="(index, user) in users" :key="user">
          {{user.firstname}} {{user.lastname}} {{index}}
        </li>
      </ul>
    </div>

    <div>
      <input type="text" v-model="input_val">
    </div>
    <div>
      Input Value: <span v-text="input_val"></span>
    </div>

    <div>
      <button class="btn btn-primary" v-on:click="counter++">You've clicked this button {{counter}} times!</button>

    </div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>

    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
import trajectkeuze from "./trajectkeuze"
import Module2 from "./Module2"
import test from "./test"

export default {
  name: 'HelloWorld',
  components: {
    trajectkeuze,
    Module2,
    test
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
        {firstname: 'Sebastian', lastname: 'Eschweiler'},
        {firstname: 'Bill', lastname: 'Smith'},
        {firstname: 'John', lastname: 'Porter'}
      ],
      input_val:'',
      counter: 0,
      selected:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
