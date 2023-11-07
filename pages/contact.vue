<script setup>
//--------------------------------------------------------------------------------------------------------------//
useHead({
  title: "Cuit - Kontak Kami",
});
//--------------------------------------------------------------------------------------------------------------//
</script>

<template>
  <!-- ------------------------------------ START - Hero ------------------------------------ -->
  <section class="relative mt-14 pb-0 lg:mt-20 lg:pb-8">
    <NuxtImg
      class="hidden h-auto w-full object-contain lg:block"
      src="/hero-bg-3.png"
      alt="Hero Background 3"
    />

    <NuxtImg
      class="block h-auto w-full object-contain lg:hidden"
      src="/hero-bg-3-mobile.png"
      alt="Hero Background 3 Mobile"
    />
    <div
      class="container absolute left-1/2 top-1/2 z-10 mx-auto flex h-full w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 px-6 lg:top-1/3 lg:-translate-y-1/2 lg:gap-6"
    >
      <h1
        class="text-center text-2xl font-extrabold leading-tight lg:text-5xl lg:leading-tight"
      >
        Hubungi Kami
      </h1>

      <p
        class="max-w-xs text-center text-base font-semibold text-grey-smooth lg:max-w-3xl lg:text-2xl"
      >
        Punya pertanyaan, saran, atau masukan? Kami ingin mendengar pendapat
        Anda!
      </p>
    </div>
  </section>
  <!-- ------------------------------------ END - Hero ------------------------------------ -->

  <!-- ------------------------------------ START - Form ------------------------------------ -->
  <div
    class="container relative z-20 mx-auto -mt-5 flex w-full max-w-screen-xl flex-col items-center justify-center px-6 lg:-mt-96 lg:px-20 2xl:px-10"
  >
    <form
      class="w-full max-w-lg space-y-6 rounded-lg border border-grey-barrier bg-white p-6 shadow-md lg:border-0 lg:p-14 lg:shadow-2"
    >
      <div class="space-y-2">
        <label for="name" class="text-sm font-medium text-grey-smooth">
          Nama
        </label>
        <input
          id="name"
          type="text"
          placeholder="Masukkan nama Anda disini"
          class="relative w-full border-b border-neutral-400 p-4 py-3.5 outline-0 focus:border-baseline-primary lg:py-4"
        />
      </div>

      <div class="space-y-2">
        <label for="email" class="text-sm font-medium text-grey-smooth">
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="Masukkan email Anda disini"
          class="relative w-full border-b border-neutral-400 p-4 py-3.5 outline-0 focus:border-baseline-primary lg:py-4"
        />
      </div>

      <div class="space-y-2">
        <label for="phone" class="text-sm font-medium text-grey-smooth">
          No. Telepon
        </label>
        <input
          id="phone"
          type="text"
          placeholder="Masukkan no. telepon Anda disini"
          class="relative w-full border-b border-neutral-400 p-4 py-3.5 outline-0 focus:border-baseline-primary lg:py-4"
        />
      </div>

      <div class="space-y-2">
        <label for="message" class="text-sm font-medium text-grey-smooth">
          Pesan
        </label>
        <input
          id="message"
          type="text"
          placeholder="Masukkan pesan Anda disini"
          class="relative w-full border-b border-neutral-400 p-4 py-3.5 outline-0 focus:border-baseline-primary lg:py-4"
        />
      </div>

      <div class="space-y-2">
        <label for="city" class="text-sm font-medium text-grey-smooth">
          Kota
        </label>
        <input
          id="city"
          type="text"
          placeholder="Masukkan kota Anda disini"
          class="relative w-full border-b border-neutral-400 p-4 py-3.5 outline-0 focus:border-baseline-primary lg:py-4"
        />
      </div>

      <div class="pt-4">
        <button
          type="submit"
          class="transition-color w-full rounded-lg bg-baseline-primary p-2 font-bold text-white duration-300 ease-in hover:bg-baseline-primary/80"
        >
          Kirim
        </button>
      </div>
    </form>
  </div>
  <!-- ------------------------------------ END - Form ------------------------------------ -->

  <!-- ------------------------------------ END - Join Now ------------------------------------ -->
  <section class="relative my-6 mb-8 py-8 lg:my-8 lg:py-16">
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
