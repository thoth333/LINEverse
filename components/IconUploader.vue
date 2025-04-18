<template>
	<div class="flex flex-col items-center gap-4">
		<label class="cursor-pointer">
			<input
				type="file"
				accept="image/*"
				class="hidden"
				@change="onFileChange"
			>
			<div class="w-10 h-10 rounded-full border-gray-300 flex items-center justify-center hover:border-blue-400">
				<img
					:src="iconUrl || `/img/icon.png`"
					alt="Icon Preview"
					class="w-10 h-10 object-cover rounded-full"
				>
			</div>
		</label>
	</div>
</template>

<script setup>
const emit = defineEmits(['update:image']);
const iconUrl = ref(null);

const onFileChange = (e) => {
	const file = e.target.files[0];
	if (!file) return;
	else if (file.type.startsWith('image/')) {
		const url = URL.createObjectURL(file);
		iconUrl.value = url;
		emit('update:image', url);
	}
};
/* 旧ver
const onFileChange = (event) => {
	const file = event.target.files[0];
	if (file && file.type.startsWith('image/')) {
		iconUrl.value = URL.createObjectURL(file);
	}
}; */
</script>
