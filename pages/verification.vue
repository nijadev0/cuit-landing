<script setup>
//--------------------------------------------------------------------------------------------------------------//
import {
  DiplomaVerifiedLineIcon,
  FiltersCircleLineIcon,
  StarCircleLineIcon,
} from "~/assets/icons";
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
const { $gsap } = useNuxtApp();

onMounted(() => {
  //--------------------------------------------------------------------------------------------------------------//
  // Hero Animation
  //--------------------------------------------------------------------------------------------------------------//
  const hero = document.querySelectorAll("#verify-hero .verify-hero-item");

  hero.forEach((item, i) => {
    $gsap.fromTo(
      item,
      {
        y: 96,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2",
        delay: i * 0.25,
      },
    );
  });
  //--------------------------------------------------------------------------------------------------------------//
  // Benefit Animation
  //--------------------------------------------------------------------------------------------------------------//

  // Section - Text Heading
  const benefit_text = document.querySelectorAll(".verify-benefit-text");

  benefit_text.forEach((text, index) => {
    $gsap.fromTo(
      text,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2",
        stagger: index * 0.05,
        scrollTrigger: {
          trigger: `#verify-benefit`,
          start: "top bottom",
        },
      },
    );
  });

  // Section - Card
  const benefit_card = document.querySelectorAll(".verify-benefit-card");

  benefit_card.forEach((card, index) => {
    $gsap.fromTo(
      card,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2",
        delay: index * 0.25,
        scrollTrigger: {
          trigger: `#verify-benefit`,
          start: "top center",
        },
      },
    );
  });
  //--------------------------------------------------------------------------------------------------------------//
  // Type of Verify Animation
  //--------------------------------------------------------------------------------------------------------------//

  // Section - Text Heading
  const type_text = document.querySelectorAll(".verify-type-text");

  type_text.forEach((text, index) => {
    $gsap.fromTo(
      text,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2",
        stagger: index * 0.05,
        scrollTrigger: {
          trigger: `#verify-type`,
          start: "top bottom",
        },
      },
    );
  });

  // Section - Image
  const all_section_image = document.querySelectorAll(
    "img.verify-section-image",
  );

  all_section_image.forEach((image, index) => {
    $gsap.fromTo(
      image,
      {
        opacity: 0,
        y: () => `-${image.offsetHeight / 4}`,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.easeIn",
        scrollTrigger: {
          trigger: `section.verify-section.verify-section-${index + 1}`,
          start: "bottom bottom",
        },
      },
    );
  });

  // Section - Text Heading
  const all_section_text_heading = document.querySelectorAll(
    ".verify-section-text-heading",
  );

  all_section_text_heading.forEach((text, index) => {
    $gsap.fromTo(
      text,
      {
        opacity: 0,
        y: 32,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.easeOut",
        scrollTrigger: {
          trigger: `section.verify-section.verify-section-${index + 1}`,
          start: "bottom bottom",
        },
      },
    );
  });

  // Section - Text Content
  const all_section_text_content = document.querySelectorAll(
    ".verify-section-text-content",
  );

  all_section_text_content.forEach((text, index) => {
    $gsap.fromTo(
      text,
      {
        opacity: 0,
        y: 32,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.easeOut",
        scrollTrigger: {
          trigger: `section.verify-section.verify-section-${index + 1}`,
          start: "bottom bottom",
        },
      },
    );
  });
  //--------------------------------------------------------------------------------------------------------------//
  // Step Animation
  //--------------------------------------------------------------------------------------------------------------//

  // Section - Text Heading
  const step_text = document.querySelectorAll(".verify-step-text");

  step_text.forEach((text, index) => {
    $gsap.fromTo(
      text,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2",
        stagger: index * 0.05,
        scrollTrigger: {
          trigger: `#verify-step`,
          start: "top center",
        },
      },
    );
  });

  // Section - Card
  const step_card = document.querySelectorAll(".verify-step-card");

  step_card.forEach((card, index) => {
    $gsap.fromTo(
      card,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2",
        delay: 0.5 + index * 0.25,
        scrollTrigger: {
          trigger: `#verify-step`,
          start: "top center",
        },
      },
    );
  });
  //--------------------------------------------------------------------------------------------------------------//
  // Section Join Now
  //--------------------------------------------------------------------------------------------------------------//

  const join_now_content = document.querySelectorAll(
    ".verify-join-now-content",
  );

  join_now_content.forEach((item, index) => {
    $gsap.fromTo(
      item,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2",
        delay: index * 0.25,
        scrollTrigger: {
          trigger: `#verify-join-now`,
          start: "center bottom",
        },
      },
    );
  });
  //--------------------------------------------------------------------------------------------------------------//
});
//--------------------------------------------------------------------------------------------------------------//
</script>

