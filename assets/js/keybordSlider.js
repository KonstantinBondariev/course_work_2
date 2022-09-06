import Slider from './slider.js';

class KeybordSlider extends Slider {
  _pressKay(e) {
    if (e.code === 'ArrowLeft') this.goToPrev();
    if (e.code === 'ArrowRight') this.goToNext();
    if (e.code === 'Space') this._playOrPausSlideShow();
  }

  _initListeners() {
    super._initListeners();
    // keybord control
    document.addEventListener('keydown', this._pressKay.bind(this));
  }
}

export default KeybordSlider;
