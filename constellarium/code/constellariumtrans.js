//GENERAL THINGS
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
	if (exploringWood < 10)
	{
		xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
		xhttp.open("GET", "/constellarium/beginning/wood/main.txt");
		xhttp.send();
	}
	if (exploringWood >= 10)
	{
		xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
		xhttp.open("GET", "/constellarium/beginning/wood/toshore.txt");
		xhttp.send();
	}
}

function loadWoodExploreOutcome()
{
	let airs = Math.floor(Math.random() * 101);
	exploringWood++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	if (airs < 25)
	{
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/explorenormal.txt");
		if (exploringWood < 10)
		{
			document.getElementById("displaychangingtext").innerHTML = "I come out dazed and weary; I stumble across that clearing yet again. These hours I spent under the stygian and silvered Wood may not have been all for nought though - I have become more intimate with the primaeval, prowling powers that pervade under the surface of its skin. My mind grows in harmony with the Wood's paths and ways - and it with me.";
			$('#displaychangingtext2').remove(); 
		}
	}
	else if (airs >= 25 && airs < 50)
	{
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/explorewood.txt");
		if (exploringWood < 10)
		{
			document.getElementById("displaychangingtext").innerHTML = "I follow some of these paths the creature scratched. Here, the roots and trees of the Wood are much more kinder than they are than normal, more light seems to break through the thick canopy, more candles light the way. I return to the clearing, and take note of some of the secret paths of the Wood.";
			document.getElementById("displaychangingtext2").innerHTML = "I follow the markings back to where they begun - the end of the path this time, as beginnings always have an end - and ends always have a beginning. I pick my way back to the clearing through the annoyances of the Wood.";
		}
	}
	else if (airs >= 50 && airs < 75)
	{
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/explorewarren.txt");
		if (exploringWood < 10)
		{
			document.getElementById("displaychangingtext").innerHTML = "I walk into its warrens, staying near the light of the Moon and the candles of the Wood. Within the entrance of the cave lies scrawlings, primitive drawings of the routes of the tangled Wood. I record some to memory, before swiftly leaving, for if the moths of the Wood have a strong appetite - then this must have an appetite stronger and more primal than those of the moths.";
			document.getElementById("displaychangingtext2").innerHTML = "I follow some of these paths the creature scratched. Here, the roots and trees of the Wood are much more kinder than they are than normal, more light seems to break through the thick canopy, more candles light the way. I return to the clearing, and take note of some of the secret paths of the Wood.";
		}
	}
	else
	{
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/exploregarden.txt");
		if (exploringWood < 10)
		{
			document.getElementById("displaychangingtext").innerHTML = "I cleave my path through a drooping canopy of thick vines, and a fantastical sight awaited - plump, red roses, moths flitting about, partaking in the Wood's gifts, before yielding so eagerly in the candle-flames that illuminate the scene like a tapestry. I flit among the moths for a while, learning their secrets to travelling the Wood, before settling upon having a drop of the rich, red nectar of the flowers. A singular plump, red drop -";
			document.getElementById("displaychangingtext2").innerHTML = "Through a red and viscous haze, I awake, sprawled in the grass and roots of the clearing, yet again. I do not remember what transpired, yet I remember more of the moth-secrets of travelling the Wood.";
		}
	}

	if (exploringWood >= 10)
	{
		document.getElementById("displaychangingtext").innerHTML = "I make my way through, but - a strange sound - water? I pick my way through the perils of the Wood towards the source of the noise. Whatever it is, it must prove useful in my expedition. I move between branch-throngs, moth-crowds, root-masses, avoiding the dangers and delving further within the Wood. The canopy overhead begins to fall away, the trees begin to thin, their candle's flames grow dimmer, the moonlight and starlight break through, illuminating my path in a pale tint -";
		$('#displaychangingtext2').remove(); 
	}
	xhttp.send();
}

