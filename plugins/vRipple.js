const handleRipple = (element, binding, ev) => {
	const rippleElement = document.createElement("span");
	let currentDiameter = 1;
	let currentOpacity = 0.65;
	let animationHandler = setInterval(animateRippleSpread, 6);
	applyRippleStyle();

	function applyRippleStyle() {
		const elementCoordinates = element.getBoundingClientRect();
		const offsetY = ev.clientY - elementCoordinates.y;
		const offsetX = ev.clientX - elementCoordinates.x;

		rippleElement.style.position = "absolute";
		rippleElement.style.height = "5px";
		rippleElement.style.width = "5px";
		rippleElement.style.borderRadius = "100%";
		rippleElement.style.backgroundColor = "#FF7373";
		rippleElement.style.left = `${offsetX}px`;
		rippleElement.style.top = `${offsetY}px`;
		ev.target.appendChild(rippleElement);
	}

	function animateRippleSpread() {
		const maximalDiameter = +binding.value || 50;
		if (currentDiameter <= maximalDiameter) {
			currentDiameter++;
			currentOpacity -= 0.65 / maximalDiameter;
			rippleElement.style.transform = `scale(${currentDiameter})`;
			rippleElement.style.opacity = `${currentOpacity}`;
		} else {
			rippleElement.remove();
			clearInterval(animationHandler);
		}
	}
};

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive("Ripple", {
		mounted: (el, binding) => {
			el.style.position = "relative";
			el.style.overflow = "hidden";
			el.addEventListener("click", (ev) => handleRipple(el, binding, ev));
		},

		getSSRProps(binding, vnode) {
			// you can provide SSR-specific props here
			return {};
		},
	});
});
