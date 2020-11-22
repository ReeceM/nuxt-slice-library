<template>
  <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <prismic-rich-text
      :field="currentTitle"
      class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
    />

    <nav class="list-none mb-10">
      <li v-for="(item, index) in links" :key="index">
        <prismic-link
          :field="item.link"
          class="text-gray-600 hover:text-gray-800 transform hover:translate-x-1 hover:translate-y-3">
          <span v-text="item.linkLabel" />
        </prismic-link>
      </li>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      links: {
        type: Array,
        default: () => {
          return [];
        }
      },
    },
    computed: {
      currentTitle() {
        return this.links[0].title ?? '';
      }
    },
  }

</script>

