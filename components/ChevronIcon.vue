<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="0x000000"
		aria-hidden="true"
	>
		<!-- Icon from Material Symbols by Google -->
		<path d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z" />
	</svg>
</template>

<script setup>
defineProps({
	size: { type: [Number, String], default: 24 },
});
</script>
