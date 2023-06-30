<template>
  <div class="description">
    <h1>{{ description }}</h1>
    <base-button @click="navigateToJokes">Get Jokes</base-button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';

defineProps({
  description: {
    type: String,
    required: true,
  },
});

const router = useRouter();
function navigateToJokes() {
  router.push({ path: '/jokes' });
}
</script>

