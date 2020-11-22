<template>
  <component
    :is="'span'"
    class="text-base uppercase mb-6 tracking-wide text-xs font-semibold"
    :class="theme.color ? theme.color : 'text-green-500'">
    <slot />
  </component>
</template>

<script>
  import {
    commonProps
  } from '../../utils'

  export default {
    name: 'Eyebrow',
    props: {
      ...commonProps,
    },
  }

</script>

<style>

</style>
