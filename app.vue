<script setup>
import {
  FacebookLineIcon,
  InstagramLineIcon,
  LinkedinLineIcon,
  YoutubeLineIcon,
} from "./assets/icons";
</script>

<template>
  <NuxtLayout>
    <div class="cuit-landing relative font-nunito">
      <!-- ------------------------------------ START - Navbar ------------------------------------ -->
      <nav
        class="fixed inset-0 z-50 flex h-20 w-full items-center bg-white py-7 shadow-1"
      >
        <div
          class="container mx-auto flex w-full max-w-screen-xl items-center justify-between px-20 2xl:px-10"
        >
          <!-- Logo -->
          <NuxtLink to="/" class="flex basis-1/3 self-start">
            <img class="h-8 w-auto" src="/cuit-logo.png" />
          </NuxtLink>

          <!-- Menu -->
          <nav
            class="flex basis-1/3 flex-row items-center justify-center gap-8"
          >
            <NuxtLink to="/"> Beranda </NuxtLink>

            <NuxtLink to="/verification"> Verifikasi </NuxtLink>

            <NuxtLink to="/contact"> Kontak </NuxtLink>
          </nav>

          <!-- Account -->
          <nav class="flex basis-1/3 flex-row items-center justify-end gap-3">
            <a href="/login" class="rounded-lg px-6 py-2 text-baseline-primary">
              Masuk
            </a>

            <a
              href="/register"
              class="rounded-lg bg-baseline-primary px-6 py-2 text-white"
            >
              Daftar
            </a>
          </nav>
        </div>
      </nav>
      <!-- ------------------------------------ END - Navbar ------------------------------------ -->

      <!-- ------------------------------------ END - Page ------------------------------------ -->
      <NuxtPage />
      <!-- ------------------------------------ END - Page ------------------------------------ -->

      <!-- ------------------------------------ START - Footer ------------------------------------ -->
      <footer class="relative bg-grey-footer py-20">
        <div
          class="container mx-auto flex w-full max-w-screen-xl items-center justify-between px-20 2xl:px-10"
        >
          <!-- Brand -->
          <div class="flex flex-col items-start gap-8">
            <NuxtLink to="/">
              <img class="h-8 w-auto" src="/cuit-logo.png" />
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
              class="pt-8 text-left text-sm font-normal text-grey-concencrated"
            >
              Copyright 2023. All rights reserved.
            </p>
          </div>

          <!-- Menu 1 -->
          <nav class="flex flex-col items-start gap-6">
            <a href="/" class="font-semibold text-grey-concencrated">
              Beranda
            </a>

            <a
              href="/verification"
              class="font-semibold text-grey-concencrated"
            >
              Verifikasi
            </a>

            <a href="/contact-us" class="font-semibold text-grey-concencrated">
              Hubungi Kami
            </a>

            <a href="/faq" class="font-semibold text-grey-concencrated">
              FAQ
            </a>
          </nav>

          <!-- Menu 2 -->
          <nav class="flex flex-col items-start gap-6">
            <a
              href="/privacy-policy"
              class="font-semibold text-grey-concencrated"
            >
              Kebijakan Privasi
            </a>

            <a href="/term-of-use" class="font-semibold text-grey-concencrated">
              Ketentuan Penggunaan
            </a>

            <a href="/career" class="font-semibold text-grey-concencrated">
              Karir
            </a>

            <a href="/blog" class="font-semibold text-grey-concencrated">
              Blog
            </a>
          </nav>

          <!-- Download -->
          <nav class="flex flex-col items-start gap-2">
            <h5 class="pb-2 font-semibold text-grey-concencrated">
              Unduh Aplikasi Cuit
            </h5>

            <button
              class="flex flex-row items-center gap-2.5 rounded-xl bg-neutral-950 px-4 py-1.5 text-white transition-colors duration-300 ease-in hover:bg-neutral-700"
            >
              <img src="/google-play-logo.png" class="h-7 w-7 flex-shrink-0" />

              <div class="flex flex-col items-start gap-px text-left">
                <span class="text-xs uppercase text-neutral-300">
                  Dapatkan di
                </span>
                <span class="text-xl font-bold">Google Play</span>
              </div>
            </button>

            <button
              class="flex flex-row items-center gap-2.5 rounded-xl bg-neutral-950 px-6 py-1.5 text-white transition-colors duration-300 ease-in hover:bg-neutral-700"
            >
              <img src="/apple-logo.png" class="h-7 w-7 flex-shrink-0" />

              <div class="flex flex-col items-start gap-px text-left">
                <span class="text-xs uppercase text-neutral-300">
                  Download di
                </span>
                <span class="text-xl font-bold">App Store</span>
              </div>
            </button>
          </nav>
        </div>
      </footer>
      <!-- ------------------------------------ END - Footer ------------------------------------ -->
    </div>
  </NuxtLayout>
</template>

<style>
/* exact link will show the primary color for only the exact matching link */
a.router-link-active.router-link-exact-active {
  @apply font-semibold text-baseline-primary;
}
</style>
