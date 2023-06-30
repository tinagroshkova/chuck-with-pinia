<template>
  <img :src="imageSrc" :alt="altText" />
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: '',
  },
});
</script>

