<script setup>
//--------------------------------------------------------------------------------------------------------------//
import {
  DiplomaVerifiedLineIcon,
  FiltersCircleLineIcon,
  StarCircleLineIcon,
} from "~/assets/icons";
//--------------------------------------------------------------------------------------------------------------//
const benefit_sections = [
  {
    id: 1,
    icon: StarCircleLineIcon,
    title: "Verified Badge",
    content:
      "Profilmu akan mendapatkan sebuah badge yang menunjukkan kalau kamu adalah pengguna asli yang kredibel.",
  },
  {
    id: 2,
    icon: DiplomaVerifiedLineIcon,
    title: "Akses Penuh",
    content:
      "Kamu akan mendapatkan akses penuh pada fitur-fitur yang disediakan oleh platform Cuit.",
  },
  {
    id: 3,
    icon: FiltersCircleLineIcon,
    title: "Kolaborasi",
    content:
      "Berinteraksi dengan orang lain di dalam Cuit, bisa menumbuhkan peluang kolaborasi positif, yang didasari rasa percaya dan aman.",
  },
];
//--------------------------------------------------------------------------------------------------------------//
const verification_type_section = [
  {
    id: 1,
    direction: "left",
    src: "/verif-photo-section-1.png",
    alt: "Verif Photo Section 1",
    title: "Verifikasi Personal",
    content:
      "Verifikasi dasar yang diperuntukkan bagi pengguna pribadi secara umum. Sertakan KTP dan foto Selfie Anda sebagai syarat melakukan verifikasi. ",
  },
  {
    id: 2,
    direction: "right",
    src: "/verif-photo-section-2.png",
    alt: "Verif Photo Section 2",
    title: "Verifikasi Premium",
    content:
      "Verifikasi lanjutan bagi Anda yang ingin mengembangkan impact pada komunitas Cuit. Tentukan niche yang sesuai dengan audience Anda, dan dapatkan keuntungan dari konten yang Anda buat. ",
  },
  {
    id: 3,
    direction: "left",
    src: "/verif-photo-section-3.png",
    alt: "Verif Photo Section 3",
    title: "Verifikasi Brand",
    content:
      "Verifikasi halaman profil khusus untuk perusahaan yang memiliki brand tertentu. Fitur ini bisa dimanfaatkan untuk berhubungan langsung dengan konsumen. Mendengar lebih detail apa yang menjadi keinginan konsumen.",
  },
];
//--------------------------------------------------------------------------------------------------------------//
const verify_step_sections = [
  {
    id: 1,
    src: "/verif-step-photo-1.png",
    alt: "Verify Step Photo 1",
    title: "Foto Selfie",
    content:
      "Pertama, lakukan Foto Selfie untuk menunjukkan keaslian diri Anda.",
  },
  {
    id: 2,
    src: "/verif-step-photo-2.png",
    alt: "Verify Step Photo 2",
    title: "Foto KTP",
    content: "Kedua, Foto KTP Anda untuk mendeteksi data diri Anda.",
  },
  {
    id: 3,
    src: "/verif-step-photo-3.png",
    alt: "Verify Step Photo 3",
    title: "Cek Data Diri",
    content:
      "Ketiga, cek Data Diri Anda dan lengkapi jika Data Diri Anda tidak sama dengan KTP.",
  },
];
//--------------------------------------------------------------------------------------------------------------//
</script>

