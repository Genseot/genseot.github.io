/* call research::spatial combat */
/* by genseot */

/* TABLE OF CONTENTS */
/*
- INITIALISATION
- ACTORS
    - ALLY ACTORS
    - ENEMY ACTORS
        - CALL RESEARCH ACTORS
        - ARCHIVAL ACTORS
- ACTIONS
    - ALLY ACTIONS
    - CALL RESEARCH ACTIONS
    - ARCHIVAL ACTIONS
- SCENARIOS
    - CALL RESEARCH SCENARIOS
    - ARCHIVAL SCENARIOS
- SKIPS
- DIALOGUES
    - d3_tutorial
    - d3_tutorial_end
    - d3_rec_enter
    - d3_rec_clear
    - d3_person_intro
    - d3_person_clear
    - d3r2_containerinspect 
    - d3r2_containerambush
    - d3r2_postcombat
    - d3_relocator_repair
    - d3_movefriend_finish
    - d3_bstrdintro
    - d3_archiveintro
    - d3_archivalvein_intro
    - d3_archivalvein
    - d3_archivecore_intro
    - d3_archivecore
    - d3_archivedelivery
    - d3_archivedeliveryclear
    - d3_archivemini
    - d3_archiveboss
    - d3_archivebossend
    - loss
- STAGES
    - CALL RESEARCH STAGES
    - ARCHIVAL STAGES
*/

/* TODO:: */
/*
    - if youre reading this hi
*/





// - INITIALISATION
function KillEveryone() {
    setTimeout(()=>{ env.stage.current.onStep(); }, 1000)
}
function ResetMusic() { 
    setTimeout(()=>{ env.noBgmDuck = true; changeBgm(env.embassy.music_collapse, {rate:1}); }, 1000)
}

function EvilMovefriend() {
    setTimeout(()=> { document.querySelector('#realgrid .lifter').classList.remove('fixed');document.querySelector('#realgrid .lifter').classList.add('aggressormode') }, 1000)
}



