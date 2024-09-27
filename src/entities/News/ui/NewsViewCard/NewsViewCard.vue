<template>
  <v-card class="d-flex flex-column h-100">
    <div class="card__header">
      <span class="card__header-category">{{
        currentNews?.category || 'Новости'
      }}</span>
      <div class="card__header-info">
        <span class="card__header-date">{{
          currentNews?.['rbc_news:date']
        }}</span>
        <span class="card__header-autor">{{ currentNews?.author }}</span>
      </div>
    </div>

    <div class="d-flex flex-no-wrap justify-space-between align-center pa-2">
      <span class="news-view__title">{{ currentNews?.title }}</span>
    </div>
    <div
      class="news-view__image"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <v-img :src="currentNews?.['rbc_news:image']?.['rbc_news:url']" cover />
      <v-btn
        v-if="isHovered"
        class="news-view__image-button"
        icon="mdi mdi-image-search"
        position="absolute"
        @click="dialog = true"
      />
    </div>

    <v-dialog v-model="dialog" width="100vw">
      <v-card max-width="1200" position="relative">
        <v-btn
          class="ms-auto news-view__close"
          icon="mdi mdi-close"
          position="absolute"
          @click="dialog = false"
        ></v-btn>
        <v-img :src="currentNews?.['rbc_news:image']?.['rbc_news:url']" cover />
      </v-card>
    </v-dialog>

    <div class="news-view-formatted-text pa-2">
      {{ decodeHtml(newsText) }}
    </div>
    <v-btn @click="onViewNewsOriginal">Смотреть на сайте РБК</v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { type NewsItem } from '@/entities'
import { decodeHtml } from '@/shared'

export type NewsViewCardProps = {
  currentNews: NewsItem
}

const route = useRoute()
const props = defineProps<NewsViewCardProps>()

const currentNews = computed(() => props.currentNews)
const isHovered = ref(false)
const dialog = ref(false)

const newsText = computed(() => {
  return currentNews.value?.['rbc_news:full-text'] || ''
})

const onViewNewsOriginal = () => {
  window.open(currentNews.value?.link, '_blank')
}
</script>
