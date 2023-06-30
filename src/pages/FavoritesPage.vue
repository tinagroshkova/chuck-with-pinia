<template>
  <div class="favorites-container">
    <base-card
        v-for="joke in userFavorites"
        :key="joke.id"
        class="joke-card"
    >
      <h5>{{ joke.category }}</h5>
      <p>{{ joke.text }}</p>
      <base-icon :isInFavorites="joke.isInFavorites" @click="showDeleteConfirmation(joke)"></base-icon>
    </base-card>
    <base-modal
        :show="showModal"
        title="Are you sure you want to delete this joke?"
        @confirm="removeFromFavorites(selectedJoke)"
        @cancel="closeModal"
    ></base-modal>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import BaseCard from "@/components/BaseCard.vue";
import BaseModal from "@/components/BaseModal.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import {useFavouritesStore} from "../stores/UserFavoritesStore";

const favouritesStore = useFavouritesStore();

const selectedJoke = ref(null);
const showModal = ref(false);
const userFavorites = computed(() => favouritesStore.userFavorites);
function showDeleteConfirmation(joke) {
  selectedJoke.value = joke;
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
}
function removeFromFavorites(joke) {
  const jokeId = joke.id;
  favouritesStore.removeJoke(jokeId);
  showModal.value = false;
}
</script>




