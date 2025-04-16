//javascript:(function(){addResources(["https://genseot.github.io/mods/surfacerunning.js"]), play("criticalError", 3.5)})();
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
			title: "..__SURFACE_RUNNING__..",
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

// DIALOGUE
// kazzanesche vel zakori
env.dialogueActors["kaz"] = {
    image: "/img/sprites/obesk/larval/something1.gif",
    type: "thoughtform portrait-contain obesk qou portrait-dark loose-thought",
    voice: ()=>play('talkgal', 0.7),
    player: true,
    name: "kaz"
}
// yankani vel metvi
env.dialogueActors["yan"] = {
    image: "/img/sprites/obesk/larval/larval2.gif",
    type: "thoughtform portrait-contain portrait-darkripple larval qou loose-thought",
    voice: ()=>play('talk', 1.3),
    name: "yan"
}
// vakallkorik kiv kazani
env.dialogueActors["vak"] = {
    image: "/img/sprites/obesk/larval/larval5.gif",
    type: "thoughtform portrait-contain portrait-darkripple obesk larval loose-thought",
    voice: ()=>play('talk', 2),
    name: "vak"
}
// coordinator 
env.dialogueActors["coordinator"] = {
    image: "/img/sprites/obesk/larval/larval6.gif",
    type: "thoughtform portrait-contain portrait-darkripple obesk larval loose-thought",
    voice: ()=>play('talk', 0.8),
    name: "coordinator"
}
// might or might not use idk
env.dialogueActors["evil"] = {
    type: "obesk qou portrait-contain portrait-blocker mutter",
    voice: ()=>play('scarydoia', 0.7)
}

