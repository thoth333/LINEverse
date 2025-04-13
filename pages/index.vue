<template>
	<UContainer class="py-10">
		<div class="max-w-lg mx-auto border rounded-2xl shadow p-4 flex flex-col h-[600px] bg-white">
			<!-- チャット履歴 -->
			<div
				ref="chatBox"
				class="flex-1 overflow-y-auto space-y-3 mb-4"
			>
				<div
					v-for="(msg, index) in messages"
					:key="index"
					:class="msg.user === 'me' ? 'text-right' : 'text-left'"
				>
					<div
						:class="msg.user === 'me' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 text-black mr-auto'"
						class="inline-block px-4 py-2 rounded-xl max-w-[70%]"
					>
						{{ msg.text }}
					</div>
				</div>
			</div>

			<!-- 入力欄 -->
			<div class="flex gap-2">
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
	</UContainer>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const messages = ref([
	{ user: 'other', text: 'こんにちは！！' },
	{ user: 'me', text: 'やっほー！' },
]);
const newMessage = ref('');
const chatBox = ref(null);

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