document.addEventListener('corru_entered', ()=>{
if(page.path == "/local/ocean/embassy/") {
addResources([
        "/js/combat/combatGrid.js",
        "/js/combat/combatTileEffects.js",
        "/js/combat/combatGridScenarios.js",
        "https://genseot.github.io/mods/spatialcollapse/grm.js",
])  
content.insertAdjacentHTML("beforeend", `<link href="/css/combatGrid.css" rel="stylesheet" type="text/css" media="all">`)
content.insertAdjacentHTML("beforeend", `<link href="https://genseot.github.io/mods/spatialcollapse/spatialcollapse.css" rel="stylesheet" type="text/css" media="all">`)



setTimeout(function(){
// - ACTORS
// - ALLY ACTORS
env.COMBAT_ACTORS.akizet = {
    name: "Akizet", readoutActor: "akizet", maxhp: 15, hp: 15,
    actions: [ "akizet_attack", "stab", "evade", ], sceneActions: [ "scene_akizet_attack", "scene_stab", "scene_evade" ],
    portrait: `<img class="portrait" src="/img/sprites/akizet/eyes.gif">`, portraitUrl: '/img/sprites/akizet/eyes.gif',
    graphic: `
        <div class="sprite-wrapper" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="/img/sprites/akizet/gridtiny.gif" id="%SLUG-sprite">
        </div>
    `,
    reactions: { evade: ["far too close", "oaa!", "nearly..."], crit: [ ()=>env.combat.has('husk') || env.rpg.is2D ? "get away!" : "excellent!" ], crit_buff: [ ()=>env.combat.has('husk') || env.rpg.is2D ? "good" : "easy!"], miss: ["œ¦êA"], dead: ["..."], receive_hit: ["@#Æ$J"], receive_crit: ["ßÃÆM!!"], receive_puncture: ["i have felt worse", "a familiar feeling"], receive_buff: ["thank you", "we are unstoppable"], receive_destabilized: ["every cell... awake..."], receive_rez: ["that was close..."], puncture: ["i need to fix this",  ()=>env.combat.has('tozik') ? "tozik!" : "i need help!", ()=>env.combat.has('cavik') ? "cavik!" : "restoratives?!" ], regen: ["this will do", "better..."], destabilized: ["..."], stun: ["my arms..."], receive_carapace: ["this armor...!", "very good"], receive_repairs: ["thank you, cavik", "better!"], receive_fear: ["no, no...", "the eyes...", "velzie forgive me"], receive_redirection: ["together!", "thank you, my friend", "we will destroy them"], },
}
env.COMBAT_ACTORS.tozik = {
    name: "Tozik", readoutActor: "tozik", maxhp: 10, hp: 10, unique: true,
    actions: ["tozik_attack", "mend", "evade"], sceneActions: ["tozik_attack", "scene_mend", "scene_evade"],
    portrait: `<img class="portrait" src="/img/sprites/obesk/tozik/facecrop.gif">`, portraitUrl: '/img/sprites/obesk/tozik/facetransparent.gif',
    graphic: `
        <div class="sprite-wrapper" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="/img/sprites/obesk/tozik/gridtiny.gif" id="%SLUG-sprite">
        </div>
    `,
    reactions: {
        crit: [ ()=>env.combat.has('husk') || env.rpg.is2D ? "good enough" : "hehe", ], crit_buff: ["keep going"], dead: ["..."], receive_destabilized: ["i hear it calling"], receive_rez: ["let us finish this"], puncture: ["i need to fix this"], destabilized: ["..."], stun: ["where..."], receive_carapace: ["thank you"], receive_repairs: ["that is better"], receive_fear: [()=> env.rpg.is2D ? "there is nothing here" : "hollowed out...", "and yet it moves", ()=> env.rpg.is2D ? "where are you?" :"what happened to you?", "that cannot be", "..."], receive_redirection: ["i will return the favor"],
    },
}
env.COMBAT_ACTORS.miltza = {
    name: "Miltza", readoutActor: "miltza", maxhp: 10, hp: 10, unique: true,
    actions: ["miltza_attack", "spy", "evade"], sceneActions: ["miltza_attack", "scene_spy", "scene_evade"],
    portrait: `<img class="portrait" src="/img/sprites/obesk/miltza/combatportrait.gif">`, portraitUrl: '/img/sprites/obesk/miltza/combatportrait.gif',
    graphic: `
        <div class="sprite-wrapper" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="/img/sprites/obesk/miltza/gridtiny.gif" id="%SLUG-sprite">
        </div>
    `,
    reactions: {
        evade: [ ()=>env.combat.has('husk') || env.rpg.is2D ? "wah!!" : "i did it!", ], crit: ["die!! die!!"], crit_buff: ["is that better??"], miss: [ ()=>env.combat.has('husk') || env.rpg.is2D ? "how does it move like that?!" : "next time", ], dead: ["..."], receive_crit: ["Æöö!!"], receive_puncture: ["restorative, quick!"], receive_buff: ["thank you!"], receive_destabilized: ["die DIE!! DIE!! DIE!!!"], puncture: ["i am losing cohesion!"], stun: ["oaauuuau"], receive_carapace: ["a shell!"], receive_repairs: ["thank you, thank you!", "so much better"], receive_fear: [()=> env.rpg.is2D ? "this cannot be real" : "that one looks like...!", "stop...", "velzie take me from here", "stay away! away!!"], receive_redirection: ["what??", "oh, thank you!"],
    }
} 
env.COMBAT_ACTORS.gakvu_groundsmind = {
    name: "Gakvu", maxhp: 10, hp: 10, move: 0, actions: ["gakvu_groundsmindry"],
    initialStatusEffects: [["emergency_groundsmind", 1], ["gakvu_disconnected", 1]],
    portrait: `<img class="portrait" src="/img/sprites/obesk/gakvu/facetransparent.gif">`, portraitUrl: '/img/sprites/obesk/gakvu/facetransparent.gif',
    graphic: `
        <div class="sprite-wrapper" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="https://genseot.github.io/mods/spatialcollapse/img/gakvudisconnected.gif" style="height: 200px;" id="%SLUG-sprite">
        </div>
    `,
    reactions: {
        evade: [ ()=>env.combat.has('husk') || env.rpg.is2D ? "ah!" : "haha!", ()=>env.combat.has('husk') || env.rpg.is2D ? "no!!" : "woaah!!", ], crit: [ ()=>env.combat.has('husk') || env.rpg.is2D ? "clean..." : "it is simply that easy", ()=>env.combat.has('husk') || env.rpg.is2D ? "a few more like that..." : "that was lucky" ], crit_buff: ["so that goes there..."], miss: [ ()=>env.combat.has('husk') || env.rpg.is2D ? "â‚¬Ã–Ã¤!" : "oh...", ()=>env.combat.has('husk') || env.rpg.is2D ? "it is too fast!!" : "too bad" ], dead: ["..."], receive_crit: ["Ã†!!"], receive_puncture: ["i am... bleeding...?", "ow!! what...", ()=>env.combat.has('tozik') ? "tozik...?" : "help!!" ], receive_buff: ["thanks"], receive_destabilized: ["may velzie look away"], receive_rez: [ ()=>env.combat.has('husk') || env.rpg.is2D ? "thank you" : "my savior", ], puncture: ["such a strange feeling", "make this stop"], regen: [ ()=>env.combat.has('husk') || env.rpg.is2D ? "feeling better" : "feeling good", ], destabilized: ["..."], stun: ["where did my eyes go?!"], receive_carapace: ["so heavy"], receive_repairs: ["thanks cavik"], receive_fear: ["stop looking at me!!", "get away from me!", "no, no no no", "what did it say??"], receive_redirection: ["bozko??"],
        receive_emergency_groundsmind: ["keep going!!", "velzie smile upon us..."],
    }
}
env.STATUS_EFFECTS.emergency_groundsmind = {
    slug: "emergency_groundsmind", name: "Interim Groundsmind", beneficial: true, persist: true, infinite: true,
    icon: "https://genseot.github.io/mods/spatialcollapse/img/emergencygroundsmind.gif",
    help: "preventing the relocator from collapsing. lose if the interim groundsmind is downed",
}
env.STATUS_EFFECTS.gakvu_disconnected = {
    slug: "disconnected", name: "Disconnected", beneficial: true, persist: true, infinite: true,
    icon: "/img/sprites/combat/statuses/disconnected.gif",
    help: "acting of her own volition",
    
    events: {
        onCreated: function({statusObj}) { if(statusObj.slug == this.status.slug) { setTimeout(()=>this.status.affecting.piece.classList.add('npc'), 300) } },
        onTurn: function() { 
            let gakvu = this.status.affecting
            gakvu.npc = true

            setTimeout(function() { 
                if(env.rpg.currentActor == gakvu) { 
                    useAction(gakvu, env.ACTIONS.gakvu_groundsmindry, target) 
                    setTimeout(()=>advanceTurn(gakvu), 250)
                } 
           	}, env.ADVANCE_RATE) }
    }
}



// - ENEMY ACTORS
// - CALL RESEARCH ACTORS
env.COMBAT_ACTORS.research_introgolem = {
    name: "Golem",  maxhp: 20,  hp: 20,  move: 2, actions: ["stab", "malfunction"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="/img/sprites/combat/foes/golem.gif" id="%SLUG-sprite" style="width: 200px;">
            <div class="target" entity="damaged golem"></div>
        </div>`,
    reactions: {} //SILENT CREATURE
}
env.COMBAT_ACTORS.research_hostilecontainer = {
    name: "Container", maxhp: 6, hp: 6, move: 2, actions: ["attack", "attack", "attack", "skitter"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <div class="squishyfast"> <img class="sprite" src="/img/sprites/combat/foes/inc.gif" id="%SLUG-sprite" style="width: 120px; height: 150px;">  </div>
            <div class="target" entity="hostile container"></div>
        </div>
    `,
    reactions: {}
}
env.COMBAT_ACTORS.research_hostileveilklight = {
    name: "Veilklight", maxhp: 10, hp: 10, move: 2, actions: ["spy", "mend", "daze_lastresort"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <div class="veilksprite"> <img class="sprite" src="/img/sprites/combat/foes/foelampbase.gif" id="%SLUG-sprite" style="width: 100px; height: 150px;"> </div>
            <div class="target" entity="hostile veilklight"></div>
        </div>
    `,
    reactions: {}
}
env.COMBAT_ACTORS.research_hostileattendant = {
    name: "Spire Attendant", maxhp: 8, hp: 8, move: 2, actions: ["attack", "stab"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <div> <img class="sprite" src="https://genseot.github.io/mods/spatialcollapse/img/attendant.gif" id="%SLUG-sprite" style="width: 100px; height: 200px;> </div>
            <div class="target" entity="attendant"></div>
        </div>
    `,
    reactions: { catchall: ["1UiÃ«2Wâ€¡", "â€¡eÃŽKÃŸJÃ¤Ã¤", "/â€¦Â¿?Ã· Ã´LÃ£Ã˜", "CÂ©Ã‹", "0Eâ„¢NÃ³Â¨Ã½QÃ’", "â‚¬LWÃ©{Ã°Ã", "Ã‡Ã¦Ã½Ã™â€¡ÃŸâ€ C", "Â£~UÃ¾fÃ¢", "â€¦TÃº**"], dead: ["Â¿", "???"] }
}

env.COMBAT_ACTORS.research_tendrils = {
    name: "Tendril", turnCheck: "tendrils", maxhp: 10, hp: 10, move: 0, actions: ["tendrilswipe"],
    initialStatusEffects: [["kb_immune", 1]],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <div class="squishyslow"> <img class="sprite" src="/img/sprites/combat/foes/tendrils.gif" id="%SLUG-sprite" style="width: 200px; height 400px;"> </div>
            <div class="target" entity="tendrils"></div>
        </div>
    `,
    reactions: {}
}
env.COMBAT_ACTORS.research_movefoe = {
    name: "Movefoe", maxhp: 60, hp: 60, move: 0, statusImmunities: ["stun"], actions: ["incoherent_movefriend"], lastStand: "movefriend",
    initialStatusEffects: [["kb_immune", 1]],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <div class="lifter sprite"> <figure></figure> </div>
            <div class="target" entity="movefoe"></div>
        </div>
    `,
    reactions: {} //SILENT CREATURE
}
env.COMBAT_ACTORS.research_movefoe_lowintensity = {
    name: "Movefoe", maxhp: 60, hp: 60, move: 0, statusImmunities: ["stun"], actions: ["movefriend_attack", "special_mass_destabilize", "special_movefriend_annihilate"], 
    initialStatusEffects: [["kb_immune", 1]],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <div class="lifter sprite"><figure></figure></div>
            <div class="target" entity="movefoe"></div>
        </div>
    `,
    reactions: {} //SILENT CREATURE
}

  


  
// - ARCHIVAL ACTORS
env.COMBAT_ACTORS.archival_golem = {
    name: "Archival Golem", maxhp: 40, hp: 30, move: 2, actions: ["windup"], windupActions: ["archival_smash"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="/img/sprites/combat/foes/archivalgolem.gif" id="%SLUG-sprite" style="width:100px; height:200px;">
            <div class="target" entity="archival golem"></div>
        </div>
    `,
    reactions: {} //SILENT CREATURE
}
env.COMBAT_ACTORS.archival_jutskin = { 
    name: "Jutskin", maxhp: 30, hp: 20, move: 2, actions: ["special_barrier_allies", "stab"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="https://genseot.github.io/mods/spatialcollapse/img/jutskin.gif" id="%SLUG-sprite" style="width:85px; height:175px;">
            <div class="target" entity="jutskin"></div>
        </div>
    `,
    reactions: { catchall: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**"], dead: ["¿", "???"] }
}
env.COMBAT_ACTORS.archival_bstrdlight = {
    name: "BSTRDlight", maxhp: 40, hp: 30, move: 2, actions: ["revive", "bstrdlightswipe"], /*actions: ["spy", "mend", "special_mass_destabilize", "bstrdlightswipe", "revive"],*/
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <div class="veilksprite bstrdlight"> <img class="sprite" src="/img/sprites/combat/foes/bstrdlampbase.gif" id="%SLUG-sprite" style="width:100px; height:150px;"> </div>
            <div class="target" entity="bstrdlight"></div>
        </div>
    `,
    reactions: { catchall: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**"], dead: ["¿", "???"] }
}
env.COMBAT_ACTORS.archival_painshelf = {
    name: "Pain Shelf", maxhp: 70, hp: 60, move: 3, actions: ["special_archiveshelf_annihilate"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="/img/sprites/combat/foes/archivalfoea.gif" style="width:500px; height:250px;">
            <div class="target" entity="pain shelf"></div>
        </div>
    `,
    reactions: { catchall: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**"], dead: ["¿", "???"] }
}
env.COMBAT_ACTORS.archival_bstrd = {
    name: "BSTRD Golem", maxhp: 80, hp: 80, move: 2, statusImmunities: ["stun"], actions: ["incoherent_gundown"], lastStand: "bstrd",
    readoutActor: "bstrd",     

    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="https://genseot.github.io/mods/spatialcollapse/img/bstrd.gif" id="%SLUG-sprite">
            <div class="target" entity="bstrd golem"></div>
        </div>
    `,
    reactions: { receive_destabilized: ["WOaoOAw"], receive_rez: ["AHAHA :^) GOT U"], puncture: ["OOUUEU"], destabilized: ["DOUBLE BULLETS !!"], }
}
env.COMBAT_ACTORS.archival_bstrd_lowintensity = {
    slug: "bstrdboss_lowintensity", name: "BSTRD Golem", maxhp: 50, hp: 50, move: 2, statusImmunities: ["stun"], actions: ["special_fullauto"],
    readoutActor: "bstrd",
            
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="https://genseot.github.io/mods/spatialcollapse/img/bstrd.gif" id="%SLUG-sprite" style="width:150px; height:250px;">
            <div class="target" entity="bstrd golem"></div>
        </div>
    `,
    reactions: { receive_destabilized: ["WOaoOAw"], receive_rez: ["AHAHA :^) GOT U"], puncture: ["OOUUEU"], destabilized: ["DoUBLE BULLets !!"], }
}




// - ACTIONS
// - ALLY ACTIONS
env.ACTIONS.miltza_attack = {
    slug: "miltza_attack", name: "Distraction", verb: "distract", type: 'target',
    anim: "basic-attack",

    usage: { act: "%USER FEINTS AND STRIKES %TARGET", crit: "%USER'S ALLIES ARE INSPIRED", hit: "%TARGET IS STRUCK", miss: "%TARGET DODGES" },
    details: { flavor: `'strike with clever feint';'may create distraction'`, onHit: `'[STAT::amt]'`, onCrit: `'[STATUS::evasion] to nearby allies'`, conditional: `<em>VS VULNERABLE::</em>'additional [STAT::amt]'` },

    stats: { accuracy: 1, crit: 0.3, amt: 1, range: 2, status: { evasion: { name: 'evasion', length: 1 }, vulnerable: { name: 'vulnerable', } },
    extraAOE: { evasionAura: { origin: "self", size: 2, shape: 'square', addClass: "beneficial" } } },
        
    exec: function(user, target) {
        let specialAmt = this.stats.amt + (hasStatus(target, 'vulnerable') ? 1 : 0)
            
        return env.GENERIC_ACTIONS.singleTarget({
            action: this,  user,  target, specialAmt,

            critExec: ()=> {           
                let targets = user.team.members  
                if(env?.rpg?.is2D) {
                    // in 2d, this is AOE evasion
                    targets = env.rpg.grid.getAoETargets({
                        tile: user?.piece?.tile,  actor: user, actingOn: "allies",
                        aoeData: { size: this.stats.extraAOE.evasionAura.size, shape: this.stats.extraAOE.evasionAura.shape }
                    })
                }

                env.GENERIC_ACTIONS.teamWave({
                    arbitraryActorList: targets,
                    exec: (actor, i)=>{ addStatus({target: actor, origin: user, status: "evasion", origin: user, length: 1, noReact: true}); play('mend', 0.5); }
                })
            }
        })
    }
}
env.ACTIONS.scene_stab = {
    slug: "scene_stab", name: "Stab", type: 'target',
    anim: "basic-attack", 

    usage: { act: "%USER STABS %TARGET", crit: "%TARGET IS EVISCERATED", hit: "%TARGET BLEEDS SLUDGY CORRU", miss: "%TARGET EVADES" },
    details: { flavor: "'reshape arm into sharpened tendril';'stab target'", onHit: `'[STAT::amt] [STATUS::puncture]'`, onCrit: ()=> `'puncture vital cystic component for [STATUS::puncture]'${env?.rpg?.is2D ? ";'KB::2'" : ''}`, },
    desc: "'puncture vital cystic component';'damage over time';'stop regen'", help: "75% -1HP +2T:PUNCTURE -REGEN, 10%C -1HP",

    stats: { range: 2, accuracy: 1, crit: 0.1, amt: 1, status: { puncture: { name: 'puncture', length: 3 } } },
    targeting: "angular",
    aoe: { size: 2,  shape: "line-from", canHit: (user, target) => { return true } },

    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({ 
            action: this, user, target, hitSfx: { name: 'stab', rate: 1 }, critStatus: this.stats.status.puncture, hitStatus: this.stats.status.puncture,
            hitExec: ({target})=>{
                if(env?.rpg?.is2D) {
                    if(target.piece && user.piece) target.piece.knockback({
                        direction: user?.piece?.tile.getRelativeDirection(target?.piece?.tile), strength: 1, onImpact: ()=> play("stab", 1)
                    })
                }
            }
        })
    }
}
env.ACTIONS.scene_gakvu_attack = {
    //creates an area that executes async useAction scramble with gakvu considered the origin
    slug: "scene_gakvu_attack", name: "Scramble", type: 'target+ground',
    anim: "basic-attack",
        
    usage: { act: "%USER TWISTS %TARGET", },
    details: { flavor: `'disrupt multiple targets with groundsmindry';'very illegal'`, onUse: `'create persistent area effect';'HIT foes who end turn within';'HIT foes who are knocked within'`, onHit: `'[STAT::amt]'`, onCrit: `'[STATUS::vulnerable]'`, },

    stats: { accuracy: 0.9,  crit: 0.2, amt: 2, status: { vulnerable: { name: 'vulnerable', length: 2 } } }, 
    exec: function(user, target) {
        return "nothing"
    },

    //EP4 stats
    range: 3, ignoresBlocks: true, ignoresLOS: true,
    aoe: { 
        size: 1,  shape: "circle",
        effect: ({user, tiles, selectedTile}) => { 
            if(user.scramblerEffect) { env.rpg.grid.deleteTileEffect(user.scramblerEffect); }
            user.scramblerEffect = env.rpg.grid.createTileEffect({ tiles,  effect: "scrambler",  length: 3,  origin: user, originTile: selectedTile })
        },
        canHighlight: (user, target) => { return target.team.name != user.team.name},
    },
}

// - CALL RESEARCH ACTIONS
env.ACTIONS.malfunction = {
    slug: "malfunction", name: "Malfunction", type: 'autohit+self',
    anim: "skitter",
    
    usage: { act: "%USER'S SKIN WRITHES" },
    desc: "'suffer from internal deterioration'", help: "-1HP, +1T:VULNERABLE",

    acc: 100, crit: -1,
    exec: function(user, target) { combatHit(user, {amt: 1, acc: this.accuracy, crit: this.crit, origin: user}); addStatus({target: user, status: "vulnerable", length: 1, noReact: true}); return 'nothing'; }
}
env.ACTIONS.stab = {
    slug: "stab", name: "Stab", type: 'target',
    anim: "basic-attack", 

    usage: { act: "%USER STABS %TARGET", crit: "%TARGET IS EVISCERATED", hit: "%TARGET BLEEDS SLUDGY CORRU", miss: "%TARGET EVADES" },
    details: { flavor: "'reshape arm into sharpened tendril';'stab target'", onHit: `'[STAT::amt] [STATUS::puncture]'`, onCrit: ()=> `'puncture vital cystic component for [STATUS::puncture]'${env?.rpg?.is2D ? ";'KB::2'" : ''}`, },
    desc: "'puncture vital cystic component';'damage over time';'stop regen'", help: "75% -1HP +2T:PUNCTURE -REGEN, 10%C -1HP",

    stats: { accuracy: 0.75, crit: 0.1, amt: 1, status: { puncture: { name: 'puncture', length: 3 } } },  
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({ 
            action: this, user, target, hitSfx: { name: 'stab', rate: 1 }, critStatus: this.stats.status.puncture, hitStatus: this.stats.status.puncture,
            hitExec: ({target})=>{
                if(env?.rpg?.is2D) {
                    if(target.piece && user.piece) target.piece.knockback({
                        direction: user?.piece?.tile.getRelativeDirection(target?.piece?.tile), strength: 1, onImpact: ()=> play("stab", 1)
                    })
                }
            }
        })
    }
}
env.ACTIONS.attack = {
    slug: "attack", name: "Attack", type: 'target',
    anim: "basic-attack",

    usage: { act: "%USER ATTACKS %TARGET", crit: "A FRIGHTENING BLOW", hit: "%TARGET IS STRUCK", miss: "%TARGET EVADES" },
    details: { flavor: `'improvise'`, onHit: `'[STAT::amt]'`, },

    stats: { accuracy: .9, crit: 0.1, amt: 2, },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, user, target, hitSfx: { name: 'stab', rate: 1},
            hitExec: ({target})=>{
                if(env?.rpg?.is2D) {
                    if(target.piece && user.piece) target.piece.knockback({
                        direction: user?.piece?.tile.getRelativeDirection(target?.piece?.tile), strength: 1, onImpact: ()=> play("stab", 1)
                    })
                }
            }
        })
    }
}
env.ACTIONS.skitter = {
    slug: "skitter", name: "Skitter", type: 'movement+ground+self', beneficial: true,
    anim: "heal",

    usage: { act: "%USER SKITTERS WILDLY AROUND THE ROOM" },
    details: { onUse: () => `'gain [STATUS::evasion]'`, flavor: "'focus on evading incoming attacks';'hide vulnerabilities'" },

    stats: { range: 2, status: { evasion: { name: 'evasion', length: 1 } } },
    targeting: "square", includesOrigin: false,
    exec: function(user, target) {
        play('mend', 0.5);
        addStatus({target: user, status: this.stats.status.evasion.name, length: this.stats.status.evasion.length, noReact: true}); 
        return 'nothing';
    },

    avoidChaining: true,
    enemyUsageIf: (actor) => { return actor.hp < actor.maxhp }, disableIf: (actor)=>{ if(hasStatus(actor,"fear")) return "PROHIBITED BY FEAR" }
}
env.ACTIONS.spy = {
    slug: "spy", name: "Spy", verb: "spy on", type: 'target',
    anim: "spying", animDuration: 2000,

    usage: { act: "%USER SPIES UPON %TARGET", crit: "%TARGET IS MARKED FOR DEATH", hit: "%TARGET FEELS TARGETED", miss: "%TARGET HIDES BEHIND SOMETHING" },
    details: { onUse: `'[STATUS::vulnerable]'`, },

    stats: { range: 5, autohit: true, status: { vulnerable: { name: 'vulnerable', length: 3 } } },
    exec: function(user, target) {
        reactDialogue(user, `give_vulnerable`)
        return env.GENERIC_ACTIONS.singleTarget({
                action: this,  user,  target, hitSfx: { name: 'status', rate: 0.75 }, hitStatus: this.stats.status.vulnerable,
        })
    },
}
env.ACTIONS.mend = {
    slug: "mend", name: "Quick Mend", type: 'support+target+self', beneficial: true, 
    anim: "heal",
        
    usage: { act: "%USER FIXES UP %TARGET", crit: "%TARGET FEELS WAY BETTER", hit: "%TARGET FEELS BETTER", miss: "%TARGET IS TOO SLIPPERY" },
    details: { onHit: `'[STAT::amt] [STATUS::regen]'`, },

    stats: { range: 2, crit: 0.1, autohit: true, amt: -2, status: { regen: { name: 'regen', length: 3 } } },
    aoe: {
        size: 1, shape: "square",
        canHit: (user, target) => { return target.team.name == user.team.name }
    },

    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            beneficial: true, action: this, user, target, hitSfx: { name: 'mend', rate: 1 }, hitStatus: { name: 'regen', length: 3 },
        })
    },

    // enemy zone
    avoidChaining: true,
    enemyUsageIf: (actor) => { return actor.team.members.some(member => member.state != "dead" && (member.hp < member.maxhp)) }, // only use if someone alive on team has taken damage
    disableIf: (actor) => { return ( actor.team.name == "enemy" && !actor.team.members.some(member => ((member != actor) && (member.state != "dead") )) ) },
}
env.ACTIONS.daze_lastresort = {
    slug: "daze_lastresort", name: "Bash", type: 'target',
    anim: "basic-attack",

    usage: { act: "%USER SWINGS AT %TARGET", crit: "%TARGET IS LEFT REELING", hit: "%TARGET IS STRUCK", miss: "%TARGET EVADES" },
    details: { flavor: "'last resort attack';'swing self'", onHit: `'[STAT::amt]'`, onCrit:`'[STATUS::stun]'`, },

    stats: { accuracy: .5, crit: 0.5, amt: 1, status: { stun: { name: 'stun', length: 1 }, }, },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({ 
            action: this, user, target, hitSfx: { name: 'hit', rate: 0.7 }, critStatus: this.stats.status.stun, 
            hitExec: ({target})=>{
                if(env?.rpg?.is2D) {
                    if(target.piece && user.piece) target.piece.knockback({
                        direction: user?.piece?.tile.getRelativeDirection(target?.piece?.tile), strength: 3, onImpact: ()=> play("hit", 0.7)
                    })
                }
            }
        })
    },
        
    disableIf: (actor) => {
        if(actor.team.name == "ally") return false;
        //disable if you aren't the last standing, but allow if everyone still standing is a veilklight
        return actor.team.members.some(member => ((member != actor) && ((member.state != "dead") && (member.originalSlug != "veilklight")) ))
    }
}
env.ACTIONS.tendrilswipe = {
    slug: "tendrilswipe", name: "Swipe", type: 'target',
    anim: "basic-attack",

    desc: "'swipe blindly at target';'chance for persistent wound'", help: "70% -1HP, 20%C x2 +1T:PUNCTURE -REGEN",
    usage: { act: "%USER SWIPES AT %TARGET", crit: "%TARGET IS STABBED", hit: "%TARGET IS STRUCK", miss: "%TARGET DUCKS OUT OF THE WAY" },

    accuracy: 0.7, crit: 0.2, amt: 1,
    stats: { range: 3, status: { puncture: { name: 'puncture', length: 1 } } },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, user, target, critStatus: this.stats.status.puncture,
            hitExec: ({target})=>{
                if(env?.rpg?.is2D) {
                    if(target.piece && user.piece) target.piece.knockback({
                        direction: user?.piece?.tile.getRelativeDirection(target?.piece?.tile), strength: 1, onImpact: ()=> play("stab", 1)
                    })
                }
            }
        })
    }
}
env.ACTIONS.bstrdlightswipe = {
    slug: "bstrdlightswipe", name: "Swipe", type: 'target',
    anim: "basic-attack",

    desc: "'swipe blindly at target';'chance for persistent wound'", help: "70% -1HP, 20%C x2 +1T:PUNCTURE -REGEN",
    usage: { act: "%USER SWIPES AT %TARGET", crit: "%TARGET IS STABBED", hit: "%TARGET IS STRUCK", miss: "%TARGET DUCKS OUT OF THE WAY" },

    accuracy: 0.7, crit: 0.2, amt: 1,
    stats: { range: 2, status: { puncture: { name: 'puncture', length: 1 } } },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, user, target, critStatus: this.stats.status.puncture,
            hitExec: ({target})=>{
                if(env?.rpg?.is2D) {
                    if(target.piece && user.piece) target.piece.knockback({
                        direction: user?.piece?.tile.getRelativeDirection(target?.piece?.tile), strength: 1, onImpact: ()=> play("stab", 1)
                    })
                }
            }
        })
    }
}
env.ACTIONS.movefriend_attack = {
    slug: "movefriend_attack", name: "Broadcast", type: 'target',
    anim: "wobble",

    desc: "'directly seize control of corrucystic organs';'chance to utilize target as signal amplifier'", help: "75% -2HP +1T:PUNCTURE, 30%C (FOES::-1HP +2T:VULNERABLE)",
    usage: { act: "%USER'S SIGIL WARPS STRANGELY", crit: "THE WHOLE TEAM FEELS ILL", hit: "%TARGET'S FLESH REVOLTS", miss: "%TARGET RECOILS SAFELY" },

    accuracy: 0.75, crit: 0.3, amt: 2, stats:{ range: 4 },
    exec: function(user, target) {
        content.classList.add('painprep', 'painhalf')
        setTimeout(()=>{ content.classList.add('painmode') }, 100)
        setTimeout(()=>{ content.classList.remove('painmode') }, 2000)
        setTimeout(()=>{ content.classList.remove('painprep', 'painhalf') }, 3000)
        ratween(env.bgm, 0.75, 2000)
        env.rpg.classList.remove('incoherentbg')

        return env.GENERIC_ACTIONS.singleTarget({
            action:this, user, target,
            hitStatus: { name:'puncture', length:1 }, critStatus: { name:'puncture', length:1 },
            critExec:()=> env.GENERIC_ACTIONS.teamWave({
                team:user.enemyTeam, 
                exec:(actor, i)=> {
                    combatHit(actor, { amt:1, crit:0, autohit:true, origin:user })
                    addStatus({ target:actor, status:"vulnerable", length:2, })
                    play("talksignal", 0.75)
                }
            })
        })
    }
}
env.ACTIONS.special_mass_destabilize = {
    slug: "special_mass_destabilize", name: "destabilize thoughtspace", type: 'special', autohit: true,
    anim: "wobble",
        
    usage: { act: "THE THOUGHTSPACE GROWS VIOLENT" },
    details: { flavor: "'afflict all nearby entities with incoherence'", onUse: `'[STATUS::destabilized] to all actors'`, },
        
    stats: { status: { destabilized: { name: 'destabilized', length: 2 } }, },
    exec: function(user, target, beingUsedAsync) {
        if(env.rpg.classList.contains("bastard")) {                
            if(user.team.name == "ally") {
                env.rpg.classList.add('incoherentbg')
                content.classList.add('painprep', 'painfade', 'painhalf')
                setTimeout(()=>{content.classList.add('painmode')}, 100)
                setTimeout(()=>{content.classList.remove('painmode')}, 4000)
                setTimeout(()=>{content.classList.remove('painprep', 'painfade', 'painhalf')}, 5000)

                setTimeout(()=>{env.rpg.classList.remove('incoherentbg')}, 4000)
                }
            } else {
                ratween(env.bgm, 1, 2000)
                env.rpg.classList.add('incoherentbg')
                content.classList.add('painprep', 'painhalf')
                setTimeout(()=>{content.classList.add('painmode')}, 100)
                setTimeout(()=>{content.classList.remove('painmode')}, 4000)
                setTimeout(()=>{content.classList.remove('painprep', 'painhalf')}, 5000)
            }
            
            let action = this
            env.GENERIC_ACTIONS.teamWave({
                arbitraryActorList: env.rpg.turnOrder,
                exec: (actor, i) => {
                    env.GENERIC_ACTIONS.singleTarget({
                        action, user, target: actor,
                        autohit: true, hitSfx: { name: 'destabilize', rate: 0.75 },
                        genExec: ({target}) => { addStatus({target: actor, origin: user, status: "destabilized", length: 2}); }
                    })
                },
                advanceAfterExec: true, beingUsedAsync, user,
            })
    }
}
env.ACTIONS.special_movefriend_annihilate = {
    slug: "special_movefriend_annihilate", name: "Annihilation", type: 'target+special',
    anim: "wobble",

    desc: "'utilize the walls to crush a target'", help: "CHOOSE::100% -2HP ::OR:: 50% -2HP 50%C -2HP +1T:STUN",
    usage: { act: "THE WALLS GROW HOSTILE AROUND %TARGET", crit: "%TARGET BARELY STANDS", hit: "%TARGET DID THEIR BEST", miss: "%TARGET ESCAPED BY A HAIR" },

    accuracy:1, crit:0, noRepeat:true, stats:{ range: 6, status:{ puncture:{ name:'puncture', length:1 } } },
    choiceAnim: "special_choice-movefriend", choiceAnimDuration: 200,
    exec: function(user, target, actionMessageIndex) {
        actionMessage(user, "THE WALLS SHIFT AROUND %TARGET", target)
        user.sprite.classList.add('special_choice-movefriend')
        
        content.classList.add('painprep', 'painhalf')
        setTimeout(()=>{ content.classList.add('painmode') }, 100)
        setTimeout(()=>{ content.classList.remove('painmode') }, 2000)
        setTimeout(()=>{ content.classList.remove('painprep', 'painhalf') }, 3000)

        actionChoice({
            user:user, action:this,
            choiceText:`The walls close in around ${target.name}...`,
            options:[ { text:"Withstand the attack", definition:"NOTE::'100% -2HP'" }, { text:"Try a risky dodge", definition:"NOTE::'50% -2HP 50%C -2HP +1T:STUN'" } ],
            choiceCallback: (c)=> {
                user.sprite.classList.add(this.anim)
                var hit
                switch(c) {
                    case "c0": hit = combatHit(target, { amt:2, acc:1, crit:0, origin:user })
                    break
                    case "c1": hit = combatHit(target, { amt:2, acc:0.5, crit:0.5, origin:user })
                    break
                }

                switch(hit) { 
                    case "crit":
                        env.rpg.effectMessage.action({ target:target, action:`THE WALLS CRUSH %TARGET`, specialHitText:"%TARGET BARELY STANDS", actionMessageIndex })                       
                        playCombatCrit(); addStatus({ target:target, origin:user, status:"stun", length:1 }); removeStatus(target,"windup");
                    break
                    case true:
                        env.rpg.effectMessage.action({ target:target, action:`THE WALLS STRIKE %TARGET`, specialHitText:"%TARGET REELS FROM THE BLOW", actionMessageIndex })                       
                        reactDialogue(target, 'receive_hit'); play("hit", 0.75);
                    break
                    case false:
                        env.rpg.effectMessage.action({ target:target, action:`THE WALLS MISS %TARGET`, specialHitText:"%TARGET ESCAPES BY A HAIR", actionMessageIndex })                       
                        reactDialogue(target, 'evade'); play("miss", 0.75);
                    break
                }
                setTimeout(()=> user.sprite.classList.remove(this.anim), 600)
                setTimeout(()=> advanceTurn(user), env.ADVANCE_RATE)
            }
        })
    }
}
env.ACTIONS.incoherent_movefriend = {
    slug: "incoherent_movefriend", name: "Wallspikes", type: 'target+special',
    anim: "basic-attack",

    desc: "'k̶̡̇̄i̵͈͑̐̑̌̈́̇̾̕͝l̷̡͓̬̩̖̽̂̿̏͒̎̽̏̀̿̏̅̈l̵̯̦̪͠'", help: "BATTLEFIELD 300% -1HP",
    usage: { act: "%USER SWIPES AT %TARGET", crit: "%TARGET IS STABBED", hit: "%TARGET IS STRUCK", miss: "%TARGET DUCKS OUT OF THE WAY" },

    accuracy:1, crit:0,
    stats: { range: 6 },
    exec: function(user, target, actionMessageIndex) {
        addStatus({ target:user, status:"incoherent", length:1, noReact:true })
        if(user.state=="lastStand") env.rpg.effectMessage.action({ action: `THE WALLS TWIST AROUND THE WHOLE TEAM`, actionMessageIndex })
        else env.rpg.effectMessage.action({ target:target, action:`THE WALLS TWIST AROUND %TARGET`, actionMessageIndex })

        env.rpg.insertAdjacentHTML('beforeend', `
            <div class="golem-vortex bh-action-${user.slug} bh-action"></div>
            <div id="${user.slug}-bh" class="bh-action-${user.slug} bh-action">
                <div class="bh_damage-wrapper"></div>
            </div>
        `);
        env.rpg.vortex = document.querySelector(`.golem-vortex.bh-action-${user.slug}`)
        env.rpg.actionZone = document.querySelector(`#${user.slug}-bh`)

        setTimeout(()=> {
            env.rpg.vortex.classList.add('active');
            bh_start({
                playerEl: `<div id="bh_player" class"notice" style="background-image:url(${target.portraitUrl})"></div>`,
                onHit:()=> {
                    var hit
                    if(user.state=="lastStand") {
                        let possibleTargets = env.rpg.allyTeam.members.filter(member => member.hp > 0)
                        hit = combatHit(possibleTargets[rand(0, possibleTargets.length)], { amt:1, acc:2, crit:0, origin:user })
                        if(hit) play('hit', 1.5, 0.5); else play('miss', 1.25, 0.5);
                        if (possibleTargets.length==0) env.bulletHell.complete()
                    }
                    else if(target.state!="dead") {
                        hit = combatHit(target, { amt:1, acc:2, crit:0, origin:user })
                        if(hit) play('hit', 1.5, 0.5); else play('miss', 1.25, 0.5);
                        if(target.hp==0) env.bulletHell.complete()
                    }
                    else {
                        env.bulletHell.complete()
                    }

                    if(hit==false) return "dodged"; else return "damaged"
                }
            })
            setTimeout(()=> {
                body.classList.add('in-golem-vortex')
                env.rpg.actionZone.classList.add('active')
                document.querySelector(`#bh_player`).classList.add('active')

                if(!user.tutorial) { startDialogue("d3_movespecial"); user.tutorial=true; }
                else if(user.state=="lastStand") bh_movefriend({ level:"last stand", duration:70000 })
                else if(user.hp < (0.50 * user.maxhp)) bh_movefriend({ level:"threatened" })
                else bh_movefriend({ level:"healthy" })
            }, 500)

            setTimeout(()=> { env.rpg.classList.add('cull') }, 1500)
        }, env.ADVANCE_RATE * 0.5)
    }
}
env.ACTIONS.gakvu_groundsmindry = {
    slug: "groundsmindry", name: "Groundsmindry", type: 'autohit+self', 
    anim: "heal",

    desc: "'use groundsmindry capabilities to stabilise surrounding area'", help: "+1T:INTERIM GROUNDSMIND",
    usage: { act: "%USER STABILIZES THE ROOM" },

    acc: 100, crit: -1,
    exec: function(user, target) { addStatus({target: user, status: "emergency_groundsmind", length: 1, noReact: false}); return 'nothing'; }
}



// - ARCHIVAL ACTIONS
env.ACTIONS.windup = {
    slug: "windup", name: "Preparation", type: 'autohit',
    anim: "",

    usage: { act: "%USER PREPARES AN ATTACK..." },
    details: { flavor: `'prepare a devastating attack'`, onUse: `'[STATUS::windup]'` },

    stats: { status: { windup: { name: 'windup', length: 1 }, } },
        
    exec: function(user, target) {
        play('talklaugh', 0.5);
        addStatus({target: user, status: "windup", length: 1}); 
        return 'nothing';
    }
}
env.ACTIONS.archival_smash = {
    slug: "archival_smash", name: "Calculated Strike", type: 'target',
    anim: "basic-attack",

    desc: "'focused, deadly attack upon one target';'immense physical trauma'", help: "100% -4HP, 40% X2 +1T:STUN",
    usage: { act: "%USER CHARGES %TARGET", crit: "%TARGET IS LEFT REELING", hit: "%TARGET IS STRUCK", miss: "%TARGET EVADES" },
    details: { flavor: "'focused, deadly attack upon one target';'immense physical trauma'", onHit: `'[STAT::amt]'`, onCrit: `'[STATUS::stun]'`, },

    stats: { crit: 0.4, amt: 4, status: { stun: { name: 'stun', length: 1 } }, },

    range: 1, targeting: "plus",
    aoe: {
        shape: "custom",
        customShape: `
            .xxx.
            .xox.
        `,
        canHit: (user, target) => { if(target != user) return target.team.name != user.team.name }
    },
    exec: function(user, target) {
        removeStatus(user, "windup")
        return env.GENERIC_ACTIONS.singleTarget({
            action: this,  user,  target,
            hitSfx: { name: 'hit', rate: 0.8 }, critStatus: { name: 'stun', length: 1 }
        })
    }
}
env.ACTIONS.revive = { // FUCK YOU FUCK YOU FUCK YOU 
    slug: "revive", name: "Unfair Advantage", type: 'special', beneficial: true,
    anim: "heal",
        
    usage: { act: "%USER BRINGS AN ALLY BACK TO THEIR FEET", hit: "%USER'S ALLY IS READY TO FIGHT", crit: "%USER'S ALLY GETS A SECOND WIND" },
    details: { flavor: "'repair ally to fighting condition';'used only as last resort'", onUse: `'revive target at [STAT::percentage]%HP'`, },

    stats: { range: 1, /*1*/ autohit: true, percentage: 25, }, autohit: true, 
    targeting: "square", includesOrigin: true,

    exec: function() {
        let target = env.rpg.enemyTeam.members.filter(member => ( (member.state == "dead") && (member.originalSlug != "bstrdlight") /* bstrdlight */ )).sample()
        if(target) {
            console.log("exec happens")
            target.hp = Math.floor(target.maxhp * 0.25)
            combatRevive(target)
            reactDialogue(target, 'receive_rez')
            advanceTurn()
            return "critbuff"
        }
        return null
    },
        
    disableIf: (actor) => { //required to be last one standing
        if(actor.team.name == "ally") return false;
            return (
                actor.team.members.some(member => ( (member != actor) && (member.state != "dead") && (member.originalSlug != "bstrdlight" /* bstrdlight */ ) ))
                ||
                hasStatus(actor,"fear")
            )
    }
}
env.ACTIONS.special_barrier_allies = {
    slug: "special_barrier_allies", name: "Cover", type: 'support+ground+self', beneficial: true,
    anim: "cloak-barrier", animDuration: 4000,
        
    usage: { act: "%USER SHIELDS THEIR ALLIES" },
    details: { flavor: `'utilize mobile applicators and inbuilt reserve';'apply ablative corru shielding'`, onUse: () => `'[STAT::amtBP] [STATUS::repairs] to nearby allies'`, },

    stats: { autohit: true, crit: 0, amt: 2, amtBP: 2, range: 2, //2
             status: { repairs: { name: "repairs", length: 1 } },

    targeting: "square", includesOrigin: true, 
    extraAOE: { barrier: { origin: "self", size: 2, shape: 'square', addClass: "beneficial" } } },
        
    exec: function(user, target, beingUsedAsync) {
        let action = this
        let targets = user.team.members
        let hitStatus = false

        if(env?.rpg?.is2D) {
            targets = env.rpg.grid.getAoETargets({
                tile: user?.piece?.tile, 
                actor: user,
                actingOn: "allies",
                aoeData: { size: this.stats.extraAOE.barrier.size, shape: this.stats.extraAOE.barrier.shape }
            })
            hitStatus = { name: 'repairs', length: 1 }
        }

        if(user.slug.includes("maintcloak")) {
            user.sprite.classList.add(action.anim)
            play('talkgal', 2)
            setTimeout(()=>play('talkgal', 2), 2000)
            setTimeout(()=>user.sprite.classList.remove(action.anim), 4000)
        }

        env.GENERIC_ACTIONS.teamWave({
            arbitraryActorList: targets,
            exec: (actor, i) => {
                env.GENERIC_ACTIONS.singleTarget({
                    action, user, 
                    target: actor,
                    type: 'barrier', beneficial: true,
                    hitSfx: { name: 'mend', rate: 2 },
                    hitStatus
                })
            },
            advanceAfterExec: true, beingUsedAsync, user,
        })
    },
        
    //disable if you're an enemy and anyone on your team has more than 5 bp
    //also if you're an enemy and you're the last standing
    //mainly to avoid repeat/infinite stacking while dealing with a crowd
    disableIf: (actor)=>{
        if(actor.team.name == "ally") return false;
        else if(!actor.team.members.some(member => ((member != actor) && (member.state != "dead") ))) return true;
        else return actor.team.members.some(member => ((member != actor) && member.bp >= 5))
    }
}
env.ACTIONS.special_archiveshelf_annihilate = {
    slug: "special_archiveshelf_annihilate", name: "Annihilation", type: 'target+special',
    anim: "wobble",

    desc: "'utilize long limbs to eviscerate a target'", help: "CHOOSE::100% -3HP ::OR:: 50% -2HP 50%C -2HP +1T:STUN +2T:PUNCTURE",     
    usage: { act: "%USER LUNGES AT %TARGET", crit: "%TARGET IS BRUTALLY STABBED", hit: "%TARGET TAKES A SOLID HIT", miss: "%TARGET ESCAPED BY A HAIR" },   
    details: { onUse: `'present target foe a choice of outcome'`, conditional: `<em>HIT 1</em>::'HIT::[STAT::hit1ACC]% CRIT::0% [STAT::hit1HP]'\n<em>HIT 2</em>::'HIT::[STAT::hit2ACC]% CRIT::[STAT::hit2CRIT]% [STAT::hit2HP]';'[STATUS::stun] [STATUS::puncture] on CRIT'` },

    accuracy:1, crit:0, noRepeat:true, 
    stats:{ range: 2, hit1HP:3, hit1ACC:100, hit2HP: 2, hit2ACC: 50, hit2CRIT: 50, status: { stun: { name: 'stun', length: 1 }, puncture: { name: 'puncture', length: 2 } }, },
    choiceAnim: "special_choice-movefriend", choiceAnimDuration: 200,
    exec: function(user, target, actionMessageIndex) {
        actionMessage(user, "%USER LUNGES AT %TARGET", target)
        user.sprite.classList.add('special_choice-movefriend')

        actionChoice({
            user:user, action:this,
            choiceText: `The shelf lunges at ${target.name}...`,
            options: [ {text: "Withstand the attack", definition: "NOTE::'100% -3HP'"}, {text: "Try a risky dodge", definition: "NOTE::'50% -2HP 50%C -2HP +1T:STUN +2T:PUNCTURE'"}, ],
            choiceCallback: (c)=> {
                user.sprite.classList.add(this.anim)
                var hit
                switch(c) {
                    case "c0": hit = combatHit(target, {amt: 3, acc: 1, crit: 0, origin: user});
                    break;
                    case "c1": hit = combatHit(target, {amt: 2, acc: 0.5, crit: 0.5, origin: user})
                    break
                }

                switch(hit) { 
                    case "crit":
                        env.rpg.effectMessage.action({ target:target, action:`%USER PUNCTURES %TARGET`, specialHitText:"%TARGET IS BRUTALLY STABBED", actionMessageIndex })                       
                        playCombatCrit(); addStatus({target: target, origin: user, status: "stun", length: 1}); addStatus({target: target, origin: user, status: "puncture", length: 2, noReact: true}); removeStatus(target,"windup");
                    break
                    case true:
                        env.rpg.effectMessage.action({ target:target, action:`%USER STRIKES %TARGET`, specialHitText:"%TARGET TAKES A SOLID HIT", actionMessageIndex })                       
                        reactDialogue(target, 'receive_hit'); play("hit", 0.75);
                    break
                    case false:
                        env.rpg.effectMessage.action({ target:target, action:`%USER MISSES %TARGET`, specialHitText:"%TARGET ESCAPES BY A HAIR", actionMessageIndex })                       
                        reactDialogue(target, 'evade'); play("miss", 0.75);
                    break
                }
                setTimeout(()=> user.sprite.classList.remove(this.anim), 600)
                setTimeout(()=> advanceTurn(user), env.ADVANCE_RATE)
            }
        })
    }
}
env.ACTIONS.special_fullauto = {
    slug: "special_fullauto", name: "Full Auto", type: 'target+special',
    anim: "wobble",
        
    usage: { act: "%USER OPENS FIRE", },
    details: { flavor: "'utilize automatic rifle';'rapid inaccurate attacks'", onUse: `'HIT random foes 6 times'`, onHit: `'[STAT::amt]'`, onCrit:`'[STATUS::vulnerable]'` },

    stats: { range: 4, accuracy: .33, crit: 0.33, amt: 1, status: { vulnerable: { name: 'vulnerable', length: 1 }, }, },
    exec: function(user, target, beingUsedAsync) {
        let animElement = user.sprite || user.box
        let initialRate = env.bgm.rate()

        animElement.classList.add('aiming')
        if(!env.rpg.classList.contains("standoff")) ratween(env.bgm, initialRate + 0.5)
        play('click1')

        let targetTeam
        switch(user.team.name) {
            case "ally": targetTeam = env.rpg.enemyTeam; break;
            case "enemy": targetTeam = env.rpg.allyTeam; break;
        }

        //damage self on use if you aren't bstrd
        if(!["BSTRD Golem", "BSTRD", "Gun Golem", "EFGY"].includes(user.name)) combatHit(user, {amt: 1, crit: 0, autohit: true, origin: user, redirectable: false})

        let anim = env.COMBAT_ANIMS.shoot
        let validTargets = targetTeam.members.filter(member => member.state != "dead" && member.state != "lastStand")

        if(validTargets.length) for (let i = 0; i < 6; i++) {
            let baseDelay = ((env.ADVANCE_RATE * 0.2) * i)
            let animDelay = baseDelay + anim.duration;
            if(validTargets) {
            let target = validTargets.sample()
                    
            setTimeout(()=>anim.exec(this, user, target), baseDelay)
            setTimeout(()=>{
                env.GENERIC_ACTIONS.singleTarget({
                    action: this, user, target,
                    hitSfx: { name: "shot2", volume: 0.5 },
                    critSfx: { name: "shot6" },
                    missSfx: { name: "shot2", rate: 1.5, volume: 0.5 },
                    critStatus: { name: 'vulnerable', length: 1 }
                })

                animElement.classList.add('scramble')
                setTimeout(()=>animElement.classList.remove('scramble'), 100)
            }, animDelay)
        }
    }

    setTimeout(()=>{
        animElement.classList.remove('aiming')                
        if(!beingUsedAsync) advanceTurn(user)
        if(!env.rpg.classList.contains("standoff")) ratween(env.bgm, env.bgm.intendedRate)
    }, (env.ADVANCE_RATE * 0.2) * 7)}
}
env.ACTIONS.incoherent_gundown = {
    slug: "incoherent_gundown", name: "BSTRD BULLETS", type: 'target+special',
    
    desc: "BATTLEFIELD 100% -1HP per hit",

    accuracy: 1, crit: 0,
    stats:{ range:8 },
    exec: function(user, target) {
        addStatus({target: user, status: "incoherent", length: 1, noReact: true}); actionMessage(user, "%USER AIMS AT %TARGET", target);
        user.sprite.classList.add('aiming'); play('click1');

    //vortex on screen, circle expands into fullscreen blackness (animation in CSS)
    env.rpg.insertAdjacentHTML('beforeend', `
        <div class="golem-vortex bh-action-${user.slug} bh-action"></div>
        <div id="${user.slug}-bh" class="bh-action-${user.slug} bh-action"> <div class="bh_damage-wrapper"></div> </div>
    `);
    env.rpg.vortex = document.querySelector(`.golem-vortex.bh-action-${user.slug}`); env.rpg.actionZone = document.querySelector(`#${user.slug}-bh`);

    //animate the vortex
    setTimeout(()=>{
        env.rpg.vortex.classList.add('active'); 

        bh_start({
            playerEl: `<div id="bh_player" class="notice" style="background-image:url(${target.portraitUrl})"></div>`, 
            onHit: () => {
                var hit
                    if(user.state == "lastStand") {
                        let possibleTargets = env.rpg.allyTeam.members.filter(member => member.hp > 0)
                            hit = combatHit(possibleTargets[rand(0, possibleTargets.length)], {amt: 1, acc: 1, crit: 0, origin: user});
                        if(possibleTargets.length == 0) env.bulletHell.complete()
                        if(hit) play('hit', 1.5, 0.5); else play("miss", 1.25, 0.5)                           
                    } 
                    else if(target.state != "dead") {
                            hit = combatHit(target, {amt: 1, acc: 1, crit: 0, origin: user});
                        if(target.hp == 0) env.bulletHell.complete()
                        if(hit) play('hit', 1.5, 0.5); else play("miss", 1.25, 0.5)
                    } 
                    else env.bulletHell.complete()
                        
                    if(hit == false) return "dodged"; else return "damaged";
            },
            onEnd: () =>  user.sprite.classList.remove('aiming'),
            centered: true
        })
        bh_invuln(true)

        //animation done, activate ze game
        if(env.rpg.kavrukaDamage) {
            env.rpg.kavrukaDamage.forEach(damage=>bh_kavrukadamage(damage))
            env.rpg.actionZone.insertAdjacentHTML('beforeend', `<div id="bh_kavrukafirering" class="bh_damager bh_kavrukafirering" style="--kavrukaDamageCount: ${env.rpg.kavrukaDamage.length}"> </div>`)
            env.rpg.kavrukaFireRing = document.querySelector('#bh_kavrukafirering')
        }
                
        setTimeout(()=>{
            body.classList.add('in-golem-vortex')
            env.rpg.actionZone.classList.add('active')
            document.querySelector(`#bh_player`).classList.add('active')

            if(user.state == "lastStand") bh_gundown("last_stand")
            else if(!user.tutorial) { startDialogue("d3_archivebosstut"); user.tutorial = true; }
            //changes moves based on health - string refers to the urgency with which he shoots, missing more the lower his HP is but creating more hazards that way
            else if(user.hp < (0.5 * user.maxhp)) bh_gundown("high")
            else bh_gundown("low")
        }, 500);

        setTimeout(()=>{
            env.rpg.classList.add('cull');
        }, 1400);
    }, env.ADVANCE_RATE * 0.5);
}
}



// - SCENARIOS
// - CALL RESEARCH SCENARIOS
CombatScene.SCENARIOS['spatial_timestopper'] = {
    initEnemyTeam: ()=> [ "research_introgolem" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_combat.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [0, 159988, true] }
    }),
    bgmRate: ()=> 0.5,
    combatClass: "research",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_tutorial_end") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 13,
    plan: `
        .l░L░░L░░L░l.
        .░░░░░T░░░░░.
        .░░░░░1░░░░░.
        .░░░6ccc2A░░.
        .░░░ccccc░░d.
        .░░░ccCcc░░D.
        .░░░cccccE░d.
        .░░░5ccc3G░░.
        .░░░░░4░░░░░.
        .l░░░░░░░░░l.
    `,
    entities: {
        "E": { spawnPoint: "research_introgolem" },
        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },



        "L": {  class:"blocks los prop",  contains: {  html: `<figure> <span class="listener"></span> <span class="callscreen"></span> <span class="cyst1"></span><span class="cyst2"></span><span class="cyst3"></span> </figure>`, dyp: { class: "spatiallistener", width: 2, height: 2, image: "transparent"} } },

        "C": { class:"blocks los prop",
            contains: {
                html: `<figure id="base"> <span></span><span></span><span></span><span></span><span></span><span></span> </figure> <figure id="tendril"> <span></span><span></span><span></span> </figure>`,
                dyp: { class: "spatialtimestopper", image: "transparent" }
            }
        },
        "c": { class:"blocks los prop" },

        "l": { class:"blocks los prop", contains: { html: `<figure> <span class="stand1"></span><span class="lamp1"></span> <span class="stand2"></span><span class="lamp2"></span> </figure>`, dyp: { class: "spatialveilklight", image: "transparent" }  } },

        "D": { class:"blocks los prop", 
            contains: { 
                html: `<figure> <span class="desk"></span> <span class="doodad1"></span> <span class="doodad2"></span> <span class="doodad3"></span> <span class="doodad4"></span> </figure>`,
                dyp: { class: "spatialtimestopperdesk", image:"transparent" }
            } 
        },
        "d": { class:"blocks los prop", 
            contains: { 
                html: `<figure> <span class="leg1"></span> <span class="leg2"></span> </figure>`,
                dyp: { class: "spatialtimestopperdeskleg", image:"transparent" }
            }
        },

        "1": { class: "blocks los prop", contains: { html: `<figure> <span class="top"></span> </figure>`, dyp: { class: "spatialchair norotate", width: 1.2, height: 1.3, image: "transparent" } } },
        "2": { class: "blocks los prop", contains: { html: `<figure> <span class="topright"></span> </figure>`, dyp: { class: "spatialchair cornerreverse", width: 1.2, height: 1.3, image: "transparent" } } },
        "3": { class: "blocks los prop", contains: { html: `<figure> <span class="bottomright"></span> </figure>`, dyp: { class: "spatialchair corner", width: 1.2, height: 1.3, image: "transparent" } } },
        "4": { class: "blocks los prop", contains: { html: `<figure> <span class="bottom"></span> </figure>`, dyp: { class: "spatialchair norotate", width: 1.2, height: 1.3, image: "transparent" } } },
        "5": { class: "blocks los prop", contains: { html: `<figure> <span class="bottomleft"></span> </figure>`, dyp: { class: "spatialchair cornerreverse", width: 1.2, height: 1.3, image: "transparent" } } },
        "6": { class: "blocks los prop", contains: { html: `<figure> <span class="topleft"></span> </figure>`, dyp: { class: "spatialchair corner", width: 1.2, height: 1.3, image: "transparent" } } },
    }   
}
CombatScene.SCENARIOS['spatial_recreation'] = {
    initEnemyTeam: ()=> [ "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostileveilklight" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_combat.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [0, 159988, true] }
    }),
    bgmRate: ()=> 0.5,
    combatClass: "research",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_rec_clear") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 13,
    plan: `
        .░░bbbBbbb░░.
        .░░bbbfbbb░░.
        .░░░░C░Q░░░░.
        .░Cd░V░░░d░░.
        .░░+░░░░░+░░.
        .░CbQ░░C░b░░.
        .░░C░░░░░░C░.
        .░░░░░░░░░░░.
        .░░░░░A░░░░░.
        .&░░G░░░T░#|.
        .L&░░░░░░░_W.
    `,
    entities: {
        "C": { spawnPoint: "research_hostilecontainer" },
        "V": { spawnPoint: "research_hostileveilklight" },

        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },



        "+": { class:"blocks los prop", contains: { html: `<figure> <span class="table"></span> <span class="canopy"></span> <span class="cysts1"></span><span class="cysts2"></span> <span class="leg1"></span><span class="leg2"></span> </figure>`, dyp: { class:"spatialrecreationtable", image: "transparent" } } },
        "b": { class:"blocks los prop" },

        "L": {  class:"blocks los prop",  contains: { html: `<figure> <span class="listener recreation"></span> <span class="callscreen recreation"></span> <span class="cyst1 recreation"></span><span class="cyst2 recreation"></span><span class="cyst3 recreation"></span> </figure>`, dyp: { class: "spatiallistener", width: 2, height: 2, transform:"rotateY(-225deg)", image: "transparent" } } },

        "&": { class: "blocks los prop", contains: { html: `<figure> <span class="recreation"></span> </figure>`, dyp: { class: "spatialcontainer", width: 1.75, height: 1.3, image: "transparent" } } },
        "Q": { class:"blocks los prop", contains: { html: `<figure> <span></span> </figure>`, dyp: { class: "spatialdeadqou", image: "transparent" } } },

        "B": { class: "blocks los prop", contains: { html: `<figure> <span class="wall"></span> <span class="drinks"></span> <span class="tier1"></span> <span class="tier2"></span> <span class="tier3"></span> </figure>`, dyp: { class: "spatialbar", width: 2, height: 2, image: "transparent" } } },
        "b": { class:"blocks los prop", },
        "f": { class:"prop blocks", contains: { html: `<figure> <span></span> </figure>`, dyp: { class: "spatialbarfriend", image: "transparent" } } },
        "d": { class:"blocks los prop", contains: { html: `<figure> <span class="leg1"></span> <span class="leg2"></span> </figure>`, dyp: { class: "spatialrecreationtableleg", image:"transparent" } } },

        "W": { class:"blocks los prop", contains: { html: `<figure> <span class="window"></span> </figure>`, dyp: { class:"spatialwindow", image:"transparent" } } },
        "#": { contains: { html: `<figure> <span></span> </figure>`, dyp: { class:"spatialfloor", image:"transparent" } } },
        "|": { contains: { html: `<figure> <span></span> </figure>`, dyp: { class:"spatialverticalwall", image:"transparent" } } },
        "_": { contains: { html: `<figure> <span></span> </figure>`, dyp: { class:"spatialhorizontalwall", image:"transparent" } } },
    }
}

CombatScene.SCENARIOS['spatial_personnel'] = {
    initEnemyTeam: ()=> [ "research_hostilecontainer", "research_hostilecontainer", "research_hostileveilklight", "research_hostileveilklight", "research_hostileattendant", "research_hostileattendant" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_combat.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [0, 159988, true] }
    }),
    bgmRate: ()=> 0.5,
    combatClass: "research",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_person_clear") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 7,
    plan: `
        .lQ░░l.
        <░░@░░.
        .░░░░░.
        .░V░C░{
        .░░░░░.
        }░C░░Q.
        .░░░V░.
        .░░░░░{
        .Q░@░░.
        <░░░░░.
        .░░A░░.
        .░G░T░{
        .l░░░l.
    `,
    entities: {      
        "@": { spawnPoint: "research_hostileattendant" },
        "V": { spawnPoint: "research_hostileveilklight" },
        "C": { spawnPoint: "research_hostilecontainer" },
  
        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },



        "l": { class:"blocks los prop", contains: { html: `<figure> <span class="stand1"></span><span class="lamp1"></span> <span class="stand2"></span><span class="lamp2"></span> </figure>`, dyp: { class: "spatialveilklight", image: "transparent" }  } },
        "Q": { class:"blocks los prop", contains: { html: `<figure> <span></span> </figure>`, dyp: { class: "spatialdeadqou", image: "transparent" } } },

        "<": { class:"blocks los prop", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialdooropen", image:"transparent" } } },
        "}": { class:"blocks los prop", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialdoorleft", image:"transparent" } } },
        "{": { class:"blocks los prop", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialdoorright", image:"transparent" } } },
    }
}

CombatScene.SCENARIOS['spatial_cquarters2'] = {
    initEnemyTeam: ()=> [ "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_combat.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [0, 159988, true] }
    }),
    bgmRate: ()=> 0.5,
    combatClass: "research",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3r2_postcombat") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 7,
    plan: `
        .ldDdl.
        .b░T░b.
        .S░░AR.
        .CCG░b.
        .lC░░l.
    `,
    entities: {
        "C": { spawnPoint: "research_hostilecontainer" },
  
        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },


        "l": { class:"blocks los prop", contains: { html: `<figure> <span class="stand1"></span><span class="lamp1"></span> <span class="stand2"></span><span class="lamp2"></span> </figure>`, dyp: { class: "spatialveilklight", image: "transparent" }  } },

        "R": { class:"blocks los prop", contains: { html: `<figure> <span></span> </figure>`, dyp: { class: "spatialrejuvenation", width: 3, height: 2.75, image: "transparent" } } },
        "b": { class:"blocks los prop" },

        "S" : { class:"blocks los prop", contains: { html: `<figure> <span class="shelfbody"></span> <span class="shelfcysts"></span> </figure>`, dyp: { class: "spatialshelf", width: 2, height: 1.5, image: "transparent" } } },

        "D": { class:"blocks los prop", 
            contains: { 
                html: `<figure> <span class="desk"></span> <span class="doodad1"></span> <span class="doodad2"></span> <span class="doodad3"></span> <span class="gunshelf"></span> <span class="chair"></span> </figure>`,
                dyp: { class: "spatialkazkidesk", image:"transparent" }
            } 
        },
        "d": { class:"blocks los prop", 
            contains: { 
                html: `<figure> <span class="leg1"></span> <span class="leg2"></span> </figure>`,
                dyp: { class: "spatialkazkideskleg", image:"transparent" }
            }
        },
    }
}
CombatScene.SCENARIOS['spatial_movefoe'] = {
    initEnemyTeam: ()=> [ "research_movefoe", "research_tendrils", "research_tendrils", "research_tendrils", "research_tendrils" ],
    initAllyTeam: ()=> {
        team = page.party.filter(m=>["akizet"].includes(m.slug))
        team.push(
            { slug: "miltza", name: "Miltza", hp: 10, combatActor: "miltza" },
            { slug: "tozik", name: "Tozik", hp: 10, combatActor: "tozik" },
            { slug: "gakvu", name: "Gakvu", hp: 10, combatActor: "gakvu_groundsmind" }
        )
        return team
    },

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_movefriendboss.ogg'], preload:true, loop:true, volume:1,
        sprite:{ intro: [0, 24000], __default: [24000, 96000, true] }
    }),
    bgmRate: ()=> 0.75,
    combatClass: "research",

    startCallback: ()=> { console.log("startcallback")
        setTimeout(()=>{ startDialogue('d3_movecmb'); cutscene(false); }, 1500)
    },
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_movefriend_finish") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: (actor)=> { if(actor.name=="Gakvu" && actor.state=="dead") env.grm.startRetryOffer() },

    width: 7,
    plan: `
        ...G...
        ..TMm..
        .3░A░3.
        ░░░░░░░
        .░░░░░.
        .3░░░3.
        ...F...
    `,
    entities: {   
        "F": { spawnPoint: "research_movefoe" },
        "3": { spawnPoint: "research_tendrils" },

        "A": { spawnPoint: "akizet" },
        "M": { spawnPoint: "miltza" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu_groundsmind" },



        "m": { class:"blocks los prop", contains: { html:`<figure> <span class="itzil"></span> <span class="karik"></span> </figure>`, dyp: { class:"spatialmindcores", image:"transparent" } } },
    }
}
CombatScene.SCENARIOS['spatial_movefoe_lowintensity'] = {
    initEnemyTeam: ()=> [ "research_movefoe_lowintensity", "research_tendrils", "research_tendrils", "research_tendrils", "research_tendrils" ],
    initAllyTeam: ()=> {
        team = page.party.filter(m=>["akizet"].includes(m.slug))
        team.push(
            { slug: "miltza", name: "Miltza", hp: 10, combatActor: "miltza" },
            { slug: "tozik", name: "Tozik", hp: 10, combatActor: "tozik" },
            { slug: "gakvu", name: "Gakvu", hp: 10, combatActor: "gakvu_groundsmind" }
        )
        return team
    },

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_movefriendboss.ogg'], preload:true, loop:true, volume:1,
        sprite:{ intro: [0, 24000], __default: [24000, 96000, true] }
    }),
    bgmRate: ()=> 0.75,
    combatClass: "research",

    startCallback: ()=> { console.log("startcallback")
        setTimeout(()=>{ startDialogue('d3_movecmb'); cutscene(false); }, 1500)
    },
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_movefriend_finish") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: (actor)=> { if(actor.name=="Gakvu" && actor.state=="dead") env.grm.startRetryOffer() },

    width: 7,
    plan: `
        ...G...
        ..T░M..
        3░░A░░3
        ░░░░░░░
        .░░░░░.
        .3░░░3.
        ...F...
    `,
    entities: {   
        "F": { spawnPoint: "research_movefoe_lowintensity" },
        "3": { spawnPoint: "research_tendrils" },

        "A": { spawnPoint: "akizet" },
        "M": { spawnPoint: "miltza" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu_groundsmind" },
    }
}



