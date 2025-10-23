myFT.on("ready", init);


function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            // gsap.to("#ctaRight", 0.3, {opacity:0.8, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            // gsap.to("#ctaRight", 0.3, {opacity:1, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, "start");
    masterTL.from("#bg1Wrapper", 3, {x:300, ease:Sine.easeOut}, "start")
    masterTL.from("#bg2Wrapper", 3, {x:180, ease:Sine.easeOut}, "start")
    masterTL.from("#bg3Wrapper", 3, {x:220, ease:Sine.easeOut}, "start")
    masterTL.from("#bg4Wrapper", 3, {x:260, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 1, {x:300, ease:Power1.easeOut}, "start+=1")
    
    masterTL.to("#text1", 1, {x:-300, ease:Power1.easeIn}, "start+=4")
    masterTL.from("#text2", 1, {x:300, ease:Power1.easeOut}, "start+=4.5")
    masterTL.from("#book", 1.3, {x:50, y:300, rotation:180, ease:Power1.easeOut}, "start+=5")
    
    masterTL.from("#endscreen", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=8")
    masterTL.from("#text3", 1, {x:-50, opacity:0, ease:Power1.easeOut}, "start+=8.5")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=9");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=9.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=9.7");
 
    masterTL.play();

    console.log(masterTL.duration());
}