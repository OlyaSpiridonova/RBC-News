<template>
  <v-card class="d-flex flex-column h-100">
    <div class="card__header">
      <span class="card__header-category">{{ category || 'Новости' }}</span>
      <div class="card__header-info">
        <span class="card__header-date">{{ date }}</span>
        <span class="card__header-autor">{{ autor }}</span>
      </div>
    </div>

    <div class="d-flex flex-no-wrap justify-space-between align-center pa-2">
      <span class="card__title" @click="onViewNews(id)">{{ title }}</span>
    </div>
    <div
      class="card__anons d-flex flex-no-wrap justify-space-between align-center pa-2"
    >
      {{ decodeHtml(anons) }}
    </div>
    <v-img :src="image" cover></v-img>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { decodeHtml, Routes } from '@/shared'
export type CardProps = {
  id: string
  title: string
  anons: string
  text: string
  image: string
  category: string
  date: string
  autor: string
}
const props = defineProps<CardProps>()
const router = useRouter()

const image = computed(
  () =>
    props.image ||
    'https://s.rbk.ru/v10_rbcnews_static/current/images/rbc-share.png',
)

const onViewNews = (id: string) => {
  router.push({ name: Routes.NEWS_VIEW, params: { id } })
}
</script>
