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
      class="container mx-auto flex w-full max-w-screen-xl flex-col items-start justify-between gap-10 px-6 md:px-16 lg:flex-row lg:items-center lg:gap-0 lg:px-20 2xl:px-10"
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
        <a
          href="/"
          class="relative overflow-x-hidden font-semibold text-grey-concencrated before:absolute before:-left-full before:bottom-0 before:h-0.5 before:w-full before:bg-baseline-primary before:transition-all before:duration-300 before:ease-in hover:text-baseline-primary before:hover:left-0"
        >
          Beranda
        </a>

        <a
          href="/verification"
          class="relative overflow-x-hidden font-semibold text-grey-concencrated before:absolute before:-left-full before:bottom-0 before:h-0.5 before:w-full before:bg-baseline-primary before:transition-all before:duration-300 before:ease-in hover:text-baseline-primary before:hover:left-0"
        >
          Verifikasi
        </a>

        <NuxtLink
          to="/contact"
          class="relative overflow-x-hidden font-semibold text-grey-concencrated before:absolute before:-left-full before:bottom-0 before:h-0.5 before:w-full before:bg-baseline-primary before:transition-all before:duration-300 before:ease-in hover:text-baseline-primary before:hover:left-0"
        >
          Hubungi Kami
        </NuxtLink>

        <a
          href="/faq"
          class="relative overflow-x-hidden font-semibold text-grey-concencrated before:absolute before:-left-full before:bottom-0 before:h-0.5 before:w-full before:bg-baseline-primary before:transition-all before:duration-300 before:ease-in hover:text-baseline-primary before:hover:left-0"
        >
          FAQ
        </a>
      </nav>

      <!-- Menu 2 -->
      <nav class="flex flex-col items-start gap-4 lg:gap-6">
        <a
          href="/privacy-policy"
          class="relative overflow-x-hidden font-semibold text-grey-concencrated before:absolute before:-left-full before:bottom-0 before:h-0.5 before:w-full before:bg-baseline-primary before:transition-all before:duration-300 before:ease-in hover:text-baseline-primary before:hover:left-0"
        >
          Kebijakan Privasi
        </a>

        <a
          href="/term-of-use"
          class="relative overflow-x-hidden font-semibold text-grey-concencrated before:absolute before:-left-full before:bottom-0 before:h-0.5 before:w-full before:bg-baseline-primary before:transition-all before:duration-300 before:ease-in hover:text-baseline-primary before:hover:left-0"
        >
          Ketentuan Penggunaan
        </a>

        <a
          href="/career"
          class="relative overflow-x-hidden font-semibold text-grey-concencrated before:absolute before:-left-full before:bottom-0 before:h-0.5 before:w-full before:bg-baseline-primary before:transition-all before:duration-300 before:ease-in hover:text-baseline-primary before:hover:left-0"
        >
          Karir
        </a>

        <a
          href="/blog"
          class="relative overflow-x-hidden font-semibold text-grey-concencrated before:absolute before:-left-full before:bottom-0 before:h-0.5 before:w-full before:bg-baseline-primary before:transition-all before:duration-300 before:ease-in hover:text-baseline-primary before:hover:left-0"
        >
          Blog
        </a>
      </nav>

      <!-- Download -->
      <nav class="flex flex-col items-start gap-2">
        <h5 class="pb-2 font-semibold text-grey-concencrated">
          Unduh Aplikasi Cuit
        </h5>

        <NuxtImg
          src="/download-google-play.png"
          alt="Download Google Play"
          class="h-auto w-28 md:w-32"
        />

        <NuxtImg
          src="/download-app-store.png"
          alt="Download App Store"
          class="h-auto w-28 md:w-32"
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