function loadWoodPonderOutcome()
{
	let airs = Math.floor(Math.random() * 101);
	exploringWood++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	if (airs <= 25) 
	{
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/pondernormal.txt");
		if (exploringWood < 10)
		{
			document.getElementById("displaychangingtext").innerHTML = "I struggle for hours on end trudging through the ways of mind and memory - to see anything resembling what a potential path may be through my experiences through the Wood. I take attention to every miniscule detail of the Wood - yet it yields only little, tiny scraps of knowledge - this is all I've learnt for now, until inspiration strikes.";
			$('#displaychangingtext2').remove(); 
		}
	}
	else if (airs >= 25 && airs < 50)
	{
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/ponderinspiration.txt");
		if (exploringWood < 10)
		{
			document.getElementById("displaychangingtext").innerHTML = "I consider this path - what similarities it must have with other paths and routes through the Wood. The way the roots twine with one another, the candle's light, the way the trees grow - there must be something here, something important. I will keep this knowledge to myself, for now.";
			$('#displaychangingtext2').remove(); 
		}
	}
	else if (airs >= 50 && airs < 75)
	{
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/pondermoon.txt");
		if (exploringWood < 10)
		{
			document.getElementById("displaychangingtext").innerHTML = "The light shines brighter sometimes, shimmering and dancing beautifully and gracefully; at others, it might be dull, shivering and dancing sluggishly. This must mean something - the Moon knows night and dream better than most. Perhaps it illuminates the true path through its reflected light? Perhaps it must be my compass that I must follow? My mind swims with questions, the Moon looks on in the endless heavens - perhaps it will be my guide through the ways of the deep, dark Wood, and will guide me beyond - this is what I have learnt for now.";
			$('#displaychangingtext2').remove(); 
		}
	}
	else
	{
		xhttp.open("GET", "/constellarium/beginning/wood/outcome/ponderroots.txt");
		if (exploringWood < 10)
		{
			document.getElementById("displaychangingtext").innerHTML = "My fingernails come out, caked with dirt and mud and the muck of the Wood. I see the roots that travel deep beneath the Earth, following the paths of the roots above ground. I see the patterns that they yield to me - they follow a path. Each in their tangled knotwork eventually yield to a singular, unerring path - one that almost definitely shall yield to the heart of the Wood. This path that the roots follow, the ways they grow, a possibility of where the ways of the roots terminate - this is what scraps I have learnt.";
			$('#displaychangingtext2').remove(); 
		}
	}

	if (exploringWood >= 10)
	{
		document.getElementById("displaychangingtext").innerHTML =  "Suddenly - a breakthrough! This path I thought of - this must be a path to the heart, the Stars align correctly, the Moon refracts the light just the right way, this is where the roots lead. I memorise the twists and turns and terrain of this path - and set out.";
		document.getElementById("displaychangingtext2").innerHTML = "Travelling down the long ways of the Wood, I notice the patterns - the root's growth, the Moon shining above, the Stars watching. Here, I hear the sound of water. This must be it, I press on through the undergrowth. The canopy overhead begins to fall away, the trees begin to thin, their candle's flames grow dimmer, the moonlight and starlight break through, illuminating my path in a pale tint -";
	}
	xhttp.send();
}

function loadToShoreOutcome() 
{
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/wood/toshore.txt");
	xhttp.send();
}


