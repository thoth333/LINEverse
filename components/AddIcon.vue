<template>
	<div class="text-black dark:text-[#b9b9b9]">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			:width="size"
			:height="size"
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->		<path
				d="M12 20q-.213 0-.357-.144T11.5 19.5v-7h-7q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h7v-7q0-.213.144-.356T12.001 4t.356.144t.143.356v7h7q.213 0 .356.144t.144.357t-.144.356t-.356.143h-7v7q0 .213-.144.356t-.357.144"
			/>
		</svg>
	</div>
</template>

<script setup>
defineProps({
	size: { type: [Number, String], default: 24 },
});
</script>
