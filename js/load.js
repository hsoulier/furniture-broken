import { gsap } from "gsap"

const grid = document.getElementById("grid-master")
const leftPanel = document.querySelector(".left-container")
const mainImg = document.querySelector(".master-image")
const sideImg = document.querySelector(".side-image")
const desc = document.querySelector(".description")
const navigation = document.querySelector(".left-container__chevron")
const descEls = document.querySelectorAll(".description *")

window.addEventListener("load", () => {
    const load = gsap.timeline({ defaults: { ease: "power2.inOut" } })
    load.to(grid, { visibility: "visible", duration: 0.1 })
        .from(mainImg, {
            y: -50,
            opacity: 0,
            duration: 1,
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
        .from(
            leftPanel,
            {
                y: -50,
                opacity: 0,
                duration: 1,
            },
            "-=.5"
        )
        .from(
            navigation,
            {
                opacity: 0,
                duration: 0.5,
            },
            "-=.3"
        )
        .from(
            leftPanel.querySelector("h1"),
            {
                y: 50,
                opacity: 0,
                duration: 0.8,
            },
            "-=0.5"
        )
        .from(
            desc,
            {
                opacity: 0,
                duration: 0.5,
            },
            "-=1.5"
        )
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
