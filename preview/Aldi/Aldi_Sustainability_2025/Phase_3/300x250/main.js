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
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#bgBorder", 0.5, {scale:1.4, y:25, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.5, {y:100, ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#text1B", 0.5, {y:100, ease:Sine.easeOut}, "start+=1.2")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1.9")

    masterTL.add("showFrame2", 3)
    masterTL.to(["#bgBorder", "#bg"], 0.5, {y:-250, ease:Sine.easeIn}, "showFrame2+=1")
    masterTL.to(["#text1", "#text1B", "#text1HighlightWrapper"], 0.5, {y:-240, ease:Sine.easeInOut}, "showFrame2+=1")
    masterTL.from("#text2", 0.5, {y:200, ease:Sine.easeOut}, "showFrame2+=1.5")
    masterTL.from("#extraInfo", 0.5, {x:200, ease:Sine.easeOut}, "showFrame2+=1.75")
    masterTL.from("#carrot", 1, {y:150, ease: "back.out(1.2)"}, "showFrame2+=2")
    masterTL.to(["#text2", "#carrot", "#extraInfo"], 0.5, {opacity:0, ease:Sine.easeInOut}, "showFrame2+=7")

    masterTL.add("showFrame3")

    masterTL.to("#logo", 0.5, {scale:2.1, left:105, top: 37, ease:Sine.easeInOut}, "showFrame3")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "showFrame3+=0.5")

    masterTL.add("endScreen")
    
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=0.7");
    
    masterTL.to("#banner", 0.5, {}, "14.5");

    masterTL.play();

    console.log(masterTL.duration());
}