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
    masterTL.from("#copy", 1, {clipPath:"polygon(33% 0%, 33% 0%, 33% 100%, 33% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start");

    masterTL.from("#shield", 2, {y:20, x:25, ease:Power1.easeOut}, "start+=1");

    masterTL.to("#fire1", 1.6,{scaleX:1.1, scaleY:1.3, repeat:4, yoyo:true, ease:Sine.easeInOut}, "start");
    masterTL.to("#fire1", 2,{rotation:5, repeat:3, yoyo:true, ease:Sine.easeInOut}, "start");

    masterTL.from("#fireLeft", 1,{scale:0, ease:Sine.easeOut}, "start+=2.5");
    masterTL.to("#fireLeft", 0.64285714285,{scaleX:0.9, scaleY:1.1, repeat:6, yoyo:true, ease:Sine.easeInOut}, "start+=3.5");
    masterTL.to("#fireLeft", 1.5,{rotation:-5, repeat:2, yoyo:true, ease:Sine.easeInOut}, "start+=3.5");

    masterTL.to("#banner", 0.5, {}, "start+=9.3");
    
    console.log(masterTL.duration());

}