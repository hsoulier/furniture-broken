const menu = document.querySelector('.leftContainer i');
const menuLinks = document.querySelector('ul.menuContainer');
const links = menuLinks.querySelectorAll('li');
const leftPanel = document.querySelector('.leftContainer');
const centerPanel = document.querySelector('.centerContainer');
const rightPanel = document.querySelector('.rightContainer');

window.addEventListener('load', () => {
    

    const load = new TimelineLite();
    load.to(leftPanel, 2, {
            y: 0
        })
        .to(leftPanel.querySelector('h1'), 1.5, {
            y: 0,
            opacity: 1
        }, '+=0.5')
        .to(centerPanel, 2.3, {
            y: 0
        }, '-=2.1')
        .to(rightPanel.querySelector('img'), 1.75, {
            y: 0
        }, '-=2.5')
        .to(rightPanel.querySelector('.rightContainer__text'), 1.75, {
            y: 0
        }, '-=1.5')
        .to(rightPanel.querySelectorAll('.rightContainer__text *'), 0.8, {
            x: 0,
            opacity: 1,
            ease: Power1.easeInOut,
            delay: i => i * 0.35,
        }, "-=0.5")
})

const tl = new TimelineLite({
    paused: true,
    reversed: true
});

tl.fromTo(menuLinks, 0.25, {
        opacity: 0,
        height: 0
    }, {
        opacity: 1,
        height: '5rem',
    })
    .fromTo(links, {
        x: -20,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        ease: Power1.easeInOut,
        delay: i => i * 0.3,
    }, '-=0.3')


menu.addEventListener('click', () => {
    tl.reversed() ? tl.play() : tl.reverse();
})


