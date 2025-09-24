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
    		background: black;
	}

	body.in-menu #content {
    		transform: unset !important;
	}

	.background {
		animation-name: fadein; animation-duration: 3s;
		position: absolute; width: 100%; height: 100%;
	}
	@keyframes fadein {
		0% {opacity: 0;} 100% {opacity: 1;}
	}

	.oldbackground {
		animation-name: fadeout; animation-duration: 1.5s;
		position: absolute; width: 100%; height: 100%;
	}
	@keyframes fadeout {
		0% {opacity: 1;} 100% {opacity: 0;}
	}
	</style>

// SCRIPT
	<script id="PageData">
                var changebackground;
    		surface = \`<div class='background' style='background: url(/img/textures/ccontours.gif);'></div>\`;
    		zzepel = \`<div class='background' style='background: url(/img/textures/mcontours.gif);'></div>\`;
    		spirestorm = \`<div class='background' style='background: url(/img/textures/fear.gif);'></div>\`;
		content = document.querySelector('#content')
		body = document.body

		if(typeof page == "object") {
			oldPage = page
		}

		// This script is generated per-page based on jekyll front-matter and other inputs. If you're looking at how stuff was done, be prepared for truly terrible whitespace management. It's prettier when I'm working on it, trust me.
		page = {
			title: "..__SURFACE_RUNNING__..",
			name: "unknown",
			dialoguePrefix: "sec",
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
			sprite: {__default: [50, 153000, true]}
		}),
	
				
		// onload stuff initialisation
		onLoaded: ()=>{	
			document.querySelectorAll('#grid-ref').forEach(e=>e.remove())
			document.getElementById("content").insertAdjacentHTML("beforeend", "<div id='background' style='position: absolute; width: 100%; height: 100%;'></div>")
			background.insertAdjacentHTML("beforeend", surface);
    			background = document.getElementById("background");
			body.setAttribute('page', page.name)
			content.setAttribute('page', page.name)
			document.querySelector('#static .enter').setAttribute('page', page.title)
			document.scrollingElement.scrollTop = 0
			updatePreferenceAttributes()
			//dynamically inserted

		// MUSIC
		env.music = {
			surface: new Howl({
				onload: function () {page.howls.push(this)},
				src: ['/audio/hub.ogg'],
				preload: true,
				loop: true,
				rate: 0.75,
				sprite: {__default: [50, 153000, true]}
			}),

			zzepel: new Howl({
				onload: function () {page.howls.push(this)},
				src: ['/audio/hub.ogg'],
				preload: true,
				loop: true,
				rate: 0.4,
				sprite: {__default: [50, 153000, true]}
			}),

			spirestorm: new Howl({
				onload: function () {page.howls.push(this)},
				src: ['/audio/november.ogg'],
				preload: true,
				loop: true,
 				rate: 0.5,
				sprite: {__default: [50, 106500, true]}
			}),

			kazswarm: new Howl({
				onload: function () {page.howls.push(this)},				
				src: ['/audio/solaundying_bonus.ogg'],
				preload: true,
				loop: true,
				rate: 0.65,
				sprite: {__default: [0, 160000, true]}
			}),
			yanswarm: new Howl({
				onload: function () {page.howls.push(this)},
				src: ['/audio/404.ogg'],
				preload: true,
				loop: true,
				rate: 0.6,
				sprite: {__default: [0, 42630, true]}
			}),
			vakswarm: new Howl({
				onload: function () {page.howls.push(this)},
				src: ['/audio/solamiltza.ogg'],
				preload: true,
				loop: true,
				rate: 0.75,
				sprite: {__default: [0, 160000, true]}
			}),

			doomed: new Howl({
				onload: function () {page.howls.push(this)},
				src: ['/audio/404.ogg'],
				preload: true,
				loop: true,
				rate: 0.1,
				sprite: {__default: [0, 42630, true]}
			})
		}



// DIALOGUE
// kazzanesche vel zakori
env.dialogueActors["kaz"] = {
    image: "/img/sprites/obesk/larval/something1.gif",
    "type": "thoughtform portrait-contain portrait-darkripple larval loose-thought",
    voice: ()=>play('talkgal', 0.7),
    player: true,
    name: "kaz"
}
env.dialogueActors["kaznp"] = {
    image: "/img/sprites/obesk/larval/something1.gif",
    "type": "thoughtform portrait-contain portrait-darkripple larval loose-thought",
    voice: ()=>play('talkgal', 0.7),
    name: "kaznp"
}
// yankani vel metvi
env.dialogueActors["yan"] = {
    image: "/img/sprites/obesk/larval/larval2.gif",
    type: "thoughtform portrait-contain portrait-darkripple obesk qou loose-thought",
    voice: ()=>play('talk', 1.3),
    name: "yan"
}
env.dialogueActors["yanp"] = {
    image: "/img/sprites/obesk/larval/larval2.gif",
    type: "thoughtform portrait-contain portrait-darkripple obesk qou loose-thought",
    voice: ()=>play('talk', 1.3),
    player: true,
    name: "yanp"
}
// vakallkorik kiv kazani
env.dialogueActors["vak"] = {
    image: "/img/sprites/obesk/larval/larval5.gif",
    type: "thoughtform portrait-contain portrait-darkripple obesk larval loose-thought",
    voice: ()=>play('talk', 2),
    name: "vak"
}
env.dialogueActors["vakp"] = {
    image: "/img/sprites/obesk/larval/larval5.gif",
    type: "thoughtform portrait-contain portrait-darkripple obesk larval loose-thought",
    voice: ()=>play('talk', 2),
    player: true,
    name: "vakp"
}
// coordinator 
env.dialogueActors["coordinator"] = {
    image: "/img/sprites/obesk/larval/larval6.gif",
    type: "thoughtform portrait-contain portrait-darkripple obesk larval loose-thought",
    voice: ()=>play('talk', 0.8),
    name: "coordinator"
}

// RESPOBJ
env.dialogues.chapterselect = generateDialogueObject(\`
RESPOBJ::
    RESPONSES::sys
        chapter one: introduction<+>intro
        chapter two: bone<+>bone
            SHOWIF::"bone"
        chapter three: eyes<+>eyes
            SHOWIF::"eyes"
        chapter four: claws<+>claws
            SHOWIF::"claws"
        chapter five: ichor<+>ichor
            SHOWIF::"ichor"
        chapter six: light<+>light
            SHOWIF::"light"
        reset chapters<+>resetconfirm
        end stream<+>END
            EXEC::moveTo("/local/depths/")
\`)


// READING			
env.dialogues["reading"] = generateDialogueObject(\`
start
    sys
        ATTENTION::'memory stream located'
        ATTENTION::'SURFACE-RUNNING';'contest submission by GENSEOT'
        NOTICE::'select chapter'

    RESPOBJ::chapterselect
    
resetconfirm
    sys
        ATTENTION::'reset chapter data?'
   
    RESPONSES::sys
        yes<+>reset
        no<+>loop

reset
    sys
        ATTENTION::'chapter data has been reset'
            EXEC::change("bone", false);change("eyes", false);change("claws", false);change("ichor", false);change("light", false);

    RESPONSES::sys
        return to chapter select<+>loop

loop
    sys 
        NOTICE::'select chapter'
            EXEC::changeBgm(env.music.surface);changebackground='surface';BackgroundSwap();

    RESPOBJ::chapterselect

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
        yan tumbles into the mud, scattering their satchel of cysts
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
        across the horizon - the spire lies upon the alkali mountains
        it drapes the skies around it in its black tempest, obscuring velzie's gaze
        cloaking the entirety of the mountain range on this side of the river
        even here, we can see the cracks of lightning within its storm
        but beyond it - our destination awaits

    yan
        then that should put us a couple θgazes to kozali - right, vak?

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
        lighten up, i have been carrying everything else since we left azozali
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
            EXEC::change("bone", true);

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
        looks good enough - we might make it to the spire in two θgazes' time, actually
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
            EXEC::changeBgm(env.music.zzepel);changebackground='zzepel';BackgroundSwap();
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
        they open their bags and satchels, taking cysts out, putting them in, checking their tools, our weapons, everything we have brought
        for me, though, i take out my dullvoice reciever
        i carefully affix it to my receptor, and try to reach out to our coordinator
        a tir, if i can remember...
        ah, there he is

    coordinator
        great gaze, kazzanesche, how beholds you?

    kaz
        great gaze! we have been doing quite well
        we are about two θgazes from the spire
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
        before we conclude, your team seems to be four θgazes before kozali
        it seems a secri-wind is due to pass near the region from the south in six θgazes
        
    kaz
        that is troubling
        i will speak about it with the rest
        hopefully it is possible to get to kozali quick enough

    coordinator 
        for the sake of you and your team, we hope it is
        that is all, then

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
        our coordinator says that a secri-wind will pass near kozali in six θgazes

    sourceless
        at these words, everyone falls silent
        i know what they must be thinking -
        "a secri-wind? here? now?"
        the air is heavy with a silent dread
        we exchange glances, our receptors twisted in anxiety

    kaz
        they say we are four θgazes before kozali
        so we should plan to get there--as fast as we can--before we get caught beyond the spire by the secri-wind...

    sourceless
        ...but that would require us to take a new route
        one faster towards kozali, even one θgaze faster...
        rather than one around the alkali mountains, we will need to take one through the spirestorm
        a long sigh escapes my lips

    kaz
        though we would need to take a faster route 
        and we do not have one - 
        unless we travel through the spirestorm

    yan
        are you sure?
        would it not be dangerous to travel through?

    kaz
        yes, it might be
        though the spirestorm should not be as violent this θradiant
        but, even if it is, what other choice do we have?
        even if the secri-wind does not pass through kozali, it might cut us off on one side or the other of the spire
        then we would almost certainly be infected if we attempted to cross

    vak
        even so - should it not be safe to stay in kozali?
        if we arrive, of course

    kaz
        it is too uncertain
        we do not know how defensible their position is against one -
        their city is exposed to the outside and might not even have a deeper system to take refuge in
        if the secri-wind passes through, then we will all almost certainly fall into a terrible life...
        but if it does not, then we will be cut off from our route home for quite a time...
        it- it is a dance upon veilk
        we just- we do not know
        anything can happen

    sourceless
        i grip my head
        too many uncertainties, too many risks, too much left to velzie
        i begin tapping my head against the wall of the zzepel
        x¶›¢Ã°! ]°ù*[‘%!
        i notice yan and vak conversing among themselves
        but my mind is too clouded to make out what they say
        and soon, i am too deep within my mind to notice what is happening

    yan
        K3Ã0;‡Z?

    sourceless
        all the possiblities rush through my head
        i try to undo the knots, see what may happen

    vak
        H|—E®s²7Y•!

    sourceless
        we continue on this path... we stay at kozali... both lead to the same outcome...
        we will be cut off returning, likely... 
        ...and at worst, infected, maybe... 
        ...wait, no infection can be almost-certain if the winds blow just right...

    vak 
        ‡*KÄZ÷)Z@NÊ=¥S¢HÈ_:!

    sourceless
        rather, if we cut through the spirestorm... 
        injury is likely... but we make it to kozali with enough time left...
        ...but we will have to go through it once again...
        ...better than the secri-wind?... unsure...

    vak
        --ZANESCHE!!
        HEY!!

    kaz
        ìŠŸ=÷)¥!
        both of you! get your hands off of me!!

    yan
        oh!! sorry

    vak
        i am <em>sorry</em>!
        we tried to get your attention, but you were not responding!
        you were gazing like velzie, staring out into the distance
        but! that is besides the point!
        yan, would you...?

    yan
        oh, yes
        we have both decided...
        the spirestorm - it is probably the best option
        if we can get to kozali and back even a θgaze faster, then we should be alright 

    vak
        but still, it will be uncertain
        a dance upon veilk - as you said

    sourceless
        so this is what they have chosen 
        i can make this work
        though the earth around the spire is craggy and clifflike, the alkali mountains rising high -
        i must make this work

    kaz 
        then it is decided
        we will head towards the spirestorm

    sourceless
        i hope we do not come to regret this decision

    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("eyes", true);changebackground='surface';BackgroundSwap();changeBgm(env.music.surface);

    RESPONSES::sys
        continue<+>eyes
        return to chapter select<+>loop

eyes
    sys
        ATTENTION::'chapter three';'eyes'
        CONTENT WARNING::'contains description of animal death & remains'

    sourceless
        i awaken splayed upon the floor of the zzepel
            EXEC::changeBgm(env.music.zzepel);changebackground='zzepel';BackgroundSwap();
        the lights are bright - it must be clear-sky now
        it is silent
        it seems neither yan nor vak have awoken yet
        i drag my weary body up, resting upon the wall, careful not to disturb either of them 
        last night was... difficult
        i should let them rest for a while longer
        but i, myself, stayed up late into the night planning the route within the spirestorm
        i retrace the steps we should take, again and again and again
        i check my bags once, twice, thrice to see if i have everything i need
        the cysts we need to deliver to those in kozali
        the weapons i and yan will use--vak has her rifle, of course 
        the rest: aima cysts, satik cysts... it goes on
        i can barely afford for anyone to be injured within the spirestorm
        i might never forgive myself if someone were to die
        i must be prepared
        ...
        wait - has the ground been shaking?
        i have not noticed this before, but it becomes ever more apparent
        what is this?
        then suddenly - a great crash from outside the zzepel!
            EXEC::play("stab", 0.5)
        vak and yan jolt upright together
        vak snatches her rifle from beside her
        
    yan
        what is going on? 
        what was that?

    vak 
        quiet!

    sourceless 
        the ground shakes - our zzepel shudders
        the trembling blows do not relent
        but - they yield to a sort of... pattern?
        a pattern of grand, trembling -

    kaz
        tendril-steps
        it is a veilk-herd

    yan
        this close?

    vak
        i mean - they could be beyond the river
        do you know which direction you are facing?

    yan
        ... no
    
    kaz
        hehe
        great gaze you two

    sourceless
        our morning routine begins - we all mostly work in silence
        as silent as it can be as the veilk-herd passes us, their tendril-steps shaking the earth 
        supplies, food, it is a blur to me...
        we gather around vak, once again
        the zzepel's light blinks off - we are left in a deep darkness
        then its claws dig up from the earth and plunge back into the zzepel
        i am hit with the blinding light of the surface
            EXEC::changeBgm(env.music.surface);changebackground='surface';BackgroundSwap();
        it takes us all a moment to recover
        the ground quakes as we stand on the surface
        across the river, almost as tall as the spire across the horizon - a herd of veilk
        they stretch tall into the sky, like moving spires
        their eyes dart around the surface - looking, observing, searching?

    yan
        look - that one in the centre

    sourceless
        yan points out the one in the centre of the herd, the tallest
        its receptors--like tree-branches--stretch high, crowned with fat celki
        its eyes are multicoloured - cyan, magenta, yellow
        all of them blink and dart around and sweep across the surface
        one eye, however, is pinned upon us
        watching like velzie's ceaseless gaze above

    vak
        they do not usually do that, do they?

    yan
        not unless they feel threatened
        though i am not sure if this one does?
        the herd is moving away from us, so...
        probably not
        maybe it is sick?

    sourceless
        the veilk-herd is travelling upriver, where we have already passed
        as their tendril-steps shake the ground less and less, we head for the spire
        θwinks pass as we travel downriver, the fleeting eye of velzie ever-watching our journey...
       
    yan
        hey!

    vak
        what?
        i did not even do anything this time

    yan 
        no, no 
        on the shore
        fairy-eyes!

    sourceless
        vak and i watch as yan scrambles towards the shore
        they lift up a fairy-eye, waving it towards us

    yan
        there are two more here!!
    
    sourceless
        yan returns with an armful of fairy-eyes, showing us before they put them in one of their sacks

    yan
        i could make amulets for the three of us...
        later, of course

    kaz
        are you sure?
        i have not seen you bring any of the tools necessary

    yan
        i can get by without
        i have made some for you before, do you not remember?

    kaz
        hm, i do
        that was when we were in azozali, though
        not on the surface

    vak
        okay, both of you 
        we should keep going

    sourceless
        we trudge on, again, in the banks of the river
        it is mostly uneventful as we travel closer to the spirestorm
        
    vak
        hey, hold on
        get behind something
    
    sourceless
        we stand on the top of a small hill
        yan and i rush to take cover behind one of the many rock outcroppings near vak

    vak
        do you see it?
        over there, near the bottom of the hill -
        a lone guktik

    kaz
        and what of it?
        it is heading away from the spirestorm
        we will not even be in its path by the time we get down...
        wait - do you want to shoot it?

    vak
        well, obviously
        i am behind a rock with a rifle
        what else were you expecting me to do?
        
    yan
        would you not alert anything else if you shot it?

    vak
        i do not think so
        did you see anything else?
        tell me if you do 

    yan
        hmm 
        nothing else it seems

    vak
        right
    
    sourceless
        vak takes a moment to sweep across the landscape as we stand above...
        it seems to her like there is nothing else
        vak sets up the rifle on the rock, training its barrel towards its target
        yan and i hold our breath, awaiting the pulse...
        and she fires -
            EXEC::play("shot", 1.15)
        a bright white ---
        then nothing at all
        a dessicated corpse lies at the foot of the hill
        steam rises from its body, from where its flesh was seared from the blast 

    vak
        ha
        still got it 

    sourceless
        vak hurries down the hill
        yan and i follow
        as we get to the base, we stand afar as vak approaches the corpse
        vak pokes and prods at it inquisitively, though they are certain it is dead already
        
    vak 
        definitely dead 
        it is clear!
        sorry, just making sure

    sourceless
        yan crouches near the remains, examining the corpse
        as they do so, they point out certain parts of the anatomy to us 

    yan 
        hm
        this one seems to be an adult - as far as i can make out, at least 
        this could have given us trouble if it spotted us 
        look at its claw - long and sharp, its hard chitin could work as a blade 
        this one is a tooth - see how it hooks on the end? once something is caught within, it cannot escape 
        that one is a leg! we could have a proper feast tonight, hehe

    sourceless
        i observe yan from behind
        under their breath, they question the corpse
        
    yan 
        but why so close to a spirestorm?
        i have not seen an adequate enough feeding-ground for anything near one 
        it could not have come from the opposite side of the river - it is much too long to allow for crossing 
        did it come from within?
        how strange...

    sourceless 
        yan taps my leg

    yan
        kaz - knife?

    kaz
        oh yes

    sourceless
        i hand them one of my parii-knives
        yan unsheathes it and quickly begins slicing select parts of the guktik

    yan
        ...torso... leg...
        ...arm... claw...

    sourceless
        vak and i watch yan cut the bone and slice the flesh of the guktik
        they harvest any viable part that can be eaten or used otherwise
        i watch, impressed, at their efficiency
        yan finishes, their bag bulges with what they have collected
        they sheath my knife and pat their hands upon their clothes
        
    yan
        kaz, your knife

    kaz
        no, no
        you can keep it - you will need it later

    sourceless
        they nod, attaching the knife to their belt
        
    vak
        so - 
        we can probably travel a little closer to the spire, here
        brume-sky will fall in, what, one or two θwinks 
        
    kaz
        that should be fine 
        just not too close, though
        we should be in a more defensible position here

    vak
        sure
        do you see that cliff-face over there? facing the river?
        i think that should be good

    kaz
        it works
        let us go, then

    sourceless
        we set off as the spire rises high, its storm choking the horizon
        ...
        we arrive at our destination

    vak
        around me, everyone

    sourceless
        we gather around
        the zzepel's claws plunge up into the sky - then down into the earth
        the lights flicker on
            EXEC::changeBgm(env.music.zzepel);changebackground='zzepel';BackgroundSwap();
        our cramped haven, once again
        
    kaz
        you know your duties, everyone

    sourceless
        yan and vak nod in assent
        i affix my dullvoice to my receptor
        the coordinator...

    coordinator
        great gaze, kazzanesche 
        i trust everything is well?

    kaz
        great gaze my friend
        yes - it is the same as always
        it has been uneventful; no injuries, no losses

    coordinator
        i would expect nothing less of you
        your cysts?

    sourceless
        i pull away from the dullvoice
        i affirm with kaz and yan - nothing gone
        i return

    kaz
        all accounted for

    coordinator
        good, good
        as you know, the secri-wind is due in five θgazes
        are you sure you can make to kozali in time?

    kaz
        yes, yes, we have rerouted
        we decided to travel through the spirestorm
        it should cut our time by a θgaze to kozali and back
        as we will be cutting through the alkali mountains, rather than going around
        enough to bypass the secri-wind--
  
    coordinator
        wait- stop
        the <em>spirestorm</em>?
        are you sure you can travel through it? <em>twice</em>?
        you know of the dangers, correct? 
        <em>especially</em> after last--

    kaz
        yes, yes, i understand
        but is there anything else we can do?
        the winds could cut us off on our way back 
        we could even be infected!
        i would rather risk death within the storm than a terrible life

    coordinator
        <em>kazzanesche</em>
        do you know what you are talking about?
        all of your companions could die
        <em>you</em> could die
        the storm almost spells the certain death of all of you

    kaz
        the winds do too!!
        <em>you</em> do not know where it will blow either
        it is all up to velzie
        and i would rather have <em>this</em> decision upon my hands - 
        rather than in velzie's

    sourceless
        our coordinator is silent for a moment
        does he not understand the risks of the wind?
        yet he berates me about the risks of the storm 
        it is not like i decided this as i danced upon a veilk
        i know what i am doing 
        i have been through this before, i know what risks to take and what not to

    coordinator
        §Ø%¿\Á
        both of us know i cannot convince you otherwise 
        but <em>please</em> do not try to get everyone <em>and</em> yourself killed
        <em>do not misstep</em>

    sourceless
        the connection is severed
        žØìÉ
        i withdraw from the dullvoice, tearing it off my receptor
        
    yan
        hey, kaz?
        what happened?

    vak
        you were looking... stressed
        is everything alright?

    kaz
        Kô¶Ð
        our coordinator does not approve
        he does not want us to go into the spirestorm
        it is only five θgazes until the secri-wind tears through this place!
        and he is not even <em>attempting</em> to help
        after everything... ugh...

    sourceless
        i slump back into the wall of the zzepel
        my head is raised towards the ceiling

    vak
        ... right 
        do you... do you need anything?
        i was watching you today and you were...
        stressed--like, really stressed--and a little... afraid?
        please... tell us if there is anything we can do for you

    yan
        look - i need to be serious
        she is right - <em>we</em> care for you
        you are not alone in your troubles
        we all have to bear the burden if we are to survive here
        you know that more than either of us

    sourceless
        °&Ø¤%
        i do not need this now

    kaz
        i am <em>fine</em>
        i just--

    yan
        you very obviously are not 
        we can both tell
        you need a clear head tomorrow
        it is life or death for all of us - going into the spirestorm
        we need our leader to be capable - if you do not lead, then who will?
        you have been through this many times before, you know that any mistake can and will lead to death
        the surface is unforgiving, and if we want even a chance--

    vak
        yan, that is enough - that is too much
        but they are right kaz
        we need you as our leader
        we need you to be clear-minded and ready 
        so - we thought that if this stress is too much for you...
        you need a break - something to take your mind off of things...
        we decided that we should see the river tonight
        all three of us
        it might be our last chance to, before the storm... our destination...
        do you accept...?
        
    kaz
        i-
        i do not know what to say 
        
    sourceless
        i choke on my words
        all this, for <em>me</em>?
        i- i- what??
        my voice shakes as i speak

    kaz
        um...

    sourceless
        they both watch me expectantly - and nervously
        to see what i will say
        ...

    kaz
        ... yes

    sourceless
        i whisper
        yet they seem to understand

    vak
        gather around me, please

    sourceless
        we gather around vak
        the zzepel's light blinks off and we are left in darkness, with only one another
        its claws dig up, and back into the zzepel
        i can feel the cold wind of the night, now
            EXEC::changeBgm(env.music.surface);changebackground='surface';BackgroundSwap();
   
    vak
        yan, you can go to the river...
        i will talk to kaz for a moment

    yan
        sure

    sourceless
        yan moves towards the river, alone for now
        and as i look towards the yuzku river -
        i see it
        the dancing neon lights of the river
        as if so many yuzku were swimming through it
        the currents alight with dozens - no, hundreds of little green sparks
        each one rushing along with the currents, like so many falling stars
        the river gleams, beautifully, under the black-dark skies, under velzie's obscured gaze
        it is only for us, and no one else
        vak sits beside me

    vak
        thank you... kaz

    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("claws", true);changebackground='surface';BackgroundSwap();

    RESPONSES::sys
        continue<+>claws
        return to chapter select<+>loop

claws
    sys
        ATTENTION::'chapter four';'claws'
        CONTENT WARNING::'contains description of injuries, people & animals being hurt & killed'

    sourceless
        the three of us stand before the storm
        its baleful winds cry out as it rushes past our ears, curling around our receptors 
        the incessant rain beats down hard upon the ground, beating upon the earth like the drummer of a grand festival 
        its cracks of thunder light up the skies - blinding velzie's eye for a moment 
        it is silent between us three
        our receptors are all twisted in anticipation of the coming storm
        each one of us are laden heavy with bags: restoratives--not those for qou, of course--satiks, dull flares; the tools necessary for us to survive
        moments before, we each affixed our dullvoice receivers and found one another in the dull
        i stare into the dark, inky-black of the spirestorm
        i clutch yan's fairy amulet hard - its dead carapace digs into my skin
        i send a pulse through the dullvoice 

    kaz 
        everyone... 
        are we ready?

    vak 
        as ready as i will ever be

    sourceless
        a twinge of dread curls around her receptors -
        she expects a great storm to lie ahead

    yan 
        yes - i think so 

    sourceless 
        that twist in their receptors - i have seen it before...
        it is hope
        
    kaz
        now -  
        weapons, everyone 

    sourceless
        yan and i unsheath our parii-daggers
        vak readies her rifle

    kaz 
        let us head in

    sourceless
        we stride forward into the storm - 
        and we are swallowed whole 
            EXEC::changeBgm(env.music.spirestorm);changebackground='spirestorm';BackgroundSwap();
        the skies wear a mourning-grey veil, only the lightning pierces the deep dark
        we are obscured from velzie's gaze 
        now we are truly alone upon the surface

    kaz
        by my side, everyone 
        do not leave one another's sight at all costs
        if either one of you get lost - use your flares 

    sourceless
        the craggy mountains rise high into the sky - trapping us within the routes between each
        and in the centre - the spire, wreathed in its storm
        it lies in wait, pointed towards velzie
        the rain beats down upon my valika, hard 

    kaz 
        follow me

    sourceless
        the ways between each mountain are varied 
        some may allow for us to travel by one another's side
        and others force us into a single-file line 
        as we do, we hold one another's hands, gripping each other tightly 
        our amulets sway in the wind, like true fairies

    vak 
        ‚[þjy!

    yan 
        what? what? 
        what happened? you are still with us 

    vak
        no- no
        did you see that? 
        something was on that mountain 
        it- i think it crawled away 
        i am not sure if that was... just the storm 
        i do not know 

    kaz 
        vak - are you sure? 
        what did it look like?

    vak 
        it was... 
        it looked like... a guktik
        but there were many - a swarm 
        and i felt... as if something were watching us? 

    yan 
        ƒ}QÞn!
        there should not be anything else here!

    kaz
        which direction did it go?

    vak
        it came from... where the river is, i think
        from the west 
        and it went... towards the spire? 

    yan 
        <em>towards the spire</em>?? 

    sourceless
        this is not supposed to happen
        something in the spirestorm, with us?
        no that should not be possible 
        but...
        going towards the spire?
        øZ%©Ç
        i planned to go near the spire 
        if something is going towards the spire from the river...

    kaz
        then let us give both places a wider berth
        come on, keep going 

    sourceless 
        the gravel beneath our feet shifts uncomfortably 
        but we keep going 
        we travel through the labyrinthine passages towards the east, toward the deeper mountains 
        rocks tumble from the mountains, and the winds are much stronger, here
        i force my valika down upon my head
        %4¾ÛÑ&

    kaz
        both of you
        use your aima cysts
        it is too dangerous 

    yan
        okay, yes

    vak
        got it

    sourceless
        i search in my satchels with my free hand for an aima cyst
        i should have one...
        there - this is it, i think
        i attempt to thread the cyst's tassel through my valika...
        then i connect to it
        it feels as if another, long-lost pair of eyes have opened
        it is so much easier to see...
        but what is that? lying there, at the end of the passage?
            EXEC::changeBgm(env.music.doomed)

    kaz
        yan. yan
        what is that
  
    yan
        wait! i am not connected yet...
        okay - okay, where--
        þµÈoº0!
        what??
        i- i do not know
        i have never seen anything like that 
        vak, give--

    vak
        what-
        is that...

    sourceless
        terror writhes into our connection, like secri infesting a body
        we all stand, frozen in horror at the thing before us
        i look up
        we are at the foot of the spire's mountain
        we- we were not here
        what is happening?
        that - that thing in front of us
        i see it clearer, now
        three corpses 
        cyan blood is dashed across the rock-face, spreading like wings from each of the bodies
        i- i have an unsettling feeling
        as though i know who these three should be
        it is us
        all three of us, dead
        this should not be possible - we are still here, alive
        i shakily ask -

    kaz
        wait - what- what do you two see?

    vak
        kaz... 
        is that y--

    yan
        wait- wait
        vak. give me your rifle
        can you two not see it?
        do you not see the creature?
        its eyes... they are transfixed on both of you!!

    vak
        what?
        there is nothing--

    sourceless
        yan sends an impulse towards both of us
        what he sees - 
        a great, horrid beast
        it is the length of the passage we are in, a sluggish body with no arms nor legs
        yet it has a wide, gaping maw, and eyes--too many--fixed on vak and i
        inching ever closer towards all of us
        it opens its mouth wider
        i draw away
        i- i still cannot move

    yan
        vak. the rifle!

    vak
        y-yes
        take it from my hands

    sourceless
        yan inches toward vak
        they slowly lift the rifle from their hands, careful not to accidentally pull the trigger
        and they move to stand beside me, rifle aimed 
        yan's eyes dart around, looking for the best place to shoot--probably
        then they fire
            EXEC::play("shot", 1.15)
        pulse after pulse after pulse, yan does not relent
            EXEC::play("shot", 1.15)
        they seem to be attempting to aim for a particular spot - but the recoil throws them off
        several charred chunks of flesh appear, floating, between us and the end of the passage
        a loud rumble - not of thunder, but of this beast
        it turns its eyes--<em>all</em> its eyes--away from us - and i get to glimpse it for a moment 
        it is just as yan showed us - great and black and squirming, mouth agape
        yan slings the rifle around their shoulders and grabs both of our hands

    yan
        run! now!

    sourceless
        we break from that thing's gaze and run
        i can hear its squelching and sloshing as it gives chase
        but we quickly realise it cannot keep up with us 
        we run as far and as fast as we can, attempting to be on course -
        as the creature's noises fade away into the storm
            EXEC::changeBgm(env.music.spirestorm)

    vak
        š/èÂÝÄ!
        what under velzie's gaze was that!
        yan? do you have any idea?

    yan
        no - like i said
        i have never seen something like that before
        it must have come from the rest of the alkali mountains 
        hmm... 
        it looked like it had an acid sac - like tir
        so we probably should not stay in one place for too long
        i- i saw another sac, though i am not sure what it could be for...
        i tried to rupture either, but i missed...
        though - if it has an acid sac then i doubt it will just be chasing us on the surface
        that is if it has caught our scent... 
        it would probably have retreated within the earth, for now 
        with luck it will probably leave us alone - or we just might have made it angrier 
        but then again, if there is one predator here, then there must be something else, of course -
        a predator must feed 
        keep your eyes open, everyone 

    sourceless 
        there is nothing more to be said 
        yan is deep in thought, trying to understand our hunter
        aside from them, vak looks distressed - what she saw shook her 
        i cast reassurance towards her 
        we must stay strong - we know this 
        what either of us have seen - we must cast it aside 
        a trick of the beast, of our minds - we must not falter
        we must not misstep in our stageplay for velzie 
        if we all want to exeunt this part of the play - 
        then we must persist, we must endure the storm
        she looks up at me - looking not so burdened, now 
        but she is still worried, i see it in her receptors

    vak
        yan, my rifle?

    yan 
        oh - yes 
        here it is 

    sourceless 
        yan unslings the rifle, carefully handing it to vak 
        
    yan
        we should probably leave, now 
        just in case 

    kaz
        yes - follow me

    sourceless
        i look upwards towards the spire -
        it has shifted back to where i remember it being, before the vision
        it flourishes far in the distance, under the storm
        it is a little hard to make out where we are - but it will probably do
        the storm continues its relentless battering upon us - 
        the rain, the lightning, the winds...
        our aima cysts sway like antennae as we traverse the stony paths, looking out for danger
        the path widens into a bigger clearing -

    vak
        do you two hear that?

    sourceless
        i strain my ears...
        through the howling winds - i hear... something
        the clacking of claws upon stone - fast, and many
        through the passage facing us - 
        a swarm of guktik burst forth!
            EXEC::changeBgm(env.music.kazswarm)
        they swarm and stamp upon one another 
        a great mass of sharp claw and hardened chitin
        each indistinguishable from one another in that mass
        they pour and pour into our clearing 
        clawing and tearing at the air, at one another 
        they scramble towards us - eyes hungry, yet twined with the slightest hint of fear
        we dash for cover - anything to help us withstand this storm, any advantageous position 
        we are split up - the swarm rapidly closes in on all of us -
        i do not think anymore - my instincts as a surface runner take hold 
        my dagger is already drawn, through the dullvoice i shout -
        ---
            EXEC::changeBgm(env.music.yanswarm)

    kaznp
        yan! where are you--

    yanp 
        kaz!
        i am running through the passages we came from
        i- i am not sure how many there are behind--
        E/ú{&

    sourceless
        a misstep, and i trip 
        not now not now 
        i push myself up as fast as i can 
        it takes me a θblink to return to speed
        but my pursuers get ever closer
        M¶nÂe
        why are they here?
        has our hunter--our beast chased them toward us?
        i run and i run - my body is fuelled by fear and terror 
        as i do so, i observe those behind me with my aima cyst
        a few dozen? there are too many for me to fight 
        they claw and trample one another as they chase
        this may to be my advantage...
        ---
            EXEC::changeBgm(env.music.vakswarm)
        
    kaznp
        vak- vak where--

    vakp  
        kaz! kaz!
        yes i am alright- are you--
        
    kaznp
        --no time--
        where are you?

    vakp 
        i have been running!!
        eyes closed where i am

    sourceless
        i have run down another set of corridors, unsure whether or not kaz or yan have followed me
        the mass of guktik follow me in haste 
        the majority of the guktik have followed me, i think
        i have not had the chance to fire--yet 
        their claws are too sharp - their teeth too many for me to have a chance
        perhaps, if i can find a choke-point... somewhere where many cannot get through at once
        somewhere narrower than where i am right now...
        yes, yes that should work
        i will keep running down these passages for now
        a choke-point, and they will all be gone
        ---
            EXEC::changeBgm(env.music.kazswarm)

    kaz
        try- try to regroup at the spot where we split off, both of you
        i will use my flares 
        
    sourceless
        i can only assume the least of the guktik have given chase to me
        only a few are pursuing me as i run down the passages
        ½xNï%
        this was- unexpected, the guktik - this split
        my eyes are closed on where everyone else is 
        i can only wish to velzie they will be safe, regardless
        if only i had not led them here...
        no, no this does not matter now 
        i have to stand and fight 
        this should be managable, should it not?
        i withdraw a satik cyst from a bag, crushing it in my hand
        may velzie protect me 
        i turn to face my enemy -
        ---
            EXEC::changeBgm(env.music.yanswarm)
        sweat soaks my brow
        as i keep running, i watch the guktik dice one another to pieces
        i have seen a few collapse already, heavily wounded by others 
        i do not think i can keep this up for too much longer
        but i must keep this up for as long as i can
        it seems as though many of their claws have dulled from scratching on one another's chitin 
        the more the guktik wound and weaken one another - the easier it will be for me to kill them 
        i must keep going - for myself and the others 
        ---
            EXEC::changeBgm(env.music.vakswarm)
        i have unslung my rifle, shooting the guktik over my shoulder as i go
            EXEC::play("shot", 1.15)
        indiscriminate shots slice through their flesh and chitin - those killed at the front slow down the others behind 
        but for every one i kill, five others take its place 
        more meat for the slaughter, then 
        but i must find that choke-point - and quickly 
        i am tiring, and i must kill all of them before they overtake me
        ---
            EXEC::changeBgm(env.music.kazswarm)
        the first of the guktik charges at me, swinging wildly 
        adrenaline fuels my steps and my motions - 
        i step aside, ducking under its sweep, breathing heavy 
        its back is exposed to me - the least chitinous part of a guktik's body 
        i plunge my dagger between one of its chitin-plates, and twist it out as another comes for me - 
            EXEC::play("stab", 1)
        i have no time to dodge its swipe, i can only block its blow 
        my dagger strains against it - but still, it stands strong 
        behind me, the other guktik returns to its feet
        i am surrounded on both fronts - but this does not matter 
        i charge at the one i have wounded already - this will be the first i will kill
        another swipe - deftly deflected by my blade 
        a plate exposes a leg - and my knife goes in, dragging me behind it 
            EXEC::play("stab", 1)
        i quickly take it out and go towards its back - 
        my dagger goes in, and out once again 
            EXEC::play("stab", 1)
        a river of blood forms upon it, washed away by the storm 
        another attempts to attack me as i bring down my blade again 
        i barely just manage to lean back - dodging the swipe as i hold on to my dagger, lodged, digging into the wounded guktik 
        but i do not lean back enough - my valika is swiped off of my head - my connection to the aima cyst, severed 
        NÞJA;!
        my dagger plunges out - i run towards my valika as my pursuers give chase once again 
        ---
            EXEC::changeBgm(env.music.yanswarm)
        a mass of guktik bodies have been strewn the ways i ran 
        they have sliced one another to ribbons - only a handful survive 
        i cannot keep running 
        my legs feel light and strained - i have overexerted myself 
        i just- i cannot turn around yet 
        the guktik advance, and i must keep running
        i reach into my bags to see what options i have 
        a turn is just beyond me - this could be an auspicious moment for an attack 
        i feel around - a satik cyst... a restorative cyst... another aima cyst...
        ah - dull flares
        those can work -
        i take one of mine out of my bag 
        the grey-white cyst shimmers in the rain 
        i can use this as a sort of kavruka, probably 
        i can only hope this works
        ---
            EXEC::changeBgm(env.music.vakswarm)
        my rifle jolts against my body as i take shots behind me - uncaring where they land  
            EXEC::play("shot", 1.15)
        the smell of charred meat pervades my nostrils 
        how many have i killed? dozens? hundreds?
        yet the horde behind me does not seem to thin at all 
        i can only delay them 
        come on - i just need--
        i turn a corner - i think this should work 
        a narrow rock wall between two mountains, riven apart 
        it looks just enough for me to fit through - 
        i do not have any choice in that matter, anyway 
        i run towards the split as the mass arrives behind me 
        i hold my rifle in the hand that goes into the rift first 
        i move in, as quick as i can between the stone
        it is tight - but i can fit 
        the swarm slams against the mountains - attempting to  go through, to follow me 
        claws scratch against the stone, desperately trying to cut me 
        i am far enough out of their reach that i do not worry, so far 
        i clamber out of it, and fall to the wet ground for a moment 
        i quickly get up, my rifle pointed through the rift 
        the other side is a mass of moving chitin and claws and noise - all the guktik, trained on us, for some reason?
        i can only guess it is due to the spirestorm 
        or that... horrible thing 
        no - no more delays, i am here 
        may my shots protect yan and kaz 
        i pull the trigger -
            EXEC::play("shot", 1.15)
        ---
            EXEC::changeBgm(env.music.kazswarm)
        i have connected to my aima cyst, once again 
        my knife plunges into vulnerable flesh and hard chitin indiscriminately 
            EXEC::play("stab", 1)
        i need to hurt them--i need to kill them
        they cannot stand in my way of returning to vak, yan 
        i weave through another blow and cut through a leg 
        to the back, my blade wedges into an open chitin-plate, twisting and digging 
        and to the other leg, crippled
            EXEC::play("stab", 1)
        my hands and feet move by themselves - my mind does not control them in their bloody dance anymore 
        i am not flawless however 
        blows have landed upon me - the first few have been blocked by the satik cyst's ablative shielding 
        but it has worn off - and i have forgone anything else entirely 
        wounds and cuts, large and small are carved into my body, my clothes are tattered 
        it does not matter, though 
        this is the only way to get back to them 
        i must keep going 
        even if it must kill me 
        if i die knowing they will both survive 
        then i will die happy -
        ---
            EXEC::changeBgm(env.music.yanswarm)
        the swarm amasses at the turn - 
        i activate the dull flare 
        now is my chance 
        i hurl it towards the swarm
        it takes a moment, and as the swarm crawls overtop it -
        a fiery explosion of dull light bursts forth 
            EXEC::play("shot", 1)
        those at the epicenter of the explosion are overtaken by a dull fire 
        they writhe and scratch and claw at anything in their vicinity - even themselves 
        i watch as the white dull fire rises high into the sky, swaying in the winds of the spirestorm, almost hypnotic 
        there are still some that are not dead yet - but that can be taken care of, probably 
        i have not fought a guktik like this before, but i know which spots are vulnerable 
        i draw my dagger and await them
        ---
            EXEC::changeBgm(env.music.vakswarm)
        smoking bodies fill the cracks of the crevice 
            EXEC::play("shot", 1.15)
        i do not know how many are dead or alive 
        i do not know which are dead or alive 
        it does not matter to me anymore 
        the joy of pulling the trigger - the joy of watching those who stand before me, imploded in the light of the dull
            EXEC::play("shot", 1.15)
        the joy of seeing those who stand before me and my friends fall 
            EXEC::play("shot", 1.15)
        this is what i live for 
        for yan - for kaz
        the murderous joy of killing - the exhilaration that i may return to my friends once again  
            EXEC::play("shot", 1.15)
        i keep an eye behind me, though - just in case 
        ---
            EXEC::changeBgm(env.music.spirestorm)
        i crumple to the ground 
        that is it... i think 
        none of the bodies stir, but me
        i let out a sob out of exhaustion 
        my tired, bleeding body cannot handle any more of this 
        my hand shakes as i grab my dagger, returning it to its sheath 
        i crawl towards the walls of the passage 
        i need to rest my tattered body 
        i slump against the wall, my rapid breaths melt to something more restful 
        everywhere, i am stained with the cyan of blood, even as the rain washes me 
        i search my bags for restoratives and the dull flare 
        yes, yes, there they are 
        i will be okay 
        i must be, for them
        i throw the dull flare
            EXEC::play("shot", 1)

    kaz 
        vak - yan 
        i have released a dull flare 
        please- come when you can

    sourceless 
        i begin to bind my wounds with the remnants of my tattered clothing and the restorative's salve
        ---
            EXEC::changeBgm(env.music.yanswarm)
        i am deep within battle with the remaining guktik
        i have survived this far... somehow
        though i am wounded
        my knife meets a claw - 
        §B¾d[ÞÙ 
        it is knocked aside, spinning through the air as it hits the walls 
        i cannot move to get it - another guktik is there 
        it is as if they knew 
        i stand before the guktik as it prepares another blow 
        my hands rifle shakily through my bags, looking for something that may help...
        another dull flare? 
        i jump aside as the guktik swings 
        i throw the dull flare at the one nearest my dagger 
            EXEC::play("shot", 1)
        in θblinks, it erupts into a fire 
        only one flare left, now - i must use it wisely 
        i scramble for my dagger, avoiding the dying guktik 
        as i do, i turn to block the chasing guktik's blow 
        i quickly retaliate towards an opening in its leg 
            EXEC::play("stab", 1)
        another crippling blow 
        i must keep this up
        ---
            EXEC::changeBgm(env.music.spirestorm)
        i have made sure they are all dead
        especially sure - they are all but dust 
        as i turn to leave - a dull flare in the sky, quite close by
        kaz? is that you?
        she must need help, so i hurry        
        ---
        now, i wait 
        i look into the sky as rain beats down upon me 
        i can only hope vak or yan saw my flare...
        my chest rises up and down, rattling as i breathe
        i have applied the restorative to where i need it most
        but i still do not feel any better 
        am i- am i dying?
        maybe- maybe i am just tired
        i do not know
        ---
            EXEC::changeBgm(env.music.yanswarm)
        a claw opens a ribbon of blood across my arm 
            EXEC::play("stab", 1)
        %ÇFÑË 
        i cannot keep doing this 
        there are not many left, but i am too exhausted to do anything more radical 
        i only have my dagger 
        the guktik advances, and i block - 
        my blade is wrenched out of my hand, tossed aside 
        it is too far for me to run to, the guktik approach me
        i reach into my bag - my last dull flare 
        and i throw it 
            EXEC::play("shot", 1)

    yanp
        anyone - i released a dull flare 
        come quick 
        please 

    sourceless
        i draw a guktik claw from another of my bags
        it does not have any handle, it cuts a little into my fingers as i clutch it
        but that does not matter 
        the guktik prepares another swipe -
        ---
            EXEC::changeBgm(env.music.spirestorm)
        a dull flare flashes over the horizon
            EXEC::play("shot", 1) 
        just beyond this mountain in front of me 
        yan?
        °"%^Ñ 
        they need help
        i drag myself to my feet 
        i- i should not be doing this but 
        i need to help them 
        i do not matter as much as they do--

    vak 
        kaz? kaz!
        oh thank velzie 
        i never thought--

    sourceless
        vak rushes towards me, wrapping me in a hug for a θblink

    kaz
        ow 

    vak
        let us go quickly 
        you heard yan's message, did you not?
        we need to get there fast

    kaz
        go on - you are not as injured as me, you will be faster
        i will follow you 
        just- throw a dull flare up, once you get there
        please

    vak
        okay, okay
        may velzie smile upon you 

    sourceless
        vak rushes ahead of me
        i am... feeling a little better now
        i hold on to the walls to keep me steady 
        i am not as fast as vak, but i limp along
        come on come on i cannot be late  
        suddenly - a scream, cutting through even the spirestorm
        pain radiates through the dullvoice
        that... yan?
        no no no no no
        the pain does not even matter anymore 
        i run, following where vak has gone 

    kaz
        vak, vak
        what happened? are you there?

    vak
        no - no not yet 
        i am almost--
        mÕÚ¶—!

    sourceless
        a dull flare flashes up in the skies
 
    vak
        i have released the dull flare
        come quickly! yan is hurt
            EXEC::changeBgm(env.music.doomed)

    sourceless
        no no no this cannot be good 
        i run, weathering the storm as i turn the corners of every passage--bracing myself for when i arrive
        
    kaz
        yan!!

    sourceless
        yan lies, hunched upon a dead guktik, gripping my dagger
        vak crouches next to them, trying to staunch yan's wounds 

    kaz
        what happened??
        vak - did you check their pulse?

    sourceless
        as i near, vak moves away from yan's body, sensing i know what to do more than her
        i bring out a restorative and begin rubbing the balm on yan

    vak 
        y- yes i did - their heart is still beating 
        though i am not sure for how much longer... 
        s- so, um, when i came in i saw -
        they were surrounded by dead guktik
        heavily wounded
        they were crouched on this corpse - stabbing it even though it was dead 
        i called to them, and they looked up at me -
        they- i saw they were crying
        a- and they collapsed, after that 
        i- i do not know what to do 
        i-

    sourceless
        vak tosses up her hands, fighting tears
        though i keep at my work
        i need to if yan is to survive
        as i look - vak is not wrong about yan's wounds 
        i am surprised they have been alive for this long
        even as the rain washes the blood away, i can tell they are still heavily bleeding
        my hands rush faster as i apply the restorative - 
        velzie's eye cast down - if yan is--
        i cannot--i cannot think about that
        ...
        i finish my application of the restorative

    vak
        do you think they will...?

    kaz
        i- i hope not
        they have come too far with us just to... die like that 
        we- we should probably go, now
        before either one of us are hurt
        i will carry yan--

    vak
        no, no 
        i will be taking them 
        please - look at yourself, you are not fit to carry someone else
        you can take my rifle, protect me

    kaz
        i-

    vak
        no, kaz
        you are too weak - you need to rest
        nothing more, let us go 

    kaz 
        fine

    sourceless
        we have completely passed the spire at this point - almost out of the storm
            EXEC::changeBgm(env.music.spirestorm)
        i carry vak's rifle
        it is an unfamiliar weapon to me, but i have seen how vak uses it
        i lead the way out - vak follows behind me, carrying yan...
        as the mountains fall behind us - we can clearly see the horizon, now
        it is still clear-sky beyond the storm
        or - has it been a θgaze? 
        i am not too sure 
        but it does not matter now 
        the storm lets us out of its grasp -
            EXEC::changeBgm(env.music.surface);changebackground='surface';BackgroundSwap();
        
    vak
        going to put down the zzepel, kaz

    kaz
        coming

    sourceless
        we do not usually put down the zzepel this late during clear-sky--
        or this early during clear-sky?
        but regardless, we have endured so much 
        the zzepel closes, the lights flick on
            EXEC::changeBgm(env.music.zzepel);changebackground='zzepel';BackgroundSwap();
        vak lays yan on the floor, aside from both of us
        i disconnect my dullvoice, putting it in my bag - vak does so to both herself and yan
        i- i realise how exhausted i am, actually
        it comes as a sudden feeling, a crashing wave
        my legs give way - i collapse on the ground on my back, arms spread out 
        vak must have felt the same thing - she collapses on top of me
        once she settles, she hugs me tightly
        i reciprocate, and she begins sobbing into my shoulder

    kaz
        v- vak? 
    
    vak
        i- i- 
        i- c- could not--

    kaz
        no, no, no, vak
        it is going to be okay
        we are going to go back home - all of us...

    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("ichor", true);changebackground='surface';BackgroundSwap();changeBgm(env.music.surface);

    RESPONSES::sys
        continue<+>ichor
        return to chapter select<+>loop

ichor
    sys
        ATTENTION::'chapter five';'ichor'
        CONTENT WARNING::'contains description of injuries'

    sourceless
        my eyes open, i stir upon the ground
            EXEC::changeBgm(env.music.zzepel);changebackground='zzepel';BackgroundSwap();
        it is still and silent in the zzepel - i am the only one awake once again
        the dim light illuminates only a little of what surrounds me - it is probably brume-sky right now
        i... do not usually wake at this time
        vak still lies upon me 
        her comforting weight presses down upon me 
        i shift a little to the side, laying her down carefully 
        i move over to yan's body -
        i feel their pulse, their heart still beats 
        though it is... slow, slower than is healthy
        i take a look at their body, their wounds
        their body is caked with the dark-blue of blood, their hands especially
        their lesser wounds seem to have healed nicely - though the deeper ones still seem to be mostly-open
        i rummage through my bags - i take out a restorative
        i use what scraps of cloth i can from both our tattered clothes to bind their wounds...
        i hear vak stir behind me as i work, sighing as she gets up
        
    vak
        kaz... great gaze

    kaz
        great gaze, vak

    sourceless
        vak moves behind me as i consider yan
        she rests her head on my shoulder as she watches me work...
        i begin with yan's torso - where the deepest wounds are carved 
        it seems only by a miracle of velzie that they survived all of these -
        i am careful rubbing the restorative in - careful not to make the wounds worse
        then, i attempt to bind long stretches of cloth, tying it on their back
        their arms are not as wounded - though their left hand's fingers seem to be the most wounded, for whatever reason
        i rub the balm in, and dress their hand with another scrap of cloth 
        their legs and face are not so bad - only superficial cuts 
        i only rub the salve upon them, that should be good enough
        vak moves away from me, moving near yan's face, surveying them

    vak
        how do they seem?
        will they be okay?

    kaz
        i- i do not know for certain 
        they... will probably be okay
        though for how long they will stay unconscious - i do not know
        hopefully they will wake up, soon

    sourceless
        vak nods a little as she stares at yan

    vak
        i- i hope so, too...
        so... should we- leave now?
        how far is it to kozali from here?

    kaz
        we should arrive... the same θgaze we leave 
        it is brume-sky now--probably
        it would be too dangerous to travel right now...
    
    vak
        then let us leave when clear-sky falls, yes?

    kaz
        yes - seems reasonable enough

    sourceless
        we sit in silence for a moment, staring at one another

    vak
        kaz - in the spirestorm
        what happened? 
        to you, i mean, when we were split

    kaz
        ah - um
        i went down the path to... the right, i think?
        i cannot remember much of what happened
        so much of it was adrenaline 
        though - i remember the least of the guktik followed me, i think
        so i- i fought them 
        to get back towards you and yan 
        there were not enough to completely overwhelm me
        but as you can see -
        it did hurt
        a lot 
        i killed all of them 
        then - you know what happened next 
        
    vak
        <em>all of them</em>? yourself?

    kaz
        ha- yes
        it was- it was a death wish 
        truly 
        but... it was all for you... and yan...
        what about you? are you... are you okay?

    vak
        um... obviously i ran a different direction than you 
        the majority of guktik chased me where i ran, probably
        and i ran... for quite a while 
        i fired my rifle into the mass as i did, but... it did not seem to thin
        for every one i killed, five more seemed to take its place...
        i ran until i found a crack between the mountains - one just tight enough that i could enter, but the guktik could not 
        i went through - 
        and i shot all of them, through the hole 
        i fired and fired and fired--

    kaz
        hehe - sounds like what you would do 

    vak
        hehe- yes, yes
        anyway, as i finished, i saw your dull flare 
        and i ran as fast as i could to you...
        i- i am so glad you are--

    sourceless
        she is interrupted -
        yan shifts once again - only a little movement--still noticable, though
        yet, they still do not awake
        we both rush toward them, trying to get a response...
        but no, nothing
        still trapped in sleep
        we draw away

    vak
        mm...

    sourceless
        vak saunters to the opposite side of the zzepel

    vak
        i am... going to sleep 
        no use staying up all brume-sky
        have a... good brume-sky, kaz

    sourceless
        she curls up, going to sleep
        i should follow suit, but...
        i stay up a little longer, to keep vigil on yan
        just in case they stir again, or if they need to be aided...
        i stare at their face...
        they seem so comfortable sleeping, here
        they never seemed this comfortable when they were awake...
        i- if i was not so slow, to kill those guktik
        i could have saved yan...
        but- but they are not dead, right?
        they cannot be, they must not be  
        please- please awaken
        please, yan...
        please...

    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("light", true);changebackground='surface';BackgroundSwap();changeBgm(env.music.surface);

    RESPONSES::sys
        continue<+>light
        return to chapter select<+>loop

light
    sys
        ATTENTION::'chapter six';'light'

    vak
        kazzz- great gaze 
            EXEC::changeBgm(env.music.zzepel);changebackground='zzepel';BackgroundSwap();

    sourceless
        vak shakes me awake

    vak
        how long did you stay up?
        it has been clear-sky for a while 
        i was waiting for you to wake up on your own, but...
        you did not 
        so i woke you up myself 
        come on - let us go 

    kaz
        agh- great gaze, vak
        spare me a blink 
        let me get ready 
        is yan--

    vak
        still not awake 
        i have tried shaking them 
        nothing

    sourceless
        i get up, leaning on the wall of the zzepel
        i move towards yan - checking their bandages, their disposition
        they seem fine for now - 
        we can only wait, and hope...
        hope for their awakening soon...
        and yet - yan still rests, unmoving, not heeding our wishes
        vak and i get ready - preparing our bags, eating...
      
    vak
        okay- um, kaz, can you close the zzepel? 
        i am carrying yan, so...

    kaz 
        sure

    sourceless 
        i approach the zzepel - the opening of a panel and the press of a button is all it takes
        the zzepel closes, and now the surface lies open to us 
            EXEC::changeBgm(env.music.surface);changebackground='surface';BackgroundSwap();
        
    vak
        could you- could you also take the zzepel, please 
        i cannot take it while carrying yan 
  
    kaz
        of course -
        anyway, kozali should be pretty close by
        we will just need to follow the river for the remainder of the way 
        let us go

    vak
        mhm!
        ah- i havent properly noticed how heavy yan is 
        with their bags and all...

    sourceless
        we set off - following the yuzku river once again
        as we approach kozali--and the coastline--the light cast by velzie seems to turn golden-yellow
        shimmering upon the yuzku river as we travel, in mostly-silence...
        vak heaves heavily behind me

    vak
        how much further to kozali?

    kaz
        we are almost there 
        it should be just beyond -

    sourceless
        i lead the way up the hill before us, glancing back towards vak as i go
        vak follows my path, her footsteps careful upon the ground
        behind her - our trials: the mountains, the spirestorm, choking the horizon and wreathing the skies in black
        snaking towards our destination - the yuzku river: our journey's guide, shimmering under velzie's light
        and now, as i surmount the hill -
        kozali
        sprawling under the ground before the shoreline, gleaming under the light
        vak joins me by my side, casting her gaze upon the city we have worked--sacrificed--so much to get to -
        i twist my receptors in joy, looking towards vak 

    kaz
        here it is 

    sourceless
        now, we descend
        our destination awaits

    sys
        ATTENTION::'conclusion of memory stream' 
        AUTHOR'S NOTE::'hello!!! hope you enjoyed the story!!';'this concludes my first corru mod - i have plans for a few more things, though nothing like this again probably';'though if you do enjoy this - tell me!! i might consider making more things like this!!'
        AUTHOR'S NOTE (CONT.)::'anyway, to conclude - have a great day!! if you want to reread the story, all the chapters will be available in the chapter select (each chapter unlocks after you finish the previous one, if you havent seen)';'bye!!!'

    RESPONSES::sys
        return to chapter select<+>loop
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
	env.definitions[\`vazni\`] = \`'continent';'central to inhabitable zone'\`;
	env.definitions[\`azali\`] = \`'continent';'home';'borders the inhabitable zone'\`;
	env.definitions[\`oltazni\`] = \`'vaznian cave-city'\`;
	env.definitions[\`vaznian\`] = \`'ethnic implication';'origination from continent';'vazni'\`;
	env.definitions[\`yuzku river\`] = \`'great river';'splits the continent of azali';'known for its bioluminescent lights, flourishing at night';'like yuzku'\`;
	env.definitions[\`alkali mountains\`] = \`'mountain-range';'rises perpindicular to the yuzku river';'the spire's perch'\`;
	env.definitions[\`kozali\`] = \`'azalian gulch-city';'recently opened communications, unaware of the corrucystic revolution';'my old home';'our destination'\`;
	env.definitions[\`azozali\`] = \`'azalian cave-city';'home'\`;
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

function BackgroundSwap() {
    oldbackground = document.querySelector(".background");
    oldbackground.classList.remove("background");
    oldbackground.classList.add("oldbackground");
    oldbackgroundlist = document.querySelectorAll(".oldbackground");
    switch(changebackground) {
        case "surface":
            background.insertAdjacentHTML("beforeend", surface);
            break;
        case "zzepel":
            background.insertAdjacentHTML("beforeend", zzepel);
            break;
        case "spirestorm":
            background.insertAdjacentHTML("beforeend", zzepel);
            background.insertAdjacentHTML("beforeend", spirestorm);
            break;
    }
    setTimeout(function(){
    	oldbackgroundlist.forEach(oldbackground => oldbackground.remove());
    }, 1500);
}

// MAKE SURE DA PAGES VAR EXISTS !
if (typeof pages == "undefined") {
  pages = {}
}
// CACHE DA PAGE SO IT LOADS
pages['/local/uncosm/surfacerunning/'] = {
  "title": "..__SURFACE_RUNNING__..",
  "name": "SURFACE RUNNING",
  "dialoguePrefix": "sec",
  "path": location.pathname,
  "flags": {},
  "pageClass": "",
  "originalContent": "",
  "blocks": [
    `${surfacerunningContent}`
  ],
  "responseURL": "https://corru.observer/local/uncosm/surfacerunning/",
  "url": "/local/uncosm/surfacerunning/"
}
// SWUP DOSE PAGES OUT
Object.defineProperty(swup.cache, 'pages', {
  get: () => pages,
  set: () => {}
})

// REFRESH PAGE IF ITS EMPTY 4 SOME REASON
if ((location.pathname == "/local/uncosm/surfacerunning/") && (page.dialoguePrefix.includes("notfound"))) {
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
	  if(value == "pit") value = "dangerous"

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

