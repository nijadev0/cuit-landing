<script setup>
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
    src: "https://picsum.photos/200?random=1",
    alt: "Home Experience Avatar 2",
    content:
      "Aplikasi debest banget yang beda dari yang lain harus banget diapresiasi.",
    author: "Agung Birganjaya",
    username: "@agungbirgan",
  },
  {
    id: 5,
    src: "https://picsum.photos/200?random=2",
    alt: "Home Experience Avatar 1",
    content:
      "Aplikasi yang baik dan mudah sekali digunakan ayoo segera download cuit untuk mendapatkan cerita lainnya",
    author: "Arsyifah Morkati",
    username: "@arsyifahmor",
  },
  {
    id: 6,
    src: "https://picsum.photos/200?random=3",
    alt: "Home Experience Avatar 3",
    content:
      "Yook semangat yook let’s go indonesia terbang tinggi untuk aplikasi ini maju terus",
    author: "Bernada Putri",
    username: "@bernadaput",
  },
];
</script>

<template>
  <section class="container mx-auto mt-20 max-w-screen-xl px-6 py-20 xl:px-10">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
      :pagination="true"
      :slidesPerView="1"
      v-bind:space-between="24"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creativeEffect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      :breakpoints="{
        '1024': {
          slidesPerView: 1,
          spaceBetween: 32,
        },
      }"
      class="mySwiper relative w-full"
    >
      <SwiperSlide
        class="swiper flex items-center justify-center rounded-lg border bg-white"
        v-for="slide in 10"
        :key="slide"
      >
        <div class="h-80">
          <p class="text-3xl font-bold">
            {{ slide }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
    <!-- <figure
    class="flex flex-col items-center rounded-xl border border-grey-barrier bg-white p-6"
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
  </figure> -->
  </section>
</template>

<style>
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply bg-baseline-primary;
}
</style>
