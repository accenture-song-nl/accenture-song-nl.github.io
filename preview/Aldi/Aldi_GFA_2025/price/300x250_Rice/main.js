myFT.on("ready", init);


function init() {

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

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true, repeat:2});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    
    masterTL.add("start");
    masterTL.from("#panelLeft", 0.5, {x:-200, ease:Power2.easeOut}, "start")
    masterTL.from("#product1", 0.5, {x:-300, ease:Sine.easeOut}, "start+=0.2")
    masterTL.from("#text1A", 0.5, {x:-300, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#product1Info", 0.5, {x:-300, ease:Sine.easeOut}, "start+=0.4")
    masterTL.from(["#product1PriceBg", "#product1PriceTopText"], 0.5, {scale:0, ease:Back.easeOut}, "start+=1.5")
    masterTL.from("#product1PriceTop", 1, {y:-100, ease:Power2.easeOut}, "start+=2")
    masterTL.from("#product1Price", 0.5, {scale:0, ease:Back.easeOut}, "start+=2.8")
    masterTL.from("#text1B", 0.5, {x:300, ease:Sine.easeOut}, "start+=3")
    
    masterTL.add("frame2", "+=1");
    masterTL.to("#product1", 0.5, {x:-17, ease:Sine.easeInOut}, "frame2")
    masterTL.to("#product1Info", 0.5, {x:-17, ease:Sine.easeInOut}, "frame2")
    masterTL.to(["#product1Price", "#product1PriceBg", "#product1PriceTop", "#product1PriceTopText"], 0.5, {x:18, ease:Sine.easeInOut}, "frame2")
    masterTL.from("#mainText1", 0.5, {x:-20, opacity:0, ease:Sine.easeOut}, "frame2+=0.4")
    masterTL.from("#mainText2", 0.5, {x:20, opacity:0, ease:Sine.easeOut}, "frame2+=0.8")
    masterTL.from("#mainText3", 0.5, {x:-20, opacity:0, ease:Sine.easeOut}, "frame2+=1.2")

    masterTL.add("frame7", "+=1");
    masterTL.to("#logo", 0.5, {x:100, ease:Sine.easeIn}, "frame7")
    masterTL.to("#mainText1", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame7")
    masterTL.to("#mainText2", 0.5, {x:20, opacity:0, ease:Sine.easeIn}, "frame7")
    masterTL.to("#mainText3", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame7")
    masterTL.to("#text1A", 0.5, {x:-300, ease:Sine.easeIn}, "frame7")
    masterTL.to("#text1B", 0.5, {x:300, ease:Sine.easeIn}, "frame7")
    masterTL.to("#product1Info", 0.5, {x:-300, ease:Sine.easeIn}, "frame7")
    masterTL.to(["#product1Price", "#product1PriceBg", "#product1PriceTop", "#product1PriceTopText"], 0.5, {x:300, ease:Sine.easeIn}, "frame7")
    masterTL.to("#product1", 0.5, {x:-300, ease:Sine.easeIn}, "frame7")
    masterTL.to("#panelLeft", 0.5, {x:-200, ease:Power2.easeIn}, "frame7")
    
    masterTL.add("endScreen");
    masterTL.from("#logoEnd", 0.5, {y:-50, opacity:0, ease:Sine.easeOut}, "endScreen")
    masterTL.from("#tagline", 0.5, {y:-30, opacity:0, ease:Sine.easeOut}, "endScreen+=0.2")
    masterTL.from("#endText", 0.5, {x:-300, ease:Sine.easeOut}, "endScreen+=0.4")
    masterTL.from("#highlight1Wrapper", 1, {width:0, ease:Sine.easeOut}, "endScreen+=1")
    masterTL.from("#cta", 1, {scale:0, ease:Back.easeOut}, "endScreen+=1.5")
    
    masterTL.from("#banner", 1, {}, 14);
    
    
    masterTL.play();

    console.log(masterTL.duration());
    
    
}