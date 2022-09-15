class Wrapper {
  constructor() {
    this.body = document.querySelector('body');
    this.wrapperEl = this.body.querySelector('.wrapper');
    this.wrapperContent = this.wrapperEl.innerHTML;
  }

  _watchBodySize() {
    this.bodyWidth = +this.body.getBoundingClientRect().width;
  }

  _addText() {
    if (this.bodyWidth <= 576) {
      this.wrapperEl.textContent = 'sorry';
      this.status = true;
    }
    if (this.bodyWidth > 576 && this.status) {
      this.wrapperEl.innerHTML = this.wrapperContent;
      this.status = false;
    }
    return;
  }

  init() {
    this.watch = setInterval(() => {
      this._watchBodySize();
      this._addText();
    }, 50);
  }
}
export default Wrapper;

// добавить извинение при маленьком єкране
