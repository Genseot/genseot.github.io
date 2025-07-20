/* THEIR STREETS, or, alternatively, Akizet Gets Lost in New York */
/* by Genseot */

/* TABLE OF CONTENTS */
/* (recommended to search with whole word & case sensitive) */
/*
CUSTOM STUFF INITIALISATION
INITIALISE LISTENER
ENTITY INITIALISATION
    DEFAULT STAGEENTITIES
    CUSTOM ENTITIES
DEFAULT STAGES
CUSTOM STAGES
    BRIDGE
    STREETS
    CITY
DIALOGUE
    FOUNTAIN BENCH
    BRIDGE BENCH 
    STREETS BENCH 
    PARK BENCH
    CITY BENCH
    WATERFRONT BENCH
*/

// CUSTOM STUFF INITIALISATION 
addResources(["/js/lib/pixi.js","/js/lib/pixi-gif.js",])
var stageWater

function ResetCam() {
    pauseSwapCam(false);setCam();vn.done();ShowGordon();
}
function HideGordon() {
    var envoy = document.querySelector(".envoy");
    envoy.classList.add("gordonhidden");
}
function ShowGordon() {
    var envoy = document.querySelector(".envoy");
    envoy.classList.remove("gordonhidden");
}

function EpisodeCheck() {
	if(!check('ep0_epilogue')) {
            document.querySelectorAll('#grid-ref .later, #realgrid .later').forEach(e=>{
                console.log(e)
                e.classList.remove('prop', 'later')
                e.innerHTML = ""
            })
        }
        if(!check('ENV!!ep2')) {
            document.querySelectorAll('#grid-ref .ep2, #realgrid .ep2').forEach(e=>{
                console.log(e)
                e.classList.remove('prop', 'later', 'teleport')
                e.innerHTML = ""
            })
        }
}

async function RenderWater() {
        // create renderer
        PIXI.Container.defaultSortableChildren = true
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
        switch(stageWater)
        {
            case "bridge":
                try {
                     page.pixi = new PIXI.Application({
                        width: 1200,
                        height: 1200,
                        view: document.querySelector("#citywater"),
                        backgroundAlpha: 0,
                    })
                    env.renderInit = async function() {
                        env.citywater = await PIXI.Assets.load('https://corru.observer/img/textures/chromec.gif')
                        env.citywater.width = 400
                        env.citywater.height = 400
                        page.pixi.stage.addChild(env.citywater)
                        // gif tiling
                        const horizontalCount = Math.ceil(page.pixi.renderer.width / env.citywater.width)
                        const verticalCount = Math.ceil(page.pixi.renderer.height / env.citywater.height)
                        for (let row = 0; row < verticalCount; row++) {
                            for (let col = row == 0 ? 1 : 0; col < horizontalCount; col++) {
                                const sprite = new PIXI.Sprite(env.citywater.texture);
                                sprite.width = 400
                                sprite.height = 400
                                sprite.x = col * env.citywater.width;
                                sprite.y = row * env.citywater.height;
                                page.pixi.stage.addChild(sprite);
                            }
                        }
                        // cannot use Assets.load for regular images it seems - attempting to use a simpler load and add the resulting sprite will create an invisible useless child on the stage
                        fetch("/img/textures/spotgradient.gif")
                            .then(response => response.blob())
                            .then(blob => URL.createObjectURL(blob))
                            .then(dataURL => {
                                var sprite = new PIXI.Sprite(PIXI.Texture.from(dataURL));
                                sprite.height = page.pixi.renderer.height;
                                sprite.width = page.pixi.renderer.width;
                                page.pixi.stage.addChild(sprite);
                            }).then(()=>{
                                if(check("default_quality") != "regular") {
                                    page.pixi.stop()
                                    page.pixi.view.classList.add('still')
                                }
                            })
                        }
                    env.renderInit()
                }
	           catch(e) {
                   console.log("renderer failed")
                   content.querySelectorAll("#citywater").forEach(el=>el.classList.add("still"))
                }
                break;
            case "waterfront":
                try {
                     page.pixi = new PIXI.Application({
                        width: 1200,
                        height: 600,
                        view: document.querySelector("#citywater"),
                        backgroundAlpha: 0,
                    })
                    env.renderInit = async function() {
                        env.citywater = await PIXI.Assets.load('https://corru.observer/img/textures/chromec.gif')
                        env.citywater.width = 800
                        env.citywater.height = 200
                        page.pixi.stage.addChild(env.citywater)
                        // gif tiling
                        const horizontalCount = Math.ceil(page.pixi.renderer.width / env.citywater.width)
                        const verticalCount = Math.ceil(page.pixi.renderer.height / env.citywater.height)
                        for (let row = 0; row < verticalCount; row++) {
                            for (let col = row == 0 ? 1 : 0; col < horizontalCount; col++) {
                                const sprite = new PIXI.Sprite(env.citywater.texture);
                                sprite.width = 800
                                sprite.height = 200
                                sprite.x = col * env.citywater.width;
                                sprite.y = row * env.citywater.height;
                                page.pixi.stage.addChild(sprite);
                            }
                        }
                        // cannot use Assets.load for regular images it seems - attempting to use a simpler load and add the resulting sprite will create an invisible useless child on the stage
                        fetch("/img/textures/spotgradient.gif")
                            .then(response => response.blob())
                            .then(blob => URL.createObjectURL(blob))
                            .then(dataURL => {
                                var sprite = new PIXI.Sprite(PIXI.Texture.from(dataURL));
                                sprite.height = page.pixi.renderer.height;
                                sprite.width = page.pixi.renderer.width;
                                page.pixi.stage.addChild(sprite);
                            }).then(()=>{
                                if(check("default_quality") != "regular") {
                                    page.pixi.stop()
                                    page.pixi.view.classList.add('still')
                                }
                            })
                        }
                    env.renderInit()  
                }
	           catch(e) {
                   console.log("renderer failed")
                   content.querySelectorAll("#citywater").forEach(el=>el.classList.add("still"))
                }
                break;
        }
}
function Fountain() {
    var getFountainPillar = document.querySelector(".fountainpillar");
    var spawnFountainPillar = `<div id="genprop30" base="genprop" class="fountainpillar dypcontent " type="" style="--piece-delay: -8.533590360382039s; animation-delay: var(--piece-delay);--dyp-image: url(https://genseot.github.io/mods/theirstreets/img/fountainpillar.gif);--dyp-width: 2;--dyp-height: 4; --dyp-transform:rotateY(90deg);" origin-spot="94"></div>;`
    getFountainPillar.insertAdjacentHTML('beforebegin', spawnFountainPillar) 
}
function ParkTree() {
    var getParkTree = document.querySelector(".parktree");
    var spawnParkTree = `<div id="genprop163" base="" class="parktree dypcontent " type="" style="--piece-delay: -6.905337766272646s; animation-delay: var(--piece-delay);--dyp-image: url(https://genseot.github.io/mods/theirstreets/img/tree.gif);--dyp-width: 6;--dyp-height: 6;;" origin-spot="143"></div>`;
    getParkTree.insertAdjacentHTML('beforebegin', spawnParkTree) 
}
function CityTree() {
    var getCityTree = document.querySelector(".citytree");
    var spawnCityTree = `<div id="genprop492" base="" class="citytree dypcontent " type="" style="--piece-delay: -14.8349898360371s; animation-delay: var(--piece-delay);--dyp-image: url(https://genseot.github.io/mods/theirstreets/img/tree.gif);--dyp-width: 6;--dyp-height: 6; --dyp-transform:rotateY(90deg);" origin-spot="143"></div>`;
    getCityTree.insertAdjacentHTML('beforebegin', spawnCityTree)
}



