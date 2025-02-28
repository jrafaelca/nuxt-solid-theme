<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})

const {toggle} = useCollapse()
</script>

<template>
  <div class="relative h-16 flex items-center gap-2 mb-5">
    <UButton
        color="neutral"
        variant="ghost"
        icon="i-lucide-menu"
        :ui="{ base: 'lg:hidden' }"
        @click="toggle"
    />

    <h1
        v-if="title"
        class="text-2xl font-light text-[var(--ui-text-highlighted)] hidden md:block"
    >
      {{ title }}
    </h1>

    <div class="ms-auto"/>

    <slot name="actions">
      <CollapseAppbarActions/>
    </slot>
  </div>
</template>