// RESPOBJS
env.dialogues.chapterselect = generateDialogueObject(\`
RESPOBJ::
    RESPONSES::sys
        chapter one<+>intro
        chapter two<+>bone
            SHOWIF::"bone"
        chapter three<+>eyes
            SHOWIF::"eyes"
        chapter four<+>claws
            SHOWIF::"claws"
        chapter five<+>ichor
            SHOWIF::"ichor"
        chapter six<+>light
            SHOWIF::"light"
        end stream<+>END
            EXEC::moveTo("/local/depths/")
\`)
env.dialogues.chapterselectdemo = generateDialogueObject(\`
RESPOBJ::
    RESPONSES::sys
        chapter one<+>intro
        chapter two<+>bone
        end stream<+>END
            EXEC::moveTo("/local/depths/")
\`)


// READING			
env.dialogues["reading"] = generateDialogueObject(\`
start
    sys
        ATTENTION::'memory stream located'
        ATTENTION::'SURFACE RUNNING';'by GENSEOT'
        NOTICE::'select chapter'

    RESPOBJ::chapterselectdemo
    
loop
    sys 
        NOTICE::'select chapter'

    RESPOBJ::chapterselectdemo

intro
    sys
        ATTENTION::'chapter one';'introduction'

    sourceless
        i trudge along the muddy banks of the river, my companions close behind me
        the mud clings to my feet like the grip of an akozak, but i pay it no heed
        my quick and nimble footsteps outmach the mud's grasp
        as my companions stumble and curse behind me, i slow down my pace

    yan
        AøI+ÈHA!

    sourceless
        yan tumbles into the mud, scattering their sachel of cysts
        i giggle a little
        it is always a delight to see others get twisted in the river's banks

    kaz
        never been on the surface before, cavern-crawler?

    sourceless
        they sigh at my comment, saying nothing
        they continue to clean and return the cysts to their proper place

    vak
        come on, we should not keep stopping like this while it is still clear-sky
        the eye still blinks

    sourceless
        we travel along the yuzku river 
        i have known this river all my life
        i have hunted, travelled, and lived alongside it
        i know its secrets - and it knows mine

    vak
        ready, yan?

    yan
        yes, let us keep going
        how long until we reach the spire, kaz?

    kaz
        judging by the distance - a few more θgazes 

    sourceless
        across the horizon - the spire lies
        it drapes the skies around it in its black tempest, obscuring velzie's gaze
        even here, we can see the cracks of lightning within its storm
        but beyond it - our destination awaits

    yan
        then that should put us several θgazes to gozazni - right, vak?

    vak
        seems like it to me

    sourceless
        it is still a few θwinks before brume-sky falls
        so, we set off once again along the river's banks...
        time whittles away as we travel under velzie's gaze
        as the θblinks pass - i hear my companions bicker behind me as they follow

    yan
        uuugh my back hurts already

    vak
        lighten up, i have been carrying everything else since we left ukazni ozo
        besides, i am the one with the zzepel - i decide when we will rest

    sourceless
        a pause
        i can only assume vak glares at yan

    vak
        before you ask, now is not that time

    sourceless
        yan groans

    yan
        not even for a θblink?

    vak
        no
        the faster we arrive, the faster we get back home 

    sourceless
        and with that, we continue in silence

    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("bone", true)

    RESPONSES::sys
        continue<+>bone
        return to chapter select<+>loop

bone
    sys
        ATTENTION::'chapter two';'bone'

    sourceless
        we walk along the length of the yuzku river, towards its spire
        for now, we have settled upon travelling in a single-file line
        i lead everyone behind me--of course--i know this part of the river quite well
        vak follows at the rear, their dull-pulse rifle shouldered, yet they keep it ready
        and, much to their complaint, yan stands between us 
	
    yan
        seriously?
        you walk much too fast to be behind me
 
    vak
        i need to be able to see both of you
        if you get attacked by something--velzie's eye cast down--i will need to be able to react quick enough
        besides, i can take care of myself back here
        have you seen me miss a shot? hehe

    sourceless
        as we press on, brume-sky falls
        the skies become clouded and dark above us, cloaked in shadow
        only a little of the light beyond velzie penetrates through the veil

    kaz
        we should probably stop here
        vak, what do you think?

    vak
        looks good enough - we might make it to the spire in two θgaze's time, actually
        i will prepare the zzepel
        everyone, gather around

    yan
        finally

    sourceless
        we gather close around vak
        she reaches over her shoulder and activates the zzepel
        it extends its claws, reaching up and plunging into the earth -
        encasing us in a black shell, devoid of light, for only a moment
        the lights flick on, illuminating our small haven
        we collectively sigh as we sit against the walls of the zzepel
        it is a little tight, but we enjoy each other's company
        what choice do we have, anyway? 
        we must work with one another, or die
        such is the life of a surface-runner like myself

    kaz
        our work is not done just yet, everyone
        yan, vak, take stock of everything you have
        i will be speaking with our coordinator in the meantime

    sourceless
        yan and vak both get to work
        they open their bags and sachels, taking cysts out, putting them in, checking their tools, our weapons, everything we have brought
        for me, though, i take out my dullvoice reciever
        i carefully affix it to my receptor, and try to reach out to our coordinator
        a tir, if i can remember...
        ah, there he is

    coordinator
        great gaze, kazzanesche, how beholds you?

    kaz
        great gaze! we have been doing quite well
        we are about two or three θgazes from the spire
        no interruptions to our journey yet
        velzie smiles upon us, i suppose

    coordinator
        that is good
        and your companions?

    kaz
        we are all well, no one is hurt

    coordinator
        good, good
        i trust you have not lost any of the cysts you are meant to deliver?
        have in sight they are critical to your mission

    kaz
        mine are all accounted for
        let me check with the rest of my team
        spare me a blink

    sourceless
        with an impulse, i draw away from the dullvoice

    kaz
        vak, is everything accounted for?

    vak
        everything is fine for me
        there might be a problem with my dullvoice, though
        i should be able to get it fixed

    kaz
        that is fine, i can lend you mine if needed
        what about you, yan?

    yan
        same here
        though i might have lost one of my satik cysts

    kaz
        we can take that loss, do not worry

    yan
        i suppose so

    sourceless
        i turn my gaze inwards, again, to the dullvoice

    kaz
        everything important is accounted for

    coordinator
        may velzie smile upon you
        before we conclude, your team seems to be around three θgazes before gozazni
        it seems a secri-wind is due to pass near that region from the south in about six θgazes
        try to make it back to the spire before it passes 
        
    kaz
        that is a little troubling
        though we should be able to get back to where we are now by then

    coordinator 
        that would be desirable if possible
        that concludes our check-in, then

    kaz
        alright
        keep velzie entertained for me 

    coordinator
        i will
        do not misstep

    sourceless
        i cut off the connection
        i momentarily sit in the silence before returning the cyst to my bag
    
    yan
        is everything alright?
        did the check go well?

    kaz
        yes, yes, the check went well
        we are tight within velzie's gaze, though
        our coordinator says that a secri-wind will pass near gozazni in around six θgazes
        though, we are on track to be at gozazni in three θgazes

    vak
        hmm we should be fine then

    kaz
        that is what i am thinking
        anything else?

    yan
        well--

    vak
        no, yan, we will not be caught in the winds
        none of us will be infected

    yan
        finee 
        if we do get infected though...
        you owe me a receptor curl

    vak
        over my dead body

    sourceless
        i snicker a little 

    kaz
        okay, calm down you two
        is there actually anything anyone wants to say?

    sourceless
        they both relax their receptors

    vak
        nothing from me

    yan
        no

    kaz
        that is good
        vak, you have the food, yes?

    vak
        indeed i do
        
    sourceless
        vak rummages through one of her many bags
        though her receptors are now rigid in... nervousness?

    vak
        i-
        i was thinking
        we should sit before the river
        it should be dark enough for us to see its lights
        and with how quiet everything has been on our journey so far
        it seems safe for now
        this might be the last time we can see it like this before we have to run towards gozazni and back home
        just the three of us on the surface...
        i have saved a little dried ozoilaki for a special occasion 
        and what better time than now?
        
    sourceless
        wow
        this is... unexpected
        she usually is not like this
        does she, perhaps, trust both of us?
        she relaxes her receptors, though they are twinged a little with - fear?
               
    yan
        i do not know...
        would doing this not be dangerous?
        
    vak
        it might be
        but i have protected you thus far, have i not?
        you two know you will be safe with me
        
    sourceless
        she is not wrong
        i contemplate upon this for a moment - though it feels like a θwink within the zzepel's walls
        vak looks at both of us expectantly
        well... velzie always smiles upon those who take risks
        
    kaz
        i trust you, vak
        and so i will trust you enough for this
         
    yan
        if kaz trusts you
        then i will, too

    sourceless
        yan mutters something that i cannot hear - though it sounds something like:
        "but please do not get us killed"
        i look at vak again
        she tries not to show it, but her receptors are twisted in unimaginable joy
        as i watch her get ready to deactivate the zzepel i notice her hands slightly shake

    vak
        come close, everyone!

    sourceless
        we gather around her once again
        the zzepel's light blinks off and we are left in darkness, with only one another
        its claws dig up, and back into the zzepel
        i can feel the cold wind of the night, now
        and as i look towards the yuzku river -
        i see it
        the dancing neon lights of the river
        as if so many yuzku were swimming through it
        the currents alight with dozens - no, hundreds of little green sparks
        each one rushing along with the currents, like so many falling stars
        the river gleams, beautifully, under the black-dark skies, under velzie's obscured gaze
        it is only for us, and no one else
        i watch it from where the zzepel once was, vak is the first to move towards the river
        yan and i follow her

    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("bone", true)

    RESPONSES::sys
        return to chapter select<+>loop

/*eyes
    sys
        ATTENTION::'chapter three';'eyes'


    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("claws", true)

    RESPONSES::sys
        continue<+>claws
        return to chapter select<+>loop

claws
    sys
        ATTENTION::'chapter four';'claws'


    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("ichor", true)

    RESPONSES::sys
        continue<+>ichor
        return to chapter select<+>loop

ichor
    sys
        ATTENTION::'chapter five';'ichor'


    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("light", true)

    RESPONSES::sys
        continue<+>light
        return to chapter select<+>loop

light
    sys
        ATTENTION::'chapter six';'light'


    sys
        ATTENTION::'conclusion of memory stream'

    RESPONSES::sys
        return to chapter select<+>loop*/
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

	// other
	env.definitions[\`jokzi ozo\`] = \`'home';'fortress upon jokzi'\`;
	env.definitions[\`ukazni ozo\`] = \`'surface city';'mountainous fortress';'origin of dull pulse weaponry'\`;
	env.definitions[\`uncosm\`] = { type: \`NOTE\`, text: \`'reconstructive translation';'implies non-world'\`};



						
	// page-specific definitions

	// general
	// weather
	env.definitions[\`spirestorm\`] = \`'weather phenomena';'ceaseless violent storm surrounding natural spire'\`;						
	env.definitions[\`clear-sky\`] = \`'partial translation';'inherited description-generated noun'\`;
	env.definitions[\`brume-sky\`] = \`'partial translation';'inherited description-generated noun'\`;
	env.definitions[\`brightwall\`] = \`'weather phenomena';'thick, bright walls of fog upon the earth'\`;
	env.definitions[\`secri-wind\`] = \`'rare weather phenomena';'secri-carrying winds';'possible to infect entire cities if proper precaution is not taken'\`;
	// obeski
	env.definitions[\`ekivik\`] = \`'ethnic implication';'origination from continent';'ekiva'\`;
	env.definitions[\`ekiviks\`] = \`'ethnic implication';'origination from continent';'ekiva'\`;
	env.definitions[\`vaznian\`] = \`'ethnic implication';'origination from continent';'vazni'\`;
	env.definitions[\`vaznians\`] = \`'ethnic implication';'origination from continent';'vazni'\`;
	env.definitions[\`zevazni\`] = \`'cave-city central to vazni';'corrucystic revolution origin'\`;
	env.definitions[\`vazni\`] = \`'continent';'home';'central to inhabitable zone'\`;
	env.definitions[\`oltazni\`] = \`'vaznian cave-city'\`;
	env.definitions[\`vaznian\`] = \`'ethnic implication';'origination from continent';'vazni'\`;
	env.definitions[\'yuzku river\'] = \`'great river';'splits the continent of vazni';'known for its bioluminescent lights, flourishing at night';'like yuzku'\`;
	env.definitions[\'gozazni\'] = \`'vaznian gulch-city';'recently opened communications, unaware of the corrucystic revolution';'my old home';'our destination'\`;
	// colliqualisms 
	env.definitions[\`tir stumbling into their research chamber\`] = \`'common myth';'intoxicated tir knocked over corru container and fell into it'\`;
	env.definitions[\`velzie's eye cast down\`] = \`'common idiom';'even velzie watches in shock'\`;
	env.definitions[\`keep velzie entertained\`] = \`'common phrase';'religious implication';'implies wish for safe journey'\`;
	env.definitions[\`spike in the heel\`] = \`'common idiom';'persistent issue'\`;
	env.definitions[\`kelnit\`] = \`'derogatory';'incompetent fighter'\`;
	env.definitions[\`have in sight\`] = \`'common idiom';'remember'\`;
	env.definitions[\`how beholds you\`] = \`'common idiom';'religious implication';'how does velzie's gaze behold you'\`;
	env.definitions[\`velzie smiles\`] = \`'common idiom';'god is entertained with antics';'religious implication'\`;
	env.definitions[\`the eye still blinks\`] = \`'common idiom';'time is limited'\`;
	env.definitions[\`no tendril left to rot\`] = \`'common idiom';'all is harvested'\`;
	env.definitions[\`velzie's smile upon\`] = \`'common idiom';'subject entertains god with antics';'religious implication'\`;
	env.definitions[\`great gaze\`] = \`'common idiom';'velzie's great gaze upon us';'wishes of good luck'\`;
	env.definitions[\`how beholds you\`] = \`'common idiom';'religious implication';'how does velzie's gaze behold you'\`;
	env.definitions[\`velzie's eye cast down\`] = \`'common idiom';'even velzie watches in shock'\`;
	env.definitions[\`spare me a blink\`] = \`'common idiom';'please wait for me'\`;
	env.definitions[\`do not misstep\`] = \`'common idiom';'do not make mistakes'\`;
	env.definitions[\`tight within velzie's gaze\`] = \`'common idiom';'velzie watches closely or with interest'\`;

	// time
	env.definitions[\`θradiant\`] = \`'time period';'segments around the eye of velzie';'few within eyes';'each heralds a new season'\`;
	env.definitions[\`θradiants\`] = \`'time period';'segments around the eye of velzie';'few within eyes';'each heralds a new season'\`;

	// obesk-related
	// tech
	env.definitions[\`zzepel\`] = \`'back-mounted multi-purpose surface utility';'popular for veilk camping'\`;
	env.definitions[\`dullvoice\`] = { type: \`NOTE\`, text: \`'partial translation';'inherited description-generated noun'\`};
	env.definitions[\`sfer\`] = \`'refined corrucystic fuel/food';'currency'\`;
	env.definitions[\`zuzucri-masks\`] = \`'corrucystic treatment for zuzucri infestation';'partial translation';'inherited description-generated noun'\`;
	env.definitions[\`corruskivi\`] = \`'traditional maintenance tool';'passes through corru effortlessly'\`;
	// clothing
	env.definitions[\`valika\`] = \`'wide conical headwear';'surface camouflage'\`;
	env.definitions[\`jekzi\`] = \`'vaznian traditional garment';'robe-like'\`;
	// other
	env.definitions[\`surface voice\`] = \`'specialized volume management';'fast and enunciated'\`;
	env.definitions[\`okizika\`] = \`'ekivik surface monument';'holy site'\`;
	env.definitions[\`parii\`] = \`'veilk bone'\`;
	env.definitions[\`terrible life\`] = \`'parasite';'reanimation'\`;
	env.definitions[\`zzoust\`] = \`'party drink';'name not properly spoken unless shouted'\`;
	env.definitions[\`veilks-blood\`] = \`'common beverage';'not blood'\`;
	env.definitions[\`new-fall\`] = \`'celebration of veilk-fall';'inherited description-generated noun'\`;
	env.definitions[\`ozoilaki\`] = \`'city heart';'fastest-rotting veilk organ';'named for practice of consuming rapidly in celebration of new veilk-fall'\`;

	// crittas
	env.definitions[\`akozak\`] = \`'burrowing slime';'sinkhole';'many arms'\`;
	env.definitions[\`celki\`] = \`'veilk parasite';'food'\`;
	env.definitions[\`dog\`] = { type: \`NOTE\`, text: \`'partial translation';'implied closest cultural equivalent'\`};
	env.definitions[\`veilk\`] = \`'surface fauna';'foundation of entire ecosystem';'enormous and endless'\`;
	env.definitions[\`guktik\`] = \`'predator';'bladed arms';'cooked flesh goes well with zzoust'\`;
	env.definitions[\`cavernguard\`] = { type: \`NOTE\`, text: \`'partial translation';'inherited description-generated noun'\`};
	env.definitions[\`yuzku\`] = \`'sluggish bioluminescent scavengers';'intentionally cultivated in veilk parasite husks for lighting';'fatal if consumed'\`;

	// other
	env.definitions[\`kalstik\`] = { type: \`TRANSLATION FAILED\`, text: \`CAUSE:'no equivalent internal meaning';'no relevant inherited context'::ROMANIZATION SUCCESSFUL\`};

			
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
	startDialogue("reading")
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
  "title": "..__SURFACE_RUNNING__..",
  "name": "SURFACE RUNNING",
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
