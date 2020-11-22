<template>
  <h1 class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
    :class="theme.title"
  >
    <slot/>
  </h1>
</template>

<script>
import { commonProps } from '../../utils'

  export default {
    name: 'Title',
    props: {
      ... commonProps
    }
  }
</script>
