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
    masterTL.from("#sticker", 0.5, {scale:0, rotation:-360, ease:Back.easeOut}, "start+=1")
    masterTL.to(["#text1", "#text1HighlightWrapper", "#sticker"], 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=2.7")
    masterTL.to("#introBg", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=2.7")
    masterTL.from("#brochure", 1, {scale:4, y:21, x:117, rotation:-8, ease:Power2.easeInOut}, "start+=2.7")
    masterTL.from("#topic1", 0.5, {x:160, ease:Sine.easeOut}, "start+=3.5")
    masterTL.to("#brochure", 4.5, {rotation:-4, y:100, ease:Sine.easeInOut}, "start+=3.5")
    masterTL.from("#topic2", 0.5, {x:160, ease:Sine.easeOut}, "start+=5")
    masterTL.from("#topic3", 0.5, {x:160, ease:Sine.easeOut}, "start+=6.5")
    masterTL.to(["#logo", "#topic1", "#topic2", "#topic3", "#stars1"], 0.5, {opacity:0, ease:Sine.easeInOut}, "8.2")
    masterTL.add("endscreen", "-=0.1");
    masterTL.from(["#logo2", "#stars2"], 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.1")
    masterTL.from("#endText", 0.5, {x:-300, ease:Sine.easeOut}, "endscreen+=0.2")
    masterTL.from("#text2HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "endscreen+=0.8")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen+=1");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=1.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=1.7");
 
    masterTL.play();

    console.log(masterTL.duration());
}