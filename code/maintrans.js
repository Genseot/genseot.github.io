//blah blah transitions here for main page
window.transitionTo = function(href) {document.querySelector('body');
setTimeout(function() {window.location.href = href})};

const xhttp = new XMLHttpRequest();
function loadIndex() {
xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
xhttp.open("GET", "index.txt");
xhttp.send();}
function loadAbout() {
xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
xhttp.open("GET", "about.txt");
xhttp.send();}
function loadStories() {
xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
xhttp.open("GET", "stories.txt");
xhttp.send();}

function loadBeyondConfirmation() {
xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
xhttp.open("GET", "/constellarium/confirmation.txt");
xhttp.send();}
