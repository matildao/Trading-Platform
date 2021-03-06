import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      primary: colors.red.darken1, // #E53935
      secondary: colors.teal.darken2, // #FFCDD2
      accent: colors.indigo.base, // #3F51B5
    },
  },
});
