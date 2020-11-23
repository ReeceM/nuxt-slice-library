<template>
  <header class="text-gray-700 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <prismic-image class="w-10 h-10 text-white p-2 bg-blue-500 text-white rounded-full" :field="slice.primary.icon"></prismic-image>
        <span class="ml-3 text-xl">{{ slice.primary.title }}</span>
      </a>
      <nav
        v-if="slice.items"
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
        <prismic-link
          v-for="(item, index) in slice.items"
          :field="item.navLink"
          :key="index"
          class="mr-5 hover:text-gray-900"
          >
          {{ item.linkLabel }}
        </prismic-link>
      </nav>

      <prismic-link
        :field="slice.primary.ctaLink"
        class="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
        :class="navTheme.ctaColor ? navTheme.ctaColor : 'bg-gray-200 hover:bg-gray-300'"
        >
        {{ slice.primary.ctaLabel }}
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </prismic-link>
    </div>
  </header>
</template>
<script>
import { commonProps } from '../../utils'
  export default {
    props: {
      ... commonProps
    },
    data() {
      return {
        navTheme: {},
      }
    },
    mounted () {
      this.navTheme = this.theme.navBar || {};
    },
  }

</script>
