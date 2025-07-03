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

    var birdTL = animateBird();

    rolloverTL = gsap.timeline({paused:true});
    rolloverTL.add("start");
    rolloverTL.to("#spaceWrapper", 0.5, {clipPath:"polygon(-84% 0%, 155% 0%, 34% 71%)", repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#alien", 1, {y:10, x:-5, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#portalPerson", 0.5, {x:5, scale:0.975, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#spaceWrapper", 2, {clipPath:"polygon(33% 0%, 33% 0%, 34% 71%)", ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#copy", 1, {clipPath:"polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start+=1");
    // masterTL.from("#portalWrapper", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=1.5");
    // masterTL.to("#portalWrapper", 1, {height:"100%", ease:Power1.easeIn}, "start+=2");
    masterTL.from("#portalPerson", 1.5, {opacity:0, x:30, scale:0.75, ease:Power1.easeOut}, "start+=2.5");
    masterTL.from("#alien", 3, {x:-90, y:170, ease: Sine.easeOut}, "start+=3");
    masterTL.from("#alien", 3, {scale:0.5, ease: Sine.easeOut}, "start+=3");
    // masterTL.add(birdTL, "start+=4");
    
    masterTL.to("#banner", 0.5, {}, "start+=9.3");

    console.log(masterTL.duration());
    

}

function animateBird() {
    var tl = gsap.timeline({});

    tl.add('start');
    // tl.from("#birdWrapper", 4, {x:-150, y:340, ease: "back.out(1)"}, "start");

    return tl;
}

