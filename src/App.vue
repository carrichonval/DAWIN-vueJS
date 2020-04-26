<!--
  Modèle principal de l'application appellant le router qui affichera selon le chemin les composant nécéssaires.
-->

<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
