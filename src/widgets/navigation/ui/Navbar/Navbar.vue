<template>
  <v-toolbar :color="'var(--dark-green)'">
    <v-toolbar-title class="navbar__title" @click="onOpenMain">{{
      title
    }}</v-toolbar-title>
    <search-input-component
      :is-visible-search="isVisibleSearch"
      :label="label"
    />
    <v-btn icon @click="onChangeVisibleSearch">
      <v-icon color="var(--white)">mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { SearchInput as SearchInputComponent } from '@/features'
import { Routes } from '@/shared'
export type NavbarProps = {
  title: string
  label: string
}
defineProps<NavbarProps>()
const router = useRouter()

const isVisibleSearch = ref(false)

const onChangeVisibleSearch = () => {
  isVisibleSearch.value = !isVisibleSearch.value
}
const onOpenMain = () => {
  router.push({ name: Routes.INDEX })
}
</script>
