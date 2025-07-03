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

    masterTL.to("#eye", 2.2, {x:-4, y:-1, repeat:3, yoyo:true, ease:Power4.easeInOut}, "start+=1");
    masterTL.to("#wingL", 1.63333333333, {rotation:30, rotationX:50, repeat:5, yoyo:true, ease:Sine.easeInOut}, "start");
    masterTL.to("#wingR", 1.63333333333, {rotation:-30, rotationX:-20, repeat:5, yoyo:true, ease:Sine.easeInOut}, "start");
    masterTL.from("#lightning", 0.2, {opacity:0, repeat:4, yoyo:true, ease:Power4.easeOut}, "start+=2.5");
   
    masterTL.to("#lightning", 2, {opacity:0, ease:Power4.easeOut}, "start+=3.5");
    masterTL.to("#banner", 0.5, {}, "start+=9.3");
    
    console.log(masterTL.duration());

}