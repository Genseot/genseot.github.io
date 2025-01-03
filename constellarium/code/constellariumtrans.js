/*GENERAL THINGS*/

const xhttp = new XMLHttpRequest();
var excisedScar = false;

//EXPLORING
var exploringWood = 0;
var exploringShore = 0;
var exploringBoat = 0;
var exploringBridge = 0;
var exploringGate = 0;

// FUNCTIONS FOR WOOD
function loadIntroOutcome() 
{
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/wood/outcome/intro.txt");
	xhttp.send();
}

function loadWoodMain()
{
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/wood/main.txt");
	xhttp.send();
	if (exploringWood >= 10)
	{
		setTimeout(function(){$("#addcontinue").append(`
			<div class="action">
				<h2>My Mind's Compass</h2>
				<p>I think I have learnt a path into the heart of the Wood...</p> 
    				<p><b>- You unlocked this with Exploring the Wood 10.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadToShore()">Follow</actionbutton></p>
			</div>
			<br>
		`);}, 350);
	}
}

function loadWoodExploreOutcome()
{
	let airs = Math.floor(Math.random() * 101);
	exploringWood++;

	if (airs < 25)
	{
		xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/explorenormal.txt", true);
		xhttp.send();
		setTimeout(function(){$("#outcome").append(" (Exploring the Wood is now " + exploringWood + "/10)");}, 350);
	}
	else if (airs >= 25 && airs < 50)
	{
		xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/explorewood.txt", true);
		xhttp.send();
		setTimeout(function(){$("#outcome").append(" (Exploring the Wood is now " + exploringWood + "/10)");}, 350);
	}
	else if (airs >= 50 && airs < 75)
	{
		xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/explorewarren.txt", true);
		xhttp.send();
		setTimeout(function(){$("#outcome").append(" (Exploring the Wood is now " + exploringWood + "/10)");}, 350);
	}
	else
	{
		xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/exploregarden.txt", true);
		xhttp.send();
		setTimeout(function(){$("#outcome").append(" (Exploring the Wood is now " + exploringWood + "/10)");}, 350);
	}
}

function loadWoodPonderOutcome()
{
	let airs = Math.floor(Math.random() * 101);
	exploringWood++;

	if (airs <= 25) 
	{
		xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/pondernormal.txt");
		xhttp.send();
		setTimeout(function(){$("#outcome").append(" (Exploring the Wood is now " + exploringWood + "/10)");}, 350);
	}
	else if (airs >= 25 && airs < 50)
	{
		xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/ponderinspiration.txt");
		xhttp.send();
		setTimeout(function(){$("#outcome").append(" (Exploring the Wood is now " + exploringWood + "/10)");}, 350);
	}
	else if (airs >= 50 && airs < 75)
	{
		xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/pondermoon.txt");
		xhttp.send();
		setTimeout(function(){$("#outcome").append(" (Exploring the Wood is now " + exploringWood + "/10)");}, 350);
	}
	else
	{
		xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/ponderroots.txt");
		xhttp.send();
		setTimeout(function(){$("#outcome").append(" (Exploring the Wood is now " + exploringWood + "/10)");}, 350);
	}
}

function loadToShore() 
{
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/wood/outcome/toshore.txt");
	xhttp.send();
}


// FUNCTIONS FOR SHORE
function loadShoreMain() 
{
	exploringShore++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/shoremain.txt");
	xhttp.send();
	setTimeout(function(){
		if (exploringShore == 1)
		{
			$("#changeoptiontitle").append(`Look Across the Sea`); 
			$("#changeoptiontext").append(`Something seems to be approaching, disturbing the still seas...`); 
			$("#changeoptionbutton").append(`<actionbutton onclick="loadShoreMainOutcome1()">Observe</actionbutton>`);
		}
		else if (exploringShore == 2)
		{
			$("#changeoptiontitle").append(`Approach the Boatman`); 
			$("#changeoptiontext").append(`Its teeth twinkle in the starlight, its eyes hold something else - curiosity?`); 
			$("#changeoptionbutton").append(`<actionbutton onclick="loadShoreMainOutcome2()">Approach</actionbutton>`);
		}
		else if (exploringShore == 3)
		{
			$("#changeoptiontitle").append(`Payment?`); 
			$("#changeoptiontext").append(`I feel a heavy weight in my pocket...`); 
			$("#changeoptionbutton").append(`<actionbutton onclick="loadShoreMainOutcome3()">Investigate</actionbutton>`);
		}
		else
		{
			$("#changeoptiontitle").append(`Boarding`); 
			$("#changeoptiontext").append(`The Boatman climbs back into the boat, inviting me on board with a skeletal finger.`); 
			$("#changeoptionbutton").append(`<actionbutton onclick="loadToBoat()">Board</actionbutton>`);
		}
	}, 350);
}

