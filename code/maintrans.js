//blah blah transitions here for main page
async function loadIndex() {
  await fetch("index.txt")
  .then(response => response.text())
  .then((data) => { document.getElementById("storylet").innerHTML = data; })
}
async function loadAbout() {
  await fetch("about.txt")
  .then(response => response.text())
	.then((data) => { document.getElementById("storylet").innerHTML = data; })
}
async function loadStories() {
  await fetch("stories.txt")
	.then(response => response.text())
	.then((data) => { document.getElementById("storylet").innerHTML = data; })
}
async function loadMods() {
  await fetch("mods.txt")
	.then(response => response.text())
	.then((data) => { document.getElementById("storylet").innerHTML = data; })
}
async function loadCorruMods() {
  await fetch("/mods/corru.txt")
	.then(response => response.text())
	.then((data) => { document.getElementById("storylet").innerHTML = data; })
}
