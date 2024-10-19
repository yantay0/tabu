import { boot } from 'quasar/wrappers';
import Vue from 'vue';
import * as VueGoogleMaps from '@fawmi/vue-google-maps';

export default boot(({ app }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDFpm6Tc6qzJZfpdJLM3HOQgcC4Fm_at4I', 
      libraries: 'places', 
    },
  });
});
