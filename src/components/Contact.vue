<template>
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md contact text-black animation-by-left hide">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-500">Contact Us</h2>
    <p class="mb-8 lg:mb-16 font-light text-center sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
    <form action="#" class="space-y-8">
      <div>
        <label for="email" class="block mb-2 text-sm text-red-500 font-semibold">Your email</label>
        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@flowbite.com" required>
      </div>
      <div>
        <label for="subject" class="block mb-2 text-sm text-red-500 font-semibold">Subject</label>
        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-red-500 shadow-sm" placeholder="Let us know how we can help you" required>
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block mb-2 text-sm text-red-500 font-semibold">Your message</label>
        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-red-500" placeholder="Leave a comment..."></textarea>
      </div>
      <button type="submit" class="group relative h-12 mx-auto w-48 overflow-hidden rounded-2xl bg-red-500 text-lg font-bold text-white cursor-pointer flex justify-center items-center border-none">
        Visiter
        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.contact {
  font-family: "Open Sans", serif;
}
</style>