window.onload = function () {
    init();
}

function loadLocalDynamic() {
    var adSize = "728x90";

    document.querySelector('#headline').innerHTML = localDynamicData.headline[adSize] != "" ? localDynamicData.headline[adSize] : localDynamicData.headline["default"];    
    document.querySelector('#subtext').innerHTML = localDynamicData.subtext[adSize] != "" ? localDynamicData.subtext[adSize] : localDynamicData.subtext["default"];    
    document.querySelector('#ctaText').innerHTML = localDynamicData.ctaText[adSize] != "" ? localDynamicData.ctaText[adSize] : localDynamicData.ctaText["default"];

    document.querySelector('#disclaimer').innerHTML = localDynamicData.disclaimer[adSize] != "" ? localDynamicData.disclaimer[adSize] : localDynamicData.disclaimer["default"];


}

function init(clickTAGvalue) {
    loadLocalDynamic();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.1, ease: "back.out(1.7)"})
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1, ease: "power1.out"})
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(clickTag, '_blank');
        masterTL.progress(1).pause();
    })

    getAnimation();
}

function getAnimation(){
    var splitHeadline = new SplitText("#headline", { type: "words,chars" });
    
    masterTL = new TimelineLite();
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#bg", 1, {opacity:0, ease:Sine.easeOut}, "start")
    masterTL.from("#bg", 2.5, { scale: 1.6, y: 15, x: -80, ease: Sine.easeOut }, "start+=0.1")
    
    masterTL.staggerFrom(splitHeadline.words, 0.5, {opacity:0, y:20, ease:Power2.easeOut}, 0.25, "start+=1.4");
    masterTL.from("#subtext", 0.7, { y: 20, opacity: 0, ease: Power2.easeInOut }, "start+=2.1")
    masterTL.from("#cta", 0.7, {scale:0, ease: "back.out(1.7)"}, "start+=2.9")



}