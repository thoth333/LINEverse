<template>
	<div class="min-h-screen w-full bg-[#8cabd8] dark:bg-[#1a1a1a] relative">
		<div class="absolute inset-0 max-w-lg mx-auto shadow px-2 flex flex-col ">
			<!-- ヘッダー -->
			<div class="flex items-center justify-between h-13 px-0.5">
				<!-- 左端: ChevronIcon -->
				<div class="flex items-center">
					<ChevronIcon
						size="45"
					/>
					<span class="text-black dark:text-white text-lg font-bold truncate mt-0.5">{{ userName }}</span>
				</div>
				<!-- 右端: MenuIcon, CallIcon, SearchIcon -->
				<div class="flex items-center space-x-4">
					<SearchIcon size="22" />
					<CallIcon size="22" />
					<MenuIcon
						size="20"
						class="ml-1 mr-2"
					/>
				</div>
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
				class="flex-1 overflow-y-auto space-y-3 mb-12 pt-3"
			>
				<div
					v-for="(msg, index) in messages"
					:key="index"
				>
					<!-- メッセージ本体 -->
					<template v-if="msg.type === 'msg'">
						<div
							:class="msg.user === 'me'
								? 'flex flex-row-reverse items-end'
								: 'flex items-start'"
						>
							<MessageIcon
								v-show="msg.user !== 'me'"
								class="inline-block align-top pr-1.5 cursor-pointer"
								:icon="icon"
								@click="onIconClick"
							/>
							<div
								:class="msg.user === 'me' ? 'bg-[#a4e59a] text-black' : 'bg-white text-black dark:bg-[#2a2a2a] dark:text-white'"
								class="inline-block align-top px-4 py-2 rounded-2xl max-w-[70%] text-lg break-words whitespace-pre-line"
							>
								{{ msg.text }}
							</div>
							<div
								v-if="msg.user === 'me'"
								class="inline-block self-end text-xs text-right mr-1.5 mb-1 text-[#414e61] dark:text-[#797979]"
								style="min-width: 40px;"
							>
								既読<br>{{ msg.time }}
							</div>
							<div
								v-else
								class="inline-block self-end text-xs ml-1.5 mb-1 text-[#414e61] dark:text-[#797979]"
								style="min-width: 40px;"
							>
								{{ msg.time }}
							</div>
						</div>
					</template>
					<!-- 日付ラベル -->
					<template v-else-if="msg.type === 'date'">
						<div class="flex justify-center my-2">
							<span class="bg-[#7792b6] dark:bg-[#161616] bg-opacity-60 text-white text-xs rounded-xl px-4 py-1">
								{{ msg.date }}
							</span>
						</div>
					</template>
				</div>
				<div ref="bottom" />
			</div>
			<!-- 入力エリア -->
			<div
				class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg z-30 flex items-center px-2 py-2 space-x-2 bg-white dark:bg-[#111111]"
			>
				<AddIcon
					size="30"
					class="ml-1"
				/>
				<CameraIcon size="30" />
				<PhotoIcon size="30" />
				<input
					ref="txtInput"
					v-model="newMessage"
					type="text"
					class="flex-1 bg-[#F5F5F5] dark:bg-[#1f1f1f] rounded-full border border-[#EEEEEE] dark:border-[#282828] min-w-8 ml-2 px-4 py-1 outline-none text-md"
					:placeholder="''"
					@keydown.enter="sendMessage"
				>
				<MicIcon size="30" />
			</div>

			<!-- トーク履歴読込ボタン: 画面中央配置＆messagesが空のときのみ表示 -->
			<input
				ref="txtInput"
				type="file"
				accept=".txt"
				class="hidden"
				@change="onFileChange"
			>
			<button
				v-if="messages.length === 0"
				class="whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-[#a4e59a] rounded cursor-pointer text-xl shadow-lg text-black dark:text-black"
				style="z-index: 20;"
				@click="onTxtClick"
			>
				トーク履歴読込
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const messages = ref([]);
const userName = ref('あなた'); // 画面上部の名前
const newMessage = ref('');
const chatBox = ref(null);
const icon = ref('/img/default-icon.png'); // デフォルトアイコン画像
const fileInput = ref(null);
const txtInput = ref(null);
const bottom = ref(null);

const sendMessage = async () => {
	const text = newMessage.value.trim();
	if (!text) return;

	// 現在時刻を「HH:mm」形式で取得
	const now = new Date();
	const hh = now.getHours().toString().padStart(2, '0');
	const mm = now.getMinutes().toString().padStart(2, '0');
	const time = `${hh}:${mm}`;

	messages.value.push({
		type: 'msg',
		user: 'other',
		text,
		time,
	});

	newMessage.value = '';

	await nextTick();
	if (chatBox.value) {
		chatBox.value.scrollTop = chatBox.value.scrollHeight;
	}
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

const onIconClick = () => {
	fileInput.value.click();
};

const onTxtClick = () => {
	txtInput.value.click();
};

const onFileChange = (e) => {
	const file = e.target.files[0];
	if (!file) return;
	const reader = new FileReader();
	reader.onload = (ev) => {
		const text = ev.target.result;
		parseLineTxt(text);
	};
	reader.readAsText(file, 'utf-8');
};

function parseLineTxt(text) {
	const lines = text.split('\n');

	// 1行目から「○○とのトーク履歴」の○○部分をaiteNameにセット
	const firstLine = lines[0].trim();
	const nameMatch = firstLine.match(/\[LINE\]\s*(.+?)とのトーク履歴/);
	let aiteName = '';
	if (nameMatch) {
		aiteName = nameMatch[1];
	}

	const msgs = [];
	let currentMsg = null;

	for (let i = 0; i < lines.length; i++) {
		const l = lines[i].trim();

		// 日付行（例: 2025/3/27(木)）
		const dateMatch = l.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})\((.)\)$/);
		if (dateMatch) {
			if (currentMsg) msgs.push(currentMsg);
			const y = dateMatch[1], m = dateMatch[2], d = dateMatch[3], w = dateMatch[4];
			msgs.push({
				type: 'date',
				date: `${y}年${m}月${d}日(${w})`,
			});
			currentMsg = null;
			continue;
		}

		// メッセージ行（例: 17:41	と	本文）
		const msgMatch = l.match(/^(\d{1,2}:\d{2})\t([^\t]+)\t(.*)$/);
		if (msgMatch) {
			if (currentMsg) msgs.push(currentMsg);
			currentMsg = {
				type: 'msg',
				time: msgMatch[1],
				user: msgMatch[2] === aiteName ? 'me' : 'other',
				// me は、緑色のメッセージ。つまり、本来の個チャの相手。（"あなた"は other）
				rawUser: msgMatch[2],
				text: msgMatch[3],
			};
		}
		else if (currentMsg) {
			currentMsg.text += '\n' + l;
		}
	}
	if (currentMsg) msgs.push(currentMsg);

	const firstOther = msgs.find(m => m.type === 'msg' && m.rawUser && m.rawUser !== aiteName);
	if (firstOther) userName.value = firstOther.rawUser;

	messages.value = msgs;
	nextTick(() => {
		bottom.value?.scrollIntoView({ behavior: 'smooth' });
	});
}
</script>
