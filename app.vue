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
        <Navbar @onClickMenuIcon="toggleDrawer()" />


        <BottomDrawer
          state="isDrawerOpen"
          @onCloseButtonClicked="toggleDrawer()"
        />
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

var isDrawerOpen = ref(false)

useListen('onDrawerVisCh', () => {
  toggleDrawer()
})
function toggleDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value
  // console.log("drawer" + isDrawerOpen.value)
}

</script>
<style scoped>
.scale-bg:hover {
  transform: scale(1.2);
}
</style>

