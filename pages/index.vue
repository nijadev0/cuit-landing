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
        Sambut Era Baru Media Sosial dengan CUIT
      </h1>

      <p class="text-center text-2xl leading-normal text-grey-smooth">
        Temukan komunitasmu, bagikan sudut pandangmu, dan jadilah bagian dari
        era baru sosial media di Indonesia!
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

  <!-- ------------------------------------ START - Section ------------------------------------ -->
  <section v-for="data in home_sections" class="relative py-8">
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
  <!-- ------------------------------------ END - Section ------------------------------------ -->

  <!-- ------------------------------------ START - Why Choose Us ------------------------------------ -->
  <section class="relative py-8">
    <div class="container mx-auto my-16 w-full max-w-screen-xl px-20 2xl:px-10">
      <h3 class="mb-16 text-center text-4xl font-extrabold">Mengapa Cuit?</h3>

      <div class="flex flex-row items-start gap-8">
        <figure class="relative basis-1/4" v-for="data in choose_sections">
          <img
            v-if="data.illustration_src"
            class="absolute -z-0 h-auto w-full"
            :class="{ '-top-28': data.id === 1, '-top-36': data.id === 4 }"
            :src="data.illustration_src"
            :alt="data.illustration_alt"
          />

          <div
            class="relative flex min-h-[432px] flex-col items-center rounded-xl border border-grey-barrier bg-white p-6"
          >
            <component
              :is="data.icon"
              class="mb-10 h-20 w-20 text-grey-secondary-5"
            />

            <h5 class="mb-4 text-2xl font-extrabold text-grey-concencrated">
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
  <section class="relative my-8 bg-grey-footer py-16">
    <div class="container mx-auto my-16 w-full max-w-screen-xl px-20 2xl:px-10">
      <nav class="space-y-4">
        <h3 class="text-center text-4xl font-extrabold">
          Apa yang Pengguna Cuit Rasakan?
        </h3>
        <p class="text-center text-lg font-medium text-grey-smooth">
          Curahan hati para pengguna Cuit
        </p>
      </nav>

      <div class="my-7 flex flex-row items-start gap-8">
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

          <h5 class="font-bold text-grey-concencrated">{{ data.author }}</h5>
          <p class="text-baseline-primary">{{ data.username }}</p>
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
