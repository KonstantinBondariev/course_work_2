(function () {
  let slider = document.querySelector('.slider');
  let slides = slider.querySelectorAll('.slider__slide');
  let indicatorPanel = slider.querySelector('.slider__indicator-panel');
  let indicators = slider.querySelectorAll('.slider__indicator');
  let pauseBtn = slider.querySelector('#pause');
  let prevBtn = slider.querySelector('#prev');
  let nextBtn = slider.querySelector('#next');

  let cureantSlide = 0;
  let slidesLenght = slides.length;
  let isPlaying = true;
  let swipeStartX = null;
  let swipeEndX = null;

  function goToSlide(n) {
    slides[cureantSlide].classList.toggle('active');
    indicators[cureantSlide].classList.toggle('slider__indicator--active');
    cureantSlide = (n + slides.length) % slidesLenght;
    slides[cureantSlide].classList.toggle('active');
    indicators[cureantSlide].classList.toggle('slider__indicator--active');
  }

  function pauseSlideShow() {
    pauseBtn.innerHTML = 'Play';
    isPlaying = false;
    clearInterval(slideInterval);
  }

  function playSlideShow() {
    pauseBtn.innerHTML = 'Pause';
    isPlaying = true;
    slideInterval = setInterval(nextSlide, 2000);
  }

  function playOrPausSlideShow() {
    if (isPlaying) {
      pauseSlideShow();
    } else {
      playSlideShow();
    }
  }

  function nextSlide() {
    goToSlide(cureantSlide + 1);
  }

  function prevSlide() {
    goToSlide(cureantSlide - 1);
  }

  function goToIndicate(e) {
    const target = e.target;

    if (target && target.classList.contains('slider__indicator')) {
      const dataSlide = +target.getAttribute('data-slide-to');

      if (isNaN(dataSlide)) return;
      goToSlide(dataSlide);
      pauseSlideShow();
    }
  }

  function pressKay(e) {
    if (e.code === 'ArrowLeft') prevSlide();
    if (e.code === 'ArrowRight') nextSlide();
    if (e.code === 'Space') playOrPausSlideShow();
  }

  function swipeEnd(e) {
    swipeEndX = e.changedTouches[0].pageX;
    if (swipeEndX - swipeStartX > 100) {
      nextSlide();
      pauseSlideShow();
    }
    if (swipeEndX - swipeStartX < -100) {
      prevSlide();
      pauseSlideShow();
    }
  }

  function initListeners() {
    // control panel
    pauseBtn.addEventListener('click', playOrPausSlideShow);

    prevBtn.addEventListener('click', () => {
      pauseSlideShow();
      prevSlide();
    });

    nextBtn.addEventListener('click', () => {
      pauseSlideShow();
      nextSlide();
    });
    // indicator panel
    indicatorPanel.addEventListener('click', goToIndicate);
    // keybord control
    document.addEventListener('keydown', pressKay);
    // touch control
    slider.addEventListener(
      'touchstart',
      (e) => (swipeStartX = e.changedTouches[0].pageX)
    );
    slider.addEventListener('touchend', swipeEnd);
  }

  function init() {
    let slideInterval = setInterval(nextSlide, 2000);
  }

  initListeners();
  init();
})();
