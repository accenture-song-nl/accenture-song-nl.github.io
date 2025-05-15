window.onload = function () {
    init();
}


function loadLocalDynamic() {
    var adSize = "970x250";
    if(localDynamicData.ctaText[adSize] != ""){
        document.querySelector('#cta').innerHTML = localDynamicData.ctaText[adSize];
    }
    else{
        document.querySelector('#cta').innerHTML = localDynamicData.ctaText["default"];
    }

    if(localDynamicData.headlineText[adSize] != ""){
        document.querySelector('#text1').innerHTML = localDynamicData.headlineText[adSize];
    }
    else{
        document.querySelector('#text1').innerHTML = localDynamicData.headlineText["default"];
    }

    if(localDynamicData.disclaimerText[adSize] != ""){
        document.querySelector('#disclaimerText').innerHTML = localDynamicData.disclaimerText[adSize];
    }
    else{
        document.querySelector('#disclaimerText').innerHTML = localDynamicData.disclaimerText["default"];
    }

    if(localDynamicData.bodyText[adSize] != ""){
        document.querySelector('#endText').innerHTML = localDynamicData.bodyText[adSize];
    }
    else{
        document.querySelector('#endText').innerHTML = localDynamicData.bodyText["default"];
    }

    document.querySelector('#bg').src = localDynamicData.backgroundImage;
    document.querySelector('#logo').src = localDynamicData.logo;

}

function init() {
    loadLocalDynamic();

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

function getAnimation(){

    var split = new SplitText("#text1", {type: "words"});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#logoWrapper", 0.5, {scale:0, ease:Back.easeOOut}, "start")
    masterTL.to("#logoWrapper", 0.4, {width:507, height:228, ease:Sine.easeInOut})
    masterTL.to("#logo", 0.4, {width: 170, bottom: 44, right: 43, ease:Sine.easeInOut}, "-=0.4")
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut})
    masterTL.from(split.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.02});
    masterTL.to("#logoWrapper", 0.4, {width:946, ease:Sine.easeInOut}, "+=1")
    masterTL.from("#endText", 0.5, {opacity:0, ease:Sine.easeOut})
    masterTL.from("#disclaimerText", 0.4, {opacity: 0}, "-=0.4")
    masterTL.from("#renteCircle", 0.4, {scale: 0})
    masterTL.from("#border", 1, {opacity:0, ease:Power3.easeOut}, "+=1")
}