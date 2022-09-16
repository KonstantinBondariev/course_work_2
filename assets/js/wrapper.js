import SliderForSymbol from './slider/slider-for-symbol.js';
import Style from './style.js';
import Header from './header.js';

class Wrapper {
  constructor() {
    this.body = document.querySelector('body');
    this.wrapperEl = this.body.querySelector('.wrapper');
    this.wrapperContent = this.wrapperEl.innerHTML;
    this.initSlider = new SliderForSymbol();
    this.initStyle = new Style();
    this.initHeaderMenu = new Header();
  }

  _watchBodySize() {
    this.bodyWidth = +this.body.getBoundingClientRect().width;
  }

  _chageWrapper() {
    if (this.bodyWidth <= 576) {
      this.wrapperEl.textContent = 'sorry';
      this.status = true;
    } else if (this.status) {
      this.wrapperEl.innerHTML = this.wrapperContent;
      this.status = false;
      this.initSlider = new SliderForSymbol();
      this.initStyle = new Style();
      this.initHeaderMenu = new Header();
      this.initHeaderMenu.init();
      this.initSlider.init();
      this.initStyle.init();
    }
  }

  _initListeners() {
    window.addEventListener('resize', () => {
      this._watchBodySize();
      this._chageWrapper();
    });
  }

  init() {
    this._initListeners();
    this.initHeaderMenu.init();
    this.initSlider.init();
    this.initStyle.init();
    // this.watch = setInterval(() => {
    //   this._watchBodySize();
    //   this._chageWrapper();
    // }, 50);
  }
}
export default Wrapper;
