/* call research::spatial combat */
/* by genseot */

/* TABLE OF CONTENTS */
/*
- INITIALISATION
- ACTORS
    - ALLY ACTORS
    - ENEMY ACTORS
        - CALL RESEARCH ACTORS
        - ARCHIVAL VEIN ACTORS
- ACTIONS
    - ENEMY ACTIONS
        - CALL RESEARCH ACTIONS
        - ARCHIVAL VEIN ACTIONS
- SCENARIOS
    - CALL RESEARCH SCENARIOS
    - ARCHIVAL VEIN SCENARIOS
- DIALOGUES
    - d3_tutorial
    - d3_recreationenemy
    - d3_personnelenemy
    - d3r2_containerinspect & d3r2_containerambush
    - d3_relocator_repair
    - d3_rec_clear
    - d3_person_clear
- SKIPS
- STAGES
    - CALL RESEARCH STAGES
    - ARCHIVAL VEIN STAGES
*/

/* TODO:: */
/*
- MAKE ACTORS & ACTIONS
- FIX AUDIO NOT WORKING AFTER FIRST COMBAT
- MAKE PROPS WORK IN COMBAT
- MAKE IT SO THAT WHEN ENTERING THE EMBASSY FROM HUB/THEIR WATERS THE MOD ACTUALLY LOADS FOR SOME REASON IT DOESNT DO THAT
*/



// - INITIALISATION
document.addEventListener('corru_entered', ()=>{
if(page.path == "/local/ocean/embassy/") {
addResources([
        "/js/combat/combatGrid.js",
        "/js/combat/combatTileEffects.js",
        "/js/combat/combatGridScenarios.js",
        "https://genseot.github.io/mods/spatialcollapse/grm.js
])
content.insertAdjacentHTML("beforeend", `<link href="/css/combatGrid.css" rel="stylesheet" type="text/css" media="all">`)



setTimeout(function(){
// - ACTORS
// - ALLY ACTORS
env.COMBAT_ACTORS.gakvu_groundsmind = {
    name: "Gakvu", maxhp: 10, hp: 10, move: 0, actions: ["gakvu_groundsmindry"],
    initialStatusEffects: [["emergency_groundsmind", 1], ["gakvu_disconnected", 1]],
    portrait: `<img class="portrait" src="/img/sprites/obesk/gakvu/facetransparent.gif">`, portraitUrl: '/img/sprites/obesk/gakvu/facetransparent.gif',
    graphic: `
        <div class="sprite-wrapper" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="/img/sprites/obesk/gakvu/gridtiny.gif" style="height: 200px;" id="%SLUG-sprite">
        </div>
    `,
    reactions: {
        evade: [
            ()=>env.combat.has('husk') || env.rpg.is2D ? "ah!" : "haha!",
            ()=>env.combat.has('husk') || env.rpg.is2D ? "no!!" : "woaah!!",
        ],
        crit: [
            ()=>env.combat.has('husk') || env.rpg.is2D ? "clean..." : "it is simply that easy",
            ()=>env.combat.has('husk') || env.rpg.is2D ? "a few more like that..." : "that was lucky"
        ],
        crit_buff: ["so that goes there..."],
        miss: [
            ()=>env.combat.has('husk') || env.rpg.is2D ? "â‚¬Ã–Ã¤!" : "oh...",
            ()=>env.combat.has('husk') || env.rpg.is2D ? "it is too fast!!" : "too bad"
        ],
        dead: ["..."],
        receive_crit: ["Ã†!!"],
        receive_puncture: ["i am... bleeding...?", "ow!! what..."],
        receive_buff: ["thanks"],
        receive_destabilized: ["may velzie look away"],
        receive_rez: [
            ()=>env.combat.has('husk') || env.rpg.is2D ? "thank you" : "my savior",
        ],
        puncture: ["such a strange feeling", "make this stop"],
        regen: [
            ()=>env.combat.has('husk') || env.rpg.is2D ? "feeling better" : "feeling good",
        ],
        destabilized: ["..."],
        stun: ["where did my eyes go?!"],
        receive_carapace: ["so heavy"],
        receive_repairs: ["thanks cavik"],
        receive_fear: ["stop looking at me!!", "get away from me!", "no, no no no", "what did it say??"],
        receive_redirection: ["bozko??"],
        receive_emergency_groundsmind: ["keep going!!", "hold on...", "velzie smile upon us..."],
    }
}
env.STATUS_EFFECTS.emergency_groundsmind = {
    slug: "emergency_groundsmind", name: "Interim Groundsmind", beneficial: true, persist: true, infinite: true,
    icon: "https://genseot.github.io/mods/spatialcollapse/img/emergencygroundsmind.gif",
    help: "preventing the relocator from collapsing, lose upon death of the interim groundsmind",
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
                    setTimeout(()=>advanceTurn(gakvu), 600)
                } 
           	}, env.ADVANCE_RATE) }
    }
}



