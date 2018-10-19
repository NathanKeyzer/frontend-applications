<template lang="html">
<div class="traject">
  <h1>{{ msg }}</h1>
  <h2>Gebruiksaanwijzing</h2>
<p>Dit is een hulptool voor kiezen van een vervolg hulptraject op basis van vorige hulptrajecten. In de eerste vijf kolommen kunt u de trajecten selecteren die van toepassing zijn voor de client. Door gebruik te maken van de filters boven de kolommen kunt u de juiste trajecten selecteren. Wanneer meerdere trajecten in een kolom staan, betekent dit dat de trajecten tegelijk worden toegepast. In de kolom 'Dan volgt' kunt u zien welk traject hier vaak op volgt met daarbij het percentage van de gevallen.</p>
  </div>
</template>

<script>
export default {
  name: 'trajectkeuze',
  data () {
    return {
      msg: 'Trajectkeuze',
    }
  }
}
</script>

<style scoped>
.traject{
  grid-column-start: 1;
  border-top: 2px solid #273c75;
  background-color: #dcdde1;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 1rem;
}
p {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  grid-column: 2;
  padding: 0 2rem;
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
</style>
