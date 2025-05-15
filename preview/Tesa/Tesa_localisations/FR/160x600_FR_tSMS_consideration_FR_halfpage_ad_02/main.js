window.onload = function () {
    init();
}

function loadLocalDynamic() {
    var adSize = "160x600";
    if(localDynamicData.text1[adSize] != ""){
        document.querySelector('#text1').innerHTML = localDynamicData.text1[adSize];
    }
    else{
        document.querySelector('#text1').innerHTML = localDynamicData.text1["default"];
    }
    
    if(localDynamicData.text2[adSize] != ""){
        document.querySelector('#text2').innerHTML = localDynamicData.text2[adSize];
    }
    else{
        document.querySelector('#text2').innerHTML = localDynamicData.text2["default"];
    }
    
    if(localDynamicData.text3[adSize] != ""){
        document.querySelector('#text3').innerHTML = localDynamicData.text3[adSize];
    }
    else{
        document.querySelector('#text3').innerHTML = localDynamicData.text3["default"];
    }

    if(localDynamicData.disclaimer[adSize] != ""){
        document.querySelector('#disclaimer').innerHTML = localDynamicData.disclaimer[adSize];
    }
    else{
        document.querySelector('#disclaimer').innerHTML = localDynamicData.disclaimer["default"];
    }
    
    if(localDynamicData.ctaText[adSize] != ""){
        document.querySelector('#cta').innerHTML = localDynamicData.ctaText[adSize];
    }
    else{
        document.querySelector('#cta').innerHTML = localDynamicData.ctaText["default"];
    }
    
    if(localDynamicData.ctaText[adSize] != ""){
        document.querySelector('#ctaBorder').innerHTML = localDynamicData.ctaText[adSize];
    }
    else{
        document.querySelector('#ctaBorder').innerHTML = localDynamicData.ctaText["default"];
    }

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
    document.querySelector('#mainProduct').src = localDynamicData.product;
    document.querySelector('#leftProduct').src = localDynamicData.productLeft;
    document.querySelector('#rightProduct').src = localDynamicData.productRight;

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
        window.open(clickTAGvalue, '_blank');
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    masterTL = new TimelineLite({repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#bg1", 10, {scale:1.2, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "start+=0.2")
    document.querySelectorAll("#text1 .blueLine").forEach(blueline => {
        masterTL.from(blueline, 0.5, {width:0, ease:Power2.easeInOut}, "start+=0.9")
    });
    masterTL.to("#text1", 0.7, {x:50, opacity:0, ease:Power2.easeInOut}, "start+=3.5")
    masterTL.from("#text2", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "start+=4")
    masterTL.from("#disclaimer", 0.5, {opacity:0, ease:Power2.easeInOut}, "start+=4.2")
    document.querySelectorAll("#text2 .blueLine").forEach(blueline => {
        masterTL.from(blueline, 0.5, {width:0, ease:Power2.easeInOut}, "start+=4.7")
    });
    masterTL.to("#text2", 0.7, {x:50, opacity:0, ease:Power2.easeInOut}, "start+=7")
    masterTL.to("#disclaimer", 0.5, {opacity:0, ease:Power2.easeInOut}, "start+=7.2")
    masterTL.from("#bg2", 5, {scale:1.2, ease:Sine.easeOut}, "start+=7")
    masterTL.from("#bg2", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=7")
    masterTL.from("#tesaWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=7.5")
    masterTL.from("#tadaa1", 0.5, {y:150, scale:0, x:80, ease:Back.easeOut}, "start+=7.7")
    masterTL.from("#tadaa2", 0.5, {y:150, scale:0, x:44, ease:Back.easeOut}, "start+=7.76")
    masterTL.from("#tadaa3", 0.5, {y:150, scale:0, x:6, ease:Back.easeOut}, "start+=7.8")
    masterTL.from("#tadaa4", 0.5, {y:150, scale:0, x:-30, ease:Back.easeOut}, "start+=7.85")
    masterTL.from("#tadaa5", 0.5, {y:150, scale:0, x:-70, ease:Back.easeOut}, "start+=7.9")
    masterTL.from("#tadaa6", 0.5, {y:150, scale:0, x:-100, ease:Back.easeOut}, "start+=7.95")
    masterTL.to("#tesaWrapper", 0.5, {opacity:0, x:70, ease:Sine.easeIn}, "start+=9.5")
    masterTL.to("#tadaaWrapper", 0.5, {opacity:0, x:70, ease:Sine.easeIn}, "start+=9.5")
    masterTL.from("#blueCircle", 1.25, {scaleY:0, ease:"elastic.out(0.5,0.3)"}, "start+=10")
    masterTL.from(["#cta", "#ctaBorder"], 1, {opacity:0, y:70, ease:"elastic.out(0.5 ,0.4)"}, "start+=10")
    masterTL.from("#mainProduct", 0.5, {opacity:0, y:70}, "start+=10.5")
    masterTL.from("#leftProduct", 0.4, {x:70, opacity:0, ease:Back.easeOut}, "start+=11")
    masterTL.from("#rightProduct", 0.4, {x:-70, opacity:0, ease:Back.easeOut}, "start+=11")
    masterTL.from("#text3", 0.7, {x:-50, opacity:0, ease:Power2.easeInOut}, "start+=11.5")
    document.querySelectorAll("#text3 .blueLine").forEach(blueline => {
        masterTL.from(blueline, 0.5, {width:0, ease:Power2.easeInOut}, "start+=11.7")
    });
    masterTL.to("#cta", 0.25, {scale:1.15, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=13")
    masterTL.to("#ctaBorder", 0.5, {scale:1.8, ease:Sine.easeIn, opacity:0}, "start+=13")
    masterTL.to("#ctaBorder", 0.001, {scale:1, opacity:1}, "start+=13.999")
    masterTL.to("#cta", 0.25, {scale:1.15, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=14")
    masterTL.to("#ctaBorder", 0.5, {scale:1.8, ease:Sine.easeIn, opacity:0}, "start+=14")
    masterTL.to("#ctaBorder", 0.5, {opacity:0}, "start+=14.5")

    masterTL.duration(13.5);
}