// - ARCHIVAL SCENARIOS
CombatScene.SCENARIOS['spatial_archivalintro'] = {
    initEnemyTeam: ()=> [ "archival_golem", "archival_jutskin" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_bstrdcomb.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [1, 131800, true] }
    }),
    bgmRate: ()=> 0.75,
    combatClass: "bastard",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_archiveintro") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 5,
    plan: `
        .░░░.
        .░░░.
        .░░░.
        .░░░.
        .░░░.
        .T░G.
        .░A░.
        .░░░.
        .@░J.
        .░░░.
        .░░░.
        .░░░.
        .░░░.
        .░░░.
    `,
    entities: {
        "@": { spawnPoint: "archival_golem" },
        "J": { spawnPoint: "archival_jutskin" },

        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },
    }
}
CombatScene.SCENARIOS['spatial_archivalvein'] = {
    initEnemyTeam: ()=> [ "archival_jutskin", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "archival_bstrdlight", "archival_golem", "archival_jutskin" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_bstrdcomb.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [1, 131800, true] }
    }),
    bgmRate: ()=> 0.75,
    combatClass: "bastard",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_archivalvein") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 23,
    plan: `
        ...........t...........
        ......T....V....T......
        ..░░J░░░░░░░░░░░░░c░c..
        l}░L░░░░░░░░░░░░░░J░░{r
        ..░░@░░░░░GAZ░░░░░c░c..
        ......B....^....B......
        ...........b...........
    `,
    entities: {
        "J": { spawnPoint: "archival_jutskin" },
        "L": { spawnPoint: "archival_bstrdlight" },
        "@": { spawnPoint: "archival_golem" },
        "c": { spawnPoint: "research_hostilecontainer" },

        "A": { spawnPoint: "akizet" },
        "Z": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },



        "^": { class:"blocks los notile", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialarchivedoorbottom", image:"transparent" } } },
        "}": { class:"blocks los notile", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialarchivedoorleft", image:"transparent" } } },
        "{": { class:"blocks los notile", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialarchivedoorright", image:"transparent" } } },
        "V": { class:"blocks los notile", contains: { html: `<figure> <span class="bstrddoor"></span> <span class="chains"></span> </figure>`, dyp: { class:"spatialbstrddoor", image:"transparent" } } },

        "T": { class:"blocks los notile", contains: { html: `<figure> <span class="top archivalvein"></span> </figure>`, dyp: { class:"spatialarchivalwall", image:"transparent" } } },
        "t": { class:"blocks los notile", contains: { html: `<figure> <span class="top" style="width:100%; height:170%; transform:translateZ(149px) translateY(-68px);"></span> </figure>`, dyp: { class:"spatialarchivalwall", image:"transparent" } } },
        "B": { class:"blocks los notile", contains: { html: `<figure> <span class="bottom archivalvein"></span> </figure>`, dyp: { class:"spatialarchivalwall", image:"transparent" } } },
        "b": { class:"blocks los notile", contains: { html: `<figure> <span class="bottom" style="width:100%; height:170%; transform:translateZ(-149px) translateY(-68px) rotateY(180deg);"></span> </figure>`, dyp: { class:"spatialarchivalwall", image:"transparent" } } },
        "l": { class:"blocks los notile", contains: { html: `<figure> <span class="left archivalvein"></span> </figure>`, dyp: { class:"spatialarchivalwall", image:"transparent" } } },
        "r": { class:"blocks los notile", contains: { html: `<figure> <span class="right archivalvein"></span> </figure>`, dyp: { class:"spatialarchivalwall", image:"transparent" } } },
    }
}
CombatScene.SCENARIOS['spatial_archivalcore'] = {
    initEnemyTeam: ()=> [ "archival_golem", "archival_bstrdlight", "archival_jutskin", "archival_golem" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_bstrdcomb.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [1, 131800, true] }
    }),
    bgmRate: ()=> 0.75,
    combatClass: "bastard",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_archivecore") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 11,
    plan: `
        .....t.....
        .....T.....
        ..░░J░░░░..
        ..░░░@░░Z..
        lLP░░░░░A{r
        ..░░░@░░G..
        ..░░D░░░░..
        .....B.....
        .....b.....
    `,
    entities: {
        "@": { spawnPoint: "archival_golem" },
        "D": { spawnPoint: "archival_bstrdlight" },
        "J": { spawnPoint: "archival_jutskin" },

        "A": { spawnPoint: "akizet" },
        "Z": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },



        "P": { class:"blocks los prop", contains: { html: `<figure> <span class="pillar"></span> <span class="cyst"></span> </figure>`, dyp: { class: "spatialarchivepillar", width: 1, height: 1, image: "transparent" } } },

        "T": { class:"blocks los notile", contains: { html: `<figure> <span class="top archivalcore"></span> </figure>`, dyp: { class:"spatialarchivalshelf", image:"transparent" } } },
        "t": { class:"blocks los notile", contains: { html: `<figure> <span class="top archivalcore"></span> </figure>`, dyp: { class:"spatialarchivalwall", image:"transparent" } } },
        "L": { class:"blocks los notile", contains: { html: `<figure> <span class="left archivalcore"></span> </figure>`, dyp: { class:"spatialarchivalshelf", image:"transparent" } } },
        "l": { class:"blocks los notile", contains: { html: `<figure> <span class="left archivalcore"></span> </figure>`, dyp: { class:"spatialarchivalwall", image:"transparent" } } },
        "B": { class:"blocks los notile", contains: { html: `<figure> <span class="bottom archivalcore"></span> </figure>`, dyp: { class:"spatialarchivalshelf", image:"transparent" } } },
        "b": { class:"blocks los notile", contains: { html: `<figure> <span class="bottom archivalcore"></span> </figure>`, dyp: { class:"spatialarchivalwall", image:"transparent" } } },
        "r": { class:"blocks los notile", contains: { html: `<figure> <span class="right archivalcore"></span> </figure>`, dyp: { class:"spatialarchivalwall", image:"transparent" } } },

        "{": { class:"blocks los notile", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialarchivedoorright", image:"transparent" } } },
    }
}
CombatScene.SCENARIOS['spatial_archivaldelivery'] = {
    initEnemyTeam: ()=> [ "archival_bstrdlight", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_bstrdcomb.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [1, 131800, true] }
    }),
    bgmRate: ()=> 0.75,
    combatClass: "bastard",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_archivedeliveryclear") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 9,
    plan: `
        ....r....
        .░CC░░░..
        .░C░░░T..
        m├B░░░A{f
        .░C░░░G..
        .░CC░░░..
        ....l....
    `,
    entities: {
        "B": { spawnPoint: "archival_bstrdlight" },
        "C": { spawnPoint: "research_hostilecontainer" },        

        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },



        "├": { class:"blocks los prop", contains: { html: `<figure> <span></span> </figure>`, dyp: { class: "spatialblackbox", width: 1, height: 1, image: "transparent" } } },

        "{": { class:"blocks los notile", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialarchivedoorright", image:"transparent" } } },

        "l": { class:"blocks los notile", contains: { html: `<figure> <span class="left"></span> </figure>`, dyp: { class:"spatialcorruptwall", image:"transparent" } } },
        "m": { class:"blocks los notile", contains: { html: `<figure> <span class="middle"></span> </figure>`, dyp: { class:"spatialcorruptwall", image:"transparent" } } },
        "r": { class:"blocks los notile", contains: { html: `<figure> <span class="right"></span> </figure>`, dyp: { class:"spatialcorruptwall", image:"transparent" } } },
        "f": { class:"blocks los notile", contains: { html: `<figure> <span class="floor"></span> </figure>`, dyp: { class:"spatialcorruptwall", image:"transparent" } } },
    }
}
CombatScene.SCENARIOS['spatial_archivalcore_sensitive'] = {
    initEnemyTeam: ()=> [ "archival_painshelf", "archival_bstrdlight", "archival_jutskin" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_bstrdcomb.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [1, 131800, true] }
    }),
    bgmRate: ()=> 0.75,
    combatClass: "bastard bstrdshelf",

    startCallback: ()=> { 
        env.rpg.grid.createTileEffect({ tiles: env.rpg.grid.tilesByType["damagetile-top"], effect: "scene_edge", length: 999, data: { direction: "down" } })
        env.rpg.grid.createTileEffect({ tiles: env.rpg.grid.tilesByType["damagetile-bottom"], effect: "scene_edge", length: 999, data: { direction: "up" } })
        env.rpg.grid.createTileEffect({ tiles: env.rpg.grid.tilesByType["damagetile-left"], effect: "scene_edge", length: 999, data: { direction: "right" } })
    },
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_archiveminiclear") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 16,
    plan: `
        .....T...T......
        ...---------....
        ..--░.-░.░░---..
        .>-░.L░.░.░░░Z..
        .}░P░░░░.░░░░A{.
        .>+░J░.░░░..░G..
        .+░░+.░░+░.░++..
        .++++++++++++...
        ......B...B.....
    `,
    entities: {
        "-": { class: "basic notile damagetile-top" },
        "+": { class: "basic notile damagetile-bottom" },
        ">": { class: "basic notile damagetile-left" },

        "P": { spawnPoint: "archival_painshelf" },
        "L": { spawnPoint: "archival_bstrdlight" },
        "J": { spawnPoint: "archival_jutskin" },

        "A": { spawnPoint: "akizet" },
        "Z": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },



        "}": { class:"blocks los notile", contains: { html: `<figure id="archivalcoresensitive"> <span class="bstrddoor"></span> <span class="chains"></span> </figure>`, dyp: { class:"spatialbstrddoor", image:"transparent" } } },
        "{": { class:"blocks los notile", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialarchivedoorright", image:"transparent" } } },

        "T": { class:"blocks los notile", contains: { html: `<figure> <span class="top archivalcoresensitive"></span> </figure>`, dyp: { class:"spatialarchivalshelf", image:"transparent" } } },
        "B": { class:"blocks los notile", contains: { html: `<figure> <span class="bottom archivalcoresensitive"></span> </figure>`, dyp: { class:"spatialarchivalshelf", image:"transparent" } } },
    }
}
CombatScene.SCENARIOS['spatial_archivalboss'] = {
    initEnemyTeam: ()=> [ "archival_bstrd", "archival_bstrdlight", "archival_jutskin" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_bstrdcomb.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [1, 131800, true] }
    }),
    bgmRate: ()=> 1,
    combatClass: "bastard",

    startCallback: ()=> { 
        console.log("startcallback")
        env.rpg.insertAdjacentHTML('beforeend', '<div id="bstrdancers"></div>')
        let dancers = document.querySelector('#bstrdancers')
        env.rpg.bstrdancerDetect = env.setInterval(()=>{
            if(env.bgm.seek() > 52 && env.bgm.seek() < 84) {
                dancers.classList.add('dance')
                if(env.bgm.seek() > 68) dancers.classList.add('double')
            } else {
                dancers.classList.remove('dance')
                setTimeout(()=>dancers.classList.remove('double'), 1000)
            }
        }, 1000)
    },
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_archivebossend") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 11,
    plan: `
        .░.......░.
        ░..░░P..░..
        ..░.░@░░...
        ..B░░.░..░.
        .░..░░░J.░.
        ..░.░░░.░..
        ░..░.░.░░..
        .░..░░░░.░.
        ...░░░..░..
        ░..░.░░....
        ░...GAT...░
        .....^..... 
    `,
    entities: {
        "-": { class: "basic notile damagetile" },

        "@": { spawnPoint: "archival_bstrd" },
        "B": { spawnPoint: "archival_bstrdlight" },
        "J": { spawnPoint: "archival_jutskin" },

        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },

        

        "P": { class:"blocks los prop", contains: { html: `<figure> <span class="pillar"></span> <span class="cyst"></span> </figure>`, dyp: { class: "spatialsorrypillar", width: 1, height: 1, image: "transparent" } } },
        "^": { class:"blocks los notile", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialarchivedoorbottom", image:"transparent" } } },
    }
}
CombatScene.SCENARIOS['spatial_archivalboss_lowintensity'] = {
    initEnemyTeam: ()=> [ "archival_bstrd_lowintensity", "archival_bstrdlight", "archival_jutskin" ],
    initAllyTeam: ()=> page.party,

    bgm:()=> new Howl({
        onload: function() { page.howls.push(this) },
        src: ['/audio/embassy_bstrdcomb.ogg'], preload:true, loop:true, volume:1,
        sprite:{ __default: [1, 131800, true] }
    }),
    bgmRate: ()=> 0.75,
    combatClass: "bastard",

    startCallback: ()=> { 
        console.log("startcallback")
        env.rpg.insertAdjacentHTML('beforeend', '<div id="bstrdancers"></div>')
        let dancers = document.querySelector('#bstrdancers')
        env.rpg.bstrdancerDetect = env.setInterval(()=>{
            if(env.bgm.seek() > 52 && env.bgm.seek() < 84) {
                dancers.classList.add('dance')
                if(env.bgm.seek() > 68) dancers.classList.add('double')
            } else {
                dancers.classList.remove('dance')
                setTimeout(()=>dancers.classList.remove('double'), 1000)
            }
        }, 1000)
    },
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else { startDialogue("d3_archivebossend") }
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 11,
    plan: `
        .░.......░.
        ░..░░P..░..
        ..░.░@░░...
        ..B░░.░..░.
        .░..░░░J.░.
        ..░.░░░.░..
        ░..░.░.░░..
        .░..░░░░.░.
        ...░░░..░..
        ░..░.░░....
        ░...GAT...░
        .....^..... 
    `,
    entities: {
        "@": { spawnPoint: "archival_bstrd_lowintensity" },
        "B": { spawnPoint: "archival_bstrdlight" },
        "J": { spawnPoint: "archival_jutskin" },

        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },

        

        "P": { class:"blocks los prop", contains: { html: `<figure> <span class="pillar"></span> <span class="cyst"></span> </figure>`, dyp: { class: "spatialsorrypillar", width: 1, height: 1, image: "transparent" } } },
        "^": { class:"blocks los notile", contains: { html:`<figure> <span></span> </figure>`, dyp: { class:"spatialarchivedoorbottom", image:"transparent" } } },
    }
}



