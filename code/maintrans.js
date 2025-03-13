//blah blah transitions here for main page
window.transitionTo = function(href) {document.querySelector('body');
setTimeout(function() {window.location.href = href})};

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
