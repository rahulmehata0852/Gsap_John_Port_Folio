const user = document.getElementById("user")
const dots = document.getElementById("dots")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const cta = document.getElementById("cta")
const navLink = document.querySelector(".nav-link")
console.log("app running");


const t1 = gsap.timeline()
t1.from(".navbar", { width: 0, duration: 1 })
t1.from(".nav-link", {
    y: "100%",
    opacity: 0,
    stagger: 0.2,
    duration: 1
})
t1.from(user, { y: "100vh", opacity: 0, duration: 2 })
    .from(dots, {
        rotation: 360,
        scale: 2,
        opacity: 0,
        durt1ation: 1
    })

t1.from(title, {
    x: "-200vh",
    durt1ation: 1
})

t1.from(desc, {
    x: "200vh",
    durt1ation: 1
})

t1.from("#cta", {
    opacity: 0,
    // scale: 1,
    durt1ation: 1,
    rotation: 360
})

gsap.from(".circle", { scale: 0, repeat: -1, yoyo: true, duration: 0.6 })
window.addEventListener("mousemove", function (event) {
    const x = event.pageX
    const y = event.pageY
    gsap.to(".circle", 0.7, { x, y })
    gsap.to(".tiny", 0.2, { x, y })
})



