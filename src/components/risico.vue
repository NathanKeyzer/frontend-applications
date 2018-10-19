<template>

<div id="risico" class="risico-container">
  <div class="profile-container">
      <div class="tile profile-tile">
        <h1>Risico indicatie</h1>
        <div class="result">
          <h3 id="percentage">0%</h3>
        </div>

        <h2>Gebruiksaanwijzing</h2>
          <p>Vul alle vragen in door de juiste opties te selecteren en druk vervolgens op "Geef risico indicatie" om een risico indicatie te krijgen.</p>
      </div>
  </div>
  <div class="question-container">
       <div v-for="categorie in filterCategories" v-bind:key="categorie">
           <div @click="stateChange(categorie)" class="tile question-tile">
               <div class="upper-part">
                   <p>{{ categorie }}</p>
                   <div class="filled-in">
                       <!-- <p>0%</p> -->
                   </div>
               </div>
               <div class="lower-part">
                   <div v-if="categorie == currentCategory" >
                     <label v-for="item in currentOption" :key="item.currentOption">{{ item.Vraag }}
                       <select class="" name="" @change="handleValue" :data-id="item.id">
                         <option value="">{{ categorie }}</option>
                         <option :value="option.Gewicht" v-for="option in item.Opties" :key="option.Antwoord">{{ option.Antwoord }}</option>
                       </select>
                     </label>
                   </div>
               </div>
           </div>
       </div>
  </div>
</div>
</template>

<script>// Gewerkt met vue groepje May, Mitch en Daniël
import json from "../data.json";
export default {
 data() {
   return {
     myJson: json,
     currentCategory: "",
     currentOption: [],
     weight: new Object()
   };
 },

 computed: {
   filterCategories: function() {
     let categoryNames = [];
     const categories = this.myJson
       .map(category => category.Categorie)
       .filter((categorie, index, all) => {
         if (all.indexOf(categorie) == index) {
           categoryNames.push(categorie);
         } else {
         }
       });
     return categoryNames;
   }
 },

 methods: {
   stateChange: function(categorie) {
     this.currentCategory = categorie;
     this.addItemsToCategories(this.currentCategory);
     this.currentOption = Object.values(
       this.addItemsToCategories(this.currentCategory)
     );
     console.log(this.currentCategory);
   },

   handleValue: function(element) {
     var targetID = element.target.getAttribute("data-id");
     this.weight[targetID] = element.target.value;
     var valueArrays = Object.values(this.weight);
     console.log(this.weight);
     var calc = calculated(valueArrays);
     var calculatedResult = document.querySelector("#percentage");
     percentage.textContent = calc + "%";
     function calculated(valueArrays) {
       var sum = valueArrays.reduce(function(totaal, currentValue) {
         return Number(totaal) + Number(currentValue);
       }, 0);
       return Number( //formule opgezet door Folkert-Jan
         ((1 / (1 + Math.exp(-1 * (-8.57219 + sum)))) * 100).toFixed(2)
       );
     }
   },

   // find index by change
   addItemsToCategories: function(subject) {
     const categories = this.filterCategories;
     let newArray = [];
     const filteredItems = this.myJson
       .map(category => category)
       .filter(item => item.Categorie == subject);

     console.log(filteredItems);
     return filteredItems;
   },
   logThis: function() {
     json.forEach(question =>{
       questionSet.push(question.Vraag);
       questionSet.push(question.Categorie);
     });
     console.log(questionSet);
   }
 }
};
</script>

<style scoped>
p {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  grid-column: 2;
  padding: 0 2rem ;
}
h1{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /* margin-top: 60px; */
  grid-column: 2;
  padding: 0 2rem ;
}
h2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /* margin-top: 60px; */
  grid-column: 2;
  padding: 0 2rem ;
}
h3{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /* margin-top: 60px; */
  grid-column: 2;
  padding: 0 2rem ;
  font-size: 6em;
  margin: 0;
}
label{
  font-size: 1em;
  font-weight: normal;
  display: block;
}
#risico{
  display: grid;
  grid-template-columns: 40% 40%;
}
.profile-container {
  grid-column-start: 1;
  border-top: 2px solid #273c75;
  background-color: #dcdde1;
  margin-left: 2rem;
}
.question-container{
  align-items: end;
  text-align: left;
  padding: 0 2rem ;
  grid-column-start: 2;
  border-top: 2px solid #273c75;
  background-color: #dcdde1;
  margin-left: 2rem;
}
.upper-part p{
  padding:0;
  font-weight: bold;
}
</style>
