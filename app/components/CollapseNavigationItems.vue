<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <UNavigationMenu
      orientation="vertical"
      :items="items"
  />
</template>