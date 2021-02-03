import { gsap } from "gsap"

const menuLinks = document.querySelector("ul.menu-container")
const menu = document.querySelector(".menu-burger")
const links = menuLinks.querySelectorAll("li")

const tl = gsap.timeline({
    paused: true,
    reversed: true,
})

// tl.fromTo(
//     menuLinks,
//     {
//         opacity: 0,
//         height: 0,
//     },
//     {
//         opacity: 1,
//         height: "5rem",
//         duration: 0.25,
//     }
// ).fromTo(
//     links,
//     {
//         x: -20,
//         opacity: 0,
//     },
//     {
//         x: 0,
//         opacity: 1,
//         ease: "power1.inOut",
//         stagger: 0.3,
//         onComplete: function () {
//             console.log(this)
//         },
//     },
//     "-=0.3"
// )

menu.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse()
})
