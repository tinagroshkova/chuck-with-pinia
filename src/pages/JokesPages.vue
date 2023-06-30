<template>
  <div class="jokes-container">
    <div class="select-holder">
      <select v-model="selectedCategory">
        <option disabled value="">Get joke by category</option>
        <option :key="index" v-for="(category, index) in categories" :value="category">{{ category }}</option>
      </select>
      <base-button @click="fetchRandomJoke">Get another one</base-button>
    </div>
    <base-card v-if="currentJoke" class="joke-holder">
      <div class="category-holder">{{ currentJoke.category }}</div>
      <p :key="currentJoke.id">{{ currentJoke.text }}</p>
      <base-icon :isInFavorites="currentJoke.isInFavorites" @toggleFavorites="toggleFavorites(currentJoke)"></base-icon>
    </base-card>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount, watch } from 'vue';
import { storeToRefs } from "pinia";
import BaseButton from '@/components/BaseButton.vue';
import BaseCard from '@/components/BaseCard.vue';
import BaseIcon from '@/components/BaseIcon.vue';
import { useFavouritesStore } from '@/stores/UserFavoritesStore';
import { useCategoriesStore } from "@/stores/CategoriesStore";
import { SITE_URL } from "@/utils/constants";
import fetchData from '../utils/utilities';

const favouritesStore = useFavouritesStore();
const categoriesStore = useCategoriesStore();

const selectedCategory = ref('');
const currentJoke = reactive({
  id: '',
  text: '',
  category: '',
  isInFavorites: false
});

const { categories } = storeToRefs(categoriesStore);
watch(() => selectedCategory.value, fetchRandomJoke);

onBeforeMount(async () => {
  await fetchRandomJoke();
});
async function fetchRandomJoke() {
  const url = selectedCategory.value
      ? `${SITE_URL}/random?category=${selectedCategory.value}`
      : `${SITE_URL}/random`;
  const jsonData = await fetchData(url);
  currentJoke.id = jsonData.id;
  currentJoke.text = jsonData.value;
  currentJoke.isInFavorites = isJokeInFavorites(jsonData.id);
  if (selectedCategory.value) {
    currentJoke.category = selectedCategory.value;
  } else {
    currentJoke.category = "random";
  }
}
function toggleFavorites(joke) {
  const isJokeAdded = isJokeInFavorites(joke.id);
  if (isJokeAdded) {
    favouritesStore.removeJoke(joke.id);
  } else {
    const jokeToAdd = { ...joke, isInFavorites: true };
    favouritesStore.addJoke(jokeToAdd);
  }
  joke.isInFavorites = !isJokeAdded;
}
function isJokeInFavorites(jokeId) {
  return favouritesStore.userFavorites.some((favorite) => favorite.id === jokeId);
}
</script>

