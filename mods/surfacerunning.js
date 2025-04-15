/* SURFACE RUNNING */
/* BY GENSEOT, BASED ON ADR_FURRET'S VIELK MEMORY HOLE TEMPLATE */

/* TABLE OF CONTENTS */
// STYLE
// SCRIPT
// DIALOGUE
// SCRIPT 2
// MEMORY HOLE

// PAGE CONTENT
// STYLE
surfacerunningContent = `
<div id="content" data-swup="0">
	<style>
	#content::after, #content::before {
    		content: "";
    		position: absolute;
    		width: 100%;
    		height: 100%;
	}
	#content::after {
    		background: url(/img/textures/fadeinlonghalf.gif);
    		background-size: auto 100%;
	}
	#content::before {
    		background: url(/img/textures/ccontours.gif);
	}

	body.in-menu #content {
    		transform: unset !important;
	}
	</style>

// SCRIPT
	<script id="PageData">
		content = document.querySelector('#content')
		body = document.body

		if(typeof page == "object") {
			oldPage = page
		}

		// This script is generated per-page based on jekyll front-matter and other inputs. If you're looking at how stuff was done, be prepared for truly terrible whitespace management. It's prettier when I'm working on it, trust me.
		page = {
			title: "..__UNKNOWN__..",
			name: "unknown",
			dialoguePrefix:  "sec" ,
			path: location.pathname,
			flags: {},
			howls: [],
			cacheval: 1737759501187488375,
			image: "/img/socials/where.gif",
				
		// howl initialisation	
		bgm: new Howl({
			onload: function () {page.howls.push(this)},
			src: ['/audio/hub.ogg'],
			preload: true,
			loop: true,
			rate: 0.75, 
			sprite: {
				__default: [50, 153000, true]
			}
		}),
				
		// onload stuff initialisation
		onLoaded: ()=>{	
			document.querySelectorAll('#grid-ref').forEach(e=>e.remove())
			body.setAttribute('page', page.name)
			content.setAttribute('page', page.name)
			document.querySelector('#static .enter').setAttribute('page', page.title)
			document.scrollingElement.scrollTop = 0
			updatePreferenceAttributes()
			//dynamically inserted
		} // <- idk whether or not this bracket is supposed to exist. if this breaks try removing this bracket
// DIALOGUE
// kazzanesche vel zakori
env.dialogueActors["kaz"] = {
    image: "/img/sprites/obesk/larval/something1.gif",
    type: "thoughtform portrait-contain obesk qou portrait-dark loose-thought",
    voice: ()=>play('talkgal', 0.7),
    player: true,
    name: ""
}
// yankani vel metvi
env.dialogueActors["yan"] = {
    image: "/img/sprites/obesk/larval/larval2.gif",
    type: "thoughtform portrait-contain portrait-darkripple larval qou loose-thought",
    voice: ()=>play('talk', 1.3),
    name: ""
}
// vakallkorik kiv kazani
env.dialogueActors["vak"] = {
    image: "/img/sprites/obesk/larval/larval5.gif",
    type: "thoughtform portrait-contain portrait-darkripple obesk larval loose-thought",
    voice: ()=>play('talk', 0.8),
    name: ""
}
env.dialogueActors["evil"] = {
    type: "obesk qou portrait-contain portrait-blocker mutter",
    voice: ()=>play('scarydoia', 0.7),
}

// CHAPTER SELECT			
env.dialogues["chapterselect"] = generateDialogueObject(\`
start
    sys
        ATTENTION::'memory stream located';'SURFACE RUNNING';'by GENSEOT'
	NOTICE::'select starting chapter'

    RESPONSES::sys
        chapter 1: introduction<+>intro 
	chapter 2: eyes<+>eyes
	    SHOWIF::'eyes'
	chapter 3: bone<+>bone
	    SHOWIF::'bone'
	chapter 4: claws<+>claws
	    SHOWIF::'claws'
	chapter 5: ichor<+>ichor
	    SHOWIF::'ichor'
	chapter 6: light<+>light
	    SHOWIF::'light'
	end stream<+>END
	    EXEC::moveTo("/local/depths/")
\`)


// CHAPTER 1: INTRODUCTION
env.dialogues["intro"] = generateDialogueObject(\`
start
    sys
	ATTENTION::'chapter 1';'introduction'

    sourceless
	I TRUDGE ALONG THE MUDDY BANKS OF THE RIVER, MY COMPANIONS CLOSE BEHIND ME
	THE MUD CLINGS TO MY FEET LIKE THE GRIP OF AN AKOZAK, BUT I PAY IT NO HEED
	MY QUICK AND NIMBLE FOOTSTEPS OUTMACH THE MUD'S GRASP
	AS MY COMPANIONS STUMBLE AND CURSE BEHIND ME, I SLOW DOWN MY PACE 

    yan
	AøI+ÈHA!

    sourceless
	YAN TUMBLES INTO THE MUD, SCATTERING THEIR SACHEL OF CYSTS
	I GIGGLE A LITTLE 
	IT IS ALWAYS A DELIGHT TO SEE OTHERS GET TWISTED IN THE RIVER'S BANKS

    kaz
	never been on the surface before, cavern-crawler?

    sourceless
	THEY SIGH AT MY COMMENT, SAYING NOTHING
	THEY CONTINUE TO CLEAN AND RETURN THE CYSTS TO THEIR PROPER PLACE

    vak
	come on, we should not keep stopping like this while it is still clear-sky

    sourceless
	WE TRAVEL ALONG THE yuzku river 
	I HAVE KNOWN THIS RIVER ALL MY LIFE
	I HAVE HUNTED, TRAVELLED, AND LIVED ALONGSIDE IT
	I KNOW ITS SECRETS - AND IT KNOWS MINE

    vak
	ready, yan?

    yan
	yes, let us keep going
	how long until we reach the spire, kaz?

    kaz
	judging by the distance - a few more θgazes 

    sourceless
	ACROSS THE HORIZON - THE SPIRE LIES
	IT DRAPES THE SKIES AROUND IT IN ITS BLACK TEMPEST, OBSCURING VELZIE'S GAZE
	EVEN HERE, WE CAN SEE THE CRACKS OF LIGHTNING IT EMITS
	BUT BEYOND IT - OUR DESTINATION

    yan
	then that should put us several θgazes to gozazni - right, vak?

    vak
	seems like it to me

    sourceless
	IT IS STILL A FEW θwinks BEFORE DUSK FALLS
	WE SET OFF ONCE AGAIN ALONG THE RIVER'S BANKS...
	TIME WHITTLES AWAY AS WE TRAVEL UNDER VELZIE'S GAZE
	AS THE θblinks PASS - I HEAR MY COMPANIONS BICKER BEHIND, AS THEY FOLLOW ME

    yan
	uuugh my back hurts already

    vak
	lighten up, i have been carrying everything else since we left ukazni ozo
	besides, i am the one with the zzepel - i decide when we will rest

    sourceless
	A PAUSE, I ASSUME VAK LOOKED AT YAN

    vak
	before you ask, now is not that time

    sourceless
	YAN GROANS

    yan
	not even for a θblink?

    vak
	no
	we cannot afford to 

    sourceless
	AND SO, WE CONTINUE IN SILENCE

    sys
	ATTENTION::'conclusion of chapter'
	NOTICE::'continue?'

    RESPONSES::sys
	continue<+>eyes
	    EXEC::change('eyes', true)
	return to chapter select<+>chapterselect
	    EXEC::change('eyes', true)
\`)


// CHAPTER 2: EYES
env.dialogues["eyes"] = generateDialogueObject(\`
start
    sys
	ATTENTION::'chapter 2';'eyes'


    sys
	ATTENTION::'conclusion of chapter'
	NOTICE::'continue?'

    RESPONSES::sys
	continue<+>bone
	    EXEC::change('bone', true)
	return to chapter select<+>chapterselect
	    EXEC::change('bone', true)
\`)


// CHAPTER 3: BONE
env.dialogues["bone"] = generateDialogueObject(\`
start
    sys
	ATTENTION::'chapter 3';'bone'


    sys
	ATTENTION::'conclusion of chapter'
	NOTICE::'continue?'

    RESPONSES::sys
	continue<+>claws
	    EXEC::change('claws', true)
	return to chapter select<+>chapterselect
	    EXEC::change('claws', true)
\`)


// CHAPTER 4: CLAWS
env.dialogues["claws"] = generateDialogueObject(\`
start
    sys
	ATTENTION::'chapter 4';'claws'


    sys
	ATTENTION::'conclusion of chapter'
	NOTICE::'continue?'

    RESPONSES::sys
	continue<+>ichor
	    EXEC::change('ichor', true)
	return to chapter select<+>chapterselect
	    EXEC::change('ichor', true)
\`)


// CHAPTER 5: ICHOR
env.dialogues["ichor"] = generateDialogueObject(\`
start
    sys
	ATTENTION::'chapter 5';'ichor'


    sys
	ATTENTION::'conclusion of chapter'
	NOTICE::'continue?'

    RESPONSES::sys
	continue<+>light
	    EXEC::change('light', true)
	return to chapter select<+>chapterselect
	    EXEC::change('light', true)
\`)					


// CHAPTER 6: LIGHT
env.dialogues["light"] = generateDialogueObject(\`
start
    sys
	ATTENTION::'chapter 6';'light'


    sys
	ATTENTION::'conclusion of memory stream'

    RESPONSES::sys
	return to chapter select<+>chapterselect
\`)
		





// SCRIPT 2
document.querySelector('body').classList.remove('nomoth')					
if(firstLoad || env.waitOnLoad) {
	if(!env.loading) 
		body.classList.remove("loading") //this is otherwise handled in the loadResources function
		body.setAttribute('state', 'corru-loaded')
	} 
	else {
		page.onEnter()
		if(oldPage.bgm) oldPage.bgm.unload() //unloads the old page music to save memory
	}

	// global definitions
	// general
	env.definitions[\`velzie's stage\`] = \`'all that can be observed';'physical reality';'religious term now used scientifically';'partial translation';'inherited description-generated noun'\`;
	// time
	env.definitions[\`θeye\`] = \`'time period';'patrols around the eye of velzie';'religious implication'\`;
	env.definitions[\`θeyes\`] = \`'time period';'patrols around the eye of velzie';'religious implication'\`;
	env.definitions[\`θgazes\`] = \`'time period';'numerous within eyes'\`;
	env.definitions[\`θgaze\`] = \`'time period';'numerous within eyes'\`;
	env.definitions[\`θwinks\`] = \`'time period';'numerous within gazes'\`;
	env.definitions[\`θwink\`] = \`'time period';'numerous within gazes'\`;
	env.definitions[\`θblinks\`] = \`'time period';'numerous within winks'\`;
	env.definitions[\`θblink\`] = \`'time period';'numerous within winks'\`;

	// obesk-related
	// castes
	env.definitions[\`θjut\`] = \`'engineer';'caste'\`;
	env.definitions[\`vel\`] = \`'caste';'partial meaning loss due to damaged context'\`;
	env.definitions[\`tir\`] = \`'caste';'partial meaning loss due to damaged context'\`;
	env.definitions[\`kiv\`] = \`'caste';'partial meaning loss due to damaged context'\`;
	env.definitions[\`qou\`] = \`'caste';'partial meaning loss due to damaged context'\`;
	// other
	env.definitions[\`θdeath\`] = { type: \`NOTE\`, text: \`'implies altered living state'\`};
	env.definitions[\`θdeaths\`] = { type: \`NOTE\`, text: \`'implies altered living state'\`};
	env.definitions[\`θdeathly\`] = { type: \`NOTE\`, text: \`'implies altered living state'\`};

	// crittas
	env.definitions[\`fairy\`] = { type: \`NOTE\`, text: \`'partial translation';'implied closest cultural equivalent'\`};
	env.definitions[\`golem\`] = { type: \`NOTE\`, text: \`'partial translation';'implied closest cultural equivalent'\`};
	env.definitions[\`golems\`] = { type: \`NOTE\`, text: \`'partial translation';'implied closest cultural equivalent'\`};
	env.definitions[\`secri\`] = \`'predator';'infection';'primal terror'\`;
	env.definitions[\`velzie\`] = \`'god'\`;
	env.definitions[\`veilk\`] = \`'surface fauna';'foundation of entire ecosystem';'enormous and endless'\`;
	env.definitions[\`zuzucri\`] = \`'violent parasitic surface fauna';'hijacks mind of victim for use as social camouflage';'ekivik profanity'\`;
	env.definitions[`akozak`] = `'burrowing slime';'sinkhole';'many arms'`;

	// other
	env.definitions[\`jokzi ozo\`] = \`'home';'fortress upon jokzi'\`;
	env.definitions[\`ukazni ozo\`] = \`'surface city';'mountainous fortress';'origin of dull pulse weaponry'\`;
	env.definitions[\`uncosm\`] = { type: \`NOTE\`, text: \`'reconstructive translation';'implies non-world'\`};



						
	// page-specific definitions

	// general
	// weather
	env.definitions[`spirestorm`] = `'weather phenomena';'ceaseless violent storm surrounding natural spire'`;						
	env.definitions[`clear-sky`] = `'partial translation';'inherited description-generated noun'`;
	env.definitions[`brightwall`] = { type: `NOTE`, text: `'partial translation';'reference to weather phenomena'`};
	// obeski
	env.definitions[`zevazni`] = `'cave-city central to vazni';'corrucystic revolution origin'`;
	env.definitions[`vazni`] = `'continent';'home';'central to inhabitable zone'`;
	env.definitions[`oltazni`] = `'vaznian cave-city'`;
	env.definitions[`vaznian`] = `'ethnic implication';'origination from continent';'vazni'`;
	env.definitions['yuzku river'] = `'great river';'splits the continent of vazni';'known for its bioluminescent lights, flourishing at night';'like yuzku'`;
	env.definitions['gozazni'] = `'vaznian gulch-city';'recently opened communications, unaware of the corrucystic revolution';'our destination'`;
	// colliqualisms
	env.definitions[`tir stumbling into their research chamber`] = `'common myth';'intoxicated tir knocked over corru container and fell into it'`;
	env.definitions[`velzie's eye cast down`] = `'common idiom';'even velzie watches in shock'`;
	env.definitions[`keep velzie entertained`] = `'common phrase';'religious implication';'implies wish for safe journey'`;
	env.definitions[`spike in the heel`] = `'common idiom';'persistent issue'`;
	env.definitions[`kelnit`] = `'derogatory';'incompetent fighter'`;
	// time
	env.definitions[`θradiant`] = `'time period';'segments around the eye of velzie';'each heralds a new season'`;
	env.definitions[`θradiants`] = `'time period';'segments around the eye of velzie';'each heralds a new season'`;

	// obesk-related
	// tech
	env.definitions[`zzepel`] = `'back-mounted multi-purpose surface utility';'popular for veilk camping'`;
	env.definitions[`dullvoice`] = { type: `NOTE`, text: `'partial translation';'inherited description-generated noun'`};
	env.definitions[`sfer`] = `'refined corrucystic fuel/food';'currency'`;
	env.definitions[`zuzucri-masks`] = `'corrucystic treatment for zuzucri infestation';'partial translation';'inherited description-generated noun'`;
	// clothing
	env.definitions[`valika`] = `'wide conical headwear';'surface camouflage'`;
	// other
	env.definitions[`surface voice`] = `'specialized volume management';'fast and enunciated'`;

	// crittas
	env.definitions[`celki`] = `'veilk parasite';'food'`;
	env.definitions[`dog`] = { type: `NOTE`, text: `'partial translation';'implied closest cultural equivalent'`};
	env.definitions[`veilk`] = `'surface fauna';'foundation of entire ecosystem';'enormous and endless'`;
	env.definitions[`guktik`] = `'predator';'bladed arms';'cooked flesh goes well with zzoust'`;
	env.definitions[`cavernguard`] = { type: `NOTE`, text: `'partial translation';'inherited description-generated noun'`};
	env.definitions[`yuzku`] = `'sluggish bioluminescent scavengers';'intentionally cultivated in veilk parasite husks for lighting';'fatal if consumed'`;

	// other
	env.definitions[`kalstik`] = { type: `TRANSLATION FAILED`, text: `CAUSE:'no equivalent internal meaning';'no relevant inherited context'::ROMANIZATION SUCCESSFUL`};

			
	console.log('rendering buddies!')
	Buddy.renderGlobalBuddies()
	document.dispatchEvent(env.hooks.corru_loaded)
},
// page initialisation
onEnter: ()=>{
	if(!page.dialoguePrefix.includes("notfound")) {
		change(\`visited_\${location.pathname.replace(/\\//g, '')}\`, true) // !!!!!!!!!!!NOTE:: needs to be specifically formatted to make sure the backslash stays correct; same for other similar cases
	}
					
	//global VN object update
	page.vn = new VN()
	window.vnObj = page.vn
	readoutAdd({message: \`..__NAVIGATING::"\${page.name}"__..\`, name:"sys", actor: "sys", type: "navigation", show: false, sfx: false})				
	body.setAttribute('state', 'corru-entered')
	firstLoad = false
					
	if(corruStatic.playing() && !body.classList.contains("hard-cut")) {
		corruStatic.fade(corruStatic.volume(), 0, 1000)
		setTimeout(()=> corruStatic.stop(), 1001)
	}

	if(page.bgm) {
		page.bgm.volume(0)
		page.bgm.play()
		page.bgm.fade(0, 1, 1000)
		env.bgm = page.bgm
	} 
	else {
		env.bgm = null
	}
					

	//dyn					
	body.classList.add('codezone')
	startDialogue("chapterselect")
	Buddy.triggerPageBuddies()
	document.querySelector('#PageData').remove()
	document.dispatchEvent(env.hooks.corru_entered)
	mothHasUnreadCheck()

	setTimeout(()=>{
		if(oldPage) if(oldPage.howls) oldPage.howls.forEach(howl=>howl.unload())
	}, 400)
	},

	onLeaving: (dest = false)=>{
		body.setAttribute('state', 'corru-leaving')
		MUI("off")
		env.waitOnLoad = false

		if(env.bgm){
			let oldbgm = env.bgm
			env.bgm = null

			if(oldbgm.playing()) {
				oldbgm.fade(oldbgm.volume(), 0, 1000)
				setTimeout(()=> oldbgm.stop(), 1001)
			}
		}

		if(!body.classList.contains("hard-cut")) {
			corruStatic.volume(0)
			corruStatic.play()
			corruStatic.fade(0, env.corruStaticBaseVol, 1000)
		}

		//dyn
		body.classList.remove('codezone')
		change('TEMP!!sat', true)
		Buddy.cleanPageBuddies({removeEl: false})
		document.dispatchEvent(env.hooks.corru_leaving)

		if(dest) swup.loadPage({url: dest})
		delete page.vn
		}
	}

	env.pageName = "unknown";
	env.pagePath = location.pathname;
	</script>
</div>
`

// MAKE SURE DA PAGES VAR EXISTS !
if(typeof pages == "undefined") {
    pages = {}
}
// CACHE DA PAGE SO IT LOADS
pages['/local/uncosm/surfacerunning/'] = {
  "title": "..__UNKNOWN__..",
  "name": "unknown",
  "dialoguePrefix": "sec",
  "path": location.pathname,
  "flags" :{},
  "pageClass": "",
  "originalContent": "",
  "blocks": [
    `${surfacerunningContent}`
  ],
  "responseURL": "https://corru.observer/local/uncosm/surfacerunning/",
  "url": "/local/uncosm/surfacerunning/"
}
// SWUP DOSE PAGES OUT
Object.defineProperty(swup.cache, 'pages', { get: () => pages, set: () => { } })

// REFRESH PAGE IF ITS EMPTY 4 SOME REASON
if((location.pathname == "/local/uncosm/surfacerunning/") && (page.dialoguePrefix.includes("notfound"))) {
    body.classList.add('hard-cut') // needed 4 the static sound to not break
    moveTo("/local/uncosm/surfacerunning/")
    body.classList.remove('hard-cut')
}

// MEMORY HOLE
document.addEventListener('corru_entered', () => {
    if (page.path == '/local/uncosm/where/') {
        env.uncode = {
            input: content.querySelector('#code'),
            enter: () => { // sorry mods that change this!
                let value = env.uncode.input.value.toLowerCase().replaceAll(".", "").replaceAll("/", "")

                if (value.length) {
                    env.uncode.input.blur()
                    cutscene(true)
                    play('destabilize', 0.5)
                    ratween(env.bgm, 0.1)
                    content.classList.add('memorydive')

                    if (!check("hub__funfriend-ah1") && value == "recosm") {
                        //fuck you lol
                        location.href = `/img/sprites/obesk/larval/larval7.gif`
                    }

                    if (swup.cache.exists(`/local/uncosm/${value}/`)) {
                        setTimeout(() => {
                            cutscene(false)
                            moveTo(`/local/uncosm/${value}/`)
                        }, 4000)
                    } else {
                        fetch(`/local/uncosm/${value}/`).then(resp => {
                            if (resp.status == 404) {
                                cutscene(false)
                                startDialogue('wrong')
                            } else {
                                setTimeout(() => {
                                    cutscene(false)
                                    moveTo(`/local/uncosm/${value}/`)
                                }, 4000)
                            }
                        })
                    }
                }
            }
        }
    };
})