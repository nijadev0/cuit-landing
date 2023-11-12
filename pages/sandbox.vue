<script setup>
//--------------------------------------------------------------------------------------------------------------//
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
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
</script>
<template>
  <div class="container mx-auto mt-20 min-h-screen px-20 py-10">
    <h1 class="text-3xl font-semibold">Carousel Vue 3</h1>

    <ClientOnly>
      <carousel :items-to-show="3" :transition="500">
        <slide
          v-for="data in experience_sections"
          :key="data.id"
          class="px-2 first:pl-0 last:pr-0"
        >
          <figure
            class="home-experience-card flex min-h-[384px] w-1/3 min-w-[334px] flex-col items-center rounded-xl border border-grey-barrier bg-white p-6"
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
            <p class="text-base text-baseline-primary">
              {{ data.username }}
            </p>
          </figure>
        </slide>

        <template #addons>
          <pagination />
        </template>
      </carousel>
    </ClientOnly>
  </div>
</template>

<style>
.carousel__pagination {
  @apply mt-5 gap-0.5;
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
</style>
