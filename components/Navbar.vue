<script setup>
//--------------------------------------------------------------------------------------------------------------//
import { ListLineIcon } from "~/assets/icons";
//--------------------------------------------------------------------------------------------------------------//
</script>

<template>
  <!-- ------------------------------------ START - Navbar ------------------------------------ -->
  <nav
    class="fixed inset-0 top-0 z-50 flex h-14 w-full items-center bg-white shadow-1 lg:py-7 xl:h-20"
  >
    <div
      class="container mx-auto flex w-full max-w-screen-xl items-center justify-between px-6 lg:px-20 2xl:px-10"
    >
      <!-- Logo -->
      <nav class="flex basis-1/2 self-start lg:basis-1/3">
        <NuxtLink to="/">
          <NuxtImg class="h-6 w-auto lg:h-8" src="/cuit-logo.png" />
        </NuxtLink>
      </nav>

      <!-- Menu -->
      <nav
        class="hidden basis-1/3 flex-row items-center justify-center gap-8 lg:flex"
      >
        <NuxtLink to="/"> Beranda </NuxtLink>

        <NuxtLink to="/verification"> Verifikasi </NuxtLink>

        <NuxtLink to="/contact"> Kontak </NuxtLink>
      </nav>

      <!-- Account -->
      <nav
        class="hidden basis-1/3 flex-row items-center justify-end gap-3 lg:flex"
      >
        <NuxtLink
          to="/login"
          class="rounded-lg px-6 py-2 text-baseline-primary"
        >
          Masuk
        </NuxtLink>

        <NuxtLink
          to="/register"
          class="rounded-lg bg-baseline-primary px-6 py-2 text-white"
        >
          Daftar
        </NuxtLink>
      </nav>

      <nav class="flex basis-1/2 items-end justify-end lg:hidden">
        <ListLineIcon class="h-6 w-6 -scale-x-100 text-grey-concencrated" />
      </nav>
    </div>
  </nav>
  <!-- ------------------------------------ END - Navbar ------------------------------------ -->
</template>
