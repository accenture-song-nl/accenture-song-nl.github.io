myFT.on("ready", init);


function init() {

    getAnimation();

    window.addEventListener("resize", onResize);
    onResize();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.1, ease:Sine.easeInOut});
        
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1, ease:Sine.easeInOut});
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

    masterTL = gsap.timeline({paused:true, repeat:0});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    
    masterTL.add("start");
    masterTL.from("#panelLeft", 0.5, {x:900, ease:Power2.easeOut}, "start")
    masterTL.from("#product1", 0.5, {x:-900, ease:Sine.easeOut}, "start+=0.2")
    masterTL.from("#text1A", 0.5, {x:-900, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#product1Info", 0.5, {x:900, ease:Sine.easeOut}, "start+=0.4")
    masterTL.from(["#product1PriceBg", "#product1PriceTopText"], 0.5, {scale:0, ease:Back.easeOut}, "start+=.5")
    masterTL.from("#product1PriceTop", 1, {y:-150, ease:Power2.easeOut}, "start+=1")
    masterTL.from("#product1Disclaimer", 0.5, {opacity:0, y:-20, ease:Back.easeOut}, "start+=1.5")
    masterTL.from("#product1Price", 0.5, {scale:0, ease:Back.easeOut}, "start+=1.8")
    masterTL.from("#text1B", 0.5, {x:900, ease:Sine.easeOut}, "start+=2")
    
    masterTL.add("frame2", "+=0");
    masterTL.from(["#mainText", "#highlight1Wrapper"], 0.5, {x:-900, ease:Sine.easeOut}, "frame2")
    // masterTL.from("#highlight1Wrapper", 1, {width:0, ease:Sine.easeOut}, "frame2+=1")

    masterTL.add("frame7", "+=1");
    masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeIn}, "frame7")
    masterTL.to(["#mainText", "#highlight1Wrapper"], 0.5, {x:-900, opacity:0, ease:Sine.easeIn}, "frame7")
    masterTL.to("#text1A", 0.5, {x:-900, ease:Sine.easeIn}, "frame7")
    masterTL.to("#text1B", 0.5, {x:900, ease:Sine.easeIn}, "frame7")
    masterTL.to("#product1Info", 0.5, {x:-900, ease:Sine.easeIn}, "frame7")
    masterTL.to(["#product1Price", "#product1PriceBg", "#product1PriceTop", "#product1PriceTopText", "#product1Disclaimer"], 0.5, {x:900, ease:Sine.easeIn}, "frame7")
    masterTL.to("#product1", 0.5, {x:-900, ease:Sine.easeIn}, "frame7")
    masterTL.to("#panelLeft", 0.5, {x:900, ease:Power2.easeIn}, "frame7")
    // masterTL.to("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeIn}, "frame7")
    
    masterTL.add("endScreen");
    masterTL.from("#logoEnd", 0.5, {y:-50, opacity:0, ease:Sine.easeOut}, "endScreen")
    masterTL.from("#tagline", 0.5, {y:-30, opacity:0, ease:Sine.easeOut}, "endScreen+=0.2")
    masterTL.from("#mainText1", 0.5, {x:-60, opacity:0, ease:Sine.easeOut}, "endScreen+=0.4")
    masterTL.from("#mainText2", 0.5, {x:60, opacity:0, ease:Sine.easeOut}, "endScreen+=0.8")
    masterTL.from("#mainText3", 0.5, {x:-60, opacity:0, ease:Sine.easeOut}, "endScreen+=1.2")
    masterTL.from("#endText", 0.5, {x:-300, ease:Sine.easeOut}, "endScreen+=0.4")
    masterTL.from("#cta", 1, {scale:0, ease:Back.easeOut}, "endScreen+=1.5")
    
    masterTL.from("#banner", 1, {}, 9);
    
    
    masterTL.play();

    console.log(masterTL.duration());
    
    
}