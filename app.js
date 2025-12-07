let side__bar = document.querySelector('.side__bar');
let close__btn = side__bar.querySelector('#close');
let open__btn = document.querySelector('.menu');
let open__btn1 = document.querySelectorAll('.menu_1 ul li');



open__btn.addEventListener('click', function () {

    side__bar.classList.add('active');


})
close__btn.addEventListener('click', function () {

    side__bar.classList.remove('active');

})

open__btn1.forEach(li => {
    li.addEventListener('click', function () {


        side__bar.classList.remove('active');

        this.classList.add('active');
    });
});


const lenis = new Lenis({
    smooth: true,
    lerp: 0.1,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);



