<script setup>
//----------------------------------------------------------------------------//
import { Navbar, Footer } from "#components";
//----------------------------------------------------------------------------//
</script>

<template>
  <NuxtLayout>
    <div class="cuit-landing relative font-nunito">
      <Navbar />

      <NuxtPage />

      <Footer />
    </div>
  </NuxtLayout>
</template>
