<template>
  <v-sheet class="board blue-grey darken-4 text-center">
		<div class="face white--text">
			{{ face }}
		</div>
	</v-sheet>
</template>

<script setup lang="ts">
import { useNow, useDateFormat } from '@vueuse/core'
import "@fontsource/nanum-pen-script"

const face = useDateFormat(useNow(), 'H:mm')
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