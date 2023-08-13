<template>
	<div
		id="Toolbar"
		class="
			fixed
			lef-0 right-0
			bottom-0 
			z-30 h-14 w-full 
			backdrop-filter   
			backdrop-blur-none
			border-b border-zinc-800 
			text-colorOnSurface
			md:hidden
			"
	>
		<div class="max-w-screen-2xl mx-auto flex px-4 py-2 space-x-4 items-center">
			<NuxtLink
				class="flex"
				to="/"
			>
				<div class="flex noSelect space-x-2 justify-center content-center">

					<img
						src="/svg/risingos.svg"
						class="
							inline h-5
							text-colorOnBackground
						"
					/>
					<div>

						<img
							class="inline h-6 m-auto"
							src="/svg/logo.svg"
						/>
					</div>
				</div>
			</NuxtLink>
			<div class="flex-grow" />
			<div class="flex space-x-1">
				<button
					@click="showDrawer()"
					class="
						flex 
						cursor-pointer 
						noSelect jsutify-center 
						h-12 w-12 rounded-full 
						bg-colorBackground
						text-colorOnBackground
						hover:bg-colorOnBackground
						hover:text-colorBackground
						"
				>
					<Icon
						class="m-auto"
						name="ic:outline-menu"
						size="24px"
					/>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
var scrollPosition = ref(0)

function showDrawer() {
	useEvent('onDrawerVisCh', true)
}
onMounted(() => {
	//	window.addEventListener('scroll', updateScroll);
})



</script>

<style scoped>
.noSelect {
	-webkit-tap-highdark-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.noSelect:focus {
	outline: none !important;
}
</style>
