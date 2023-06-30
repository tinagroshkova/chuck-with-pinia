<template>
  <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
    <ul class='navbar-nav'>
        <img src='../../public/images/logo1.png' class="logo" alt="site-logo">

      <router-link
          v-for="(page, index) in pages"
          class="nav-item nav-link"
          :key="index"
          :to="page.path"
          :title="page.title"
      >
        {{ page.title }}
      </router-link>

        <base-icon v-if="favouritesStore.favCount" class="gelatine">
          <p>{{ favouritesStore.favCount()}}</p>
        </base-icon>
    </ul>
  </nav>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";
import {useFavouritesStore} from "../stores/UserFavoritesStore";
import PAGES from '../utils/constants';

const pages = PAGES;
const favouritesStore = useFavouritesStore();
</script>







