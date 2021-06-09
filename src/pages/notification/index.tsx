import HTML from './html.html?raw';
import REACT from './react?raw';
import PREACT from './preact?raw';
import VUE_3 from './vue?raw';
import LIT_HTML from './lit-html?raw';
import UHTML from './uhtml?raw';

import { Page } from '../types';

const PAGE: Page = {
  path: 'notification',
  title: 'Notification',
  code: {
    html: HTML,
    react: REACT,
    preact: PREACT,
    'vue-3': VUE_3,
    'lit-html': LIT_HTML,
    uhtml: UHTML,
  },
};

export default PAGE;
