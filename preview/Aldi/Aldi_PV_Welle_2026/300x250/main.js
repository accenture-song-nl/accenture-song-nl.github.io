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

    masterTL = gsap.timeline({paused:true, repeat:1});
    masterTL.add("start");
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, "start")
    masterTL.from("#text1", 0.5, {x:-50, opacity:0, ease:Sine.easeInOut}, "start+=0.2")
    masterTL.from("#sticker", 0.7, {scale:0, rotation:-600, ease:Back.easeOut}, "start+=0.5")
    masterTL.from("#highlight1AWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=0.8")
    masterTL.from("#highlight1BWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=1.6")
    masterTL.from("#highlight1CWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=2.4")
    masterTL.from("#highlight1DWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=3")
    
    masterTL.add("frame2", "+=1");
    masterTL.to(["#highlight1AWrapper", "#highlight1BWrapper", "#highlight1CWrapper", "#highlight1DWrapper"], 0.5, {x:50, opacity:0, ease:Sine.easeInOut}, "frame2")
    masterTL.to("#text1", 0.5, {x:50, opacity:0, ease:Sine.easeInOut}, "frame2")
    masterTL.to("#sticker", 0.7, {scale:0, rotation:600, ease:Back.easeIn}, "frame2")
    masterTL.from("#date", 0.5, {x:130, ease:Sine.easeOut}, "frame2+=0.5")
    masterTL.from("#product1", 1, {x:300, ease:Sine.easeOut}, "frame2+=0.5")
    masterTL.from("#price1", 0.5, {scale:0, ease:Back.easeOut}, "frame2+=1")
    masterTL.from("#disclaimer1", 0.5, {opacity:0, ease:Sine.easeOut}, "frame2+=1.5")
    masterTL.from("#disclaimer2", 0.5, {opacity:0, ease:Sine.easeOut}, "frame2+=1.5")
    masterTL.to("#price1", 0.3, {rotationY:90, ease:Sine.easeInOut}, "frame2+=2.5")
    masterTL.from("#badge1", 0.3, {rotationY:-90, ease:Sine.easeIn}, "frame2+=2.8")
    
    masterTL.add("frame3", "+=1");
    masterTL.to("#product1", 1, {x:-300, ease:Sine.easeIn}, "frame3")
    masterTL.to(["#badge1", "#price1"], 1, {x:-400, ease:Sine.easeIn}, "frame3")
    masterTL.to(["#disclaimer1", "#disclaimer2"], 0.5, {opacity:0, ease:Sine.easeIn}, "frame3")
    masterTL.from("#product2", 1, {x:300, ease:Sine.easeOut}, "frame3+=0.5")
    masterTL.from("#price2", 0.5, {scale:0, ease:Back.easeOut}, "frame3+=1")
    masterTL.to("#disclaimer1", 0.5, {opacity:1, ease:Sine.easeOut}, "frame3+=1.5")
    masterTL.to("#disclaimer2", 0.5, {opacity:1, ease:Sine.easeOut}, "frame3+=1.5")
    masterTL.to("#price2", 0.3, {rotationY:90, ease:Sine.easeInOut}, "frame3+=2.5")
    masterTL.from("#badge2", 0.3, {rotationY:-90, ease:Sine.easeIn}, "frame3+=2.8")
    
    masterTL.add("endscreen", "+=1");
    masterTL.to(["#price2", "#date", "#product2", "#badge2", "#disclaimer1", "#disclaimer2", "#logo"], 0.5, {opacity:0, ease:Sine.easeInOut}, "endscreen");
    masterTL.from("#logoEnd", 0.5, {opacity:0, y:50, ease:Sine.easeOut}, "endscreen+=0.5")
    masterTL.from("#tagline", 0.5, {opacity:0, y:50, ease:Sine.easeOut}, "endscreen+=0.8")
    masterTL.from("#ctaLeft", 0.5, {scale:0, ease:Back.easeOut}, "endscreen+=1.2")
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=1.8")
    masterTL.from("#ctaRight", 0.5, {x:-50, ease:Sine.easeOut}, "endscreen+=1.8")
    masterTL.to("#banner", 0.5, {}, 14.5)
    
    masterTL.play();

    console.log(masterTL.duration());
}