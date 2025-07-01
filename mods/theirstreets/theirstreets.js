/* THEIR STREETS, or, alternatively, Akizet Gets Lost in New York */
/* by Genseot */

/* TABLE OF CONTENTS */
/*
CUSTOM STUFF INITIALISATION
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
    
*/

// CUSTOM STUFF INITIALISATION 
content.insertAdjacentHTML('beforeend', `<link type="text/css" rel="stylesheet" href="https://genseot.github.io/mods/theirstreets/theirstreets.css">`) 
addResources(["/js/lib/pixi.js","/js/lib/pixi-gif.js",])
var stageWater

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
        dyp: {
            image: 'url(/img/local/city/lampflip.gif)',
            width: 1.5,
            height: 4
        }
    }
}
env.stageEntities['lr'] = {
    class:"prop",
    contains: {
        dyp: {
            image: 'url(/img/local/city/lamp.gif)',
            width: 1.5,
            height: 4,
            transform: "rotateY(90deg)"
        }
    }
}
env.stageEntities['lfr'] = {
    class:"prop",
    contains: {
        dyp: {
            image: 'url(/img/local/city/lampflip.gif)',
            width: 1.5,
            height: 4,
            transform: "rotateY(90deg)"
        }
    }
}
env.stageEntities['L'] = {
    class: "prop",
    contains: { 
        dyp: {
            image: 'url(/img/local/city/blacklamp.gif)',
            width: 1.5,
            height: 4
        }
    } 
}
env.stageEntities['Lr'] = {
    class: "prop",
    contains: { 
        dyp: {
            image: 'url(/img/local/city/blacklamp.gif)',
            width: 1.5,
            height: 4,
            transform: "rotateY(90deg)"
        }
    } 
}
env.stageEntities['c'] = {      
    class:"empty plain",
    id: "crosswalk"
}
env.stageEntities['r'] = {
    class:"road"
}
env.stageEntities['R'] = {
    class:"road prop",
    contains: {
        slug: 'R',
        id: "car",
        class: "prop car"
    }
}
env.stageEntities['T'] = {
    class:"road prop",
    contains: {
        slug: 'R',
        id: "car",
        class: "prop car sideways"
    }
}
env.stageEntities['E'] = {
    class: "prop later",
    contains: {
        slug: 'E',
        id: 'busy',
        class: "civvie busy eyeball",
    }
}
env.stageEntities['S'] = {
    class: "prop later",
    contains: {
        slug: 'S',
        id: 'slim',
        class: "civvie slim",
    }
}
env.stageEntities['C'] = {
    class: "prop later",
    contains: {
        slug: 'C',
        id: 'creep',
        class: "civvie creep",
    }
}
// CUSTOM ENTITIES
createEntity({
    name: 'fountain bench',
    type: "recollection thoughtform portrait-bright portrait-cover",
    image: 'https://genseot.github.io/mods/theirstreets/img/bench.gif',
    text: `::INCOMPLETE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection';'unique scenery'
    <span style="color:var(--obesk-color)" definition="ANALYSIS::'degraded recollection'">::INCOHERENCE DETECTED</span>`,
    actions: [{
         name: "sit",
         exec: ()=>startDialogue('fountainbench')
    }]
}),
createEntity({
    name: 'bridge bench',
    type: "recollection thoughtform portrait-bright portrait-cover",
    image: 'https://genseot.github.io/mods/theirstreets/img/bench.gif',
    text: `::INCOMPLETE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection';'unique scenery'
    <span style="color:var(--obesk-color)" definition="ANALYSIS::'degraded recollection'">::INCOHERENCE DETECTED</span>`,
    actions: [{
         name: "sit",
         exec: ()=>startDialogue('bridgebench')
    }]
}),
createEntity({
    name: 'streets bench',
    type: "recollection thoughtform portrait-bright portrait-cover",
    image: 'https://genseot.github.io/mods/theirstreets/img/bench.gif',
    text: `::INCOMPLETE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection';'unique scenery'
    <span style="color:var(--obesk-color)" definition="ANALYSIS::'degraded recollection'">::INCOHERENCE DETECTED</span>`,
    actions: [{
         name: "sit",
         exec: ()=>startDialogue('streetsbench')
    }]
}),
createEntity({
    name: 'park bench',
    type: "recollection thoughtform portrait-bright portrait-cover",
    image: 'https://genseot.github.io/mods/theirstreets/img/bench.gif',
    text: `::INCOMPLETE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection';'unique scenery'
    <span style="color:var(--obesk-color)" definition="ANALYSIS::'degraded recollection'">::INCOHERENCE DETECTED</span>`,
    actions: [{
         name: "sit",
         exec: ()=>startDialogue('parkbench')
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
    },

    entities: {
        F: {
    	    class:"prop",
    	    contains: {
                slug: 'F',
                id: "fountain",
                class: "fountain"
    	    }	
        },
        fb: {
    	    class:"prop",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bench.gif)',
                    width: 3,
                    height: 1.25
                },
                examineEntity: "fountain bench"
    	    }
        },    
        B: {
    	    class:"prop grass",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)',
                    width: 1.25,
                    height: 1.25,
                }
    	    }		
        },     
        m: {
            teleportSpot: 57,
            teleportTarget: "city_street2",
            shouldFace: "right"
        },
        s: {
            teleportSpot: 124,
            teleportTarget: "city_street_streets1"
        },
        b: {
            teleportSpot: 53,
            teleportTarget: "city_street_bridge2"
        },
        c: {
            teleportSpot: 68,
            teleportTarget: "city_street_city1"
        },
        bl: {
            class: "prop"
	    }
    },
    plan: [
        '.','.','.','.','.','c','.','.','.','.','.',
        '.','B','B','░','░','░','░','░','B','B','.',
        '.','B','░','░','░','░','░','░','░','B','.',
        '.','░','░','░','░','░','░','░','░','░','.',
        '.','░','░','░','░','░','░','░','░','░','.',
        '.','L','░','░','░','░','░','░','░','L','.',
        '.','░','░','░','S','F','░','░','░','░','.',
        '.','░','░','░','F','F','F','░','░','░','.',
        's','░','░','F','F','F','F','F','░','░','b',
        '.','░','░','░','F','F','F','░','░','░','.',
        '.','░','░','░','░','F','░','░','░','░','.',
        '.','L','░','░','░','░','░','░','░','L','.',
        '.','░','░','░','bl','fb','bl','░','░','░','.',
        '.','░','░','░','░','░','░','░','░','░','.',
        '.','B','░','░','░','░','░','░','░','B','.',
        '.','B','B','░','░','p','░','░','B','B','.',
        '.','.','.','.','.','m','.','.','.','.','.',
    ]
}






