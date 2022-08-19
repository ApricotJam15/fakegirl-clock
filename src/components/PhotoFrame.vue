<template>
  <v-carousel v-model="model" @change="swiped" hide-delimiters height="100%" v-resize="onresize">
    <v-carousel-item v-for="item in items" :key="item.src"
      reverse-transition="fade-transition" transition="fade-transition">
      <v-img :src="item.src" height="100vh" :contain="!isPortrait" class="blue-grey darken-4">
        <ClockBoard :style="item.board" />
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useIntervalFn, useTimeoutFn } from '@vueuse/core'
import moment from 'moment'
import items from '@/configs/items.json'
import ClockBoard from '@/components/ClockBoard.vue'

const frame = ref<number>(0)
const model = ref<number>(0)
const isPortrait = ref<boolean>(true)
const tick = () => {
  frame.value = moment().hour() * 60 + moment().minute()
}
const play = () => {
  model.value = frame.value % items.length
}
const { pause, resume } = useIntervalFn(() => {
  tick()
}, 500)
const { start, stop } = useTimeoutFn(() => {
  resume()
  play()
}, 15000)
watch(() => frame.value, () => {
  play()
})
const onresize = () => {
  isPortrait.value = (window.screen.orientation.type === 'portrait-primary');
}
const swiped = () => {
  pause()
  stop()
  start()
}
</script>