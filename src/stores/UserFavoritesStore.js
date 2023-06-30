import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavouritesStore = defineStore('favorites', () => {
    const userFavorites = ref([]);

    const storedFavorites = JSON.parse(localStorage.getItem('userFavorites'));
    if (Array.isArray(storedFavorites)) {
        userFavorites.value = storedFavorites;
    }
    const saveUserFavoritesToLocalStorage = (favorites) => {
        localStorage.setItem('userFavorites', JSON.stringify(favorites));
    }
    const addJoke = (joke) => {
        userFavorites.value.unshift(joke);
        saveUserFavoritesToLocalStorage(userFavorites.value);
    }
    const removeJoke = (jokeId) => {
        const index = userFavorites.value.findIndex((joke) => joke.id === jokeId);
        if (index !== -1) {
            userFavorites.value.splice(index, 1);
            saveUserFavoritesToLocalStorage(userFavorites.value);
        }
    }
    const favCount = () => {
        console.log(userFavorites.value.length)
        return userFavorites.value.length;
    }
    return {
        userFavorites,
        addJoke,
        removeJoke,
        favCount,
    };
});