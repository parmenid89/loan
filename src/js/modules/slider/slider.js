export default class Slider {
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animate = false,
        autoplay = false,
        prevModulesBtns = null,
        nextModulesBtns = null
        } = {}) {
        this.container = document.querySelector(container);
        try {this.slides = this.container.children;} catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.prevModulesBtns = document.querySelectorAll(prevModulesBtns);
        this.nextModulesBtns = document.querySelectorAll(nextModulesBtns);
        this.activeClass=activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}