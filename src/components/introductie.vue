<template>
  <div class="intro">
    <h1>{{ msg }}</h1>
    <p>Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.</p>
    <p>In het menu vindt u onder 'Risico indicatie' de objectieve risico indicatie tool op een zware maatregel op basis van kenmerken. Daarnaast vindt u onder 'Trajectkeuze' een tool om op basis van eerdere trajecten de kans te vekrijgen op een volgend traject op basis van historische gegevens.</p>
    <p>Voor hulp bij het gebruik van deze tool, kunt u gebruik maken van de handleiding die u hier kunt downloaden:</p>
    
    <p>Bij 'Over' kunt u achtergrondinformatie vinden over de totstandkoming van deze tool.</p>
    <p>Mocht u verder nog vragen hebben over de tool in het algemeen of het gebruik ervan, kunt u contactgegevens vinden onder 'Contact'.</p>
    {{ $route.params.name }}
  </div>
</template>

<script>
export default {
  name: 'introductie',
  data () {
    return {
      msg: 'Introductie',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* margin-left: 250px; */
  grid-column: 2;
  padding: 0 2rem;
}
.intro{
  grid-column-start: 1;
  border-top: 2px solid #273c75;
  background-color: #dcdde1;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 1rem;
}
</style>
