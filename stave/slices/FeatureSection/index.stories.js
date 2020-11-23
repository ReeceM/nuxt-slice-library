import {
  withKnobs,
  text,
  select,
  object,
  color
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
export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      // mock: mocks[0],
      resolver() {
        return Slice;
      },
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

        _mock.items = object(
          "Items (blocks)",
          _mock.items
        );

        return _mock;
      })()
    },
    theme: {
      default: (() => {
        const _theme = {
          eyebrow: {
            color: 'text-green-500'
          }
        }

        _theme.eyebrow.color = text(
          'Eyebrow Color',
          'text-green-500'
        );

        return _theme
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
