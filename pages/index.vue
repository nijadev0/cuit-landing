<script setup>
//--------------------------------------------------------------------------------------------------------------//
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import {
  Dialog2LineIcon,
  FiltersCircleLineIcon,
  MapLineIcon,
  MasksLineIcon,
  SmileCircleLineIcon,
} from "~/assets/icons";

//--------------------------------------------------------------------------------------------------------------//
useHead({
  title: "Cuit - Sosial Media",
});
//--------------------------------------------------------------------------------------------------------------//
const home_sections = [
  {
    id: 1,
    direction: "left",
    src: "/home-section-photo-1.png",
    alt: "Home Section Photo 1",
    title: "Bersosial di Dunia Maya Tidak Pernah Seaman Cuit",
    content:
      "Bergabung dan berinteraksi dengan pengguna lain yang telah terverifikasi menjadi lebih aman dan meyakinkan. Anda bisa membentuk komunitas yang kredibel versi Anda bersama pengguna lain. Kembangkan potensimu, lebarkan jaringanmu, diantara orang-orang yang kredibel, bersama Cuit.",
  },
  {
    id: 2,
    direction: "right",
    src: "/home-section-photo-2.png",
    alt: "Home Section Photo 2",
    title: "Verifikasi Pengguna, Menciptakan Lingkungan Dunia Maya Tanpa BOT",
    content:
      "Tidak ada lagi akun robot, palsu, ataupun sejenisnya yang tidak bertanggung jawab saat berinteraksi dengan pengguna lain. Lakukan verifikasi untuk mendapatkan lebih banyak keuntungan dari Cuit.",
  },
  {
    id: 3,
    direction: "left",
    src: "/home-section-photo-3.png",
    alt: "Home Section Photo 3",
    title: "Komunitas Tanpa Batas, Bersama Orang-Orang yang Jelas",
    content:
      "Membentuk komunitas bersama sesama pengguna dengan frekuensi yang sama, ketertarikan yang sama, aktifitas yang sama, atau bahkan latar belakang yang sama. Ciptakan momen produktif dan menyenangkan mulai dari Cuit.",
  },
  {
    id: 4,
    direction: "right",
    src: "/home-section-photo-4.png",
    alt: "Home Section Photo 4",
    title:
      "Diversifikasi Jenis Akun Anda. Personal, Premium, atau bahkan Brand",
    content:
      "Cuit menyediakan fitur bagi banyak pihak, mulai dari pengguna di tingkat personal, pemimpin komunitas, hingga perusahaan dengan brand. Dalam satu lingkungan media sosial yang sama, kerjasama yang saling menguntungkan dapat tercapai.",
  },
  {
    id: 5,
    direction: "left",
    src: "/home-section-photo-5.png",
    alt: "Home Section Photo 5",
    title:
      "Apresiasi dengan Creative Badge dari Cuit, Jadikan Diri Anda Berbeda",
    content:
      "Creative Badge merupakan bentuk apresiasi terhadap pengguna Cuit, baik dalam lingkaran umum di Cuit, komunitas, ataupun apresiasi dari Brand. Kumpulkan badge untuk profilmu yang lebih berbeda dari pengguna lain.",
  },
];
//--------------------------------------------------------------------------------------------------------------//
const choose_sections = [
  {
    id: 1,
    illustration_src: "/bird-illustration-1.png",
    illustration_alt: "Bird Illustration 1",
    icon: MapLineIcon,
    title: "Info Daerah",
    content:
      "Setiap daerah memiliki pengguna dengan preferensi, ketertarikan, dan keunikan masing-masing. Cari tahu apa yang menjadi trend di suatu daerah melalui Cuit.",
  },
  {
    id: 2,
    icon: SmileCircleLineIcon,
    title: "Gratis",
    content:
      "Cuit akan selamanya gratis. Kehadiran Anda di platform Cuit adalah kebanggan bagi kami. Melayani kebutuhan Anda dalam berjejaring di sosial media adalah tujuan utama kami. Manfaatkan segala fitur yang kami sediakan tanpa dipungut biaya.",
  },
  {
    id: 3,
    icon: MasksLineIcon,
    title: "Anti Bot",
    content:
      "Dengan sistem verifikasi yang dimiliki Cuit, tidak akan ada kesempatan bagi pengguna BOT untuk masuk ke dalam lingkungan Cuit. Nikmati pengalaman bermedia sosial dengan penuh rasa aman dan nyaman.",
  },
  {
    id: 4,
    illustration_src: "/bird-illustration-2.png",
    illustration_alt: "Bird Illustration 2",
    icon: FiltersCircleLineIcon,
    title: "Kolaborasi",
    content:
      "Anda bisa membentuk kolaborasi positif dalam bentuk apapun bersama orang-orang di lingkungan Cuit. Berkolaborasilah untuk menjadi warga Indonesia yang lebih kreatif dan berdampak bagi banyak hal.",
  },
];
//--------------------------------------------------------------------------------------------------------------//
const experience_sections = [
  {
    id: 1,
    src: "/home-experience-avatar-1.png",
    alt: "Home Experience Avatar 1",
    content:
      "Aplikasi yang baik dan mudah sekali digunakan ayoo segera download cuit untuk mendapatkan cerita lainnya",
    author: "Arsyifah Morkati",
    username: "@arsyifahmor",
  },
  {
    id: 2,
    src: "/home-experience-avatar-2.png",
    alt: "Home Experience Avatar 2",
    content:
      "Aplikasi debest banget yang beda dari yang lain harus banget diapresiasi.",
    author: "Agung Birganjaya",
    username: "@agungbirgan",
  },
  {
    id: 3,
    src: "/home-experience-avatar-3.png",
    alt: "Home Experience Avatar 3",
    content:
      "Yook semangat yook let’s go indonesia terbang tinggi untuk aplikasi ini maju terus",
    author: "Bernada Putri",
    username: "@bernadaput",
  },
  {
    id: 4,
    src: "/bird-illustration-1.png",
    alt: "Home Experience Avatar 1",
    content:
      "Aplikasi yang baik dan mudah sekali digunakan ayoo segera download cuit untuk mendapatkan cerita lainnya",
    author: "Arsyifah Morkati",
    username: "@arsyifahmor",
  },
  {
    id: 5,
    src: "/bird-illustration-2.png",
    alt: "Home Experience Avatar 2",
    content:
      "Aplikasi debest banget yang beda dari yang lain harus banget diapresiasi.",
    author: "Agung Birganjaya",
    username: "@agungbirgan",
  },
  {
    id: 6,
    src: "/bird-illustration-3.png",
    alt: "Home Experience Avatar 3",
    content:
      "Yook semangat yook let’s go indonesia terbang tinggi untuk aplikasi ini maju terus",
    author: "Bernada Putri",
    username: "@bernadaput",
  },
];
//--------------------------------------------------------------------------------------------------------------//
const { $gsap } = useNuxtApp();

