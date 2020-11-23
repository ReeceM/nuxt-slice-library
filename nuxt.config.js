import smConfig from "./sm.json";
import tailwindTypography from '@tailwindcss/typography'

if (!smConfig.apiEndpoint) {
  console.warn("Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)");
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Stave | Prismic Slice Library",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: "Stave - Prisimic Slice Library, entry for the #slicecontest"
    },
    {
      hid: "og_author",
      name: "og:author",
      content: "Reece M"
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@iexistin3d"
    }],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Inter:300,400,700,900'
    }]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  tailwindcss: {
    config: {
      purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
          'stave/components/**/*.vue',
          'stave/slices/**/*.vue',
          'layouts/**/*.vue',
          'pages/**/*.vue',
        ]
      }
    },
    plugins: [tailwindTypography]
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/tailwindcss'],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [["@nuxtjs/prismic", {
    endpoint: smConfig.apiEndpoint || "",
    preview: false,
    apiOptions: {
      routes: [{
        type: "page",
        path: "/:uid"
      }]
    }
  }], ["nuxt-sm"]],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  },
  storybook: {
    addons: [
      "@storybook/addon-knobs/register",
      {
        name: '@storybook/addon-essentials',
        options: {
          actions: false,
        },
      }
    ],
    stories: ["~/stave/slices/**/*.stories.js"],
    parameters: {
      backgrounds: {
        default: "white",
        values: [
          { name: "white", value: "#ffffff" },
          { name: "yellow", value: "#FFFBEB" },
          { name: "gray", value: "#F3F4F6" },
        ],
      },
      layout: "fullscreen"
    },
    webpackFinal(config) {
      return config;
    }
  },
  ignore: ["**/*.stories.js"]
}
