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
    masterTL.add("intro")
    masterTL.from("#bg", 2.5, {scale:1.5, ease:Power3.easeInOut}, "intro");
    masterTL.from("#logo", 0.5, {scale:0, ease:Back.easeOut}, "intro+=1");
    masterTL.from("#bgBorder", 1, {scale:5, ease:Sine.easeOut}, "intro+=1");
    masterTL.from("#text1", 0.5, {x:-300, ease:Sine.easeOut}, "intro+=2");
    masterTL.from("#highlightWrapper1", 0.75, {width:0, ease:Sine.easeOut}, "intro+=2.5");
    
    masterTL.to("#bgBorder", 0.5, {width:0, height:0, ease:Sine.easeOut}, "intro+=5");
    masterTL.to("#bg", 0.5, {scale:0.8, ease:Sine.easeOut}, "intro+=5");
    masterTL.to("#text1", 0.5, {x:300, ease:Sine.easeIn}, "intro+=5");
    masterTL.to("#highlightWrapper1", 0.75, {x:300, ease:Sine.easeIn}, "intro+=5");
    masterTL.to("#logo", 1, {x:-9, y:-9, ease:Sine.easeInOut}, "intro+=5");
    
    masterTL.from("#date1", 0.5, {x:150, ease:Sine.easeOut}, "intro+=5.5");
    masterTL.from("#product1", 1, {x:-300, ease:Sine.easeOut}, "intro+=5.5");
    masterTL.from("#priceBlock1", 1, {x:-350, ease:Sine.easeOut}, "intro+=5.5");
    
    masterTL.to("#priceBlock1", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "intro+=8");
    masterTL.from("#sticker", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "intro+=8.15");
    masterTL.to("#sticker", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "intro+=9.5");
    masterTL.to("#product1", 1, {x:300, ease:Sine.easeIn}, "intro+=9.5");
    
    masterTL.add("product2", "-=0.5")
    masterTL.from("#product2", 1, {x:-300, ease:Sine.easeOut}, "product2");
    masterTL.from("#priceBlock2", 1, {x:-350, ease:Sine.easeOut}, "product2");
    masterTL.to("#priceBlock2", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "product2+=3.5");
    masterTL.to("#sticker", 0.3, {rotationY:0, ease:Sine.easeInOut}, "product2+=3.65");
    masterTL.to("#sticker", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "product2+=5");
    masterTL.to("#product2", 1, {x:300, ease:Sine.easeIn}, "product2+=5");
    masterTL.to("#date1", 1, {x:150, ease:Sine.easeIn}, "product2+=5");
    masterTL.to("#logo", 1, {opacity:0, ease:Sine.easeIn}, "product2+=5");
    
    // masterTL.add("product3", "-=0.5")
    // masterTL.from("#product3", 1, {x:-300, ease:Sine.easeOut}, "product3");
    // masterTL.from("#priceBlock3", 1, {x:-350, ease:Sine.easeOut}, "product3");
    // masterTL.to("#priceBlock3", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "product3+=3.5");
    // masterTL.to("#sticker", 0.3, {rotationY:0, ease:Sine.easeInOut}, "product3+=3.65");
    // masterTL.to("#sticker", 0.3, {rotationY:-90, ease:Sine.easeInOut}, "product3+=5");
    // masterTL.to("#product3", 1, {x:300, ease:Sine.easeIn}, "product3+=5");
    
    masterTL.add("end")
    masterTL.from("#logoEnd", 0.5, {y:20, opacity:0, ease:Sine.easeOut}, "end");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "end");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "end+=0.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "end+=0.7");

    
    masterTL.play();
}