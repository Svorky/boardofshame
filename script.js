let board = document.getElementById("board")
let limbo = document.getElementById("limbo")

window.addEventListener("load", async (event) => {
    const response = await fetch("./data.json")
    const data = await response.json()
    board.innerHTML = data.board.map(item => `<p>${item}</p>`).join('')
    board.innerHTML += "<h3>Чистилище</h3>"
    board.innerHTML += data.limbo.map(item => `<p>${item}</p>`).join('')
  });