/* just a reimplementation of embassy_groundsmindry.js - minus all the music & entities & other unnecessary ep4 stuff */

env.grm = {
    //quick wrapper for starting and page-marking
    startDialogue: (name) => {
        startDialogue(name)
        change(`PAGE!!${name}`, true)
    },

    /* specific calls since ep4 is linear */
    combat: (sequence) => {
        if(CombatScene.SCENARIOS[sequence] && !env?.rpg?.active) {
            pauseSwapCam(true)
            content.insertAdjacentHTML(`beforeend`, `<combat-scene scenario='${sequence}'></combat-scene>`)
        }
    },

    // should handle everything necessary to restart the fight
    startRetryOffer: ()=> {
        if(env.rpg.retry || env?.currentDialogue?.active) return;
        
        env.rpg.cancelClose = true
        startDialogue("loss")
        env.rpg.retry = true
    },

    defaultRetry: (callback, autoStartScene = true) => {
        env.rpg.cancelClose = false
        vfx({type: "skip", state: true, useCutscene: true})
        let vol = Howler.volume()
        Howler.volume(0)

        closeCombat(env.rpg.allyTeam, true)

        setTimeout(() => {
            if(callback) callback()
            if(autoStartScene) content.insertAdjacentHTML(`beforeend`, `<combat-scene scenario='${env.partySnapshot.scenarioName}'></combat-scene>`)
        }, 3000)

        setTimeout(() => {
            vfx({type: "skip", state: false, useCutscene: false})
            Howler.volume(vol)
        }, 4500);
    },

    //new way of giving items in EP4
    lootboxCheck: (validActorSlugs) => {
        let specificSpawn = false
        let spawnChance = 0
        let totalItems = page.party.inventory.reduce((sum, item) => sum + item[0].group ? item[1] : 0, 0)
        if(!env.rpg.itemSpawns) env.rpg.itemSpawns = 0

        if(checkItem("restorative") < 6 && !env.rpg.restorativeDrop) {
            specificSpawn = "restorative"
            spawnChance = 0.75
            env.rpg.restorativeDrop = true

        } else if(totalItems < 12 && env.rpg.itemSpawns < 2) {
            spawnChance = 0.075

        } else if(totalItems < 12 && env.rpg.itemSpawns < 4) {
            spawnChance = 0.03

        } else {
            spawnChance = 0.01
        }

        if(Math.random() < spawnChance) {
            let pick = env.rpg.enemyTeam.members.find(m=>validActorSlugs.includes(m.originalSlug) && !m.holdingItem)
            if(pick) {
                let chosenSpawn = env.ITEM_LIST[["satik_cyst", "aima_cyst", "kavruka", "restorative", "satik_cyst", "aima_cyst", "kavruka", "satik_cyst", "aima_cyst", "kavruka", "restorative", "satik_cyst", "aima_cyst", "kavruka", "disabler"].sample()]
                pick.holdingItem = {
                    name: specificSpawn || chosenSpawn.slug,
                    qty: chosenSpawn.batches
                }

                addStatus({target: pick, status: "lootbox"})
                env.rpg.itemSpawns++
            }
        }
    },

    startDialogueOnce: (name, force) => {
        if(!page.flags?.startOnce) page.flags.startOnce = []
        if(page.flags.startOnce.includes(name) && !force) return;
        
        startDialogue(name)
        page.flags.startOnce.push(name)
    }
}
