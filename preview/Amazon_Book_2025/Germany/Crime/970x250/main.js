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

    rolloverTL = gsap.timeline({paused:true});
    rolloverTL.add("start");
    rolloverTL.to("#spaceWrapper", 0.5, {clipPath:"polygon(-19% 0%, 86% 0%, 33.5% 79%)", repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#heliLight", 1, {rotation:70, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#heliWrapper", 1, {y:-80, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#heliRotor", 0.5, {rotation:-380, repeat:3, ease:Power0.easeNone}, "start");
    rolloverTL.to("#money1", 1, {scale:1.05, repeat:1, yoyo:true, ease:Power2.easeOut}, "start");
    rolloverTL.to("#money2", 1, {scale:1.05, repeat:1, yoyo:true, ease:Sine.easeOut}, "start");

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#spaceWrapper", 2, {clipPath:"polygon(33% 0%, 33% 0%, 33.5% 79%)", ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#copy", 1, {clipPath:"polygon(17% 0%, 17% 0%, 17% 100%, 17% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start+=1");
    
    masterTL.add("heli", "-=1.3");
    masterTL.from("#heliRotor", 0.5, {rotation:380, repeat:13, ease:Power0.easeNone}, "heli");
    masterTL.from("#heliWrapper", 0.5, {opacity:0, ease:Sine.easeOut}, "heli");
    masterTL.fromTo("#heliWrapper", 7, {scale:0, x:-60}, {x:446, scale:1.5, ease:Sine.easeOut}, "heli");
    masterTL.fromTo("#heliWrapper", 3.5, {y:-100}, {y:0, ease:Power2.easeInOut}, "heli");
    masterTL.fromTo("#heliLight", 3, {rotation:100}, {rotation:-20, ease:Sine.easeInOut}, "heli");
    masterTL.from("#runners", 2, {opacity:0, x:30, ease:Sine.easeInOut}, "heli+=2");
    masterTL.to("#heliLight", 2, {rotation:70, ease:Sine.easeInOut}, "heli+=3");
    masterTL.to("#heliWrapper", 3.5, {y:-130, ease:Power2.easeInOut}, "heli+=3.5");
    masterTL.to("#heliLight", 2.6, {rotation:0, ease:Power2.easeInOut}, "heli+=5");

    // masterTL.fromTo("#heliWrapper", 7, {y:-100}, {x:446, y:-130, scale:1.5, ease:Back.easeOut}, "heli");

    masterTL.add("money", "-=6");
    masterTL.to(["#gradientR", "#gradientL"], 1.5, {opacity:0, ease:Sine.easeInOut}, "money");
    masterTL.from("#money1", 3, {scale:0, x:10, ease:Power2.easeOut}, "money");
    masterTL.from("#money2", 2.5, {scale:0, ease:Sine.easeOut}, "money");
    
    masterTL.add("leftCorner", "-=7");
    masterTL.from("#leftCorner", 1, {opacity:0, x:-30, ease:Sine.easeInOut}, "leftCorner");

    
    masterTL.to("#banner", 0.5, {}, "start+=9.3");

    console.log(masterTL.duration());
    

}