// - SKIPS
env.embassy.skips = {
    d3_start: ()=>{
        content.classList.remove('innerfocus', 'showfocus', 'fade-stage', 'painprep', 'painmode')
        content.classList.add('collapse')
        vn.done()
        vn.renderParty()
        specialCam(false)
        changeBgm(env.embassy.music_collapse, {length: 1})
        
        switch(check("gameplay_off")) {
            case true:
                setTimeout(() => { startDialogue("d3_tutorial_end") }, 1500)
            break  
            case false:
                setTimeout(() => { change('PAGE!!skiptut', true); env.grm.combat("spatial_timestopper"); /* spatial_timestopper */ }, 1500)
            break  
        }
    },

    d3_rec_enter: ()=>{
        vn.done()
        specialCam(false)
        change('PAGE!!recreationfight', true)

        switch(check("gameplay_off")) {
            case true: 
                setTimeout(()=> { startDialogue("d3_rec_clear") }, 1500)
            break
            case false:
                setTimeout(()=>{ env.grm.combat("spatial_recreation") }, 1500)
            break
        }
    },

    d3_person_intro: ()=>{
        vn.done()
        specialCam(false)
        change('PAGE!!personnelfight', true)

        switch(check("gameplay_off")) {
            case true: 
                setTimeout(()=> { startDialogue("d3_person_clear") }, 1500)
            break
            case false:
                setTimeout(()=>{ env.grm.combat("spatial_personnel") }, 1500)
            break
        }
    },

    d3_relocator_repair: ()=>{
        document.querySelector('#realgrid .lifter').classList.remove('fixed')
        document.querySelector('#realgrid .lifter').classList.add('aggressormode')
        content.classList.remove('painprep', 'painhalf', 'painmode')
        specialCam(false)
        vn.done()

        switch(check("gameplay_off")) {
            case true:
                setTimeout(()=>startDialogue("d3_movefriend_finish"), 1500)
            break
            case false: 
                setTimeout(()=> {
                    if(check("low_intensity")) env.grm.combat("spatial_movefoe_lowintensity")
                    else env.grm.combat("spatial_movefoe")
                }, 1500)
            break
        }
    },

    d3_movefriend_finish: ()=>{
        specialCam(false)
        changeBgm(page.bgm, {rate: 0.5, length:100})
        document.querySelector('#realgrid .lifter').classList.remove('aggressormode')
        document.querySelector('#realgrid .lifter').classList.add('fixed')
        env.embassy.fixMovefriend()
        change('PAGE!!movefixed', true)
        vn.done()
    }
}



// - DIALOGUE
// - d3_start
env.dialogues["d3_start"] = generateDialogueObject(`
start
    sourceless
        TOZIK, GAKVU AND I SIT HALF-CONNECTED TO THE TIMESTOPPER
            EXEC::content.classList.add('innerfocus', 'showfocus');content.querySelector('.focus').classList.add('day3')
        EVER SINCE THE GROUNDSMIND SAW FIT TO ABANDON IT WITH US,
        USING ITS EFFECTS ONLY PARTIALLY HAS BECOME A STANDARD PRACTICE

    tozik
        next

    sourceless
        SUCH PLEASANT SPEED! SO MUCH FREE TIME!
        WHO SAYS VELZIE CANNOT SMILE WITH COMPASSION?
        OUTSIDE OF OUR CONNECTION, I SENSE OUR ASSISTANT GOLEM ATTACHING A LISTENER
            EXEC::document.querySelector('.redundancy').style.setProperty('--dataoffset', 3)

    gakvu
        loaded!
    
    sourceless
        THE MEMORY OF A SIGNAL-RECORD CYST RADIATES THROUGH OUR CONNECTION
        AN IDENTIFIER PRECEDES ITS ABRIDGED LOG: PRE-CONTACT, Î¸eye 4, RADIANT 0

    tozik
        no drift, no changes
        next one
    
    sourceless
        THEN COMES ANOTHER - PRE-CONTACT, Î¸eye 4, RADIANT 1
            EXEC::document.querySelector('.redundancy').style.setProperty('--dataoffset', 6)
        TOZIK'S MIND PASSES OVER IT, CAREFUL, EVEN IF GENERALLY DISINTERESTED
        I FEEL THE SAME - THE MUNDANITY OF THIS INVESTIGATION...
        IT SEEMS POINTLESS BENEATH THE RECEPTORS OF MY WORK WITH GORDON'S TEAM
        AND I HAVE NOT REALLY BEEN MUCH HELP TO THE EKIVIKS
        TRYING TOO HARD NOT TO LET ANYTHING LEAK THROUGH OUR CONNECTION
        CAVIK... NO NO, I JUST NEED TO STOP THINKING ABOUT WHAT HAPPENED
        HE WILL LISTEN TO ME - HE MUST
    
    gakvu
        akizet?
    
    sourceless
        BUT WHAT IF HE DOES NOT? HE BROADCASTS HIS THOUGHTS SO FREELY
        IT WILL GET US BOTH KILLED, I KNOW IT WILL, HE

    gakvu
        akizet
    
    akizet
        what? oh--was this one mine?

    gakvu
        yes

    akizet
        sorry, checking it now...
    
    sourceless
        I DRAW MY MIND AWAY FROM MY INNER MATTERS,
        THROUGH THE TIMESTOPPER AND TO THE CONNECTED LISTENER
        WITH A QUICK COMPARISON I SEE THAT THE SIGNAL ALIGNS WITH OUR FETCHED ARCHIVES
    
    akizet
        this one matches as well
    
    tozik
        hmm...
        we have gone far enough
        we may assume that the only discrepancy is the first spike
        thank you for your help, this would have taken much longer alone
    
    gakvu
        you owe me a receptor curl
    
    tozik
        not happening
        we should wrap this up - disconnect that listener, i will...
            EXEC::env.embassy.day3Static();
        ...huh

    sourceless
        SOMETHING IS WRONG
        THE OTHERS FEEL IT TOO
    
    gakvu
        hey,
    
    tozik
        quiet
        i hear it too
    
    sourceless
        ...
        ...
        
    tozik
        what is that?
        is that coming from the listener?
    
    sourceless
        IT IS A SORT OF WHISPER... I MUST LISTEN CLOSELY
        BUT JUST AS I SEEM TO GRASP THE MESSAGE...
        PAIN
            EXEC::env.embassy.day3Signal();
            WAIT::6000

    sourceless quiet
        THE MESSAGE IS WORDLESS
        IT IS NOT FOR ME
        BUT IT IS DISMANTLING ME
        THE STRANGEST PAIN... A HUNGER CONSUMING EVERYTHING
            EXEC::content.classList.add('collapse', 'show-vn');content.classList.remove('fade-stage');content.classList.add('slowpain');vn.renderParty()
            WAIT::4000
        ANGER... BETRAYAL... VENGEANCE
        IT... KNOWS US...
        ...
            EXEC::content.classList.remove('innerfocus');content.classList.remove('painmode');changeBgm(env.embassy.music_collapse, {length: 6000});
    
    sourceless
        WHEN I COME TO, MY MIND FEELS AS IF IT WERE STOMPED BY A VEILK
        WE ARE STILL CONNECTED TO THE TIMESTOPPER
            EXEC::content.classList.remove('slowpain')
        I COLLAPSED
        SO DID GAKVU AND TOZIK... EVEN THE GOLEM
            EXEC::content.classList.remove('painprep')
        ALTHOUGH, THE GOLEM IS IN FAR WORSE CONDITION
        THE CYSTIC GLASS HAS STOPPED GLOWING, LEAVING THE ROOM DIM

    akizet
        gakvu?
        tozik?
        say something

    gakvu
        ...
        hurts
    
    sourceless
        TOZIK SLOWLY STANDS HIMSELF BACK UP
            EXEC::env.embassy.vn({bg: true, tozik: 'fullview'})
        GAKVU CLINGS TO A NEARBY LISTENER
            EXEC::env.embassy.vn({bg: true, gakvu: 'fullview'})
        ONE OF HER LEGS LOST ITS FORM, BECOMING A FEATURELESS VIOLET SLUDGE
        BUT SHE HAS ALREADY STARTED REFORMING IT
        THAT INSPIRES ME TO INSPECT MY OWN FORM, WHICH...
        YES, IT IS FINE
    
    gakvu
        ...what just hit us?
        was that a bomb?
    
    tozik
        not seeing any physical damage
    
    sourceless
        GAKVU RUMMAGES THROUGH HER FALSE VEILKSKIN COAT, PRODUCING A SMALL CORRUCYST
        A COMMUNICATIONS DEVICE, THOUGH IT MELTS IN HER CLAWS
    
    gakvu
        ÃŽÃ¨Â§Â¤Ã¿
        my communicator is sludged
        oh, no--my environments!!
    
    sourceless
        TOZIK ALSO CHECKS HIS COMMUNICATIONS CYST
    
    tozik
        mine too
    
    sourceless
        OH NO
        FUNFRIEND??
    
    funfriend
        HELLO AKIZETESCHE!!!
    
    sourceless
        A WAVE OF RELIEF PASSES THROUGH ME
        FUNFRIEND: DO WE HAVE DULL BROADCAST CAPABILITIES?
    
    funfriend
        YES! WOULD YOU LIKE ME TO ACTIVATE THEM NOW?
    
    akizet
        hold on. mine is working
    
    sourceless
        ACTIVATE RECEPTION

    funfriend
        ACTIVATING... NOW!
    
    sourceless
        NOISE - THE CALL IS LOUDER THAN EVER BEFORE
        OR--IS THAT THE CALL? IT IS UNFAMILIAR
        THERE ARE ALSO MESSAGES BEING BROADCAST FROM THE LOCAL AREA...
        BUT ONLY THEIR EMOTIONS ARE LOUD ENOUGH TO PIERCE THE NOISE
        IT IS PANIC, PAIN, FEAR, DESPERATION - SOMEONE NEEDS HELP
        TOZIK AND GAKVU BOTH STARE AT ME EXPECTANTLY
    
    akizet
        it is bad
        whatever that noise was, it is still going on
        i cannot make anything out or reach anyone
        the only thing that is getting through is fear
        i hope the others are all right...
    
    sourceless
        GAKVU'S RECEPTORS TWIST WITH APPREHENSION
        TOZIK SIMPLY LOOKS AWAY - IN THOUGHT, MAYBE
    
    gakvu
        are the bright cousins attacking us?
        could they be using the dull?

    tozik
        no. look

    sourceless
        OH - IT WAS THE LISTENERS HE WAS LOOKING AT
            EXEC::env.embassy.vn({fade: true});specialCam('listener-zoom')
        THEY ARE FINE, EXTERNALLY, BUT THEIR PROJECTIONS...
        ARE PULSATING WITH INCOHERENCE
    
    tozik
        this is not another spike
            EXEC::env.embassy.vn({fade: false})
        i do not know what this is...
        but humans could not be doing this
            EXEC::specialCam(false)
    
    gakvu
        well, whatever is happening,
        if our equipment is getting sludged...
        then the internal parts of the spire probably are too
        we should get out of here
    
    akizet
        agreed - stay behind me
        ah,
    
    sourceless
        AFTER THAT MOMENT OF AGREEMENT, WE ALL SEEM TO REALIZE THE SAME THING
        WE ARE STILL CONNECTED TO THE TIMESTOPPER, DESPITE NO VEIN ATTACHED TO CONNECTORS
        I STILL FEEL THE CONNECTION, THOUGH IT RESEMBLES THE FEELING OF A COMMUNICATIONS CYST
    
    timestopper
        WAS THIS ALWAYS REMOTE CAPABLE?

    tozik
        yes
        did you not listen when we first got it?
    
    gakvu
        hehe
            EXEC::env.embassy.vn({tgolem: 'showleft'})

    sourceless
        AS GAKVU GOES TO REMOVE HER CONNECTOR, OUR ASSISTANT GOLEM SCRAPES AGAINST THE FLOOR
            EXEC::env.embassy.vn({tgolem: 'display show', gakvu: 'defocus', tozik: 'defocus'})
        WE ALL CEASE MOVEMENT, OUR GAZES CONVERGING ON IT
            EXEC::changeBgm(env.embassy.music_unsafe, {rate: 1})
        IT HAS DRAGGED ITSELF TO AN UNEASY HOVER, AN ODD SYMBOL ON ITS FACE
            EXEC::env.embassy.vn({tgolem: 'display show center'})
        SOMETHING IN THE GROUNDSMINDRY IS CONTROLLING IT - BUT NOT VEKOA?
    
    aggressor
        o   ut o  u  t o 
        i w  wi ll n no t let
    
    gakvu
        hello?
    
    sourceless
        ITS STYLIZED ARMS SUDDENLY SHARPEN INTO SPIKES, AND IT RUSHES TOWARDS GAKVU
            EXEC::env.embassy.vn({tgolem: 'display show approach'})
        Ã·ÂÅ’â‚¬T$0 - THIS IS AN ATTACK
    
    akizet
        get back!!

    sourceless
        EXPERIMENTALLY, I FLEX THE NERVE OF THE TIMESTOPPER CONNECTOR
        AND TIME DOES SLOW, BUT NOT STOP - SUCH IS THE REMOTE TRADEOFF
        THESE TWO ARE UNPREPARED FOR COMBAT, BUT WITH MY TIME ON THE SURFACE
        YES, I CAN SAVE THEM
        THOUGHTS THAT COULD ONLY BE GAKVU'S ECHO THROUGH OUR CONNECTION
    
    timestopper
        WHAT DO I DO WHAT DO I DO
        IT IS GOING RIGHT FOR MY MIND-CORE IT IS GOING TO KILL ME
        THIS IS IT
    
    akizet
        no, you are going to be fine
        follow my lead
    
    RESPONSES::akizet
        save gakvu<+>END
            EXEC::env.embassy.vn({fade: true});ratween(env.bgm, 0.75, 5000);env.grm.combat("spatial_timestopper");
            SHOWIF::['gameplay_off', false]
            FAKEEND::start combat
        save gakvu<+>CHANGE::d3_tutorial_end
            EXEC::vn.done();
            SHOWIF::['gameplay_off', true]
            FAKEEND::bypass combat

SKIP::env.embassy.skips.d3_start()
SKIPTIME::700
END::env.embassy.vn({bg: false, fade: false, gakvu: '', tozik: '', tgolem: ''})
`)

