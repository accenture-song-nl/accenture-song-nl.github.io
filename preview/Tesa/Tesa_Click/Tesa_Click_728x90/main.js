window.onload = function () {
    init();
}

function loadLocalDynamic() {
    document.querySelector('#text1').src = localDynamicData.text1;
    document.querySelector('#highlight1').src = localDynamicData.highlight1;
    document.querySelector('#text2').src = localDynamicData.text2;
    document.querySelector('#highlight2').src = localDynamicData.highlight2;
    document.querySelector('#text3').src = localDynamicData.text3;
    document.querySelector('#highlight3').src = localDynamicData.highlight3;
    // document.querySelector('#text4').src = localDynamicData.text4;
    // document.querySelector('#highlight4').src = localDynamicData.highlight4;
    document.querySelector('#text5').src = localDynamicData.text5;
    document.querySelector('#highlight5').src = localDynamicData.highlight5;
    document.querySelector('#text6').src = localDynamicData.text6;
    document.querySelector('#highlight6').src = localDynamicData.highlight6;
    document.querySelector('#logo').data = localDynamicData.logo;
    document.querySelector('#bg1').src = localDynamicData.bg1;
    // document.querySelector('#bg2').src = localDynamicData.bg2;
    document.querySelector('#bg3').src = localDynamicData.bg3;
    document.querySelector('#bg4').src = localDynamicData.bg4;
    document.querySelector('#mainProduct').src = localDynamicData.product;
    // document.querySelector('#badge').src = localDynamicData.badge;
    document.querySelector('#cta').src = localDynamicData.cta;
    document.querySelector('#ctaBorder').src = localDynamicData.ctaBorder;
}

function init() {
    loadLocalDynamic();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(clickTag, '_blank');
        masterTL.progress(1).pause();
    })

    getAnimation();
}

function getAnimation(){

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#bg1", 4, {scale:1.1, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "-=3.8")
    masterTL.from("#highlight1Wrapper", 0.8, {width:0, ease:Power2.easeInOut}, "-=3")
    masterTL.from("#mainProduct", 1, {opacity:0, y:70, ease:"elastic.out(0.5 ,0.4)"}, "-=3")
    masterTL.from(["#cta", "#ctaBorder"], 1, {opacity:0, y:70, ease:"elastic.out(0.5 ,0.4)"}, "-=2.8")
    masterTL.to(["#text1", "#highlight1Wrapper"], 0.7, {x:50, opacity:0, ease:Power2.easeInOut}, "-=1")
    masterTL.from("#bg2", 4, {scale:1.1, ease:Sine.easeOut}, "-=0.5")
    masterTL.from("#bg2", 1, {opacity:0, ease:Sine.easeInOut}, "-=4")
    masterTL.from("#text2", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "-=3.8")
    masterTL.from("#highlight2Wrapper", 0.8, {width:0, ease:Power2.easeInOut}, "-=3")
    masterTL.to(["#text2", "#highlight2Wrapper"], 0.7, {x:50, opacity:0, ease:Power2.easeInOut}, "-=1")
    masterTL.from("#bg3", 4, {scale:1.1, ease:Sine.easeOut}, "-=0.5")
    masterTL.from("#bg3", 1, {opacity:0, ease:Sine.easeInOut}, "-=4")
    masterTL.from("#text3", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "-=3.8")
    masterTL.from("#highlight3Wrapper", 0.8, {width:0, ease:Power2.easeInOut}, "-=3")
    masterTL.to(["#text3", "#highlight3Wrapper"], 0.7, {x:50, opacity:0, ease:Power2.easeInOut}, "-=1")
    masterTL.from("#bg4", 4, {scale:1.1, ease:Sine.easeOut}, "-=0.5")
    masterTL.from("#bg4", 1, {opacity:0, ease:Sine.easeInOut}, "-=4")
    // masterTL.from("#highlight4Wrapper", 0.8, {width:0, ease:Power2.easeInOut}, "-=3.8")
    // masterTL.from("#text4", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "-=3.5")
    // masterTL.to(["#text4", "#highlight4Wrapper"], 0.7, {x:50, opacity:0, ease:Power2.easeInOut}, "-=1")
    
    // masterTL.to("#badge", 0.3, {scale:0, ease:Back.easeIn}, "+=0.5")
    masterTL.from("#text5", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "-=3.8")
    masterTL.from("#highlight5Wrapper", 0.8, {width:0, ease:Power2.easeInOut}, "-=3.5")
    masterTL.to(["#text5", "#highlight5Wrapper"], 0.7, {x:50, opacity:0, ease:Power2.easeInOut}, "-=1")
    masterTL.from("#text6", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "-=0.5")
    masterTL.from("#highlight6Wrapper", 0.8, {width:0, ease:Power2.easeInOut}, "-=0.2")

    masterTL.to("#cta", 0.25, {scale:1.15, ease:Sine.easeInOut, repeat:1, yoyo:true}, "+=1")
    masterTL.to("#ctaBorder", 0.5, {scale:1.8, ease:Sine.easeIn, opacity:0}, "-=0.5")
    masterTL.to("#ctaBorder", 0.001, {scale:1, opacity:1})

    masterTL.to("#cta", 0.25, {scale:1.15, ease:Sine.easeInOut, repeat:1, yoyo:true}, "+=1")
    masterTL.to("#ctaBorder", 0.5, {scale:1.8, ease:Sine.easeIn, opacity:0}, "-=0.5")
    masterTL.to("#ctaBorder", 0.001, {scale:1, opacity:1})

    masterTL.to("#cta", 0.25, {scale:1.15, ease:Sine.easeInOut, repeat:1, yoyo:true}, "+=1")
    masterTL.to("#ctaBorder", 0.5, {scale:1.8, ease:Sine.easeIn, opacity:0}, "-=0.5")
    masterTL.to("#ctaBorder", 0.001, {scale:1, opacity:1})

    console.log(masterTL.duration());

}