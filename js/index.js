import { gsap } from "gsap"
import "./load"
import "./menu"
import { data } from "/data.json"

const prevNav = document.querySelector(".left-container__chevron .prev")
const nextNav = document.querySelector(".left-container__chevron .next")
const masterImg = document.querySelector(".master-image__img")
const sideImg = document.querySelector(".right-container__img")
let index =
    parseInt(document.querySelector(".description__index").textContent) - 1

const increaseIndex = (increment) => {
    index = index + increment
    if (index >= data.length) {
        index = 0
    } else if (index < 0) {
        index = data.length - 1
    }
    return index
}

const changeSlide = () => {
    const tl = gsap.timeline({ defaults: { ease: "Power2.inOut" } })
    tl.to(masterImg, { opacity: 0 })
    .to()
}

prevNav.addEventListener("click", () => {
    console.log("Previous")
    console.log(increaseIndex(-1))
})
nextNav.addEventListener("click", () => {
    console.log("Next")
    console.log(increaseIndex(1))
    // changeSlide()
})
