myFT.on("ready", init);


function init() {

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
        // masterTL.progress(1);
        masterTL.pause();
    })

    getAnimation();
}

function onResize(){
    var bannerH = document.querySelector("#banner").offsetHeight;
    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerS = bannerH/1200;
    gsap.set("#scaler", {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
        gsap.set("#border", {width:"47.5%", left:"50%", x:"-50%"});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#border", {width:bannerW*((1/bannerS)*0.95), left:"50%", x:"-50%"});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    
    masterTL.add("intro")
    masterTL.from("#bg", 2, {scale:1.1, ease:Sine.easeOut}, "intro");
    masterTL.from(["#cow"], 2, {scale:1.3, ease:Sine.easeOut}, "intro");
    masterTL.from("#product", 2, {scale:1.8, ease:Sine.easeOut}, "intro");

    masterTL.add("start", "-=2");

    masterTL.from("#nurNurWrapper", 1, {width:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#tagline", 0.5, {scale:0, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#tagline", 0.7, {y:-70, ease:Back.easeOut}, "start+=0.8");
    masterTL.from("#naturText", 0.7, {y:-200, rotation:-30, ease: "back.out(2)"}, "start+=0.8");
    masterTL.from("#leafsContainer", 1, {y:100, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#leafs", 1.5, {rotation:60, ease: "back.inOut(5)"}, "start+=0.8");
    masterTL.from("#topBlock", 0.5, {scale:0, ease:Sine.easeOut}, "start+=3.5");
    masterTL.to("#introWrapper", 0.8, {scale:0.49, x:-1, y:-59, ease:"Sine.inOut"}, "start+=3.5");
    masterTL.to("#topBlock", 0.15, {y:-15, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=4");
    
    masterTL.add("showText1");
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

    masterTL.add("showUSP1");
    masterTL.from("#sticker", 0.5, {opacity:0, ease:Sine.easeInOut}, "showUSP1");
    masterTL.to(["#sticker"], 0.3, {opacity:0, ease:Sine.easeOut}, "showUSP1+=3");
    
    masterTL.add("endScreen", "-=0.5");
    masterTL.to(["#bg", "#cow", "#product"], 0.5, {'-webkit-filter':'blur(6px)','filter':'blur(6px)', ease:Sine.easeInOut}, "endScreen");
    masterTL.from("#darken", 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen");
    masterTL.to("#logo", 0.5, {width:146, y:-582, ease:Sine.easeInOut}, "endScreen+=0.3");
    masterTL.from("#endText", 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen+=0.6");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 70%", ease:Back.easeOut}, "endScreen+=1");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endScreen+=1.5");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endScreen+=1.5");
    

    
    masterTL.play();
}