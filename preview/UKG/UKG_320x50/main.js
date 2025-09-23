window.onload = function () {
    init();
}

function loadLocalDynamic() {

    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerH = document.querySelector("#banner").offsetHeight;
    var size = bannerW+"x"+bannerH;

    document.querySelector('#logo').src = localDynamicData.logo;

    document.querySelector('#tagline').innerHTML = localDynamicData.tagline;
    document.querySelector('#ctaText').innerHTML = localDynamicData.ctaText;

    getAnimation();
}

function init() {

    loadLocalDynamic();

    var arrowTL = gsap.timeline({});
    arrowTL.to("#arrow", 0.2, {x:10, ease:Power2.easeInOut});
    arrowTL.to("#arrow", 0.0000001, {x:-10, ease:Power2.easeInOut});
    arrowTL.to("#arrow", 0.2, {x:0, ease:Power2.easeInOut});

    document.querySelector("#mainExit").addEventListener("mouseover", function () {    
        if (masterTL.progress() > 0.16) {
           gsap.to("#cta", 0.3, {scale:1.05, ease:Power2.easeInOut});
              arrowTL.play(0);
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() > 0.16){
            gsap.to("#cta", 0.3, {scale:1, ease:Power2.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        // window.open(clickTag, '_blank');
        // masterTL.progress(1).pause();
        masterTL.pause();
    })
}


function getAnimation(){

    var introTL = animateIntro();

    masterTL = gsap.timeline({repeat:2, paused:true});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.add(introTL, "start+=1");
    masterTL.to("#banner", 0.5, {}, "4.5");

    masterTL.play(0);
}

function animateIntro() {
    var tl = gsap.timeline({repeat:0});

    var taglineSplit = new SplitText("#tagline", {type: "lines"});

    tl.add('start');
    tl.to("#introPanel", 1, {height:12, ease:Power2.easeInOut}, "start");
    tl.to("#logo", 1, {scale:0.65, ease:Power2.easeInOut}, "start");
    tl.from(taglineSplit.lines, 0.5, {x:-100, stagger:0.2, ease:Sine.easeOut}, "start+=1");
    tl.from("#cta", 0.5, {y:100, ease:Power2.easeOut}, "start+=1");

    return tl;
}