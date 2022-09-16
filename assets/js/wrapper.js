class Wrapper {
  constructor() {
    this.body = document.querySelector('body');
    this.wrapperEl = this.body.querySelector('.wrapper');
    this.wrapperContent = this.wrapperEl.innerHTML;
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
    }
  }

  init() {
    this.watch = setInterval(() => {
      this._watchBodySize();
      this._chageWrapper();
    }, 50);
  }
}
export default Wrapper;

// добавить извинение при маленьком єкране
