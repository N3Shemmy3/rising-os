<template>
    <div
        v-Ripple
        class="
            absolute bottom-0 right-0
            m-4 z-50
            h-12 w-12
            rounded-full bg-colorAccent
            flex cursor-pointer
            hover:opacity-80
            "
    >
        <slot />
    </div>
</template>
<script setup lang="ts">
const props = defineProps([""])
</script>
