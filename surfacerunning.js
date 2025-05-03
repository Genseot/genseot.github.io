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
		env.surfacerunning.surface = new Howl({
				onload: function () {page.howls.push(this)},
				src: ['/audio/hub.ogg'],
				preload: true,
				loop: true,
				rate: 0.75,
				sprite: {__default: [50, 153000, true]},
			})

		env.surfacerunning.zzepel = new Howl({
				onload: function () {page.howls.push(this)},
				src: ['/audio/hub.ogg'],
				preload: true,
				loop: true,
				rate: 0.4,
				sprite: {__default: [50, 153000, true]}
			})

		env.surfacerunning.spirestorm = new Howl({
				onload: function () {page.howls.push(this)},
				src: ['/audio/november.ogg'],
				preload: true,
				loop: true,
 				rate: 0.5,
				sprite: {__default: [50, 153000, true]}
			})

		env.surfacerunning.doomed = new Howl({
				onload: function () {page.howls.push(this)},
				src: ['/audio/404.ogg'],
				preload: true,
				loop: true,
				rate: 0.1,
				sprite: {__default: [50, 153000, true]}
			})

	
				
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
// evil (might or might not use idk)
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
        chapter three<+>eyes
        chapter four<+>claws
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
            EXEC::changeBgm(env.surfacerunning.surface)

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
            EXEC::changeBgm(env.surfacerunning.zzepel)
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
        im <em>sorry</em>!
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
            EXEC::change("bone", true)

    RESPONSES::sys
        continue<+>eyes
        return to chapter select<+>loop

eyes
    sys
        ATTENTION::'chapter three';'eyes'

    sourceless
        i awaken splayed upon the floor of the zzepel
            EXEC::changeBgm(env.surfacerunning.zzepel)
        the light is dim - it must be clear-sky now
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
        our mourning routine begins - we work in mostly-silence
        as silent as it can be as the veilk-herd passes us, their footsteps 
        supplies, food, it is a blur to me...
        we gather around vak, once again
        the zzepel's light blinks off - we are left in a dim darkness
        then its claws dig up from the earth and plunge back into the zzepel
        i am hit with the blinding light of the surface
            EXEC::changeBgm(env.surfacerunning.surface)
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
        theres two more here!!
    
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
        i watch, impressed, at their efficency
        yan finishes, their bag bulges with what they have collected
        they sheath my knife and pat their hands upon their jekzi
        
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
            EXEC::changeBgm(env.surfacerunning.zzepel)
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
        is it only five θgazes until the secri-wind tears through this place!
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
        so - we decided, if this stress is too much for you...
        you need a break
        
    yan
        yes, um
        we decided that we should see the river tonight
        the three of us, together
        it might be our last chance to, before the storm... our destination...
        what do you think?
        
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
            EXEC::changeBgm(env.surfacerunning.surface)
   
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
            EXEC::change("claws", true)

    RESPONSES::sys
        continue<+>claws
        return to chapter select<+>loop

