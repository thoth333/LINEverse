<template>
	<div class="relative inline-block">
		<img
			src="/img/bg.png"
		>
		<div class="absolute inset-0 max-w-lg mx-autoshadow pl-2 pr-4 flex flex-col ">
			<div class="bg-[#8cabd8] ml-5 w-50 h-13">
				<p class="h-[100%] pl-6 content-center text-black text-xl text-center truncate">
					友人aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</p>
			</div>
			<!-- アップロード用input（非表示） -->
			<input
				ref="fileInput"
				type="file"
				accept="image/*"
				class="hidden"
				@change="onIconChange"
			>
			<div
				ref="chatBox"
				class="flex-1 overflow-y-auto space-y-3 mb-20 pt-3"
			>
				<div
					v-for="(msg, index) in messages"
					:key="index"
					:class="msg.user === 'me' ? 'flex flex-row-reverse items-end' : 'flex items-end'"
				>
					<MessageIcon
						v-show="msg.user !== 'me'"
						class="inline-block align-middle pr-1.5 cursor-pointer"
						:icon="icon"
						@click="onIconClick"
					/>

					<!-- メッセージ本体 -->
					<div
						:class="msg.user === 'me' ? 'bg-[#a4e59a] text-black' : 'bg-white text-black'"
						class="inline-block align-bottom px-4 py-2 rounded-2xl max-w-[70%] text-xl break-words"
					>
						{{ msg.text }}
					</div>

					<!-- 右側に時刻表示 -->
					<div
						v-if="msg.user === 'me'"
						class="inline-block align-bottom text-xs text-right mr-1 mb-1 text-gray-500"
						style="min-width: 40px;"
					>
						既読<br>14:53
					</div>
					<div
						v-else
						class="inline-block align-bottom text-xs ml-1 mb-1 text-gray-500"
						style="min-width: 40px;"
					>
						14:53
					</div>
				</div>
			</div>

			<!-- 入力欄 -->
			<div
				class="fixed bottom-10 z-10"
				style="right: 47px; width: 220px; height: 53px; max-width: 400px; max-height: 500px;"
			>
				<div class="flex items-center bg-[#F5F5F5] rounded-full border-1 border-[#EEEEEE] px-4 py-3 h-10">
					<input
						v-model="newMessage"
						class="flex-1 bg-transparent outline-none text-md"
						@keydown.enter="sendMessage"
					>
				</div>
			</div>
		</div>
		<img src="/img/bgtxt.png">
	</div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const messages = ref([
	{ user: 'other', text: 'こんにちは！！' },
	{ user: 'me', text: 'やっほー！' },
]);
const newMessage = ref('');
const chatBox = ref(null);
const icon = ref('/img/default-icon.png'); // デフォルトアイコン画像
const fileInput = ref(null);

const sendMessage = async () => {
	const text = newMessage.value.trim();
	if (!text) return;

	messages.value.push({ user: 'me', text });
	newMessage.value = '';

	setTimeout(() => {
		messages.value.push({ user: 'other', text: '返信だよ: ' + text });
	}, 1000);

	await nextTick();
	chatBox.value.scrollTop = chatBox.value.scrollHeight;
};

// アイコン画像アップロード
const onIconChange = (e) => {
	const file = e.target.files[0];
	if (!file) return;
	const reader = new FileReader();
	reader.onload = (ev) => {
		icon.value = ev.target.result;
	};
	reader.readAsDataURL(file);
};

// MessageIconクリックでinputを開く
const onIconClick = () => {
	console.log(fileInput.value); // ここでnullならrefが取れていません
	fileInput.value.click();
};
</script>
