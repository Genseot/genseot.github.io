//blah blah transitions here for main page
window.transitionTo = function(href) {document.querySelector('body');
setTimeout(function() {window.location.href = href})};

function loadIndex() {const xhttp = new XMLHttpRequest();
xhttp.onload = function() {document.getElementsByClassName("mainsitestorylet").innerHTML = this.responseText;};
xhttp.open("GET", "index.txt");
xhttp.send();}
function loadAbout() {const xhttp = new XMLHttpRequest();
xhttp.onload = function() {document.getElementsByClassName("mainsitestorylet").innerHTML = this.responseText;};
xhttp.open("GET", "about.txt");
xhttp.send();}
function loadStories() {const xhttp = new XMLHttpRequest();
xhttp.onload = function() {document.getElementsByClassName("mainsitestorylet").innerHTML = this.responseText;};
xhttp.open("GET", "stories.txt");
xhttp.send();}

/*function loadBeyondGatesDream() {const xhttp = new XMLHttpRequest();
xhttp.onload = function() {document.getElementsByClassName("mainsitestorylet").innerHTML = this.responseText;};
xhttp.open("GET", "constellarium.txt");
xhttp.send();}
function loadCrystallineHeart() {const xhttp = new XMLHttpRequest();
xhttp.onload = function() {document.getElementsByClassName("mainsitestorylet").innerHTML = this.responseText;};
xhttp.open("GET", "about.txt");
xhttp.send();}*/
