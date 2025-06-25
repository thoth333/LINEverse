<template>
	<div class="text-black dark:text-white">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			:width="size"
			:height="size"
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md -->		<path d="M14.41 18.16L8.75 12.5l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95z" />
		</svg>
	</div>
</template>

<script setup>
defineProps({
	size: { type: [Number, String], default: 24 },
});
</script>