// - ENEMY ACTORS
// - CALL RESEARCH ACTORS
env.COMBAT_ACTORS.research_introgolem = {
    name: "Golem",  maxhp: 20,  hp: 20,  move: 2, actions: ["foe_stab", "malfunction"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="/img/sprites/combat/foes/golem.gif" id="%SLUG-sprite" style="width: 200px;">
            <div class="target" entity="damaged golem"></div>
        </div>`,
    reactions: {} //SILENT CREATURE
}
env.COMBAT_ACTORS.research_hostilecontainer = {
    name: "Container", maxhp: 6, hp: 6, move: 3, actions: ["attack", "attack", "attack", "skitter"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="/img/sprites/combat/foes/inc.gif" id="%SLUG-sprite" style="width: 120px; height: 100px;">
            <div class="target" entity="hostile container"></div>
        </div>
    `,
    reactions: {}
}
env.COMBAT_ACTORS.research_hostileveilklight = {
    name: "Veilklight", maxhp: 10, hp: 10, move: 2, actions: ["spy", "mend", "daze_lastresort"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <div class="veilksprite">
                <img class="sprite" src="/img/sprites/combat/foes/foelampbase.gif" id="%SLUG-sprite" style="width: 100px; height: 200px;">
            </div>
            <div class="target" entity="hostile veilklight"></div>
        </div>
    `,
    reactions: {}
}
env.COMBAT_ACTORS.research_hostileattendant = {
    name: "Spire Attendant", maxhp: 8, hp: 8, move: 2, actions: ["attack", "foe_stab"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <div class="attendant-sprite">
                <img class="sprite" src="/img/local/embassy/spiredronebody.gif" id="%SLUG-sprite" style="width: 100px; height: 200px;>
            </div>
            <div class="target" entity="attendant"></div>
        </div>
    `,
    reactions: { catchall: ["1UiÃ«2Wâ€¡", "â€¡eÃŽKÃŸJÃ¤Ã¤", "/â€¦Â¿?Ã· Ã´LÃ£Ã˜", "CÂ©Ã‹", "0Eâ„¢NÃ³Â¨Ã½QÃ’", "â‚¬LWÃ©{Ã°Ã", "Ã‡Ã¦Ã½Ã™â€¡ÃŸâ€ C", "Â£~UÃ¾fÃ¢", "â€¦TÃº**"], dead: ["Â¿", "???"] }
}

env.COMBAT_ACTORS.research_tendrils = {
    name: "Tendril", turnCheck: "tendrils", maxhp: 10, hp: 10, move: 0, actions: ["swipe"],
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="/img/sprites/combat/foes/tendrils.gif" id="%SLUG-sprite" style="width: 200px; height 400px;">
            <div class="target" entity="tendrils"></div>
        </div>
    `,
    reactions: {}
}
env.COMBAT_ACTORS.research_enemy_movefriend = {
    name: "Movefoe", maxhp: 60, hp: 60, move: 0, statusImmunities: ["stun"], actions: ["incoherent_movefriend", "movefriend_revive"], lastStand: "movefriend",
    graphic: `
        <div class="sprite-wrapper spectral autosize" id="%SLUG-sprite-wrapper">
            <div class="lifter sprite"><figure></figure></div>
            <div class="target" entity="movefoe"></div>
        </div>
    `,
    reactions: {} //SILENT CREATURE
}

  
  
// - ARCHIVAL VEIN ACTORS




// - ACTIONS
// - ENEMY ACTIONS
// - CALL RESEARCH ACTIONS
env.ACTIONS.malfunction = {
    slug: "malfunction", name: "Malfunction", type: 'autohit+self',
    desc: "'suffer from internal deterioration'", help: "-1HP, +1T:VULNERABLE",
    anim: "skitter",
    
    usage: { act: "%USER'S SKIN WRITHES" },

    acc: 100, crit: -1,
    exec: function(user, target) { combatHit(user, {amt: 1, acc: this.accuracy, crit: this.crit, origin: user}); addStatus({target: user, status: "vulnerable", length: 1, noReact: true}); return 'nothing'; }
}
env.ACTIONS.foe_stab = {
    slug: "foe_stab", name: "Stab", type: 'target',
    desc: "'puncture vital cystic component';'damage over time';'stop regen'", help: "75% -1HP +2T:PUNCTURE -REGEN, 10%C -1HP",
    anim: "basic-attack", 

    usage: { act: "%USER STABS %TARGET", crit: "%TARGET IS EVISCERATED", hit: "%TARGET BLEEDS SLUDGY CORRU", miss: "%TARGET EVADES" },
    details: { flavor: "'reshape arm into sharpened tendril';'stab target'", onHit: `'[STAT::amt] [STATUS::puncture]'`, onCrit: ()=> `'puncture vital cystic component for [STATUS::puncture]'${env?.rpg?.is2D ? ";'KB::2'" : ''}`, },

    stats: { accuracy: 0.75, crit: 0.1, amt: 1, status: { puncture: { name: 'puncture', length: 3 } } },  
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({ 
            action: this, user, target, hitSfx: { name: 'stab', rate: 1 }, critStatus: this.stats.status.puncture, hitStatus: this.stats.status.puncture,
            hitExec: ({target})=>{
                if(env?.rpg?.is2D) {
                    if(target.piece && user.piece) target.piece.knockback({
                        direction: user?.piece?.tile.getRelativeDirection(target?.piece?.tile), strength: 2, onImpact: ()=> play("stab", 1)
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
    anim: "",

    usage: { act: "%USER SKITTERS WILDLY AROUND THE ROOM" },
    details: { onUse: () => `'gain [STATUS::evasion]'`, flavor: "'focus on evading incoming attacks';'hide vulnerabilities'" },

    stats: { range: 3, status: { evasion: { name: 'evasion', length: 2 }, } },
    targeting: "square", includesOrigin: true, requiresPath: true, ignoresActors: false,
    aoe: {
        size: 1, shape: "square",
        effect: ({user, tiles, selectedTile})=> {
            if(selectedTile.piece) { return }
            else { user.piece.teleportToTile(selectedTile, {follow: true}) }
        }
    },
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
    slug: "mend", name: "Urgent Mend", type: 'support+target+ground+movement+self', beneficial: true,
    anim: "heal",
       
    usage: { act: "%USER RUSHES TO HELP", crit: "%TARGET FEELS WAY BETTER", hit: "%TARGET FEELS BETTER" },
    details: { flavor: `'mend allies through use of enhanced tools';'often inspiring'`, onUse: `'move to location';'HIT allies around target tile'`, onHit: `'[STAT::amt] [STATUS::regen]'`, onCrit: `'[STATUS::focused]'` },

    stats: { range: 2, crit: 0.1, autohit: true, amt: -2, status: { regen: { name: 'regen', length: 3 } } },
        
    range: 3, requiresPath: true, ignoresActors: false, includesOrigin: true,
    aoe: { 
        effectBeforeExec: true, size: 1,  shape: "circle", distant: true, includesOrigin: true,
        canHit: (user, target) => { return target.team.name == user.team.name} ,
        effect: ({user, tiles, selectedTile}) => user.piece.moveToTile(selectedTile, {follow: true})
    },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this,  user,  target, beneficial: true,
            hitSfx: { name: 'mend', rate: 1 }, hitStatus: this.stats.status.regen,
        })
    },

    // enemy zone
    avoidChaining: true,
    enemyUsageIf: (actor) => { /* only use if someone alive on team has taken damage */ return actor.team.members.some(member => member.state != "dead" && (member.hp < member.maxhp)) },
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
env.ACTIONS.swipe = {
    slug: "swipe", name: "Swipe", type: 'target',
    anim: "basic-attack",

    desc: "'swipe blindly at target';'chance for persistent wound'", help: "70% -1HP, 20%C x2 +1T:PUNCTURE -REGEN",
    usage: { act: "%USER SWIPES AT %TARGET", crit: "%TARGET IS STABBED", hit: "%TARGET IS STRUCK", miss: "%TARGET DUCKS OUT OF THE WAY" },

    accuracy: 0.7, crit: 0.2, amt: 1,
    stats: { range: 5, status: { puncture: { name: 'puncture', length: 1 } } },
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

    accuracy: 0.75, crit: 0.3, amt: 2,
    exec: function(user, target) {
    content.classList.add('painprep', 'painhalf') 
    setTimeout(()=>{content.classList.add('painmode')}, 100) 
    setTimeout(()=>{content.classList.remove('painmode')}, 2000) 
    setTimeout(()=>{content.classList.remove('painprep', 'painhalf')}, 3000)
    ratween(env.bgm, 0.75, 2000)
    env.rpg.classList.remove('incoherentbg')

    return env.GENERIC_ACTIONS.singleTarget({
        action: this, user, target, hitStatus: {name: 'puncture', length: 1}, critStatus: {name: 'puncture', length: 1},
        critExec: ()=> env.GENERIC_ACTIONS.teamWave({
            team: user.enemyTeam,
            exec: (actor, i)=>{
                combatHit(actor, {amt: 1, crit: 0, autohit: true, origin: user});
                addStatus({target: actor, status: "vulnerable", length: 2}); 
                play("talksignal", 0.75)
                }
            })
        })
    }
}
env.ACTIONS.movefriend_revive = {
    slug: "movefriend_revive", name: "Reform Tendril", type: 'target', autohit: true,
    anim: "skitter",

    desc: "'harden corrucystic sludge from the srurrounding area to reform a tendril'", help: "REVIVE:TENDRIL",
    usage: { act: "%USER REFORMS THEIR TENDRIL" },

    accuracy: 1,
    exec: function(user, target) {
        target = env.rpg.allyTeam.members.filter(t=>t.state == "dead").sample()
        if(target) { target.hp = target.maxhp; combatRevive(target) }
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





// - SCENARIOS
// - TESTING SCENARIOS
CombatScene.SCENARIOS['spatial_timestopper_testing'] = {
    initEnemyTeam: ()=> [ "research_introgolem" ],
    initAllyTeam: ()=> page.party,

    bgm: env.embassy.music_combat,
    bgmRate: ()=> 0.5,
    combatClass: "research",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else startDialogue("d3_tutorial_end")
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 13,
    plan: `
        .l░░░░L░░░░l.
        .░░░░░░G░░░░.
        .░░░░░░░░░░░.
        .░░░░░░░░A░░.
        .░░░░░░░░░░░.
        .░░░░░░░E░░░.
        .░░░░░░░░░░░.
        .░░░░░░░░T░░.
        .░░░░░░░░░░░.
        .l░░░░L░░░░l.
    `,
    entities: {
        "E": { spawnPoint: "research_introgolem" },
        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },

        "l": { 
            class:"blocks los prop", 
            contains: { 
                class: "lamp", 
                html: `<figure><div class="target" entity="veilklight"></div></figure>` 
            } 
        },
        "L": { 
            class:"blocks los prop", 
            contains: { 
                class: "listener", 
                html: `<figure> <div class="cyst"></div> <div class="cyst"></div> <div class="cyst"></div> <div class="callscreen"></div> </figure>` 
            } 
        },
    }
}
CombatScene.SCENARIOS['spatial_recreation_testing'] = {
    initEnemyTeam: ()=> [ "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostilecontainer", "research_hostileveilklight" ],
    initAllyTeam: ()=> page.party,

    bgm: env.embassy.music_combat,
    bgmRate: ()=> 0.5,
    combatClass: "research",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else startDialogue("d3_rec_clear")
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 13,
    plan: `
        .░░░░░░░░░░░.
        .░░░░░░░░░░░.
        .░░░░C░░░░░░.
        .░C░░V░C░░░░.
        .░░░░░░░░░░░.
        .░C░░░░░░░░░.
        .░░C░░C░░░C░.
        .░░░░░░░░░░░.
        .░░░░░A░░░░░.
        .░░░G░░░T░░░.
        .░░░░░░░░░░░.
    `,
    entities: {
        "C": { spawnPoint: "research_hostilecontainer" },
        "V": { spawnPoint: "research_hostileveilklight" },

        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },
    }
}

CombatScene.SCENARIOS['spatial_personnel_testing'] = {
    initEnemyTeam: ()=> [ "research_hostilecontainer", "research_hostilecontainer", "research_hostileveilklight", "research_hostileveilklight", "research_hostileattendant", "research_hostileattendant" ],
    initAllyTeam: ()=> page.party,

    bgm: env.embassy.music_combat,
    bgmRate: ()=> 0.5,
    combatClass: "research",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else startDialogue("d3_person_clear")
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 7,
    plan: `
        .░░░░░.
        .░░@░░.
        .░░░░░.
        .░V░C░.
        .░░░░░.
        .░C░░░.
        .░░░V░.
        .░░░░░.
        .░░@░░.
        .░░░░░.
        .░░A░░.
        .░G░T░.
        .░░░░░.
    `,
    entities: {      
        "@": { spawnPoint: "research_hostileattendant" },
        "V": { spawnPoint: "research_hostileveilklight" },
        "C": { spawnPoint: "research_hostilecontainer" },
  
        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },
    }
}

CombatScene.SCENARIOS['spatial_cquarters2_testing'] = {
    initEnemyTeam: ()=> [ "research_hostilecontainer", "research_hostilecontainer" ],
    initAllyTeam: ()=> page.party,

    bgm: env.embassy.music_combat,
    bgmRate: ()=> 0.5,
    combatClass: "research",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else startDialogue("d3r2_postcombat")
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 7,
    plan: `
        .░░░░░.
        .░░T░░.
        .░░░A░.
        .C░G░░.
        .░C░░░.
    `,
    entities: {
        "C": { spawnPoint: "research_hostilecontainer" },
  
        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },
    }
}
CombatScene.SCENARIOS['spatial_movefoe_testing'] = {
    initEnemyTeam: ()=> [ "research_enemy_movefriend", "research_tendrils", "research_tendrils" ],
    initAllyTeam: ()=> {
        team = page.party.filter(m=>["akizet"].includes(m.slug))
        team.push(
            { slug: "miltza", name: "Miltza", hp: 10, combatActor: "miltza" },
            { slug: "tozik", name: "Tozik", hp: 10, combatActor: "tozik" },
            { slug: "gakvu", name: "Gakvu", hp: 10, combatActor: "gakvu_groundsmind" }
        )
        return team
    },

    bgm: env.embassy.music_p1boss,
    bgmRate: ()=> 0.75,
    combatClass: "research",

    startCallback: ()=> console.log("startcallback"),
    endCallback: (loser)=> {
        if(loser.name == "ally") env.grm.startRetryOffer();
        else startDialogue("d3_movefriend_finish")
    },
    retry: ()=> env.grm.defaultRetry(),
    turnCallback: ()=> console.log("turncallback"),

    width: 7,
    plan: `
        ...G...
        ..T░M..
        .░░A░░.
        ░░░░░░░
        .3░░░3.
        ..░░░..
        ...F...
    `,
    entities: {   
        "F": { spawnPoint: "research_enemy_movefriend" },
        "3": { spawnPoint: "research_tendrils" },

        "A": { spawnPoint: "akizet" },
        "M": { spawnPoint: "miltza" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu_groundsmind" },
    }
}



// - CALL RESEARCH SCENARIOS
CombatScene.SCENARIOS['spatial_timestopper'] = {
    initEnemyTeam: ()=> [ "research_introgolem" ],
    initAllyTeam: ()=> page.party,

    bgm: ()=> {
        if(!page.researchCombat) page.researchCombat = new Howl({
            onload: function () {page.howls.push(this)},
            src: ['/audio/embassy_combat.ogg'],
            preload: true, loop: true, volume: 1,
            sprite: { __default: [0, 159988, true] }
        })
        return page.researchCombat
    },
    bgmRate: ()=> 0.5,
    combatClass: "research",

    startCallback: ()=> console.log("starting"),
    endCallback: (loser)=>{if(loser.name == "ally") env.grm.startRetryOffer()},
    turnCallback: (actor)=>{
        if(!check('PAGE!!skiptut')) {
            console.log('got callback', actor)
            switch(actor.slug) {
                case "akizet":
                    if(check('PAGE!!akitut')) { startDialogue('d3_tutorial_akizet'); change('PAGE!!akitut', false) }
                    break

                case "gakvu":
                    if(!check("PAGE!!gaktut")) { startDialogue('d3_tutorial_gakvu'); change('PAGE!!akitut', true)  }
                    break

                case "tozik":
                    if(!check("PAGE!!toztut")) startDialogue('d3_tutorial_tozik')
                    break
                }
            }
    },

    width: 13,
    plan: `
        .v░L░░L░░L░v.
        .░░░░░G░░░░░.
        .░░░░░1░░░░░.
        .░░░6ccc2A░░.
        .░░░ccccc░░d.
        .░░░ccCccE░D.
        .░░░ccccc░░d.
        .░░░5ccc3T░░.
        .░░░░░4░░░░░.
        .░░░░░░░░░░░.
        .v░░░░░░░░░v.
    `,
    entities: {
        "E": { spawnPoint: "research_introgolem" },
        "A": { spawnPoint: "akizet" },
        "T": { spawnPoint: "tozik" },
        "G": { spawnPoint: "gakvu" },

        "C": { class:"blocks los prop",
            contains: { class: "timestopper",
                html: `
                <div class="layers"> <canvas class="timestople t1" sprite="/img/local/embassy/timestoptimize.gif, /img/textures/spotgradientinverse.gif" fit="stretch" baseWidth="5" baseHeight="5"></canvas> <canvas class="timestople t2" sprite="/img/local/embassy/timestoptimize.gif, /img/textures/spotgradientinverse.gif" fit="stretch" baseWidth="4.5" baseHeight="4.5"></canvas> <canvas class="timestople t3" sprite="/img/local/embassy/timestoptimize.gif, /img/textures/spotgradientinverse.gif" fit="stretch" baseWidth="4" baseHeight="4"></canvas> <canvas class="timestople t4" sprite="/img/local/embassy/timestoptimize.gif, /img/textures/spotgradientinverse.gif" fit="stretch" baseWidth="3.5" baseHeight="3.5"></canvas> <canvas class="timestople t5" sprite="/img/local/embassy/timestoptimize.gif, /img/textures/spotgradientinverse.gif" fit="stretch" baseWidth="3" baseHeight="3"></canvas> <canvas class="timestople t6" sprite="/img/local/embassy/timestoptimize.gif, /img/textures/spotgradientinverse.gif" fit="stretch" baseWidth="2.5" baseHeight="2.5"></canvas> </div>
                <div class="tendrils"> <canvas class="timetendril t1" sprite="/img/local/embassy/timestoppertop.gif" fit="stretch" baseWidth="5" baseHeight="5"></canvas> <canvas class="timetendril t2" sprite="/img/local/embassy/timestoppertop.gif" fit="stretch" baseWidth="5" baseHeight="5"></canvas> <canvas class="timetendril t3" sprite="/img/local/embassy/timestoppertop.gif" fit="stretch" baseWidth="5" baseHeight="5"></canvas> </div>` }
        },
        "c": { class:"blocks los notile", },

        "1": { class: "blocks los prop", contains: { class: "chair", html: `<figure style="transform: rotateY(0deg)"></figure>` } },
        "2": { class: "blocks los prop", contains: { class: "chair", html: `<figure style="transform: rotateY(-45deg)"></figure>` } },
        "3": { class: "blocks los prop", contains: { class: "chair", html: `<figure style="transform: rotateY(45deg)"></figure>` } },
        "4": { class: "blocks los prop", contains: { class: "chair", html: `<figure style="transform: rotateY(0deg)"></figure>` } },
        "5": { class: "blocks los prop", contains: { class: "chair", html: `<figure style="transform: rotateY(-45deg)"></figure>` } },
        "6": { class: "blocks los prop", contains: { class: "chair", html: `<figure style="transform: rotateY(45deg)"></figure>` } },

        "D": { class:"blocks los prop", contains: { class: "desk", html: `<figure> <div class="doodad d1"> <div class="target" entity="cyst pile"></div> </div> <div class="doodad d2"> <div class="target" entity="cyst cluster"></div> </div> <div class="doodad d3"> <div class="target" entity="cyst pile"></div> </div> <div class="doodad d4"> <div class="target" entity="summarizer"></div> </div> </figure>` } },
        "d": { class:"blocks los prop", contains: { class: "deskleg" } },
        "L": { class:"blocks los prop", contains: { class: "listener", html: `<figure> <div class="cyst"></div> <div class="cyst"></div> <div class="cyst"></div> <div class="callscreen"></div> </figure>` } },
        "l": { class:"blocks los prop", contains: { class: "lamp", html: `<figure><div class="target" entity="veilklight"></div></figure>` } },
    }
}

CombatScene.SCENARIOS['spatial_recreation'] = {


    width: 13,
    plan: `
        N░░bbbBbbb░░.
        .░+bbbfbbb+░.
        .░░░░░Ã´qT░░░.
        .░░â†•░░░░░â†•░░.
        G6â†”Aâ†”░░░â†”Aâ†”░.
        .░░â†•Q░░░+â†•░░.
        .░░░░░Ã¶░░░░░.
        .░░░░░░░░░░░.
        .░░░░░░░░░░░.
        .c-░░░░░░░░K.
        .Lc░░░p░░░kWS
        ............O
    `,
    entities: {
        "B": { class: "prop blocks", contains: { class: "bar", html: `<figure><div class="target" entity="simulacra dispensary"></div></figure>`, } },
        "t": { class: "prop blocks", contains: { class: "table", html: `<figure></figure>` } },
        "b": { class:"prop blocks genericblocker", },
        "d": { class:"prop blocks", contains: { class: "deskleg" } },
        "f": { class:"prop blocks", contains: { id: "barfriend", class: "barfriend character collapser", html: `<figure></figure>` } },
        "A": { class: "prop blocks", contains: { class: "canopy", html: `<figure> <div class="lid"></div> <div class="deskleg"></div> </figure>` } },
        "â†”": { class: "prop blocks", contains: { class: "chair", html: `<figure style="transform: rotateY(90deg)"></figure>` } },
        "â†•": { class: "prop blocks", contains: { class: "chair", html: `<figure></figure>` } },
        "O": { class: "cornerbooth blocks genericblocker", contains: { class: "boothwalls", html: `<figure></figure>` } },
        "W": { class: "prop blocks", contains: { class: "window", html: `<figure> <div class="target" entity="window"></div> </figure>` } },
        "c": { class: "prop blocks", contains: { class: "container", html: `<figure style="transform: rotateY(-45deg)"></figure>` } },
        "L": { class:"prop blocks", contains: { class: "listener", html: `<figure> <div class="cyst"></div> <div class="cyst"></div> <div class="cyst"></div> <div class="callscreen"></div> </figure>` } },


        "Ã¶": { contains: { id: "foe", class: "evil staysdead collapseonly", type: "recreation_containers_1", html: `<figure class="evilcontainer"><div class="target" entity="hostile container"></div></figure>` } },
        "6": { contains: { id: "foe", class: "evil staysdead collapseonly", type: "recreation_containers_2", html: `<figure class="evilcontainer"><div class="target" entity="hostile container"></div></figure>` } },
        "Ã´": { contains: { id: "foe", class: "evil staysdead collapseonly", type: "recreation_containers_3", html: `<div class="collapsed lamp"><figure><div class="target" entity="hostile veilklight"></div></figure></div>` } },

        "Q": { class: "prop chartile blocks", contains: { class: "dyingqou collapseonly", html: `<figure></figure>` } },
        "q": { class: "prop chartile blocks", contains: { class: "dyingqou collapseonly", html: `<figure></figure>` } },

        'N': { class: "blocks cwall north", contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallW]" baseHeight="6"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallH]" baseHeight="6"></canvas>` } },
        'S': {  class: "blocks cwall south", contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallH]" baseHeight="6"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallW]" baseHeight="6"></canvas>` } }
    }
}

CombatScene.SCENARIOS['spatial_personnel'] = {

    // stage
    width: 7,
    plan: `
        Nl░â–░l.
        }░░░░░.
        .░░░░░.
        .░░░░░a
        .░░░░░.
        }░░░░░.
        .░░░░+.
        .░░░░░{
        .░░░░░.
        }░░░░░.
        .░░░░v.
        .░░░░░{
        .░░░░k.
        }░░░░░.
        .░░░░░.
        .░░░░░{
        .l░â–░lS
    `,
    entities: {        
        "}": { class: "door left" },  
        "{": { class: "door right" },
        "a": { class: "door right" },
    }
}

CombatScene.SCENARIOS['spatial_cquarters2'] = {

    // stage
    width: 7,
    plan: `
        .......
        .lXbXl.
        â†”d░░░░.
        gD░░░░.
        .d░░░░.
        .lCLcI.
        .......
    `,
    entities: {
        C: { class:"prop blocks genericblocker", },
        b: { class:"prop blocks", contains: { class: "bed", html: `<figure></figure>` } },
        X: { class:"prop blocks genericblocker", },
        "â†”": { class: "prop blocks notile", contains: { class: "chair", html: `<figure style="transform: translateX(180%) translateZ(calc(var(--gridTileSize) * 0.4)) rotateY(40deg)"></figure>` } },
        D: { class:"prop blocks",
            contains: { class: "desk",
                html: `<figure> <div class="doodad d1"> <div class="target" entity="simulacra"></div> </div> <div class="doodad d2"> <div class="target" entity="manipulation slab"></div> </div> <div class="doodad d3"> <div class="target" entity="face stand"></div> </div> </figure>`
            }
        },
        I: { class:"prop blocks", contains: { class: "lamp collapsed", html: `<figure><div class="target" entity="veilklight"></div></figure>` } },
        d: { class:"prop blocks", contains: { class: "deskleg" } },
        c: { class: "prop blocks", contains: { class: "container showalways", html: `<figure style="transform: rotateY(-135deg)"> <div class="target" entity="conspicuous container"></div> </figure>` } },
        g: { class: "prop blocks notile", contains: { class: "kazkiguns", html: `<div class="target" entity="bright weapons"></div>` } },
        L: { class: "prop blocks", contains: { class: "shelf", html: `<figure></figure>` } }
    }
}

CombatScene.SCENARIOS['spatial_movefoe'] = {

    // stage
    width: 7,
    plan: `
        ...░...
        ..░░░..
        .M░░░m.
        K░░░░░+
        .░░░░..
        ..░░â–..
        ...g...
    `,
    entities: {   
        g: { class: "blocks", contains: { class: "lifter", id: "movefriend", html: `<figure></figure>` } }
    }
}



// - ARCHIVAL VEIN SCENARIOS
/*
CombatScene.SCENARIOS['spatial_archivalintro'] = {

    // stage
    width: 3,
    plan: [
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
        '░','░','░',
    ],
    entities: {

    }
}
CombatScene.SCENARIOS['spatial_archivalvein'] = {

    // stage
    width: 15,
    plan: [
        '.','.','.','.','.','.','.','v','.','.','.','.','.','.','.',
        'N','░','░','░','░','░','░','░','░','░','░','░','░','░','.',
        '}','░','â–','░','░','░','░','░','░','░','░','░','â–','░','{',
        '.','░','░','░','░','░','░','p','░','░','░','░','░','░','S',
        '.','.','.','.','.','.','.','.','.','.','.','.','.','.','.',
    ],
    entities: {
        "v": { class: "door down always-targeted", },
        "}": { class: "door left", },       
        "{": { class: "door right", },
        'N': {  class: "blocks cwall north",
            contains: { html: ` <canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallW]" baseHeight="3"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallH]" baseHeight="3"></canvas>` }
        },
        'S': {  class: "blocks cwall south",
            contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallH]" baseHeight="3"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/archivalwall.gif" repeat="repeat-x" fit="auto" baseWidth="[wallW]" baseHeight="3"></canvas>` }
        }
    }
}
CombatScene.SCENARIOS['spatial_archivalcore'] = {

    // stage
    width: ,
    plan: [

    ],
    entities: {

    }
}
CombatScene.SCENARIOS['spatial_archivaldelivery'] = {

    // stage
    width: ,
    plan: [

    ],
    entities: {

    }
}
CombatScene.SCENARIOS['spatial_archivalcore_sensitive'] = {

    // stage
    width: ,
    plan: [

    ],
    entities: {

    }
}
CombatScene.SCENARIOS['spatial_archivalboss'] = {

    // stage
    width: ,
    plan: [

    ],
    entities: {

    }
}
*/


