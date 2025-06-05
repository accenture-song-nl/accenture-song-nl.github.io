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

    gsap.set("#product1", {scale:0.73, x:70, y:26});
    gsap.set("#product2", {scale:0.55, x:47, y:379});

    masterTL = gsap.timeline({paused:true, repeat:0});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    
    masterTL.add("start");
    masterTL.from("#product1", 0.5, {x:-900, ease:Sine.easeOut}, "start+=0.2")
    masterTL.from("#text1A", 0.5, {x:-900, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#panelLeft", 0.5, {x:900, ease:Power2.easeOut}, "start+=1.3")
    masterTL.from("#product2", 0.5, {x:900, ease:Sine.easeOut}, "start+=1.5")
    masterTL.from("#text1B", 0.5, {x:900, ease:Sine.easeOut}, "start+=1.6")
    
    masterTL.add("frame2", "+=0");
    masterTL.from("#mainText", 0.5, {x:-900, ease:Sine.easeOut}, "frame2")
    masterTL.from("#highlight1Wrapper", 1, {width:0, ease:Sine.easeOut}, "frame2+=1")
    
    masterTL.add("frame3", "+=1");
    masterTL.to("#mainText", 0.5, {x:-900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#text1A", 0.5, {x:-900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#text1B", 0.5, {x:900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#product2", 0.5, {x:900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#product1", 0.5, {x:-900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeIn}, "frame3")
    masterTL.to("#panelLeft", 0.5, {x:900, ease:Power2.easeIn}, "frame3")
    masterTL.to("#scaler", 0.5, {background:"#00B6ED", ease:Sine.easeIn}, "frame3")
    masterTL.from("#panelRight", 0.5, {x:1200, ease:Sine.easeOut}, "frame3+=0.5")
    masterTL.set("#product1", {scale:1, x:900, y:0}, "frame3+=0.5")
    masterTL.to("#product1", 0.5, {x:0, ease:Sine.easeOut}, "frame3+=0.7")
    masterTL.from("#product1Info", 0.5, {x:900, ease:Sine.easeOut}, "frame3+=1.4")
    masterTL.from("#product1Price", 0.5, {scale:0, ease:Power4.easeOut}, "frame3+=2.1")
    
    masterTL.add("frame4", "+=1");
    masterTL.to("#product1Info", 0.5, {x:900, ease:Sine.easeIn}, "frame4")
    masterTL.to("#product1Price", 0.5, {scale:0, ease:Power4.easeIn}, "frame4")
    masterTL.to("#product1", 0.5, {x:900, ease:Sine.easeIn}, "frame4+=0.5")
    masterTL.to("#panelRight", 0.5, {x:900, ease:Sine.easeIn}, "frame4+=0.7")
    masterTL.to("#scaler", 0.5, {background:"#99E2F8", ease:Sine.easeIn}, "frame4+=1")
    masterTL.from("#panelRight2", 0.5, {x:1200, ease:Sine.easeOut}, "frame4+=1.3")
    masterTL.set("#product2", {scale:1, x:900, y:0}, "frame4+=1.3")
    masterTL.to("#product2", 0.5, {x:0, ease:Sine.easeOut}, "frame4+=1.5")
    masterTL.from("#product2Info", 0.5, {x:900, ease:Sine.easeOut}, "frame4+=2.2")
    masterTL.from("#product2Price", 0.5, {scale:0, ease:Power4.easeOut}, "frame4+=2.9")

    masterTL.add("frame5", "+=1");
    masterTL.to("#product2Info", 0.5, {x:900, ease:Sine.easeIn}, "frame5")
    masterTL.to("#product2Price", 0.5, {scale:0, ease:Power4.easeIn}, "frame5")
    masterTL.to("#product2", 0.5, {x:900, ease:Sine.easeIn}, "frame5+=0.5")
    masterTL.to("#panelRight2", 0.5, {x:900, ease:Sine.easeIn}, "frame5+=0.7")
    // masterTL.set("#product1", {scale:0.73, x:-900, y:26});
    // masterTL.set("#product2", {scale:0.55, x:900, y:379});
    // masterTL.to("#product1", 0.5, {x:-3, ease:Sine.easeOut}, "frame5+=1.7")
    // masterTL.to("#text1A", 0.5, {x:0, ease:Sine.easeOut}, "frame5+=1.8")
    // masterTL.to("#panelLeft", 0.5, {x:0, ease:Power2.easeOut}, "frame5+=2.8")
    // masterTL.to("#product2", 0.5, {x:186, ease:Sine.easeOut}, "frame5+=3")
    // masterTL.to("#text1B", 0.5, {x:0, ease:Sine.easeOut}, "frame5+=3.1")

    // masterTL.add("frame6", "+=1");
    // masterTL.to("#mainText", 0.5, {x:0, ease:Sine.easeOut}, "frame6")
    // masterTL.to("#highlight1Wrapper", 0.5, {width:"100%", ease:Sine.easeOut}, "frame6+=0.5")

    // masterTL.add("frame7", "+=1");
    // masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#mainText", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#text1A", 0.5, {x:-900, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#text1B", 0.5, {x:900, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#product2", 0.5, {x:900, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#product1", 0.5, {x:-900, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#panelLeft", 0.5, {x:900, ease:Power2.easeIn}, "frame7")
    // masterTL.to("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeIn}, "frame7")
    
    masterTL.add("endScreen");
    masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeIn}, "endScreen")
    masterTL.from("#logoEnd", 0.5, {y:-50, opacity:0, ease:Sine.easeOut}, "endScreen+=0.3")
    masterTL.from("#tagline", 0.5, {y:-30, opacity:0, ease:Sine.easeOut}, "endScreen+=0.5")
    masterTL.from("#mainText1", 0.5, {x:-60, opacity:0, ease:Sine.easeOut}, "endScreen+=0.7")
    masterTL.from("#mainText2", 0.5, {x:60, opacity:0, ease:Sine.easeOut}, "endScreen+=1.1")
    masterTL.from("#mainText3", 0.5, {x:-60, opacity:0, ease:Sine.easeOut}, "endScreen+=1.5")
    masterTL.from("#cta", 1, {scale:0, ease:Back.easeOut}, "endScreen+=1.8")
    
    
    masterTL.play();

    console.log(masterTL.duration());
    
    
}