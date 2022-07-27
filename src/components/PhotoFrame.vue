<template>
  <v-img :src="item.src" height="100vh" transition="fade-transition" class="align-end">
    <v-card-text class="clock text-center" :class="item.color+'--text'">
      {{ clock.hour }}:{{ ('00'+clock.minute).slice(-2) }}
    </v-card-text>
  </v-img>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { ClockKey } from '@/composables/clock'
import photos from '@/configs/photos'
import "@fontsource/nanum-pen-script"

const clock = inject(ClockKey)
if (!clock) throw new Error(`${ClockKey} is not provided.`)

const item = computed(() => {
  const item = photos[clock.minute]
  if (!item) return photos[0]
  return {
    src: require(`@/assets/${item.src}`),
    color: item.color ? item.color : 'white'
  }
})
</script>

<style scoped>
.clock {
  font-family: "Nanum Pen Script";
  font-size: 30vw;
  line-height: 30vw;
}
</style>