/*GENERAL THINGS*/
const xhttp = new XMLHttpRequest();
var excisedScar = false;

//EXPLORING
var exploringWood = 0;
var exploringShore = 0;
var exploringBoat = 0;
var exploringBridge = 0;
var exploringGate = 0;
var exploringRecordatium = 0;

const constellationHelp = [];
var exploringGardens = 0;
var exploringHeart = 0;
var exploringGrove = 0;
var exploringPrecipice = 0;
var exploringSands = 0;
var exploringShores = 0;
var exploringSanctuary = 0;
var exploringChandlery = 0;
var exploringCrossroads = 0;
var exploringReflectory = 0;

// FUNCTIONS FOR WOOD
function ExploringWood() {
	setTimeout(function(){
		$("#outcome").append(" (Exploring the Wood is now " + exploringWood + "/10)");
	}, 500);
}
function ContinueWood() {
	setTimeout(function(){$("#addcontinue").append(`
		<div class="action">
			<h2>My Mind's Compass</h2>
			<p>I think I have found a path into the heart of the Wood...</p> 
    			<p><b>- You unlocked this with having Exploring the Wood at 10 or more.<b></p>
			<p style="text-align:right"><actionbutton onclick="loadToShore()">Follow</actionbutton></p>
		</div>
		<br>
	`);}, 500);
}



function loadIntroOutcome() 
{
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/wood/outcome/intro.txt");
	xhttp.send();
}

function loadWoodMain()
{
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/wood/main.txt");
	xhttp.send();
	if (exploringWood >= 10)
	{
		ContinueWood();
	}
}

function loadWoodExploreOutcome()
{
	let airs = Math.floor(Math.random() * 101);
	exploringWood++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	if (airs < 25)
	{
		xhttp.open("GET", "/gatesofdream/beginning/wood/outcome/explore/explorenormal.txt", true);
	}
	else if (airs >= 25 && airs < 50)
	{
		xhttp.open("GET", "/gatesofdream/beginning/wood/outcome/explore/explorewood.txt", true);
	}
	else if (airs >= 50 && airs < 75)
	{
		xhttp.open("GET", "/gatesofdream/beginning/wood/outcome/explore/explorewarren.txt", true);
	}
	else
	{
		xhttp.open("GET", "/gatesofdream/beginning/wood/outcome/explore/exploregarden.txt", true);
	}
	xhttp.send();
	ExploringWood();
}

function loadWoodPonderOutcome()
{
	let airs = Math.floor(Math.random() * 101);
	exploringWood++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	if (airs <= 25) 
	{
		xhttp.open("GET", "/gatesofdream/beginning/wood/outcome/ponder/pondernormal.txt");
	}
	else if (airs >= 25 && airs < 50)
	{
		xhttp.open("GET", "/gatesofdream/beginning/wood/outcome/ponder/ponderinspiration.txt");
	}
	else if (airs >= 50 && airs < 75)
	{
		xhttp.open("GET", "/gatesofdream/beginning/wood/outcome/ponder/pondermoon.txt");
	}
	else
	{
		xhttp.open("GET", "/gatesofdream/beginning/wood/outcome/ponder/ponderroots.txt");
	}
	xhttp.send();
	ExploringWood();
}

function loadToShore() 
{
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/wood/outcome/toshore.txt");
	xhttp.send();
}


// FUNCTIONS FOR SHORE
function ShoreMainOptions() {
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
			$("#changeoptiontext").append(`The Boatman climbs back into its rowboat, inviting me on board with a skeletal finger.`); 
			$("#changeoptionbutton").append(`<actionbutton onclick="loadToBoat()">Board</actionbutton>`);
		}
	}, 500);
}
function BoatMainOptions() {
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
			$("#changeoptiontitle").append(`Wait Longer`);
			$("#changeoptiontext").append(`The boat rocks and sways on the Sea, the dream-castle is now almost at its original height, standing grand and majestic above all.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadBoatWaitOutcome2()">Wait</actionbutton>`);
	
			$("#changeoptiontitle2").append(`Look into the Sea Again`);
			$("#changeoptiontext2").append(`The waters are less murky, here. Something grand lurks beneath the waves. Might I take a look?`);
			$("#changeoptionbutton2").append(`<actionbutton onclick="loadBoatLookOutcome2()">Look</actionbutton>`);
		}
		else
		{
			$("#changeoptiontitle").append(`Disembark`);
			$("#changeoptiontext").append(`The boat rocks before the bridge to the dream-castle. It awaits in silent certainty.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadToBridge()">Disembark</actionbutton>`);
			
			$('#action2').remove(); 
		}
	}, 500);
}




