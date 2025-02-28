<template>
  <div class="flex flex-col gap-4 md:flex-row md:items-center">
    <div v-if="$slots.right">
      <slot name="right" />
    </div>

    <div
      v-if="$slots.left"
      class="ml-auto"
    >
      <slot name="left" />
    </div>
  </div>
</template>
