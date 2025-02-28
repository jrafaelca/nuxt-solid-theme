export function useCollapse() {
  const appConfig = useAppConfig()

  const menuItems = computed(() => appConfig?.navigationItems?.map(navigation => ({
    ...navigation,
    position: navigation.position || 'start',
  })) || [])

  const isOpen = useState('collapse-open', () => true)
  const isMobileOpen = useState('collapse-mobile-open', () => false)

  function toggle() {
    const { lg } = useTailwindBreakpoints()

    if (lg.value) {
      isOpen.value = !isOpen.value
    }
    else {
      isMobileOpen.value = !isMobileOpen.value
    }
  }

  if (import.meta.client) {
    const route = useRoute()

    const { lg } = useTailwindBreakpoints()

    watch(lg, (isLg) => {
      if (isLg) {
        isMobileOpen.value = false
      }
    })

    watch(
      () => route.fullPath,
      () => {
        if (!lg.value) {
          isMobileOpen.value = false
        }
      },
    )
  }

  return {
    toggle,
    menuItems,
    isOpen,
    isMobileOpen,
  }
}
