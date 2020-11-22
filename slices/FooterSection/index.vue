<template>
  <footer class="text-gray-800 p-2 px-3 md:px-6" :class="theme.footer_container">

    <section class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
      <div id="logo-mission" class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <prismic-link
          class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          :field="slice.primary.companyMarkLink"
        >
          <prismic-image
            class="w-10 h-10 text-white p-2 rounded-full"
            :class="(theme.footer_image || null) ? theme.footer.image : 'bg-indigo-500'"
            :field="slice.primary.companyMark"
          />
        </prismic-link>
        <prismic-rich-text
          class="mt-2 text-sm text-gray-500 "
          :field="slice.primary.missionStatement"
        />
      </div>

      <div id="links" class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <footer-links
          v-for="(data, key) in groupedLinks"
          :key="key"
          :links="data"
        />
      </div>
    </section>

    <div class="bg-gray-200">
      <div class="container md:mx-auto px-3 py-4 flex flex-col sm:flex-row">

        <p class="">&copy; {{ (new Date).getFullYear() }} {{ slice.primary.copyrightNotice }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import {
    default as FooterLinks
  } from './Links.vue'

  import {commonProps} from '../../utils'

  export default {
    components: {
      FooterLinks,
    },
    props: {
      ... commonProps,
    },
    computed: {
      groupedLinks() {
        return this.slice.items.length ?
          this.slice.items.reduce((previous, current) => {

            let key = this.$prismic.asText(current.title)
              .toLowerCase().trim()
              .replace(/[^a-z0-9 -]/g, '') /* https://gist.github.com/codeguy/6684588#file-slugify-js-L12 */
              .replace(/\s|\"|\'/gi, '-')
              .replace(/-+/g, '-')

            if (!previous[key]) {
              previous[key] = []
            }

            previous[key].push(current)

            return previous;
          }, {}) : [];
      }
    },
  }

</script>
