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
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){
    masterTL = gsap.timeline({paused:true});
    masterTL.add("intro")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    // masterTL.from("#product", 17, {x:150, ease:Sine.easeOut}, "intro")
    // masterTL.from("#productLogoWrapper", 1, {width:0, ease:Sine.easeInOut}, "intro+=0.5")
    
    masterTL.from("#bgBorder", 0.5, {scale:2.2, ease:Sine.easeOut}, "intro+=0.5")
    masterTL.from("#text1", 0.5, {opacity:0, x:-100, ease:Sine.easeOut}, "intro+=1")
    masterTL.from("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeOut}, "intro+=1.5")

    masterTL.to(["#text1", "#highlight1Wrapper"], 0.5, {opacity:0, x:100, ease:Sine.easeIn}, "intro+=4")
    
    masterTL.to("#bgBorder", 0.5, {height:902, ease:Sine.easeOut}, "intro+=4.5")
    
    masterTL.from("#text2", 0.5, {opacity:0, x:-100, ease:Sine.easeOut}, "intro+=5")
    masterTL.to("#text2", 0.5, {opacity:0, x:100, ease:Sine.easeIn}, "intro+=7")

    masterTL.from("#text3", 0.5, {opacity:0, x:-100, ease:Sine.easeOut}, "intro+=7.5")
    masterTL.to("#text3", 0.5, {opacity:0, x:100, ease:Sine.easeIn}, "intro+=9.5")

    masterTL.from("#text4", 0.5, {opacity:0, x:-100, ease:Sine.easeOut}, "intro+=10")
    masterTL.to("#text4", 0.5, {opacity:0, x:100, ease:Sine.easeIn}, "intro+=12")

    masterTL.from("#sticker", 0.5, {opacity:0, x:-100, ease:Sine.easeOut}, "intro+=12.5")

    masterTL.from("#endBg", 0.5, {opacity:0, ease:Sine.easeIn}, "intro+=14.5")
    masterTL.from("#endLogo", 0.5, {opacity:0, y:20, ease:Sine.easeIn}, "intro+=15")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 70%", ease:Back.easeOut}, "intro+=15.5");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "intro+=16.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "intro+=16.2");
    
    masterTL.play();   
}