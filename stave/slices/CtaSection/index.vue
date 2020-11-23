<template>
  <container :style="{'backgroundColor': slice.primary.backgroundColor ? slice.primary.backgroundColor : ''}">
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
      <div v-if="slice.items" class="mt-10">
        <div class="flex flex-shrink-0 align-center">
          <div :class="{
            'md:grid md:grid-cols-2 md:gap-10 flex flex-col items-center': slice.items.length > 1,
            'flex justify-center': slice.items.length <= 1
            }">
            <div class="inline-block" v-for="(item, index) in sortedCta" :key="index">
              <prismic-link
                class="font-bold py-3 px-5 mb-4 sm:mb-0 rounded inline-block transform transition-colors duration-75 text-base mt-4 mx-auto cursor-pointer"
                :class="{
                  'text-white bg-green-400 hover:bg-green-600': item.primary,
                  'text-green-700 border-green-300 border-2 hover:bg-green-400 hover:text-white ': !item.primary
                }"
                :field="item.ctaLink">
                {{item.ctaLabel}}
              </prismic-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import { Eyebrow, Container } from '../../components';
import { commonProps } from '../../utils';
import sortBy from 'lodash/sortBy'

export default {
  components: {
    Eyebrow,
    Container
  },
  props: {
    ... commonProps
  },
  computed: {
    sortedCta() {
      return this.slice.items
        ? sortBy(this.slice.items, (value) => {return value.primary !== true;})
        : null
    }
  },
}
</script>