function loadShoreMainOutcome1() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/outcome/shoremain1.txt");
	xhttp.send();
}
function loadShoreMainOutcome2() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/outcome/shoremain2.txt");
	xhttp.send();
}
function loadShoreMainOutcome3() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/outcome/shoremain3.txt");
	xhttp.send();
}
function loadToBoat() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/outcome/toboat.txt");
	xhttp.send();
}

function loadBoatMain() 
{
	exploringBoat++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/boatmain.txt");
	xhttp.send();
	setTimeout(function(){
		if (exploringBoat == 1)
		{
			$("#changeoptiontitle").append(`Wait`);
			$("#changeoptiontext").append(`Slowly, slowly, the dream-castle grows in size across the horizon...`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadBoatWaitOutcome1()">Wait</actionbutton>`);
	
			$("#changeoptiontitle2").append(`Look into the Sea`);
			$("#changeoptiontext2").append(`I see little glints of light under the waves, what are they?`);
			$("#changeoptionbutton2").append(`<actionbutton onclick="loadBoatLookOutcome1()">Look</actionbutton>`);
		}
		else if (exploringBoat == 2)
		{
			$("#changeoptiontitle").append(`Wait More`);
			$("#changeoptiontext").append(`The boat rocks and sways on the Sea, the dream-castle is now almost at its original height, standing grand and majestic above all.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadBoatWaitOutcome2()">Wait</actionbutton>`);
	
			$("#changeoptiontitle2").append(`Look into the Sea Again`);
			$("#changeoptiontext2").append(`The waters are less murky, here. Something grand lurks beneath the waves, might I take a look?`);
			$("#changeoptionbutton2").append(`<actionbutton onclick="loadBoatLookOutcome2()">Look</actionbutton>`);
		}
		else
		{
			$("#changeoptiontitle").append(`Disembark`);
			$("#changeoptiontext").append(`The boat rocks before the bridge to the dream-castle. It awaits in silent certainty.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadToBridge()">Disembark</actionbutton>`);
			
			$('#action2').remove(); 
		}
	}, 350);
}
function loadBoatWaitOutcome1() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/outcome/boatwait1.txt");
	xhttp.send();
}
function loadBoatWaitOutcome2() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/outcome/boatwait2.txt");
	xhttp.send();
}
function loadBoatLookOutcome1() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/outcome/boatlook1.txt");
	xhttp.send();
}
function loadBoatLookOutcome2() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/outcome/boatlook2.txt");
	xhttp.send();
}
function loadToBridge() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/outcome/tobridge.txt");
	xhttp.send();
}


// FUNCTIONS FOR BRIDGE
function loadBridgeMain() 
{
	exploringBridge++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/bridge/bridgemain.txt");
	xhttp.send();
	setTimeout(function(){
		if (exploringBridge == 1)
		{
			$("#changeoptiontitle").append(`Step by Step`);
			$("#changeoptiontext").append(`I have a ways to go until I approach the gates. Better start, then.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadBridgeMainOutcome1()">Travel</actionbutton>`);
		}
		else
		{
			$("#changeoptiontitle").append(`Approach the Gates`);
			$("#changeoptiontext").append(`The gates to the dream-castle are not much further, now. Only a little more to go -`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadToGate()">Approach</actionbutton>`);
		}
	}, 350);
}
function loadBridgeMainOutcome1() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/bridge/outcome/bridgemain1.txt");
	xhttp.send();
}
function loadToGate() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/bridge/outcome/togate.txt");
	xhttp.send();
}

function loadGateMain()
{
	exploringGate++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/bridge/gatemain.txt");
	xhttp.send();
	setTimeout(function(){
		if (exploringGate == 1)
		{
			$("#changeoptiontitle").append(`Prepare to Open the Gates`);
			$("#changeoptiontext").append(`I must prepare to open them, if I can.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadGateMainOutcome1()">Prepare</actionbutton>`);
		}
		else
		{
			$("#changeoptiontitle").append(`Open the Gates`);
			$("#changeoptiontext").append(`The gates will open with the help of the Stars, who have formed into Constellations.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadToConstellarium()">Open</actionbutton>`);
		}
	}, 350);
}
function loadGateMainOutcome1() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/bridge/outcome/gatemain1.txt");
	xhttp.send();
}
function loadToConstellarium() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/bridge/outcome/toconstellarium.txt");
	xhttp.send();
}

function exciseScar()
{
	excisedScar = true;	
}
