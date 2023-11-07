<script setup>
//--------------------------------------------------------------------------------------------------------------//
import { CloseCircleLineIcon, ListLineIcon } from "~/assets/icons";
//--------------------------------------------------------------------------------------------------------------//
const show_mobile_menu = ref(false);

const toggleMobileMenu = () => {
  show_mobile_menu.value = !show_mobile_menu.value;
};

const closeMobileMenu = () => {
  show_mobile_menu.value = false;
};
//--------------------------------------------------------------------------------------------------------------//
</script>

<template>
  <!-- ------------------------------------ START - Navbar ------------------------------------ -->
  <nav
    class="fixed inset-0 top-0 z-50 flex h-14 w-full items-center bg-white shadow-1 lg:h-20 lg:py-7"
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
        <button v-if="show_mobile_menu === false" @click="toggleMobileMenu">
          <ListLineIcon class="h-6 w-6 -scale-x-100 text-grey-concencrated" />
        </button>

        <button v-else @click="toggleMobileMenu">
          <CloseCircleLineIcon class="h-6 w-6 text-grey-concencrated" />
        </button>
      </nav>
    </div>
  </nav>
  <!-- ------------------------------------ END - Navbar ------------------------------------ -->

  <!-- ------------------------------------ START - Mobile Menu Opened ------------------------------------ -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-1 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-1 opacity-0"
  >
    <nav
      v-if="show_mobile_menu === true"
      class="fixed left-0 top-14 z-50 h-[calc(100vh_-_56px)] w-full bg-white p-6"
    >
      <div class="mb-14 flex flex-col items-start gap-4">
        <span @click="closeMobileMenu">
          <NuxtLink to="/">Beranda</NuxtLink>
        </span>
        <span @click="closeMobileMenu">
          <NuxtLink to="/verification">Verifikasi</NuxtLink>
        </span>

        <span @click="closeMobileMenu">
          <NuxtLink to="/contact">Kontak</NuxtLink>
        </span>
      </div>

      <div class="flex flex-row items-center gap-4">
        <NuxtLink
          to="/login"
          class="w-full rounded-lg px-6 py-2 text-center text-baseline-primary"
        >
          Masuk
        </NuxtLink>

        <NuxtLink
          to="/register"
          class="w-full rounded-lg bg-baseline-primary px-6 py-2 text-center text-white"
        >
          Daftar
        </NuxtLink>
      </div>
    </nav>
  </transition>
  <!-- ------------------------------------ END - Mobile Menu Opened ------------------------------------ -->
</template>
