<script setup>
const { isOpen } = useCollapse()
</script>

<template>
    <UButton
        color="neutral"
        variant="link"
        :avatar="{
          alt: 'Demo User',
          size: 'md'
        }"
        :ui="{ base: 'w-full p-0' }"
    >
      <span
          v-if="isOpen"
          class="text-nowrap"
      >
        Demo User
      </span>
    </UButton>
</template>
