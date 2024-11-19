window.onload = function () {
    init();
}

function init(clickTAGvalue) {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(clickTag, '_blank');
        masterTL.progress(1).pause();
        document.querySelector("#video").currentTime = document.querySelector("#video").duration;
        document.querySelector("#video").pause();
    })

    getAnimation();
}

function getAnimation(){

    masterTL = new TimelineLite({paused:true, repeat:1, onRepeatComplete:function(){}});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onStart:function(){
        gsap.set("#replay", {display:"none"});
    }, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.add(function(){
        document.querySelector("#video").currentTime = 0;
        document.querySelector("#video").play();
    })
    masterTL.from("#text1", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "start")
    masterTL.from(["#cta", "#ctaBorder"], 0.5, {opacity:0, y:70, ease:"elastic.out(0.5 ,0.4)"}, "start+=0.5")
    masterTL.to("#cta", 0.25, {scale:1.15, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=1")
    masterTL.to("#ctaBorder", 0.5, {scale:1.8, ease:Sine.easeIn, opacity:0}, "start+=1")
    masterTL.to("#ctaBorder", 0.001, {scale:1, opacity:1}, "start+=1.999")
    masterTL.to("#text1", 0.4, {x:50, opacity:0, ease:Power2.easeInOut}, "start+=7.5")
    masterTL.from("#text2", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "start+=8")
    masterTL.from("#mainProduct", 0.5, {opacity:0, y:70, ease:"elastic.out(0.5 ,0.4)"}, "start+=8")
    masterTL.from("#leftProduct", 0.4, {x:70, opacity:0, ease:Back.easeOut}, "start+=8.3")
    masterTL.from("#rightProduct", 0.4, {x:-70, opacity:0, ease:Back.easeOut}, "start+=8.3")
    masterTL.to("#cta", 0.25, {scale:1.15, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=10")
    masterTL.to("#ctaBorder", 0.5, {scale:1.8, ease:Sine.easeIn, opacity:0}, "start+=10")
    masterTL.to("#ctaBorder", 0.5, {opacity:0}, "start+=10.5")
    masterTL.to("#ctaBorder", 0.5, {opacity:0, onComplete:function(){
        gsap.set("#replay", {display:"block"});
    }}, "start+=10.5")

    if (document.querySelector("#video").readyState === 4 ) {
        masterTL.play();
    }

    document.querySelector("#soundOff").addEventListener("click", function(){
        document.querySelector("#video").muted = false;
        document.querySelector("#video").currentTime = 0;
        gsap.set("#soundOff", {display:"none"});
        gsap.set("#soundOn", {display:"block"});
        masterTL.progress(0).play();;
    })
    
    document.querySelector("#soundOn").addEventListener("click", function(){
        document.querySelector("#video").muted = true;
        gsap.set("#soundOff", {display:"block"});
        gsap.set("#soundOn", {display:"none"});
    })

    document.querySelector("#replay").addEventListener("click", function(){
        document.querySelector("#video").currentTime = 0;
        gsap.set("#replay", {display:"none"});
        masterTL.progress(0).play();
    })
}