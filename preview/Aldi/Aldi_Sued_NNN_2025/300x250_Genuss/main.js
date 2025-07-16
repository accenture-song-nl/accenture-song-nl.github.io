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
        // masterTL.progress(1);
        masterTL.pause();
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("intro")
    masterTL.from("#bg", 2, {scale:1.1, ease:Sine.easeOut}, "intro");
    masterTL.from("#cow", 2, {scale:1.3, ease:Sine.easeOut}, "intro");
    masterTL.from("#product", 2, {scale:1.8, ease:Sine.easeOut}, "intro");
    
    masterTL.add("start", "-=0.8");
    masterTL.from("#nurNurWrapper", 1, {width:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#tagline", 0.5, {scale:0, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#tagline", 0.7, {y:-70, ease:Back.easeOut}, "start+=0.8");
    masterTL.from("#naturText", 0.7, {y:-55, rotation:-30, ease: "back.out(2)"}, "start+=0.8");
    masterTL.from("#leafsContainer", 1, {y:60, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#leafs", 1.5, {rotation:60, ease: "back.inOut(5)"}, "start+=0.8");
    masterTL.to("#introWrapper", 0.8, {scale:0.49, x:-76, y:-80, ease:"Sine.inOut"}, "start+=3.5");
    masterTL.from("#topBlock", 0.5, {scale:0, ease:Sine.easeOut}, "start+=3.7");
    masterTL.to("#tagline", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3.7");
    masterTL.to("#topBlock", 0.15, {y:-10, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=4");
    
    masterTL.add("showText1", "-=0.3");
    masterTL.from("#text1A", 0.5, {opacity:0, ease:Sine.easeOut}, "showText1");
    masterTL.from("#text1B", 0.5, {opacity:0, x:-20, ease:Sine.easeOut}, "showText1+=0.4");
    masterTL.to("#text1A", 0.3, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut}, "showText1+=1");
    masterTL.to(["#text1A", "#text1B"], 0.3, {opacity:0, ease:Sine.easeOut}, "showText1+=2.5");

    masterTL.add("showText2");
    masterTL.from("#text2", 0.5, {x:-50, opacity:0, ease:Sine.easeOut}, "showText2");
    masterTL.from("#highlight2Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "showText2+=0.5");
    masterTL.to("#text2", 0.5, {opacity:0, ease:Sine.easeIn}, "showText2+=2");
    masterTL.to("#highlight2Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "showText2+=2.25");
    
    masterTL.add("showText3");
    masterTL.from("#text3", 0.5, {x:-50, opacity:0, ease:Sine.easeOut}, "showText3");
    masterTL.from("#highlight3Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "showText3+=0.5");
    masterTL.to("#text3", 0.5, {opacity:0, ease:Sine.easeIn}, "showText3+=2");
    masterTL.to("#highlight3Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "showText3+=2.25");
    
    masterTL.add("showText4");
    masterTL.from("#text4", 0.5, {x:-50, opacity:0, ease:Sine.easeOut}, "showText4");
    masterTL.from("#highlight4Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "showText4+=0.5");
    masterTL.to("#text4", 0.5, {opacity:0, ease:Sine.easeIn}, "showText4+=2");
    masterTL.to("#highlight4Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "showText4+=2.25");
    
    masterTL.add("showUSP1", "-=0.3");
    masterTL.from("#sticker", 0.5, {opacity:0, ease:Sine.easeInOut}, "showUSP1");
    masterTL.to(["#sticker"], 0.3, {opacity:0, ease:Sine.easeOut}, "showUSP1+=3");
    
    masterTL.add("endScreen", "-=0.5");
    masterTL.to(["#bg", "#cow", "#product"], 0.5, {'-webkit-filter':'blur(3px)','filter':'blur(3px)', ease:Sine.easeInOut}, "endScreen");
    masterTL.from("#darkBg", 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen");
    masterTL.to("#logo", 0.5, {width:50, y:-102, ease:Sine.easeInOut}, "endScreen+=0.3");
    masterTL.from("#endText", 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen+=0.6");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endScreen+=1");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endScreen+=1.5");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endScreen+=1.5");
 
    masterTL.play();
}