// INITIALISE LISTENER
document.addEventListener('corru_entered', ()=>{
if(page.path == "/local/city/street/") { // THANK YOU NOVAE I COMPLETELY FORGOT ABOUT THIS 
content.insertAdjacentHTML('beforeend', `<link type="text/css" rel="stylesheet" href="https://genseot.github.io/mods/theirstreets/theirstreets.css">`) 
	
env.stage.locales["city"] = [
    [".empty.plain", "/img/local/city/tiles/empty.gif"],
    [".prop", "/img/local/city/tiles/occupied.gif"],
    [".road", "/img/textures/black.gif"],
    [".grass", "https://genseot.github.io/mods/theirstreets/img/grass.gif"],
    [".crosswalk", "https://genseot.github.io/mods/theirstreets/img/crosswalk.gif"],
    [".crosswalkrotated", "https://genseot.github.io/mods/theirstreets/img/crosswalkflipped.gif"],
]
env.stage.locales["interiorcity"] = [
    [".empty.plain", "/img/local/city/tiles/empty.gif"],
    [".prop", "/img/local/city/tiles/occupied.gif"],
    [".road", "/img/textures/black.gif"],
    [".grass", "https://genseot.github.io/mods/theirstreets/img/grass.gif"],
    [".crosswalk", "https://genseot.github.io/mods/theirstreets/img/crosswalk.gif"],
    [".crosswalkrotated", "https://genseot.github.io/mods/theirstreets/img/crosswalkflipped.gif"],
]



// ENTITY INITIALISATION
// DEFAULT STAGEENTITIES
env.stageEntities['l'] = {
    class:"prop",
    contains: {
        id: "lamp",
        class: "lamp"
    }
}
env.stageEntities['lf'] = {
    class:"prop",
    contains: {
        dyp: { image: 'url(/img/local/city/lampflip.gif)', width: 1.5, height: 4 }
    }
}
env.stageEntities['lr'] = {
    class:"prop",
    contains: {
        dyp: {  image: 'url(/img/local/city/lamp.gif)', width: 1.5, height: 4, transform: "rotateY(90deg)" }
    }
}
env.stageEntities['lfr'] = {
    class:"prop",
    contains: {
        dyp: { image: 'url(/img/local/city/lampflip.gif)', width: 1.5, height: 4, transform: "rotateY(90deg)" }
    }
}
env.stageEntities['L'] = {
    class: "prop",
    contains: { 
        dyp: { image: 'url(/img/local/city/blacklamp.gif)', width: 1.5, height: 4 }
    } 
}
env.stageEntities['Lr'] = {
    class: "prop",
    contains: { 
        dyp: { image: 'url(/img/local/city/blacklamp.gif)', width: 1.5, height: 4, transform: "rotateY(90deg)" }
    } 
}
env.stageEntities['R'] = {
    class:"road prop",
    contains: { slug: 'R', id: "car", class: "prop car" }
}
env.stageEntities['T'] = {
    class:"road prop",
    contains: { slug: 'R', id: "car", class: "prop car sideways" }
}
// random comment here hi guys im dumb. i think i could have just added a class or something on some that would rotate them or something instead of making a wholly new object for every type of rotation lol 
env.stageEntities['pB'] = {
    class: "prop",
    contains: { 
	dyp: {  image: 'url(https://genseot.github.io/mods/theirstreets/img/pottedbush.gif)', width: 1.35, height: 1.5  }
    }
}
env.stageEntities['pBr'] = {
    class: "prop",
    contains: { 
	dyp: {  image: 'url(https://genseot.github.io/mods/theirstreets/img/pottedbush.gif)', width: 1.35, height: 1.5, transform:"rotateY(90deg)"  }
    }
}
env.stageEntities['B'] = {
    class: "grass",
    contains: { 
	dyp: {  image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)', width: 1.35, height: 1.5  }
    }
}
env.stageEntities['Br'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)', width: 1.35, height: 1.5, transform: "rotateY(90deg)" }
    }
}
env.stageEntities['Bc'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)', width: 1.35, height: 1.5, transform: "rotateY(45deg)" }
    }
}
env.stageEntities['Bcr'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)', width: 1.35, height: 1.5, transform: "rotateY(135deg)" }
    }
}
env.stageEntities['t'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/tree.gif);', width: 6, height: 6 }
    }
}
env.stageEntities['tr'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/tree.gif);', width: 6, height: 6, transform: "rotateY(90deg)" }
    }
}
env.stageEntities['tc'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/tree.gif);', width: 6, height: 6, transform: "rotateY(45deg)" }
    }
}
env.stageEntities['tcr'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/tree.gif);', width: 6, height: 6, transform: "rotateY(135deg)" }
    }
}
env.stageEntities['F1'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower1.gif);', width: 1.3, height: 1.5 }
    }
}
env.stageEntities['F1r'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower1.gif);', width: 1.3, height: 1.5, transform:"rotateY(90deg)"}
    }
}
env.stageEntities['F1c'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower1.gif);', width: 1.3, height: 1.5, transform:"rotateY(45deg)" }
    }
}
env.stageEntities['F1cr'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower1.gif);', width: 1.3, height: 1.5, transform:"rotateY(135deg)" }
    }
}
env.stageEntities['F2'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower2.gif);', width: 1.1, height: 1.5 }
    }
}
env.stageEntities['F2r'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower2.gif);', width: 1.1, height: 1.5, transform:"rotateY(90deg)"}
    }
}
env.stageEntities['F2c'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower2.gif);', width: 1.1, height: 1.5, transform:"rotateY(45deg)" }
    }
}
env.stageEntities['F2cr'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower2.gif);', width: 1.1, height: 1.5, transform:"rotateY(135deg)" }
    }
}
env.stageEntities['F3'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower3.gif);', width: 1.1, height: 1.5 }
    }
}
env.stageEntities['F3r'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower3.gif);', width: 1.1, height: 1.5, transform:"rotateY(90deg)"}
    }
}
env.stageEntities['F3c'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower3.gif);', width: 1.1, height: 1.5, transform:"rotateY(45deg)" }
    }
}
env.stageEntities['F3cr'] = {
    class: "grass",
    contains: { 
	dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/flower3.gif);', width: 1.1, height: 1.5, transform:"rotateY(135deg)" }
    }
}
env.stageEntities['c'] = {   
    class:"crosswalkrotated"
}
env.stageEntities['r'] = {
    class:"road"
}
env.stageEntities['bl'] = {
    class: "prop",
    contains: { class:"" }
}
env.stageEntities['g'] = {
    class:"grass",
    contains: { class:"prop" }
}
// CUSTOM ENTITIES
createEntity({
    name: 'fountain bench',
    type: "recollection thoughtform portrait-bright portrait-cover",
    image: 'https://genseot.github.io/mods/theirstreets/img/bench.gif',
    text: `::RESPONSIVE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection';'unique scenery'`,
    actions: [{
         name: "sit",
         exec: ()=>startDialogue('fountainbench')
    }]
}),
createEntity({
    name: 'bridge bench',
    type: "recollection thoughtform portrait-bright portrait-cover",
    image: 'https://genseot.github.io/mods/theirstreets/img/bench.gif',
    text: `::RESPONSIVE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection';'unique scenery'`,
    actions: [{
         name: "sit",
         exec: ()=>startDialogue('bridgebench')
    }]
}),
createEntity({
    name: 'streets bench',
    type: "recollection thoughtform portrait-bright portrait-cover",
    image: 'https://genseot.github.io/mods/theirstreets/img/bench.gif',
    text: `::RESPONSIVE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection';'unique scenery'`,
    actions: [{
         name: "sit",
         exec: ()=>startDialogue('streetsbench')
    }]
}),
createEntity({
    name: 'park bench',
    type: "recollection thoughtform portrait-bright portrait-cover",
    image: 'https://genseot.github.io/mods/theirstreets/img/bench.gif',
    text: `::RESPONSIVE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection';'unique scenery'`,
    actions: [{
         name: "sit",
         exec: ()=>startDialogue('parkbench')
    }]
}),
createEntity({
    name: 'city bench',
    type: "recollection thoughtform portrait-bright portrait-cover",
    image: 'https://genseot.github.io/mods/theirstreets/img/bench.gif',
    text: `::RESPONSIVE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection';'unique scenery'`,
    actions: [{
         name: "sit",
         exec: ()=>startDialogue('citybench')
    }]
}),
createEntity({
    name: 'waterfront bench',
    type: "recollection thoughtform portrait-bright portrait-cover",
    image: 'https://genseot.github.io/mods/theirstreets/img/bench.gif',
    text: `::RESPONSIVE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection';'unique scenery'`,
    actions: [{
         name: "sit",
         exec: ()=>startDialogue('waterfrontbench')
    }]
}),




