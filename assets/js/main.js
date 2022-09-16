import Wrapper from './wrapper.js';
import Slider from './slider/slider.js';
import SwipeSlider from './slider/swipeSlider.js';
import KeybordSlider from './slider/keybordSlider.js';
import SuperPuperProSlider from './slider/super-puper-PRO-slider.js';
import SliderForSymbol from './slider/slider-for-symbol.js';
import Header from './header.js';
import Style from './style.js';

const slider = new SliderForSymbol();
slider.init();
// slider.pauseSlideShow();
const headerMenu = new Header();
headerMenu.init();

const style = new Style();
style.init();

const wrapper = new Wrapper();
wrapper.init();
