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
				d="M12 16.73q1.567 0 2.649-1.081T15.731 13t-1.082-2.649T12 9.269t-2.649 1.082T8.269 13t1.082 2.649T12 16.731m0-1q-1.165 0-1.948-.783T9.269 13t.783-1.948T12 10.269t1.948.783t.783 1.948t-.783 1.948t-1.948.783M4.616 20q-.691 0-1.153-.462T3 18.384V7.616q0-.691.463-1.153T4.615 6h2.958l1.85-2h5.154l1.85 2h2.958q.69 0 1.152.463T21 7.616v10.769q0 .69-.463 1.153T19.385 20zm0-1h14.769q.269 0 .442-.173t.173-.442V7.615q0-.269-.173-.442T19.385 7h-3.397l-1.844-2H9.856L8.012 7H4.615q-.269 0-.442.173T4 7.616v10.769q0 .269.173.442t.443.173M12 13"
			/>
		</svg>
	</div>
</template>

<script setup>
defineProps({
	size: { type: [Number, String], default: 24 },
});
</script>