// DEFAULT STAGES
env.stages['city_street2'] = {
    locale: "city",
    width: 14,
    exec: ()=>{ 
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        n: {
            teleportSpot: 9,
            teleportTarget: "city_street"
        },
        Y: {
            class: "ep2",
            teleportTarget: "city_street3"
        },
        f: {
            class:"cafebuilding blocks",
            contains: {
                id: "cafe",
                class: "cafe building",
                html: `<figure></figure><div class="door"></div>`
            }
        },
        j: {
            class: "prop later",
            contains: {
                id: 'slim',
                class: "civvie slim",
                examineEntity: "slim streetwalker"
            }
        },
        e: {
            teleportSpot: 7,
            teleportTarget: "city_cafe"
        },
        m: {
            teleportSpot: 182,
            teleportTarget: "city_street_fountain",
            shouldFace: "down"
        }
    },
    plan: [
        '.','.','.','r','r','r','r','.','.','n','.','.','.','.',
        '.','░','░','r','r','r','r','░','░','p','░','░','r','.',
        '.','Lr','░','r','r','r','r','░','░','░','░','░','r','.',
        '.','░','░','r','r','r','r','░','░','░','░','░','r','.',
        'm','░','░','c','c','c','c','░','░','░','░','░','e','f',
        '.','░','░','r','r','r','r','j','░','░','░','░','r','.',
        '.','Lr','░','r','r','r','r','░','░','░','░','░','r','.',
        '.','░','░','r','r','r','r','░','░','░','░','░','r','.',
        '.','.','.','r','r','r','r','.','.','Y','.','.','.','.',
    ]
}


// CUSTOM STAGES
env.stages['city_street_fountain'] = {
    locale: "city",
    width: 11,
    exec: ()=>{ 
        page.bgm.rate(1)
        EpisodeCheck()
	      Fountain()
    },
    entities: {
        Fb: {
    	    class:"prop",
    	    contains: {
		    dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/fountainbasin.gif)', width: 4, height: 1 }
    	    }	
        },
	    Fbr: {
    	    class:"prop",
    	    contains: {
		        dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/fountainbasin.gif)', width: 4, height: 1, transform: "rotateY(90deg)" }
    	    }	
        },
	    Fp: {
    	    class:"prop",
	            contains: { class: "fountainpillar",
                dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/fountainpillar.gif)', width: 2, height: 4 }
	        }	
        },
        fb: {
    	    class:"prop",
    	    contains: {
                dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/bench.gif)', width: 3, height: 1.25 },
                examineEntity: "fountain bench"
    	    }
        },        
        m: {
            teleportSpot: 57,
            teleportTarget: "city_street2",
            shouldFace: "right"
        },
        s: {
            teleportSpot: 102,
            teleportTarget: "city_street_streets1"
        },
        b: {
            teleportSpot: 53,
            teleportTarget: "city_street_bridge2"
        },
        c: {
            teleportSpot: 68,
            teleportTarget: "city_street_city1"
        }
    },
    plan: [
        '.','.','.','.','.','c','.','.','.','.','.',
        '.','tc','B','░','░','░','░','░','B','tcr','.',
        '.','Br','░','░','░','░','░','░','░','Br','.',
        '.','░','░','░','░','░','░','░','░','░','.',
        '.','░','░','░','░','░','░','░','░','░','.',
        '.','L','░','░','░','░','░','░','░','L','.',
        '.','░','░','Bc','bl','Fb','bl','Bcr','░','░','.',
        '.','░','░','bl','░','░','░','bl','░','░','.',
        's','░','░','Fbr','░','Fp','░','Fbr','░','░','b',
        '.','░','░','bl','░','░','░','bl','░','░','.',
        '.','░','░','Bcr','bl','Fb','bl','Bc','░','░','.',
        '.','L','░','░','░','░','░','░','░','L','.',
        '.','░','░','░','bl','fb','bl','░','░','░','.',
        '.','░','░','░','░','░','░','░','░','░','.',
        '.','Br','░','░','░','░','░','░','░','Br','.',
        '.','tcr','B','░','░','p','░','░','B','tc','.',
        '.','.','.','.','.','m','.','.','.','.','.',
    ]
}






