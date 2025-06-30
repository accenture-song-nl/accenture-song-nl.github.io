window.onload = function () {
    init();
}

function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function () {
        if (masterTL.progress() == 1) {
            // getMousePos();
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

    var vikingTL = animateViking();

    rolloverTL = gsap.timeline({paused:true});
    rolloverTL.add("start");
    rolloverTL.to("#spaceWrapper", 0.5, {clipPath:"polygon(-9% 0%, 77% 0%, 33.5% 79%)", repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#vikingWrapper", 1, {x:5, y:2, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.fromTo("#spear9", 3,{x:-100}, {x:1200, rotation:50, ease:Sine.easeInOut}, "start");
    rolloverTL.fromTo("#spear10", 4, {x:-300, y:10}, {x:1200, y:80, rotation:60, ease:Sine.easeInOut}, "start");


    masterTL = gsap.timeline({repeat:2});

    masterTL.add("start");
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.from("#spaceWrapper", 2, {clipPath:"polygon(33% 0%, 33% 0%, 33.5% 79%)", ease:Sine.easeInOut}, "start+=0.5");
    
    masterTL.to(vikingTL, 10,{progress:1, ease:Sine.easeOut}, "start");
    
    masterTL.from("#copy", 1, {clipPath:"polygon(17% 0%, 17% 0%, 17% 100%, 17% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start+=1");
    
    // masterTL.from("#boat", 6,{x:-300, y:10, ease:Power2.easeOut}, "start+=2");

    masterTL.from("#castleFire2", 0.5,{scale:0, ease:Sine.easeOut}, "start+=1.4");
    masterTL.to("#castleFire2", 1.6,{scaleX:1.1, scaleY:1.3, repeat:4, yoyo:true, ease:Sine.easeInOut}, "start+=1.9");
    masterTL.to("#castleFire2", 2,{rotation:5, repeat:3, yoyo:true, ease:Sine.easeInOut}, "start+=1.9");
    
    masterTL.from("#castleFire4", 0.7, {scale:0, ease:Sine.easeOut}, "start+=1");
    masterTL.to("#castleFire4", 2,{scaleX:1.2, scaleY:0.8, repeat:3, yoyo:true, ease:Sine.easeInOut}, "start+=1.7");
    masterTL.to("#castleFire4", 1.6,{rotation:20, repeat:3, yoyo:true, ease:Sine.easeInOut}, "start+=1.7");

    masterTL.from("#castleFire1", 1,{scale:0, ease:Sine.easeOut}, "start+=2");
    masterTL.to("#castleFire1", 0.625,{scaleX:0.9, scaleY:1.2, repeat:7, yoyo:true, ease:Sine.easeInOut}, "start+=3");
    masterTL.to("#castleFire1", 1.25,{rotation:-5, repeat:3, yoyo:true, ease:Sine.easeInOut}, "start+=3");
    
    masterTL.from("#castleFire5", 1,{scale:0, ease:Sine.easeOut}, "start+=2.5");
    masterTL.to("#castleFire5", 0.64285714285,{scaleX:0.9, scaleY:1.1, repeat:6, yoyo:true, ease:Sine.easeInOut}, "start+=3.5");
    masterTL.to("#castleFire5", 1.5,{rotation:-5, repeat:2, yoyo:true, ease:Sine.easeInOut}, "start+=3.5");
    
    masterTL.from("#castleFire3", 0.5,{scale:0, ease:Sine.easeOut}, "start+=3");
    masterTL.to("#castleFire3", 0.64285714285,{scaleX:1.2, scaleY:1.1, repeat:6, yoyo:true, ease:Sine.easeInOut}, "start+=3.5");
    masterTL.to("#castleFire3", 1.5,{rotation:5, repeat:2, yoyo:true, ease:Sine.easeInOut}, "start+=3.5");

    masterTL.fromTo("#spear1", 3,{x:-100}, {x:1100, rotation:50, ease:Sine.easeInOut}, "start+=1");
    masterTL.fromTo("#spear2", 3,{x:-100, y:100}, {x:1100, rotation:50, ease:Sine.easeInOut}, "start+=5");
    masterTL.fromTo("#spear3", 3,{x:-100, y:50}, {x:1100, rotation:52, ease:Sine.easeInOut}, "start+=6");
    masterTL.fromTo("#spear4", 3,{x:-100, y:40}, {x:1100, rotation:45, ease:Sine.easeInOut}, "start+=2");
    masterTL.fromTo("#spear5", 3,{x:-100, y:10}, {x:1100, rotation:55, ease:Sine.easeInOut}, "start+=7");
    
    masterTL.fromTo("#spear6", 3, {x:-100, y:10}, {x:1100, y:20, rotation:60, ease:Sine.easeInOut}, "start+=1.5");
    masterTL.fromTo("#spear7", 3, {x:-100, y:40}, {x:1100, y:40, rotation:80, ease:Sine.easeInOut}, "start+=3.7");
    masterTL.fromTo("#spear8", 3, {x:-100, y:50}, {x:1100, y:0, rotation:30, ease:Sine.easeInOut}, "start+=7");
    
    
    masterTL.to("#banner", 0.5, {}, 9.5);
        
    console.log(masterTL.duration());
    

}

function animateViking() {
    var tl = gsap.timeline({repeat:0});

    tl.add('start');
    tl.from("#vikingWrapper", 9, {x:100, ease:Power0.easeNone}, "start");
    // tl.from("#shield", 1.8, {x:-50, y:-20, yoyo:true, repeat:4, ease:Sine.easeInOut}, "start");
    tl.from("#vikingWrapper", 1.8, {y:10, yoyo:true, repeat:4, ease:Sine.easeInOut}, "start");
    
    tl.to("#vikingFire", 1.8, {rotation:12, scaleX:1.2, scaleY:0.9, yoyo:true, repeat:4, ease:Sine.easeInOut}, "start");

    return tl;
}

function getMousePos() {
    document.querySelector("#mainExit").addEventListener("mousemove", function (e) {
        var xPos = e.clientX/40;
        var yPos = e.clientY/60;
        gsap.to("#shield", 0.1, {y:yPos, x:xPos, ease:Sine.easeInOut});
        
    });
}