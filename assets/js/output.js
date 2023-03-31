const frontEndSkills = [
    { name: "html", percent: 100 },
    { name: "css", percent: 35 },
    { name: "js", percent: 15 },
    { name: "react", percent: 10 },
]
const backEndSkills = [
    { name: "Node JS", percent: 70 },
    { name: "Mongo DB", percent: 45 },
    { name: "SQL", percent: 25 },
    { name: "Express Js", percent: 90 },
]

const fe = document.getElementById("frontend")
const be = document.getElementById("backend")


display(frontEndSkills, fe)
display(backEndSkills, be)

function display(arr, el) {
    for (const item of arr) {
        el.innerHTML += `<div class="progress-bar">
        <div class="progress" style="width:${item.percent}%">${item.name}</div>
    </div>`
    }
}

gsap.registerPlugin(ScrollTrigger)
gsap.from(".progress", { width: 0, stagger: 0.2, scrollTrigger: ".progress" })