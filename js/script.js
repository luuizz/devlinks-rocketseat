function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute("src", "./images/avatar-light-mode.png")
    } else {
        img.setAttribute("src", "./images/avatar-dark-mode.png")
    }

    if(html.classList.contains('light')) {
        img.setAttribute("alt", "Foto de Mayk Brito usando óculos com a lente preta, sorrindo e com o fundo tendo uma passagem de cores em azul e rosa.")
    } else {
        img.setAttribute("alt", "Foto de Mayk Brito usando óculos com a lente transparente, sorrindo e com o fundo tendo uma passagem de cores em azul e rosa.")
    }
}