// - DIALOGUE
// - d3_start
env.dialogues["d3_start"] = generateDialogueObject(`
start
    moth
        bleh test

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
            EXEC::env.embassy.vn({fade: true});ratween(env.bgm, 0.75, 5000);env.grm.combat("spatial_timestopper_testing");
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

// - d3_recreationenemy
env.dialogues["d3_recreationenemy"] = generateDialogueObject(`
start
    sourceless
        WE ARE BESET BY INCOHERENT FOES
            EXEC::forceSwapCam(true)
        OUR ONLY OPTION IS TO FIGHT

        OR IS IT?
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.disabler)'
        WE COULD ALSO EXPEND THE DISABLER
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.disabler)'
        THERE MAY BE A BETTER TIME FOR IT LATER...
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.disabler)'

    RESPONSES::akizet
        engage<+>END
            SHOWIF::['gameplay_off', false]
            FAKEEND::(begin combat)
            EXEC::env.grm.combat("spatial_recreation_testing")

        bypass<+>END
            SHOWIF::['gameplay_off', true]
            FAKEEND::(bypass combat)
            EXEC::env.combat.dynamicCombat({dry: true});cutscene(true);setTimeout(()=>{cutscene(false);env.combat.dynamicCallback(env.rpg.enemyTeam)}, 1010)

        disable<+>disable
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.disabler)'
            FAKEEND::(use disabler charge)

