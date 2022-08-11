<template>
  <v-app>
    <v-main>
      <PhotoFrame />
    </v-main>
    <UpdaterButton />
  </v-app>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import store, { key } from '@/stores'
import PhotoFrame from '@/components/PhotoFrame.vue'
import UpdaterButton from '@/components/UpdaterButton.vue'

provide(key, store())
</script>