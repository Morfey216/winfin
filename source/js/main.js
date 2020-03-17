/* eslint-disable */
import './general/polyfills';
import './general/intersection-observer';
import utils from './general/utils';
import lazyload from './general/lazyload';
/* eslint-enable */

// region Blocks

import formInput from '../blocks/form-input/form-input';
import formTextarea from '../blocks/form-textarea/form-textarea';
import modal from '../blocks/modal/modal';
import gagerModal from '../blocks/gager-modal/gager-modal';
import callRequestModal from '../blocks/call-request-modal/call-request-modal';
import discountModal from '../blocks/discount-modal/discount-modal';
import header from '../blocks/header/header';
import mainSlider from '../blocks/main-slider/main-slider';
import pagination from '../blocks/page-pagination/page-pagination';
import profileSystem from '../blocks/profile-systems/profile-systems';
import wsrForm from '../blocks/window-selection-request-form/window-selection-request-form';
import grForm from '../blocks/gauge-request-form/gauge-request-form';
import reviewsSection from '../blocks/reviews-section/reviews-section';
import workReport from '../blocks/work-report/work-report';
import brands from '../blocks/brands/brands';
import examples from '../blocks/examples/examples';
import popularWindows from '../blocks/popular-windows/popular-windows';
import popularDoors from '../blocks/popular-doors/popular-doors';
import promoSection from '../blocks/promotions-section/promotions-section';
import map from '../blocks/map/map';
import certificates from '../blocks/certificates/certificates';
import calculatorForm from '../blocks/calculator-form/calculator-form';
import orderMeasurerForm from '../blocks/order-measurer-form/order-measurer-form';
import multiExamples from '../blocks/multi-examples/multi-examples';
import feedbackForm from '../blocks/feedback-form/feedback-form';
import accessories from '../blocks/accessories/accessories';
import productDescription from '../blocks/product-description/product-description';
import faq from '../blocks/faq/faq';
import askQuestionModal from '../blocks/ask-question-modal/ask-question-modal';

// endregion

formInput();
formTextarea();
modal();
gagerModal();
discountModal();
callRequestModal();
header();
mainSlider();
pagination();
profileSystem();
wsrForm();
grForm();
reviewsSection();
workReport();
brands();
examples();
popularWindows();
popularDoors();
promoSection();
map();
certificates();
calculatorForm();
orderMeasurerForm();
multiExamples();
feedbackForm();
accessories();
productDescription();
faq();
askQuestionModal();
