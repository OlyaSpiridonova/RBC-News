<template>
  <v-btn class="my-4" @click="toggleSortOrder">
    {{ isAscending ? 'Сначала новые' : 'Сначала старые' }}
  </v-btn>
  <v-row class="py-4">
    <v-col
      cols="6"
      md="6"
      v-for="news in paginatedNews"
      :key="news['rbc_news:news_id']"
    >
      <card-component
        :id="news['rbc_news:news_id']"
        :title="news.title"
        :category="news.category"
        :date="news['rbc_news:date']"
        :autor="news.author"
        :anons="news['rbc_news:anons']"
        :text="news['rbc_news:full-text']"
        :image="news['rbc_news:image']?.['rbc_news:url'] || ''"
      />
    </v-col>
  </v-row>
  <div v-if="totalPages > 1" class="list-cards__pagination">
    <v-btn @click="prevPage" :disabled="currentPage === 1">Назад</v-btn>
    <span>Страница {{ currentPage }} из {{ totalPages }}</span>
    <v-btn @click="nextPage" :disabled="currentPage === totalPages"
      >Вперед</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useNewsStore } from '../../model/module'
import { Card as CardComponent } from '@/entities'

const { state, sortedNewsByDate } = useNewsStore()

const isAscending = ref(true)
const newsPerPage = 4
const currentPage = ref(1)

const toggleSortOrder = () => {
  isAscending.value = !isAscending.value
  sortedNewsByDate(isAscending.value)
}
const totalPages = computed(() => {
  return Math.ceil(state.news.length / newsPerPage)
})
const paginatedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * newsPerPage
  const endIndex = startIndex + newsPerPage
  return state.news.slice(startIndex, endIndex)
})
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>
