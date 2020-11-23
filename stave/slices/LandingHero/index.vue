<template>
  <div :class="theme.hero_text_color">
    <container>
      <div class="container mx-auto">
        <prismic-rich-text :field="slice.primary.title" class="title" />
        <prismic-rich-text :field="slice.primary.description" />
        <!-- <prismic-image class="" :field="slice.primary.image" /> -->
      </div>
    </container>
  </div>
</template>
<script>
  import {
    Container
  } from '@/components'
  import {
    commonProps
  } from '../../utils'

  export default {
    components: {
      Container,
    },
    props: {
      ...commonProps,
      slice: {
        type: Object,
        required: true,
        default () {
          return {}
        }
      }
    },
  }

</script>