// BRIDGE
env.stages['city_street_bridge1'] = {
    locale: 'interiorcity',
    width: 8,
    exec: ()=>{
        page.bgm.rate(0.8)
        EpisodeCheck()
    },
    entities: {
        c: {
            teleportSpot: 43,
            teleportTarget: "city_street_city1"
        },
        b: {
            teleportSpot: 19,
            teleportTarget: "city_street_bridge2"
        }
    },
    plan: [
        '.','░','░','░','░','░','.','.',
        'c','░','░','░','░','░','.','.',
        '.','░','░','░','░','░','.','.',
        '.','.','L','░','░','░','.','.',
        '.','.','.','░','p','░','.','.',
        '.','.','.','.','b','.','.','.',
    ]
}
env.stages['city_street_bridge2'] = {
    locale: 'city',
    width: 13,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        f: {
            teleportSpot: 97,
            teleportTarget: "city_street_fountain"
        },
        c: {
            teleportSpot: 36,
            teleportTarget: "city_street_bridge1"
        },
        b: {
            teleportSpot: 27,
            teleportTarget: "city_street_bridge3"
        }
    },
    plan: [
        '.','.','.','.','.','.','c','.','.','.','.','.','.',
        '.','.','.','.','.','░','░','░','.','.','.','.','.',
        '.','.','.','.','L','░','░','░','L','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','░','░','.',
        'f','p','░','░','░','░','░','░','░','░','░','░','b',
        '.','l','░','l','░','░','t','░','░','l','░','l','.',
        'r','r','r','r','r','r','r','r','r','r','r','r','r', 
        'r','r','r','r','r','r','r','r','r','r','r','r','T',
        'r','r','r','r','r','r','r','r','r','r','r','r','r',
        'r','r','r','r','r','r','r','r','r','r','r','r','T',
    ]
}
env.stages['city_street_bridge3'] = {
    locale: 'city',
    width: 13,
    exec: () => {
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {       
        e: {
            teleportSpot: 63,
            teleportTarget: "city_street_bridge2"
        },
        b: {
            teleportSpot: 177,
            teleportTarget: "city_street_bridge4"
        }
    },
    plan: [
        '.','L','░','░','░','r','r','r','░','░','░','L','.',
        '.','░','░','░','░','r','r','r','░','░','░','░','.',
        'e','p','░','░','░','c','c','c','░','░','░','░','b',
        '.','l','░','░','l','r','r','r','l','░','░','l','.',
        'r','r','r','r','r','r','r','r','r','r','r','r','r', 
        'r','r','r','r','r','r','r','r','r','r','r','r','T',
        'r','r','r','r','r','r','r','r','r','r','r','r','r',
        'r','r','r','r','r','r','r','r','r','r','r','r','T',
    ]
} 
env.stages['city_street_bridge4'] = {
    locale: 'city',
    width: 16,
    exec: () => {
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        D: {
            class:"road prop",
            contains: {
                slug: 'R', 
                id: "car", 
                class: "prop car downwards"
            }
        },
        e: {
            teleportSpot: 37,
            teleportTarget: "city_street_bridge3"
        },
        b: {
            teleportSpot: 232,
            teleportTarget: "city_street_bridge5"
        }
    },
    plan: [
        '.','.','.','.','.','.','.','.','.','.','.','b','.','D','D','D',
        '.','.','.','.','.','.','.','.','.','.','L','░','L','r','r','r',
        '.','.','.','.','.','.','.','.','.','.','░','░','░','r','r','r',
        '.','.','.','.','.','.','.','.','.','.','░','░','░','r','r','r',
        '.','.','.','.','.','.','.','.','.','.','░','░','░','r','r','r',
        '.','.','.','.','.','.','.','.','.','L','░','░','tr','r','r','r',
        '.','.','.','.','.','.','.','.','.','.','░','░','░','r','r','r',
        '.','.','.','.','.','.','.','.','.','.','░','░','░','r','r','r',
        '.','.','.','.','.','.','.','.','.','.','░','░','lr','r','r','r',
        '.','L','.','.','.','L','.','.','.','L','░','░','░','r','r','r',
        '.','░','░','░','░','░','░','░','░','░','░','░','░','r','r','r',
        'e','p','░','░','░','░','░','░','░','░','░','░','░','r','r','r',
        '.','l','░','░','░','t','░','░','░','l','░','░','l','r','r','r',
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','T',
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r',
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','T',
    ]
} 
env.stages['city_street_bridge5'] = {
    locale: 'nightcity',
    width: 15,
    exec: () => {
        page.bgm.rate(0.8)
        EpisodeCheck()
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="citywater" class="bridge"></canvas>`)
        stageWater="bridge"
        RenderWater()
    },
    entities: {
        r: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg)"
                }
            }
        },
        lb: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg) translateX(-35%)"
                }
            }
        },
        lt: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg) translateX(35%)"
                }
            }
        },
        e: {
            teleportSpot: 27,
            teleportTarget: "city_street_bridge4"
        },
        b: {
            teleportSpot: 332,
            teleportTarget: "city_street_bridge6"
        }
    },
    plan: [
        '.','.','.','.','.','.','.','b','.','.','.','.','.','.','.',
        '.','.','.','.','.','lb','L','░','L','lb','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','L','░','L','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','lt','L','p','L','lt','.','.','.','.','.',
        '.','.','.','.','.','.','.','e','.','.','.','.','.','.','.',
    ]
} 
env.stages['city_street_bridge6'] = {
    locale: 'nightcity',
    width: 19,
    exec: () => {
        page.bgm.rate(0.8)
        EpisodeCheck()
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="citywater" class="bridge"></canvas>`)
        stageWater="bridge"
        RenderWater()
    },
    entities: {
        bb: {
    	    class:"prop",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bench.gif)',
                    width: 3,
                    height: 1.25,
                    transform: "rotateY(90deg)"
                },
                examineEntity: "bridge bench"
    	    }
        },
        r: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg)"
                }
            }
        },
        a: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(0deg)"
                }
            }
        },
        ir: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(0deg) translateX(35%)"
                }
            }
    	},
        il: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(0deg) translateX(-35%)"
                }
            }
    	},
        lb: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg) translateX(-35%)"
                }
            }
        },
        lt: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg) translateX(35%)"
                }
            }
        },
        e: {
            teleportSpot: 22,
            teleportTarget: "city_street_bridge5"
        },
        b: {
            teleportSpot: 232,
            teleportTarget: "city_street_bridge7"
        }
    },
    plan: [
        '.','.','.','.','.','.','.','.','.','b','.','.','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','lb','L','░','L','lb','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','r','░','░','░','r','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','r','░','░','░','r','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','r','░','░','░','r','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','lt','░','░','░','lt','.','.','.','.','.','.','.',
        '.','.','.','.','ir','a','il','L','░','░','░','L','ir','a','il','.','.','.','.',
        '.','.','.','.','r','L','░','░','░','░','░','░','░','L','r','.','.','.','.',
        '.','.','.','.','r','░','░','░','░','░','░','░','bl','░','r','.','.','.','.',
        '.','.','.','.','r','░','░','░','░','░','░','░','bb','░','r','.','.','.','.',
        '.','.','.','.','r','░','░','░','░','░','░','░','bl','░','r','.','.','.','.',
        '.','.','.','.','r','L','░','░','░','░','░','░','░','L','r','.','.','.','.',
        '.','.','.','.','ir','a','il','L','░','░','░','L','ir','a','il','.','.','.','.',
        '.','.','.','.','.','.','.','lb','░','░','░','lb','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','r','░','░','░','r','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','r','░','░','░','r','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','r','░','░','░','r','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','lt','L','p','L','lt','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','.','.','e','.','.','.','.','.','.','.','.','.',
    ]
}
env.stages['city_street_bridge7'] = {
    locale: 'nightcity',
    width: 15,
    exec: () => {
        page.bgm.rate(0.8)
        EpisodeCheck()
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="citywater" class="bridge"></canvas>`)
        stageWater="bridge"
        RenderWater()
    },
    entities: {
        r: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg)"
                }
            }
        },
        lb: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg) translateX(-35%)"
                }
            }
        },
        lt: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg) translateX(35%)"
                }
            }
        },
        e: {
            teleportSpot: 28,
            teleportTarget: "city_street_bridge6"
        },
        b: {
            teleportSpot: 20,
            teleportTarget: "city_street_streets7",
            shouldFace: "up"
        }
    },
    plan: [
        '.','.','.','.','.','.','.','b','.','.','.','.','.','.','.',
        '.','.','.','.','.','lb','L','░','L','lb','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','L','░','L','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','r','░','░','░','r','.','.','.','.','.',
        '.','.','.','.','.','lt','L','p','L','lt','.','.','.','.','.',
        '.','.','.','.','.','.','.','e','.','.','.','.','.','.','.',
    ]
}







// STREETS
env.stages['city_street_streets1'] = {  
    locale: 'city',
    width: 13,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        f: {
            teleportSpot: 89,
            teleportTarget: "city_street_fountain"
        },
        s: {
            teleportSpot: 154,
            teleportTarget: "city_street_streets2"
        }
    },
    plan: [
        'r','r','r','.','s','.','.','.','.','.','.','.','.',
        'r','r','r','lr','░','░','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.',
        'r','r','r','tr','░','░','L','.','.','.','.','.','.',
        'r','r','r','░','░','░','░','░','░','░','░','░','.',
        'r','r','r','░','░','░','░','░','░','░','░','p','f',
        'r','r','r','░','l','░','░','t','░','░','l','░','.',
        'r','r','r','r','r','r','r','r','r','r','r','r','T',
        'r','r','r','r','r','r','r','r','r','r','r','r','r',
        'R','r','R','r','r','r','r','r','r','r','r','r','T',
    ]
}
env.stages['city_street_streets2'] = {
    locale: 'city',
    width: 10,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        e: {
            teleportSpot: 17,
            teleportTarget: "city_street_streets1"
        },
        s: {
            teleportSpot: 121,
            teleportTarget: "city_street_streets3"
        },
        c: {
            teleportSpot: 37,
            teleportTarget: "city_street_city1"
        }
    },
    plan: [
        'r','r','r','.','s','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.',
        'r','r','r','lr','░','░','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.',
        'r','r','r','tr','░','░','Lr','.','.','.',
        'r','r','r','░','░','░','░','░','░','.',
        'r','r','r','░','░','░','░','░','░','c',
        'r','r','r','░','░','░','░','░','░','.',
        'r','r','r','lr','░','░','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.',
        'r','r','r','░','p','░','.','.','.','.',
        'r','R','R','.','e','.','.','.','.','.',
    ]
}
env.stages['city_street_streets3'] = {
    locale: 'city',
    width: 9,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        e: {
            teleportSpot: 14,
            teleportTarget: "city_street_streets2"
        },
        s: {
            teleportSpot: 235,
            teleportTarget: "city_street_streets4", 
            shouldFace: "left"
        },
        cg: {
            teleportSpot: 134,
            teleportTarget: "city_street_city4"
        }
    },
    plan: [
        'r','r','r','.','s','.','.','.','.',
        'r','r','r','lr','░','░','Lr','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','lr','░','░','.','.','.',
        'r','r','r','░','░','░','Br','.','.',
        'r','r','r','░','░','░','░','░','.',
        'r','r','r','tr','░','░','░','░','cg',
        'r','r','r','░','░','░','░','░','.',
        'r','r','r','░','░','░','Br','.','.',
        'r','r','r','lr','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','lr','p','░','Lr','.','.',
        'R','R','R','.','e','.','.','.','.',
    ]
}
env.stages['city_street_streets4'] = {
    locale: 'city',
    width: 13,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        sb: {
    	    class:"prop",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bench.gif)',
                    width: 3,
                    height: 1.25,
                    transform: "rotateY(270deg)"
                },
                examineEntity: "streets bench"
    	    }
        },
        e: {
            teleportSpot: 13,
            teleportTarget: "city_street_streets3",
            shouldFace: "up"
        },
        s: {
            teleportSpot: 121,
            teleportTarget: "city_street_streets5"
        }
    },
    plan: [
        'r','r','r','.','s','.','.','.','.','.','.','.','.',
        'r','r','r','lr','░','░','Lr','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','░','░','.','.','.','.','.',
        'r','r','r','░','░','░','░','░','░','.','.','.','.',
        'r','r','r','tr','░','░','Lr','░','░','.','.','.','.',
        'r','r','r','░','░','░','Br','░','░','Lr','F1cr','.','.',
        'r','r','r','░','░','░','F3r','░','░','bl','Br','.','.',
        'r','r','r','░','░','░','F2r','░','░','sb','Br','.','.',
        'r','r','r','░','░','░','F3r','░','░','bl','Br','.','.',
        'r','r','r','░','░','░','Br','░','░','Lr','F1c','.','.',
        'r','r','r','tr','░','░','Lr','░','░','.','.','.','.',
        'r','r','r','░','░','░','░','░','░','.','.','.','.',
        'r','r','r','░','░','░','░','░','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.',
        'r','r','r','lr','░','░','L','.','.','.','.','L','.',
        'r','r','r','░','░','░','░','░','░','░','░','░','.',
        'r','r','r','░','░','░','░','░','░','░','░','p','e',
        'r','r','r','l','░','░','░','l','░','░','░','l','.',
        'r','r','r','r','r','r','r','r','r','r','r','r','T',
        'r','r','r','r','r','r','r','r','r','r','r','r','T',
        'R','R','R','r','r','r','r','r','r','r','r','r','r',
    ]
}
env.stages['city_street_streets5'] = {
    locale: 'city',
    width: 9,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        s: {
            teleportSpot: 134,
            teleportTarget: "city_street_streets6"
        },
        e: {
            teleportSpot: 17,
            teleportTarget: "city_street_streets4"
        },
        cm: {
            teleportSpot: 22,
            teleportTarget: "city_street_city5",
	    shouldFace: "up"
        }
    },
    plan: [
        'r','r','r','.','s','.','.','.','.',
        'r','r','r','░','░','░','Lr','.','.',
        'r','r','r','lr','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','░','░','░','pBr','.','.',
        'r','r','r','░','░','░','░','░','.',
        'r','r','r','tr','░','░','░','░','cm',
        'r','r','r','░','░','░','░','░','.',
        'r','r','r','░','░','░','pBr','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','lr','░','░','.','.','.',
        'r','r','r','░','p','░','Lr','.','.',
        'R','R','R','.','e','.','.','.','.',
    ]
}
env.stages['city_street_streets6'] = {
    locale: 'city',
    width: 7,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        cr: {
            class:"crosswalk"
        },
        s: {
            teleportSpot: 172,
            teleportTarget: "city_street_streets7",
            shouldFace: "left"
        },
        e: {
            teleportSpot: 13,
            teleportTarget: "city_street_streets5"
        }
    },
    plan: [
        'r','r','r','.','s','.','.',
        'r','r','r','░','░','░','.',
        'r','r','r','lr','░','░','Lr',
        'r','r','r','░','░','░','░',
        'r','r','r','░','░','░','░',
        'r','r','r','lr','░','░','░',
        'r','r','r','r','cr','r','r',
        'r','r','r','r','cr','r','r',
        'r','r','r','r','cr','r','r',
        'r','r','r','lr','░','░','░',
        'r','r','r','░','░','░','░',
        'r','r','r','░','░','░','░',
        'r','r','r','lr','░','░','Lr',
        'r','r','r','░','p','░','.',
        'R','R','R','.','e','.','.',
    ]
}
env.stages['city_street_streets7'] = {
    locale: 'city',
    width: 16,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        b: {
            teleportSpot: 22,
            teleportTarget: "city_street_bridge7",
            shouldFace: "up"
        },
        e: {
            teleportSpot: 11,
            teleportTarget: "city_street_streets6",
            shouldFace: "up"
        }
    },
    plan: [
        'r','r','r','.','b','.','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','L','░','L','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','lr','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','tr','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','lr','░','░','L','.','.','.','L','.','.','.','L','.',
        'r','r','r','░','░','░','░','░','░','░','░','░','░','░','░','.',
        'r','r','r','░','░','░','░','░','░','░','░','░','░','░','p','e',
        'r','r','r','l','░','░','l','░','░','t','░','░','l','░','░','.',
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','T',
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','T',
        'R','r','R','r','r','r','r','r','r','r','r','r','r','r','r','r',
    ]
}







// CITY 
env.stages['city_street_city1'] = {
    locale: 'interiorcity',
    width: 9,
    exec: ()=>{
        page.bgm.rate(0.8)
        EpisodeCheck()
    },
    entities: { 
        f: {
            teleportSpot: 16,
            teleportTarget: "city_street_fountain"
        },
        s: {
            teleportSpot: 108,
            teleportTarget: "city_street_streets2"	
        },
        b: {
            teleportSpot: 9, 
            teleportTarget: "city_street_bridge1"
        },
        c: {
            teleportSpot: 264,
            teleportTarget: "city_street_city2"
        }
    },
    plan: [
        '.','.','.','.','c','.','.','.','.',
        '.','.','.','.','░','.','.','.','.',
        '.','.','l','░','░','░','.','.','.',
        '.','l','░','░','░','░','░','.','.',
        's','░','░','░','░','░','░','░','b',
        '.','.','░','░','░','░','░','L','.',
        '.','.','.','░','░','░','L','.','.',
        '.','.','.','.','p','.','.','.','.',
        '.','.','.','.','f','.','.','.','.',
    ]
}
env.stages['city_street_city2'] = {
    locale: 'interiorcity',
    width: 17,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: { 
        c: {
            teleportSpot: 409,
            teleportTarget: "city_street_city3"
        },
        e: {
            teleportSpot: 13,
            teleportTarget: "city_street_city1"
        }
    },
    plan: [
        '.','r','r','r','.','.','.','.','c','.','.','.','.','r','r','r','.',
        '.','r','r','r','.','.','.','l','░','l','.','.','.','r','r','r','.',
        '.','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','.',
        '.','r','r','r','.','L','░','░','░','░','░','L','.','r','r','r','.',
        '.','r','r','r','.','░','░','░','░','░','░','░','.','r','r','r','.',
        '.','r','r','r','lr','░','░','Bc','F2','Bcr','░','░','lr','r','r','r','.',
        '.','r','r','r','░','░','F3r','g','t','g','F3r','░','░','r','r','r','.',
        '.','r','r','r','░','░','Br','g','g','g','Br','░','░','r','r','r','.',
        '.','r','r','r','░','░','F1r','tr','g','tr','F1r','░','░','r','r','r','.',
        '.','r','r','r','░','░','Br','g','g','g','Br','░','░','r','r','r','.',
        '.','r','r','r','░','░','F3r','g','t','g','F3r','░','░','r','r','r','.',
        '.','r','r','r','lr','░','░','Bcr','F2','Bc','░','░','lr','r','r','r','.',
        '.','r','r','r','.','░','░','░','░','░','░','░','.','r','r','r','.',
        '.','r','r','r','.','L','░','░','░','░','░','L','.','r','r','r','.',
        '.','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','.',
        '.','r','r','r','.','.','.','l','p','l','.','.','.','r','r','r','.',
        '.','r','r','r','.','.','.','.','e','.','.','.','.','r','r','r','.',
    ]
}
env.stages['city_street_city3'] = {
    locale: 'interiorcity',
    width: 21,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {    
        ce: {
            teleportSpot: 25,
            teleportTarget: "city_street_city2"
        },
        cg: {
            teleportSpot: 150,
            teleportTarget: "city_street_city4"
        },
        cm: {
            teleportSpot: 262,
            teleportTarget: "city_street_city5"
        },
        cw: {
            teleportSpot: 129,
            teleportTarget: "city_street_city6"
        }
    }, 
    plan: [
        '.','.','.','r','r','r','.','.','.','.','cm','.','.','.','.','r','r','r','.','.','.',
        '.','░','░','r','r','r','.','.','.','L','░','L','.','.','.','r','r','r','░','░','.',
        '.','░','lr','r','r','r','.','tc','Br','░','░','░','Br','tcr','.','r','r','r','lr','░','.',
        '.','░','░','r','r','r','.','B','F1c','░','░','░','F2cr','B','.','r','r','r','░','░','.',
        '.','░','░','r','r','r','Lr','░','░','░','░','░','░','░','Lr','r','r','r','░','░','.',
        '.','░','░','r','r','r','░','░','░','░','░','░','░','░','░','r','r','r','░','░','.',
        '.','░','lr','r','r','r','lr','░','░','░','░','░','░','░','lr','r','r','r','lr','░','.',
        '.','░','░','c','c','c','░','░','░','░','░','░','░','░','░','c','c','c','░','░','.',
        'cg','░','░','c','c','c','░','░','░','░','░','░','░','░','░','c','c','c','░','░','cw',
        '.','░','░','c','c','c','░','░','░','░','░','░','░','░','░','c','c','c','░','░','.',
        '.','░','lr','r','r','r','lr','░','░','░','░','░','░','░','lr','r','r','r','lr','░','.',
        '.','░','░','r','r','r','░','░','░','░','░','░','░','░','░','r','r','r','r','░','.',
        '.','░','░','r','r','r','Lr','░','░','░','░','░','░','░','Lr','r','r','r','r','░','.',
        '.','░','░','r','r','r','.','B','F2cr','░','░','░','F1c','B','.','r','r','r','░','░','.',
        '.','░','lr','r','r','r','.','tcr','Br','░','░','░','Br','tc','.','r','r','r','lr','░','.',
        '.','░','░','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','░','░','.',
        '.','░','░','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','░','░','.',
        '.','░','░','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','░','░','.',
        '.','░','lr','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','lr','░','.',
        '.','░','░','r','r','r','.','.','.','L','p','L','.','.','.','r','r','r','░','░','.',
        '.','.','.','r','r','r','.','.','.','.','ce','.','.','.','.','r','r','r','.','.','.',

    ]
}
env.stages['city_street_city4'] = {
    locale: 'interiorcity',
    width: 19,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
        ParkTree()
    },
    entities: {
        gb: {
    	    class:"prop",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bench.gif)',
                    width: 3,
                    height: 1.25,
                    transform: "rotateY(270deg)"
                },
                examineEntity: "park bench"
    	    }
        }, 
        trs: {
            class: "grass",
            contains: { 
	            class: "parktree",
	            dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/tree.gif);', width: 6, height: 6, transform: "rotateY(90deg)" }
            }
        },
        e: {
            teleportSpot: 169,
            teleportTarget: "city_street_city3"
        },
        s: {
            teleportSpot: 70,
            teleportTarget: "city_street_streets3"
        }
    },
    plan: [
        '.','tc','g','F2','g','B','g','g','F3','t','F3','g','g','B','g','F2','g','tcr','.',
        '.','F3r','░','░','░','░','░','░','░','░','░','░','░','░','░','░','░','F3r','.',
        '.','g','░','░','░','░','░','░','░','░','░','░','░','░','░','░','░','g','.',
        '.','g','░','░','F1c','g','g','B','░','░','░','B','g','g','F1cr','░','░','g','.',
        '.','F1r','░','░','g','Lr','░','░','░','░','░','░','░','Lr','g','░','░','F1r','.',
        '.','Lr','░','░','g','F3c','░','░','░','F3','░','░','░','F3cr','g','░','░','Lr','.',
        '.','░','░','░','Br','bl','░','░','F2c','g','F1cr','░','░','g','F2r','░','░','░','.',
        's','░','░','░','F2r','gb','░','░','g','trs','g','░','░','F1r','Br','░','░','p','e',
        '.','░','░','░','Br','bl','░','░','F1cr','g','F2c','░','░','g','F2r','░','░','░','.',
        '.','Lr','░','░','g','F3cr','░','░','░','F3','░','░','░','F3c','g','░','░','Lr','.',
        '.','F1r','░','░','g','Lr','░','░','░','░','░','░','░','Lr','g','░','░','F1r','.',
        '.','g','░','░','F1cr','g','g','B','░','░','░','B','g','g','F1c','░','░','g','.',
        '.','g','░','░','░','░','░','░','░','░','░','░','░','░','░','░','░','g','.',
        '.','F3r','░','░','░','░','░','░','░','░','░','░','░','░','░','░','░','F3r','.',
        '.','tcr','g','F2','g','B','g','g','F3','t','F3','g','g','B','g','F2','g','tc','.',
    ]
}
env.stages['city_street_city5'] = {
    locale: 'interiorcity',
    width: 15,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
        CityTree()
    },
    entities: {
        r: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg)"
                }
            }
        },
        i: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(0deg)"
                }
            }
    	},
        lb: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg) translateX(-35%)"
                }
            }
        },
        lt: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg) translateX(35%)"
                }
            }
        },
        ir: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(0deg) translateX(35%)"
                }
            }
    	},
        il: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(0deg) translateX(-35%)"
                }
            }
    	},
        e: {
            teleportSpot: 31,
            teleportTarget: "city_street_city3"
        },
        s: {
            teleportSpot: 70, 
            teleportTarget: "city_street_streets5",
            shouldFace: "left"
        },
        cb: {
    	    class:"prop",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bench.gif)',
                    width: 3,
                    height: 1.25,
                    transform: "rotateY(90deg)"
                },
                examineEntity: "city bench"
    	    }
        },
 	    trs: {
    	      class:"grass",
	          contains: {
                  class: "citytree",
		          dyp: { image: 'url(https://genseot.github.io/mods/theirstreets/img/tree.gif)', width: 6, height: 6 }
	          }	
        },
        sf1: {
            class:"storefront blocks",
            contains: {
                class: "storefront1 building",
                html: `<figure></figure>`
            }
        },
        sf2: {
            class:"storefront blocks",
            contains: {
                class: "storefront2 building",
                html: `<figure></figure>`
            }
        },
        sf3: {
            class:"storefront blocks",
            contains: {
                class: "storefront3 building",
                html: `<figure></figure>`
            }
        },
        sf4: {
            class:"storefront blocks",
            contains: {
                class: "storefront4 building",
                html: `<figure></figure>`
            }
        }
    },
    plan: [
        '.','.','.','.','.','.','.','s','.','.','.','.','.','.','.',
        '.','.','░','░','pB','L','░','░','░','L','pB','░','░','.','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','pBr','.','.',
        '.','.','pBr','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','sf1','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','░','sf2','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','pBr','░','░','Lr','ir','i','il','Lr','░','░','pBr','.','.',
        '.','.','bl','░','░','lb','g','B','g','lb','░','░','░','.','.',
        '.','.','cb','░','░','r','Br','trs','Br','r','░','░','░','.','.',
        '.','.','bl','░','░','lt','g','B','g','lt','░','░','░','.','.',
        '.','.','pBr','░','░','Lr','ir','i','il','Lr','░','░','░','.','.',
        '.','sf3','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','pBr','sf4','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','pBr','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','░','░','pB','L','░','p','░','L','pB','░','░','.','.',
        '.','.','.','.','.','.','.','e','.','.','.','.','.','.','.',
    ]
}
env.stages['city_street_city6'] = {
    locale: 'waterfrontcity',
    width: 16,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="citywater" class="waterfront"></canvas>`)
        stageWater="waterfront"
        RenderWater()
    },
    entities: {
        r: {
            class: "prop",
            contains: {
                dyp: {
                    class: "railing",
                    image: 'url(/img/local/city/railing.gif)',
                    width: 2,
                    height: 1,
                    transform: "rotateY(90deg)"
                }
            }
        },
        e: {
            teleportSpot: 187,
            teleportTarget: "city_street_city3"
        },
        wb: {
    	    class:"prop",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bench.gif)',
                    width: 3,
                    height: 1.25,
                    transform: "rotateY(90deg)"
                },
                examineEntity: "waterfront bench"
    	    }
        },
        lb: {
            class: "prop",
            contains: {
                dyp: { class: "railing", image: 'url(/img/local/city/railing.gif)', width: 2, height: 1, transform: "rotateY(90deg) translateX(-35%)" }
            }
        },
        lt: {
            class: "prop",
            contains: {
                dyp: { class: "railing", image: 'url(/img/local/city/railing.gif)', width: 2, height: 1, transform: "rotateY(90deg) translateX(35%)" }
            }
        }
    },
    plan: [
        '.','Lr','░','░','░','░','░','░','░','░','lb','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','pBr','░','░','░','░','░','░','░','Lr','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','Lr','░','░','░','░','░','░','pBr','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','bl','░','r','.','.','.','.','.',
        'e','p','░','░','░','░','░','░','wb','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','bl','░','r','.','.','.','.','.',
        '.','Lr','░','░','░','░','░','░','pBr','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','pBr','░','░','░','░','░','░','░','Lr','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','Lr','░','░','░','░','░','░','░','░','lt','.','.','.','.','.',
    ]
}





