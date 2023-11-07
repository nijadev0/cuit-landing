<template>
  <div class="container mx-auto mt-20 max-w-screen-xl px-10 py-20">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slidesPerView="3"
      :spaceBetween="20"
      :effect="'creative'"
      :loop="true"
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
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <div
          class="flex h-96 items-center justify-center border bg-red-50 text-3xl"
        >
          <strong>{{ slide }}</strong>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
