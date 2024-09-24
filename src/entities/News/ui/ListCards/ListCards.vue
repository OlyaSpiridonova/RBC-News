<template>
  <v-row>
    <v-col
      cols="6"
      md="6"
      v-for="news in paginatedNews"
      :key="news['rbc_news:news_id']"
    >
      <card-component
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
  <!-- Кнопки управления страницами -->
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

// Количество новостей на странице
const newsPerPage = 4
const currentPage = ref(1)

const { state } = useNewsStore()

// Подсчет общего количества страниц
const totalPages = computed(() => {
  return Math.ceil(state.news.length / newsPerPage)
})

// Фильтр новостей для текущей страницы
const paginatedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * newsPerPage
  const endIndex = startIndex + newsPerPage
  return state.news.slice(startIndex, endIndex)
})

// Функции для переключения страниц
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
