<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex flex-col gap-2 mb-6">
    <div class="flex flex-col gap-4 md:flex-row md:items-center">
      <div v-if="title || description">
        <h2
          v-if="title"
          class="text-xl text-(--ui-text-highlighted) font-semibold md:text-2xl"
        >
          {{ title }}
        </h2>

        <p
          v-if="description"
          class="text-(--ui-text-muted)"
        >
          {{ description }}
        </p>
      </div>

      <div
        v-if="$slots.actions"
        class="flex items-center gap-3 md:ml-auto"
      >
        <slot name="actions" />
      </div>
    </div>

    <div v-if="$slots.navigation">
      <slot name="navigation" />
    </div>
  </div>
</template>
