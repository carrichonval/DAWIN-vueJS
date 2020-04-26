import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.css'
Vue.config.productionTip = false

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)

/*----------------------------
Window.shared_data permet de transmettre des données n'importe où dans le projet
En l'occurence, ici les films
----------------------------*/

window.shared_data = {
  films: [
    {
      id:0,
      titre: 'Stuart little',
      annee: 2002,langue:'EN',
      realisateur: {
        name:'Rob Minkoff',
        nationalite:'EN',
        birthday:'1962-08-11'
      },
      synops: 'Petite souris blanche marrante',
      genre:'Action',
      seen: false,
      note:2,
      poster:"https://static.lpnt.fr/images/2014/11/27/stuart-2951456-jpg_2581275_660x281.JPG"
    },
    {
      id:1,
      titre: 'star wars',
      annee: 1997,
      langue:'FR',
      realisateur: {
        name:'Georges Lucas',
        nationalite:'EN',
        birthday:'1944-05-14'
      },
      synops: 'Je suis ton père.',
      genre:'Action',
      seen: false,
      note:3,
      poster:"https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/09/star-wars-ix-naissance-legendes-bataille-finale-epique.jpg"
    },
    {
      id:2,
      titre: 'Spiderman',
      annee: 2002,
      langue:'FR',
      realisateur: {
        name:'Tom Holland',
        nationalite:'EN',
        birthday:'1996-06-01'
      },
      synops: 'I believe I can fly.',
      genre:'Action',
      seen : false,
      note:4,
      poster:"https://fr.web.img3.acsta.net/pictures/17/05/24/15/35/100661.jpg"
    },
],
}


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