// DIALOGUE
env.definitions[`yuzku`] = `'sluggish bioluminescent scavengers';'intentionally cultivated in veilk parasite husks for lighting';'fatal if consumed'`;
env.definitions[`vaznian`] = `'ethnic implication';'origination from continent';'vazni'`;
env.definitions[`vazni`] = `'continent';'central to inhabitable zone'`;
env.definitions[`oltazni`] = `'vaznian cave-city'`;
// FOUNTAIN BENCH
env.dialogues["fountainbench"] = generateDialogueObject(`
start
    akizet
        ah, a bench 
        gordon, i can sit here, yes?

    envoy
        Yeah, that's fine, no one's siting here anyway.
        We've been walking for a while, so I don't think anyone will mind.

    sourceless
        the bench creaks as gordon and i sit upon it
            EXEC::setCam({x: 5, y: 11, rotation: 0})
        the wood of the bench is hard - not too comfortable to sit on, but it works
        the pattering of the fountain's water as it falls into the basin is an incessant noise as we sit
        but it is a little comfort between the cousins' dead-metal spires
        though - the longer i watch, the more i wonder from what endless source of water the fountain draws from...
        gordon shifts into a more comfortable position, drawing his communicator 

    envoy
        Enjoying the fountain?

    sourceless
        gordon fiddles with his communicator while i talk
        
    akizet
        it is quite fascinating!
        we do not have such things in my home
        though i must wonder how it works...

    envoy
        The wonders of technology, hm?
        Before you ask, I'm afraid I don't know too much about this sort of thing, sorry.
        Though we can stay here for a while longer, if you'd like to keep watching -

    sourceless
        gordon returns his communicator into his skin cloak

    envoy
        But I'm ready to go whenever you are.
        
    RESPONSES::akizet
        let us go, then<+>END
            EXEC::ResetCam()
`)



