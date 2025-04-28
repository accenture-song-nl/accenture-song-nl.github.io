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
    masterTL.add("start");
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.from(["#text1", "#text1B"], 0.3, {opacity:0, ease:Sine.easeOut})
    masterTL.from("#highlight1Wrapper", 0.7, {width:0, ease:Sine.easeOut}, "+=0.3");
    masterTL.to("#text1B", 0.3, {opacity:0, ease:Sine.easeIn}, "+=2.5");
    masterTL.to(["#text1", "#text1B", "#highlight1Wrapper"], 0.5, {scale:0.76, y:-78, x:32, ease:Sine.easeInOut})
    masterTL.from("#product1", 1, {x:220, ease:Power4.easeOut}, "+=0.2");
    masterTL.add(animateLights, "-=1")
    masterTL.from("#sticker", 1, {x:-250, ease:Power4.easeOut}, "+=1.5");
    masterTL.from("#disclaimer", 0.5, {opacity:0, ease:Power4.easeOut}, "-=1");
    masterTL.to("#product1", 0.7, {x:32, ease:Power2.easeInOut}, "-=1");
    masterTL.to(["#bg", "#light1"], 1, {'-webkit-filter':'blur(5px)','filter':'blur(5px)', ease:Sine.easeInOut}, "+=1");
    masterTL.to(["#light2", "#light3", "#product1", "#sticker", "#text2", "#highlight2Wrapper", "#disclaimer"], 1, {opacity:0, ease:Sine.easeInOut}, "-=1");
    masterTL.to(["#text1", "#text1B", "#highlight1Wrapper"], 0.5, {scale:1, y:20, x:0, ease:Sine.easeInOut}, "-=0")
    masterTL.to("#logo", 1, {width: 56, left:"50%", translateX:"-50%", ease:Sine.easeInOut}, "-=0.2");
    masterTL.to("#text1B", 0.3, {opacity:1, y:20, ease:Sine.easeIn}, "-=0.3");
    masterTL.from("#tagline", 1, {opacity:0, ease:Sine.easeOut});
    masterTL.from("#ctaLeft", 0.5, {scale:0, ease:Back.easeOut}, "+=0.3");
    masterTL.from("#ctaRight", 0.0001, {opacity:0});
    masterTL.from("#ctaRight", 0.5, {x:-50, ease:Back.easeOut});
 
    masterTL.play();
}

function animateLights(){
    var tl = gsap.timeline({});
    tl.add("start")
    tl.to("#light1", 3, {opacity:1, ease:Power4.easeOut}, "start");
    tl.to(["#light2", "#light3"], 3, {opacity:0.5, ease:Power4.easeOut}, "start");
    tl.to("#light2", 6, {rotation:-20, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start-=0.5");
    tl.to("#light3", 4, {rotation:10, ease:Sine.easeInOut, repeat:2, yoyo:true}, "start-=0.5");

    return tl;
}