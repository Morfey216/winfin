/* eslint-disable */
import './general/polyfills';
import './general/intersection-observer';
import utils from './general/utils';
import lazyload from './general/lazyload';
/* eslint-enable */

// region Blocks

import modal from '../blocks/modal/modal';
import gagerModal from '../blocks/gager-modal/gager-modal';
import callRequestModal from '../blocks/call-request-modal/call-request-modal';
import discountModal from '../blocks/discount-modal/discount-modal';
import header from '../blocks/header/header';
import pagination from '../blocks/page-pagination/page-pagination';

// endregion

modal();
gagerModal();
discountModal();
callRequestModal();
header();
pagination();
