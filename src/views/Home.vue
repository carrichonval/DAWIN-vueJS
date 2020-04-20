<template>
    <b-container fluid class="bv-example-row">
        <router-link :to="{path:'/add'}"> <b-button variant="primary" class="mt-3 mb-3">Ajouter un film</b-button></router-link>
        <b-row>
           <b-col md="2" class="mb-3">
                Listes des films :
            </b-col>
            <b-col md="4">
                <b-row>
                    <b-input-group prepend="Filtrer par " class="mb-2">
                        <b-form-select v-model="selected" :options="filtres"></b-form-select>
                        <b-form-input v-if="selected" v-model="filtre" :placeholder="[[selected]]"></b-form-input>
                    </b-input-group>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
            <b-col md="3" v-for="(film, f) of filmFilter"  v-bind:key="f">
                <movie v-bind:film="film" v-bind:f="f" v-on:delete="deleteFilm"></movie>
            </b-col>
        </b-row>
    </b-container>

</template>


<script>
import Movie from "../components/movie";

export default {
    name:"home",
    components:{
        Movie
    },
    data(){
    return{
            shared_data: window.shared_data,
            filtre:'',
            selected:'',
            filtres:[
                {value:'',text:''},
                {value:'titre',text:'Titre'},
                {value:'annee',text:'Année de sortie'},
                {value:'realisateur',text:'Réalisateur'},
                {value:'langue',text:'Langue'},
                {value:'note',text:'Note'},
                {value:'genre',text:'Genre'},
            ]
        }
      },
        computed:{
            filmFilter() {
                switch(this.selected){
                    
                    case "annee":
                        if(this.filtre == ""){
                            return this.shared_data.films
                        }
                        else{
                            return this.shared_data.films.filter( film => film.annee == this.filtre)
                        }
                    
                    case "titre":
                        if(this.filtre == ""){
                            return this.shared_data.films
                        }
                        else{
                            return this.shared_data.films.filter( film => film.titre.toLowerCase() == this.filtre.toLowerCase())
                        }
                    
                    case "realisateur":
                        if(this.filtre == ""){
                            return this.shared_data.films
                        }
                        else{
                            return this.shared_data.films.filter( film => film.realisateur.toLowerCase() == this.filtre.toLowerCase())
                        }

                    case "langue":
                        if(this.filtre == ""){
                            return this.shared_data.films
                        }
                        else{
                            return this.shared_data.films.filter( film => film.langue.toLowerCase() == this.filtre.toLowerCase())
                        }

                    case "note":
                      if(this.filtre == ""){
                            return this.shared_data.films
                      }
                      else{
                            return this.shared_data.films.filter( film => film.note == this.filtre)
                      }

                      case "genre":
                      if(this.filtre == ""){
                            return this.shared_data.films
                      }
                      else{
                            return this.shared_data.films.filter( film => film.genre.toLowerCase() == this.filtre.toLowerCase())
                      }

                    default:
                        return this.shared_data.films
                }
            },
          }
}
</script>