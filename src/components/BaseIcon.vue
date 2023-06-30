<template>
  <i
      :class="['fas', 'fa-heart', 'heart-icon', {'added': isInFavorites, 'toAdd': !isInFavorites}]"
      @click="$emit('toggleFavorites')"
  >
    <slot></slot>
  </i>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    isInFavorites: {
      type: Boolean,
      required: false
    }
})
</script>