function loadShoreMain() 
{
	exploringShore++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/shoremain.txt");
	xhttp.send();

	ShoreMainOptions();
}

function loadShoreMainOutcome1() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/outcome/shore/shoremain1.txt");
	xhttp.send();
}
function loadShoreMainOutcome2() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/outcome/shore/shoremain2.txt");
	xhttp.send();
}
function loadShoreMainOutcome3() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/outcome/shore/shoremain3.txt");
	xhttp.send();
}
function loadToBoat() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/outcome/shore/toboat.txt");
	xhttp.send();
}

function loadBoatMain() 
{
	exploringBoat++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/boatmain.txt");
	xhttp.send();

	BoatMainOptions();
}
function loadBoatWaitOutcome1() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/outcome/boat/boatwait1.txt");
	xhttp.send();
}
function loadBoatWaitOutcome2() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/outcome/boat/boatwait2.txt");
	xhttp.send();
}
function loadBoatLookOutcome1() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/outcome/boat/boatlook1.txt");
	xhttp.send();
}
function loadBoatLookOutcome2() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/outcome/boat/boatlook2.txt");
	xhttp.send();
}
function loadToBridge() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/shore/outcome/tobridge.txt");
	xhttp.send();
}


// FUNCTIONS FOR BRIDGE
function BridgeMainOptions() {
	setTimeout(function(){
		if (exploringBridge == 1)
		{
			$("#changeoptiontitle").append(`Step by Step`);
			$("#changeoptiontext").append(`I have a ways to go until I approach the gates. Better start, then.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadBridgeMainOutcome()">Travel</actionbutton>`);
		}
		else
		{
			$("#changeoptiontitle").append(`Approach the Gates`);
			$("#changeoptiontext").append(`The gates to the dream-castle are not much further, now. Only a little more to go -`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadToGate()">Approach</actionbutton>`);
		}
	}, 500);
}
function GateMainOptions() {
	setTimeout(function(){
		if (exploringGate == 1)
		{
			$("#changeoptiontitle").append(`Prepare`);
			$("#changeoptiontext").append(`I must prepare to open the gates before me, if I can.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadGateMainOutcome()">Prepare</actionbutton>`);
		}
		else
		{
			$("#changeoptiontitle").append(`Open the Gates`);
			$("#changeoptiontext").append(`The gates will open under the decree of the Stars. I only need to wait.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadToRecordatium()">Open</actionbutton>`);
		}
	}, 500);
}



function loadBridgeMain() 
{
	exploringBridge++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/bridge/bridgemain.txt");
	xhttp.send();

	BridgeMainOptions();
}
function loadBridgeMainOutcome() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/bridge/outcome/bridgemain.txt");
	xhttp.send();
}
function loadToGate() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/bridge/outcome/togate.txt");
	xhttp.send();
}

function loadGateMain()
{
	exploringGate++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/bridge/gatemain.txt");
	xhttp.send();

	GateMainOptions();
}
function loadGateMainOutcome() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/bridge/outcome/gatemain.txt");
	xhttp.send();
}
function loadToRecordatium() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/beginning/bridge/outcome/torecordatium.txt");
	xhttp.send();
}
function loadRecordatiumIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/recordatiumintro.txt");
	xhttp.send();
}



