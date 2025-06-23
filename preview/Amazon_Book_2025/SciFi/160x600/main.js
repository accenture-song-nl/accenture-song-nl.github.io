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

    var asteroidTL = animateAsteroid();

    rolloverTL = gsap.timeline({paused:true});
    rolloverTL.add("start");
    rolloverTL.to("#spaceWrapper", 0.5, {clipPath:"polygon(-198% 0%, 273% 0%, 33% 76%)", repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#portalPerson", 0.5, {x:5, scale:0.975, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.add(asteroidTL, "start");
    masterTL.from("#spaceWrapper", 2, {clipPath:"polygon(33% 0%, 33% 0%, 33% 76%)", ease:Sine.easeInOut}, "start+=0.5");
        masterTL.from("#copy", 1, {clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start+=1");
    masterTL.from("#portalWrapper", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=1.5");
    masterTL.to("#portalWrapper", 1, {height:"100%", ease:Power1.easeIn}, "start+=2");
    masterTL.from("#portalPerson", 1.5, {opacity:0, x:30, scale:0.75, ease:Power1.easeOut}, "start+=2.5");
    
    masterTL.to("#banner", 0.5, {}, "start+=9.3");

    console.log(masterTL.duration());
    

}

function animateAsteroid() {
    var tl = gsap.timeline({repeat:1});

    tl.add('start');
    tl.to("#asteroid", 1.25, {x:60, yoyo:true, ease:Sine.easeOut}, "start");
    tl.to("#asteroid", 2.5, {x:-60, yoyo:true, ease:Sine.easeInOut}, "start+=1.25");
    tl.to("#asteroid", 1.25, {x:0, yoyo:true, ease:Sine.easeIn}, "start+=3.75");
    
    tl.to("#asteroid", 2.5, {scale:0.7, ease:Sine.easeInOut}, "start");
    tl.to("#asteroid", 2.5, {scale:1, ease:Sine.easeInOut}, "start+=2.5");
    
    tl.to("#asteroid", 0.01, {zIndex:1, ease:Sine.easeInOut}, "start");
    tl.to("#asteroid", 0.01, {zIndex:0, ease:Sine.easeInOut}, "start+=1.25");
    tl.to("#asteroid", 0.01, {zIndex:1, ease:Sine.easeInOut}, "start+=3.75");

    return tl;
}

