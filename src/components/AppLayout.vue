<template>
  <v-app>
    <v-main>
      <PhotoFrame />
    </v-main>
    <UpdaterButton />
  </v-app>
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { ClockKey } from '@/composables/clock'
import PhotoFrame from '@/components/PhotoFrame.vue'
import UpdaterButton from '@/components/UpdaterButton.vue'

const clock = inject(ClockKey);
if (!clock) throw new Error(`${ClockKey} is not provided.`);
useIntervalFn(() => {
  clock.tick()
}, 1000)
onMounted(() => {
  clock.tick()
})
</script>