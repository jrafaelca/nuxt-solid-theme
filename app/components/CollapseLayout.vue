<script setup>
const {isOpen, isMobileOpen, toggle} = useCollapse()
</script>

<template>
  <div class="bg-[var(--ui-bg-muted)]">
    <slot name="navigation">
      <CollapseNavigation/>
      <div
          role="button"
          tabindex="0"
          class="bg-[var(--ui-bg)] fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden"
          :class="
          isMobileOpen
            ? 'opacity-50 dark:opacity-75'
            : 'opacity-0 pointer-events-none'
        "
          @click="toggle"
      />
    </slot>

    <div
        class="relative min-h-screen w-full overflow-x-hidden transition-all duration-300"
        :class="{
        'lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]': isOpen,
        'lg:max-w-[calc(100%_-_65px)] lg:ms-[65px]': !isOpen,
      }"
    >
      <slot/>
    </div>

    <CollapsePanels/>
  </div>
</template>
