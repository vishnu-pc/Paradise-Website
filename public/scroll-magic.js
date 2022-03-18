const bv = document.querySelector('.scroll-video');
const video = bv.querySelector('video');
const text = bv.querySelector('.text-in-scroll');

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 5000,
    triggerElement: bv,
    triggerHook: 0
})
    // .addIndicators()
    .setPin(bv)
    .addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: bv,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

let accelamount = 0.9;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
    console.log(e);
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 120);