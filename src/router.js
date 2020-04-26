import Vue from "vue"
import Router from "vue-router"
import Home from './views/Home'
import Edit from './views/Edit'
import Add from './views/Add'
import MovieDetails from './views/MovieDetails'

Vue.use(Router);

/*----------------------------
Router permettant pour un chemin, de retourner un composant
----------------------------*/
export default new Router({
    routes:[
        {
            path: "/",
            name:"home",
            component:Home
        },
        {
            path: "/movie/:id/edit",
            name:"edit",
            component:Edit
        },
        {
            path: "/add",
            name:"add",
            component:Add
        },
        {
            path: "/movie/:id",
            name:"moviedetails",
            component:MovieDetails
        }
    ]
    
})