// BRIDGE BENCH
env.dialogues["bridgebench"] = generateDialogueObject(`
start
    sourceless
        i dawdle at the railing of the bridge, looking into the ripping waters of the city 
        gordon sits behind me on a bench, watching me and the city beyond the sea
        the brisk wind of the bright cousins' nights curls around my receptors 
        the light of the lamps and stars shine, reflected, in the night waters 
        even the dull contrivance gleams in the dark sea...

    envoy 
        Enjoying the view, Akizet?
        It's much better at night, isn't it?

    akizet 
        ... ah- yes, yes it is 
        is it always like this?

    envoy 
        What, the ocean?
        It's pretty much like this every night, yeah.
        Some people come here just to see this -
        though you won't see many people here, this is one of the quieter spots.
        The city is usually pretty quiet at night, anyway.
        Why do you ask?

    akizet 
        oh, i see...
        i was just wondering - on obeski the oceans are not like this at all 
        they are much... darker at night
        the stars do not shine as bright as they do upon your oceans
        though i have not been upon our coasts too often

    envoy 
        Oh, you said you came from... 

    akizet 
        oltazni?
        it is far away from many of the coastlines of vazni
        though i have seen a few rivers and lakes on my time upon the surface 
        and i have been to the coast once, of course, when i was still running 
        our oceans are not too dissimilar to yours

    sourceless 
        gordon nods his head thoughtfully 
        
    envoy
        It's beautiful, isn't it?
       
    RESPONSES::akizet
        yes, it is<+>END
            EXEC::ResetCam()
`)



