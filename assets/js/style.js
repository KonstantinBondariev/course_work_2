class Style {
  constructor(p) {
    const settings = {
      ...{
        headerStyleClass: '.header__style',
        cssFile: 'assets/css/style.css',
        cssAltFile: 'assets/css/stylecontrast.css',
        cssLinkIndex: 0,
      },
      ...p,
    };

    this.headerStyle = document.querySelector(settings.headerStyleClass);
    this.cssFile = settings.cssFile;
    this.cssAltFile = settings.cssAltFile;
    this.cssLinkIndex = settings.cssLinkIndex;
  }

  _changeCSS(cssAltFile, cssLinkIndex) {
    var oldlink = document.getElementsByTagName('link').item(cssLinkIndex);

    var newlink = document.createElement('link');
    newlink.setAttribute('rel', 'stylesheet');
    newlink.setAttribute('type', 'text/css');
    newlink.setAttribute('href', cssAltFile);

    document
      .getElementsByTagName('head')
      .item(0)
      .replaceChild(newlink, oldlink);
    this.headerStyle.classList.toggle('act');
  }
  changeFile() {
    if (
      this.headerStyle.getAttribute('class') ==
      'header__style header__style--non-top act'
    ) {
      this.actualCssFile = this.cssFile;
    } else this.actualCssFile = this.cssAltFile;
  }
  _initEventListener() {
    this.headerStyle.addEventListener('click', () => {
      this.changeFile();
      this._changeCSS(this.actualCssFile, this.cssLinkIndex);
    });
  }
  init() {
    this._initEventListener();
    this.changeFile();
  }
}

export default Style;
