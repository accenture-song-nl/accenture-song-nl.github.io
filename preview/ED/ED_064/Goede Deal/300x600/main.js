window.onload = function () {
    init();
}


function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.1})
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1})
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(window.clickTag);
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){
    var svg1 = document.querySelector("#logo2").contentDocument.querySelectorAll("svg .cls-1");
    svg1.forEach(el => {
        el.style.fill = "#410073";
    });

    var svg2 = document.querySelector("#logo2").contentDocument.querySelectorAll("svg .cls-2");
    svg2.forEach(el => {
        el.style.fill = "#fff";
    });

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.5, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start", "-=0.5");
    masterTL.from("#bg1", 3, {scale:1.1, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.5, {opacity:0, x:-100, ease:Sine.easeOut}, "start+=0.5")
    // masterTL.to("#bg1", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=3")
    masterTL.from("#bg2", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=3")
    masterTL.from("#bg2", 3, {scale:1.1, ease:Sine.easeOut}, "start+=3")
    masterTL.from("#text2", 0.5, {opacity:0, x:-100, ease:Sine.easeOut}, "start+=3.5")
    // masterTL.to("#bg2", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=6")
    masterTL.from("#bg3", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=6")
    masterTL.from("#bg3", 3, {scale:1.1, ease:Sine.easeOut}, "start+=6")
    masterTL.from("#text3", 0.5, {opacity:0, x:-100, ease:Sine.easeOut}, "start+=6.5")
    masterTL.to(["#bg1", "#bg2", "#bg3", "#text1", "#text2", "#text3", "#logo"], 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=9")
    masterTL.to("#footerWrapper", 6, {x:"-50%", ease:Sine.easeOut}, "start+=9")
    masterTL.from("#logo2", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=9.5")
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=9.6")
    masterTL.to("#cta", 0.2, {scale:1.1, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=11")
    masterTL.to("#cta", 0.2, {scale:1.1, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=14")

    masterTL.play();
}