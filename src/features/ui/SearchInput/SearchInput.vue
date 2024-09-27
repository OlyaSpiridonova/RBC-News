<template>
  <v-text-field
    v-if="isVisibleSearch"
    hide-details
    single-line
    color="var(--white)"
    :label="label"
    v-model="search"
    @focus="onFocus"
    @blur="onBlur"
  ></v-text-field>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useNewsStore } from '@/entities'
export type SearchInputProps = {
  isVisibleSearch: boolean
  label: string
}
const { searchByNews } = useNewsStore()

defineProps<SearchInputProps>()

const search = ref('')
const isFocused = ref(false)
let timeout: number

const onFocus = async () => {
  isFocused.value = true
}

const onBlur = async () => {
  isFocused.value = false
  if (search.value) {
    await searchByNews(search.value)
  }
}

watch(
  () => search.value,
  val => {
    if (isFocused.value) {
      clearTimeout(timeout)
      timeout = setTimeout(async () => {
        clearTimeout(timeout)
        await searchByNews(val)
      }, 300)
    }
  },
)
</script>