disable
    sourceless
        I CAREFULLY LINE UP THE DISABLER
            EXEC::removeItem(env.ITEM_LIST.disabler);
        AND WITH AN IMPULSE THROUGH MY HAND, A NUMBER OF SPECIALIZED SPINES ARE PROJECTED VIOLENTLY OUTWARDS
        THEY NEEDLE OUR FOES, AND IN A BLINK, THEY HAVE STARTED TO MELT
            EXEC::setTimeout(()=>play('shot2', 0.6), 300)
    RESPONSES::akizet
        continue<+>END
            EXEC::env.combat.dynamicCombat({dry: true});cutscene(true);setTimeout(()=>{cutscene(false);env.combat.dynamicCallback(env.rpg.enemyTeam)}, 1010)
            FAKEEND::(wait)
`)
// - d3_personnelenemy
env.dialogues["d3_personnelenemy"] = generateDialogueObject(`
start
    sourceless
        WE ARE BESET BY INCOHERENT FOES
            EXEC::forceSwapCam(true)
        OUR ONLY OPTION IS TO FIGHT

        OR IS IT?
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.disabler)'
        WE COULD ALSO EXPEND THE DISABLER
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.disabler)'
        THERE MAY BE A BETTER TIME FOR IT LATER...
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.disabler)'

    RESPONSES::akizet
        engage<+>END
            SHOWIF::['gameplay_off', false]
            FAKEEND::(begin combat)
            EXEC::env.grm.combat("spatial_personnel_testing")

        bypass<+>END
            SHOWIF::['gameplay_off', true]
            FAKEEND::(bypass combat)
            EXEC::env.combat.dynamicCombat({dry: true});cutscene(true);setTimeout(()=>{cutscene(false);env.combat.dynamicCallback(env.rpg.enemyTeam)}, 1010)

        disable<+>disable
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.disabler)'
            FAKEEND::(use disabler charge)

