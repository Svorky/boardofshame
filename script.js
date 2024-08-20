var i = 0;
function style() {
	let style1 = 'color: red; background-color: blue;'
	let style2 = 'color: blue; background-color: red;'
	if(i%2 == 0) document.body.style = style1;
	else document.body.style = style2;
	i++;
}
window.addEventListener("load", async (event) => {
	const response = await fetch("./shame_data.json")
	const data = await response.json()
	let board = document.getElementById("board")
	board.innerHTML = data.board.map(item => `<li>${item}`).join('')
	board.innerHTML += "<h2>Чистилище</h2>"
	board.innerHTML += data.limbo.map(item => `<li>${item}`).join('')
	style();
	setInterval(style, 3000);
});