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

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#copy", 1, {clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start");

    masterTL.from("#left", 2, {x:-100, opacity:0, ease: Sine.easeOut}, "start+=1");
    masterTL.from("#right", 2, {x:100, opacity:0, ease: Sine.easeOut}, "start+=2");

    masterTL.to("#banner", 0.5, {}, "start+=9.3");
    
    console.log(masterTL.duration());
}