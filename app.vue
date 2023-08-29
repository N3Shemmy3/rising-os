<template>
  <ClientOnly>
    <div class="
        w-full
        h-screen
        select-none text-colorOnBackground">
      <div
        id="bg-imge"
        class="z-[-2] h-full"
      >
        <img
          src="/svg/bg.svg"
          :class="{ scalebg: isHovering }"
          class="fixed h-full w-screen object-cover transition-all duration-700 opacity-40"
        />
      </div>
      <div id="menu-background-pattern"></div>
      <div
        id="content"
        class="z-[0] absolute w-full top-0 bottom-0"
      >
        <div class="
            mx-auto
            max-w-screen-2xl
            ">
          <Navbar />
          <BottomDrawer />
        </div>
        <div class="h-screen p-4 sm:px-6 md:px-14 ">
          <div
            id="content"
            class="select-none noSelect  flex flex-col "
          >
            <NuxtPage />
          </div>

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
  opacity: .95;
  transform: scale(1.5);
}
</style>

