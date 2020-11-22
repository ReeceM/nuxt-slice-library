<template>
  <container>
    <div class="flex flex-col items-center">
      <div class="text-center">
        <eyebrow :theme="theme.eyebrow">
          {{ slice.primary.eyebrow }}
        </eyebrow>

        <prismic-rich-text
          v-if="slice.primary.title"
          :field="slice.primary.title"
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        />
        <prismic-rich-text
          v-if="slice.primary.description"
          :field="slice.primary.description"
          class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
        />
      </div>
      <div v-if="slice.items.length" class="mt-10">
        <div id="feature" class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
          <div
            class="flex flex-col"
            v-for="(feature, index) in slice.items" :key="index"
            >
            <div class="mx-auto">
              <prismic-image class="hidden md:block" :field="feature.image" />
              <prismic-image class="block md:hidden" :field="feature.image.mobile" />
            </div>
            <div class="mx-auto mt-4">
              <h2 class="font-semibold font-semibold text-gray-800 mb-2">{{ feature.heading }}</h2>
              <prismic-rich-text :field="feature.description" class="text-gray-500"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>
<script>
import { Eyebrow, Container } from '@/components';
import { commonProps } from '../../utils';

export default {
  components: {
    Eyebrow,
    Container
  },
  props: {
    ... commonProps
  },
}
</script>
