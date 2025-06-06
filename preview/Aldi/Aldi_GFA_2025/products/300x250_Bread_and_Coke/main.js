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

    gsap.set("#product1", {scale:0.55333333333, x:-3, y:63});
    gsap.set("#product2", {scale:0.54333333333, x:186, y:67});

    masterTL = gsap.timeline({paused:true, repeat:0});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    
    masterTL.add("start");
    masterTL.from("#panelLeft", 0.5, {x:-200, ease:Power2.easeOut}, "start")
    masterTL.from("#product1", 0.5, {x:-300, ease:Sine.easeOut}, "start+=0.2")
    masterTL.from("#text1A", 0.5, {x:-300, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#product2", 0.5, {x:300, ease:Sine.easeOut}, "start+=.5")
    masterTL.from("#text1B", 0.5, {x:300, ease:Sine.easeOut}, "start+=.6")
    
    masterTL.add("frame2", "+=1");
    masterTL.from("#mainText1", 0.5, {x:-20, opacity:0, ease:Sine.easeOut}, "frame2")
    masterTL.from("#mainText2", 0.5, {x:20, opacity:0, ease:Sine.easeOut}, "frame2+=0.4")
    masterTL.from("#mainText3", 0.5, {x:-20, opacity:0, ease:Sine.easeOut}, "frame2+=0.8")
    
    masterTL.add("frame3", "+=1");
    masterTL.to("#mainText1", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame3")
    masterTL.to("#mainText2", 0.5, {x:20, opacity:0, ease:Sine.easeIn}, "frame3")
    masterTL.to("#mainText3", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame3")
    masterTL.to("#text1A", 0.5, {x:-300, ease:Sine.easeIn}, "frame3")
    masterTL.to("#text1B", 0.5, {x:300, ease:Sine.easeIn}, "frame3")
    masterTL.to("#product2", 0.5, {x:300, ease:Sine.easeIn}, "frame3")
    masterTL.to("#product1", 0.5, {x:-300, ease:Sine.easeIn}, "frame3")
    masterTL.to("#panelLeft", 0.5, {x:-200, ease:Power2.easeIn}, "frame3")
    masterTL.from("#panelRight", 0.5, {x:300, ease:Sine.easeOut}, "frame3+=0.5")
    masterTL.set("#product1", {scale:1, x:300, y:0}, "frame3+=0.5")
    masterTL.to("#product1", 0.5, {x:0, ease:Sine.easeOut}, "frame3+=0.5")
    masterTL.from("#product1Info", 0.5, {x:300, ease:Sine.easeOut}, "frame3+=0.5")
    masterTL.from("#product1Price", 0.5, {scale:0, ease:Power4.easeOut}, "frame3+=1")
    
    masterTL.add("frame4", "+=1");
    masterTL.to("#product1Price", 0.5, {scale:0, ease:Power4.easeIn}, "frame4")
    masterTL.to("#product1Info", 0.5, {x:300, ease:Sine.easeIn}, "frame4+=0.5")
    masterTL.to("#product1", 0.5, {x:300, ease:Sine.easeIn}, "frame4+=0.5")
    masterTL.to("#panelRight", 0.5, {x:300, ease:Sine.easeIn}, "frame4+=0.5")
    masterTL.to("#banner", 0.5, {background:"#00B6ED", ease:Sine.easeIn}, "frame4+=1")
    masterTL.from("#panelRight2", 0.5, {x:300, ease:Sine.easeOut}, "frame4+=1.3")
    masterTL.set("#product2", {scale:1, x:300, y:0}, "frame4+=1.3")
    masterTL.to("#product2", 0.5, {x:0, ease:Sine.easeOut}, "frame4+=1.3")
    masterTL.from("#product2Info", 0.5, {x:300, ease:Sine.easeOut}, "frame4+=1.3")
    masterTL.from("#product2Price", 0.5, {scale:0, ease:Power4.easeOut}, "frame4+=1.8")

    masterTL.add("frame5", "+=1");
    masterTL.to("#product2Price", 0.5, {scale:0, ease:Power4.easeIn}, "frame5")
    masterTL.to("#product2Info", 0.5, {x:300, ease:Sine.easeIn}, "frame5+=0.5")
    masterTL.to("#product2", 0.5, {x:300, ease:Sine.easeIn}, "frame5+=0.5")
    masterTL.to("#panelRight2", 0.5, {x:300, ease:Sine.easeIn}, "frame5+=0.5")
    masterTL.to("#banner", 0.5, {background:"#99E2F8", ease:Sine.easeIn}, "frame5+=1")
    // masterTL.set("#product1", {scale:0.55333333333, x:-300, y:63});
    // masterTL.set("#product2", {scale:0.54333333333, x:300, y:67});
    // masterTL.to("#panelLeft", 0.5, {x:0, ease:Power2.easeOut}, "frame5+=1.5")
    // masterTL.to("#product1", 0.5, {x:-3, ease:Sine.easeOut}, "frame5+=1.7")
    // masterTL.to("#text1A", 0.5, {x:0, ease:Sine.easeOut}, "frame5+=1.8")
    // masterTL.to("#product2", 0.5, {x:186, ease:Sine.easeOut}, "frame5+=3")
    // masterTL.to("#text1B", 0.5, {x:0, ease:Sine.easeOut}, "frame5+=3.1")

    // masterTL.add("frame6", "+=1");
    // masterTL.to("#mainText1", 0.5, {x:0, opacity:1, ease:Sine.easeOut}, "frame6")
    // masterTL.to("#mainText2", 0.5, {x:0, opacity:1, ease:Sine.easeOut}, "frame6+=0.4")
    // masterTL.to("#mainText3", 0.5, {x:0, opacity:1, ease:Sine.easeOut}, "frame6+=0.8")

    // masterTL.add("frame7", "+=1");
    // masterTL.to("#logo", 0.5, {x:100, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#mainText1", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#mainText2", 0.5, {x:20, opacity:0, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#mainText3", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#text1A", 0.5, {x:-300, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#text1B", 0.5, {x:300, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#product2", 0.5, {x:300, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#product1", 0.5, {x:-300, ease:Sine.easeIn}, "frame7")
    // masterTL.to("#panelLeft", 0.5, {x:-200, ease:Power2.easeIn}, "frame7")
    
    masterTL.add("endScreen");
    masterTL.to("#logo", 0.5, {x:100, ease:Sine.easeIn}, "endScreen")
    masterTL.from("#logoEnd", 0.5, {y:-50, opacity:0, ease:Sine.easeOut}, "endScreen+=0.3")
    masterTL.from("#tagline", 0.5, {y:-30, opacity:0, ease:Sine.easeOut}, "endScreen+=0.5")
    masterTL.from("#endText", 0.5, {x:-300, ease:Sine.easeOut}, "endScreen+=0.7")
    masterTL.from("#highlight1Wrapper", 1, {width:0, ease:Sine.easeOut}, "endScreen+=1.3")
    masterTL.from("#cta", 1, {scale:0, ease:Back.easeOut}, "endScreen+=1.8")
    
    
    masterTL.play();

    console.log(masterTL.duration());
    
    
}