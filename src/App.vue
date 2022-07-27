<template>
  <AppLayout />
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useClock, ClockKey } from '@/composables/clock'
import AppLayout from '@/components/AppLayout.vue'

provide(ClockKey, useClock())
</script>