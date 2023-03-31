const projects = [
    {
        name: "Todo",
        image: "https://images.unsplash.com/photo-1680055199554-a39e82ebc6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        url: "https://www.w3schools.com/",
        desc: "Lorem"
    },
    {
        name: "Game",
        image: "https://images.unsplash.com/photo-1680055199554-a39e82ebc6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        url: "https://www.w3schools.com/",
        desc: "Lorem"
    },
    {
        name: "Money Manager",
        image: "https://images.unsplash.com/photo-1680055199554-a39e82ebc6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        url: "https://www.w3schools.com/",
        desc: "Lorem"
    },
    {
        name: "Todo",
        image: "https://images.unsplash.com/photo-1680055199554-a39e82ebc6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        url: "https://www.w3schools.com/",
        desc: "Lorem"
    }
]

let str = ""
for (const item of projects) {
    str += `
<div class="card">
<img src="${item.image}" alt="">
<div class="card-body">
<h1>${item.name}</h1>
<p>${item.desc}</p>
<a href="${item.url}">Visit</a>
</div>
</div>`
}

document.getElementById("projects").innerHTML = str

gsap.registerPlugin(ScrollTrigger)
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card",
        scrub: 1,
        end: "+=200"
    },
    scale: 0,
    rotation: 360,
    stagger: 0.5
}) 