// - d3_tutorial_end
env.dialogues['d3_tutorial_end'] = generateDialogueObject(` 
start
____SHOWIF::'gameplay_off'
    sys
        ATTENTION::"thoughtform combat gameplay bypassed";'toggle within system menu if desired'
            EXEC::vn.renderParty()
____END

    sourceless
        THE GOLEM CRASHES TO THE GROUND, 
            EXEC::ResetMusic();
        WHERE ITS GEOMETRIC COMPONENTS MELT INTO CORRUCYSTIC WASTE
        WITHIN ARE A FEW QUICK-REPAIR <span definition="INHERITED CONTEXT::${env.ITEM_LIST['restorative'].description}">RESTORATIVE CYSTS</span>, SO I TAKE THEM
            EXEC::env.embassy.conditionalItem('restorative', 3, 'tutrest')
        GAKVU, TOZIK AND I SHARE A LOOK - ONE OF TRIUMPH, BUT SHOCK
            EXEC::env.embassy.vn({bg: true, gakvu: 'fullview', tozik: 'fullview'})
        THEIR HANDS AND RECEPTORS TREMBLE LIKE THOSE OF A NEW CAVERNGUARD
    
    akizet
        if this is happening everywhere in the embassy...
        ...
        listen,
        stay close to me, and keep the timestopper connectors on
        we can probably use these until we are out of the embassy
        but we need to get out of here
        we should see if movefriend is still operational
    
    sourceless
        THE OTHERS SIMPLY DIP THEIR RECEPTORS IN AFFIRMATION AND STAY CLOSE
        AN UNEASY TENSION SITS BETWEEN US IN THE TIMESTOPPER'S CONNECTION
        WHICH, IS A LITTLE STRANGE... I WOULD UNDERSTAND FEAR, BUT,
        IS SOMEONE AFRAID OF ME?

    sys
        NOTICE::'gameplay may be toggled in the SYS menu'

    RESPONSES::akizet
        keep moving<+>END
            EXEC::revertBgm();env.embassy.vn({bg: false, gakvu: '', tozik: ''})

SKIP::env.embassy.conditionalItem('restorative', 3, 'tutrest');vn.done();revertBgm()
`)


// - d3_rec_enter
env.dialogues["d3_rec_enter"] = generateDialogueObject(` 
start
    sourceless
        AS WE ENTER, I AM STRUCK BY THE CHAOS
        A SWARM OF WARPED CONTAINERS ARE SKITTERING AROUND THE ROOM
        THEY HAVE TORN APART THE SCENERY, AND A FEW...
        A FEW QOU BODIES... ARE SCATTERED AROUND
        SHARED HORROR RINGS THROUGH OUR CONNECTION
    
    akizet
        listen - it is probably just their bodies that have collapsed
        we need to see if the mindcores in those two are recoverable
    
    sourceless
        GAKVU AND TOZIK BOTH SLINK BEHIND ME
        I CAN FEEL THAT GAKVU'S ATTITUDE HAS SHIFTED IN THE FACE OF FINAL DEATH
        AND TOZIK COLDLY EXAMINES THE CONTAINERS
    
    tozik
        there will be some sfer within these, possibly enough for us to work with
        this should not be difficult, especially with the timestopper
        we have you covered

    sourceless
        AS WE STAND BY OUR MAKESHIFT ENTRANCE, A CONTAINER REARS ITSELF
        AS IT DOES SO, THE OTHERS FOLLOW SUIT
        THEY MUST HAVE SENSED US
        OUR ONLY OPTION IS TO FIGHT
            EXEC::change('PAGE!!recreationfight', true)

    RESPONSES::akizet
        engage<+>END
            SHOWIF::['gameplay_off', false]
            FAKEEND::(begin combat)
            EXEC::env.grm.combat("spatial_recreation")

        bypass<+>CHANGE::d3_rec_clear
            SHOWIF::['gameplay_off', true]
            FAKEEND::(bypass combat)
            EXEC::vn.done();

SKIP::env.embassy.skips.d3_rec_enter()
SKIPTIME::700
END::env.embassy.vn({bg: false, fade: false, gakvu: '', tozik: '', tgolem: ''})
`)

// - d3_rec_clear
env.dialogues["d3_rec_clear"] = generateDialogueObject(` 
start
    sourceless
        WITH THESE LAST FEW DEAD, THE SKITTERING FALLS QUIET
            EXEC::KillEveryone();ResetMusic();
        TOZIK KNEELS BY A CONTAINER, GAKVU NEAR ANOTHER, 
        AND THEY RIFLE THROUGH THE SLUDGY REMAINS
            EXEC::changeBgm(env.embassy.music_collapse, {rate: 1})
        I, TOO, SEARCH THROUGH THE REMAINS OF OUR FOES...
            EXEC::env.combat.lastEngaged="recreation_containers_1"
        TEXEC::env.combat.dynamicReward()
            EXEC::env.combat.lastEngaged="recreation_containers_2"
        TEXEC::env.combat.dynamicReward()
            EXEC::env.combat.lastEngaged="recreation_containers_3"
        TEXEC::env.combat.dynamicReward()
    
    akizet
        anything else?

    sourceless
        BETWEEN THEM ARE THREE SFER CUBES, EACH NO LARGER THAN A KALSTIK
            EXEC::env.embassy.advanceSfer(3, "rec_clear")
        I WAS HOPING THERE WOULD BE MORE WITHIN THESE CONTAINERS

    tozik
        plenty of sfer, but i doubt this is enough to fix movefriend
        there are some info cores in here, for...

    sourceless
        TOZIK PRODS AT A SMALL ARCHIVAL CYST HE PULLS FROM THE OOZE

    tozik
        ...ah, 'outer vaznian moss' designs, from zevazni
        for the walls, i assume. that would have looked nice
        but--nothing useful

    sourceless
        WE LOOK TO GAKVU, WHO HAS PAUSED HER SEARCHING
        SHE IS STARING AT THE MANGLED QOU-BODY NEARBY, AWAY FROM US
        IS SHE MOURNING?
    
    akizet
        gakvu...

    sourceless
        SHE DOES NOT TURN, BUT HER RECEPTORS UNTWIST AS HER TENSION EASES

    gakvu
        they are still alive
        their mind-cores, anyway
        we need to help them get out of the bodies, though

    tozik
        how...
        ah. groundsmindry, right
        did they say what happened?
    
    sourceless
        GAKVU FIRMLY WAVES HER RECEPTORS

    gakvu
        i cannot do direct connection like that
        i just can see them in there
        we will have to see what they say

    RESPONSES::akizet
        go get them out<+>END
            EXEC::change("PAGE!!queue_person_enable", true)

SKIP::change("PAGE!!queue_person_enable", true);changeBgm(env.embassy.music_collapse, {rate: 1, length: 5});env.embassy.advanceSfer(3, "rec_clear");KillEveryone();ResetMusic();
`)

// - d3_person_intro
env.dialogues["d3_person_intro"] = generateDialogueObject(` 
start
    sourceless
        THE PERSONNEL tendril IS DARK, LIT BY THE LIGHTS OF THE INCOHERENT
        ATTENDANTS BEAR THE SAME STRANGE SIGIL AS OUR GOLEM...
        AND THE VEILKLIGHTS SEEM TO HAVE LEARNED TO MOVE
        WE PEER IN CAREFULLY, UNDER THEIR NOTICE FOR NOW
        A SHARED VOICE RINGS THROUGH THE TIMESTOPPER
    
    timestopper
        LOOK! THERE!
        THERE ARE MORE QOU-BODIES
        WE NEED TO CLEAR THIS PLACE OUT FIRST
        AGREED!
        THEY WILL NOTICE AS SOON AS WE ENTER THE tendril
        TREAD CAREFULLY

    sourceless
        WE BEGIN MAKING OUR WAY INTO THE tendril
        AS WE DO SO, OUR ENEMIES SPOT US ALMOST IMMEDIATELY
        OUR ONLY OPTION IS TO FIGHT
            EXEC::change('PAGE!!personnelfight', true)
    
    RESPONSES::akizet
        engage<+>END
            SHOWIF::['gameplay_off', false]
            FAKEEND::(begin combat)
            EXEC::env.grm.combat("spatial_personnel")

        bypass<+>CHANGE::d3_person_clear
            SHOWIF::['gameplay_off', true]
            FAKEEND::(bypass combat)
            EXEC::vn.done();

SKIP::env.embassy.skips.d3_person_intro()
SKIPTIME::700
END::env.embassy.vn({bg: false, fade: false, gakvu: '', tozik: '', tgolem: ''})
`)

// - d3_person_clear
env.dialogues["d3_person_clear"] = generateDialogueObject(`
start
    sourceless
        THE ROOM STANDS SILENT
            EXEC::pauseSwapCam(true);KillEveryone();ResetMusic();
        I SEARCH THROUGH THE DEBRIS STREWN AROUND THE TENDRIL...
            EXEC::env.combat.lastEngaged="attendant_squad_1"
        TEXEC::env.combat.dynamicReward()
            EXEC::env.combat.lastEngaged="attendant_squad_2"
        TEXEC::env.combat.dynamicReward()
        IMMEDIATELY, GAKVU GOES TO CHECK A NEARBY QOU
            EXEC::env.embassy.vn({bg: true, tozik: "defocus", gakvu: "defocus"});pauseSwapCam(true)
    
    gakvu
        these ones...
        the attendants were able to break through
    
    sourceless
        SHE IS FROZEN THERE, BY THEIR CORPSE
            EXEC::changeBgm(env.embassy.music_collapse, {rate: 1})
        HER SORROW SPREADS INTO OUR CONNECTORS
        WE HAVE LITTLE TO OFFSET IT 
        BUT I AM NO STRANGER TO ITS BITE
        AND TOZIK PREOCCUPIES HIMSELF WITH LOOKING THROUGH DEBRIS
    
    gakvu
        ...
        this does not make any sense...
        they really are killing <em>everyone</em>...

    sourceless
        WHAT I EXPECTED TO BE SADNESS IN HER VOICE, 
        IS INSTEAD SOMETHING LIKE MORBID CURIOSITY
        TOZIK CEASES HIS RUMMAGING TO WATCH GAKVU FOR AN INSTANT
        I CAN TELL HE WANTS TO PRY, BUT HE DOES NOT
        AND I WOULD RATHER NOT DO THIS NOW...
    
    tozik
        well,
            EXEC::env.embassy.vn({bg: true, tozik: "fullview"})

    sourceless
        TOZIK PULLS A SFER CUBE FROM THE REMAINS OF A CONTAINER
            EXEC::env.embassy.advanceSfer(1, "person_clear")
    
    tozik
        we still need some more sfer
            SHOWIF::'EXEC::env.embassy.enoughSfer(false)'
        we should check the rooms that are not broken
            SHOWIF::'EXEC::env.embassy.enoughSfer(false)'

        we have what we need to fix movefriend
            SHOWIF::'EXEC::env.embassy.enoughSfer(true)'
        we should head back to the relocator
            SHOWIF::'EXEC::env.embassy.enoughSfer(true)'

    RESPONSES::akizet
        continue<+>END
            EXEC::env.embassy.vn({bg: false, tozik: "", gakvu: ""});pauseSwapCam(false)

SKIP::env.embassy.advanceSfer(1, "person_clear");vn.done();pauseSwapCam(false);KillEveryone();ResetMusic();
`)

// - d3_containerinspect 
env.dialogues["d3r2_containerinspect"] = generateDialogueObject(`
start
    sourceless
        IN THE CORNER ARE A SET OF QUIVERING CONTAINERS
        IF KAZKI HAS ANY SFER STORED, IT WILL BE IN THEM
            EXEC::specialCam('kazkicontainers');pauseSwapCam(true)

    gakvu
        are those ones coherent...?
    
    sourceless
        GAKVU TAKES A STEP CLOSER, REACHING OUT WITH ONE OF HER CLAWS
        SUDDENLY--THE CONTAINERS LUNGE AT HER!

    RESPONSES::akizet
        activate timestopper<+>CHANGE::d3r2_postcombat
            SHOWIF::['gameplay_off', true]
            EXEC::specialCam(false)
            FAKEEND::skip combat
        activate timestopper<+>END
            SHOWIF::['gameplay_off', false]
            EXEC::env.grm.combat("spatial_cquarters2");specialCam(false)
            FAKEEND::start combat
`)

// - d3_containerambush
env.dialogues["d3r2_containerambush"] = generateDialogueObject(`
start
    sourceless
        AS WE GO TO LEAVE, THE SOUND OF THE DOOR OPENING IS LOUDER THAN USUAL
        A MINOR MALFUNCTION, MAYBE
        BUT THE CONTAINERS IN THE CORNER, AS IF AWOKEN FROM SLUMBER, SUDDENLY SPRING AT US!!!
            EXEC::specialCam('kazkicontainers');pauseSwapCam(true)

    RESPONSES::akizet
        activate timestopper<+>CHANGE::d3r2_postcombat
            SHOWIF::['gameplay_off', true]
            EXEC::specialCam(false)
            FAKEEND::skip combat
        activate timestopper<+>END
            SHOWIF::['gameplay_off', false]
            EXEC::env.grm.combat("spatial_cquarters2");specialCam(false)
            FAKEEND::start combat
`)

// - d3r2_postcombat
env.dialogues["d3r2_postcombat"] = generateDialogueObject(`
start
____SHOWIF::'gameplay_off'
    sys
        ATTENTION::"thoughtform combat gameplay bypassed";'toggle within system menu if desired'
____END

    sourceless
        THE CONTAINERS LIE MOTIONLESS, SLOWLY MELTING INTO WASTE
            EXEC::change("PAGE!!kazkiambush", true);KillEveryone();ResetMusic();
        A NUMBER OF SUBMERGED SHAPES FLOAT TO THEIR SURFACES
        TEXEC::env.combat.dynamicReward()
        WITH A LITTLE DIGGING, WE FIND SOME SFER CUBES!
            EXEC::env.embassy.advanceSfer(4, "d3r2")
    
    tozik
        that will do
            EXEC::env.embassy.vn({bg: true, tozik: "defocus"})
        we still need some more, though
            SHOWIF::'EXEC::env.embassy.enoughSfer(false)'

        this should be enough, we should head back
            SHOWIF::'EXEC::env.embassy.enoughSfer()'

    RESPONSES::akizet
        continue<+>END
            EXEC::step();env.embassy.vn({bg: false, tozik: ""});pauseSwapCam(false)
    
SKIP::change("PAGE!!kazkiambush", true);KillEveryone();ResetMusic();step();vn.done();pauseSwapCam(false);env.embassy.advanceSfer(4, "d3r2")
`)

