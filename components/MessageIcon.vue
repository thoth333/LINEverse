<template>
	<div class="flex flex-col items-center gap-4">
		<div class="w-10 h-10 rounded-full border-gray-300 flex items-center justify-center hover:border-blue-400">
			<img
				:src="icon || `/img/icon.png`"
				alt="Icon Preview"
				class="w-10 h-10 object-cover rounded-full"
			>
		</div>
	</div>
</template>

<script setup>
defineProps({
	icon: String,
});
</script>
