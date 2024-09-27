<template>
  <v-container>
    <span class="relevant-news__title">Релевантные новости</span>
    <v-row class="py-4">
      <v-col
        cols="3"
        md="3"
        v-for="news in relevantNews"
        :key="news['rbc_news:title']"
      >
        <v-card class="d-flex flex-column gap-2 h-100 relevant-news__card">
          <span class="relevant-news__card-title">{{
            news['rbc_news:title']
          }}</span>
          <v-img :src="image(news)" cover />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type RelatedLink, useNewsStore } from '@/entities'
export type RelevantNewsProps = {
  relevantNews: RelatedLink[]
}

const { state } = useNewsStore()

const props = defineProps<RelevantNewsProps>()

const relevantNews = computed(() => props.relevantNews)
const image = computed(() => {
  return (news: RelatedLink) =>
    news['rbc_news:thumbnail']?.url ||
    'https://s.rbk.ru/v10_rbcnews_static/current/images/rbc-share.png'
})
</script>
