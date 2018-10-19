import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import introductie from '@/components/introductie'
import risico from '@/components/risico'
import trajectkeuze from '@/components/trajectkeuze'

Vue.use(Router)

export default new Router({
 routes: [
   {
     path: '/helloWorld',
     name: 'home',
     component: Home
   },
   {
     path: '/',
     name: 'introductie',
     component: introductie
   },
   // {
   //   path: '/introductie/:name',
   //   name: 'introductie',
   //   component: introductie
   // },
   {
     path: '/risico',
     name: 'risico',
     component: risico
   },
   {
     path: '/trajectkeuze',
     name: 'trajectkeuze',
     component: trajectkeuze
   }

 ]
})
