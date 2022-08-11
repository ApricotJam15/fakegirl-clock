<template>
  <v-sheet class="board blue-grey darken-4 text-center">
		<div class="face white--text">
			{{ store.face.value }}
		</div>
	</v-sheet>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { key } from '@/stores'
import "@fontsource/nanum-pen-script"

const store = inject(key)
if (!store) throw new Error(`${key} is not provided.`)
</script>

<style scoped>
.board {
	position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 13.5vh;
  width: 24vh;
}
.face {
  font-family: "Nanum Pen Script";
  font-size: 12vh;
  line-height: 13.5vh;
}
</style>