console.log('script loaded');

gsap.registerPlugin(ScrollTrigger);
// let tl = gsap.timeline();

// tl.to('.a', {x: 600, duration: 2}, 1);
// tl.to('.b', { x: 600, duration: 1, delay: 1 }, '<');
// tl.to('.c', { x: 600, duration: 1 }, '+=1');

gsap.to('.b', {
    scrollTrigger: {
        trigger: '.b',
        start: 'top center',
        endTrigger: '.c',
        end: 'bottom 50%',
        markers: true, 
        scrub: 1,
        pin: true,
        toggleActions: 'restart pause reverse pause'
    },
    x: 800,
    duration: 3,
    rotation: 360,
    ease: 'none'
});