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
    "type": "thoughtform portrait-contain portrait-darkripple larval loose-thought",
    voice: ()=>play('talkgal', 0.7),
    player: true,
    name: "kaz"
}
// yankani vel metvi
env.dialogueActors["yan"] = {
    image: "/img/sprites/obesk/larval/larval2.gif",
    type: "thoughtform portrait-contain portrait-darkripple obesk qou loose-thought",
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
        chapter three<+>eyes
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
            EXEC::ratween(env.bgm, 0.75)

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
            EXEC::ratween(env.bgm, 0.4)
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
        one through the spirestorm
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
        it--it is a dance upon veilk
        we just--we do not know
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
        though the earth around the spire is craggy and clifflike, with mountains rising high -
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
            EXEC::ratween(env.bgm, 0.4)
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
            EXEC::ratween(env.bgm, 0.75)
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
        they sheath my knife and pats their hands upon their jekzi
        
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
            EXEC::ratween(env.bgm, 0.4)
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
            EXEC::ratween(env.bgm, 0.75)
   
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
        ... kaz, thank you

    sys
        ATTENTION::'conclusion of chapter'
        NOTICE::'continue?'
            EXEC::change("claws", true)

    RESPONSES::sys
        return to chapter select<+>loop

/*
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
        each one of us are laden heavy with bags: restoratives, satiks; the tools necessary for us to survive
        moments before, we each affixed our dullvoice receivers and found one another in the dull
        i stare into the dark, inky-black of the spirestorm
        i clutch yan's fairy amulet hard - its dead carapace digs into my skin
        i send a pulse through the dullvoice 

    kaz 
        everyone... 
        are we ready?
        (OUT OF CHARACTER!!) hi if you are reading this
        theres your little teaser for claws

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
	env.definitions[\`vazni\`] = \`'continent';'central to inhabitable zone'\`;
	env.definitions[\`azali\`] = \`'continent';'home';'borders the inhabitable zone'\`;
	env.definitions[\`oltazni\`] = \`'vaznian cave-city'\`;
	env.definitions[\`vaznian\`] = \`'ethnic implication';'origination from continent';'vazni'\`;
	env.definitions[\'yuzku river\'] = \`'great river';'splits the continent of azali';'known for its bioluminescent lights, flourishing at night';'like yuzku'\`;
	env.definitions[\'kozali\'] = \`'azalian gulch-city';'recently opened communications, unaware of the corrucystic revolution';'my old home';'our destination'\`;
        env.definitions[\'azozali\'] = \`'azalian cave-city';'home'\`;
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
