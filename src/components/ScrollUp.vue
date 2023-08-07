<template>
  <button v-on:click="scrollTop">
    <img id="to-show" class="no-change-color with-action animation-hover hide" src="img/scroll-up.png" alt="Scroll up"/>
  </button>
</template>

<script setup>
// Fonction pour afficher l'élément lors du scroll
function afficherElementAuScroll() {
  const seuilAffichage = 300; // Changez cette valeur pour ajuster le point d'apparition
  const elementAAfficher = document.getElementById('to-show');

  if (window.scrollY > seuilAffichage) {
    elementAAfficher.classList.remove('hide');
  } else {
    elementAAfficher.classList.add('hide');
  }
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Ajout d'un écouteur d'événements pour détecter le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  // Ajout de l'écouteur d'événements pour détecter le scroll une fois le DOM chargé
  window.addEventListener('scroll', afficherElementAuScroll);
});
</script>

<style lang="scss" scoped>
img {
  @apply fixed right-10 bottom-10 w-[56px] hover:w-[64px] hover:right-9 duration-100 cursor-pointer z-40;
}
.hide {
  @apply hidden;
}
button {
  @apply absolute;
}
</style>