<script setup>
//----------------------------------------------------------------------------//
const { $gsap } = useNuxtApp();

let show_loader = ref(true);

onMounted(() => {
  const loader = document.querySelector("#loader");

  $gsap.fromTo(
    loader,
    {
      y: `-${window.screen.height / 8}`,
    },
    { y: 0, duration: 1 },
  );

  $gsap.fromTo(
    loader,
    {
      y: 0,
    },
    { y: `${window.screen.height / 8}`, delay: 1, duration: 1 },
  );

  setTimeout(() => {
    show_loader.value = false;
  }, 3000);
});
//----------------------------------------------------------------------------//
</script>

<template>
  <div
    v-if="show_loader"
    id="loader"
    class="fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-white"
  >
    <NuxtImg class="h-auto w-24 animate-pulse lg:-mt-20" src="/cuit-logo.png" />
  </div>
</template>
