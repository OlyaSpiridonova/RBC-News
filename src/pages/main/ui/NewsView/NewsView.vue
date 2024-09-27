<template>
  <div class="news-view">
    <news-view-card-component v-if="currentNews" :current-news="currentNews" />
    <relevant-news-component
      v-if="relevantNews"
      :relevant-news="relevantNews"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RelevantNews as RelevantNewsComponent } from '@/features'
import { NewsViewCard as NewsViewCardComponent, useNewsStore } from '@/entities'

const route = useRoute()
const { state } = useNewsStore()

const newsId = computed(() => route.params.id)
const currentNews = computed(() => {
  return state.news.find(news => news['rbc_news:news_id'] === newsId.value)
})
const relevantNews = computed(() => {
  return currentNews.value?.['rbc_news:related_links']?.link
})
</script>
