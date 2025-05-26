/* THEIR STREETS, or, alternatively, Akizet Gets Lost in New York */
/* by Genseot */

// CUSTOM STUFF INITIALISATION 
content.insertAdjacentHTML('beforeend', `<link type="text/css" rel="stylesheet" href="https://genseot.github.io/mods/theirstreets/theirstreets.css">`) 
addResources(["/js/lib/pixi.js","/js/lib/pixi-gif.js",])

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
        try {
            page.pixi = new PIXI.Application({
                width: 1200,
                height: 1200,
                view: document.querySelector("#citywater"),
                backgroundAlpha: 0,
            })
            env.renderInit = async function() {
                env.citywater = await PIXI.Assets.load('https://genseot.github.io/mods/theirstreets/img/chromecmicro.gif')
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
}



// DEFAULT STAGEENTITIES
env.stageEntities['l'] = {
    class:"prop",
    contains: {
        slug: 'l',
        id: "lamp",
        class: "lamp"
    }
}
env.stageEntities['c'] = {
    class:"prop",
    contains: {
        slug: 'c',
        id: "konstrukt",
        class: "prop konstrukt"
    }
}
env.stageEntities['r'] = {
    class:"road",
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
        slug: 'B',
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





// DEFAULT STAGES
env.stages['city_street2'] = {
    locale: "city",
    width: 14,
    exec: ()=>{ 
        page.bgm.rate(1)
        EpisodeCheck()
    },

    entities: {
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4,
                    transform: "rotateY(90deg)"
                }
            } 
        },
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
        c: {
            class: "empty plain",
            id: "crosswalk"
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
        '.','L','░','r','r','r','r','░','░','░','░','░','r','.',
        '.','░','░','r','r','r','r','░','░','░','░','░','r','.',
        'm','░','░','c','c','c','c','░','░','░','░','░','e','f',
        '.','░','░','r','r','r','r','j','░','░','░','░','r','.',
        '.','L','░','r','r','r','r','░','░','░','░','░','r','.',
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
                slug: 'fb',
                id: "fountainbench",
                class: "bench",
                dyp: {
                    width: 3,
                    height: 1.5
                }
    	    }
        },    
        B: {
    	    class:"prop",
    	    contains: {
                slug: 'B',
                id: "bush",
                class: "bush"
    	    }	
        },  
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4
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
        '.','░','░','░','░','fb','░','░','░','░','.',
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
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4
                }
            } 
        }, 
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
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4
                }
            } 
        },
        f: {
            teleportSpot: 97,
            teleportTarget: "city_street_fountain"
        },
        t: {
            teleportSpot: 36,
            teleportTarget: "city_street_bridge1"
        },
        b: {
            teleportSpot: 23,
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
    width: 11,
    exec: () => {
        page.bgm.rate(1)
        EpisodeCheck()
    },
    entities: {
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4
                }
            } 
        },        
        c: {
            class: "empty plain",
            id: "crosswalk"
        },
        e: {
            teleportSpot: 63,
            teleportTarget: "city_street_bridge2"
        },
        b: {
            teleportSpot: 110,
            teleportTarget: "city_street_bridge4",
            shouldFace: "left"
        }
    },
    plan: [
        '.','L','.','.','.','L','.','.','.','L','.',
        '.','░','░','░','░','░','░','░','░','░','.',
        'e','p','░','░','░','░','░','░','░','░','b',
        '.','░','░','░','░','░','░','░','░','░','.',
        'r','r','r','r','r','c','r','r','r','r','r', 
        'r','r','r','r','r','c','r','r','r','r','T',
        'r','r','r','r','r','c','r','r','r','r','r',
        'r','r','r','r','r','c','r','r','r','r','T',
        '.','░','░','░','░','░','░','░','░','░','.',
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
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4
                }
            } 
        },
        e: {
            teleportSpot: 32,
            teleportTarget: "city_street_bridge3",
            shouldFace: "left"
        },
        b: {
            teleportSpot: 232,
            teleportTarget: "city_street_bridge5",
            shouldFace: "down"
        }
    },
    plan: [
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','T',
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r',
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','T',
        'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r',
        'r','r','r','r','l','.','.','.','l','.','.','.','l','.','.','.',
        'r','r','r','r','.','░','░','░','░','░','░','░','░','░','░','.',
        'r','r','r','r','.','░','░','░','░','░','░','░','░','░','░','e',
        'r','r','r','r','.','░','░','░','░','░','░','░','░','░','░','.',
        'r','r','r','r','l','░','░','░','L','.','.','.','L','.','.','.',
        'r','r','r','r','.','░','░','░','.','.','.','.','.','.','.','.',
        'r','r','r','r','.','░','░','░','.','.','.','.','.','.','.','.',
        'r','r','r','r','.','░','░','░','.','.','.','.','.','.','.','.',
        'r','r','r','r','l','░','░','░','L','.','.','.','.','.','.','.',
        'r','r','r','r','.','░','░','░','.','.','.','.','.','.','.','.',
        'r','r','r','r','.','L','p','L','.','.','.','.','.','.','.','.',
        'r','R','r','R','.','.','b','.','.','.','.','.','.','.','.','.',
    ]
} 
env.stages['city_street_bridge5'] = {
    locale: 'nightcity',
    width: 15,
    exec: () => {
        page.bgm.rate(0.8)
        EpisodeCheck()
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="water"></canvas>`)
        RenderWater()
    },
    entities: {
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4
                }
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
            teleportSpot: 233,
            teleportTarget: "city_street_bridge4",
            shouldFace: "down"
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
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="water"></canvas>`)
        RenderWater()
    },
    entities: {
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4
                }
            } 
        },
        bb: {
    	    class:"prop",
    	    contains: {
                slug: 'bb',
                id: "bridgebench",
                class: "bench",
                dyp: {
                    width: 3,
                    height: 1.5
                }
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
        '.','.','.','.','r','E','░','░','░','░','░','░','░','░','r','.','.','.','.',
        '.','.','.','.','r','░','░','░','░','░','░','░','bb','░','r','.','.','.','.',
        '.','.','.','.','r','░','░','░','░','░','░','░','░','░','r','.','.','.','.',
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
        content.querySelector("#realgrid").insertAdjacentHTML('beforeend', `<canvas id="water"></canvas>`)
        RenderWater()
    },
    entities: {
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4
                }
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
            teleportSpot: 1,
            teleportTarget: "city_street_fountain"
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
            teleportSpot: 65,
            teleportTarget: "city_street_streets2"
        }
    },
    plan: [
        '.','r','r','r','.','.','s','.','.','.','.','.','.','.','.',
        '.','r','r','r','l','░','░','░','.','.','.','.','.','.','.',
        '.','r','r','r','.','░','░','░','.','.','.','.','.','.','.',
        '.','r','r','r','.','░','░','░','.','.','.','.','.','.','.',
        '.','r','r','r','.','░','░','░','.','.','.','.','.','.','.',
        '.','r','r','r','l','░','░','░','.','.','.','.','.','.','.',
        '.','r','r','r','.','░','░','░','.','.','.','.','.','.','.',
        '.','r','r','r','l','░','░','░','░','░','░','░','░','░','.',
        '.','r','r','r','.','░','░','░','░','░','░','░','░','p','f',
        '.','r','r','r','.','░','░','░','░','░','░','░','░','░','.',
        '.','r','r','r','l','.','.','l','.','.','.','l','.','.','l',
        '.','r','r','r','r','r','r','r','r','r','r','r','r','r','T',
        '.','r','r','r','r','r','r','r','r','r','r','r','r','r','r',
        '.','R','r','R','r','r','r','r','r','r','r','r','r','r','T',
        '.','.','.','.','.','.','.','.','.','.','.','.','.','.','.',
    ]
}
env.stages['city_street_streets2'] = {
    locale: 'city',
    width: 9,
    exec: ()=>{
        page.bgm.rate(0.8)
        EpisodeCheck()
    },
    entities: {
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4
                }
            } 
        },  
        e: {
            teleportSpot: 19,
            teleportTarget: "city_street_streets1"
        },
        s: {
            teleportSpot: 1,
            teleportTarget: "city_street_streets3"
        },
        c: {
            teleportSpot: 37,
            teleportTarget: "city_street_city1"
        }
    },
    plan: [
        '.','s','.','.','r','r','l','.','.',
        '.','░','░','.','r','r','.','.','.',
        '.','░','░','.','r','r','.','.','.',
        '.','░','░','.','r','r','l','.','l',
        '.','░','░','.','r','r','r','r','r',
        '.','░','░','.','r','r','r','r','r',
        '.','░','░','L','.','.','.','.','.',
        '.','░','░','░','░','░','░','░','c',
        '.','p','░','░','░','░','░','░','.',
        '.','e','.','.','.','.','.','.','.',
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
        L: {
            class: "prop",
            contains: { 
                dyp: {
                    image: 'url(/img/local/city/blacklamp.gif)',
                    width: 1.5,
                    height: 4
                }
            } 
        }, 
        f: {
            teleportSpot: 16,
            teleportTarget: "city_street_fountain"
        },
        s: {
            teleportSpot: 62,
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
    	    class:"prop",
    	    contains: {
                slug: 'B',
                id: "bush",
                class: "bush"
    	    }	
        },
        t: {
            class:"prop",
            contains: {
                slug: "t",
                id: "tree",
                class: "tree"
            }
        },
        c: {
            teleportSpot: 1,
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
        '.','r','r','r','.','.','░','░','░','░','░','.','.','r','r','r','.',
        '.','r','r','r','.','░','░','░','░','░','░','░','.','r','r','r','.',
        '.','r','r','r','l','░','░','B','B','B','░','░','l','r','r','r','.',
        '.','r','r','r','░','░','B','B','t','B','B','░','░','r','r','r','.',
        '.','r','r','r','░','░','B','t','.','t','B','░','░','r','r','r','.',
        '.','r','r','r','░','░','B','.','t','.','B','░','░','r','r','r','.',
        '.','r','r','r','░','░','B','t','.','t','B','░','░','r','r','r','.',
        '.','r','r','r','░','░','B','B','t','B','B','░','░','r','r','r','.',
        '.','r','r','r','l','░','░','B','B','B','░','░','l','r','r','r','.',
        '.','r','r','r','.','░','░','░','░','░','░','░','.','r','r','r','.',
        '.','r','r','r','.','.','░','░','░','░','░','.','.','r','r','r','.',
        '.','r','r','r','.','.','.','░','░','░','.','.','.','r','r','r','.',
        '.','r','r','r','.','.','.','l','p','l','.','.','.','r','r','r','.',
        '.','R','r','R','.','.','.','.','e','.','.','.','.','R','r','R','.',
    ]
}