// BRIDGE
env.stages['city_street_bridge1'] = {
    locale: 'city',
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
        t: {
            teleportSpot: 36,
            teleportTarget: "city_street_bridge1"
        },
        b: {
            teleportSpot: 27,
            teleportTarget: "city_street_bridge3"
        }
    },
    plan: [
        '.','.','.','.','.','.','t','.','.','.','.','.','.',
        '.','.','.','.','.','░','░','░','.','.','.','.','.',
        '.','.','.','.','L','░','░','░','L','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','░','░','.',
        'f','p','░','░','░','░','░','░','░','░','░','░','b',
        '.','░','░','░','░','░','░','░','░','░','░','░','.',
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
        '.','░','░','░','░','r','r','r','░','░','░','░','.',
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
        '.','.','.','.','.','.','.','.','.','L','░','░','l','r','r','r',
        '.','.','.','.','.','.','.','.','.','.','░','░','░','r','r','r',
        '.','.','.','.','.','.','.','.','.','.','░','░','░','r','r','r',
        '.','.','.','.','.','.','.','.','.','.','░','░','l','r','r','r',
        '.','L','.','.','.','L','.','.','.','L','░','░','░','r','r','r',
        '.','░','░','░','░','░','░','░','░','░','░','░','░','r','r','r',
        'e','p','░','░','░','░','░','░','░','░','░','░','░','r','r','r',
        '.','░','lr','░','░','░','░','lr','░','░','░','░','l','r','r','r',
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
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="citywater"></canvas>`)
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
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="citywater"></canvas>`)
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
        },
        bl: {
            class: "prop"
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
        '.','.','.','.','r','E','░','░','░','░','░','░','bl','░','r','.','.','.','.',
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
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="citywater"></canvas>`)
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
    width: 15,
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
        '.','r','r','r','.','.','s','.','.','.','.','.','.','.','.',
        '.','r','r','r','l','░','░','░','.','.','.','.','.','.','.',
        '.','r','r','r','.','░','░','░','.','.','.','.','.','.','.',
        '.','r','r','r','.','░','░','░','.','.','.','.','.','.','.',
        '.','r','r','r','.','░','░','░','.','.','.','.','.','.','.',
        '.','r','r','r','l','░','░','░','L','.','.','.','.','.','.',
        '.','r','r','r','.','░','░','░','░','░','░','░','░','░','.',
        '.','r','r','r','.','░','░','░','░','░','░','░','░','p','f',
        '.','r','r','r','.','░','░','░','░','░','░','░','░','░','.',
        '.','r','r','r','l','.','.','lr','.','.','.','lr','.','.','lr',
        '.','r','r','r','r','r','r','r','r','r','r','r','r','r','T',
        '.','r','r','r','r','r','r','r','r','r','r','r','r','r','r',
        '.','R','r','R','r','r','r','r','r','r','r','r','r','r','T',
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
            teleportSpot: 21,
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
        'r','r','r','lr','░','░','Lr','.','.','.',
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
        Br: {
    	    class:"prop grass",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)',
                    width: 1.25,
                    height: 1.25,
                    transform: "rotateY(90deg)"
                }
    	    }	
        }, 
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
            teleportSpot: 120,
            teleportTarget: "city_street_city4"
        }
    },
    plan: [
        'r','r','r','.','s','.','.','.','.',
        'r','r','r','░','░','░','Lr','.','.',
        'r','r','r','lr','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','lr','░','░','Br','.','.',
        'r','r','r','░','░','░','░','░','.',
        'r','r','r','░','░','░','░','░','cg',
        'r','r','r','░','░','░','░','░','.',
        'r','r','r','lr','░','░','Br','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','lr','░','░','.','.','.',
        'r','r','r','░','p','░','Lr','.','.',
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
        bl: {
            class: "prop"
	    },
        B: {
    	    class:"prop grass",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)',
                    width: 1.25,
                    height: 1.25,
                }
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
        'r','r','r','░','░','░','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.',
        'r','r','r','lr','░','░','Lr','.','.','.','.','.','.',
        'r','r','r','░','░','░','░','░','B','B','.','.','.',
        'r','r','r','░','░','░','░','░','bl','B','.','.','.',
        'r','r','r','░','░','░','░','░','sb','B','.','.','.',
        'r','r','r','lr','░','░','░','░','bl','B','.','.','.',
        'r','r','r','░','░','░','░','░','B','B','.','.','.',
        'r','r','r','░','░','░','Lr','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.',
        'r','r','r','lr','░','░','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','L','.','.','.','.','L','.',
        'r','r','r','░','░','░','░','░','░','░','░','░','.',
        'r','r','r','░','░','░','░','░','░','░','░','p','e',
        'r','r','r','l','░','░','░','l','░','░','░','l','.',
        'r','r','r','r','r','r','r','r','r','r','r','r','T',
        'r','r','r','r','r','r','r','r','r','r','r','r','T',
        'R','r','R','r','r','r','r','r','r','r','r','r','r',
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
        c : {
            teleportSpot: 22,
            teleportTarget: "city_street_city5"
        }
    },
    plan: [
        'r','r','r','.','s','.','.','.','.',
        'r','r','r','░','░','░','Lr','.','.',
        'r','r','r','l','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','l','░','░','.','.','.',
        'r','r','r','░','░','░','░','░','.',
        'r','r','r','░','░','░','░','░','c ',
        'r','r','r','░','░','░','░','░','.',
        'r','r','r','l','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','░','░','░','.','.','.',
        'r','r','r','l','░','░','.','.','.',
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
        'r','r','r','░','░','░','Lr',
        'r','r','r','l','░','░','.',
        'r','r','r','░','░','░','░',
        'r','r','r','░','░','░','░',
        'r','r','r','l','░','░','░',
        'r','r','r','r','c','r','r',
        'r','r','r','r','c','r','r',
        'r','r','r','r','c','r','r',
        'r','r','r','l','░','░','░',
        'r','r','r','░','░','░','░',
        'r','r','r','░','░','░','░',
        'r','r','r','l','░','░','.',
        'r','r','r','░','p','░','Lr',
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
        'r','r','r','░','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','l','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','l','░','░','.','.','.','.','.','.','.','.','.','.',
        'r','r','r','░','░','░','L','.','.','.','L','.','.','.','L','.',
        'r','r','r','░','░','░','░','░','░','░','░','░','░','░','░','.',
        'r','r','r','░','░','░','░','░','░','░','░','░','░','░','p','e',
        'r','r','r','l','░','░','l','░','░','l','░','░','l','░','░','.',
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','T',
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','T',
        'R','r','R','r','r','r','r','r','r','r','r','r','r','r','r','r',
    ]
}







// CITY 
env.stages['city_street_city1'] = {
    locale: 'city',
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
    locale: 'city',
    width: 17,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        B: {
    	    class:"prop grass",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)',
                    width: 1.25,
                    height: 1.25,
                }
    	    }		
        }, 
        t: {
            class:"prop",
            contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/tree.gif)',
                    width: 1.5,
                    height: 4
                }
            }
        },
        g: {
            class:"empty prop grass"
        },
        c: {
            teleportSpot: 367,
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
        '.','r','r','r','lr','░','░','B','B','B','░','░','lr','r','r','r','.',
        '.','r','r','r','░','░','B','B','t','B','B','░','░','r','r','r','.',
        '.','r','r','r','░','░','B','t','g','t','B','░','░','r','r','r','.',
        '.','r','r','r','░','░','B','g','t','g','B','░','░','r','r','r','.',
        '.','r','r','r','░','░','B','t','g','t','B','░','░','r','r','r','.',
        '.','r','r','r','░','░','B','B','t','B','B','░','░','r','r','r','.',
        '.','r','r','r','lr','░','░','B','B','B','░','░','lr','r','r','r','.',
        '.','r','r','r','.','░','░','░','░','░','░','░','.','r','r','r','.',
        '.','r','r','r','.','L','░','░','░','░','░','L','.','r','r','r','.',
        '.','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','.',
        '.','r','r','r','.','.','.','l','p','l','.','.','.','r','r','r','.',
        '.','R','r','R','.','.','.','.','e','.','.','.','.','R','r','R','.',
    ]
}
env.stages['city_street_city3'] = {
    locale: 'city',
    width: 21,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        B: {
    	    class:"prop grass",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)',
                    width: 1.25,
                    height: 1.25,
                }
    	    }		
        },    
        t: {
            class:"prop",
            contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/tree.gif)',
                    width: 1.5,
                    height: 4
                }
            }
        },  
        ce: {
            teleportSpot: 25,
            teleportTarget: "city_street_city2"
        },
        cg: {
            teleportSpot: 115,
            teleportTarget: "city_street_city4"
        },
        cm: {
            teleportSpot: 261,
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
        '.','░','lr','r','r','r','.','t','B','░','░','░','B','t','.','r','r','r','lr','░','.',
        '.','░','░','r','r','r','.','B','B','░','░','░','B','B','.','r','r','r','░','░','.',
        '.','░','░','r','r','r','Lr','░','░','░','░','░','░','░','Lr','r','r','r','░','░','.',
        '.','░','░','r','r','r','░','░','░','░','░','░','░','░','░','r','r','r','░','░','.',
        '.','░','lr','r','r','r','lr','░','░','░','░','░','░','░','lr','r','r','r','lr','░','.',
        '.','░','░','c','c','c','░','░','░','░','░','░','░','░','░','c','c','c','░','░','.',
        'cg','░','░','c','c','c','░','░','░','░','░','░','░','░','░','c','c','c','░','░','cw',
        '.','░','░','c','c','c','░','░','░','░','░','░','░','░','░','c','c','c','░','░','.',
        '.','░','lr','r','r','r','lr','░','░','░','░','░','░','░','lr','r','r','r','lr','░','.',
        '.','░','░','r','r','r','░','░','░','░','░','░','░','░','░','r','r','r','r','░','.',
        '.','░','░','r','r','r','Lr','░','░','░','░','░','░','░','Lr','r','r','r','r','░','.',
        '.','░','░','r','r','r','.','B','B','░','░','░','B','B','.','r','r','r','░','░','.',
        '.','░','lr','r','r','r','.','t','B','░','░','░','B','t','.','r','r','r','lr','░','.',
        '.','░','░','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','░','░','.',
        '.','░','░','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','░','░','.',
        '.','░','░','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','░','░','.',
        '.','░','lr','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','lr','░','.',
        '.','░','░','r','r','r','.','.','.','L','p','L','.','.','.','r','r','r','░','░','.',
        '.','.','.','r','r','r','.','.','.','.','ce','.','.','.','.','r','r','r','.','.','.',

    ]
}
env.stages['city_street_city4'] = {
    locale: 'city',
    width: 13,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        B: {
    	    class:"prop grass",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)',
                    width: 1.25,
                    height: 1.25,
                    transform: "rotateY(90deg)"
                }
    	    }		
        }, 
        Br: {
    	    class:"prop grass",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bush.gif)',
                    width: 1.25,
                    height: 1.25,
                    transform: "rotateY(90deg)"
                }
    	    }	
        }, 
        t: {
            class:"prop grass",
            contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/tree.gif)',
                    width: 1.5,
                    height: 4
                }
            }
        },
        t: {
            class:"prop grass",
            contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/tree.gif)',
                    width: 1.5,
                    height: 4,
                    transform: "rotateY(90deg)"
                }
            }
        },
        g: {
            class:"empty prop grass"
        },
        gb: {
    	    class:"prop",
    	    contains: {
                dyp: {
                    image: 'url(https://genseot.github.io/mods/theirstreets/img/bench.gif)',
                    width: 3,
                    height: 1.25,
                    transform: "rotateY(270deg)"
                },
                examineEntity: "garden bench"
    	    }
        }, 
        e: {
            teleportSpot: 169,
            teleportTarget: "city_street_city3"
        },
        s: {
            teleportSpot: 70,
            teleportTarget: "city_street_streets3"
        },
        bl: {
            class: "prop"
	    }
    },
    plan: [
        '.','.','.','.','.','.','.','.','.','.','.','.','.',
        '.','t','g','B','g','g','B','g','g','B','g','t','.',
        '.','g','░','░','░','░','░','░','░','░','░','g','.',
        '.','Br','░','░','░','░','░','░','░','░','░','Br','.',
        '.','g','░','t','g','B','░','B','g','t','░','g','.',
        '.','Br','░','g','Lr','g','░','░','Lr','g','░','Br','.',
        '.','Lr','░','Br','g','g','░','░','░','Br','░','Lr','.',
        '.','░','░','g','Br','g','░','░','bl','g','░','░','.',
        's','░','░','g','tr','g','░','░','gb','g','░','p','e',
        '.','░','░','g','Br','g','░','░','bl','g','░','░','.',
        '.','Lr','░','Br','g','g','░','░','░','Br','░','Lr','.',
        '.','Br','░','g','Lr','g','░','░','Lr','g','░','Br','.',
        '.','g','░','t','g','B','░','B','g','t','░','g','.',
        '.','Br','░','░','░','░','░','░','░','░','░','Br','.',
        '.','g','░','░','░','░','░','░','░','░','░','g','.',
        '.','t','g','B','g','g','B','g','g','B','g','t','.',
        '.','.','.','.','.','.','.','.','.','.','.','.','.',
    ]
}
env.stages['city_street_city5'] = {
    locale: 'city',
    width: 15,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
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
            teleportTarget: "city_street_streets5"
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
        bl: {
            class: "prop"
	    }
    },
    plan: [
        '.','.','.','.','.','.','.','s','.','.','.','.','.','.','.',
        '.','.','t','g','g','Lr','░','░','░','Lr','g','g','t','.','.',
        '.','.','g','g','░','░','░','░','░','░','░','g','g','.','.',
        '.','.','g','░','░','░','░','░','░','░','░','░','g','.','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','░','░','░','Lr','ir','i'','il','Lr','░','░','░','.','.',
        '.','.','bl','░','░','lb','g','B','g','lb','░','░','░','.','.',
        '.','.','cb','░','░','r','B','t','B','r','░','░','░','.','.',
        '.','.','bl','░','░','lt','g','B','g','lt','░','░','░','.','.',
        '.','.','░','░','░','Lr','ir','i','il','Lr','░','░','░','.','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','░','░','░','░','░','░','░','░','░','░','░','.','.',
        '.','.','g','░','░','░','░','░','░','░','░','░','g','.','.',
        '.','.','g','g','░','░','░','░','░','░','░','g','g','.','.',
        '.','.','t','g','g','Lr','░','p','░','Lr','g','g','t','.','.',
        '.','.','.','.','.','.','.','e','.','.','.','.','.','.','.',
    ]
}
env.stages['city_street_city6'] = {
    locale: 'city',
    width: 16,
    exec: ()=>{
        page.bgm.rate(1)
        EpisodeCheck()
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="citywater"></canvas>`)
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
        bl: {
            class: "prop"
	    }
    },
    plan: [
        '.','Lr','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','Lr','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','bl','░','r','.','.','.','.','.',
        'e','p','░','░','░','░','░','░','wb','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','bl','░','r','.','.','.','.','.',
        '.','Lr','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
        '.','Lr','░','░','░','░','░','░','░','░','r','.','.','.','.','.',
    ]
}





// DIALOGUE
// FOUNTAIN BENCH
env.dialogues.fountainresp1 = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        
`)
env.dialogues["fountainbench"] = generateDialogueObject(`
start
    RESPONSES::akizet
        end<+>END
`)



// BRIDGE BENCH
env.dialogues.bridgeresp1 = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        
`)
env.dialogues["bridgebench"] = generateDialogueObject(`
start
    RESPONSES::akizet
        end<+>END
`)



// STREETS BENCH
env.dialogues.streetsresp1 = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        
`)
env.dialogues["streetsbench"] = generateDialogueObject(`
start
    RESPONSES::akizet
        end<+>END
`)
