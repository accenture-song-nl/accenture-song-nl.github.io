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

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#bg", 3, {scale:1.1, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.5, {x:200, ease:Sine.easeOut}, "start")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1")
    masterTL.to(["#text1", "#text1HighlightWrapper"], 0.5, {x:-200, opacity:0, ease:Sine.easeInOut}, "start+=3")

    masterTL.add("showFrame2")
    masterTL.from("#bgBorder", 0.5, {scale:2, y:40, ease:Sine.easeOut}, "showFrame2")
    masterTL.from("#text2", 0.5, {y:150, ease:Sine.easeOut}, "showFrame2+=0.5")
    masterTL.from("#text2HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "showFrame2+=1.5")
    masterTL.to(["#text2", "#text2HighlightWrapper"], 0.5, {x:-200, opacity:0, ease:Sine.easeInOut}, "showFrame2+=3.5")
    masterTL.to(["#bgBorder", "#bg"], 0.5, {x:-300, ease:Sine.easeIn}, "showFrame2+=3.5")

    masterTL.add("showStickerFrame")
    masterTL.from("#sticker", 0.5, {x:400, ease:Sine.easeOut}, "showStickerFrame")
    masterTL.from("#stars1", 0.5, {x:300, ease:Sine.easeOut}, "showStickerFrame")
    masterTL.from("#stars2", 0.5, {x:200, ease:Sine.easeOut}, "showStickerFrame")
    masterTL.from("#disclaimer", 0.5, {opacity:0, ease:Sine.easeOut}, "showStickerFrame+=0.5")
    masterTL.to(["#sticker", "#stars1", "#stars2", "#disclaimer", "#logo"], 0.5, {opacity:0, ease:Sine.easeInOut}, "showStickerFrame+=3.5")

    masterTL.add("showFrame3")

    masterTL.from("#logo2", 0.5, {scale:0, ease:Sine.easeInOut}, "showFrame3")
    masterTL.from("#stars3", 0.8, {scale:0, ease:Sine.easeInOut}, "showFrame3")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "showFrame3+=0.5")

    masterTL.add("endScreen")
    
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=0.7");

    masterTL.play();

    console.log(masterTL.duration());
}