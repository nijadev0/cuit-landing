<script setup>
//--------------------------------------------------------------------------------------------------------------//
import {
  FacebookLineIcon,
  InstagramLineIcon,
  LinkedinLineIcon,
  YoutubeLineIcon,
} from "./assets/icons";
//--------------------------------------------------------------------------------------------------------------//
</script>

<template>
  <!-- ------------------------------------ START - Footer ------------------------------------ -->
  <footer class="relative bg-grey-footer py-6 lg:py-20">
    <div
      class="container mx-auto flex w-full max-w-screen-xl flex-col items-start justify-between gap-10 px-6 lg:flex-row lg:items-center lg:gap-0 lg:px-20 2xl:px-10"
    >
      <!-- Brand -->
      <div class="flex flex-col items-start gap-8">
        <NuxtLink to="/">
          <NuxtImg class="h-8 w-auto" src="/cuit-logo.png" />
        </NuxtLink>

        <section class="space-y-0.5">
          <h6 class="font-normal text-grey-smooth">Email :</h6>
          <p class="text-grey-concencrated">support@cuit.com</p>
        </section>

        <section class="flex items-center gap-4">
          <a href="/facebook">
            <FacebookLineIcon class="h-6 w-6 text-grey-concencrated" />
          </a>

          <a href="/instagram">
            <InstagramLineIcon class="h-6 w-6 text-grey-concencrated" />
          </a>

          <a href="/linkedin">
            <LinkedinLineIcon class="h-6 w-6 text-grey-concencrated" />
          </a>

          <a href="/youtube">
            <YoutubeLineIcon class="h-6 w-6 text-grey-concencrated" />
          </a>
        </section>

        <p
          class="hidden pt-8 text-left text-sm font-normal text-grey-concencrated lg:block"
        >
          Copyright 2023. All rights reserved.
        </p>
      </div>

      <!-- Menu 1 -->
      <nav class="flex flex-col items-start gap-4 lg:gap-6">
        <a href="/" class="font-semibold text-grey-concencrated"> Beranda </a>

        <a href="/verification" class="font-semibold text-grey-concencrated">
          Verifikasi
        </a>

        <a href="/contact-us" class="font-semibold text-grey-concencrated">
          Hubungi Kami
        </a>

        <a href="/faq" class="font-semibold text-grey-concencrated"> FAQ </a>
      </nav>

      <!-- Menu 2 -->
      <nav class="flex flex-col items-start gap-4 lg:gap-6">
        <a href="/privacy-policy" class="font-semibold text-grey-concencrated">
          Kebijakan Privasi
        </a>

        <a href="/term-of-use" class="font-semibold text-grey-concencrated">
          Ketentuan Penggunaan
        </a>

        <a href="/career" class="font-semibold text-grey-concencrated">
          Karir
        </a>

        <a href="/blog" class="font-semibold text-grey-concencrated"> Blog </a>
      </nav>

      <!-- Download -->
      <nav class="flex flex-col items-start gap-2">
        <h5 class="pb-2 font-semibold text-grey-concencrated">
          Unduh Aplikasi Cuit
        </h5>

        <NuxtImg
          src="/download-google-play.png"
          alt="Download Google Play"
          class="h-auto w-28 lg:w-32"
        />

        <NuxtImg
          src="/download-app-store.png"
          alt="Download App Store"
          class="h-auto w-28 lg:w-32"
        />
      </nav>

      <p
        class="block pt-8 text-left text-sm font-normal text-grey-concencrated lg:hidden"
      >
        Copyright 2023. All rights reserved.
      </p>
    </div>
  </footer>
  <!-- ------------------------------------ END - Footer ------------------------------------ -->
</template>

<style>
/* exact link will show the primary color for only the exact matching link */
a.router-link-active.router-link-exact-active {
  @apply font-semibold text-baseline-primary;
}
</style>
