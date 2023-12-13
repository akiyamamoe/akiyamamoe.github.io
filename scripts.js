const images = [
    "https://static.miraheze.org/projectsekaiwiki/thumb/c/c2/Mizuki_19_art.png/1280px-Mizuki_19_art.png",
]

window.addEventListener("load", function (event) {
  let randURL = images[Math.floor(Math.random() * images.length)]
  document.body.style.backgroundImage = "url(" + randURL + ")"
});