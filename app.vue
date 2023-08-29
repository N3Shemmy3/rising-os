<template>
  <ClientOnly>
    <div class="
        w-full
        h-screen
        select-none text-colorOnBackground
        bg-[url('/png/bg.png')] bg-cover bg-fixed">

      <div class="
            mx-auto
            max-w-screen-2xl
            ">
        <Navbar />
        <BottomDrawer />
      </div>
      <div class="min-h-full p-4 sm:px-6 md:px-14 ">
        <div
          id="content"
          class="select-none noSelect  flex flex-col "
        >
          <NuxtPage />
        </div>

      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const isHovering = ref(false)

useListen('event:mouseover', (isHover: boolean) => isHovering.value = isHover)
</script>
<style scoped>
.scalebg {
  transform: scale(1.2);
}

.unscalebg {
  transform: scale(0.0);
}
</style>

