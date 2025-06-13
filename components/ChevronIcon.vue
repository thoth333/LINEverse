<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="#000"
		aria-hidden="true"
	>
		<!-- Icon from Material Symbols by Google -->
		<path d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z" />
	</svg>
</template>

<script setup>
defineProps({
	size: { type: [Number, String], default: 24 },
});
</script>
