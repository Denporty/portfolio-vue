<template>
  <button v-on:click="scrollTop">
    <svg id="to-show" class="with-action animation-hover hide" clip-rule="evenodd" fill-rule="red" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.014 11.998c0 5.517 4.48 9.997 9.998 9.997s9.997-4.48 9.997-9.997c0-5.518-4.479-9.998-9.997-9.998s-9.998 4.48-9.998 9.998zm6.211-1.524s1.505-1.501 3.259-3.254c.146-.147.338-.22.53-.22s.384.073.53.22c1.754 1.752 3.258 3.254 3.258 3.254.145.145.217.335.217.526 0 .192-.074.384-.221.53-.292.293-.766.295-1.057.004l-1.977-1.977v6.693c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.693l-1.979 1.978c-.289.289-.761.287-1.054-.006-.147-.147-.221-.339-.222-.53 0-.191.071-.38.216-.525z" fill-rule="nonzero"/></svg>
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
svg {
  @apply fixed right-10 bottom-10 w-[56px] hover:w-[64px] hover:right-9 duration-500 cursor-pointer z-40;
  fill: #EF4444;
}
.hide {
  @apply hidden;
}
button {
  @apply absolute;
}
</style>