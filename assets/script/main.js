class App{
  constructor(altHeaderSelector){
    this.altHeader = document.querySelector(altHeaderSelector);
  }

  showHeader(){
    if (window.pageYOffset >= 408){
      this.altHeader.dataset.show = "true";
    } else {
      this.altHeader.dataset.show = "false";
    }
  }

  addEvents(){
    window.addEventListener("scroll", this.showHeader)
  }

  bindEvents(){
    this.showHeader = this.showHeader.bind(this);
  }

  init(){
    this.bindEvents();
    this.addEvents();
  }
}

const app = new App('.side-box');
app.init();