<template>
  <!-- ------------------------------------ START - Hero ------------------------------------ -->
  <section class="relative mt-20 pb-8">
    <NuxtImg
      class="h-auto w-full object-contain"
      src="/hero-bg-1.png"
      alt="Hero Background 1"
    />
    <div
      class="container absolute left-1/2 top-1/3 z-10 mx-auto flex h-full w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6"
    >
      <h1 class="text-center text-5xl font-bold leading-snug">
        Verifikasi pada Cuit
      </h1>

      <p class="text-center text-2xl leading-normal text-grey-smooth">
        Akses fitur Cuit lebih lengkap di tangan Anda hanya dengan sekali proses
        verifikasi. Buka kesempatan baru untuk berkolaborasi dengan tingkat
        kredibilitas yang lebih tinggi.
      </p>

      <section class="flex flex-row items-center gap-4">
        <button
          class="flex flex-row items-center gap-2.5 rounded-xl bg-neutral-950 px-6 py-3.5 text-white transition-colors duration-300 ease-in hover:bg-neutral-700"
        >
          <img src="/google-play-logo.png" class="h-9 w-9 flex-shrink-0" />

          <div class="flex flex-col items-start gap-px text-left">
            <span class="text-xs uppercase text-neutral-300">
              Dapatkan di
            </span>
            <span class="text-xl font-bold">Google Play</span>
          </div>
        </button>

        <button
          class="flex flex-row items-center gap-2.5 rounded-xl bg-neutral-950 px-8 py-3.5 text-white transition-colors duration-300 ease-in hover:bg-neutral-700"
        >
          <img src="/apple-logo.png" class="h-9 w-9 flex-shrink-0" />

          <div class="flex flex-col items-start gap-px text-left">
            <span class="text-xs uppercase text-neutral-300">
              Download di
            </span>
            <span class="text-xl font-bold">App Store</span>
          </div>
        </button>
      </section>
    </div>
  </section>
  <!-- ------------------------------------ END - Hero ------------------------------------ -->

  <!-- ------------------------------------ START - Benefit ------------------------------------ -->
  <section class="relative my-8 py-16">
    <div class="container mx-auto w-full max-w-screen-xl px-20 2xl:px-10">
      <nav class="mb-16 space-y-4">
        <h3 class="text-center text-4xl font-extrabold">
          Keuntungan Verifikasi
        </h3>
        <p class="text-center text-lg font-medium text-grey-smooth">
          Yang akan kamu dapatkan setelah melakukan proses verifikasi:
        </p>
      </nav>

      <div class="flex flex-row items-start gap-8">
        <figure
          v-for="data in benefit_sections"
          class="flex min-h-[288px] basis-1/3 flex-col items-center justify-start rounded-xl border border-grey-barrier p-6"
        >
          <component
            :is="data.icon"
            class="mb-8 h-20 w-20 text-grey-secondary-5"
          />

          <h5 class="mb-4 text-2xl font-extrabold text-grey-concencrated">
            {{ data.title }}
          </h5>

          <p class="text-center text-base font-medium text-grey-smooth">
            {{ data.content }}
          </p>
        </figure>
      </div>
    </div>
  </section>
  <!-- ------------------------------------ END - Benefit ------------------------------------ -->

  <!-- ------------------------------------ START - Section ------------------------------------ -->
  <section class="relative my-8 py-16">
    <nav class="mb-16 flex flex-col items-center justify-center gap-4">
      <h3 class="text-center text-4xl font-extrabold">
        Macam-Macam Verifikasi di Cuit
      </h3>
      <p class="max-w-3xl text-center text-lg font-medium text-grey-smooth">
        Cuit menyediakan sistem verifikasi yang berbeda untuk jenis akun yang
        berbeda seperti akun personal, akun premium, serta akun brand
      </p>
    </nav>

    <section
      v-for="data in verification_type_section"
      class="relative py-8"
      :class="data.id === 2 ? 'bg-white' : 'bg-grey-footer'"
    >
      <div
        class="container mx-auto my-16 flex w-full max-w-screen-xl items-center justify-between px-20 2xl:px-10"
        :class="data.direction === 'left' ? 'flex-row' : 'flex-row-reverse'"
      >
        <figure class="basis-1/2">
          <NuxtImg
            class="h-auto w-full object-contain"
            :src="data.src"
            :alt="data.alt"
          />
        </figure>

        <section class="basis-1/2 space-y-4">
          <h3 class="text-4xl font-extrabold leading-snug">
            {{ data.title }}
          </h3>

          <p class="text-lg text-grey-smooth">
            {{ data.content }}
          </p>
        </section>
      </div>
    </section>
  </section>
  <!-- ------------------------------------ START - Section ------------------------------------ -->

  <!-- ------------------------------------ START - Step Verification ------------------------------------ -->
  <section class="relative my-8 py-16">
    <div class="container mx-auto w-full max-w-screen-xl px-20 2xl:px-10">
      <nav class="mb-16 flex flex-col items-center justify-center gap-4">
        <h3 class="text-center text-4xl font-extrabold">
          Macam-Macam Verifikasi di Cuit
        </h3>
        <p class="max-w-3xl text-center text-lg font-medium text-grey-smooth">
          Cuit menyediakan sistem verifikasi yang berbeda untuk jenis akun yang
          berbeda seperti akun personal, akun premium, serta akun brand
        </p>
      </nav>

      <div class="flex flex-row items-start gap-8">
        <figure
          v-for="data in verify_step_sections"
          class="flex basis-1/3 flex-col items-center justify-start rounded-xl border border-grey-barrier p-6"
        >
          <NuxtImg
            class="mb-10 h-auto w-64 object-contain"
            :src="data.src"
            :alt="data.alt"
          />

          <h5 class="mb-4 text-2xl font-extrabold text-grey-concencrated">
            {{ data.title }}
          </h5>

          <p class="text-center text-base font-medium text-grey-smooth">
            {{ data.content }}
          </p>
        </figure>
      </div>
    </div>
  </section>
  <!-- ------------------------------------ END - Step Verification ------------------------------------ -->

  <!-- ------------------------------------ END - Join Now ------------------------------------ -->
  <section class="relative my-8 py-16">
    <div
      class="container mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center px-20 2xl:px-10"
    >
      <NuxtImg
        src="/bird-illustration-3.png"
        alt="Bird Illustration 3"
        class="h-56 w-56"
      />

      <h3 class="my-8 text-4xl font-extrabold text-grey-concencrated">
        Apa Yang Anda Tunggu? Bergabunglah Sekarang!
      </h3>
      <p class="mx-auto max-w-3xl text-center text-grey-smooth">
        Tidak perlu menunggu lagi. Jadilah bagian dari komunitas terbesar di
        Indonesia. Daftarkan diri Anda, temukan teman-teman baru, dan bagikan
        minat Anda bersama Cuit. Mari bersama-sama menciptakan pengalaman media
        sosial yang lebih bermakna!
      </p>
    </div>
  </section>
  <!-- ------------------------------------ END - Join Now ------------------------------------ -->
</template>