onMounted(() => {
  //--------------------------------------------------------------------------------------------------------------//
  // Hero Animation
  //--------------------------------------------------------------------------------------------------------------//
  const hero = document.querySelectorAll("#home-hero .home-hero-item");

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

  //--------------------------------------------------------------------------------------------------------------//
  // Section Animation
  //--------------------------------------------------------------------------------------------------------------//

  // Section - Image
  const all_section_image = document.querySelectorAll("img.home-section-image");

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
          trigger: `section.home-section.home-section-${index + 1}`,
          start: "bottom bottom",
        },
      },
    );
  });

  // Section - Text Heading
  const all_section_text_heading = document.querySelectorAll(
    ".home-section-text-heading",
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
          trigger: `section.home-section.home-section-${index + 1}`,
          start: "bottom bottom",
        },
      },
    );
  });

  // Section - Text Content
  const all_section_text_content = document.querySelectorAll(
    ".home-section-text-content",
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
        delay: 0.25,
        ease: "power2.easeOut",
        scrollTrigger: {
          trigger: `section.home-section.home-section-${index + 1}`,
          start: "bottom bottom",
        },
      },
    );
  });
  //--------------------------------------------------------------------------------------------------------------//

  //--------------------------------------------------------------------------------------------------------------//
  // Section Why Us
  //--------------------------------------------------------------------------------------------------------------//
  const why_us_card = document.querySelectorAll(".home-why-us-card");

  why_us_card.forEach((card, index) => {
    $gsap.fromTo(
      card,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power2.easeIn",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: `.home-why-us`,
          start: "center bottom",
        },
      },
    );
  });
  //--------------------------------------------------------------------------------------------------------------//

  //--------------------------------------------------------------------------------------------------------------//
  // Section Why Us
  //--------------------------------------------------------------------------------------------------------------//

  // Section - Text Heading
  const experience_text = document.querySelectorAll(".home-experience-text");

  experience_text.forEach((text, index) => {
    $gsap.fromTo(
      text,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2",
        stagger: index * 0.05,
        scrollTrigger: {
          trigger: `#home-experience`,
          start: "top center",
        },
      },
    );
  });

  // Section - Card
  const experience_card = document.querySelectorAll(".home-experience-card");

  experience_card.forEach((card, index) => {
    $gsap.fromTo(
      card,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2",
        delay: 0.5 + index * 0.25,
        scrollTrigger: {
          trigger: `#home-experience`,
          start: "top center",
        },
      },
    );
  });

  //--------------------------------------------------------------------------------------------------------------//
  // Section Join Now
  //--------------------------------------------------------------------------------------------------------------//

  const join_now_content = document.querySelectorAll(".home-join-now-content");

  join_now_content.forEach((item, index) => {
    $gsap.fromTo(
      item,
      {
        y: 80,
        opacity: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2",
        delay: index * 0.25,
        scrollTrigger: {
          trigger: `.home-join-now`,
          start: "center bottom",
        },
      },
    );
  });
});
//--------------------------------------------------------------------------------------------------------------//
</script>

