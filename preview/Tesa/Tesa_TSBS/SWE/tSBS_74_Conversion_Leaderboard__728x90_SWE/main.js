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
    document.querySelector('#logo').data = localDynamicData.logo;
    document.querySelector('#tesa').data = localDynamicData.tesa;
    document.querySelector('#tadaa1').data = localDynamicData.tadaa1;
    document.querySelector('#tadaa2').data = localDynamicData.tadaa2;
    document.querySelector('#tadaa3').data = localDynamicData.tadaa3;
    document.querySelector('#tadaa4').data = localDynamicData.tadaa4;
    document.querySelector('#tadaa5').data = localDynamicData.tadaa5;
    document.querySelector('#tadaa6').data = localDynamicData.tadaa6;
    document.querySelector('#bg1').src = localDynamicData.bg1;
    document.querySelector('#bg2').src = localDynamicData.bg2;
    document.querySelector('#bg3').src = localDynamicData.bg3;
    document.querySelector('#mainProduct').src = localDynamicData.product;
    document.querySelector('#leftProduct').src = localDynamicData.productLeft;
    document.querySelector('#rightProduct').src = localDynamicData.productRight;
    document.querySelector('#cta').src = localDynamicData.cta;
    document.querySelector('#ctaBorder').src = localDynamicData.ctaBorder;

}

function init(clickTAGvalue) {
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
        clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.example.com');
        masterTL.progress(1).pause();
    })

    getAnimation();
}

function getAnimation(){

    masterTL = new TimelineLite({repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#bg1", 5, {scale:1.1, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "start+=0.2")
    masterTL.from("#highlight1Wrapper", 0.8, {width:0, ease:Power2.easeInOut}, "start+=0.6")
    masterTL.from("#mainProduct", 1, {opacity:0, y:40, ease:"elastic.out(0.5 ,0.4)"}, "start+=1")
    masterTL.from(["#cta", "#ctaBorder"], 1, {opacity:0, y:40, ease:"elastic.out(0.5 ,0.4)"}, "start+=1.3")
    masterTL.to(["#text1", "#highlight1Wrapper"], 0.7, {x:50, opacity:0, ease:Power2.easeInOut}, "start+=3.5")
    masterTL.from("#bg2", 5, {scale:1.1, ease:Sine.easeOut}, "start+=3.5")
    masterTL.from("#bg2", 1, {opacity:0, ease:Sine.easeInOut}, "start+=3.5")
    masterTL.from("#text2", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "start+=4")
    masterTL.from("#highlight2Wrapper", 0.8, {width:0, ease:Power2.easeInOut}, "start+=4.6")
    masterTL.to(["#text2", "#highlight2Wrapper"], 0.7, {x:50, opacity:0, ease:Power2.easeInOut}, "start+=7")
    masterTL.from("#bg3", 5, {scale:1.1, ease:Sine.easeOut}, "start+=7")
    masterTL.from("#bg3", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=7")
    masterTL.from("#tesaWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=7.5")
    masterTL.from("#tadaa1", 0.5, {y:150, scale:0, x:80, ease:Back.easeOut}, "start+=7.7")
    masterTL.from("#tadaa2", 0.5, {y:150, scale:0, x:44, ease:Back.easeOut}, "start+=7.76")
    masterTL.from("#tadaa3", 0.5, {y:150, scale:0, x:6, ease:Back.easeOut}, "start+=7.8")
    masterTL.from("#tadaa4", 0.5, {y:150, scale:0, x:-30, ease:Back.easeOut}, "start+=7.85")
    masterTL.from("#tadaa5", 0.5, {y:150, scale:0, x:-70, ease:Back.easeOut}, "start+=7.9")
    masterTL.from("#tadaa6", 0.5, {y:150, scale:0, x:-100, ease:Back.easeOut}, "start+=7.95")
    masterTL.to(["#tesaWrapper", "#tadaaWrapper"], 0.5, {opacity:0, ease:Sine.easeIn}, "start+=9.5")
    masterTL.from("#leftProduct", 0.4, {x:70, opacity:0, ease:Back.easeOut}, "start+=10")
    masterTL.from("#rightProduct", 0.4, {x:-70, opacity:0, ease:Back.easeOut}, "start+=10")
    masterTL.from("#text3", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "start+=11")
    masterTL.from("#highlight3Wrapper", 0.8, {width:0, ease:Power2.easeInOut}, "start+=11.6")
    masterTL.to("#cta", 0.25, {scale:1.15, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=13")
    masterTL.to("#ctaBorder", 0.5, {scale:1.8, ease:Sine.easeIn, opacity:0}, "start+=13")
    masterTL.to("#ctaBorder", 0.001, {scale:1, opacity:1}, "start+=13.999")
    masterTL.to("#cta", 0.25, {scale:1.15, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=14")
    masterTL.to("#ctaBorder", 0.5, {scale:1.8, ease:Sine.easeIn, opacity:0}, "start+=14")
    masterTL.to("#ctaBorder", 0.5, {opacity:0}, "start+=14.5")

    masterTL.duration(15);
}