<script setup>
//--------------------------------------------------------------------------------------------------------------//
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
];
//--------------------------------------------------------------------------------------------------------------//
</script>

<template>
  <!-- ------------------------------------ START - Hero ------------------------------------ -->
  <section class="relative mt-14 pb-4 lg:mt-20 lg:pb-8">
    <NuxtImg
      class="hidden h-auto w-full object-contain lg:block"
      src="/hero-bg-1.png"
      alt="Hero Background 1"
    />

    <NuxtImg
      class="block h-auto w-full object-contain lg:hidden"
      src="/hero-bg-1-mobile.png"
      alt="Hero Background 1 Mobile"
    />

    <div
      class="container absolute left-1/2 top-1/2 z-10 mx-auto flex h-full w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 px-6 lg:top-1/3 lg:-translate-y-1/2 lg:gap-6 lg:px-20 2xl:px-10"
    >
      <h1 class="text-center text-2xl font-extrabold leading-snug lg:text-5xl">
        Sambut Era Baru Media Sosial dengan CUIT
      </h1>

      <p
        class="text-center text-base font-semibold leading-normal text-grey-smooth lg:text-2xl"
      >
        Temukan komunitasmu, bagikan sudut pandangmu, dan jadilah bagian dari
        era baru sosial media di Indonesia!
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

  <!-- ------------------------------------ START - Section ------------------------------------ -->
  <section
    v-for="data in home_sections"
    class="relative py-4 lg:py-8"
    :class="[data.id === 2 || data.id === 4 ? 'bg-grey-footer' : 'bg-white']"
  >
    <div
      class="container mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between gap-8 px-6 py-6 lg:gap-0 lg:px-20 lg:py-16 2xl:px-10"
      :class="[
        data.direction === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse',
      ]"
    >
      <figure class="basis-1/2">
        <NuxtImg
          class="h-auto w-full object-contain"
          :src="data.src"
          :alt="data.alt"
        />
      </figure>

      <section class="basis-1/2 space-y-4">
        <h3 class="text-xl font-extrabold leading-snug lg:text-4xl">
          {{ data.title }}
        </h3>

        <p class="text-base text-grey-smooth lg:text-lg">
          {{ data.content }}
        </p>
      </section>
    </div>
  </section>
  <!-- ------------------------------------ END - Section ------------------------------------ -->

  <!-- ------------------------------------ START - Why Choose Us ------------------------------------ -->
  <section class="relative py-4 lg:py-8">
    <div
      class="container mx-auto w-full max-w-screen-xl px-6 py-6 lg:px-20 lg:py-16 2xl:px-10"
    >
      <h3 class="mb-8 text-center text-xl font-extrabold lg:mb-16 lg:text-4xl">
        Mengapa Cuit?
      </h3>

      <div class="flex flex-col items-start gap-6 lg:flex-row lg:gap-8">
        <figure class="relative basis-1/4" v-for="data in choose_sections">
          <NuxtImg
            v-if="data.illustration_src"
            class="absolute -z-0 hidden h-auto w-full lg:block"
            :class="{ '-top-28': data.id === 1, '-top-36': data.id === 4 }"
            :src="data.illustration_src"
            :alt="data.illustration_alt"
          />

          <div
            class="relative flex flex-col items-center rounded-xl border border-grey-barrier bg-white p-6 lg:min-h-[432px]"
          >
            <component
              :is="data.icon"
              class="mb-5 h-16 w-16 text-grey-secondary-5 lg:mb-10 lg:h-20 lg:w-20"
            />

            <h5
              class="mb-4 text-lg font-extrabold text-grey-concencrated lg:text-2xl"
            >
              {{ data.title }}
            </h5>

            <p class="text-center text-base text-grey-smooth">
              {{ data.content }}
            </p>
          </div>
        </figure>
      </div>
    </div>
  </section>
  <!-- ------------------------------------ END - Why Choose Us ------------------------------------ -->

  <!-- ------------------------------------ START - Experience ------------------------------------ -->
  <section class="relative my-4 bg-grey-footer py-6 lg:my-8 lg:py-16">
    <div
      class="container mx-auto w-full max-w-screen-xl px-6 py-8 lg:px-20 lg:py-16 2xl:px-10"
    >
      <nav class="space-y-2 lg:space-y-4">
        <h3 class="text-center text-xl font-extrabold lg:text-4xl">
          Apa yang Pengguna Cuit Rasakan?
        </h3>
        <p
          class="text-center text-base font-medium text-grey-smooth lg:text-lg"
        >
          Curahan hati para pengguna Cuit
        </p>
      </nav>

      <div class="my-8 flex flex-col items-start gap-6 lg:flex-row lg:gap-8">
        <figure
          v-for="data in experience_sections"
          class="flex basis-1/3 flex-col items-center rounded-xl border border-grey-barrier bg-white p-6"
        >
          <Dialog2LineIcon class="mb-4 h-6 w-6 self-start text-grey-smooth" />

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
          <p class="text-base text-baseline-primary">{{ data.username }}</p>
        </figure>
      </div>

      <div class="flex flex-row items-center justify-center gap-1">
        <button
          v-for="data in 4"
          class="h-2 w-2 rounded-full bg-neutral-300 first:bg-baseline-primary"
        >
          &nbsp;
        </button>
      </div>
    </div>
  </section>
  <!-- ------------------------------------ END - Experience ------------------------------------ -->

  <!-- ------------------------------------ END - Join Now ------------------------------------ -->
  <section class="relative my-4 py-8 lg:my-8 lg:py-16">
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
