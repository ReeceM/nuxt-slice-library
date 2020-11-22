import Slice from './';
import model from './model';
import mocks from './mocks.json';
import overrides from './overrides.json';
import SliceZone from 'vue-slicezone';

export default {
  title: model.name,
};

const mocked = mocks[0]
mocked.items = overrides.items;
mocked.primary.copyrightNotice = overrides.primary.copyrightNotice;
mocked.primary.social_buttons = overrides.primary.social_buttons;

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
      mock: mocked,
      resolver() {
        return Slice;
      }
    };
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
});

DefaultSlice.storyName = mocks[0].name;
