class Header {
  constructor(p) {
    const settings = {
      ...{
        headerClass: '.header',
        headerMenuClass: '.header__menu',
        headerLogogClass: '.header__logo',
        headerStyleClass: '.header__style',
        nextElemClass: '.main',
        navBarShopId: '#linkShop',
        navBarLernId: '#linkLearn',
        navBarOpenShopId: '#shop',
        navBarOpenLernId: '#lern',
        btnClouseId: '.open-btn',
      },
      ...p,
    };
    this.header = document.querySelector(settings.headerClass);
    this.headerMenu = this.header.querySelector(settings.headerMenuClass);
    this.headerLogo = this.headerMenu.querySelector(settings.headerLogogClass);
    this.headerStyle = this.headerMenu.querySelector(settings.headerStyleClass);
    this.nextElem = document.querySelector(settings.nextElemClass);
    this.linkShop = this.header.querySelector(settings.navBarShopId);
    this.linkLearn = this.header.querySelector(settings.navBarLernId);
    this.openShop = this.header.querySelector(settings.navBarOpenShopId);
    this.openLern = this.header.querySelector(settings.navBarOpenLernId);
    this.btnClouse = this.header.querySelectorAll(settings.btnClouseId);
  }

  _openLink(e) {
    this.target = e.target;

    this.target == this.linkShop
      ? this.openShop.classList.add('open-link')
      : this.target == this.linkLearn
      ? this.openLern.classList.add('open-link')
      : null;
  }
  _clouseLink() {
    this.openShop.classList.remove('open-link');
    this.openLern.classList.remove('open-link');
  }

  _pageWatch() {
    let y = this.nextElem.getBoundingClientRect();
    if (y.y) return true;
  }

  _changeHeaderMenu() {
    if (this._pageWatch()) {
      this.header.classList.add('header--fixed');
      this.headerLogo.classList.add('header__logo--fixed');
      this.headerStyle.classList.add('header__style--fixed');
    } else {
      this.header.classList.remove('header--fixed');
      this.headerLogo.classList.remove('header__logo--fixed');
      this.headerStyle.classList.remove('header__style--fixed');
    }
  }
  _initListeners() {
    this.headerMenu.addEventListener('click', this._openLink.bind(this));
    this.btnClouse[0].addEventListener('click', () => this._clouseLink());
    this.btnClouse[1].addEventListener('click', () => this._clouseLink());
  }

  init() {
    console.log(this.linkLearn);
    this._initListeners();
    this.watch = setInterval(() => {
      this._pageWatch();
      this._changeHeaderMenu();
    }, 50);
  }
}

export default Header;
