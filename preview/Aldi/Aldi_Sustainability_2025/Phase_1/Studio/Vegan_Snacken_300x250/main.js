window.onload = function () {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }

    function enablerInitHandler() {
        if (Enabler.isPageLoaded()) {
            showAd();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, showAd);
        }
	}
	
	function showAd() {
        if (!String.prototype.includes) {
            String.prototype.includes = function (search, start) {
                'use strict';
                if (typeof start !== 'number') {
                    start = 0;
                }
                
                if (start + search.length > this.length) {
                    return false;
                } else {
                    return this.indexOf(search, start) !== -1;
                }
            };
            
        }
        init();
    }
}


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
        Enabler.exit('Default Exit');
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#bgBorder", 0.5, {scale:1.4, y:25, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.5, {y:100, ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1.2")

    masterTL.add("showFrame2", 3)
    masterTL.to(["#bgBorder", "#bg"], 0.5, {y:-250, ease:Sine.easeIn}, "showFrame2+=1")
    masterTL.to(["#text1", "#text1HighlightWrapper"], 0.5, {y:-98, ease:Sine.easeInOut}, "showFrame2+=1")
    masterTL.from("#text2", 0.5, {y:150, ease:Sine.easeOut}, "showFrame2+=1.5")
    masterTL.to(["#text2"], 0.5, {opacity:0, ease:Sine.easeInOut}, "showFrame2+=4.5")

    masterTL.add("showStickerFrame")
    masterTL.from("#sticker", 0.5, {y:150, ease:Sine.easeOut}, "showStickerFrame")
    masterTL.from("#sticker2", 0.5, {y:150, ease:Sine.easeOut}, "showStickerFrame+=0.2")
    masterTL.to(["#text1", "#text1HighlightWrapper", "#sticker", "#sticker2"], 0.5, {opacity:0, ease:Sine.easeInOut}, "showStickerFrame+=3.5")

    masterTL.add("showFrame3")

    masterTL.to("#logo", 0.5, {scale:1.35714285714, left:122, top: 12, ease:Sine.easeInOut}, "showFrame3")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "showFrame3+=0.5")
    masterTL.from("#text3White", 0.5, {y:200, ease:Sine.easeOut}, "showFrame3+=1")
    masterTL.from(["#text3HighlightWrapper", "#text4HighlightWrapper"], 0.5, {width:0, ease:Sine.easeOut}, "showFrame3+=1.7")

    masterTL.add("endScreen")
    
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=0.7");

    masterTL.play();

    console.log(masterTL.duration());
}