const images = [
    "public/77.png", 
    "public/78.png", 
    "public/79.png", "public/79t.png", 
    "public/117.png", "public/117t.png", 
    "public/139.png", "public/139t.png", 
    "public/179.png", 
    "public/202.png", "public/202t.png", 
    "public/219.png", "public/219t.png", 
    "public/240.png", "public/240t.png", 
    "public/258.png", 
    "public/285.png", "public/285t.png", 
    "public/307.png", "public/307t.png", 
    "public/363.png", "public/363t.png", 
    "public/387.png", "public/387t.png", 
    "public/401.png", 
    "public/429.png", "public/429t.png", 
    "public/446.png", "public/446t.png", 
    "public/486.png", "public/486t.png", 
    "public/491.png", 
    "public/543.png", "public/543t.png", 
    "public/564.png", "public/564t.png", 
    "public/614.png", "public/614t.png", 
    "public/636.png", "public/636t.png", 
    "public/680.png", "public/680t.png", 
    "public/691.png", "public/691t.png", 
    "public/705.png",
]

window.addEventListener("load", function (event) {
  let randURL = images[Math.floor(Math.random() * images.length)]
  document.body.style.backgroundImage = "url(" + randURL + ")"
});