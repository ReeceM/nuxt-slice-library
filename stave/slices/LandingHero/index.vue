<template>
  <div :class="theme.hero_text_color">
    <container>
      <section class="text-gray-700 body-font">
        <div class="flex px-5 -py-1 md:flex-row flex-col items-center">
          <div
            class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <prismic-rich-text class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              :field="slice.primary.title" />
            <prismic-rich-text class="mb-8 leading-relaxed" :field="slice.primary.description" />
            <div class="flex justify-center md:space-x-3" v-if="slice.items">
              <prismic-link
                class="inline-flex py-2 px-6 rounded text-lg cursor-pointer text-white bg-green-400 hover:bg-green-600"
                :field="slice.primary.ctaLink">
                {{slice.primary.ctaLabel}}
              </prismic-link>
              <prismic-link
                class="inline-flex py-2 px-6 rounded text-lg cursor-pointer text-green-700 border-green-300 border-2 hover:bg-green-400 hover:text-white "
                :field="slice.primary.secondaryLink">
                {{slice.primary.secondaryLabel}}
              </prismic-link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <prismic-image class="object-cover object-center rounded" :field="slice.primary.image"></prismic-image>
          </div>
        </div>
      </section>
    </container>
  </div>
</template>
<script>
  import {
    Container
  } from '../../components'
  import {
    commonProps
  } from '../../utils'

  export default {
    components: {
      Container,
    },
    props: {
      ...commonProps,
    },
  }

</script>
