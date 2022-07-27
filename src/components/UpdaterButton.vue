<template>
  <v-snackbar v-model="snackbar" color="info" outlined timeout=10000>
    New content is available.
    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="update">
        Update
      </v-btn>
      <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useEventListener } from '@vueuse/core'

const snackbar = ref<boolean>(false)
useEventListener(document, 'serviceWorkerUpdated', () => {
  snackbar.value = true
})
const update = async () => {
  const registration = await navigator.serviceWorker.getRegistration()
  if (registration) await registration.unregister()
  location.reload()
}
</script>