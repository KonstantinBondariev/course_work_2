class Header {
  constructor(p) {
    const settings = {
      ...{
        headerClass: '.header',
        headerMenuClass: '.header__menu',
        headerLogogClass: '.header__logo',
        headerStyleClass: '.header__style',
        nextElemClass: '.main',
      },
      ...p,
    };
    this.header = document.querySelector(settings.headerClass);
    this.headerMenu = this.header.querySelector(settings.headerMenuClass);
    this.headerLogo = this.headerMenu.querySelector(settings.headerLogogClass);
    this.headerStyle = this.headerMenu.querySelector(settings.headerStyleClass);
    this.nextElem = document.querySelector(settings.nextElemClass);
  }

  pageWatch() {
    let y = this.nextElem.getBoundingClientRect();
    if (y.y) return true;
  }

  changeHeaderMenu() {
    if (this.pageWatch()) {
      this.header.classList.add('header--not-top');
      this.headerLogo.classList.add('header__logo--non-top');
      this.headerStyle.classList.add('header__style--non-top');
    } else {
      this.header.classList.remove('header--not-top');
      this.headerLogo.classList.remove('header__logo--non-top');
      this.headerStyle.classList.remove('header__style--non-top');
    }
  }

  init() {
    this.watch = setInterval(() => {
      this.pageWatch();
      this.changeHeaderMenu();
    }, 50);
  }
}

export default Header;
