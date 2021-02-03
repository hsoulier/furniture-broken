import { gsap } from "gsap"

const menuLinks = document.querySelector("ul.menu-container")
const menuBurger = document.querySelector(".menu-burger")
const links = menuLinks.querySelectorAll("li")

const tl = gsap.timeline({
    paused: true,
    reversed: true,
    defaults: { ease: "power2.inOut" },
})

tl.from(menuLinks, {
    opacity: 0,
    height: 0,
    duration: 0.25,
}).from(
    links,
    {
        x: -10,
        opacity: 0,
        stagger: 0.15,
    },
    "-=0.3"
)

menuBurger.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse()
    document.querySelector(".left-container__menu").classList.toggle("open")
})
