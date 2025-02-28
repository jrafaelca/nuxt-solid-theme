<script setup>
const { isOpen, isMobileOpen, menuItems } = useCollapse()

const startMenuItems = computed(() => menuItems.value.filter(
    item => item.position === 'start',
))
const endMenuItems = computed(() => menuItems.value.filter(
    item => item.position === 'end',
))

const initiallyOpen = ref(isOpen.value)

const handleMouseEnter = () => {
  if (!initiallyOpen.value) isOpen.value = true
}

const handleMouseLeave = () => {
  if (!initiallyOpen.value) isOpen.value = false
}

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
  initiallyOpen.value = isOpen.value
}
</script>

<template>
  <div
      class="bg-[var(--ui-bg)] border-[var(--ui-border)] fixed start-0 top-0 z-[60] flex h-full flex-col border-r transition-all duration-300 ease-in-out"
      :class="[
      !isOpen ? 'w-[65px]' : 'w-[280px]',
      isMobileOpen ? 'translate-x-0 lg:translate-x-0' : '-translate-x-full lg:translate-x-0',
    ]"
  >
    <div class="h-16 w-full flex items-center justify-between px-4">
      <slot name="header">
        <CollapseNavigationHeader/>
      </slot>

      <UButton
          color="neutral"
          variant="outline"
          size="sm"
          icon="i-lucide-arrow-left-to-line"
          :ui="{ base: 'absolute right-0 translate-x-1/2 hidden lg:inline-flex' }"
          :class="{ 'rotate-180': !isOpen }"
          @click="toggleSidebar"
      />
    </div>

    <div
        class="relative flex w-full grow flex-col py-6"
        :class="!isOpen ? 'px-4' : 'px-6 overflow-y-auto'"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
      <CollapseNavigationItems
          v-if="startMenuItems?.length"
          :items="startMenuItems"
          :collapsed="!isOpen"
      />

      <div class="mb-2 grow"/>

      <CollapseNavigationItems
          v-if="endMenuItems?.length"
          :items="endMenuItems"
          :collapsed="!isOpen"
      />
    </div>

    <div
        class="h-16 flex items-center"
        :class="[
            isOpen ? 'px-6' : 'px-4',
        ]">
      <slot name="footer">
        <CollapseNavigationFooter/>
      </slot>
    </div>
  </div>
</template>
