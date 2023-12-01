<script setup>
//----------------------------------------------------------------------------//
import { Navbar, Footer } from "#components";
//----------------------------------------------------------------------------//
// Create loader
//----------------------------------------------------------------------------//
const nuxt_app = useNuxtApp();
const show_loader = ref(false);

nuxt_app.hook("page:transition:start", () => {
  show_loader.value = true;
});

nuxt_app.hook("page:transition:finish", () => {
  show_loader.value = false;
});

//----------------------------------------------------------------------------//
</script>

<template>
  <div
    v-if="show_loader === true"
    class="items center fixed inset-0 flex h-screen w-full justify-center bg-white"
  >
    <NuxtImg
      class="-mt-8 h-auto w-16 animate-pulse object-contain lg:w-24"
      src="/cuit-logo.png"
      alt="Logo Cuit"
    />
  </div>

  <NuxtLayout v-else-if="show_loader === false">
    <div class="cuit-landing relative font-nunito">
      <Navbar />

      <NuxtPage />

      <Footer />
    </div>
  </NuxtLayout>
</template>
