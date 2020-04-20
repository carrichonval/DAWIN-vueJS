<template>
<b-container fluid class="bv-example-row ">
    <router-link :to="{path:'/'}"> <b-button class="mt-3">Retour</b-button></router-link>
    <b-row class="mt-3">
        <b-col md="1">Titre</b-col>
        <b-col md="2">
            <b-form-input v-model="newFilm.titre"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Année de sortie</b-col>
        <b-col md="2">
            <b-form-input v-model="newFilm.annee"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Langue</b-col>
        <b-col md="2">
            <b-form-input v-model="newFilm.langue"></b-form-input>
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
            <b-form-input v-model="newFilm.realisateur.name"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3 ml-5">
        <b-col md="1">Nationalité</b-col>
        <b-col md="2">
            <b-form-input v-model="newFilm.realisateur.nationalite"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3 ml-5">
        <b-col md="1">Date de naissance</b-col>
        <b-col md="2">
            <b-form-datepicker v-model="newFilm.realisateur.birthday" :min="min" :max="max" locale="en"></b-form-datepicker>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Synopsis</b-col>
        <b-col md="2">
            <b-form-input v-model="newFilm.synops"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Genre</b-col>
        <b-col md="2">
           <b-form-select v-model="newFilm.genre" :options="genres"></b-form-select>
        </b-col>
    </b-row>
    <b-row class="mt-3">
        <b-col md="1">Note</b-col>
        <b-col md="2">
           <b-form-select v-model="newFilm.note" :options="notes"></b-form-select>
        </b-col>
    </b-row>
    <router-link :to="{path:'/'}"> <b-button variant="success" v-on:click="ajouterFilm()">Ajouter le film</b-button></router-link>
</b-container>
</template>

<script>

export default {
    name:"add",
    data(){
    return{
            shared_data: window.shared_data,
            newFilm:{id:'',titre: '', annee: '',langue:'', realisateur: {name:'',nationalite:'',birthday:''}, synops: '',genre:'', seen : false, note:''},
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
        ajouterFilm(){
                let lastMovie = this.shared_data.films.slice(-1)[0]
                let lastID = lastMovie.id
                this.newFilm.id = lastID+1;
                this.shared_data.films.push(this.newFilm);
            },
    }

}
</script>