// FUNCTIONS FOR SHORE
function loadShoreMain() 
{
	exploringShore++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/shore/shoremain.txt");
	if (exploringShore == 1)
	{
		document.getElementById("changeoptiontitle").innerHTML = `Look Across the Sea`;
		document.getElementById("changeoptiontext").innerHTML = `Something seems to be approaching, disturbing the still seas...`;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadShoreMainOutcome1()">Observe</actionbutton>`;
	}
	else if (exploringShore == 2)
	{
		document.getElementById("changeoptiontitle").innerHTML = `Approach the Boatman`;
		document.getElementById("changeoptiontext").innerHTML = `Its teeth twinkle in the starlight, its eyes hold something else - curiosity?`;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadShoreMainOutcome2()">Approach</actionbutton>`;
	}
	else if (exploringShore == 3)
	{
		document.getElementById("changeoptiontitle").innerHTML = `Payment?`;
		document.getElementById("changeoptiontext").innerHTML = `You feel a heavy weight in your pocket...`;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadShoreMainOutcome3()">Investigate</actionbutton>`;
	}
	else
	{
		document.getElementById("changeoptiontitle").innerHTML = `Boarding`;
		document.getElementById("changeoptiontext").innerHTML = `The Boatman climbs back into the boat, inviting you on board with a skeletal finger.`;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadToBoat()">Board</actionbutton>`;
	}
	xhttp.send();
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
	if (exploringSea == 1)
	{
		document.getElementById("changeoptiontitle").innerHTML = `Wait`;
		document.getElementById("changeoptiontext").innerHTML = `Slowly, slowly, the Constellarium grows in size across the horizon...`;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadBoatWaitOutcome1()">Wait</actionbutton>`;

		document.getElementById("changeoptiontitle2").innerHTML = `Look into the Sea`;
		document.getElementById("changeoptiontext2").innerHTML = `You see little glints of light under the waves, what are they?`;
		document.getElementById("changeoptionbutton2").innerHTML = `<actionbutton onclick="loadBoatLookOutcome1()">Look</actionbutton>`;
	}
	else if (exploringSea == 2)
	{
		document.getElementById("changeoptiontitle").innerHTML = `Wait More`;
		document.getElementById("changeoptiontext").innerHTML = `The boat rocks and sways on the Sea, the Constellarium is now almost at its original height, standing grand and majestic above all.`;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadBoatWaitOutcome2()">Wait</actionbutton>`;

		document.getElementById("changeoptiontitle2").innerHTML = `Look into the Sea Again`;
		document.getElementById("changeoptiontext2").innerHTML = `The waters are less murky, here. Something grand lurks beneath the waves, might you take a look?`;
		document.getElementById("changeoptionbutton2").innerHTML = `<actionbutton onclick="loadBoatLookOutcome2()">Look</actionbutton>`;
	}
	else
	{
		document.getElementById("changeoptiontitle").innerHTML = `Disembark`;
		document.getElementById("changeoptiontext").innerHTML = `The boat rocks before the bridge to the Constellarium. It awaits in silent certainty.`;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadBoatToBridgeOutcome()">Disembark</actionbutton>`;
		
		$('#action2').remove(); 
	}
	xhttp.send();
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
	if (exploringBridge == 1)
	{
		document.getElementById("changeoptiontitle").innerHTML = `Step by Step`;
		document.getElementById("changeoptiontext").innerHTML = `You have a ways to go until you approach the gates. Better start, then.`;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadBridgeMainOutcome1()">Travel</actionbutton>`;
	}
	else
	{
		document.getElementById("changeoptiontitle").innerHTML = `Approach the Gates`;
		document.getElementById("changeoptiontext").innerHTML = `The gates to the Constellarium are not much further, now. Only a little more to go -`;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadToGate()">Approach</actionbutton>`;
	}
	xhttp.send();
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

function loadGates()
{
	exploringGate++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/constellarium/beginning/bridge/gatemain.txt");
	if (exploringBridge == 1)
	{
		document.getElementById("changeoptiontitle").innerHTML = ``;
		document.getElementById("changeoptiontext").innerHTML = ``;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadGateMainOutcome1()"></actionbutton>`;
	}
	else
	{
		document.getElementById("changeoptiontitle").innerHTML = ``;
		document.getElementById("changeoptiontext").innerHTML = ``;
		document.getElementById("changeoptionbutton").innerHTML = `<actionbutton onclick="loadToConstellarium()"></actionbutton>`;
	}
	xhttp.send();
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
