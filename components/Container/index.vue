<template>
  <component
    :is="'section'"
    class="container mx-auto px-5 py-24">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    propName: {
      type: Number,
      default: () => {}
    },
  },
}
</script>
