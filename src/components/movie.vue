<!--Composant movie qui correspond à un film sur la page d'accueil-->

<template>
    <div class="movie">
        <b-card
            :title="film.titre.toUpperCase()"
            sub-title="Synopsis :"
            :img-src="film.poster"
            class="mb-2"
        >
            <b-card-text>
            {{film.synops}}
            </b-card-text>
            <b-card-text>
                Note : <b-img v-for="i in parseInt(film.note)" v-bind:key="i++" :src="image" alt="étoile"></b-img>
            </b-card-text>

            <router-link :to="{path:'/movie/'+film.id}"> <b-button variant="primary">Voir plus d'informations</b-button></router-link>
            
        </b-card>
    </div>
</template>

<script>
import star from "../assets/star.png"
export default {
  props: {
    film: Object,
    f:Number,
  },
  data(){
      return{
          image:star
      }
  }
}
</script>

<!--Dans les props on récupère l'object film et son index, et dans les data on récupère l'image de l'étoile pour la note-->