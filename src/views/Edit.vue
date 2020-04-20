<template>
<b-container fluid class="bv-example-row">
        <router-link :to="{path:'/movie/'+film.id}"> <b-button class="mt-3">Retour</b-button></router-link>

    <b-row class="mt-3">
        <b-col md="1">Titre</b-col>
        <b-col md="2">
            <b-form-input v-model="film.titre"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Année de sortie</b-col>
        <b-col md="2">
            <b-form-input v-model="film.annee"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Langue</b-col>
        <b-col md="2">
            <b-form-input v-model="film.langue"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Réalisateur :</b-col>
        <b-col md="2">
        </b-col>
    </b-row>
    <b-row class="mt-3 ml-5">
        <b-col md="1">Nom / Prénom</b-col>
        <b-col md="2">
            <b-form-input v-model="film.realisateur.name"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3 ml-5">
        <b-col md="1">Nationalité</b-col>
        <b-col md="2">
            <b-form-input v-model="film.realisateur.nationalite"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3 ml-5">
        <b-col md="1">Date de naissance</b-col>
        <b-col md="2">
            <b-form-datepicker v-model="film.realisateur.birthday" :min="min" :max="max" locale="en"></b-form-datepicker>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Synopsis</b-col>
        <b-col md="2">
            <b-form-input v-model="film.synops"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Genre</b-col>
        <b-col md="2">
           <b-form-select v-model="film.genre" :options="genres"></b-form-select>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Note</b-col>
        <b-col md="2">
           <b-form-select v-model="film.note" :options="notes"></b-form-select>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Poster</b-col>
        <b-col md="2">
            <b-form-input v-model="film.poster"></b-form-input>
        </b-col>
        <b-col md="4">
            <b-img :src="film.poster" style="position:absolute;" fluid alt="Responsive image"></b-img>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <router-link :to="{path:'/'}"> <b-button class="ml-3" variant="primary" v-on:click="saveEdit()">Enregistrer les modifications</b-button></router-link>
    </b-row>     
       
</b-container>
</template>


<script>

export default {
    name:"edit",
    data(){
    return{
            shared_data: window.shared_data,
            editIndex:this.$route.params.id,
            error:'',
            success:'',
            destinationID:this.$route.params.id,
            genres:[
                { value: "Action", text: 'Action' },
                { value: "Romance", text: 'Romance' },
                { value: "Comédie", text: "Comédie"},
                { value: "Action", text: "Action"},
                { value: "Drame", text: "Drame"},
                { value: "Romance", text: "Romance"},
                { value: "Aventure", text: "Aventure"},
                { value: "Science-Fiction", text: "Science-Fiction"},
                { value: "Horreur", text: "Horreur"},
                { value: "Catastrophe", text: "Catastrophe"},
                { value: "Portrait", text: "Portrait"},
                { value: "Histoire vrai", text: "Histoire vrai"},
                { value: "Fantastique", text: "Fantastique"}
                ],
                notes:[
                    { value: "1", text: '1' },
                    { value: "2", text: '2' },
                    { value: "3", text: '3' },
                    { value: "4", text: '4' },
                    { value: "5", text: '5' },
                ]
        }
    },
    methods:{
        saveEdit(){
            console.log(this.film)
            this.shared_data.films[this.editIndex]=this.film
        },
    },
     computed:{
        film(){
            console.log(this.shared_data.films)
            return this.shared_data.films.find(
                film =>film.id == this.destinationID
            )
        }
    }
}
</script>