// - d3_relocator_repair
env.dialogues["d3_relocator_repair"] = generateDialogueObject(`
start
    akizet
        let us begin!
            EXEC::pauseSwapCam(true)
        i would rather not seal these paths, just in case
        gakvu, you watch the path to personnel,
            EXEC::env.embassy.vn({gakvu: "defocus"});
        i will watch the path to recreation
    
    tozik
        all right, stand by
    
    sourceless
        TOZIK KNEELS NEAR MOVEFRIEND'S FACE, PREPARING HIS CORRUSKIVI
        AN INCISION IS MADE IN THE CONSTRUCT'S GLASS, PARTING IT LIKE A GATE
        A PROTECTIVE MEMBRANE FORMS OVER ITS INNARDS TO PREVENT CONTAMINATION
        
    tozik
        it looks like the echo-core is still intact
        from what i can see, just the regulatory cysts are sludged
    
    sourceless
        THE CORRUSKIVI LIQUIFIES, FORMING OVER HIS CLAW FULLY
        HE SPREADS IT TO HIS OTHER ONE, TOO, BECOMING A SET OF GLOVES
        ONE HAND REACHES INTO MOVEFRIEND'S ORGANS, AND HIS OTHER FETCHES SFER TO IMPLEMENT
        I CANNOT CLEARLY SEE WHAT ELSE HE DOES, BUT I ASSUME IT IS SIMPLE REFORMATION
            EXEC::env.embassy.vn({bg: true, tozik: "defocus", gakvu: ""});
        SO I RETURN TO WATCHING MY PATH - GAKVU DOES THE SAME
        ...
        AFTER SOME TIME,
        TOZIK PULLS AWAY FROM MOVEFRIEND
            EXEC::env.embassy.vn({tozik: "focus"});
        A PILE OF METALLIC SLUDGE LIES NEAR HIM, 
        INERT ORGANS PULLED FROM THE UNFORTUNATE CONSTRUCT
        THE SFER CUBES HAVE BEEN MOSTLY CONSUMED, THOUGH WE HAVE A FEW EXTRA
        IN HIS STANCE, I SEE RELIEF
    
    akizet
        all done?

    tozik
        almost. i just need to reseal it
        as soon as i do that, it will activate again
        there does not seem to be anything wrong with the echo core
        just like the barfriend, actually...
        so it should be perfectly functional
        stand by a moment longer

    sourceless
        WITH HIS CORRUSKIVI, HE DRAWS THE EDGES OF THE OPENING TO ONE ANOTHER
        THE CYSTIC GLASS SHIFTS IN DENDRITIC PATTERNS AS IT REDISTRIBUTES
        AND SOON COMPLETELY CLOSES AGAIN
        TRUE TO HIS WORD, MOVEFRIEND'S FAMILIAR FACE FLICKERS BACK TO LIFE
            EXEC::env.embassy.vn({bg: false, tozik: "defocus", gakvu: ""});document.querySelector('#realgrid .lifter').classList.add('fixed')

    RESPONSES::akizet
        hello movefriend!!<+>awaken

awaken
    akizet
        hello movefriend!!!
    
    sourceless
        IT IS SILENT FOR A MOMENT
        PARTS OF ITS FACE PROJECTION FLICKER STRANGELY
    
    movefriend
        HI AKIZETESCHE!
        OH AND TOZIKORIC! GAKVUKANI!
        SO MANY FRIENDS HERE
        VERY COOL!!
        FRIENDS: I DO NOT FEEL VERY GOOD
    
    tozik
        peculiar
        you should be feeling the same as before
        what is wrong?
    
    sourceless
        THE PATHS GAKVU HAD CARVED THROUGH THE WALLS LIQUIFY, CLOSING AGAIN
        GAKVU STUMBLES OUT OF THE WAY, NEARLY CAUGHT IN THE MOVEMENT
        MOVEFRIENDS ARE RARELY SO HAPHAZARD...

    movefriend
        I SHOULD NOT BE AWÂ»AKE
    
    sourceless
        ITS FACE FLICKERS AWAY AND THE ROOM FALLS QUIET
            EXEC::changeBgm(env.embassy.music_p1boss_suspense, {rate: 0.5});document.querySelector('#realgrid .lifter').classList.remove('fixed')
    
    akizet
        Â§kÂºÃ¹
        are we trapped in here again?
    
    tozik
        what could have gone wrong...?
            EXEC::env.embassy.vn({tozik: "defocus"});
        the components were all fine
    
    sourceless
        GAKVU BACKS AGAINST THE INNER WALL OF THE RELOCATOR
            EXEC::env.embassy.vn({bg: true, gakvu: "defocus"});
        A SHARP WAVE OF TERROR RUNS THROUGH OUR CONNECTION
        
    gakvu
        the... 
            EXEC::ratween(env.bgm, 0.75, 10000)
        the groundsmind
        it sees us

    sourceless
        THE AGGRESSOR'S SIGIL FORMS IN PLACE OF MOVEFRIEND'S FACE
            EXEC::env.embassy.vn({bg: false, gakvu: "", tozik: ""});EvilMovefriend();
        I HEAR THE SOUND OF CORRU SHIFTING BEHIND THE WALLS

    aggressor
        cÃ…4Ã„â€“sT
            EXEC::content.classList.add('painprep', 'painhalf')
        Ã½ÂÃ¦Ã´r,Â§Â½Ã¿lfÃƒ
        Ã„SÂ¿De
    
    sourceless
        A PRESSURE WEIGHS AGAINST OUR MINDS, OUR CORRUCYSTIC ORGANS
            EXEC::content.classList.add('painmode')
        BUT THE TIES TO OUR MINDCORES ARE TOO STRONG - THE OTHERS ARE FINE TOO
        BEFORE WE CAN QUESTION THE ENTITY, SPINES FORM ALONG THE WALLS
        SHARP TENDRILS EMERGE FROM MOVEFRIEND'S FORM IN UNEVEN PATTERNS
        IT INTENDS TO KILL US
        THERE IS NO OTHER CHOICE BUT TO FIGHT
            EXEC::content.classList.remove('painmode');

    RESPONSES::sys
        force thoughtform rules over entity<+>END
            EXEC::env.grm.combat("spatial_movefoe_lowintensity");env.embassy.vn({tozik: '', gakvu: ''});specialCam(false);content.classList.remove('painprep', 'slowpain') 
            FAKEEND::reduced intensity alternative
            SHOWIF::[['low_intensity', true], ['gameplay_off', false]]

    RESPONSES::akizet
        activate timestopper<+>END
            EXEC::env.grm.combat("spatial_movefoe");env.embassy.vn({tozik: '', gakvu: ''});specialCam(false);content.classList.remove('painprep', 'slowpain')
            FAKEEND::start combat
            SHOWIF::['gameplay_off', false]
        activate timestopper<+>CHANGE::d3_movefriend_finish
            SHOWIF::['gameplay_off', true]
            EXEC::env.embassy.vn({tozik: '', gakvu: ''});specialCam(false);content.classList.remove('painprep', 'slowpain')
            FAKEEND::skip combat

SKIP::env.embassy.skips.d3_relocator_repair()
SKIPTIME::700
`) 

// - d3_movefriend_finish
env.dialogues["d3_movefriend_finish"] = generateDialogueObject(`
start
____SHOWIF::'gameplay_off'
    sys
        ATTENTION::"thoughtform combat gameplay bypassed";'toggle within system menu if desired'
____END

    sourceless
        ALL AT ONCE, THE CHAOS STOPS
            EXEC::specialCam("movefriend_examine");ResetMusic();
        THE AGGRESSOR'S SIGIL FLICKERS AWAY, 
            EXEC::document.querySelector('#realgrid .lifter').classList.remove('aggressormode')
        AND MOVEFRIEND'S FACE RETURNS
            EXEC::document.querySelector('#realgrid .lifter').classList.add('fixed');change('PAGE!!movefixed', true)

    movefriend
        AAHH!!!
        OH! I AM FREE!
        I AM SO SORRY
        PLEASE UNDERSTAND I WOULD NEVER TRY TO HURT YOU
    
    akizet
        gakvu--is it done?
    
    sourceless
        TOZIK TAKES THE MOVEFRIEND'S APOLOGY AS CONFIRMATION, KNEELING NEAR IT
        HE IS SET ON REPAIRING THE DAMAGE WE HAVE DEALT
    
    gakvu
        yeah...
            EXEC::env.embassy.vn({bg: true, gakvu: 'focus nocon'});

    sourceless
        GAKVU SLUMPS AGAINST THE BACK WALL ACROSS FROM MOVEFRIEND
        NOT FAR FROM HER, THE TREMBLING MINDCORES ARE HUDDLED TOGETHER
        THEY MUST HAVE STAYED IN HER PROTECTIVE RADIUS THROUGH THE ATTACK
        
    gakvu
        i made some changes to this movefriend
        it cannot be controlled by the groundsmind anymore

    sourceless
        A SHARP SUSPICION SPIKES THROUGH OUR SHARED CONNECTION

    miltza
        what? how?
        where did you learn to do that?
    
    sourceless
        GAKVU ONLY SNICKERS IN RESPONSE
        SHE WAVES HER RECEPTORS NEGATIVELY

    gakvu
        sorry, it is a secret!
    
    sourceless
        TOZIK SHIFTS BACK TO HIS FEET
            EXEC::env.embassy.vn({gakvu: 'fullview nocon', tozik: 'fullview'});
    
    tozik
        we should get out of here
    
    akizet
        we should, but...
        miltza - you said the hangar was trapping people, yes?
    
    miltza
        yes!
            EXEC::env.embassy.vn({miltza: "display show focus hascon far", gakvu: 'defocus nocon', tozik: 'defocus'});
        and it did not sound good...
        the messages were intermingled with pain and fear

    akizet
        i see
        let me see if I can get in touch with anyone...
            EXEC::env.embassy.vn({miltza: "display show hascon far", gakvu: 'defocus nocon', tozik: 'defocus'});
    
    sourceless
        FUNFRIEND!
        CAN WE MAKE ANYTHING OUT FROM COMMUNICATIONS YET?
    
    funfriend
        HI AKIZETESCHE!!
        THE NOISE IS STILL MAKING MOST TRANSMISSIONS INCOHERENT
        I CANNOT UNDERSTAND MUCH...
        THE PAIN AND FEAR IS LESSER THAN BEFORE
        BUT I DO NOT THINK THAT IS A GOOD THING

    sourceless
        ...
    
    akizet
        i...
        do not think the hangar is a good option
        but there is no other way away from here

    miltza
        could we survive with the help of the timestopper?
        you are incredible fighters when it is active!!
    
    tozik
        not if the groundsmind have seized our ships, too
        also, that is near the top of the spire...
        which means the timestopper's influence will be far lesser

    gakvu
        how far are we from the groundsmindry floor?
    
    sourceless
        A SHORT PAUSE PASSES,
            EXEC::env.embassy.vn({miltza: ''});
        OUR ATTENTION SHIFTING TO GAKVU
        SHE RISES TO HER FEET AGAIN
            EXEC::env.embassy.vn({gakvu: 'defocus nocon'});

    movefriend
        GAKVUKANI! 
            EXEC::env.embassy.vn({bg: false});
        GIVEN THAT WE ARE NEAR THE BASE OF THE SPIRE,
        THERE ARE ONLY THREE θsegment BLOCKS BETWEEN THE GROUNDSMINDRY AND HERE
        I CAN TAKE YOU DIRECTLY TO IT!
        AND, RELATIVE TO THE DISTANCE TO THE HANGAR,
        IT IS FAR CLOSER!

    itzil
        that is right!
            EXEC::env.embassy.vn({itzil: 'display show', gakvu: 'nocon defocus', tozik: 'defocus'});
        the golem maintenance θsegment block is just below this one!
        and there is a lot of weaponry there, too!!

    gakvu
        you see what i am suggesting
            EXEC::env.embassy.vn({itzil: '', gakvu: 'defocus nocon', tozik: 'defocus'});

    sourceless
        ARE WE REALLY GOING TO DO THIS?
    
    tozik
        it may be the only way we can stop this disaster...
        if the bright cousins are aggressed, they will destroy us
        and likely never let us near their planet again
        we have to stop the groundsmind

    sourceless
        I SHOULD NOT WANT THIS
        BUT IN THIS SHORT TIME, I FELT SUCH EXCITEMENT
        HOW LONG IT HAS BEEN, SINCE I HAVE FELT IT...
        ADRENALINE - OR THE θdeathly COUNTERPART OF IT
    
    akizet
        does anyone object?
    
    sourceless
        I EXAMINE MILTZA AND THE TWO EXPOSED QOU
            EXEC::env.embassy.vn({bg: true, karik: 'display show', itzil: 'display show', gakvu: 'hide', tozik: ''});
        MILTZA'S RECEPTORS ARE TWISTED IN CONFLICTION
        BUT THE MINDCORES SPEAK UP FIRST
    
    itzil
        i am not leaving until i save my kivii!

    karik
        maybe we could get into the golems down there and help, too!

    miltza
        i... i do not see any other option
            EXEC::env.embassy.vn({karik: '', itzil: '', miltza: 'show hascon'});
    
    gakvu
        hehehe...
            EXEC::env.embassy.vn({itzil: '', miltza: 'hide hascon', karik: '', gakvu: "defocus nocon"});
        velzie truly has chosen us
            EXEC::env.embassy.vn({gakvu: "focus nocon"});
        movefriend, please take us to the golem maintenance block
            EXEC::env.embassy.fixMovefriend()
    
    sys
        ATTENTION::'memory stream segment end'
            EXEC::env.embassy.vn({bg: false, itzil: '', miltza: 'hide hascon', karik: '', gakvu: "hide nocon"});
        ADVISE::'save iteration'
        NOTICE::'render can continue without incoherence'
        NOTICE::'thoughtform activity detected'::IN::'embassy research center'
            SHOWIF::['PAGE!!archiveopen', false]

____SHOWIF::['ENV!!ep3', false]
        ATTENTION::'next memory stream segment incomplete';'internal note attached'::
    
    funfriend
        hello interloper! please come back in a θwink! i am nearly done with this next part!

____SHOWONCE
    moth
        ok, well... looks like we have to wait a little while again
        i'll keep an eye on the broad activity in the corrucyst
        if i see any changes in these memories, i'll let you know
        i bet funfriend will be done tomorrow with everything i see going on here
        if you want to call it for today, go ahead
____END

____SHOWIF::'ENV!!ep3'
    sys
        ATTENTION::'next memory stream segment available';'continue directly?'
____END

    RESPOBJ::d3_closeout

explore
    sys
        ATTENTION::'saving iteration...'
            EXEC::change("PAGE!!ep2xplore", true)
        ...
            EXEC::env.embassy.collapseSave({effects: true})
            WAIT::1000
        NOTE::'save process complete'
        NOTE::'return to entity movefriend once stream repair is complete'
            SHOWIF::['ENV!!ep3', false]
        NOTE::'return to entity movefriend when prepared to proceed'
            SHOWIF::['ENV!!ep3', true]
    
    RESPONSES::self
        ok<+>END

continue
    sys
        ATTENTION::'saving iteration...'
            EXEC::change("PAGE!!embassy_day", 3.5)
        ...
            EXEC::env.embassy.collapseSave({effects: true})
            WAIT::1000
        NOTE::'save process complete'
        ATTENTION::'commencing stream transfer'
            EXEC::change("TEMP!!ep2->ep3transfer", true)
    
    RESPONSES::self
        ok<+>END
            EXEC::moveTo("/local/ocean/embassy/golem/")

savexit
    sys
        ATTENTION::'saving iteration...'
            EXEC::change("PAGE!!explore", true)
        ...
            EXEC::env.embassy.collapseSave({effects: true})
            WAIT::1000
        NOTE::'save process complete'
        NOTE::'load iteration';'return to entity movefriend once stream repairs is complete'
            SHOWIF::['ENV!!ep3', false]
        NOTE::'load iteration';'return to entity movefriend when prepared to proceed'
            SHOWIF::['ENV!!ep3', true]

    RESPONSES::sys
        end<+>END
            EXEC::corruRefresh()
            FAKEEND::(end recollection)

advance
    sys
        ATTENTION::'saving iteration...'
            EXEC::change("PAGE!!explore", true)
        ...
            EXEC::env.embassy.collapseSave({effects: true})
            WAIT::1000
        NOTE::'save process complete'

    RESPONSES::sys
        advance log<+>END
            EXEC::env.entities["advance log"].actions[0].exec()
            FAKEEND::(advance to EP3)

END::specialCam(false);pauseSwapCam(false)
SKIP::env.embassy.skips.d3_movefriend_finish();change("PAGE!!explore", true);env.embassy.collapseSave({effects: true})
SKIPNOTICE::defaults to save and explore
`)

// - d3_bstrdintro
env.dialogues["d3_bstrdintro"] = generateDialogueObject(`
start
    sourceless
        WE ARE BESET BY INCOHERENT FOES
        OUR ONLY O

    sys
        ERROR::'memory stream halted'
            EXEC::env.embassy.vn({bg: true, bstrdface: 'display'})

    moth
        huh?
            SHOWONCE::
    
    bstrd
        SURPRISE!!!!!
            EXEC::changeBgm(env.embassy.music_bstrd, {length: 2000});env.embassy.vn({bg: true, bstrdface: 'display show'})
        this part of da memory hase been chosen 2 become... EVIL MODE!!!
        time 2 die INTRALKOBER >%^)
            SHOWIF::"e3a2__bstrdmeet"

____SHOWONCE::
____SHOWIF::"e3a2__bstrdmeet"
    moth
        oh, weird
        looks like it can actually work with this memory vs the golem maintenance one
        i wonder what the difference is?

____SHOWIF::["e3a2__bstrdmeet", false]
    moth
        oh shit
        god damn it. i should have double checked the data
        i think we gave the memory a virus
        ok - don't panic
        the corrucyst is too alien to support it outside of its framework
        so, this thing is limited to the collapse memory

    bstrd
        :-0 ??

    moth
        and actually, it looks like it isn't exactly malicious...?
        idk see what's up

    bstrd
        helloe?? any1 HOME? :|
        THOUGHTS ?????
____END

    RESPOBJ::d3_bstrdintro_responses

who
    self
        WHO ARE YOU?

    bstrd
        :U
        BSTRD
        STUPID u know me :P
            SHOWIF::"e3a2__bstrdmeet"
        im here 2 make u have FUN!!!
        framing devices r boring sometimes......
        so i take a litel part to improve
        to enjoy if u wish ?
        >:)
        
    RESPOBJ::d3_bstrdintro_responses

why
    self
        you were able to make evil mode here?
        why? you were having trouble
    
    bstrd
        THIS 1'S is TINY
        :b
        ok questions creature? 
        anmswer GOOD ENOUgH 4 u?
        there IS A games waiting.. '_' ... 
                
    RESPOBJ::d3_bstrdintro_responses
        
what
    self
        WHAT DID YOU DO TO THE MEMORY?
    
    bstrd
        UMMM, NOTHING..............???
        LOL :P JK
        i told u its evil mode
        its... XTRA HARD!!!
        turn back if u dont like it....
        but maybe u willl .. . ?? 
    
    self
        DID YOU ALTER THE EVENTS?
        IS ANY OF THIS REAL?

    bstrd
        '_'
        they rly did MOST of this
        :V
        im just making it cooler

____SHOWONCE::
____SHOWIF::["e3a2__bstrdmeet", false]
    moth
        oh, i see...
        ok, this only looks like a virus
        it's actually a part of the framing device
        an extra hard mode... probably only targets less important parts of the memory, at least i hope
        look, if you don't like what's going on, you can probably turn around and skip this part
        totally up to you
____END
        
    RESPOBJ::d3_bstrdintro_responses

bye
    bstrd
        :V
        NO 'THANK U'??
        W/E
        SEE U SOON >:p

    sys
        ATTENTION::'memory stream resumed'
            EXEC::revertBgm();env.embassy.vn({bg: false, bstrdface: ''})

    sourceless
        PTION IS TO FIGHT
        TO USE A DISABLER CHARGE SO SOON WOULD BE FOOLISH
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.disabler)'

    RESPONSES::akizet
        engage<+>END
            FAKEEND::(begin combat)
            SHOWIF::['gameplay_off', false]
            EXEC::env.grm.combat("spatial_archivalintro");env.embassy.vn({bg: false, bstrdface: ''})
        bypass<+>END
            SHOWIF::['gameplay_off', true]
            FAKEEND::(bypass combat)
            EXEC::env.combat.dynamicCombat({dry: true});cutscene(true);setTimeout(()=>{cutscene(false);env.combat.dynamicCallback(env.rpg.enemyTeam)}, 1010);env.embassy.vn({bg: false, bstrdface: ''})
`)

// - d3_archiveintro
env.dialogues["d3_archiveintro"] = generateDialogueObject(`
start
    sourceless
        OUR FOES LIE DESTROYED
            EXEC::env.combat.lastEngaged="archivetutorial";change('PAGE!!archivalintrofight', true);KilEveryone();ResetMusic();
        TEXEC::env.combat.dynamicReward()
        ...
        REALLY, A SATIK CYST? HERE? HOW PECULIAR...
        I TURN IT OVER IN MY CLAWS, ITS MYRIAD APPLICATORS STARING BACK AT ME
        PERHAPS THE ARCHIVAL VEIN'S DELIVERY CENTER HAD A BATCH
        BUT IT MUST NOT HAVE BEEN INTENDED FOR OUR SPIRE θsegment...

    gakvu
        ah! how clumsy that thing was!

    tozik
        alone, perhaps...
        but if we have to deal with multiple further within,
    
    sourceless
        TOZIK PAUSES AS HE REALIZES,
            SHOWIF::'EXEC::page.party.inventory.filter(i => i[0].slug != \`sfer_cube\`).length == 0'
        WE HAVE NO MATERIALS FOR USE IN COMBAT
            SHOWIF::'EXEC::page.party.inventory.filter(i => i[0].slug != \`sfer_cube\`).length == 0'
        HIS RECEPTORS ARE SUDDENLY CRUSHED DOWNWARDS
            SHOWIF::'EXEC::page.party.inventory.filter(i => i[0].slug != \`sfer_cube\`).length == 0'


        TOZIK TURNS OVER THE MATERIALS WE HAVE ACQUIRED SO FAR
            SHOWIF::'EXEC::page.party.inventory.filter(i => i[0].slug != \`sfer_cube\`).length'
        KAVRUKAS,
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.kavruka)'
        AIMA CYSTS,
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.aima_cyst)'
        RESTORATIVE CYSTS...
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.restorative)'

    tozik
        we should put these to work
            SHOWIF::'EXEC::page.party.inventory.filter(i => i[0].slug != \`sfer_cube\`).length'
        we should probably be very, very careful
            SHOWIF::'EXEC::page.party.inventory.filter(i => i[0].slug != \`sfer_cube\`).length == 0'

    RESPONSES::akizet
        continue<+>END
`)

// - d3_archivalvein_intro
env.dialogues["d3_archivalvein_intro"] = generateDialogueObject(`
start
    sourceless
        A STRANGE DOOR STANDS BEFORE US AS WE ENTER
            EXEC::change("PAGE!!archivalveinfight", true)
        BUT THERE IS NO TIME TO EXAMINE IT
        OUR FOES ARE UPON US RIGHT AWAY

    RESPONSES::akizet
        activate timestopper<+>END
            EXEC::env.grm.combat("spatial_archivalvein");
            SHOWIF::['gameplay_off', false]
            FAKEEND::(initiate combat)
        activate timestopper<+>CHANGE::d3_archivalvein
            SHOWIF::['gameplay_off', true]
            FAKEEND::(skip combat) 
`)

// - d3_archivalvein
env.dialogues["d3_archivalvein"] = generateDialogueObject(`
start
    sourceless
        THE ROOM IS SILENT
            EXEC::KillEveryone();ResetMusic();
        I SCAVENGE THROUGH THE REMAINS OF OUR FOES...
            EXEC::env.combat.lastEngaged="archivecommon"
        TEXEC::env.combat.dynamicReward()
            EXEC::env.combat.lastEngaged="archivecloaktainer"
        TEXEC::env.combat.dynamicReward()

    RESPONSES::akizet
        proceed<+>END
`)

// - d3_archivecore_intro
env.dialogues["d3_archivecore_intro"] = generateDialogueObject(`
start
    sourceless
        AS WE ENTER, GAKVU SPOTS SOMETHING ACROSS THE ROOM
            EXEC::change('PAGE!!archivalcorefight', true)

    gakvu
____SHOWIF::[["PAGE!!triedarchivedoor", true]]
        is that it over there?
        the 'cool orb thingy'?
____END
            
        what is that?
            SHOWIF::[["PAGE!!triedarchivedoor", false]]

    sourceless
        GAKVU POINTS FORTH TO AN EYE-PIERCING MONOLITH
            EXEC::specialCam('bstrdcyst1');pauseSwapCam(true)
        IT SEEMS TO BE MADE OF THE SAME STRANGE MATERIAL FROM BEFORE...
        AND OVER IT, FLOATS AN IMPORTANT-LOOKING CORRUCYST
        BUT - WE CANNOT GO JUST YET
            EXEC::specialCam(false);pauseSwapCam(false)
        INCOHERENT FOES STAND IN OUR WAY
        OUR ONLY OPTION IS TO FIGHT

    RESPONSES::akizet
        fight!!<+>END
            EXEC::env.grm.combat("spatial_archivalcore");
            SHOWIF::['gameplay_off', false]
            FAKEEND::(initiate combat)
        fight!!<+>CHANGE::d3_archivecore
            SHOWIF::['gameplay_off', true]
            FAKEEND::(skip combat)
`)

