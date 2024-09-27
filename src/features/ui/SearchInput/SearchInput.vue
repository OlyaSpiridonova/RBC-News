<template>
  <v-text-field
    v-if="isVisibleSearch"
    hide-details
    single-line
    color="var(--white)"
    :label="label"
    v-model="search"
    @change="searchByNews(search)"
  ></v-text-field>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNewsStore } from '@/entities'
export type SearchInputProps = {
  isVisibleSearch: boolean
  label: string
}
const { searchByNews } = useNewsStore()

defineProps<SearchInputProps>()

const search = ref('')
</script>
