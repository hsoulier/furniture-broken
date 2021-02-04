import { gsap } from "gsap"
import { description } from "/data.json"

const prevNav = document.querySelector(".left-container__chevron .prev")
const nextNav = document.querySelector(".left-container__chevron .next")
const masterImg = Array.from(document.querySelectorAll(".master-image__img"))
const masterContainer = document.querySelector(".master-image__container")
const sideContainer = document.querySelector(".side-image__container")
const numberEl = document.querySelector(".description__index")
const descriptionEls = document.querySelectorAll(".description *")
// let number = parseInt(numberEl.textContent)
let index = 0

const increaseIndex = (increment) => {
    // number += increment
    index += increment
    if (index >= masterImg.length) {
        index = 0
        // number = 1
    } else if (index < 0) {
        // number = masterImg.length
        index = masterImg.length - 1
    }
    changeSlide()
}

const changeSlide = () => {
    console.log(masterImg[index])
    const tl = gsap.timeline({
        defaults: { ease: "Power2.inOut", duration: 0.5, stagger: 0.1 },
    })
    if (index === 0) {
        tl.to([masterContainer, sideContainer], { translateX: 0 })
    } else {
        tl.to([masterContainer, sideContainer], {
            translateX: `${(100 / 4) * -index}%`,
        })
    }
    tl.to(
        descriptionEls,
        {
            opacity: 0,
            x: -10,
            duration: 0.15,
            onComplete: () => {
                numberEl.textContent = `0${index + 1}`
                descriptionEl.textContent = description[index]
            },
        },
        "-=.25"
    ).to(descriptionEls, { opacity: 1, x: 0 })
}

prevNav.addEventListener("click", () => {
    console.log("Previous")
    increaseIndex(-1)
})
nextNav.addEventListener("click", () => {
    console.log("Next")
    increaseIndex(1)
})
