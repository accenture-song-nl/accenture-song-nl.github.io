myFT.on("ready", init);


function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#ctaRight", 0.3, {opacity:0.8, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#ctaRight", 0.3, {opacity:1, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true, repeat:1});
    masterTL.add("intro")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    // masterTL.from("#product", 10, {x:150, ease:Sine.easeOut}, "intro")
    // masterTL.from("#productLogoWrapper", 1, {width:0, ease:Sine.easeInOut}, "intro+=0.5")
    
    masterTL.from("#bgBorder", 0.5, {scale:1.1, ease:Sine.easeOut}, "intro+=0.5")
    masterTL.from("#text1", 0.5, {opacity:0, x:-100, ease:Sine.easeOut}, "intro+=1")
    masterTL.from("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeOut}, "intro+=1.5")

    masterTL.to(["#text1", "#highlight1Wrapper"], 0.5, {opacity:0, x:100, ease:Sine.easeIn}, "intro+=4")
    
    masterTL.from("#text2", 0.5, {opacity:0, x:-100, ease:Sine.easeOut}, "intro+=4.5")
    masterTL.from("#highlight2Wrapper", 0.5, {width:0, ease:Sine.easeOut}, "intro+=5")

    masterTL.from("#endBg", 0.5, {opacity:0, ease:Sine.easeIn}, "intro+=7.5")
    masterTL.from("#endLogo", 0.5, {opacity:0, y:20, ease:Sine.easeIn}, "intro+=8")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "intro+=8.5");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "intro+=9.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "intro+=9.2");
    
    masterTL.from("#banner", 0.5, {}, "intro+=14.5");
    
    masterTL.play();
}