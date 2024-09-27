<template>
  <v-app>
    <Navbar title="RBC News" label="Введите текст для поиска" />
    <v-main class="main">
      <v-container>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useNewsStore } from '@/entities'

const { setNews } = useNewsStore()

onMounted(async () => {
  await setNews()
})
</script>
