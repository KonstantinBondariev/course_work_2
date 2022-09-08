import Slider from './slider.js';

class SwipeSlider extends Slider {
  _swipeEnd(e) {
    this.swipeEndX = e.changedTouches[0].pageX;
    if (this.swipeEndX - this.swipeStartX > 100) {
      this.goToPrev();
    }
    if (this.swipeEndX - this.swipeStartX < -100) {
      this.goToNext();
    }
  }
  _initListeners() {
    super._initListeners();
    // touch control
    this.slider.addEventListener(
      'touchstart',
      (e) => (this.swipeStartX = e.changedTouches[0].pageX)
    );
    this.slider.addEventListener('touchend', this._swipeEnd.bind(this));
  }
}

export default SwipeSlider;
