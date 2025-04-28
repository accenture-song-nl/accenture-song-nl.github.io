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
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#bg", 1.5, {scale:1.1, transformOrigin:"70% 0%", ease:Power2.easeInOut}, "start")
    masterTL.from("#person", 1.5, {scale:1.3, transformOrigin:"70% 0%", ease:Power2.easeInOut}, "start")
    masterTL.from("#text1a", 0.3, {x:-20, opacity:0, ease:Sine.easeOut}, "start+=1.5")
    masterTL.from("#highlight1aWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=1.7")
    masterTL.from("#text1b", 0.3, {x:20, opacity:0, ease:Sine.easeOut}, "start+=1.8")
    masterTL.from("#highlight1bWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=2")
    masterTL.from("#text1c", 0.3, {x:-20, opacity:0, ease:Sine.easeOut}, "start+=2.1")
    masterTL.from("#highlight1cWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=2.3")
    masterTL.to("#text1a", 0.3, {x:-20, opacity:0, ease:Sine.easeIn}, "start+=3.5")
    masterTL.to("#text1b", 0.3, {x:-20, opacity:0, ease:Sine.easeIn}, "start+=3.8")
    masterTL.to("#text1c", 0.3, {x:-20, opacity:0, ease:Sine.easeIn}, "start+=4")
    masterTL.to("#highlight1aWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=3.7")
    masterTL.to("#highlight1bWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=4")
    masterTL.to("#highlight1cWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=4.2")
    
    masterTL.add("showText2", "-=1");
    masterTL.to("#bg", 5, {scale:1.05, transformOrigin:"70% 0%", ease:Sine.easeInOut}, "showText2")
    masterTL.to("#person", 5, {scale:1.15, transformOrigin:"70% 0%", ease:Sine.easeInOut}, "showText2")
    masterTL.from("#text2", 0.3, {x:-20, opacity:0, ease:Sine.easeOut}, "showText2+=1")
    masterTL.from("#highlight2Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "showText2+=1.2")

    var stickerDur = 1;
    masterTL.add("stickerStart", "-=3")
    masterTL.from("#stickerBackReset", stickerDur/4, {opacity:0, ease:"power1.inOut"}, "stickerStart");    
    masterTL.to("#stickerBackWrapper", stickerDur, {x:-100, y:-100, ease:"power1.inOut"}, "stickerStart");    
    masterTL.to("#stickerBack", stickerDur, {y:-140, ease:"power1.inOut"}, "stickerStart");    
    masterTL.from("#stickerWrapper", stickerDur, {x:120, y:120, ease:"power1.inOut"}, "stickerStart");    
    masterTL.from("#sticker", stickerDur, {x:-120, y:-120, ease:"power1.inOut"}, "stickerStart");   
    
    masterTL.add("showEndscreen")
    masterTL.from("#endScreen", 0.5, {opacity:0, ease:"power1.inOut"}, "showEndscreen");   
    masterTL.to("#logo", 0.5, {width:52, left:"50%", translateX:"-50%", ease:"Sine.inOut"}, "showEndscreen+=0.5");   
    masterTL.from("#tagline", 0.3, {opacity:0, y:-10, ease:Sine.easeInOut}, "showEndscreen+=1");   
    masterTL.from(["#text3", "#text3White"], 0.3, {x:-20, opacity:0, ease:Sine.easeOut}, "showEndscreen+=1.2")
    masterTL.from(["#highlight3Wrapper", "#highlight3BlueWrapper"], 0.5, {width:0, ease:Sine.easeInOut}, "showEndscreen+=1.6")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "showEndscreen+=2.5")
    masterTL.fromTo("#ctaRight", 0.3, {x:-30, opacity:0}, {x:0, opacity:1, ease:Back.easeOut}, "showEndscreen+=2.9")
    
    masterTL.to("#banner", 0.5, {}, 14.5)
    
    masterTL.play();
    
}