// STREETS BENCH
env.dialogues["streetsbench"] = generateDialogueObject(`
start
    sourceless
        gordon and i step off the main path, sitting upon a bench
            EXEC::setCam({x: 8, y: 8, rotation: 90})
        through the light parasites, i watch the street across us
        the cousins' vehicles crawl slowly across their roads
        they move in tandem with one another, like a herd of veilk
        though - some disrupt that pattern, blaring loudly as they do so
        through the window of each, i can see the obscured shape of a bright cousin...
        surely learning to pilot one such vehicle would be easy, then?
        it seems as though every cousin knows how to pilot one...

    akizet
        gordon - about your vehicles...
        how difficult would it be to learn to operate one?

    sourceless
        gordon produces a strange sound through his nose

    envoy
        What? You want to learn to drive?
        I don't think <em>anyone's</em> taught an obesk to drive yet,
        and, honestly, I don't think anyone would be willing to let one use a car.
        Though - I heard that your exchange initiative got a car a few days ago...
        A Ford F150 I think?
        Maybe you can ask one of them to teach you - if they've figured it out.

    akizet
        ah - i had heard it was given to the materials initiative
        but that might mean it would have already been disassembled...
        you would not happen to let me see yours, would you?

    sourceless
        gordon nods his head in disagreement 

    envoy
        As much as I would love to see you drive a car, I don't have one.
        I live pretty close by to the office, so I just walk instead.
        I don't really travel much besides for work anyway.

    akizet
        i see...

    RESPONSES::akizet
        perhaps not, then<+>END
            EXEC::ResetCam()
`)



