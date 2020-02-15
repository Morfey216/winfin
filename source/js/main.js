/* eslint-disable */
import './general/polyfills';
import './general/intersection-observer';
import utils from './general/utils';
import lazyload from './general/lazyload';
/* eslint-enable */

// region Blocks

import formInput from '../blocks/form-input/form-input';
import modal from '../blocks/modal/modal';
import gagerModal from '../blocks/gager-modal/gager-modal';
import callRequestModal from '../blocks/call-request-modal/call-request-modal';
import discountModal from '../blocks/discount-modal/discount-modal';
import header from '../blocks/header/header';
import pagination from '../blocks/page-pagination/page-pagination';
import profileSystem from '../blocks/profile-systems/profile-systems';
import wsrForm from '../blocks/window-selection-request-form/window-selection-request-form';
import grForm from '../blocks/gauge-request-form/gauge-request-form';
import reviewsSection from '../blocks/reviews-section/reviews-section';
import workReport from '../blocks/work-report/work-report';
import brands from '../blocks/brands/brands';
import popularWindows from '../blocks/popular-windows/popular-windows';

// endregion

formInput();
modal();
gagerModal();
discountModal();
callRequestModal();
header();
pagination();
profileSystem();
wsrForm();
grForm();
reviewsSection();
workReport();
brands();
popularWindows();