claws
    sys
        ATTENTION::'chapter four';'claws'

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
        that light in their eyes - i have seen it before...
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
            EXEC::changeBgm(env.surfacerunning.spirestorm)
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
        i search in my sachels with my free hand for an aima cyst
        i should have one...
        there - this is it, i think
        i attempt to thread the cyst's tassel through my valika...
        then i connect to it
        it feels as if another, long-lost pair of eyes have opened
        it is so much easier to see...
        but what is that? lying there, at the end of the passage?

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

    vak
        what--
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
        can you two not see it?
        do you not see the creature?
        its eyes... they are transfixed on both of you!!
        vak. give me the rifle

    vak
        what? no
        there is nothing- nothing that needs to be--

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
        pulse after pulse after pulse, yan does not relent
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

    vak
        š/èÂÝÄ!
        what under velzie's gaze was that 
        yan? do you have any idea?

    yan
        no - like i said
        i have never seen something like that before
        it must have come from the rest of the alkali mountains 
        hmm...
        we probably should not stay in one place for too long
        it looked like it had an acid sac - like tir
        i- i saw another sac, though i am not sure what it could be for...
        i tried to rupture either, but i missed...
        though - if it has an acid sac then i doubt it will just be chasing us on the surface
        that is if its caught our scent... 
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
        its shifted back to where i remember it being, before the vision
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
        they swarm and stamp upon one another 
        a great mass of sharp claw and hardened chitin
        each indistinguishable from one another in that mass
        they pour and pour into our clearing 
        clawing and tearing at the air, at one another 
        they scramble towards us - eyes hungry, yet twined with the slightest hint of fear
        we dash for cover - anything to help us withstand this storm, any advantageous position 
        we are split up - the swarm rapidly closes in on all of us -
        my dagger is already drawn, through the dullvoice i shout -
        ...

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
        a few dozen? there is too many for me to fight 
        they claw and trample one another as they chase
        this may to be my advantage...
        --
        
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
        --

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
        --
        sweat soaks my brow
        as i keep running, i watch the guktik dice one another to pieces
        i have seen a few collapse already, heavily wounded by others 
        i do not think i can keep this up for too much longer
        but i must keep this up for as long as i can
        it seems as though many of their claws have dulled from scratching on one another's chitin 
        the more the guktik wound and weaken one another - the easier it will be for me to kill them 
        i must keep going - for myself and the others 
        --
        i have unslung my rifle, shooting the guktik over my shoulder as i go
        indiscriminate shots slice through their flesh and chitin - those killed at the front slow down the others behind 
        but for every one i kill, five others take its place 
        more meat for the slaughter, then 
        but i must find that choke-point - and quickly 
        i am tiring, and i must kill all of them before the they overtake me
        --
        the first of the guktik charges at me, swinging wildly 
        adrenaline fuels my steps and my motions - 
        i step aside, ducking under its sweep, breathing heavy 
        its back is exposed to me - the least chitinous part of a guktik's body 
        i plunge my dagger between one of its chitin-plates, and twist it out as another comes for me - 
        i have no time to dodge its swipe, i can only block its blow 
        my dagger strains against it - but still, it stands strong 
        behind me, the other guktik returns to its feet
        i am surrounded on both fronts - but this does not matter 
        i charge at the one i have wounded already - this will be the first i will kill
        another swipe - deftly deflected by my blade 
        a plate exposes a leg - and my knife goes in, dragging me behind it 
        i quickly take it out and go towards its back - 
        my dagger goes in, and out once again 
        a river of blood forms upon it, washed away by the storm 
        another attempts to attack me as i bring down my blade again 
        i barely just manage to lean back - dodging the swipe as i hold on to my dagger, lodged, digging into the wounded guktik 
        but i do not lean back enough - my valika is swiped off of my head - my connection to the aima cyst, severed 
        NÞJA;!
        my dagger plunges out - i run towards my valika as my pursuers give chase once again 
        --
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
        --
        my rifle jolts against my body as i take shots behind me - uncaring where they land  
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
        i unsling my rifle and hold it in the hand that goes into the rift first 
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
        i fire -
        --
        i have connected to my aima cyst, once again 
        my knife plunges into vulnerable flesh and hard chitin indiscriminately 
        i need to hurt them--i need to kill them
        they cannot stand in my way of returning to vak, yan 
        i weave through another blow and cut through a leg 
        to the back, my blade wedges into an open chitin-plate, twisting and digging 
        and to the other leg, crippled
        my hands and feet move by themselves - my mind does not control them in their bloody dance anymore 
        i am not flawless however 
        blows have landed upon me - the first few have been blocked by the satik cyst's ablative shielding 
        but it has worn off - and i have forgone anything else entirely 
        wounds and cuts, large and small are carved into my body, my jekzi is tattered 
        it does not matter, though 
        this is the only way to get back to them 
        i must keep going 
        even if it must kill me 
        if i die knowing they will both survive 
        then i will die happy -
        --
        the swarm amasses at the turn - 
        i finish my adjustments to the dull flare 
        now is my chance 
        i hurl it towards the swarm
        it takes a moment, and as the swarm crawls overtop it -
        a fiery explosion of dull light bursts forth 
        those at the epicenter of the explosion are overtaken by a dull fire 
        they writhe and scratch and claw at anything in their vicinity - even themselves 
        i watch as the white dull fire rises high into the sky, swaying in the winds of the spirestorm, almost hypnotic 
        there are still some that are not dead yet - but that can be taken care of, probably 
        i have not fought a guktik like this before, but i know which spots are vulnerable 
        i draw my dagger and await 
        --
        smoking bodies fill the cracks of the crevice 
        i do not know how many are dead or alive 
        i do not know which are dead or alive 
        it does not matter to me anymore 
        the joy of pulling the trigger - the joy of watching those who stand before me, imploded in the light of the dull
        the joy of seeing those who stand before me and my friends fall 
        this is what i live for 
        for yan - for kaz
        the murderous joy of killing - the exhilaration that i may return to my friends once again  
        i keep an eye behind me, though - just in case 
        --
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

    kaz 
        vak - yan 
        i have released a dull flare 
        please- come 

    sourceless 
        --
        i am deep within battle with the remaining guktik
        i have survived this far... somehow 
        i need to keep it this way 
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
        in θblinks, it erupts into a fire 
        only one flare left - i must use it wisely 
        i scramble for my dagger, avoiding the dying guktik 
        as i do, i turn to block the chasing guktik's blow 
        i quickly retaliate towards an opening in its leg 
        another crippling blow 
        i must keep this up
        --
        i have made sure they are all dead,
        especially sure - they are all but dust 
        as i turn to leave - a dull flare in the sky, quite close by
        kaz? is that you?
        she must need help, so i hurry        
        --
        now, i wait 
        i look into the sky as rain beats down upon me 
        i can only hope vak or yan saw my flare 
        i- i might be dying, actually 
        i have applied the restorative to where i need it most
        but i still do not feel any better 
        maybe- maybe i am just tired
        i do not know
        --
        a claw opens a ribbon of blood across my arm 
        %ÇFÑË 
        i cannot keep doing this 
        there are not many left, but i am too exhausted to do anything more radical 
        i only have my dagger 
        the guktik advances, and i block - 
        my blade, this time, is wrenched out of my hand, tossed aside 
        i reach into my bag - my last dull flare 

    yanp
        anyone - i released a dull flare 
        come quick 
        please 

    sourceless
        --
        a dull flare flashes over the horizon 
        just beyond this mountain in front of me 
        yan?
        °"%^AÑ 
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
        vak rushes towards me

    vak
        kaz - quick, let us go 
        you heard yan's message, did you not?
        we need to get there, quickly

    kaz
        go on - quickly
        you are not as injured as me 
        i will follow you 
        just- throw a dull flare up, once you get there
        please

    vak
        okay, okay
        may velzie smile upon you 

    sourceless
        kaz rushes ahead of me
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
        kaz! come quickly! 

    sourceless
        no no no this cannot be good 
        i run, weathering the storm as i turn the corner--bracing myself
            EXEC::changeBgm(env.surfacerunning.doomed)
        
    kaz
        yan!!

    sourceless
        they lie on the ground - upon a dead guktik, gripping my dagger

    kaz
        what happened??
        vak - did you check their pulse?

    sourceless
        i bring out a restorative and begin rubbing the balm on yan

    vak 
        y- yes i did - their heart is still beating 
        though i am not sure for how much longer... 
        so, um, i- when i came in i saw -
        they were surrounded by dead guktik
        heavily wounded
        they were crouched on this corpse - stabbing it even though it was dead 
        i called to them - and i- i saw they were crying
        but as they looked up, they smiled
        a- and they collapsed 
        i- i do not know what to do 

    sourceless
        she is not wrong about yan's wounds 
        i am surprised they have been alive for this long
        even as the rain washes the blood away, i can tell they are still heavily bleeding
        i will need to be quick when applying the restorative -
        velzie's eye cast down - if yan is--
        i cannot--i cannot think about that
        i finish my application of the restorative

    vak
        do you think they will...?

    kaz
        i- i hope not
        they have come too far with us just to... die like that 
        we- we should probably go
        i can carry yan--

    vak
        no you are not 
        i will be taking them 
        look at yourself - you are not fit to carry someone else
        you can take my rifle - just point and pull the trigger
        you have seen me do it before

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
            EXEC::changeBgm(env.surfacerunning.spirestorm)
        i hold vak's rifle, attempting to emulate the way she holds it 
        i lead the way out - vak follows behind me, carrying yan...
        as the mountains fall behind us - we can clearly see the horizon, now
        it is still clear-sky beyond the storm
        or - has it been a θgaze? 
        i am not too sure 
        but it does not matter now 
        the storm lets us out of its grasp
            EXEC::changeBgm(env.surfacerunning.surface)
        
    vak
        going to put down the zzepel, kaz

    kaz
        coming

    sourceless
        we do not usually put down the zzepel this late in the day--or this early in the day?
        but regardless, we have endured so much 
        the zzepel closes, the lights flick on
            EXEC::changeBgm(env.surfacerunning.zzepel)
        vak lays yan on the floor, aside from both of us
        i- i realise how exhausted i am, actually
        it comes as a sudden feeling
        my legs give way, i collapse on the ground
        vak must have felt the same thing - she collapses on top of me, grabbing me tightly
        she sobs into my shoulder

    kaz
        vak, vak 
        it is going to be okay
        we are going to go back home - all of us...

    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("ichor", true)

    RESPONSES::sys
        return to chapter select<+>loop

/*
ichor
    sys
        ATTENTION::'chapter five';'ichor'


    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("light", true)

    RESPONSES::sys
        return to chapter select<+>loop

light
    sys
        ATTENTION::'chapter six';'light'


    sys
        ATTENTION::'conclusion of memory stream'
        NOTICE::'hello! this is genseot';'thanks for reading this lol';'hope you had fun!!'

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