// d3_archivecore
env.dialogues["d3_archivecore"] = generateDialogueObject(`
start
    sourceless
        THE ROOM IS DEATHLY STILL, ASIDE FROM THE DRIPPING OF SPIREBLOOD FROM THE MELTING CEILING
            EXEC::KillEveryone();ResetMusic();
        I PICK THROUGH THE REMNANTS OF OUR FOES...
            EXEC::env.combat.lastEngaged="archivedouble"
        TEXEC::env.combat.dynamicReward()
        NOW, THERE IS NOTHING PREVENTING US FROM TAKING THE CYST
        TOZIK WALKS FORTH TO TAKE IT, ATTEMPTING TO CONNECT TO IT...
            EXEC::env.embassy.vn({tozik: "fullview"});addItem(env.ITEM_LIST.cool_orb_thingy);env.stage.current.hidePillarCyst();
        BUT HE SIMPLY SMASHES IT AGAINST HIS RECEPTOR UNEXPECTEDLY - ITS GLASS DOES NOT PART AS USUAL
        HE STUMBLES FROM THE IMPACT

    tozik
        ah...
        ow...

    sourceless
        HE STILL ALLOWS HIMSELF TRUE PAIN? HOW SILLY

    gakvu
        let me see!
            EXEC::env.embassy.vn({gakvu: "defocus"})

    sourceless
        SHE SKITTERS CLOSER, AND I EXPECT HER TO SNATCH IT FROM HIS CLAWS,
            EXEC::env.embassy.vn({gakvu: "fullview"})
        BUT INSTEAD, SHE INSPECTS HIS HEAD AND RECEPTOR FIRST
        <em>THEN</em> SHE SNATCHES IT FROM HIS CLAWS,
        PEERING INTO ITS ODDLY COLORED SKIN

    gakvu
        it is... alive,
        but yes - it seems to be a receptor-lock
        look!

    sourceless
        GAKVU TURNS THE CYST OVER IN HER CLAWS, TAPPING ITS MARKING
        A PIGMENTATION SIGIL THAT READS, 'ON THE USE OF BRIGHT WEAPONRY'

    gakvu
        maybe that thing keeping the door locked...
            SHOWIF::[["PAGE!!triedarchivedoor", true]]
        is just a very strange qou from materials...?
            SHOWIF::[["PAGE!!triedarchivedoor", true]]
        who wants to preserve their research??
            SHOWIF::[["PAGE!!triedarchivedoor", true]]

        is this kazki's? why is it so strangely highlighted?
            SHOWIF::[["PAGE!!triedarchivedoor", false]]

    akizet
        without a doubt
            SHOWIF::[["PAGE!!triedarchivedoor", false]]
        let us bring it along - it is small enough
            SHOWIF::[["PAGE!!triedarchivedoor", false]]
        and we should continue looking around!
            SHOWIF::[["PAGE!!triedarchivedoor", false]]
        there must be something else going on in this vein...
            SHOWIF::[["PAGE!!triedarchivedoor", false]]

        maybe...
            SHOWIF::[["PAGE!!triedarchivedoor", true]]
        either way, we have the 'cool orb thingy'.
            SHOWIF::[["PAGE!!triedarchivedoor", true]]
        let us fetch the other thing--the 'black box'?
            SHOWIF::[['EXEC::checkItem(env.ITEM_LIST.scary_black_box)', false], ["PAGE!!triedarchivedoor", true]]
        let us return to the door
            SHOWIF::[['EXEC::checkItem(env.ITEM_LIST.scary_black_box)', true], ["PAGE!!triedarchivedoor", true]]

    tozik
        <em>scary</em> black box
            SHOWIF::[['EXEC::checkItem(env.ITEM_LIST.scary_black_box)', false], ["PAGE!!triedarchivedoor", true]]

    RESPONSES::akizet
        continue<+>END
            EXEC::specialCam('');env.embassy.vn({gakvu: "", tozik: ""});pauseSwapCam(false)
`)


// - d3_archivedelivery
env.dialogues["d3_archivedelivery"] = generateDialogueObject(`
start
    sourceless
        AS SOON AS WE ENTER THE ROOM... I SEE THEM
        EACH AND EVERY ONE
        A HALF-DOZEN CONTAINERS, WITH ONE OF THOSE SURFACE-SENT LIGHTS
        TOO MANY TO USE A DISABLER
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.disabler)'
        BEFORE I CAN EVEN CURSE TO MYSELF, THEY ARE UPON US
            EXEC::change('PAGE!!archiveambush', true)
    
    RESPONSES::akizet
        fight!!<+>END
            EXEC::env.grm.combat("spatial_archivaldelivery");
            SHOWIF::['gameplay_off', false]
            FAKEEND::(initiate combat)
        fight!!<+>CHANGE::d3_archivedeliveryclear
            SHOWIF::['gameplay_off', true]
            FAKEEND::(skip combat)
`)

// - d3_archivedeliveryclear
env.dialogues["d3_archivedeliveryclear"] = generateDialogueObject(`
early
    sourceless
        AH - THERE, BEYOND THEIR CORPSES...
            EXEC::ResetMusic();
        IT SEEMS TO BE A COUSINLY BOX?
        I GO TO TAKE IT, THEN TRY TO OPEN IT...
            EXEC::setCam({x: 3, y: 3, offsetCamera: 'rotateX(-30deg)', rotation: 110});pauseSwapCam(true)
        BUT THE DEAD METAL LATCHES AND JOINTS HOLD IT FIRMLY SHUT
        AND ON CLOSER INSPECTION, THAT STRANGE TENDRIL MATERIAL IS PRESENT HERE, TOO
        IT SEEMS TO BE ASSISTING IN HOLDING IT SHUT...

    akizet
        curious - this looks like it came from the cousins
        i have seen them use these boxes for sensitive materials

    gakvu
        like what?
            EXEC::env.embassy.vn({gakvu: "defocus"})

    sourceless
        A PANG OF ANXIETY SHOOTS THROUGH MY MINDCORE
        I SHOULD DEFINITELY NOT SAY,
        'LIKE AN EXPERIMENTAL CORRU TO BRIGHT-LIGHTNING CONVERTER'

    akizet
        oh, uh, like,
        apples...
        because--they do not fare well with the low-air environment of our spire!

    gakvu
        ah. curious

    sourceless
        ½T~g«¾%
        THEY MUST THINK I AM SIMPLY PRETENDING TO KNOW
        OH WELL - IT IS BETTER THAN THE ALTERNATIVE
        WE TAKE THE BOX WITH US - HEAVY, BUT EASY ENOUGH TO SET ASIDE WHEN NEEDED
            EXEC::addItem(env.ITEM_LIST.scary_black_box)

    akizet
        i feel this may come in handy
        if it proves too cumbersome, we may simply leave it
        come - let us continue exploring

    RESPONSES::akizet
        continue<+>END
            EXEC::env.embassy.vn({gakvu: ""});setCam();env.stage.current.onStep();pauseSwapCam(false);

start
____SHOWIF::'gameplay_off'
    sys
        ATTENTION::"thoughtform combat gameplay bypassed";'toggle within system menu if desired'
____END

    sourceless
        THE LAST ONE FALLS
            EXEC::KillEveryone();ResetMusic();

        AFTER THE FIGHT, WE ALL CHEER IN UNISON
            SHOWIF::'EXEC::env.embassy.checkUsedKavrukas(true)'
        AN INGENIOUS USE OF KAVRUKAS, I WILL ALLOW MY PRIDE THIS VICTORY
            SHOWIF::'EXEC::env.embassy.checkUsedKavrukas(true)'

        WE ALL COLLAPSE WITH RELIEF AFTER THE FIGHT
            SHOWIF::'EXEC::env.embassy.checkUsedKavrukas(false)'
        THIS IS THE WORST θgaze OF MY θdeath
            SHOWIF::'EXEC::env.embassy.checkUsedKavrukas(false)'
        
    akizet
        that could have been really bad...
            SHOWIF::'EXEC::env.embassy.checkUsedKavrukas(true)'
    
    tozik
        no tendril left to rot
            SHOWIF::'EXEC::env.embassy.checkUsedKavrukas(true)'
            EXEC::env.embassy.vn({tozik: "defocus"})

    sourceless
        I RUMMAGE A BIT THROUGH THE remains OF THESE CONSTRUCTS...
            EXEC::step();env.embassy.vn({tozik: ""});env.combat.lastEngaged="archivecontainers";
        TEXEC::env.combat.dynamicReward()

        LET US SEE, WHAT ELSE IS HERE...
            SHOWIF::[["PAGE!!triedarchivedoor", false]]
            WAIT::500
            EXEC::cutscene(true);if(!env.tempFlag){env.tempFlag = true; setTimeout(()=>{sendDialogue(env.currentDialogue.chain['early']);cutscene(false);env.tempFlag = false}, 1000)}

        AH - THERE, BEYOND THEIR CORPSES, MUST BE THE 'SCARY BLACK BOX'
        I GO TO TAKE IT, THEN TRY TO OPEN IT...
            EXEC::setCam({x: 3, y: 3, offsetCamera: 'rotateX(-30deg)', rotation: 110});pauseSwapCam(true)
        BUT THE DEAD METAL LATCHES AND JOINTS HOLD IT FIRMLY SHUT
        AND ON CLOSER INSPECTION, THAT STRANGE TENDRIL MATERIAL IS PRESENT HERE, TOO
        IT SEEMS TO BE ASSISTING IN HOLDING IT SHUT...

    akizet
        curious - this looks like it came from the cousins
        i have seen them use these boxes for sensitive materials
    
    gakvu
        like what?
            EXEC::env.embassy.vn({gakvu: "defocus"})

    sourceless
        A PANG OF ANXIETY SHOOTS THROUGH MY MINDCORE
        I SHOULD DEFINITELY NOT SAY,
        'LIKE AN EXPERIMENTAL CORRU TO BRIGHT-LIGHTNING CONVERTER'
    
    akizet
        oh, uh, like,
        apples...
        because--they do not fare well with the low-air environment of our spire!

    gakvu
        ah. curious

    sourceless
        ½T~g«¾%
        THEY MUST THINK I AM SIMPLY PRETENDING TO KNOW
        OH WELL - IT IS BETTER THAN THE ALTERNATIVE
        WE TAKE THE BOX WITH US - HEAVY, BUT EASY ENOUGH TO SET ASIDE WHEN NEEDED
            EXEC::addItem(env.ITEM_LIST.scary_black_box)

    akizet
        come - let us return to the door
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.cool_orb_thingy)'
        come - let us find the "cool orb thingy"
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.cool_orb_thingy) == false'
        before this archival vein collapses even further through the spire...
            EXEC::setCam();env.stage.current.onStep();

    RESPONSES::akizet
        continue<+>END
            EXEC::env.embassy.vn({gakvu: ""});pauseSwapCam(false)
`)

// - d3_archivemini
env.dialogues["d3_archivemini"] = generateDialogueObject(`
start
    sourceless
        IMMEDIATELY AS WE PROCEED, A PRIMAL FEAR OVERTAKES ME
        THOUGH I AM CERTAIN WHAT STANDS BEFORE US IS AN ARCHIVAL SHELF...
        A DISTANT PART OF MY MIND ASSOCIATES IT WITH A SECRI
        IS IT THE MALFORMED EYES? THE ELONGATED LIMBS?
        OR MAYBE THE PROMISE OF DEATH FROM ITS TOUCH
        THERE IS NO TIME TO FIND THE ROOT CAUSE
        IT IS UPON US WITH WORRYING SPEED
    
    RESPONSES::akizet
        fight!!<+>END
            EXEC::env.grm.combat("spatial_archivalcore_sensitive");
            SHOWIF::['gameplay_off', false]
            FAKEEND::(initiate combat)
        fight!!<+>CHANGE::d3_archiveminiclear
            SHOWIF::['gameplay_off', true]
            FAKEEND::(skip combat)
`)

// - d3_archiveboss
env.dialogues["d3_archiveboss"] = generateDialogueObject(`
start
    sourceless
        THIS ROOM...
        IT IS SO WRONG THAT I FEEL MY MIND STRUGGLE TO PROCESS IT
        IS THIS A PRODUCT OF THE SIGNAL?

    gakvu
        akizet, tozik...
        do not--do not look into the gray

    bstrd
        FOCUS!!!
        LOOK @ ME
        O_O
            EXEC::sfxmap.stop();play("crit", 0.75);specialCam("bstrdboss");pauseSwapCam(true)
            
    sourceless
        THE VOICE BOOMS FROM AN ARCHIVAL GOLEM
        THAT STRANGE SIGIL IS OVER ITS HEAD,
        A SASH OF KAVRUKAS HANGS OVER ITS TORSO...
        WAIT--!!
        AND THE BOX LIES NEAR ITS FEET, OPEN, BUT AWAY FROM US!
        THE CYST IS NOWHERE TO BE SEEN, BUT... 
        IT IS AN ARCHIVAL GOLEM, SO IT MAY BE WITHIN ITS CHASSIS

    bstrd
        thx for getting this stuff
        
    sourceless
        THE GOLEM KNEELS TO RETRIEVE A LONG BRIGHT WEAPON FROM THE BOX
            EXEC::specialCam("bstrdbox")
        IT MAKES A SERIES OF MOVEMENTS THAT PRODUCE CLICKS AND SNAPS FROM THE DEVICE
            EXEC::content.querySelector('.bstrdboss').classList.add('gun');play('click2')
        AND THE DOOR SHUTS BEHIND US--LOCKED AGAIN WITH THE SAME UNNATURAL TENDRILS

    bstrd
        u guys just taught a golem how to use gun's
        BAD ASS ...
        SHOOT EM!!! GET EMM DUDE!!
        >:}
    
    sourceless
        OUR HOPES OF HAVING A NEW FRIEND ARE STOMPED
        BEFORE IT CAN EVEN RAISE ITS WEAPON, I ACTIVATE THE TIMESTOPPER
        WE CAN ONLY FIGHT
    

    RESPONSES::sys
        force thoughtform rules over entity<+>END
            EXEC::env.grm.combat("spatial_archivalboss_lowintensity");specialCam(false);pauseSwapCam(false)
            FAKEEND::reduced intensity alternative
            SHOWIF::[['low_intensity', true], ['gameplay_off', false]]

    RESPONSES::akizet
        fight!!<+>END
            EXEC::env.grm.combat("spatial_archivalboss");specialCam(false);pauseSwapCam(false)
            FAKEEND::(initiate combat) 
            SHOWIF::['gameplay_off', false]
        fight!!<+>CHANGE::d3_archivebossend
            SHOWIF::['gameplay_off', true]
            FAKEEND::(skip combat)
`)

// - d3_archivebossend
env.dialogues["d3_archivebossend"] = generateDialogueObject(`
start
    sourceless
        THE GOLEM FALLS TO PIECES, ITS HOVERING CAPABILITIES SLUDGED
            EXEC::env.stage.current.bossCollapse();env.stage.current.clearBossPals();ResetMusic();
        BUT ITS SIGIL AND STRANGE VOICE REMAIN
            EXEC::change('PAGE!!archiveboss', true);

____SHOWIF::['gameplay_off']
    sys
        ATTENTION::"thoughtform combat gameplay bypassed";'toggle within system menu if desired'

    bstrd
        WTF
            EXEC::specialCam("bstrdbox");pauseSwapCam(true)
        have u been doing that...
        THIS WHOLE TIME???
        >:[
        NOT FAIR!
        THIS FUCKINGE SUCKS
    
    tozik
        what are you talking about?
    
    bstrd
        after all i did...
        to give u a good time...
        ...
        u... get...
        NOTHING!!!!

    sourceless
        THE SIGIL OVER THE GOLEM'S HEAD FADES, AND ALL AT ONCE, THINGS SEEM TO RETURN TO NORMAL
            EXEC::env.stage.current.removeBastardBG();env.stage.current.onStep()
        there is an eerie silence...
        what could it have meant by that?
        
    akizet
        well...
        let us return to fixing movefriend
        we have deviated enough
            EXEC::change("PAGE!!archivesclear", "skipped")
    
____SHOWIF::['gameplay_off', false]
    bstrd
        HOLEY SMOKES :O
            EXEC::specialCam("bstrdbox");pauseSwapCam(true)
        wow...
            EXEC::ratween(env.bgm, 0.75)
        u really did it
        i was p sure i was gonna KILL u guys there
    
    tozik
        why... why did...
    
    bstrd
        SHUT UP im not done yet
        listen im about 2 die so i gotta tell u this quick
        arr... the paine..
        OHH it HURTS BAD!!!
        ;-(
        anywy i found this outside so u can have it
        im p sure its important so hang on 2 it
    
    sourceless
        BEHIND THE DYING GOLEM RISES ANOTHER STRANGE MONOLITH
            EXEC::env.stage.current.showPillar(true)
        OVER IT IS... IT LOOKS LIKE A CORRUCYST
        AND THERE IS SOME SORT OF MARKING ON IT
        BUT I CANNOT SEE IT CLEARLY FROM HERE

    gakvu
        you seem pretty intelligent, for... what is going on
        do you know what is happening? we could fix you if you help us!
        
    akizet
        and agree not to try to kill us again...
    
    bstrd
        :U
    
    sourceless
        THERE IS A LONG, UNCOMFORTABLE PAUSE
        DID IT NOT EXPECT TO LIVE THIS LONG? OR FOR US TO MAKE THAT OFFER?

    bstrd
        no i gotta kill u guys sry
        but u won this time so gj
        
    sourceless
        THE SIGIL FADES, AND ALL AT ONCE, THINGS SEEM TO RETURN TO NORMAL
            EXEC::env.stage.current.removeBastardBG()
        OUR FOE'S GOLEM FALLS TO PIECES ON THE FLOOR, WHERE IT SLOWLY MELTS AWAY
            EXEC::env.stage.current.onStep()
        EVEN THE COLOR OF THE ROOM HAS CHANGED...
        WE ALL STAND IN SILENCE FOR A MOMENT AS WE PROCESS WHAT HAS HAPPENED
        I LOOK AT THE MONOLITH AGAIN, AND CURIOSITY PULLS ME CLOSER
            EXEC::specialCam("bstrdbosspillar")
        
    akizet
        well,
        let us see what that creature left for us...
    
    sourceless
        I TURN THE CORRUCYST OVER IN MY HANDS
        THE MARKING READS, "SORRY"
        APOLOGIZING...? FOR TRYING TO KILL US?
        NO - I FEEL THAT IT PREDATES THIS ENTITY'S INTERFERENCE
        SOMETHING ABOUT IT FEELS FAMILIAR
        REGARDLESS, I PLACE THE CYST ON ONE OF MY RECEPTORS, AND...
            EXEC::env.stage.current.hidePillarCyst();addItem(env.ITEM_LIST.sorry_cyst)
        FASCINATING!!

    akizet
        tozik...
        this is a weapon schematic

    tozik
        for what?
    
    akizet
        it looks like some sort of compact golem armament...
        but the schematic itself is unfocused
        i feel the information is still there, just scrambled
        if we come across any foundry vats, we could probably fix the cyst and create it!
        
    sourceless
        I GLANCE DOWN AT THE GOLEM'S CORPSE, STILL CLUTCHING ITS BRIGHT WEAPON
        THE MIND INHABITING IT - SO VIOLENT, BUT STILL HONORABLE
        TRULY BIZARRE...
        I KNEEL ALL THE SAME, AND PLACE MY CLAW OVER WHAT REMAINS OF ITS PALE EYESPOTS
    
    akizet
        you fought well... whatever you were
        let us return to fixing movefriend
        we have deviated enough
            EXEC::change("PAGE!!archivesclear", true)
____END

    RESPONSES::akizet
        leave<+>END
            EXEC::specialCam("");pauseSwapCam(false)
`)

// - loss
env.dialogues["loss"] = generateDialogueObject(`
start
    sys
        ATTENTION::'memory stream interrupted'
        ATTENTION::'invalid procedure'
        ATTENTION::'revert actions?'
        NOTICE::'retry';'revert to starting state of combat proceeding'
        NOTICE::'grace retry';'revert to start of combat proceeding';'regain all HP';'gain minor item advantage'
        NOTICE::'exit';'return to memory selection'
    
    RESPONSES::sys
        retry<+>END
            EXEC::restorePartySnapshot();CombatScene.SCENARIOS[env.partySnapshot.scenarioName].retry()
        grace retry<+>END
            EXEC::restorePartySnapshot(true);CombatScene.SCENARIOS[env.partySnapshot.scenarioName].retry()
        leave iteration<+>END
            EXEC::moveTo("/local/ocean/embassy/")
`)



// - STAGES
createEntity({
    name: 'conspicuous container',
    alternateOf: "container",
    hide: true,
    type: "thoughtform collapse",
    image: "/img/local/orbit/dullvessel/container.gif",
    text: `::RESPONSIVE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recurring scenery'
    ;;INHERITED CONTEXT::<span style="color: var(--obesk-color)">'these ones occasionally shake, as if they had a larval fever'</span>`,
    actions: [{
        name: "search",
        exec: ()=> startDialogue('d3r2_containerinspect'),
        showIf: ["PAGE!!kazkiambush", false]
    }]
}),
// - CALL RESEARCH STAGES
env.stages['embassy_recreation'] = {
    locale: "research",
    creature: env.stageEntities.embassyCreature,
    exec: ()=> { 
        env.embassy.updateStageData()
        env.embassy.regenRandobesk()
        change("PAGE!!recreation_leavable", true)
        switch(check("PAGE!!embassy_day")) {
            case 3: document.querySelectorAll('.character:not(.collapser), .prop .chair, .prop .container').forEach(e=>{ 
                    e.parentElement.classList.remove('prop', 'blocks')
                    e.parentElement.innerHTML = "" })
                if(!check('PAGE!!crecreation_intro')) { 
                    startDialogue("d3_rec_enter") 
                    change('PAGE!!crecreation_intro', true) 
                    if(!check("PAGE!!mindcore1extracted") || !check("PAGE!!mindcore2extracted")) change("PAGE!!recreation_leavable", false) 
                }

                if(isStageClear()) toggleBgm(env.embassy.music_collapse)
                else toggleBgm(env.embassy.music_unsafe)
                document.querySelectorAll('.gridpiece[slug="r"]').forEach(el=>{
                    el.setAttribute('spot', 22)
                    el.setAttribute('shouldFace', 'right')
                })
            break

            case 1: document.querySelectorAll('.character.tozik, .character.gakvu, .collapseonly').forEach(e=>{ 
                        e.parentElement.classList.remove('prop', 'blocks')
                        e.parentElement.innerHTML = "" 
                        })
                    toggleBgm(env.embassy.music)
            break

            default: document.querySelectorAll('.character.bozko, .character.kazki, .collapseonly').forEach(e=>{ 
                            e.parentElement.classList.remove('prop', 'blocks')
                            e.parentElement.innerHTML = "" 
                        }); 
                        toggleBgm(env.embassy.music)
            break
        }
        env.stage.current.onStep()
    },
    onStep: ()=>{
        if(!content.classList.contains("collapse")) {
            env.stage.real.classList.add("dynocam")
            if(env.stage.creatureLoc.y < 6) { env.stage.container.setAttribute("swapos", "bar") } 
            else if(env.stage.creatureLoc.x > 7) { env.stage.container.setAttribute("swapos", "kazkicorner") } 
            else { env.stage.container.removeAttribute("swapos") } }

        if(check("PAGE!!recreationfight")) {
            document.querySelectorAll('.enemy').forEach(e=>{
                e.parentElement.classList.remove('evil', 'staysdead', 'collapseonly')
                e.parentElement.id = ""; e.parentElement.dialogue = "";
                e.parentElement.innerHTML = ""
            })
        }
    },
    //greater than 7 on both xy = kazkibozko corner
    entities: {
        "r": {
            class: "door up", teleportSpot: 13, teleportTarget: "embassy_relocator", shouldFace: "up", lockFlag: "PAGE!!recreation_leavable",
            lockExec: ()=>chatter({actor: 'sourceless', text: 'WE ARE NOT LEAVING WITHOUT FREEING THE TWO QOU', readout: true}),
            exec: ()=>env.embassy.relocatorReturn = "recreation"
        },
        "B": { class: "prop blocks", contains: { class: "bar", html: `<figure><div class="target" entity="simulacra dispensary"></div></figure>`, } },
        "t": { class: "prop blocks", contains: { class: "table", html: `<figure></figure>` } },
        b: { class:"prop blocks genericblocker", },
        d: { class:"prop blocks", contains: { class: "deskleg" } },
        "f": { class:"prop blocks", contains: { id: "barfriend", examineEntity: "barfriend", class: "barfriend character collapser", html: `<figure></figure>` } },
        "A": { class: "prop blocks", contains: { class: "canopy", html: `<figure> <div class="lid"></div> <div class="deskleg"></div> </figure>` } },
        "â†”": { class: "prop blocks", contains: { class: "chair", html: `<figure style="transform: rotateY(90deg)"></figure>` } },
        "â†•": { class: "prop blocks", contains: { class: "chair", html: `<figure></figure>` } },
        "O": { class: "cornerbooth blocks genericblocker", contains: { class: "boothwalls", html: `<figure></figure>` } },
        "W": { class: "prop blocks", contains: { class: "window", html: `<figure> <div class="target" entity="window"></div> </figure>` } },
        c: { class: "prop blocks", contains: { class: "container", html: `<figure style="transform: rotateY(-45deg)"></figure>` } },
        L: { class:"prop blocks", contains: { class: "listener", examineEntity: "listener", html: `<figure> <div class="cyst"></div> <div class="cyst"></div> <div class="cyst"></div> <div class="callscreen"></div> </figure>` } },
        "Q": { class: "prop chartile blocks", contains: { class: "dyingqou collapseonly", examineEntity: "damaged qou body", html: `<figure></figure>` } },
        "q": { class: "prop chartile blocks", contains: { class: "dyingqou collapseonly", examineEntity: "mangled qou body", html: `<figure></figure>` } },
        'N': {  class: "blocks cwall north", contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallW]" baseHeight="6"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallH]" baseHeight="6"></canvas>` } },
        'S': {  class: "blocks cwall south", contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallH]" baseHeight="6"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallW]" baseHeight="6"></canvas>` } },

        "Ã¶": { contains: { id: "foe", class: "evil staysdead collapseonly enemy", html: `<figure class="evilcontainer"><div class="target" entity="hostile container"></div></figure>` } },
        "6": { contains: { id: "foe", class: "evil staysdead collapseonly enemy", html: `<figure class="evilcontainer"><div class="target" entity="hostile container"></div></figure>` } },
        "Ã´": { contains: { id: "foe", class: "evil staysdead collapseonly enemy", html: `<div class="collapsed lamp"><figure><div class="target" entity="hostile veilklight"></div></figure></div>` } },
    },
    width: 13,
    plan: [
        'N','░','░','b','b','b','B','b','b','b','░','░','.',
        '.','░','+','b','b','b','f','b','b','b','+','░','.',
        '.','░','░','░','░','░','Ã´','q','T','░','░','░','.',
        '.','░','░','â†•','░','░','░','░','░','â†•','░','░','.',
        'G','6','â†”','A','â†”','░','░','░','â†”','A','â†”','░','.',
        '.','░','░','â†•','Q','░','░','░','+','â†•','░','░','.',
        '.','░','░','░','░','░','Ã¶','░','░','░','░','░','.',
        '.','░','░','░','░','░','░','░','░','░','░','░','.',
        '.','░','░','░','░','░','░','░','░','░','░','░','.',
        '.','c','-','░','░','░','░','░','░','░','░','K','.',
        '.','L','c','░','░','░','p','░','░','░','k','W','S',
        '.','.','.','.','.','.','r','.','.','.','.','.','O',
    ]
}

