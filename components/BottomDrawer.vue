<template>
    <Transition
        name="nested"
        :duration="{ enter: 400, leave: 300 }"
    >
        <div
            v-if="isDrawerOpen"
            id="overlay"
            @click="onClose()"
            class="
            outer
            fixed
            md:hidden
            z-30
            h-full w-full 
            bg-colorBackground bg-opacity-30
            backdrop-filter backdrop-blur-sm
            "
        >
            <div
                id="menu"
                class="
                absolute bottom-0 left-0 right-0
                z-50 mx-2 p-4 
                md:max-w-sm md:left-1
                h-fit flex-grow
                rounded-t-l bg-colorBackground
                shadow-md
                space-y-3
                inner
            "
            >
                <div class="grid grid-cols-2 gap-4">
                    <div
                        v-for="n in navItems"
                        v-Ripple
                        class="
                        flex flex-col 
                        h-fit grow px-2 py-4
                        content-center
                        justify-center
                        bg-opacity-50
                        hover:bg-opacity-100
                        transition-all
                        duration-300
                        bg-colorSurface rounded-full
                        cursor-pointer
                        "
                    >
                        <Icon
                            class="pointer-events-none mx-auto"
                            :name="n.icon"
                            size="20px"
                        />
                        <h6 class="text-center">{{ n.title }}</h6>

                    </div>
                </div>
                <!--

            -->
                <h6 class="text-lg font-semibold">Socials</h6>
                <div class="flex justify-around space-x-4 content-center">

                    <button
                        v-Ripple
                        v-for="n in socials"
                        class="
                    h-10 w-10 
                    cursor-pointer 
                    rounded-full
                    hover:bg-colorSurface
                    transition-all
                    duration-300                
                    "
                    >
                        <img
                            :src="n.icon"
                            class=" m-auto pointer-events-none"
                        />
                    </button>

                    <button
                        @click="onClose()"
                        class="
                            h-14 w-14
                            rounded-full bg-colorAccent
                            flex cursor-pointer
                            hover:opacity-80"
                    >
                        <Icon
                            name="ic:outline-close"
                            size="24px"
                            class="m-auto"
                        />
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">
var isDrawerOpen = ref(false)

useListen('onDrawerVisCh', (isVisible) => {
    isDrawerOpen.value = isVisible
    //console.log('onDrawerVisCh')
})
function onClose() {
    isDrawerOpen.value = false;
    useEvent('onDrawerVisCh', isDrawerOpen.value)
}

const navItems = ref([
    {
        "icon": "heroicons:home",
        "title": "Home",
        "url": ""
    }, {
        "icon": "heroicons:user-group",
        "title": "Team",
        "url": ""
    }, {
        "icon": "heroicons:information-circle",
        "title": "About",
        "url": ""
    }, {
        "icon": "heroicons:arrow-down-tray",
        "title": "Download",
        "url": ""
    }
])
const socials = ref([
    {
        "icon": "svg/forum.svg",
        "title": "Forum",
        "url": ""
    }, {
        "icon": "svg/github.svg",
        "title": "Github",
        "url": ""
    }, {
        "icon": "svg/channel.svg",
        "title": "Channel",
        "url": ""
    }, {
        "icon": "svg/x.svg",
        "title": "X",
        "url": ""
    },
])
</script>
<style scoped>
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translatey(100%);
    opacity: 0;
}
</style>

