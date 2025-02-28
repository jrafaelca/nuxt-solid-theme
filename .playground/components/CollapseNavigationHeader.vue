<script setup>
const { isOpen } = useCollapse()
</script>

<template>
    <NuxtLink to="/" class="text-[var(--ui-text)]">
      <AppLogo
          :compact="!isOpen"
          class="block w-auto h-5"
      />
    </NuxtLink>
</template>