<template>
  <div
    v-if="show_loader"
    id="loader"
    class="fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-white"
  >
    <NuxtImg class="h-auto w-24 animate-pulse lg:-mt-20" src="/cuit-logo.png" />
  </div>

  <div v-else>
    <!-- ------------------------------------ START - Hero ------------------------------------ -->
    <section
      class="relative mt-14 overflow-hidden pb-4 lg:mt-20 lg:h-[calc(100vh_-_48px)] lg:pb-8"
    >
      <div class="relative z-10 h-full w-full">
        <div
          class="absolute inset-0 h-full w-full bg-gradient-to-tl from-white/0 via-white/50 to-white/0"
        />

        <NuxtImg
          class="relative z-0 hidden h-full w-full object-cover object-center md:hidden lg:block"
          src="/hero-bg-1.png"
          alt="Hero Background 1"
          preload
        />
      </div>

      <NuxtImg
        class="hidden h-auto w-full object-contain md:block lg:hidden"
        src="/hero-bg-1-tablet.png"
        alt="Hero Background 1 Tablet"
        preload
      />

      <NuxtImg
        class="block h-auto w-full object-contain md:hidden lg:hidden"
        src="/hero-bg-1-mobile.png"
        alt="Hero Background 1 Mobile"
        preload
      />

      <div
        id="home-hero"
        class="container absolute left-1/2 top-1/2 z-10 mx-auto -mt-0 flex h-full w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 px-6 md:px-16 lg:-mt-20 lg:gap-6 lg:px-0"
      >
        <div class="overflow-hidden">
          <h1
            class="home-hero-item text-center text-2xl font-extrabold leading-tight md:text-3xl lg:text-4xl lg:font-extrabold lg:leading-tight xl:text-5xl xl:font-extrabold xl:leading-tight"
          >
            Sambut Era Baru Media Sosial dengan CUIT
          </h1>
        </div>

        <div class="overflow-hidden">
          <p
            class="home-hero-item text-center text-base font-semibold leading-normal text-grey-smooth md:text-lg lg:text-xl xl:text-2xl"
          >
            Temukan komunitasmu, bagikan sudut pandangmu, dan jadilah bagian
            dari era baru sosial media di Indonesia!
          </p>
        </div>

        <section
          class="flex flex-row items-center justify-center gap-4 overflow-hidden"
        >
          <NuxtLink href="/" class="home-hero-item">
            <NuxtImg
              class="h-auto w-28 md:w-32 lg:w-40 xl:w-44"
              src="/download-google-play.png"
              alt="Download Google Play"
            />
          </NuxtLink>

          <NuxtLink href="/" class="home-hero-item">
            <NuxtImg
              class="h-auto w-28 md:w-32 lg:w-40 xl:w-44"
              src="/download-app-store.png"
              alt="Download App Store"
            />
          </NuxtLink>
        </section>
      </div>
    </section>
    <!-- ------------------------------------ END - Hero ------------------------------------ -->

    <!-- ------------------------------------ START - Section ------------------------------------ -->
    <section
      v-for="data in home_sections"
      class="relative py-4 lg:py-8"
      :class="[
        `home-section home-section-${data.id}`,
        data.id === 2 || data.id === 4 ? 'bg-grey-footer' : 'bg-white',
      ]"
    >
      <div
        class="container mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between gap-8 px-6 py-6 md:px-16 lg:gap-0 lg:px-20 lg:py-16 2xl:px-10"
        :class="[
          data.direction === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse',
        ]"
      >
        <figure class="basis-1/2 overflow-hidden">
          <NuxtImg
            :class="`home-section-image home-section-image-${data.id}`"
            class="h-auto w-full object-contain"
            :src="data.src"
            :alt="data.alt"
          />
        </figure>

        <section class="basis-1/2 space-y-4">
          <div class="overflow-hidden">
            <h3
              class="home-section-text-heading text-xl font-extrabold leading-snug lg:text-3xl lg:font-extrabold xl:text-4xl xl:font-extrabold"
            >
              {{ data.title }}
            </h3>
          </div>

          <div class="overflow-hidden">
            <p
              class="home-section-text-content text-base text-grey-smooth xl:text-lg"
            >
              {{ data.content }}
            </p>
          </div>
        </section>
      </div>
    </section>
    <!-- ------------------------------------ END - Section ------------------------------------ -->

    <!-- ------------------------------------ START - Why Choose Us ------------------------------------ -->
    <section class="home-why-us relative py-4 lg:py-8">
      <div
        class="container mx-auto w-full max-w-screen-xl px-6 py-6 md:px-16 lg:px-20 lg:py-16 2xl:px-10"
      >
        <h3
          class="mb-8 text-center text-xl font-extrabold md:text-2xl lg:mb-12 lg:text-4xl lg:font-extrabold xl:mb-16 xl:font-extrabold"
        >
          Mengapa Cuit?
        </h3>

        <div
          class="hidden flex-col items-start gap-6 xl:flex xl:flex-row xl:gap-8"
        >
          <figure
            v-for="data in choose_sections"
            class="home-why-us-card relative md:basis-1/2 xl:basis-1/4"
          >
            <NuxtImg
              v-if="data.illustration_src"
              class="absolute -z-0 hidden h-auto w-full lg:block"
              :class="{ '-top-28': data.id === 1, '-top-36': data.id === 4 }"
              :src="data.illustration_src"
              :alt="data.illustration_alt"
            />

            <div
              class="relative flex flex-col flex-wrap items-center rounded-xl border border-grey-barrier bg-white p-6 lg:min-h-[442px] xl:min-h-[480px] 2xl:min-h-[440px]"
            >
              <component
                :is="data.icon"
                class="mb-5 h-16 w-16 text-grey-secondary-5 lg:mb-5 lg:h-16 lg:w-16 xl:mb-10 xl:h-20 xl:w-20"
              />

              <h5
                class="mb-4 text-lg font-extrabold text-grey-concencrated lg:text-xl xl:text-2xl"
              >
                {{ data.title }}
              </h5>

              <p class="text-center text-base text-grey-smooth">
                {{ data.content }}
              </p>
            </div>
          </figure>
        </div>

        <ClientOnly>
          <Carousel
            class="block xl:hidden"
            :transition="500"
            :breakpoints="{
              300: {
                itemsToShow: 1,
                snapAlign: 'center',
              },
              768: {
                itemsToShow: 2,
                snapAlign: 'center',
              },
              1024: {
                itemsToShow: 2,
                snapAlign: 'center',
              },
            }"
          >
            <Slide
              v-for="data in choose_sections"
              :key="data.id"
              class="home-experience-card w-full first:pl-0 last:pr-0"
            >
              <figure class="home-why-us-card relative">
                <div
                  class="relative flex min-h-[322px] flex-col flex-wrap items-center rounded-xl border border-grey-barrier bg-white p-6 md:min-h-[370px]"
                >
                  <component
                    :is="data.icon"
                    class="mb-5 h-16 w-16 text-grey-secondary-5 lg:mb-5 lg:h-16 lg:w-16 xl:mb-10 xl:h-20 xl:w-20"
                  />

                  <h5
                    class="mb-4 text-lg font-extrabold text-grey-concencrated lg:text-xl lg:font-extrabold xl:text-2xl xl:font-extrabold"
                  >
                    {{ data.title }}
                  </h5>

                  <p class="text-center text-base text-grey-smooth">
                    {{ data.content }}
                  </p>
                </div>
              </figure>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </ClientOnly>
      </div>
    </section>
    <!-- ------------------------------------ END - Why Choose Us ------------------------------------ -->

    <!-- ------------------------------------ START - Experience ------------------------------------ -->
    <section
      id="home-experience"
      class="relative my-4 bg-grey-footer py-6 lg:my-8 lg:py-16"
    >
      <div
        class="container mx-auto w-full max-w-screen-xl px-6 py-8 md:px-16 lg:px-20 lg:py-16 2xl:px-10"
      >
        <nav class="mb-8 space-y-2 md:mb-16 lg:space-y-4">
          <div class="overflow-hidden">
            <h3
              class="home-experience-text text-center text-xl font-extrabold md:text-2xl lg:text-3xl lg:font-extrabold xl:text-4xl xl:font-extrabold"
            >
              Apa yang Pengguna Cuit Rasakan?
            </h3>
          </div>

          <div class="overflow-hidden">
            <p
              class="home-experience-text text-center text-base font-medium text-grey-smooth lg:text-lg"
            >
              Curahan hati para pengguna Cuit
            </p>
          </div>
        </nav>

        <ClientOnly>
          <Carousel
            :transition="500"
            :breakpoints="{
              300: {
                itemsToShow: 1,
                snapAlign: 'start',
              },
              768: {
                itemsToShow: 2,
                snapAlign: 'start',
              },
              1024: {
                itemsToShow: 3,
                snapAlign: 'start',
              },
              1280: {
                itemsToShow: 3,
                snapAlign: 'start',
              },
            }"
          >
            <Slide
              v-for="data in experience_sections"
              :key="data.id"
              class="home-experience-card w-full first:pl-0 last:pr-0"
            >
              <figure
                class="flex min-h-[346px] w-full flex-col items-center rounded-xl border border-grey-barrier bg-white p-6"
              >
                <Dialog2LineIcon
                  class="mb-4 h-6 w-6 self-start text-grey-smooth"
                />

                <p class="min-h-[120px] text-center text-grey-black">
                  {{ data.content }}
                </p>

                <NuxtImg
                  class="mb-4 h-20 w-20 rounded-full"
                  :src="data.src"
                  :alt="data.alt"
                />

                <h5 class="text-base font-bold text-grey-concencrated">
                  {{ data.author }}
                </h5>

                <p class="text-base text-baseline-primary">
                  {{ data.username }}
                </p>
              </figure>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </ClientOnly>
      </div>
    </section>
    <!-- ------------------------------------ END - Experience ------------------------------------ -->

    <!-- ------------------------------------ END - Join Now ------------------------------------ -->
    <section class="home-join-now relative my-4 py-8 lg:my-8 lg:py-16">
      <div
        class="container mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center px-6 md:px-16 lg:px-20 2xl:px-10"
      >
        <div class="overflow-hidden">
          <NuxtImg
            alt="Bird Illustration 3"
            src="/bird-illustration-3.png"
            class="home-join-now-content h-36 w-36 object-contain lg:h-48 lg:w-48 xl:h-56 xl:w-56"
          />
        </div>

        <div class="overflow-hidden">
          <h3
            class="home-join-now-content my-4 text-center text-xl font-extrabold text-grey-concencrated lg:my-8 lg:text-3xl lg:font-extrabold xl:text-4xl xl:font-extrabold"
          >
            Apa Yang Anda Tunggu? Bergabunglah Sekarang!
          </h3>
        </div>

        <div class="overflow-hidden">
          <p
            class="home-join-now-content mx-auto max-w-3xl text-center text-base text-grey-smooth lg:text-lg"
          >
            Tidak perlu menunggu lagi. Jadilah bagian dari komunitas terbesar di
            Indonesia. Daftarkan diri Anda, temukan teman-teman baru, dan
            bagikan minat Anda bersama Cuit. Mari bersama-sama menciptakan
            pengalaman media sosial yang lebih bermakna!
          </p>
        </div>
      </div>
    </section>
    <!-- ------------------------------------ END - Join Now ------------------------------------ -->
  </div>
</template>

<style>
.swiper {
  @apply overflow-visible;
}

.swiper-wrapper {
  @apply overflow-x-hidden;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  @apply -bottom-8;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply bg-baseline-primary;
}

/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.home-why-us .carousel__pagination {
  @apply !mt-8 gap-0.5;
}

#home-experience .carousel__pagination {
  @apply mt-16 gap-0.5;
}
.carousel__pagination-button {
  @apply after:h-2 after:w-2 after:rounded-full;
}

.carousel__pagination-button {
  @apply after:bg-grey-secondary-5 after:hover:bg-baseline-primary/50;
}

.carousel__pagination-button--active {
  @apply after:bg-baseline-primary;
}

.carousel__slide {
  @apply md:px-3 lg:px-3 xl:px-4;
}
</style>
