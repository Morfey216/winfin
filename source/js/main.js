/* eslint-disable */
import './general/polyfills';
import './general/intersection-observer';
import utils from './general/utils';
import lazyload from './general/lazyload';
/* eslint-enable */
// region Blocks

import header from '../blocks/header/header';
import pagination from '../blocks/page-pagination/page-pagination';

// endregion

header();
pagination();