<template>
  <!-- ------------------------------------ START - Hero ------------------------------------ -->
  <section
    id="verify-hero"
    class="relative mt-14 overflow-hidden pb-4 lg:mt-20 lg:h-[calc(100vh_-_48px)] lg:pb-8"
  >
    <div class="relative z-10 h-full w-full">
      <div
        class="absolute inset-0 h-full w-full scale-110 bg-gradient-to-tl from-white/0 via-white/50 to-white/0"
      />

      <NuxtImg
        class="hidden h-auto w-full object-cover object-center md:hidden lg:block"
        src="/hero-bg-2.png"
        alt="Hero Background 2"
        preload
      />
    </div>

    <NuxtImg
      class="hidden h-auto w-full object-contain md:block lg:hidden"
      src="/hero-bg-2-tablet.png"
      alt="Hero Background 2 Tablet"
      preload
    />

    <NuxtImg
      class="block h-auto w-full object-contain md:hidden lg:hidden"
      src="/hero-bg-2-mobile.png"
      alt="Hero Background 2 Mobile"
      preload
    />

    <div
      class="container absolute left-1/2 top-1/2 z-10 mx-auto -mt-10 flex h-full w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 px-6 lg:gap-6"
    >
      <div class="overflow-hidden">
        <h1
          class="verify-hero-item text-center text-2xl font-extrabold leading-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight"
        >
          Verifikasi pada Cuit
        </h1>
      </div>

      <div class="overflow-hidden">
        <p
          class="verify-hero-item text-center text-base font-semibold leading-normal text-grey-smooth lg:text-xl xl:text-2xl"
        >
          Akses fitur Cuit lebih lengkap di tangan Anda hanya dengan sekali
          proses verifikasi. Buka kesempatan baru untuk berkolaborasi dengan
          tingkat kredibilitas yang lebih tinggi.
        </p>
      </div>

      <section
        class="flex flex-row items-center justify-center gap-4 overflow-hidden"
      >
        <NuxtImg
          class="verify-hero-item h-auto w-28 lg:w-40 xl:w-44"
          src="/download-google-play.png"
          alt="Download Google Play"
        />
        <NuxtImg
          class="verify-hero-item h-auto w-28 lg:w-40 xl:w-44"
          src="/download-app-store.png"
          alt="Download App Store"
        />
      </section>
    </div>
  </section>
  <!-- ------------------------------------ END - Hero ------------------------------------ -->

  <!-- ------------------------------------ START - Benefit ------------------------------------ -->
  <section id="verify-benefit" class="relative my-4 py-8 lg:my-8 lg:py-16">
    <div
      class="container mx-auto w-full max-w-screen-xl px-6 lg:px-20 2xl:px-10"
    >
      <nav class="mb-8 space-y-4 lg:mb-16">
        <div class="overflow-hidden">
          <h3
            class="verify-benefit-text text-center text-xl font-extrabold lg:text-4xl"
          >
            Keuntungan Verifikasi
          </h3>
        </div>

        <div class="overflow-hidden">
          <p
            class="verify-benefit-text text-center text-base font-medium text-grey-smooth lg:text-lg"
          >
            Yang akan kamu dapatkan setelah melakukan proses verifikasi:
          </p>
        </div>
      </nav>

      <div class="flex flex-col items-start gap-6 lg:flex-row lg:gap-8">
        <figure
          v-for="data in benefit_sections"
          class="verify-benefit-card flex basis-[100%] flex-col items-center justify-start rounded-xl border border-grey-barrier p-6 md:basis-1/2 lg:min-h-[320px] lg:basis-1/3 2xl:min-h-[288px]"
        >
          <component
            :is="data.icon"
            class="mb-6 h-16 w-16 text-grey-secondary-5 lg:mb-8 xl:h-20 xl:w-20"
          />

          <h5
            class="mb-2 text-lg font-extrabold text-grey-concencrated lg:mb-1.5 lg:text-xl xl:mb-4 xl:text-2xl"
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
  <section id="verify-type" class="relative my-4 py-8 lg:my-8 lg:py-16">
    <nav
      class="mb-12 flex flex-col items-center justify-center gap-4 px-6 lg:mb-16"
    >
      <div class="overflow-hidden">
        <h3
          class="verify-type-text text-center text-xl font-extrabold lg:text-3xl xl:text-4xl"
        >
          Macam-Macam Verifikasi di Cuit
        </h3>
      </div>

      <div class="overflow-hidden">
        <p
          class="verify-type-text max-w-3xl text-center text-base font-medium text-grey-smooth lg:text-lg"
        >
          Cuit menyediakan sistem verifikasi yang berbeda untuk jenis akun yang
          berbeda seperti akun personal, akun premium, serta akun brand
        </p>
      </div>
    </nav>

    <section
      v-for="data in verification_type_section"
      class="relative py-4 lg:py-8"
      :class="[
        `verify-section verify-section-${data.id}`,
        data.id === 2 ? 'bg-white' : 'bg-grey-footer',
      ]"
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
          <div class="w-full overflow-hidden">
            <NuxtImg
              class="h-auto w-full object-contain"
              :class="`verify-section-image verify-section-image-${data.id}`"
              :src="data.src"
              :alt="data.alt"
            />
          </div>
        </figure>

        <section class="basis-1/2 space-y-2 lg:space-y-4">
          <div class="overflow-hidden">
            <h3
              class="verify-section-text-heading text-xl font-extrabold leading-snug lg:text-3xl xl:text-4xl"
            >
              {{ data.title }}
            </h3>
          </div>

          <div class="overflow-hidden">
            <p
              class="verify-section-text-content text-base text-grey-smooth lg:text-lg"
            >
              {{ data.content }}
            </p>
          </div>
        </section>
      </div>
    </section>
  </section>
  <!-- ------------------------------------ START - Section ------------------------------------ -->

  <!-- ------------------------------------ START - Step Verification ------------------------------------ -->
  <section id="verify-step" class="relative my-4 py-8 lg:my-8 lg:py-16">
    <div
      class="container mx-auto w-full max-w-screen-xl px-6 lg:px-20 2xl:px-10"
    >
      <nav
        class="mb-8 flex flex-col items-center justify-center gap-4 lg:mb-16"
      >
        <div class="overflow-hidden">
          <h3
            class="verify-step-text text-center text-xl font-extrabold lg:text-3xl xl:text-4xl"
          >
            Langkah Proses Verifikasi
          </h3>
        </div>

        <div class="overflow-hidden">
          <p
            class="verify-step-text max-w-3xl text-center text-base font-medium text-grey-smooth lg:text-lg"
          >
            Langkah singkat dan sederhana proses Verifikasi
          </p>
        </div>
      </nav>

      <div
        class="flex flex-col items-start gap-6 md:items-center lg:flex-row lg:gap-8"
      >
        <figure
          v-for="data in verify_step_sections"
          class="verify-step-card flex min-h-[720px] basis-1/3 flex-col items-center justify-start rounded-xl border border-grey-barrier p-6 md:min-h-0 md:w-full lg:min-h-[600px]"
        >
          <NuxtImg
            class="mb-10 h-auto w-56 object-contain lg:w-48 xl:w-64"
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
  <section
    id="verify-join-now"
    class="relative my-4 mb-6 py-8 lg:my-8 lg:py-16"
  >
    <div
      class="container mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center px-6 lg:px-20 2xl:px-10"
    >
      <div class="overflow-hidden">
        <NuxtImg
          src="/bird-illustration-3.png"
          alt="Bird Illustration 3"
          class="verify-join-now-content h-36 w-36 object-contain lg:h-48 lg:w-48 xl:h-56 xl:w-56"
        />
      </div>

      <div class="overflow-hidden">
        <h3
          class="verify-join-now-content my-4 text-center text-xl font-extrabold text-grey-concencrated lg:my-8 lg:text-3xl xl:text-4xl"
        >
          Apa Yang Anda Tunggu? Bergabunglah Sekarang!
        </h3>
      </div>

      <div class="overflow-hidden">
        <p
          class="verify-join-now-content mx-auto max-w-3xl text-center text-base text-grey-smooth lg:text-lg"
        >
          Tidak perlu menunggu lagi. Jadilah bagian dari komunitas terbesar di
          Indonesia. Daftarkan diri Anda, temukan teman-teman baru, dan bagikan
          minat Anda bersama Cuit. Mari bersama-sama menciptakan pengalaman
          media sosial yang lebih bermakna!
        </p>
      </div>
    </div>
  </section>
  <!-- ------------------------------------ END - Join Now ------------------------------------ -->
</template>
