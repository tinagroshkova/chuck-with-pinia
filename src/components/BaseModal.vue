<template>
  <div v-if="show" class="popup-overlay">
    <div class="popup-window">
      <h4>{{ title }}</h4>
      <div class="popup-buttons">
        <base-button @click="onConfirm">Yes</base-button>
        <base-button @click="onCancel">No</base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import BaseButton from "@/components/BaseButton.vue";

defineProps({
  show: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['confirm', 'cancel']);
const onConfirm = () => {
  emit('confirm');
};
const onCancel = () => {
  emit('cancel');
};
</script>
