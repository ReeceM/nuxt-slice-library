import {
  withKnobs,
  text,
  object,
} from "@storybook/addon-knobs";


import Slice from './';
import model from './model';
import mocks from './mocks.json';
import { cloneDeep } from "lodash";
import SliceZone from 'vue-slicezone';
export default {
  title: model.name,
  decorators: [withKnobs]
};

// TODO: Update to loop over mocks.json
export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone
  },
  data() {
    return {
      // mock: mocks[0],
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
          'Description',
          _mock.primary.description[0].text
        );

        _mock.primary.backgroundColor = text(
          'Background Color',
          "#def"
        );

        _mock.items = object(
          "Items (CTA Buttons)",
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
  template: '<slice-zone :slices="[ mock ]" :theme="theme" :resolver="resolver"/>',
});

DefaultSlice.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
}

export const DoubleCta = () => ({
  components: {
    Slice,
    SliceZone
  },
  data() {
    return {
      // mock: mocks[0],
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
          'Description',
          _mock.primary.description[0].text
        );

        _mock.primary.backgroundColor = text(
          'Background Color',
          "#def"
        );

        _mock.items = object(
          "Items (CTA Buttons)",
          [
            {
              primary: true,
              "ctaLink": {
                "link_type": "Web",
                "url": "https://slicemachine.dev"
              },
              "ctaLabel": "Register"
            },
            {
              primary: false,
              "ctaLink": {
                "link_type": "Web",
                "url": "https://slicemachine.dev"
              },
              "ctaLabel": "Demo"
            }
          ],
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
  template: '<slice-zone :slices="[ mock ]" :theme="theme" :resolver="resolver"/>',
});

DoubleCta.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
}


