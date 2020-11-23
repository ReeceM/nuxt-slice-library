<template>
  <container :style="{'backgroundColor': slice.primary.backgroundColor}">
    <div class="flex flex-col items-center">
      <div class="text-center">
        <eyebrow :theme="theme.eyebrow">
          {{ slice.primary.eyebrow }}
        </eyebrow>

        <prismic-rich-text
          v-if="slice.primary.title"
          :field="slice.primary.title"
          :class="theme.title"
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        />
        <prismic-rich-text
          v-if="slice.primary.description"
          :field="slice.primary.description"
          :class="theme.description"
          class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
        />
      </div>
      <div v-if="slice.items.length" class="mt-10">
        <div class="flex items-center">
          <div class="space-y-8 md:space-y-5 md:grid md:grid-cols-2 md:gap-10">
            <div class="inline-flex" v-for="(item, index) in items" :key="index">
              <prismic-link class="text-white bg-green-600 font-bold py-3 px-5 mb-4 sm:mb-0 rounded inline-block hover:bg-green-700 box-content text-base mt-4 mx-auto" :fields="item.link">{{item.linkLabe}}</prismic-link>
            </div>
          </div>
        </div>
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
              <h2 class="font-semibold font-semibold text-gray-800 mb-2" :class="theme.featureTitle">{{ feature.heading }}</h2>
              <prismic-rich-text :field="feature.description" class="text-gray-500" :class="theme.featureDescription"/>
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
