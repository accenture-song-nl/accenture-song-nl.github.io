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
        // masterTL.progress(1);
        masterTL.pause();
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#text1", 0.5, {x:300, ease:Sine.easeOut}, "start+=0")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=0.8")
    // masterTL.from("#sticker", 0.5, {scale:0, rotation:-360, ease:Back.easeOut}, "start+=1")
    masterTL.to(["#text1", "#text1HighlightWrapper"], 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=2.7")
    masterTL.to("#introBg", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=2.7");
    masterTL.from("#brochure", 1, {scale:2.3, y:123, x:5, rotation:-4, ease:Power2.easeInOut}, "start+=2.7");
    masterTL.to("#brochure", 2, {rotation:2, ease:Sine.easeInOut}, "start+=3.5");
    masterTL.to("#brochure", 0.5, {x:-300, ease:Sine.easeInOut}, "start+=5.5");
    masterTL.to("#stars1", 0.5, {x:-280, ease:Sine.easeInOut}, "start+=5.5");
    
    masterTL.from("#stars2", 0.5, {x:250, ease:Sine.easeOut}, "start+=5.5")
    masterTL.from("#gift1", 0.5, {x:300, ease:Sine.easeOut}, "start+=5.5")
    masterTL.from("#topic1", 0.5, {x:-200, ease:Sine.easeOut}, "start+=6")
    masterTL.to("#stars2", 0.5, {x:-250, ease:Sine.easeOut}, "start+=8")
    masterTL.to("#gift1", 0.5, {x:-300, ease:Sine.easeOut}, "start+=8")
    masterTL.to("#topic1", 0.5, {x:-200, ease:Sine.easeOut}, "start+=8")

    masterTL.from("#stars3", 0.5, {x:250, ease:Sine.easeOut}, "start+=8")
    masterTL.from("#gift2", 0.5, {x:300, ease:Sine.easeOut}, "start+=8")
    masterTL.from("#topic2", 0.5, {x:-200, ease:Sine.easeOut}, "start+=8.5")
    masterTL.to("#stars3", 0.5, {x:-250, ease:Sine.easeOut}, "start+=10.5")
    masterTL.to("#gift2", 0.5, {x:-300, ease:Sine.easeOut}, "start+=10.5")
    masterTL.to("#topic2", 0.5, {x:-200, ease:Sine.easeOut}, "start+=10.5")
    
    masterTL.from("#stars4", 0.5, {x:270, ease:Sine.easeOut}, "start+=10.5")
    masterTL.from("#gift3", 0.5, {x:300, ease:Sine.easeOut}, "start+=10.5")
    masterTL.from("#topic3", 0.5, {x:-200, ease:Sine.easeOut}, "start+=11")
    masterTL.to("#stars4", 0.5, {x:-250, ease:Sine.easeOut}, "start+=13")
    masterTL.to("#gift3", 0.5, {x:-300, ease:Sine.easeOut}, "start+=13")
    masterTL.to("#topic3", 0.5, {x:-200, ease:Sine.easeOut}, "start+=13")

    
    masterTL.add("endscreen", "-=0.1");
    masterTL.to("#logo", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen")
    masterTL.from(["#logo2", "#stars5"], 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen+=0.2");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.9");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=0.9");
 
    masterTL.play();

    console.log(masterTL.duration());
}