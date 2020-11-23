import {
  withKnobs,
  text,
  object,
} from "@storybook/addon-knobs";

import Slice from './';
import model from './model';
import mocks from './mocks.json';
import SliceZone from 'vue-slicezone';
import { cloneDeep } from 'lodash';
export default {
  title: model.name,
  decorators: [withKnobs]
};

// TODO: Update to loop over mocks.json
export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      resolver() {
        return Slice;
      },
      theme: {
        navBar: {
          ctaColor: 'bg-yellow-200 hover:bg-yellow-300'
        }
      }
    };
  },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mocks[0]);

        _mock.primary.icon.url = text(
          "Logo",
          "data:image/svg+xml,%3Csvg fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'%3E%3C/path%3E%3C/svg%3E"
        );

        _mock.primary.title = text(
          "Title",
          'Stave - Slices'
        );

        _mock.primary.ctaLink.url = text(
          'CTA Link',
          'https://slicemachine.dev'
        );

        _mock.primary.ctaLabel = object(
          "CTA Text",
          'Slice Machine'
        );

        _mock.items = object(
          "Items (blocks)",
          [
            {
              "linkLabel": "A Link here",
              "navLink": {
                "link_type": "Web",
                "url": "https://slicemachine.dev"
              },
              "linkIcon": {
                "dimensions": {
                  "width": 900,
                  "height": 500
                },
                "alt": "Placeholder image",
                "copyright": null,
                "url": "https://images.prismic.io/important-sm-images/a97d6a71-8f4d-412e-94f5-22e8675713c2_Tir2gkW3mYs.jpg?w=900&h=500"
              }
            },
            {
              "linkLabel": "And one over there",
              "navLink": {
                "link_type": "Web",
                "url": "https://slicemachine.dev"
              },
              "linkIcon": {
                "dimensions": {
                  "width": 900,
                  "height": 500
                },
                "alt": "Placeholder image",
                "copyright": null,
                "url": "https://images.prismic.io/important-sm-images/917926e0-4ebc-4f8a-92e2-70e0168486b3_fz5ClUtxziI.jpg?w=900&h=500"
              }
            }
          ]
        );

        return _mock;
      })()
    }
  },
  template: '<slice-zone :slices="[ mock ]" :theme="theme" :resolver="resolver" />',
});

DefaultSlice.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
}

DefaultSlice.storyName = mocks[0].name;
