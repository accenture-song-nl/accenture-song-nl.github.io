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
        gsap.set("#extraScaler", {scale:newScale*bannerS});
        // gsap.set(["#logoBarissimo", "#date"], {x:-300});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        // gsap.set(["#logoBarissimo", "#date"], {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start");
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.from(["#text1", "#text1B"], 0.3, {opacity:0, ease:Sine.easeOut})
    masterTL.from("#highlight1Wrapper", 0.7, {width:0, ease:Sine.easeOut}, "+=0.3");
    masterTL.to("#text1B", 0.3, {opacity:0, ease:Sine.easeIn}, "+=2.5");
    masterTL.to(["#text1", "#text1B", "#highlight1Wrapper"], 0.5, {y:-300, ease:Sine.easeInOut})
    masterTL.from("#product1", 1, {x:900, ease:Power4.easeOut}, "+=0.2");
    masterTL.add(animateLights, "-=1")
    masterTL.from("#sticker", 1, {x:-1200, ease:Power4.easeOut}, "+=1.5");
    masterTL.from("#disclaimer", 0.5, {opacity:0, ease:Power4.easeOut}, "-=1");
    masterTL.to("#product1", 0.7, {x:100, ease:Power2.easeInOut}, "-=1");
    masterTL.to(["#bg", "#light1"], 1, {'-webkit-filter':'blur(5px)','filter':'blur(5px)', ease:Sine.easeInOut}, "+=1");
    masterTL.to(["#light2", "#light3", "#product1", "#sticker", "#text2", "#highlight2Wrapper", "#disclaimer"], 1, {opacity:0, ease:Sine.easeInOut}, "-=1");
    masterTL.to(["#text1", "#text1B", "#highlight1Wrapper"], 0.5, {y:0, ease:Sine.easeInOut}, "-=0")
    masterTL.to("#logo", 0.3, {opacity:0, ease:Sine.easeInOut}, "-=0.2")
    masterTL.from("#logo2", 0.3, {opacity:0, ease:Sine.easeInOut})
    masterTL.to("#text1B", 0.3, {opacity:1, ease:Sine.easeIn}, "-=0.3");
    masterTL.from("#tagline", 1, {opacity:0, ease:Sine.easeOut});
    masterTL.from("#ctaLeft", 0.5, {scale:0, ease:Back.easeOut}, "+=0.3");
    masterTL.from("#ctaRight", 0.0001, {opacity:0});
    masterTL.from("#ctaRight", 0.5, {x:-50, ease:Back.easeOut});
    
  

    
    masterTL.play();
}

function animateLights(){
    var tl = gsap.timeline({});
    tl.add("start")
    tl.to("#light1", 3, {opacity:1, ease:Power4.easeOut}, "start");
    tl.to(["#light2", "#light3"], 3, {opacity:0.5, ease:Power4.easeOut}, "start");
    tl.to("#light2", 6, {rotation:-20, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start-=0.5");
    tl.to("#light3", 4, {rotation:10, ease:Sine.easeInOut, repeat:2, yoyo:true}, "start-=0.5");

    return tl;
}