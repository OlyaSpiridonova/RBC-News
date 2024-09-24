<template>
  <v-app>
    <Navbar title="RBC News" label="Введите текст для поиска" />
    <v-main class="main">
      <v-container>
        <v-row>
          <ListCards />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useNewsStore, ListCards } from '@/entities'
import { onMounted } from 'vue'

const { setNews } = useNewsStore()

onMounted(async () => {
  await setNews()
})
</script>
