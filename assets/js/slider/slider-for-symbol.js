import KeybordSlider from './keybordSlider.js';

class SliderForSymbol extends KeybordSlider {
  _initControlPanel() {
    let controlPanel = document.createElement('div');

    const PAUSE =
      '<div class="slider__controls" id="pause" style="display: none">Pause</div>';
    const NEXT = '<div class="slider__controls" id="next">&#8594</div>';
    const PREV = '<div class="slider__controls" id="prev">&#8592</div>';

    controlPanel.setAttribute('class', 'slider__control-panel');
    controlPanel.innerHTML = PREV + PAUSE + NEXT;

    this.slider.append(controlPanel);

    this.pauseBtn = this.slider.querySelector('#pause');
    this.prevBtn = this.slider.querySelector('#prev');
    this.nextBtn = this.slider.querySelector('#next');
  }

  _initIndicarorPanel() {
    let indicatorPanel = document.createElement('ul');

    const IND1 =
      '<li class="slider__indicator slider__indicator--active indicator" data-slide-to="0">dovetail</li>';
    const IND2 =
      '<li class="slider__indicator indicator" data-slide-to="1">max</li>';
    const IND3 =
      '<li class="slider__indicator indicator" data-slide-to="2">aero</li>';

    indicatorPanel.setAttribute('class', 'slider__indicator-panel');
    indicatorPanel.innerHTML = IND1 + IND2 + IND3;

    this.slider.append(indicatorPanel);

    this.indicatorPanel = this.slider.querySelector('.slider__indicator-panel');
    this.indicator = this.slider.querySelectorAll('.slider__indicator');
  }

  transformInicatorPanel() {
    if (this.cureantSlide === 0) {
      this.indicatorPanel.setAttribute('style', 'transform: translate(40%, 0)');
    }
    if (this.cureantSlide === 1) {
      this.indicatorPanel.setAttribute('style', 'transform: translate(-5%, 0)');
    }
    if (this.cureantSlide === 2) {
      this.indicatorPanel.setAttribute(
        'style',
        'transform: translate(-33%, 0)'
      );
    }
  }
  goToSlide(n) {
    this.slide[this.cureantSlide].classList.toggle('active');
    this.indicator[this.cureantSlide].classList.toggle(
      'slider__indicator--active'
    );

    this.cureantSlide = (n + this.slidesLenght) % this.slidesLenght;
    this.slide[this.cureantSlide].classList.toggle('active');
    this.indicator[this.cureantSlide].classList.toggle(
      'slider__indicator--active'
    );
    this.transformInicatorPanel();
  }

  init() {
    super.init();
    this.slideInterval = setInterval(() => {
      this._nextSlide();
      this.transformInicatorPanel();
    }, this.interval);
  }
}

export default SliderForSymbol;