// PARK BENCH
env.dialogues["parkbench"] = generateDialogueObject(`
start
    sourceless
        gordon and i sit - a slight breeze ruffling our clothes
            EXEC::setCam({x: 6, y: 7, rotation: 270})
        many of the cousins' light parasites pervade this place, moreso than the rest of the city
        perhaps a place to contain them?
        even so, i find they are quite beautiful
        their colours and form are far-removed from anything known on obeski...
        suddenly, i am filled with an alien curiosity
        i begin to examine the one closest to me more intently
            EXEC::setCam({x: 6, y: 6, rotation: 45});HideGordon();
        the parasite curls and twists its tendrils in strange ways
        cyst-like bulbs lie upon the tendrils, like celki
        parasites upon the parasite? surely that is not the case
        i prod at it, but it seems to provoke no reaction from the parasite
        is it even alive?
        gordon watches me from the other side of the bench

    envoy
        The flowers look nice at this time of year, don't they?
        I have a friend who works at a flower shop, if you're interested.
        Maybe you can talk to her then.

    akizet
        ah, "flowers" are what they are called?

    sourceless
        i turn back towards gordon
            EXEC::setCam({x: 6, y: 7, rotation: 270});ShowGordon();

    akizet
        that sounds interesting - i would like to visit sometime
        that is, if you can make time for it
        perhaps later today?

    envoy
        That sounds fine to me.
        I haven't talked to her in a while, so...
        I'm sure she'll be glad to see us.

    RESPONSES::akizet
        wonderful<+>END
            EXEC::ResetCam()
`)



// CITY BENCH
env.dialogues["citybench"] = generateDialogueObject(`
start
    sourceless
        i sit, motioning for gordon to sit beside me 
            EXEC::setCam({x: 3, y: 9, rotation: 270})
        as he sits, a strange ringing sounds from within his skin cloak
        gordon withdraws his communicator, mumbling a curse 

    envoy
        Akizet, I've gotta take a call, I'll be gone for a bit.
        Just... don't go too far, alright?
        You can window-shop, if you'd like.

    sourceless
        gordon sighs and leaves, bringing his communicator to his ear
            EXEC:: HideGordon();
        i am now left alone within this city
        perhaps i should do something to pass the time to when he returns...
        i cast my gaze across the city's marketplace
        it bears a sort of resemblance to the marketplaces of our cities
        the stalls, the sights and smells, the chatter between customers and vendors...
        i gaze through the clear glass of the stores, eager to see what they might offer
        i peruse through the glass of the store to my left
            EXEC::setCam({x: 3, y: 5, rotation: 90})
        the words "chocolatier" are emblazoned upon the glass, it seems
        through the glass, wrapped packages sit upon perches, swathed in multitudes of colours
        gordon had told me about this chocolate - a sweet delicacy for our cousins
        it seems something like citric acid to us, but not exactly
        perhaps the barfriend has a simulacrum...
        across the marketplace is another store
            EXEC::setCam({x: 11, y: 5, rotation: 270})
        strung plastic balls sway near the entrance, like strings of celki
        it is dark within, but i can see nonetheless
        a miscellany of things sit on display, like they would upon stalls within a cave-city's marketplace
        many do not seem to have a discernable purpose, though - decoration? leisure? it is hard to tell...
        i look towards my left, peering through the glass of the store
            EXEC::setCam({x: 3, y: 13, rotation: 90})
        necklaces and bracelets are placed upon still, pale-white imitations of our cousins
        gold and silver sparkle prettily in the light
        gemstones are cut into circles and squares, reflecting the light in different colours
        perhaps i could bring some of the bright cousins' jewelry back home...
        and across this store lies another
            EXEC::setCam({x: 11, y: 13, rotation: 270})
        but... i am unsure of its purpose
        twisting shapes and bizarre figures await
        might this be for decoration as well?
        if so, these are quite bizarre
        something only a vaznian surrealist would dream of - and want, for that matter...

    envoy
        Akizet!
            EXEC::setCam({x: 3, y: 9, rotation: 270})
 
    sourceless
        gordon waves from across the marketplace, walking towards me
        and he settles upon the bench, beside me
            EXEC::ShowGordon()

    akizet
        hello, gordon

    envoy
        Sorry for going, I just had to deal with some things.
        Are you ready to go?

    RESPONSES::akizet
        i am<+>END
            EXEC::ResetCam()
`)



// WATERFRONT BENCH
env.dialogues["waterfrontbench"] = generateDialogueObject(`
start
    sourceless
        i lean upon the railings before the city's waterfront
            EXEC::setCam({x: 9, y: 8, rotation: 270});HideGordon();
        gordon sits behind me, using his communicator
        the skies are clear and unshrouded, allowing our cousins' watchful star to gaze upon the ocean
        the star's glare reflects upon the water, tiny spots gleaming like yuzku of a cavelight 
        the ocean mirrors the hue of the sky, blue and endless
        across the ocean, i can see the rest of the city, sprawling across the cousins' earth
        their spires seem so tall despite how far i am
        to think they built their sprawling cities all by themselves 
        they look all the more impressive as they glimmer under their star's light...
        i step back, and sit beside gordon
            EXEC::ShowGordon();

    envoy
        So, Akizet,
        how are you enjoying the city?

    akizet
        so far?
        it is grand - larger than even our largest cities
        i feel as though i have explored so much... yet it seems that i have barely done so

    envoy
        Mhm...
        This <em>is</em> one of the bigger cities in the country, though -
        you'll see smaller cities and towns if you decide to travel for whatever reason.
        Those'll probably be about the size you expect.

    akizet
        i see...

    RESPONSES::akizet
        perhaps we could go someday<+>END
            EXEC::ResetCam()
`)
}
})
