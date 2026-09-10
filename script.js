function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/assets/✰𝐘𝐄𝐀𝐆𝐄𝐑𝐍𝐗.jpg")
    img.setAttribute("alt", "GEAR 5")
   } else {
    img.setAttribute("src", "assets/assets/355573333103791113.jpg")
    img.setAttribute("alt", "BASE GEAR")
  }

}
