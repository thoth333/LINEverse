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
			<div
				ref="chatBox"
				class="flex-1 overflow-y-auto space-y-3 mb-4 pt-3"
			>
				<div
					v-for="(msg, index) in messages"
					:key="index"
					:class="msg.user === 'me' ? 'text-right' : 'text-left'"
				>
					<MessageIcon
						v-show="msg.user !== 'me'"
						class="inline-block align-middle pr-1.5"
						:icon="icon"
					/>

					<div
						:class="msg.user === 'me' ? 'bg-[#a4e59a] text-black ml-auto' : 'bg-white text-black mr-auto'"
						class="inline-block align-middle px-4 py-2 rounded-2xl max-w-[70%] text-xl"
					>
						{{ msg.text }}
					</div>
					<div
						v-show="msg.user !== 'me'"
						class="inline-block align-middle text-xs"
					>
						既読<br>14: 53
					</div>
				</div>
			</div>

			<!-- 入力欄 -->
			<div class="flex gap-2">
				<IconUploader
					@update:image="icon = $event"
				/>
				<UInput
					v-model="newMessage"
					placeholder="メッセージを入力..."
					class="flex-1"
					@keydown.enter="sendMessage"
				/>
				<UButton
					:disabled="!newMessage.trim()"
					@click="sendMessage"
				>
					送信
				</UButton>
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
const icon = ref(null);

const sendMessage = async () => {
	const text = newMessage.value.trim();
	if (!text) return;

	messages.value.push({ user: 'me', text });
	newMessage.value = '';

	// ダミーで相手の返信を追加（1秒後）
	setTimeout(() => {
		messages.value.push({ user: 'other', text: '返信だよ: ' + text });
	}, 1000);

	await nextTick();
	chatBox.value.scrollTop = chatBox.value.scrollHeight;
};
</script>
