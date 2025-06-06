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
       
    masterTL.from("#intro1 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut});    
    masterTL.from("#intro1 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.to("#intro1 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");    
    masterTL.from("#intro2 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");
    masterTL.from("#intro2 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.to("#intro2 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");     
    masterTL.from("#intro3 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.from("#intro3 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    

    masterTL.from("#bgWrapper", 0.6, {width:0, ease:Sine.easeInOut}, "+=1");    
    masterTL.to("#bg", 2.1, {scale:1.05, ease:Power0.easeNone}, "-=0.6");    
    
    masterTL.from("#productBg", 0.6, {width:0, ease:Sine.easeInOut}, "+=0");  
    masterTL.from("#productStars", 0.6, {x:300, ease:Sine.easeInOut}, "-=0.6");  
    masterTL.from("#date", 0.3, {x:"50%", ease:Sine.easeOut});  
    masterTL.from("#product1", 0.6, {scale:0, ease: "back.out(1.4)",}, "-=0.15");  
    masterTL.from("#product1Info", 0.5, {scale:0, ease:Back.easeOut}, "-=0.4");  
    masterTL.from("#product1Disclaimer", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.4");  
    masterTL.to("#product1", 0.5, {scale:0, ease: "back.in(1.4)",}, "+=1");  
    masterTL.to("#product1Info", 0.5, {scale:0, ease:Back.easeIn}, "-=0.4");  
    masterTL.to("#product1Disclaimer", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.4");  
    
    masterTL.from("#product2", 0.6, {scale:0, ease: "back.out(1.4)",});  
    masterTL.from("#product2Info", 0.5, {scale:0, ease:Back.easeOut}, "-=0.4");  
    masterTL.from("#product2Disclaimer", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.4");  

    masterTL.from("#endBg", 0.6, {width:0, ease:Sine.easeInOut}, "+=1.5");
    masterTL.to("#logo", 0.5, {scale:1, left:"50%", translateX:"-50%", y:5, ease:Sine.easeInOut});    
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeInOut}, "-=0.1");
    masterTL.from("#endStars", 0.6, {opacity:0, ease:Sine.easeInOut}, "-=0");     
    masterTL.from("#endText", 0.3, {opacity:0, ease:Sine.easeInOut}, "-=0.3");    
    masterTL.from("#endHighlight1Wrapper", 0.5, {width:0, ease:Sine.easeInOut}); 
    masterTL.from("#endHighlight2Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "-=0.2"); 
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut});
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.1");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "-=0.01");
    
    masterTL.play();

}