// CONSTELLARIUM FUNCTIONS
// RECORDATIUM FUNCTIONS
function ExploringRecordatium() {
	setTimeout(function() {
		$("#outcome").append(" (Exploring the Recordatium is now " + exploringRecordatium + "/10)");
	}, 500);
}
function ContinueRecordatium() {
	setTimeout(function() {
		$("#addcontinue").append(`
			<div class="action">
				<h2>My Mind's Compass</h2>
				<p>I think I have found a way into the further reaches of the Constellarium...</p> 
    				<p><b>- You unlocked this with having Exploring the Recordatium at 10 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadToChambersLiminal1()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}



function loadRecordatiumMain() { 
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/recordatium/recordatiummain.txt");
	xhttp.send();
	if (exploringRecordatium >= 10) {
		ContinueRecordatium();
	}
}
function loadRecordatiumExplore() {
	let airs = Math.floor(Math.random() * 101);
	exploringRecordatium++;

	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	if (airs < 20) {
		xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/reminiscenceroom.txt");
	}
	else if (airs >= 20 && airs < 40) {
		xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/treeoflight.txt");
	}
	else if (airs >= 40 && airs < 60) {
		xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/librariansoffice.txt");
	}
	else if (airs >= 60 && airs < 80) {
		xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/grandstaircase.txt");
	}
	else {
		let aisleAirs = Math.floor(Math.random() * 101);
		if (aisleAirs < 10) {
			xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/circles/rosecircle.txt");
		}
		else if (aisleAirs >= 10 && aisleAirs < 20) {
			xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/circles/heartcircle.txt");
		}
		else if (aisleAirs >= 20 && aisleAirs < 30) {
			xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/circles/crystalcircle.txt");
		}
		else if (aisleAirs >= 30 && aisleAirs < 40) {
			xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/circles/galecircle.txt");
		}
		else if (aisleAirs >= 40 && aisleAirs < 50) {
			xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/circles/flamecircle.txt");
		}
		else if (aisleAirs >= 50 && aisleAirs < 60) {
			xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/circles/scarcircle.txt");
		}
		else if (aisleAirs >= 60 && aisleAirs < 70) {
			xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/circles/starcircle.txt");
		}
		else if (aisleAirs >= 70 && aisleAirs < 80) {
			xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/circles/candlecircle.txt");
		}
		else if (aisleAirs >= 80 && aisleAirs < 90) {
			xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/circles/thresholdcircle.txt");
		}
		else {
			xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/explore/circles/mirrorcircle.txt");
		}
	}
	xhttp.send();
	ExploringRecordatium();
}

function loadToChambersLiminal1() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/tochambersliminal1.txt");
	xhttp.send();
}
function loadToChambersLiminal2() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/recordatium/outcome/tochambersliminal2.txt");
	xhttp.send();
}


// CHAMBERS LIMINAL FUNCTIONS 
function ChambersLiminalOptions() {
	setTimeout(function(){
		if (!constellationHelp.includes("Rose")) {
			$("#option1title").append(`
				A Rose-Twined Passage 
			`);
			$("#option1body").append(`
				Before me lies one of the passages of the Chambers Liminal - a way into one of the Ten's Domains. The entrance to this passage is twined with ruby-red roses, sharp brambles, and thick roots. The roses bloom grandly, displaying their glory and splendour for all to see - the petals are steeped in and drip a sort of deep-red viscous liquid. This passage must lead to the Domain of the Rose.
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToGarden()">Enter</actionbutton>
			`);	
		}
		else if (!constellationHelp.includes("Heart")) {
			$("#option1title").append(`
				A Stone-Toothed Passage
			`);
			$("#option1body").append(`
				Before me lies another passage - another artery - of the Chambers Liminal. Here, the passage is crammed with stalactites and stalagmites, biting down through the ceilings and the floors like gnashing teeth of a primal mouth. I can see the flickers of flames held in braziers within, and primaeval carvings upon the walls leading into this cavern. This passage will lead to the Domain of the Heart.  
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToHeart()">Enter</actionbutton>
			`);				
		}
		else if (!constellationHelp.includes("Crystal")) {
			$("#option1title").append(`
				A Starry Passage
			`);
			$("#option1body").append(`
				Before me lies another passage of the Chambers Liminal - open-aired, for all the Stars to see--yet still claustrophobic in nature. Embedded within the stone walls are faceted memory-crystals and echo-shards in multitudes and bigger shards of both kinds impale the ground--like spears. Looking from afar, one might mistake these as the heavens above, gleaming and scintillating with pin-pricks of light. This passage will surely lead to the Domain of the Crystal.
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToGrove()">Enter</actionbutton>
			`);	
		}
		else if (!constellationHelp.includes("Gale")) {
			$("#option1title").append(`
				A Rain-Slick Passage
			`);
			$("#option1body").append(`
				Before me lies another passage of the Chambers Liminal. Coursing through the veins of this artery is not blood, but rather, the gales and the tears of the skies above. The cracks between the stonework of this passage are slick and slippery with rain as it streams down into the chambers in which I stand. The gales travelling through this passage ruffle my clothes - I might even be able to hear whispering, if I listen close enough. This passage will lead to the Domain of the Gale.
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToPrecipice()">Enter</actionbutton>
			`);	
		}
		else if (!constellationHelp.includes("Flame")) {
			$("#option1title").append(`
				A Sand-Swept Passage
			`);
			$("#option1body").append(`
				Before me lies another passage of the Chambers Liminal. Little particles and grains of sand sweep through little gales that pass through this passage. I can hear the crackling of flames and feel the heat of the crucibles that work beyond this passage through those gales that pass here. Little snakes of fire slip through the cracks in the stonework of the passage, here, I'd better be a little careful. This passage will lead to the Domain of the Flame.
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToSands()">Enter</actionbutton>
			`);	
		}
		else if (!constellationHelp.includes("Scar")) {
			$("#option1title").append(`
				A Blood-Steeped Passage
			`);
			$("#option1body").append(`
				Before me lies another passage - a true artery - of the Chambers Liminal. Coursing through the cracks of the stonework of this passage is blood, drop by drop flowing down into these chambers, carrying its sickly-sweet scent. Piercing through the stonework are slivers of steel perforating the passageway - I'll need to be careful, of course, as these are razor-sharp. This passage must lead to the Domain of the Scar.
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToShores()">Enter</actionbutton>
			`);	
		}
		else if (!constellationHelp.includes("Star")) {
			$("#option1title").append(`
				A Silent Passage
			`);
			$("#option1body").append(`
				Before me lies another passage of the Chambers Liminal. Drifting softly, snow begins to settle upon the ground, carried by winds drifting through the passageways. This passage is almost completely silent - the winds don't make any sound, neither does the snow; it's almost as if a mantle of silence was placed over this passage - nothing else, even from the outside - can be heard. Nothing. This passage must lead to the Domain of the Star.
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToSanctuary()">Enter</actionbutton>
			`);	
		}
		else if (!constellationHelp.includes("Candle")) {
			$("#option1title").append(`
				A Candlelit Passage
			`);
			$("#option1body").append(`
				Before me lies another passage of the Chambers Liminal. Its entrance is almost entirely covered in wax - wax that candle-stubs penetrate out of, their wicks alight with a dancing flame. The cracks between the brickwork of the passage are almost entirely sealed in this wax, with yet more candles dotted about, lighting the way into the passage's depths. This passage will lead to the Domain of the Candle.
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToChandlery()">Enter</actionbutton>
			`);	
		}
		else if (!constellationHelp.includes("Threshold")) {
			$("#option1title").append(`
				A Shadow-Mantled Passage
			`);
			$("#option1body").append(`
				Before me lies another passage of the Chambers Liminal. This one is cloaked in and courses with an unnatural thick, inky-black darkness, bleeding a little out of the entrance - before disappating into regular darkness, of which the starlight melts away. In the passage's depths, I can see small lights dotted about, a guiding hand through this heavy shadow. This passage will lead to the Domain of the Threshold.
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToCrossroads()">Enter</actionbutton>
			`);	
		}
		else if (!constellationHelp.includes("Mirror")) {
			$("#option1title").append(`
				A Silvered Passage
			`);
			$("#option1body").append(`
				Before me lies another passage of the Chambers Liminal. Strewn about on the walls lie mirrors, polishd and gilded and carved to an almost-obsessive degree. They stand in their silent, ever-watching, ever-reflecting sentinel. Flowing upon the floors of this passage is a layer of water - a turquoise murky-blue, yet it is as reflective as its silvered bretheren. This passage must lead to the Domain of the Mirror.
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToReflectory()">Enter</actionbutton>
			`);	
		}
		else {
			$("#option1title").append(`
				A Passage of Translucent Horn
			`);
			$("#option1body").append(`
				I walk with full authority of the Ten. Where I travel, they shall follow behind me. Where I present myself, they shall herald me. And where I must travel to and present myself will reveal itself to me, as the Ten will have decreed for it to leave its shadow, and announce itself to the light. At the end of this passage I shall meet my destiny, and the Ten shall be its harbingers.
			`);
			$("#option1button").append(`
				<actionbutton onclick="loadChambersToDreamGate()">Approach</actionbutton>
			`);	
		}
	}, 500);
}

function loadChambersLiminalMain() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/chambersliminalmain.txt");
	xhttp.send();
	ChambersLiminalOptions();
}


// GARDENS FUNCTIONS
function ContinueGardens() {
	setTimeout(function(){
		$("#addcontinue").append(`
			<div class="action">
				<h2>Approaching the Heart</h2>
				<p>As I cleave through the final curtain of vines, I am met with the heart of the Rosen Gardens...</p> 
    			<p><b>- You unlocked this with having Exploring the Rosen Gardens at 3 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadGardensToHeart()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}
function ExploringGardens() {
	setTimeout(function() {
		$("#outcome").append(" (Exploring the Rosen Gardens is now " + exploringGardens + "/3)");
	}, 500);
}
function ChangeGardensOptions() {
	setTimeout(function() {
		if (exploringGardens == 0) {
			$("#changeoptiontitle").append(`Gather`);
			$("#changeoptiontext").append(`To perform the rites, I must gather something from among the roses and the trees.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadGardensRite()">Gather</actionbutton>`);
		}
		else if (exploringGardens == 1) {
			$("#changeoptiontitle").append(`Prepare`);
			$("#changeoptiontext").append(`Now, to prepare the rites - to place everything in the proper order and the proper manner.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadGardensRite()">Prepare</actionbutton>`);
		}
		else if (exploringGardens == 2) {
			$("#changeoptiontitle").append(`Perform`);
			$("#changeoptiontext").append(`I must recite the words, perform the actions, pray the Rose looks kindly upon me.`);
			$("#changeoptionbutton").append(`<actionbutton onclick="loadGardensRite()">Perform</actionbutton>`);
		}
	}, 500);
}

function loadChambersToGarden() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/outcome/togardens.txt");
	xhttp.send();
}
function loadGardensIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/gardens/gardensexplore.txt");
	xhttp.send();
	if (exploringGardens >= 3) {
		ContinueGardens();
	}
}
function loadGardensExplore() {
	let airs = Math.floor(Math.random() * 100);
	exploringGardens++;
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	if (airs < 33) {
		xhttp.open("GET", "/gatesofdream/constellarium/gardens/outcome/explore/explore1.txt");
	}
	else if (airs >= 33 && airs < 66) {
		xhttp.open("GET", "/gatesofdream/constellarium/gardens/outcome/explore/explore2.txt");
	}
	else {
		xhttp.open("GET", "/gatesofdream/constellarium/gardens/outcome/explore/explore3.txt");
	}
	xhttp.send();
	ExploringGardens();
}
function loadGardensToHeart() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/gardens/outcome/toheart.txt");
	xhttp.send();
	exploringGardens = 0;
}
function loadGardensHeart() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/gardens/gardensheart.txt");
	xhttp.send();
	ChangeGardensOptions();
}
function loadGardensRite() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	if (exploringGardens == 0) {
		xhttp.open("GET", "/gatesofdream/constellarium/gardens/outcome/preparation/gather.txt");
	}
	else if (exploringGardens == 1) {
		xhttp.open("GET", "/gatesofdream/constellarium/gardens/outcome/preparation/prepare.txt");
	}	
	else if (exploringGardens == 2) {
		xhttp.open("GET", "/gatesofdream/constellarium/gardens/outcome/preparation/perform.txt");
	}
	xhttp.send();
	exploringGardens++;
}