disable
    sourceless
        I CAREFULLY LINE UP THE DISABLER
            EXEC::removeItem(env.ITEM_LIST.disabler);
        AND WITH AN IMPULSE THROUGH MY HAND, A NUMBER OF SPECIALIZED SPINES ARE PROJECTED VIOLENTLY OUTWARDS
        THEY NEEDLE OUR FOES, AND IN A BLINK, THEY HAVE STARTED TO MELT
            EXEC::setTimeout(()=>play('shot2', 0.6), 300)
    RESPONSES::akizet
        continue<+>END
            EXEC::env.combat.dynamicCombat({dry: true});cutscene(true);setTimeout(()=>{cutscene(false);env.combat.dynamicCallback(env.rpg.enemyTeam)}, 1010)
            FAKEEND::(wait)
`)

// - d3_containerinspect & d3_containerambush
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
            EXEC::env.grm.combat("spatial_cquarters2_testing");specialCam(false)
            FAKEEND::start combat
`)
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
            EXEC::env.grm.combat("spatial_cquarters2_testing");specialCam(false)
            FAKEEND::start combat
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
            EXEC::env.embassy.vn({bg: false, gakvu: "", tozik: ""});document.querySelector('#realgrid .lifter').classList.remove('fixed');document.querySelector('#realgrid .lifter').classList.add('aggressormode')
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
            EXEC::content.classList.remove('painmode');AddMiltzaToParty();

    RESPONSES::sys
        force thoughtform rules over entity<+>END
            EXEC::env.embassy.startMovefriendBoss('low');env.embassy.vn({tozik: '', gakvu: ''});specialCam(false);content.classList.remove('painprep', 'slowpain') [PLACEHOLDER]
            FAKEEND::reduced intensity alternative
            SHOWIF::[['low_intensity', true], ['gameplay_off', false]]

    RESPONSES::akizet
        activate timestopper<+>END
            EXEC::env.grm.combat("spatial_movefoe_testing");env.embassy.vn({tozik: '', gakvu: ''});specialCam(false);content.classList.remove('painprep', 'slowpain')
            FAKEEND::start combat
            SHOWIF::['gameplay_off', false]
        activate timestopper<+>CHANGE::d3_movefriend_finish
            SHOWIF::['gameplay_off', true]
            EXEC::env.embassy.vn({tozik: '', gakvu: ''});specialCam(false);content.classList.remove('painprep', 'slowpain')
            FAKEEND::skip combat

