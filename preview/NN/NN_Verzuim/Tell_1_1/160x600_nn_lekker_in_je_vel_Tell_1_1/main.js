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

    // setDynamic();

    gsap.registerPlugin(SplitText);

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {background:"#d4512b", ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {background:"#ea650d", ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        // Enabler.exitOverride("Dynamic exit", dynamicContent.NN_Lekker_in_Je_Vel_Feed_master[0].mainExit.Url);
        window.open(window.clickTag);
        masterTL.progress(1);
    })

    getAnimation();
}

function setDynamic(){

    var adSize = "_120x600";

    Enabler.setProfileId(10860201);
    var devDynamicContent = {};

    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_master = [{}];
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_master[0]._id = 0;
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_master[0].bgImage = "sell_2_2";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_master[0].text1 = "Voorkom verzuim door minder stress";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_master[0].ctaText = "Vraag offerte aan";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_master[0].endText = "Een gezond bedrijf? Bekijk onze verzuimverzekering met preventiepakket.";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_master[0].mainExit = {};
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_master[0].mainExit.Url = "https://www.nn.nl/";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage = [{}];
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._id = 0;
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._120x600 = {};
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._120x600.Url = "https://s0.2mdn.net/creatives/assets/5004975/sell_2_2_120x600.jpg";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._160x600 = {};
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._160x600.Url = "https://s0.2mdn.net/creatives/assets/5004975/sell_2_2_160x600.jpg";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._300x50 = {};
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._300x50.Url = "https://s0.2mdn.net/creatives/assets/5004975/sell_2_2_300x50.jpg";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._300x100 = {};
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._300x100.Url = "https://s0.2mdn.net/creatives/assets/5004975/sell_2_2_300x100.jpg";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._300x250 = {};
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._300x250.Url = "https://s0.2mdn.net/creatives/assets/5004975/sell_2_2_300x250.jpg";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._320x50 = {};
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._320x50.Url = "https://s0.2mdn.net/creatives/assets/5004975/sell_2_2_320x50.jpg";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._320x100 = {};
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._320x100.Url = "https://s0.2mdn.net/creatives/assets/5004975/sell_2_2_320x100.jpg";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._320x240 = {};
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0]._320x240.Url = "https://s0.2mdn.net/creatives/assets/5004975/sell_2_2_320x240.jpg";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1 = [{}];
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0]._id = 0;
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0].Default_text = "Voorkom <span class=\"darker\">verzuim<\/span> <span class=\"darkest\">door <\/span><span class=\"darker\">minder<\/span> stress";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0]._120x600 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0]._160x600 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0]._300x50 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0]._300x100 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0]._300x250 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0]._320x50 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0]._320x100 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0]._320x240 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText = [{}];
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0]._id = 0;
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0].Default_text = "Vraag offerte aan";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0]._120x600 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0]._160x600 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0]._300x50 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0]._300x100 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0]._300x250 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0]._320x50 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0]._320x100 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0]._320x240 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText = [{}];
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0]._id = 0;
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0].Default_text = "Bekijk onze Verzuimverzekering met preventiepakket.";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0]._120x600 = "Bekijk onze Verzuim-verzekering met preventie-pakket.";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0]._160x600 = "Bekijk onze Verzuim-verzekering met preventiepakket.";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0]._300x50 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0]._300x100 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0]._300x250 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0]._320x50 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0]._320x100 = "";
    devDynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0]._320x240 = "";
    Enabler.setDevDynamicContent(devDynamicContent);
    
    if(dynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0][adSize].Url != ""){

        document.querySelector("#bg").onload = function () {
            getAnimation();
        }
        document.querySelector("#bg").src = dynamicContent.NN_Lekker_in_Je_Vel_Feed_bgImage[0][adSize].Url;
    }
    else{
        getAnimation();
    }

    if(dynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0][adSize] != ""){
        document.querySelector("#text1").innerHTML = dynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0][adSize];
    }
    else{
        document.querySelector("#text1").innerHTML = dynamicContent.NN_Lekker_in_Je_Vel_Feed_text1[0].Default_text;
    }

    if(dynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0][adSize] != ""){
        document.querySelector("#cta").innerHTML = dynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0][adSize];
    }
    else{
        document.querySelector("#cta").innerHTML = dynamicContent.NN_Lekker_in_Je_Vel_Feed_ctaText[0].Default_text;
    }

    if(dynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0][adSize] != ""){
        document.querySelector("#endText").innerHTML = dynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0][adSize];
    }
    else{
        document.querySelector("#endText").innerHTML = dynamicContent.NN_Lekker_in_Je_Vel_Feed_endText[0].Default_text;
    }

    document.querySelector("#mainExit").addEventListener("click", function(){
        Enabler.exitOverride("Dynamic exit", dynamicContent.NN_Lekker_in_Je_Vel_Feed_master[0].mainExit.Url);
        masterTL.progress(1);
    })
}

function getAnimation(){

    var split = new SplitText("#text1", {type: "words"});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#logoWrapper", 0.5, {scale:0, ease:Back.easeOOut}, "start")
    masterTL.to("#t1_1", 0.3, {opacity:1, ease:Sine.easeOut})
    masterTL.to("#t2_1", 0.3, {opacity:1, ease:Sine.easeOut}, "-=0.15")
    
    for (var i = 1; i <= 4; i++) {
        masterTL.to(["#t1_1", "#t2_1"], 0, {opacity:1, ease:Power0.easeNone})
        masterTL.to(["#t1_1", "#t2_1"], 0, {opacity:0, ease:Power0.easeNone}, "+=.1")
        masterTL.to(["#t1_2", "#t2_2"], 0, {opacity:1, ease:Power0.easeNone})
        masterTL.to(["#t1_2", "#t2_2"], 0, {opacity:0, ease:Power0.easeNone}, "+=.1")
        masterTL.to(["#t1_3", "#t2_3"], 0, {opacity:1, ease:Power0.easeNone})
        masterTL.to(["#t1_3", "#t2_3"], 0, {opacity:0, ease:Power0.easeNone}, "+=.1")
        masterTL.to(["#t1_4", "#t2_4"], 0, {opacity:1, ease:Power0.easeNone})
        masterTL.to(["#t1_4", "#t2_4"], 0, {opacity:0, ease:Power0.easeNone}, "+=.1")
    }
    masterTL.to(["#t1_1", "#t2_1"], 0, {opacity:1, ease:Power0.easeNone})
    masterTL.to("#logoWrapper", 0.4, {height:366, ease:Sine.easeInOut})
    masterTL.to(["#t1_1", "#t2_1"], 0.3, {opacity:0, ease:Power2.easeInOut}, "-=0.4")
    masterTL.from(split.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.02});
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut})
    masterTL.to("#logoWrapper", 0.4, {height:581, ease:Sine.easeInOut}, "+=1")
    masterTL.from("#endText", 0.3, {opacity:0, ease:Sine.easeOut})
    masterTL.from("#border", 1, {opacity:0, ease:Power3.easeOut}, "+=1")
}