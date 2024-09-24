import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { baseApi, Stores } from '@/shared'
import { fetchNews } from '../../api'
import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'
import type { NewsItem } from '../../lib'

type newsState = {
  news: NewsItem[]
}

export const useNewsStore = defineStore(Stores.NEWS, () => {
  const state = reactive<newsState>({
    news: [],
  })
  const news = ref<NewsItem[]>([])
  const setNews = async () => {
    try {
      const response = await fetchNews()
      const xml = response.data
      const parser = new XMLParser()
      const rssData = parser.parse(xml)
      state.news = rssData.rss.channel.item
      console.log('Parsed RSS:', state.news[0])
    } catch (error) {
      console.error('Ошибка при загрузке RSS:', error)
    }
  }

  const searchByNews = async (searchValue: string) => {
    await setNews()
    const lowerSearchValue = searchValue.toLowerCase()
    const filteredNews = state.news.filter(news => {
      if (Array.isArray(news['rbc_news:tag'])) {
        return news['rbc_news:tag'].some(tag => {
          return (
            typeof tag === 'string' &&
            tag.toLowerCase().includes(lowerSearchValue)
          )
        })
      }
      return false
    })
    state.news = filteredNews
  }

  return {
    state,
    setNews,
    searchByNews,
  }
})
