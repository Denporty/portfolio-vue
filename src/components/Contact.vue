<template>
  <div class="contact animation-by-left hide">
    <h2>Me contacter</h2>
    <p>Une question ? Une proposition ? N'hésitez pas à me contacter.</p>
    <form action="#">
      <div>
        <label for="email">Votre adresse mail</label>
        <input type="email" id="email" class="no-change-color with-action animation-hover" placeholder="name@mail.com" required>
      </div>
      <div>
        <label for="subject">Titre</label>
        <input type="text" id="subject" class="no-change-color with-action animation-hover" placeholder="Intitulé de votre demande" required>
      </div>
      <div class="sm:col-span-2">
        <label for="message">Votre message</label>
        <textarea id="message" rows="6" class="no-change-color with-action animation-hover" required placeholder="Contenu de votre message..."></textarea>
      </div>
      <Button>Envoyer</Button>
    </form>
  </div>
</template>

<script setup>

import Button from "@/components/utils/Button.vue";
</script>

<style scoped lang="scss">
.contact {
  @apply text-black py-8 lg:py-16 px-4 mx-auto max-w-screen-md;
  font-family: "Open Sans", serif;
  h2 {
    @apply mb-4 text-4xl tracking-tight font-extrabold text-center text-red-500;
  }
  p {
    @apply mb-8 lg:mb-16 font-light text-center sm:text-xl;
  }
  form {
    @apply space-y-8;
  }
  label {
    @apply block mb-2 text-sm text-red-500 font-semibold;
  }
  input, textarea {
    max-width: -webkit-fill-available;
  }
  input[type="email"] {
    @apply shadow-sm bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg block w-full p-2.5;
  }
  input[type="text"] {
    @apply block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-red-500 shadow-sm;
  }
  textarea {
    @apply block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-red-500;
  }
}
</style>