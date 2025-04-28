myFT.on("ready", init);


function init() {

    getAnimation();

    window.addEventListener("resize", onResize);
    onResize();

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
}

function onResize(){
    var screenW = document.body.offsetWidth;
    var bannerH = document.querySelector("#banner").offsetHeight;
    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerS = bannerH/1200;
    gsap.set(["#scaler", "#extraScaler"], {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
        gsap.set("#logo", {x:-300});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#logo", {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true, repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#bg", 1.5, {scale:1.2, transformOrigin:"70% 30%", ease:Power2.easeInOut}, "start")
    masterTL.from("#person", 1.5, {scale:1.6, transformOrigin:"70% 30%", ease:Power2.easeInOut}, "start")
    masterTL.from("#text1a", 0.3, {x:-60, opacity:0, ease:Sine.easeOut}, "start+=1.5")
    masterTL.from("#highlight1aWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=1.7")
    masterTL.from("#text1b", 0.3, {x:60, opacity:0, ease:Sine.easeOut}, "start+=1.8")
    masterTL.from("#highlight1bWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=2")
    masterTL.from("#text1c", 0.3, {x:-60, opacity:0, ease:Sine.easeOut}, "start+=2.1")
    masterTL.from("#highlight1cWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=2.3")
    masterTL.to("#text1a", 0.3, {x:-20, opacity:0, ease:Sine.easeIn}, "start+=3.5")
    masterTL.to("#text1b", 0.3, {x:-20, opacity:0, ease:Sine.easeIn}, "start+=3.8")
    masterTL.to("#text1c", 0.3, {x:-20, opacity:0, ease:Sine.easeIn}, "start+=4")
    masterTL.to("#highlight1aWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=3.7")
    masterTL.to("#highlight1bWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=4")
    masterTL.to("#highlight1cWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=4.2")
    
    masterTL.add("showText2", "-=1");
    masterTL.to("#bg", 5, {scale:1.05, transformOrigin:"70% 30%", ease:Sine.easeInOut}, "showText2")
    masterTL.to("#person", 5, {scale:1.15, transformOrigin:"70% 30%", ease:Sine.easeInOut}, "showText2")
    masterTL.from("#text2", 0.3, {x:-20, opacity:0, ease:Sine.easeOut}, "showText2+=1")
    masterTL.from("#highlight2Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "showText2+=1.2")

    var stickerDur = 1;
    masterTL.add("stickerStart", "-=3")
    masterTL.from("#stickerBackReset", stickerDur/4, {opacity:0, ease:"power1.inOut"}, "stickerStart");    
    masterTL.to("#stickerBackWrapper", stickerDur, {x:-380, y:-380, ease:"power1.inOut"}, "stickerStart");    
    masterTL.to("#stickerBack", stickerDur, {y:-550, ease:"power1.inOut"}, "stickerStart");    
    masterTL.from("#stickerWrapper", stickerDur, {x:600, y:600, ease:"power1.inOut"}, "stickerStart");    
    masterTL.from("#sticker", stickerDur, {x:-600, y:-600, ease:"power1.inOut"}, "stickerStart");
    
    masterTL.add("showEndscreen")
    masterTL.from("#endScreen", 0.5, {opacity:0, ease:"power1.inOut"}, "showEndscreen");   
    masterTL.to("#logo", 0.5, {opacity:0, ease:"Sine.inOut"}, "showEndscreen+=0.5");   
    masterTL.from("#tagline", 0.3, {opacity:0, y:-10, ease:Sine.easeInOut}, "showEndscreen+=1");   
    masterTL.from(["#text3", "#text3White"], 0.3, {x:-20, opacity:0, ease:Sine.easeOut}, "showEndscreen+=1.2")
    masterTL.from(["#highlight3Wrapper", "#highlight3BlueWrapper"], 0.5, {width:0, ease:Sine.easeInOut}, "showEndscreen+=1.6")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 85%", ease:Back.easeOut}, "showEndscreen+=2.5")
    masterTL.fromTo("#ctaRight", 0.3, {x:-30, opacity:0}, {x:0, opacity:1, ease:Back.easeOut}, "showEndscreen+=2.9")
    
    masterTL.to("#banner", 0.5, {}, 14.5)
    
    masterTL.play();
}