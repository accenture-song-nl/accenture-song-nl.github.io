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
        // masterTL.progress(1);
        masterTL.pause();
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
        gsap.set("#date1", {x:-300});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#date1", {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("intro")
    masterTL.from("#bg", 2.5, {scale:1.5, ease:Power3.easeInOut}, "intro");
    masterTL.from("#logo", 0.5, {scale:0, ease:Back.easeOut}, "intro+=1");
    masterTL.from("#bgBorder", 1, {scale:5, ease:Sine.easeOut}, "intro+=1");
    masterTL.from("#text1", 0.5, {x:-1200, ease:Sine.easeOut}, "intro+=2");
    masterTL.from("#highlightWrapper1", 0.75, {width:0, ease:Sine.easeOut}, "intro+=2.5");
    
    masterTL.to("#bgBorder", 0.5, {width:0, height:0, ease:Sine.easeOut}, "intro+=5");
    masterTL.to("#bg", 0.5, {scale:0.8, ease:Sine.easeOut}, "intro+=5");
    masterTL.to("#text1", 0.5, {x:1200, ease:Sine.easeIn}, "intro+=5");
    masterTL.to("#highlightWrapper1", 0.75, {x:1200, ease:Sine.easeIn}, "intro+=5");
    
    masterTL.from("#date1", 0.5, {opacity:0, ease:Sine.easeOut}, "intro+=5.5");
    masterTL.from("#product1", 1, {x:-1200, ease:Sine.easeOut}, "intro+=5.5");
    masterTL.from("#priceBlock1", 1, {x:-1400, ease:Sine.easeOut}, "intro+=5.5");
    
    masterTL.to("#priceBlock1", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "intro+=8");
    masterTL.from("#sticker", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "intro+=8.15");
    masterTL.to("#sticker", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "intro+=9.5");
    masterTL.to("#product1", 1, {x:1200, ease:Sine.easeIn}, "intro+=9.5");
    
    masterTL.add("product2", "-=0.5")
    masterTL.from("#product2", 1, {x:-1200, ease:Sine.easeOut}, "product2");
    masterTL.from("#priceBlock2", 1, {x:-1400, ease:Sine.easeOut}, "product2");
    masterTL.to("#priceBlock2", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "product2+=3.5");
    masterTL.to("#sticker", 0.3, {rotationY:0, ease:Sine.easeInOut}, "product2+=3.65");
    masterTL.to("#sticker", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "product2+=5");
    masterTL.to("#product2", 1, {x:1200, ease:Sine.easeIn}, "product2+=5");
    
    masterTL.add("product3", "-=0.5")
    masterTL.from("#product3", 1, {x:-1200, ease:Sine.easeOut}, "product3");
    masterTL.from("#priceBlock3", 1, {x:-1400, ease:Sine.easeOut}, "product3");
    masterTL.to("#priceBlock3", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "product3+=3.5");
    masterTL.to("#sticker", 0.3, {rotationY:0, ease:Sine.easeInOut}, "product3+=3.65");
    masterTL.to("#sticker", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "product3+=5");
    masterTL.to("#product3", 1, {x:1200, ease:Sine.easeIn}, "product3+=5");
    masterTL.to("#date1", 1, {opacity:0, ease:Sine.easeIn}, "product3+=5");
    masterTL.to("#logo", 1, {opacity:0, ease:Sine.easeIn}, "product3+=5");
    
    masterTL.add("end", "-=0.5")
    masterTL.from("#logoEnd", 0.5, {y:20, opacity:0, ease:Sine.easeOut}, "end");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 70%", ease:Back.easeOut}, "end");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "end+=0.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "end+=0.7");

    
    masterTL.play();
    
}