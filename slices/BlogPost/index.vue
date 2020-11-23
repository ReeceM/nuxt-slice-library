<template>
  <container>
    <div class="flex flex-col px-24">
      <p>
        <prismic-rich-text :field="slice.primary.title" class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"/>
        <prismic-rich-text :field="slice.primary.description" class="text-sm tracking-wide text-gray-500 mt-5" />

      </p>
      <div class="h-2 w-32 bg-teal-400 my-4 p-1" />
      <prismic-rich-text  class="prose lg:prose-xl mt-10" :field="slice.primary.post"/>
    </div>
  </container>
</template>
<script>
import {
  Container
  } from '@/components';

export default {
  components: {
    Container
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
}
</script>
