feather.replace()

document.querySelector('.navbar__menu').addEventListener('click', () => {
    console.log('collapsed')
})
function leaveAnimation() {
    const tl = gsap.timeline()
    tl.to(document.querySelectorAll(".img-anim"), {
        x: '70%',
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.in"
    })
    tl.to(document.querySelectorAll('.infos__container'), {
        y: "50%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
    }, "-=0.3")
}
function enterAnimation() {
    const tl = gsap.timeline()
    tl.to(document.querySelectorAll(".img-anim"), {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.in"
    })
    tl.to(document.querySelectorAll('.infos__container'), {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.in"
    }, "-=0.3")
    console.log(tl)
} 

window.addEventListener('DOMContentLoaded', () => {
    barba.init({
        transitions: [{
            once(data) {
                console.log("once");
                enterAnimation()
            },
            enter() {
                enterAnimation()
                console.log("enter");
            },
            leave() {
                const done = this.async()
                leaveAnimation()
                setTimeout(function () {
                    done()
                }, 800)
                console.log("leave");
            },

        }]
    })
})