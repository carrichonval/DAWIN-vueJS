import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)

window.shared_data = {
  mavariable: 'Test',
  films: [
    {id:0, titre: 'stuart little', annee: 2002,langue:'EN', realisateur: {name:'Rob Minkoff',nationalite:'EN',birthday:'1962-08-11'}, synops: 'petite souris cours',genre:'Action', seen: false, note:1 },
    {id:1, titre: 'star wars', annee: 1997,langue:'FR', realisateur: {name:'Georges Lucas',nationalite:'EN',birthday:'1944-05-14'}, synops: 'vium vium',genre:'Action', seen: false, note:5 },
    {id:2, titre: 'Spiderman', annee: 2002,langue:'FR', realisateur: {name:'Tom Holland',nationalite:'EN',birthday:'1996-06-01'}, synops: 'araignée mur',genre:'Action', seen : false, note:2 },
],
}


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
