import gsap from "gsap"

const grid = document.getElementById("grid-master")
const menu = document.querySelector(".menu-burger")
const menuLinks = document.querySelector("ul.menu-container")
const links = menuLinks.querySelectorAll("li")
const leftPanel = document.querySelector(".left-container")
const mainImg = document.querySelector(".master-image")
const sideImg = document.querySelector(".side-image")
const desc = document.querySelector(".description")
const navigation = document.querySelector(".left-container__chevron")
const descEls = document.querySelectorAll(".description *")

window.addEventListener("load", () => {
    const load = gsap.timeline({ defaults: { ease: "power2.inOut" } })
    load.to(grid, { visibility: "visible", duration: 0.05 })
        .from(mainImg, {
            y: -50,
            opacity: 0,
            duration: 0.8,
        })
        .from(
            sideImg,
            {
                x: 20,
                opacity: 0,
                duration: 0.5,
            },
            "-=.5"
        )
        .from(leftPanel, {
            y: -50,
            opacity: 0,
            duration: 1,
        })
        .from(navigation, {
            opacity: 0,
            duration: 0.5,
        })
        .from(
            leftPanel.querySelector("h1"),
            {
                y: 50,
                opacity: 0,
                duration: 1.5,
            },
            "-=0.5"
        )
        .from(desc, {
            opacity: 0,
            duration: 0.5,
        })
        .from(
            descEls,
            {
                x: -20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
            },
            "-=0.3"
        )
})

const tl = gsap.timeline({
    paused: true,
    reversed: true,
})

tl.fromTo(
    menuLinks,
    {
        opacity: 0,
        height: 0,
    },
    {
        opacity: 1,
        height: "5rem",
        duration: 0.25,
    }
).fromTo(
    links,
    {
        x: -20,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
        ease: "power1.inOut",
        delay: (i) => i * 0.3,
    },
    "-=0.3"
)

menu.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse()
})
