let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slider__slide');
let inicatorPanel = document.querySelector('.slider__indicator-panel');
let indicators = document.querySelectorAll('.slider__indicator');
let cureantSlide = 0;
let pauseBtn = document.querySelector('#pause');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let isPlaying = true;

function goToSlide(n) {
  slides[cureantSlide].classList.toggle('active');
  indicators[cureantSlide].classList.toggle('slider__indicator--active');
  cureantSlide = (n + slides.length) % slides.length;
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
function nextSlide() {
  goToSlide(cureantSlide + 1);
}

function prevSlide() {
  goToSlide(cureantSlide - 1);
}

pauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseSlideShow();
  } else {
    playSlideShow();
  }
});

prevBtn.addEventListener('click', () => {
  pauseSlideShow();
  prevSlide();
});

nextBtn.addEventListener('click', () => {
  pauseSlideShow();
  nextSlide();
});

function goToIndicate(e) {
  const target = e.target;

  if (target && target.classList.contains('slider__indicator')) {
    const dataSlide = +target.getAttribute('data-slide-to');

    if (isNaN(dataSlide)) return;
    goToSlide(dataSlide);
  }
}

inicatorPanel.addEventListener('click', goToIndicate);

let slideInterval = setInterval(nextSlide, 2000);
