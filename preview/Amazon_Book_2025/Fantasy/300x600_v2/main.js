window.onload = function () {
    init();
}

function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function () {
        if (masterTL.progress() == 1) {
            rolloverTL.play(0);
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){

        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(clickTag, '_blank');
        masterTL.progress(1).pause();
    })

    getAnimation();
}


function getAnimation(){

    var druidTL = animateDruid();
    var wizardTL = animateWizard();
    var creatureTL = animateCreature();

    rolloverTL = gsap.timeline({paused:true});
    rolloverTL.add("start");
    rolloverTL.to("#gradient1", 0.8, {scale:1, x:10, y:-10, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#gradient2", 1, {scale:1, x:10, y:-10, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#lightning", 0.4, {opacity:1, repeat:1, yoyo:true, ease:Power4.easeOut}, "start");
    rolloverTL.to("#wizardArmWrapper", 1, {rotation:10, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#wizardHand", 1, {rotation:-5, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    
    rolloverTL.to("#creatureWingL", 0.5, {rotationY: 0, rotationX: 0, ease:Power1.easeInOut, repeat:3, yoyo:true}, "start");
    rolloverTL.to("#creatureWingR", 0.5, {rotationY: 0, rotationX: 0, ease:Sine.easeInOut, repeat:3, yoyo:true}, "start");
    rolloverTL.to("#creatureWrapper", 0.5, {y:-10, ease:Sine.easeInOut, repeat:3, yoyo:true}, "start");
    rolloverTL.to("#creatureTail", 1, {rotation:25, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start");
    
    rolloverTL.to("#spaceWrapper", 0.5, {clipPath:"polygon(-93% -7%, 151% 0%, 31% 79%)", repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#spaceWrapper", 2, {clipPath:"polygon(31% -7%, 31% 0%, 31% 79%)", ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#copy", 1, {clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start+=1");
    
    masterTL.add(druidTL, "start+=2");
    masterTL.add(wizardTL, "start+=1.5");
    masterTL.from("#lightning", 0.2, {opacity:0, repeat:4, yoyo:true, ease:Power4.easeOut}, "start+=2.5");
    masterTL.add(creatureTL, "start+=3.5");
    masterTL.to("#lightning", 2, {opacity:0, ease:Power4.easeOut}, "start+=3.5");
    masterTL.to("#banner", 0.5, {}, "start+=9.3");

    console.log(masterTL.duration());
    

}

function animateDruid() {
    var tl = gsap.timeline({});

    tl.add('start');
    tl.to("#druid", 3.5, {x:-230, y:50, ease:Sine.easeIn}, "start");
    tl.to("#druid", .5, {marginTop:5, repeat:6, yoyo:true, ease:Sine.easeInOut}, "start");

    return tl;
}

function animateCreature() {
    var tl = gsap.timeline({});

    tl.add('start');
    tl.from("#creatureWrapper", 3, {x:-200, ease:Sine.easeOut}, "start");
    tl.to("#creatureWingL", 0.75, {rotationY: 30, rotationX: 50, ease:Power1.easeInOut, repeat:6, yoyo:true}, "start");
    tl.to("#creatureWingR", 0.75, {rotationY: -30, rotationX: 50, ease:Sine.easeInOut, repeat:6, yoyo:true}, "start");
    tl.to("#creatureWrapper", 0.75, {y:-20, ease:Sine.easeInOut, repeat:6, yoyo:true}, "start");
    tl.to("#creatureTail", 1.3125, {rotation:25, ease:Sine.easeInOut, repeat:3, yoyo:true}, "start");

    return tl;
}

function animateWizard() {
    var tl = gsap.timeline({});

    tl.add('start');
    tl.from("#wizardWrapper", 1.8, {x:160, y:50, ease:Sine.easeOut}, "start");
    tl.fromTo("#wizardArmWrapper", 1.5, {rotation:-30}, {rotation:20, ease:Sine.easeOut}, "start");
    tl.fromTo("#wizardHand", 1.5, {rotation:30}, {rotation:-20, ease:Sine.easeOut}, "start");
    tl.to("#wizardArmWrapper", 1, {rotation:0, ease:Sine.easeInOut}, "start+=1.5");
    tl.to("#wizardHand", 1, {rotation:0, ease:Sine.easeInOut}, "start+=1.5");
    tl.fromTo("#gradient1", 0.5, {scale:0, opacity:0.5, y:-20, x:10}, {scale:1.5, opacity:1, y:0, x:0, ease:Sine.easeInOut}, "-=1.75");
    tl.fromTo("#gradient2", 0.5, {scale:0, opacity:0, y:-20, x:10}, {scale:1.5, opacity:0.7, y:0, x:0, ease:Sine.easeInOut}, "-=1.75");
    tl.to("#gradient1", 0.5, {scale:1, ease:Sine.easeInOut}, "-=1.25");
    tl.to("#gradient2", 0.5, {scale:1, ease:Sine.easeInOut}, "-=1.25");
    tl.to("#gradient1", 0.5, {scale:0, ease:Sine.easeInOut}, "-=0.75");
    tl.to("#gradient2", 0.5, {scale:0, opacity:0.3, ease:Sine.easeInOut}, "-=0.75");
    tl.to("#wizardArmWrapper", 2.5, {rotation:-10, repeat:1, yoyo:true, ease:Sine.easeInOut});
    tl.to("#wizardHand", 2.5, {rotation:15, repeat:1, yoyo:true, ease:Sine.easeInOut}, "-=5");
    
    return tl;
}