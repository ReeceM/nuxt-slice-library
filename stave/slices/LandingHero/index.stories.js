import {
  withKnobs,
  text,
} from "@storybook/addon-knobs";

import Slice from './';
import model from './model';
import mocks from './mocks.json';
import SliceZone from 'vue-slicezone';
import { cloneDeep } from "lodash";

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
      }
    };
  },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mocks[0]);

        _mock.primary.title[0].text = text(
          'Title',
          _mock.primary.title[0].text
        );
        _mock.primary.description[0].text = text(
          'Descirption',
          'And a really long description about things that should be here'
        );

        _mock.primary.image.url = text(
          'Image',
          'https://images.prismic.io/nuxt-slice-library/92143963-d3f2-4efd-945c-b3ee0d79947e_cassi-josh-lhnOvu72BM8-unsplash.jpg?auto=compress,format'
        );

        _mock.primary.ctaLabel = text(
          'CTA Text',
          'Primary Action'
        );

        _mock.primary.ctaLink.url = text(
          'CTA Link',
          _mock.primary.ctaLink.url
        );

        _mock.primary.secondaryLabel = text(
          'Secondary Text',
          'Secondary Action'
        );

        _mock.primary.secondaryLink.url = text(
          'Secondary Link',
          _mock.primary.secondaryLink.url
        );

        return _mock;
      })()
    },
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
});

DefaultSlice.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
}


DefaultSlice.storyName = mocks[0].name;
