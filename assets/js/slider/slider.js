class Slider {
  constructor(p) {
    const settings = {
      ...{
        sliderClass: '.slider',
        interval: 3000,
        isPlaying: true,
        slidesClass: '.slider__slide',
      },
      ...p,
    };

    this.slider = document.querySelector(settings.sliderClass);
    this.slide = this.slider.querySelectorAll(settings.slidesClass);
    this.interval = settings.interval;
    this.isPlaying = settings.isPlaying;
  }

  _initProps() {
    this.cureantSlide = 0;
    this.slidesLenght = this.slide.length;
  }

  _initControlPanel() {
    let controlPanel = document.createElement('div');

    const PAUSE = '<div class="slider__controls" id="pause">Pause</div>';
    const NEXT = '<div class="slider__controls" id="next">Next</div>';
    const PREV = '<div class="slider__controls" id="prev">Previous</div>';

    controlPanel.setAttribute('class', 'slider__control-panel');
    controlPanel.innerHTML = PREV + PAUSE + NEXT;

    this.slider.append(controlPanel);

    this.pauseBtn = this.slider.querySelector('#pause');
    this.prevBtn = this.slider.querySelector('#prev');
    this.nextBtn = this.slider.querySelector('#next');
  }

  _initIndicarorPanel() {
    let indicatorPanel = document.createElement('ul');

    indicatorPanel.setAttribute('class', 'slider__indicator-panel');

    for (let i = 0, n = this.slidesLenght; i < n; i++) {
      let indicator = document.createElement('li');
      indicator.setAttribute(
        'class',
        i == 0
          ? 'slider__indicator slider__indicator--active'
          : 'slider__indicator'
      );
      indicator.dataset.slideTo = `${i}`;
      indicatorPanel.append(indicator);
    }

    this.slider.append(indicatorPanel);

    this.indicatorPanel = this.slider.querySelector('.slider__indicator-panel');
    this.indicator = this.slider.querySelectorAll('.slider__indicator');
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
  }

  pauseSlideShow() {
    this.pauseBtn.innerHTML = 'Play';
    this.isPlaying = false;
    clearInterval(this.slideInterval);
  }

  playSlideShow() {
    this.pauseBtn.innerHTML = 'Pause';
    this.isPlaying = true;
    this.slideInterval = setInterval(() => this._nextSlide(), this.interval);
  }

  _playOrPausSlideShow() {
    if (this.isPlaying) {
      this.pauseSlideShow();
    } else {
      this.playSlideShow();
    }
  }

  _nextSlide() {
    this.goToSlide(this.cureantSlide + 1);
  }

  goToNext() {
    this._nextSlide();
    this.pauseSlideShow();
  }

  _prevSlide() {
    this.goToSlide(this.cureantSlide - 1);
  }

  goToPrev() {
    this._prevSlide();
    this.pauseSlideShow();
  }

  _goToIndicate(e) {
    this.target = e.target;

    if (this.target && this.target.classList.contains('slider__indicator')) {
      this.dataSlide = +this.target.getAttribute('data-slide-to');

      if (isNaN(this.dataSlide)) return;
      this.goToSlide(this.dataSlide);
      this.pauseSlideShow();
    }
  }

  _initListeners() {
    // control panel
    this.pauseBtn.addEventListener(
      'click',
      this._playOrPausSlideShow.bind(this)
    );

    this.prevBtn.addEventListener('click', () => this.goToPrev());

    this.nextBtn.addEventListener('click', () => this.goToNext());
    // indicator panel
    this.indicatorPanel.addEventListener(
      'click',
      this._goToIndicate.bind(this)
    );
  }

  init() {
    this._initProps();
    this._initControlPanel();
    this._initIndicarorPanel();
    this._initListeners();
    this.slideInterval = setInterval(() => this._nextSlide(), this.interval);
  }
}

export default Slider;
