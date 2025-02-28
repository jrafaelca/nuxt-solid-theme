<template>
  <UButton
      icon="i-lucide-bell"
      color="neutral"
      variant="ghost"
  />

  <UButton
      icon="i-lucide-languages"
      color="neutral"
      variant="ghost"
  />

  <UButton
      icon="i-lucide-swatch-book"
      color="neutral"
      variant="ghost"
  />

  <UButton
      color="neutral"
      variant="link"
      :avatar="{
          alt: 'Demo User',
          size: 'md'
        }"
      :ui="{ base: 'p-0' }"
  />
</template>
<script setup lang="ts">
</script>