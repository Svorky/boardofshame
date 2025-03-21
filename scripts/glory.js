import { blockIcon } from './lib/icons.js';

window.addEventListener("load", async (event) => {
  const response = await fetch("../data/data.json");
  /** @type {User[]} */
  const data = await response.json();
  let board = document.getElementById("gloryBoard");
  board.innerHTML = data
    .filter((user) => user.list_name === "glory")
    .map((item) => `<p><span class='username'><b>${item.name}</b>${item.status === 'banned' ? blockIcon : ''}</span> – <i>${item.reason}</i></p>`)
    .join("");
});