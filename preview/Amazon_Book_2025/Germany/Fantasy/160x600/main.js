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

    
    var wizardTL = animateWizard();
    

    rolloverTL = gsap.timeline({paused:true});
    rolloverTL.add("start");
    rolloverTL.to("#gradient1", 0.8, {scale:1, x:10, y:-10, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#gradient2", 1, {scale:1, x:10, y:-10, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#lightning", 0.4, {opacity:1, repeat:1, yoyo:true, ease:Power4.easeOut}, "start");
    rolloverTL.to("#wizardArmWrapper", 1, {rotation:10, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#wizardHand", 1, {rotation:-5, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    
    rolloverTL.to("#spaceWrapper", 0.5, {clipPath:"polygon(-206% 0%, 245% 0%, 34% 75%)", repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#spaceWrapper", 2, {clipPath:"polygon(33% 0%, 33% 0%, 34% 75%)", ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#copy", 1, {clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start+=1");
    
    
    masterTL.add(wizardTL, "start+=1.5");
    masterTL.from("#lightning", 0.2, {opacity:0, repeat:4, yoyo:true, ease:Power4.easeOut}, "start+=2.5");
    
    masterTL.to("#lightning", 2, {opacity:0, ease:Power4.easeOut}, "start+=3.5");
    masterTL.to("#banner", 0.5, {}, "start+=9.3");

    console.log(masterTL.duration());
    

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