<template>
  <div class='home-container'>
    <hero-section
        :imageSrc="'/images/chuck.jpg'"
        altText="Chuck Norris"
    ></hero-section>
    <site-description
        :description='getDescriptionByKey("Home")'
    ></site-description>
  </div>
</template>

<script setup>
import HeroSection from '@/layout/HeroSection.vue';
import SiteDescription from '@/layout/SiteDescription.vue';
import PAGES from '../utils/constants';
const getDescriptionByKey = (key) => {
  const page = PAGES.find(page => page.title === key);
  return page ? page.description : '';
};
</script>

