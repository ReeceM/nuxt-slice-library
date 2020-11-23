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
import overrides from './overrides.json';
import SliceZone from 'vue-slicezone';

export default {
  title: model.name,
  decorators: [withKnobs]
};

// original overrides lol
// const mocked = mocks[0]
// mocked.items = overrides.items;
// mocked.primary.copyrightNotice = overrides.primary.copyrightNotice;
// mocked.primary.social_buttons = overrides.primary.social_buttons;

// mocked.items = mocked.items.map(item => {
//   const title = item.title;
//   title[0].text = title[0].text.split(' ')[0];
//   item.title = title;

//   return item;
// })

// TODO: Update to loop over mocks.json
export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      // mock: mocked,
      resolver() {
        return Slice;
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
    }
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
});

DefaultSlice.storyName = mocks[0].name;
