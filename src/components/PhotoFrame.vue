<template>
  <v-carousel v-model="model" @change="swiped" hide-delimiters height="100%">
    <v-carousel-item v-for="item in items" :key="item.src"
      reverse-transition="fade-transition" transition="fade-transition">
      <v-img :src="require(`@/assets/${item.src}`)" height="100%">
        <ClockBoard :style="item.board" />
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue'
import { useIntervalFn, useTimeoutFn } from '@vueuse/core'
import { key } from '@/stores'
import items from '@/configs/items.json'
import ClockBoard from '@/components/ClockBoard.vue'

const store = inject(key)
if (!store) throw new Error(`${key} is not provided.`)
const model = ref<number>(0)
const play = () => {
  model.value = store.frame.value % items.length
}
const { pause, resume } = useIntervalFn(() => {
  store.tick()
}, 1000)
const { start, stop } = useTimeoutFn(() => {
  resume()
  play()
}, 15000)
watch(() => store.frame.value, () => {
  play()
})
const swiped = () => {
  pause()
  stop()
  start()
}
</script>