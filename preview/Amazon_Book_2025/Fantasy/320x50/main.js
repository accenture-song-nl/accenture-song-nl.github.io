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

     var creatureTL = animateCreature();

    rolloverTL = gsap.timeline({paused:true});
    rolloverTL.add("start");

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#copy", 1, {clipPath:"polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start");

    masterTL.add(creatureTL, "start");

    masterTL.from("#lightning", 0.2, {opacity:0, repeat:4, yoyo:true, ease:Power4.easeOut}, "start+=2.5");
   
    masterTL.to("#lightning", 2, {opacity:0, ease:Power4.easeOut}, "start+=3.5");
    masterTL.to("#banner", 0.5, {}, "start+=9.3");
    
    console.log(masterTL.duration());

}

function animateCreature() {
    var tl = gsap.timeline({});

    tl.add('start');
    tl.from("#creatureWrapper", 3, {x:-50, ease:Sine.easeOut}, "start");
    tl.to("#creatureWingL", 0.75, {rotationY: 60, rotationX: 40, ease:Power1.easeInOut, repeat:9, yoyo:true}, "start");
    tl.to("#creatureWingR", 0.75, {rotationY: -60, rotationX: 80, ease:Sine.easeInOut, repeat:9, yoyo:true}, "start");
    tl.to("#creatureWrapper", 0.75, {y:-4, ease:Sine.easeInOut, repeat:9, yoyo:true}, "start");
    tl.to("#creatureTail", 1.3125, {rotation:25, ease:Sine.easeInOut, repeat:3, yoyo:true}, "start");

    return tl;
}