// HEART FUNCTIONS
function ContinueHeart() {
	setTimeout(function(){
		$("#addcontinue").append(`
			<div class="action">
				<h2>Approaching the Heart</h2>
				<p>As I squeeze through the final rock faces, I am met with the heart of the Heart...</p> 
    				<p><b>- You unlocked this with having Exploring the Heart at 3 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadHeartToHeart()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}
function ExploringHeart() {
	setTimeout(function(){
		$("#outcome").append(" (Exploring the Heart is now " + exploringHeart + "/3)");
	}, 500);
}

function loadChambersToHeart() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/outcome/toheart.txt");
	xhttp.send();
}
function loadHeartIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/heart/heartexplore.txt");
	xhttp.send();
}


// GROVE FUNCTIONS
function ContinueGrove() {
	setTimeout(function(){
		$("#addcontinue").append(`
			<div class="action">
				<h2>Approaching the Heart</h2>
				<p>As I pass through a field of crystals, I am met with the heart of the Starlit Grove...</p> 
    				<p><b>- You unlocked this with having Exploring the Grove at 3 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadGroveToHeart()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}
function ExploringGrove() {
	setTimeout(function(){
		$("#outcome").append(" (Exploring the Starlit Grove is now " + exploringGrove + "/3)");
	}, 500);
}

function loadChambersToGrove() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/outcome/togrove.txt");
	xhttp.send();
}
function loadGroveIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/grove/groveexplore.txt");
	xhttp.send();
}


// PRECIPICE FUNCTIONS
function ContinuePrecipice() {
	setTimeout(function(){
		$("#addcontinue").append(`
			<div class="action">
				<h2>Approaching the Heart</h2>
				<p>As I approach the storm's eye, I am met with the heart of the Precipice...</p> 
    				<p><b>- You unlocked this with having Exploring the Precipice at 3 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadPrecipiceToHeart()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}
function ExploringPrecipice() {
	setTimeout(function(){
		$("#outcome").append(" (Exploring the Precipice is now " + exploringPrecipice + "/3)");
	}, 500);
}

function loadChambersToPrecipice() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/outcome/toprecipice.txt");
	xhttp.send();
}
function loadPrecipiceIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/precipice/precipiceexplore.txt");
	xhttp.send();
}


// SANDS FUNCTIONS
function ContinueSands() {
	setTimeout(function(){
		$("#addcontinue").append(`
			<div class="action">
				<h2>Approaching the Heart</h2>
				<p>As I crest the final dune-top, I am met with the heart of the Sunswept Sands...</p> 
    				<p><b>- You unlocked this with having Exploring the Sunswept Sands at 3 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadSandsToHeart()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}
function ExploringSands() {
	setTimeout(function(){
		$("#outcome").append(" (Exploring the Sunswept Sands is now " + exploringSands + "/3)");
	}, 500);
}

function loadChambersToSands() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/outcome/tosands.txt");
	xhttp.send();
}
function loadSandsIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/sands/sandsexplore.txt");
	xhttp.send();
}


// SHORES FUNCTIONS
function ContinueShores() {
	setTimeout(function(){
		$("#addcontinue").append(`
			<div class="action">
				<h2>Approaching the Heart</h2>
				<p>As I approach the scar within the sky, I am met with the heart of the Bloodsteeped Shores...</p> 
    				<p><b>- You unlocked this with having Exploring the Bloodsteeped Shores at 3 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadShoresToHeart()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}
function ExploringShores() {
	setTimeout(function(){
		$("#outcome").append(" (Exploring the Bloodsteeped Shores is now " + exploringShores + "/3)");
	}, 500);
}

function loadChambersToShores() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/outcome/toshores.txt");
	xhttp.send();
}
function loadShoresIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/shores/shoresexplore.txt");
	xhttp.send();
}


// SANCTUARY FUNCTIONS
function ContinueSanctuary() {
	setTimeout(function(){
		$("#addcontinue").append(`
			<div class="action">
				<h2>Approaching the Heart</h2>
				<p>As I enter the most vast chamber yet, I am met with the heart of the Silent Sanctuary...</p> 
    				<p><b>- You unlocked this with having Exploring the Silent Sanctuary at 3 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadSanctuaryToHeart()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}
function ExploringSanctuary() {
	setTimeout(function(){
		$("#outcome").append(" (Exploring the Silent Sanctuary is now " + exploringSanctuary + "/3)");
	}, 500);
}

function loadChambersToSanctuary() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/outcome/tosanctuary.txt");
	xhttp.send();
}
function loadSanctuaryIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/sanctuary/sanctuaryexplore.txt");
	xhttp.send();
}


// CHANDLERY FUNCTIONS
function ContinueChandlery() {
	setTimeout(function(){
		$("#addcontinue").append(`
			<div class="action">
				<h2>Approaching the Heart</h2>
				<p>As I step into a room unburdened by the smog, I am met with the heart of the Chandlery...</p> 
    				<p><b>- You unlocked this with having Exploring the Chandlery at 3 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadChandleryToHeart()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}
function ExploringChandlery() {
	setTimeout(function(){
		$("#outcome").append(" (Exploring the Chandlery is now " + exploringChandlery + "/3)");
	}, 500);
}

function loadChambersToChandlery() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/outcome/tochandlery.txt");
	xhttp.send();
}
function loadChandleryIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chandlery/chandleryexplore.txt");
	xhttp.send();
}


// CROSSROADS FUNCTIONS
function ContinueCrossroads() {
	setTimeout(function(){
		$("#addcontinue").append(`
			<div class="action">
				<h2>Approaching the Heart</h2>
				<p>As I approach a light at the end of a corridor, I am met with the heart of the Crossroads...</p> 
    				<p><b>- You unlocked this with having Exploring the Crossroads at 3 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadCrossroadsToHeart()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}
function ExploringCrossroads() {
	setTimeout(function(){
		$("#outcome").append(" (Exploring the Crossroads is now " + exploringCrossroads + "/3)");
	}, 500);
}

function loadChambersToCrossroads() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/outcome/tocrossroads.txt");
	xhttp.send();
}
function loadCrossroadsIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/crossroads/crossroadsexplore.txt");
	xhttp.send();
}


// REFLECTORY FUNCTIONS
function ContinueReflectory() {
	setTimeout(function(){
		$("#addcontinue").append(`
			<div class="action">
				<h2>Approaching the Heart</h2>
				<p>As I follow the light of my reflections, I am met with the heart of the Reflectory...</p> 
    				<p><b>- You unlocked this with having Exploring the Reflectory at 3 or more.<b></p>
				<p style="text-align:right"><actionbutton onclick="loadReflectoryToHeart()">Follow</actionbutton></p>
			</div>
			<br>
		`);
	}, 500);
}
function ExploringReflectory() {
	setTimeout(function(){
		$("#outcome").append(" (Exploring the Reflectory is now " + exploringReflectory + "/3)");
	}, 500);
}

function loadChambersToReflectory() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/chambersliminal/outcome/toreflectory.txt");
	xhttp.send();
}
function loadReflectoryIntro() {
	xhttp.onload = function() {document.getElementById("storylet").innerHTML = this.responseText;};
	xhttp.open("GET", "/gatesofdream/constellarium/reflectory/reflectoryexplore.txt");
	xhttp.send();
}