SKIP::env.embassy.skips.d3_relocator_repair()
SKIPTIME::700
`)
// - d3_rec_clear
env.dialogues["d3_rec_clear"] = generateDialogueObject(` 
start
    sourceless
        WITH THESE LAST FEW DEAD, THE SKITTERING FALLS QUIET
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

SKIP::change("PAGE!!queue_person_enable", true);changeBgm(env.embassy.music_collapse, {rate: 1, length: 5});env.embassy.advanceSfer(3, "rec_clear")
`)
// - d3_person_clear
env.dialogues["d3_person_clear"] = generateDialogueObject(`
start
    sourceless
        THE ROOM STANDS SILENT
            EXEC::pauseSwapCam(true)
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

SKIP::env.embassy.advanceSfer(1, "person_clear");vn.done();pauseSwapCam(false)
`)




// - SKIPS
// NOT DONE BTW
env.embassy.skips = {
    d3_start: ()=>{
        content.classList.remove('innerfocus', 'showfocus', 'fade-stage', 'painprep', 'painmode')
        content.classList.add('collapse')
        vn.done()
        vn.renderParty()
        specialCam(false)
        changeBgm(env.embassy.music_collapse, {length: 1})
        
        switch(check("gameplay_off")) {
            case false:
                setTimeout(() => {
                    change('PAGE!!skiptut', true)
                    env.grm.combat("spatial_timestopper_testing");     
                }, 50)
            break

            case true:
                setTimeout(() => {
                    startDialogue("d3_tutorial_end")                    
                }, 600)
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
                setTimeout(()=>startDialogue("d3_movefriend_finish"), 550)
            break

            case false: 
                if(check("low_intensity")) env.embassy.startMovefriendBoss('low')
                else env.embassy.startMovefriendBoss()
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
    },
    onStep: ()=>{
        if(!content.classList.contains("collapse")) {
            env.stage.real.classList.add("dynocam")
            if(env.stage.creatureLoc.y < 6) { env.stage.container.setAttribute("swapos", "bar") } 
            else if(env.stage.creatureLoc.x > 7) { env.stage.container.setAttribute("swapos", "kazkicorner") } 
            else { env.stage.container.removeAttribute("swapos") } }
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
        "Ã¶": { contains: { id: "foe", class: "evil staysdead collapseonly", type: "recreation_containers_1", dialogue: "d3_recreationenemy", html: `<figure class="evilcontainer"><div class="target" entity="hostile container"></div></figure>` } },
        "6": { contains: { id: "foe", class: "evil staysdead collapseonly", type: "recreation_containers_2", dialogue: "d3_recreationenemy", html: `<figure class="evilcontainer"><div class="target" entity="hostile container"></div></figure>` } },
        "Ã´": { contains: { id: "foe", class: "evil staysdead collapseonly", type: "recreation_containers_3", dialogue: "d3_recreationenemy", html: `<div class="collapsed lamp"><figure><div class="target" entity="hostile veilklight"></div></figure></div>` } },
        "Q": { class: "prop chartile blocks", contains: { class: "dyingqou collapseonly", examineEntity: "damaged qou body", html: `<figure></figure>` } },
        "q": { class: "prop chartile blocks", contains: { class: "dyingqou collapseonly", examineEntity: "mangled qou body", html: `<figure></figure>` } },
        'N': {  class: "blocks cwall north", contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallW]" baseHeight="6"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallH]" baseHeight="6"></canvas>` } },
        'S': {  class: "blocks cwall south", contains: { html: `<canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallH]" baseHeight="6"></canvas> <canvas class="wall" sprite="/img/local/embassy/tiles/cavewall.gif" repeat="repeat-x" fit="stretch-y" baseWidth="[wallW]" baseHeight="6"></canvas>` } },
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
        "Ã¶": { contains: { id: "foe", class: "evil staysdead collapseonly", type: "attendant_squad_1", dialogue: "d3_personnelenemy", html: `<figure class="spiregolem"><div class="target" entity="attendant"></div></figure>` } },
        "â˜»": { contains: { id: "foe", class: "evil staysdead collapseonly", type: "attendant_squad_2", dialogue: "d3_personnelenemy", html: `<figure class="spiregolem"><div class="target" entity="attendant"></div></figure>` } },
        "â™¦": { contains: { id: "foe", class: "evil staysdead collapseonly", type: "attendant_squad_3", dialogue: "d3_personnelenemy", html: `<figure class="spiregolem"><div class="target" entity="attendant"></div></figure>` } },
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
        "q": {
            class: "door right fakeunlock",
            teleportSpot: 8,
            teleportTarget: "embassy_cpersonnel",
            shouldFace: 'right',
            lockFlag: "PAGE!!kazkiambush",
            lockExec: ()=>startDialogue('d3r2_containerambush')
        },
        C: { class:"prop blocks genericblocker", },
        b: { class:"prop blocks", contains: { class: "bed", examineEntity: "rejuvenation chamber", html: `<figure></figure>` } },
        X: { class:"prop blocks genericblocker", },
        "â†”": { class: "prop blocks notile", contains: { class: "chair", html: `<figure style="transform: translateX(180%) translateZ(calc(var(--gridTileSize) * 0.4)) rotateY(40deg)"></figure>` } },
        D: { class:"prop blocks", contains: { class: "desk", html: `<figure> <div class="doodad d1"> <div class="target" entity="simulacra"></div> </div> <div class="doodad d2"> <div class="target" entity="manipulation slab"></div> </div> <div class="doodad d3"> <div class="target" entity="face stand"></div> </div> </figure>` }
        },
        I: { class:"prop blocks", contains: { class: "lamp collapsed", html: `<figure><div class="target" entity="veilklight"></div></figure>` } },
        d: { class:"prop blocks", contains: { class: "deskleg" } },
        c: { class: "prop blocks", contains: { class: "container showalways", html: `<figure style="transform: rotateY(-135deg)"> <div class="target" entity="conspicuous container"></div> </figure>` } },
        g: { class: "prop blocks notile", contains: { class: "kazkiguns", html: `<div class="target" entity="bright weapons"></div>` } },
        L: { class: "prop blocks", contains: { class: "shelf", examineEntity: "storage display", html: `<figure></figure>` } },
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




// - ARCHIVAL VEIN STAGES





}, 500)
}
}) 