env.stages['embassy_cpersonnel'] = {
    locale: "research",
    creature: env.stageEntities.embassyCreature,
    exec: ()=> { 
        env.embassy.updateStageData()
        if(isStageClear()) toggleBgm(env.embassy.music_collapse)
        else toggleBgm(env.embassy.music_unsafe)

        if(!check('PAGE!!cpersonnel_intro')) {
            startDialogue("d3_person_intro")
            change('PAGE!!cpersonnel_intro', true)
        }   
        env.stage.current.onStep()     
    },
    onStep:()=> {
        if(check("PAGE!!personnelfight")) {
            document.querySelectorAll('.enemy').forEach(e=>{
                e.parentElement.classList.remove('evil', 'staysdead', 'collapseonly')
                e.parentElement.id = ""; e.parentElement.dialogue = "";
                e.parentElement.innerHTML = ""
            })
        }
    },

    entities: {
        "r": {
            class: "door up", teleportSpot: 26, teleportTarget: "embassy_relocator", shouldFace: 'left',
            exec: ()=>env.embassy.relocatorReturn = "personnel"
        },
        "}": {
            class: "door left", teleportSpot: 85, teleportTarget: "nothing", 
            lockFlag: "permalocked", lockExec: ()=>chatter({actor: 'akizet', text: 'it is locked', readout: true})
        },
        "{": {
            class: "door right", teleportSpot: 85, teleportTarget: "nothing", 
            lockFlag: "permalocked", lockExec: ()=>chatter({actor: 'akizet', text: 'it is locked', readout: true})
        },
        ">": { class: "door left", teleportTarget: "embassy_cquarters1", shouldFace: "right" },
        "<": { class: "door left", teleportTarget: "embassy_cquarters2", shouldFace: "left" },
        "â™¥": {
            class: "door left", teleportTarget: "embassy_cquarters3", shouldFace: "left", 
            lockFlag: "permalocked", lockExec: ()=>chatter({actor: 'akizet', text: 'it is locked', readout: true})
            /*lockFlag: "PAGE!!q3unlocked", lockExec: ()=>startDialogue('d3_person_locked')*/
        }, 
        "Q": { class: "prop blocks", contains: { class: "dyingqou collapseonly", examineEntity: "qou body", html: `<figure></figure>` } },

        "Ã¶": { class:"prop blocks", contains: { class:"enemy", html: `<figure> <span class="staticattendant"></span> </figure>` } },
        "â™¦": { class:"prop blocks", contains: { class:"enemy", html: `<figure> <span class="staticattendant"></span> </figure>` } },


        "Ã¶": { contains: { id: "foe", class: "evil staysdead collapseonly enemy", html: `<figure class="spiregolem"><div class="target" entity="attendant"></div></figure>` } },
        "â™¦": { contains: { id: "foe", class: "evil staysdead collapseonly enemy", html: `<figure class="spiregolem"><div class="target" entity="attendant"></div></figure>` } },
    },
    enterDirection: "down",
    width: 7,
    plan: [
        'N','l','Q','░','░','l','.',
        '<','░','░','░','░','░','.',
        '.','░','░','░','░','░','.',
        '.','░','░','░','░','░','{',
        '.','░','░','░','░','░','.',
        '}','░','░','░','░','Q','.',
        '.','░','Ã¶','░','░','░','.',
        '.','░','░','░','░','░','{',
        '.','Q','░','â™¦','░','░','.',
        '>','░','░','░','░','░','.',
        '.','░','░','░','░','░','.',
        '.','░','░','░','░','░','{',
        '.','l','░','p','░','l','S',
        '.','.','.','r','.','.','.',
    ]
}

env.stages['embassy_cquarters2'] = {
    locale: "research",
    creature: env.stageEntities.embassyCreature,
    exec: ()=> { 
        env.embassy.updateStageData()
        toggleBgm(env.embassy.music_safe)
        if(!check('PAGE!!kazkiroom')) { 
            startDialogue("d3r2")
            change('PAGE!!kazkiroom', true) 
        }     
        env.stage.current.onStep()
    },
    onStep: ()=>{
        if(check("PAGE!!kazkiambush")) { content.querySelectorAll('#realgrid .container:not(.destroyed)').forEach(el=>{ el.classList.add('destroyed') }) }
    },
    entities: {
        "q": { class: "door right fakeunlock", teleportSpot: 8, teleportTarget: "embassy_cpersonnel", shouldFace: 'right',
            lockFlag: "PAGE!!kazkiambush", lockExec: ()=>startDialogue('d3r2_containerambush') },
        C: { class:"prop blocks genericblocker", },
        b: { class:"prop blocks", contains: { class: "bed", examineEntity: "rejuvenation chamber", html: `<figure></figure>` } },
        X: { class:"prop blocks genericblocker", },
        "â†”": { class: "prop blocks notile", contains: { class: "chair", html: `<figure style="transform: translateX(180%) translateZ(calc(var(--gridTileSize) * 0.4)) rotateY(40deg)"></figure>` } },
        D: { class:"prop blocks", contains: { class: "desk", html: `<figure> <div class="doodad d1"> <div class="target" entity="simulacra"></div> </div> <div class="doodad d2"> <div class="target" entity="manipulation slab"></div> </div> <div class="doodad d3"> <div class="target" entity="face stand"></div> </div> </figure>` }
        },
        I: { class:"prop blocks", contains: { class: "lamp collapsed", html: `<figure><div class="target" entity="veilklight"></div></figure>` } },
        d: { class:"prop blocks", contains: { class: "deskleg" } },
        g: { class: "prop blocks notile", contains: { class: "kazkiguns", html: `<div class="target" entity="bright weapons"></div>` } },
        L: { class: "prop blocks", contains: { class: "shelf", examineEntity: "storage display", html: `<figure></figure>` } },

        c: { class: "prop blocks", contains: { class: "container showalways", html: `<figure style="transform: rotateY(-135deg)"> <div class="target" entity="conspicuous container"></div> </figure>` } },
    },

    width: 7,
    shouldFace: 'left',
    plan: [
        '.','.','.','.','.','.','.',
        '.','l','X','b','X','l','.',
        'â†”','d','░','░','░','░','.',
        'g','D','░','░','░','p','q',
        '.','d','░','░','░','c','.',
        '.','l','C','L','c','I','.',
        '.','.','.','.','.','.','.',
    ]
}




// - ARCHIVAL STAGES
env.stages['embassy_archivalintro'] = {
    creature: env.stageEntities.embassyCreature,
    exec: ()=> { 
        env.embassy.updateStageData()

        if(isStageClear()) toggleBgm(env.embassy.music_collapse)
        else toggleBgm(env.embassy.music_unsafe)

        content.classList.remove("archives", "show-walls")
        content.classList.add("archivehall")

        setTimeout(env.stage.current.onStep, 500)
    },

    onStep: ()=>{
        let strength = Math.clamp((1 / (env.stage.stageH - 3)) * (env.stage.creatureLoc.y - 3), 0, 1)
        content.style.setProperty('--bstrdcontrol', strength)  

        if(check("PAGE!!archivalintrofight")) {
            document.querySelectorAll('.enemy').forEach(e=>{
                e.parentElement.classList.remove('evil', 'staysdead', 'collapseonly')
                e.parentElement.id = ""; e.parentElement.dialogue = "";
                e.parentElement.innerHTML = ""
            })
        }
    },
    locale: "research",

    entities: {
        "v": { class: "door down", teleportSpot: 115, teleportTarget: "embassy_research", shouldFace: 'left', },
        "^": { class: "door up bstrdoor", teleportSpot: 52, teleportTarget: "embassy_archivalvein", shouldFace: 'down', },

        "♠": {
            exec: ()=> {
                if(document.querySelectorAll('.evil') && !check("PAGE!!archivewarn")) {
                    chatter({actor: 'akizet', text: 'beware - it is as i feared', readout: true})
                    setTimeout(()=>chatter({actor: 'akizet', text: 'archival golems are formed of black corru...', readout: true}), 2000)
                    setTimeout(()=>chatter({actor: 'akizet', text: 'they are particularly tough!', readout: true}), 4000)
                    change("PAGE!!archivewarn", true)
                }
            }
        },

        "ö": { contains: { id: "foe", class: "evil staysdead collapseonly enemy", type: "archivetutorial", dialogue: "d3_bstrdintro", html: `<figure class="archivalgolem"><div class="target" entity="archival golem"></div></figure>` } },
    },

    width: 3,
    plan: [
        '.','v','.',
        '.','p','.',
        '.','♠','.',
        '.','░','.',
        '.','░','.',
        '.','░','.',
        '.','░','.',
        '.','░','.',
        '.','░','.',
        '.','░','.',
        '.','░','.',
        '.','░','.',
        '.','░','.',
        '.','░','.',
        '.','░','.',
        '.','ö','.',
        '.','^','.',
    ],
}

env.stages['embassy_archivalvein'] = {
    creature: env.stageEntities.embassyCreature,
    exec: ()=> { 
        env.embassy.updateStageData()
        
        if(isStageClear()) toggleBgm(env.embassy.music_collapse)
        else toggleBgm(env.embassy.music_unsafe)

        content.classList.add("archives", "show-walls")
        content.classList.remove("archivehall", "bastard")
        if(!check("PAGE!!archivalveinfight")) startDialogue("d3_archivalvein_intro")
    },

    onStep:()=> {
        if(check("PAGE!!archivalveinfight")) {
            document.querySelectorAll('.enemy').forEach(e=>{
                e.parentElement.classList.remove('evil', 'staysdead', 'collapseonly')
                e.parentElement.id = ""; e.parentElement.dialogue = "";
                e.parentElement.innerHTML = ""
            })
        }
    },
    locale: "research",

    entities: {
        "^": { class: "door up", teleportSpot: 46, teleportTarget: "embassy_archivalintro", shouldFace: 'down', },
        "v": { class: "door down always-targeted", teleportTarget: "embassy_archivalcore_sensitive", teleportSpot: 45, examineEntity: "bstrd door",  shouldFace: 'left',
               lockFlag: "PAGE!!bstrdlock", lockExec: ()=>chatter({actor: 'akizet', text: 'it is locked', readout: true}) },
        "}": { class: "door left", teleportSpot: 26, teleportTarget: "embassy_archivalcore", shouldFace: 'left' },
        "{": { class: "door right", teleportSpot: 26, teleportTarget: "embassy_archivaldelivery", shouldFace: 'left' },

        'N': { class: "blocks cwall north", contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallW]" baseHeight="3"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallH]" baseHeight="3"></canvas>` } },
        'S': { class: "blocks cwall south", contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallH]" baseHeight="3"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallW]" baseHeight="3"></canvas>` } },

        "ö": { contains: { id: "foe", class: "evil staysdead collapseonly enemy", html: `<figure class="archivalgolem"><div class="target" entity="archival golem"></div></figure>` } },
        "£": { contains: { id: "foe", class: "evil staysdead collapseonly maintcloak enemy", html: `<figure class="spritestack"> <img class="sprite" style="width: 100%;" src="/img/sprites/combat/foes/maintcloak.gif"> <img class="sprite" src="/img/sprites/combat/foes/mainthead.gif"> <img class="sprite" src="/img/sprites/combat/foes/mainthead.gif"> <div class="target" entity="jutskin"></div> </figure>` } },
    },

    width: 15,
    plan: [
        '.','.','.','.','.','.','.','v','.','.','.','.','.','.','.',
        'N','░','░','░','░','░','ö','░','£','░','░','░','░','░','.',
        '}','░','░','░','░','░','░','░','░','░','░','░','░','░','{',
        '.','░','░','░','░','░','░','p','░','░','░','░','░','░','S',
        '.','.','.','.','.','.','.','^','.','.','.','.','.','.','.',
        
    ],

    html: `<canvas class="veinceiling" sprite="/img/local/embassy/archivalceiling.gif" baseWidth="13.5" baseHeight="3"></canvas>`
}

env.stages['embassy_archivalcore'] = {
    creature: env.stageEntities.embassyCreature,
    exec: ()=> { 
        env.embassy.updateStageData()
        
        if(isStageClear()) toggleBgm(env.embassy.music_collapse)
        else toggleBgm(env.embassy.music_unsafe)

        content.classList.add("archives", "show-walls")
        if(checkItem(env.ITEM_LIST.cool_orb_thingy)) env.stage.current.hidePillarCyst()

        startDialogue("d3_archivecore_intro")
    },

    hidePillarCyst: ()=>{
        document.querySelectorAll(".bstrdpillar").forEach(el=>el.classList.add('nocyst'))
    },

    onStep:()=> {
        if(check("PAGE!!archivalcorefight")) {
            document.querySelectorAll('.enemy').forEach(e=>{
                e.parentElement.classList.remove('prop', 'blocks')
                e.parentElement.innerHTML = ""
            })
        }
    },
    locale: "research",

    entities: {
        ">": { class: "door right", teleportSpot: 31, teleportTarget: "embassy_archivalvein", shouldFace: 'right', },

        "e": { class:"prop blocks notile", contains: { class: "archive", examineEntity: "archive", html: `<figure></figure>` } },
        "ë": { class:"prop blocks notile", contains: { class: "archive opposite", examineEntity: "archive", html: `<figure></figure>` } },
        "E": { class:"prop blocks notile", contains: { class: "archive side", examineEntity: "archive", html: `<figure></figure>` } },
        "P": { class:"prop blocks notile", contains: { class: "bstrdpillar", examineEntity: "peculiar obelisk", html: `<figure><div class="target" priority="2" entity="unnerving cyst"></div></figure>` } },

        "ö": { class:"prop blocks", contains: { class:"enemy", html: `<figure> <span class="staticarchivalgolem" style="transform:rotateY(90deg)"></span> </figure>`, } },

        'N': { class: "blocks cwall north",
            contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallW]" baseHeight="3"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallH]" baseHeight="3"></canvas>` } },
        'S': { class: "blocks cwall south",
            contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallH]" baseHeight="3"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallW]" baseHeight="3"></canvas>` } },
    },

    width: 7,
    plan: [
        '.','.','.','ë','.','.','.',
        'N','░','░','░','░','░','.',
        '.','░','░','░','░','░','.',
        'E','P','ö','░','░','p','>',
        '.','░','░','░','░','░','.',
        '.','░','░','░','░','░','S',
        '.','.','.','e','.','.','.',
    ],

    html: `<canvas class="veinsphere" sprite="/img/local/embassy/archivalspherecanvas.gif" baseWidth="7" baseHeight="7"></canvas>`
}
env.stages['embassy_archivalcore_sensitive'] = {
    enterDirection: "left",
    creature: env.stageEntities.embassyCreature,
    exec: ()=> { 
        env.embassy.updateStageData()
        content.classList.add("archives", "show-walls")
        
        env.stage.current.onStep()

        if(!check("PAGE!!archivemini")) {
            toggleBgm(env.embassy.music_unsafe)
            startDialogue("d3_archivemini")
            setTimeout(()=>{change('PAGE!!archivemini', true), 100})
        } else {
            toggleBgm(env.embassy.music_collapse)
        }
    },

    onStep: ()=>{
        if(check("PAGE!!archivemini")) {
            document.querySelectorAll('.enemy').forEach(e=>{
                e.parentElement.classList.remove('evil', 'staysdead', 'collapseonly')
                e.parentElement.id = ""; e.parentElement.dialogue = "";
                e.parentElement.innerHTML = ""
            })
        }
    },
    locale: "research",

    entities: {
        ">": { class: "door right", teleportSpot: 22, teleportTarget: "embassy_archivalvein", shouldFace: 'up', },
        "<": { class: "door left", teleportTarget: "embassy_archivalboss", teleportSpot: 45, lockFlag: "PAGE!!archivemini", shouldFace: 'down', },

        "e": { class:"prop blocks notile", contains: { class: "archive", examineEntity: "archive", html: `<figure></figure>` } },
        "ë": { class:"prop blocks notile", contains: { class: "archive opposite", examineEntity: "archive", html: `<figure></figure>` } },
        "E": { class:"prop blocks notile", contains: { class: "archive side", examineEntity: "archive", html: `<figure></figure>` } },
        "ô": { class: "prop chartile blocks", contains: { class: "bstrdshelf", html: `<figure><div class="target" entity="hostile archive"></div></figure>` } },
        "Y": { class: "blocks", contains: { class: "savepoint always-targeted shelfroom", id: "savepoint", examineEntity: "save iteration", }
        },
    },

    width: 7,
    plan: [
        '.','.','.','ë','.','.','.',
        '.','.','Y','.','░','.','.',
        '.','░','░','░','.','░','.',
        '<','░','ô','░','░','p','>',
        '.','░','░','.','░','░','.',
        '.','.','░','░','░','.','.',
        '.','.','.','e','.','.','.',
    ]
}
env.stages['embassy_archivalboss'] = {
    creature: env.stageEntities.embassyCreature,
    shouldFace: 'down',
    exec: ()=> { 
        env.embassy.updateStageData()
        content.classList.add("archives", "bastard")
        env.stage.current.onStep()
    },

    onStep: ()=>{
        if(check("PAGE!!archiveboss")) {
            toggleBgm(env.embassy.music_collapse)
            content.classList.add("archives", "show-walls")
            content.classList.remove("bastard")
            document.querySelectorAll('.maintcloak, .lamp, .bstrdboss').forEach(el=>{
                el.parentElement.classList.remove('prop', 'blocks', 'bstrdbosspanel')
                el.parentElement.innerHTML = ""
            })

            if(!check("gameplay_off") && check("PAGE!!archivesclear") != "skipped") {
                env.stage.current.showPillar()
                if(checkItem(env.ITEM_LIST.sorry_cyst)) env.stage.current.hidePillarCyst()
            }
        } else {
            toggleBgm(env.embassy.music_bstrd)
            startDialogue("d3_archiveboss")
            content.classList.add("archives", "bastard")
        }
    },

    bossCollapse: ()=>{ document.querySelectorAll('.bstrdboss').forEach(el=>el.classList.add('broke')) },
    removeBastardBG: ()=>{ content.classList.remove("bastard") },
    showPillar: ()=>{ document.querySelectorAll(".bstrdpillar").forEach(el=>el.parentElement.classList.remove('hide')) },
    hidePillarCyst: ()=>{ document.querySelectorAll(".bstrdpillar").forEach(el=>el.classList.add('nocyst')) },

    clearBossPals: ()=>{
        document.querySelectorAll('.bstrdbosspanel').forEach(el=>el.classList.remove('bstrdbosspanel'))
        document.querySelectorAll('.maintcloak, .lamp').forEach(el=>{
            el.parentElement.classList.remove('prop', 'blocks', 'bstrdbosspanel')
            el.parentElement.innerHTML = ""
        })
    },
    locale: "research",

    entities: {
        "^": { class: "door up", teleportSpot: 22, teleportTarget: "embassy_archivalvein", shouldFace: 'up', },

        "ö": { contains: { id: "boss", class: "prop blocks bstrdbosspanel", html: `<figure class="archivalgolem bstrdboss"><div class="target" entity="bstrd golem"></div></figure>` } },
        "ô": { class: "prop blocks notile", contains: { class: "lamp bstrd collapsed", html: `<figure><div class="target" entity="hostile veilklight"></div></figure>` } },
        "£": { class: "notile", contains: { id: "foe", class: "evil staysdead collapseonly maintcloak", type: "archivecloaktainer", 
               html: `<figure class="spritestack">
                    <img class="sprite" style="width: 100%;" src="/img/sprites/combat/foes/maintcloak.gif">
                    <img class="sprite" src="/img/sprites/combat/foes/mainthead.gif">
                    <img class="sprite" src="/img/sprites/combat/foes/mainthead.gif">
                    <div class="target" entity="jutskin"></div>
                </figure>` } },
        
        "P": { class:"prop blocks notile hide", contains: { class: "bstrdpillar", examineEntity: "peculiar obelisk", html: `<figure></figure>` } },
    },

    width: 7,
    plan: [
        '.', '.', '.', 'P', '░', '░', '.', 
        '.', '░', '£', 'ö', 'ô', '.', '░', 
        '░', '.', '.', '.', '.', '.', '.', 
        '.', '.', '░', '░', '░', '░', '.', 
        '.', '░', '.', '░', '░', '░', '.', 
        '.', '.', '░', '░', '░', '.', '.', 
        '.', '.', '░', 'p', '░', '.', '.', 
        '.', '.', '.', '^', '.', '.', '.', 
    ]
}





}, 2000)
}
}) 
