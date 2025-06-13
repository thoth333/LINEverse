<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="#333"
		aria-hidden="true"
		style="transform: scaleX(-1);"
	>
		<!-- Icon from Material Symbols by Google -->
		<path
			d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-8.425l4-4l4 4l4-4l1 1V5H5v6.575zM5 19h14v-6.6l-1-1l-4 4l-4-4l-4 4l-1-1zm0 0v-6.6v2V5z"
		/>
	</svg>
</template>

<script setup>
defineProps({
	size: { type: [Number, String], default: 24 },
});
</script>
