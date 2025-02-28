import { breakpointsTailwind } from '@vueuse/core'

export const useTailwindBreakpoints = () => useBreakpoints(breakpointsTailwind, { ssrWidth: 768 })
