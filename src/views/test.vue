<template>
<div>
    <span>ID : {{destinationID}}</span>
    <span>titre : {{film.titre}}</span>
</div>
</template>

<script>

export default {
    name:"test",
    data(){
    return{
            shared_data: window.shared_data,
            destinationID:this.$route.params.id
        }
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