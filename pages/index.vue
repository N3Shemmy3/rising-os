<template>
    <div class="pt-6 md:pt-12 space-y-6 w-full">
        <div class="flex">
            <div class="flex-col flex flex-grow space-y-4">
                <div
                    id="parent"
                    class="show-on-md w-fit flex-grow"
                >

                    <div
                        class="flex-1 flex w-fit"
                        v-for="item in navItems"
                    >
                        <NuxtLink
                            class="majorMonoDisplay "
                            :to="item.url"
                        >{{ item.title }}</NuxtLink>
                    </div>

                </div>
                <div class="md:hidden">
                    <h6 class="text-3xl md:text-[45px]">We are <span class="text-colorAccent">rising OS</span> !</h6>
                    <h6 class="italic font-sans text-xl md:text-[25px]">The os you didnt know <br> you needed </h6>
                </div>

                <div class="flex flex-col space-y-4">
                    <button
                        v-Ripple
                        class="
                            w-40 px-4 py-2 
                            rounded-full
                             bg-colorSurface 
                            bg-opacity-50
                            hover:bg-opacity-100
                            "
                    >
                        <Icon
                            class="rotate-90 pointer-events-none"
                            name="ic:baseline-arrow-forward-ios"
                        />
                    </button>
                    <div class="flex flex-grow space-x-4">
                        <div
                            v-Ripple
                            v-for="(item, n) in menuIcons"
                            :key="n"
                            class="
                                cursor-pointer
                                rounded-full
                                text-colorOnSurface
                                bg-colorSurface
                                bg-opacity-50
                                hover:bg-opacity-100
                                "
                        >
                            <img
                                class="pointer-events-none"
                                :src="item.icon"
                            />
                        </div>


                    </div>
                    <img
                        class="md:hidden place-self-end"
                        src="/png/pixle5.png"
                        alt=""
                    />
                </div>


            </div>
            <div class="left-0 bottom-0 self-end show-on-md space-y-2 ">
                <h6 class="text-3xl md:text-[45px]">We are <span class="text-colorAccent">rising OS</span> !</h6>
                <h6 class="italic font-sans text-xl md:text-[25px]">The os you didnt know <br> you needed </h6>


                <img
                    class="w-[25rem]"
                    src="/png/pixle5.png"
                    alt=""
                />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const menuIcons = ref([
    {
        "icon": "/svg/forum.svg",
        "url": ""
    }, {
        "icon": "/svg/github.svg",
        "url": ""
    }, {
        "icon": "/svg/channel.svg",
        "url": ""
    }, {
        "icon": "/svg/x.svg",
        "url": ""
    },
])

var navItems = ref([
    {
        "title": "home",
        "url": "#",
    }, {
        "title": "team",
        "url": "#",
    }, {
        "title": "about",
        "url": "#",
    }, {
        "title": "download",
        "url": "#",
    },
])
</script>

<style scoped>
.majorMonoDisplay {
    font-family: 'Major Mono Display';
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 60px;
    color: white;
    font-size: clamp(3rem, 4vw, 4rem);
    font-family: 'Major Mono Display', monospace;

    display: block;
    text-decoration: none;
    padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
    transition: opacity 400ms ease;
}

#parent:hover>div {
    opacity: 0.6;
    transition: ease-in-out;
    transition-duration: .2s;
}

/* Fade ALL OUT on parent hover */
#parent>div:hover {
    transition: ease-in-out;
    transition-duration: .2s;
    opacity: 1;
    font-weight: bolder;
}

/* Fade in hovered one */

/* For mobile phones: */
@media (max-width: 576px) {
    .show-on-md {
        display: none !important;
    }

}

/* For tablets */
@media (max-width: 768px) {
    .show-on-md {
        display: none !important;
    }


}
</style>

