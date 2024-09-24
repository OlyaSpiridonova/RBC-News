<template>
  <v-toolbar :color="'var(--dark-green)'">
    <v-toolbar-title class="navbar__title">{{ title }}</v-toolbar-title>
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
import { ref, watch } from 'vue'
import { SearchInput as SearchInputComponent } from '@/features'
export type NavbarProps = {
  title: string
  label: string
}

defineProps<NavbarProps>()
const isVisibleSearch = ref(false)

const onChangeVisibleSearch = () => {
  isVisibleSearch.value = !isVisibleSearch.value
}
</script>
@/features
