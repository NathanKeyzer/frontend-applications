## Table of contents
* [Opdrachtgever](#opdrachtgever)
* [Framework keuze](#Framework keuze)
* [Onderzoek/Tutorials](#onderzoek/tutorials)
* [Toepassen](#Toepassen)
* [De Applicatie](#De Applicatie)

## Opdrachtgever
[Garage2020](http://www.garage2020.nl) vertegenwoordigd door Arjan. Kwam met de opdracht om een risico indicatie app te ontwikkelen. Deze is gebaseerd op een vragenlijst vanuit de Arij. Hiermee kan er bepaald worden of de

## Framework keuze

De keuze voor mijn framework was al snel gemaakt. Dit kwam met name door de presentatie van Hay. Die [Vue.js](https://vuejs.org) goed verkocht.

Hij zei dat vue een lage drempel heeft om in te stappen. Dit was erg fijn gezien de opdracht die naar mijn idee nog niet helemaal duidelijk was.

## Onderzoek/Tutorials

* [Vue video reeks](https://www.youtube.com/watch?v=mZY1yyrlJWU&index=1&list=PLoYCgNOIyGADZuvKJweutZDOO9VI9YiJ9)
* [Vue Setup](https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2)
* [Routing](https://vuejs.org/v2/guide/routing.html)
* [Components](https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2)

## Toepassen
Ik heb deze 2 weken naar mijn idee veel kunnen toepassen binnen mijn vue app. Ik heb hierbij wel teveel met tutorials gewerkt, en gespeeld met vue. Die tijd had ik meer in mijn project kunnen steken, dan zou ik iets meer aan mijn uiteindleijke app toevoegen.

## De Applicatie
De applicatie die heb ik ontwikkeld lijkt heel erg op de huidige risico taxatie app. Ik heb leren werken met routerlinks, components, v-for en de v-bind key.

### Routerlinks
```javascript
import Router from 'vue-router'
```
```javascript
Vue.use(Router)
```
```javascript
export default new Router({
 routes: [
   {
     path: '/',
     name: 'introductie',
     component: introductie
   }
   ```
Fijne manier van het maken van interne links van de applicatie.

### Components
```javascript
<trajectkeuze/>
```
Handig om kleine onderdelen op en pagina te gebruiken.

### v-bind key
```javascript
<div v-for="categorie in filterCategories" v-bind:key="categorie">
```
Zo wordt er voor vue een identiteit gecreerd die het framework dan makkelijk herkent.
