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
      theme: {
        eyebrow: null,
      }
    };
  },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mocks[0]);

        _mock.primary.missionStatement[0].text = text(
          "Mission Statement",
          _mock.primary.missionStatement[0].text
        );
        _mock.primary.companyMark.url = text(
          "Company Mark Image",
          _mock.primary.companyMark.url
        );

        _mock.copyrightNotice = text(
          'Copyright Notice',
          _mock.primary.copyrightNotice?.config?.placeholde
        );

        _mock.primary.social_buttons = object(
          "Social Buttons (blocks)",
          overrides.social_buttons
        );

        _mock.items = object(
          "Items (blocks)",
          _mock.items
        );

        return _mock;
      })()
    },
  },
  template: '<slice-zone :slices="[ mock ]" :theme="theme" :resolver="resolver" />',
});

DefaultSlice.storyName = mocks[0].name;
