<script setup>
//--------------------------------------------------------------------------------------------------------------//
import {
  DiplomaVerifiedLineIcon,
  FiltersCircleLineIcon,
  StarCircleLineIcon,
} from "~/assets/icons";
//--------------------------------------------------------------------------------------------------------------//
// import "swiper/css";
// import "swiper/css/pagination";
//--------------------------------------------------------------------------------------------------------------//
useHead({
  title: "Cuit - Verifikasi",
});
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
  <section class="relative mt-14 pb-4 lg:mt-20 lg:pb-8">
    <NuxtImg
      class="hidden h-auto w-full object-contain lg:block"
      src="/hero-bg-2.png"
      alt="Hero Background 2"
    />

    <NuxtImg
      class="block h-auto w-full object-contain lg:hidden"
      src="/hero-bg-2-mobile.png"
      alt="Hero Background 2 Mobile"
    />

    <div
      class="container absolute left-1/2 top-1/2 z-10 mx-auto flex h-full w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 px-6 lg:top-1/3 lg:-translate-y-1/2 lg:gap-6"
    >
      <h1 class="text-center text-2xl font-extrabold leading-snug lg:text-5xl">
        Verifikasi pada Cuit
      </h1>

      <p
        class="text-center text-base font-semibold leading-normal text-grey-smooth lg:text-2xl"
      >
        Akses fitur Cuit lebih lengkap di tangan Anda hanya dengan sekali proses
        verifikasi. Buka kesempatan baru untuk berkolaborasi dengan tingkat
        kredibilitas yang lebih tinggi.
      </p>

      <section class="flex flex-row items-center justify-center gap-4">
        <NuxtImg
          class="h-auto w-28 lg:w-44"
          src="/download-google-play.png"
          alt="Download Google Play"
        />
        <NuxtImg
          class="h-auto w-28 lg:w-44"
          src="/download-app-store.png"
          alt="Download App Store"
        />
      </section>
    </div>
  </section>
  <!-- ------------------------------------ END - Hero ------------------------------------ -->

  <!-- ------------------------------------ START - Benefit ------------------------------------ -->
  <section class="relative my-4 py-8 lg:my-8 lg:py-16">
    <div
      class="container mx-auto w-full max-w-screen-xl px-6 lg:px-20 2xl:px-10"
    >
      <nav class="mb-8 space-y-4 lg:mb-16">
        <h3 class="text-center text-xl font-extrabold lg:text-4xl">
          Keuntungan Verifikasi
        </h3>

        <p
          class="text-center text-base font-medium text-grey-smooth lg:text-lg"
        >
          Yang akan kamu dapatkan setelah melakukan proses verifikasi:
        </p>
      </nav>

      <div class="flex flex-col items-start gap-6 lg:flex-row lg:gap-8">
        <figure
          v-for="data in benefit_sections"
          class="flex basis-1/3 flex-col items-center justify-start rounded-xl border border-grey-barrier p-6 lg:min-h-[288px]"
        >
          <component
            :is="data.icon"
            class="mb-6 h-16 w-16 text-grey-secondary-5 lg:mb-8 lg:h-20 lg:w-20"
          />

          <h5
            class="mb-2 text-lg font-extrabold text-grey-concencrated lg:mb-4 lg:text-2xl"
          >
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
  <section class="relative my-4 py-8 lg:my-8 lg:py-16">
    <nav
      class="mb-12 flex flex-col items-center justify-center gap-4 px-6 lg:mb-16"
    >
      <h3 class="text-center text-xl font-extrabold lg:text-4xl">
        Macam-Macam Verifikasi di Cuit
      </h3>
      <p
        class="max-w-3xl text-center text-base font-medium text-grey-smooth lg:text-lg"
      >
        Cuit menyediakan sistem verifikasi yang berbeda untuk jenis akun yang
        berbeda seperti akun personal, akun premium, serta akun brand
      </p>
    </nav>

    <section
      v-for="data in verification_type_section"
      class="relative py-4 lg:py-8"
      :class="[data.id === 2 ? 'bg-white' : 'bg-grey-footer']"
    >
      <div
        class="container mx-auto flex w-full max-w-screen-xl items-center justify-between gap-8 px-6 py-6 lg:gap-0 lg:px-20 lg:py-16 2xl:px-10"
        :class="[
          data.direction === 'left'
            ? 'flex-col lg:flex-row'
            : 'flex-col lg:flex-row-reverse',
        ]"
      >
        <figure class="basis-1/2">
          <NuxtImg
            class="h-auto w-full object-contain"
            :src="data.src"
            :alt="data.alt"
          />
        </figure>

        <section class="basis-1/2 space-y-2 lg:space-y-4">
          <h3 class="text-xl font-extrabold leading-snug lg:text-4xl">
            {{ data.title }}
          </h3>

          <p class="text-base text-grey-smooth lg:text-lg">
            {{ data.content }}
          </p>
        </section>
      </div>
    </section>
  </section>
  <!-- ------------------------------------ START - Section ------------------------------------ -->

  <!-- ------------------------------------ START - Step Verification ------------------------------------ -->
  <section class="relative my-4 py-8 lg:my-8 lg:py-16">
    <div
      class="container mx-auto w-full max-w-screen-xl px-6 lg:px-20 2xl:px-10"
    >
      <nav
        class="mb-8 flex flex-col items-center justify-center gap-4 lg:mb-16"
      >
        <h3 class="text-center text-xl font-extrabold lg:text-4xl">
          Langkah Proses Verifikasi
        </h3>
        <p
          class="max-w-3xl text-center text-base font-medium text-grey-smooth lg:text-lg"
        >
          Langkah singkat dan sederhana proses Verifikasi
        </p>
      </nav>

      <div class="flex flex-col items-start gap-6 lg:flex-row lg:gap-8">
        <figure
          v-for="data in verify_step_sections"
          class="flex basis-1/3 flex-col items-center justify-start rounded-xl border border-grey-barrier p-6"
        >
          <NuxtImg
            class="mb-10 h-auto w-56 object-contain lg:w-64"
            :src="data.src"
            :alt="data.alt"
          />

          <h5
            class="mb-4 text-lg font-extrabold text-grey-concencrated lg:text-2xl"
          >
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
  <section class="relative my-4 mb-6 py-8 lg:my-8 lg:py-16">
    <div
      class="container mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center px-6 lg:px-20 2xl:px-10"
    >
      <NuxtImg
        src="/bird-illustration-3.png"
        alt="Bird Illustration 3"
        class="h-36 w-36 object-contain lg:h-56 lg:w-56"
      />

      <h3
        class="my-4 text-center text-xl font-extrabold text-grey-concencrated lg:my-8 lg:text-4xl"
      >
        Apa Yang Anda Tunggu? Bergabunglah Sekarang!
      </h3>

      <p
        class="mx-auto max-w-3xl text-center text-base text-grey-smooth lg:text-lg"
      >
        Tidak perlu menunggu lagi. Jadilah bagian dari komunitas terbesar di
        Indonesia. Daftarkan diri Anda, temukan teman-teman baru, dan bagikan
        minat Anda bersama Cuit. Mari bersama-sama menciptakan pengalaman media
        sosial yang lebih bermakna!
      </p>
    </div>
  </section>
  <!-- ------------------------------------ END - Join Now ------------------------------------ -->
</template>
