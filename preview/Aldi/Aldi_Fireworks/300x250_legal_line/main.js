myFT.on("ready", init);


function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.1, ease:Sine.easeInOut});
            gsap.to("#deco1", 0.5, {scaleY:1.05, ease:Sine.easeInOut});
            gsap.to("#deco2", 0.5, {scaleY:1.07, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1, ease:Sine.easeInOut});
            gsap.to("#deco1", 0.3, {scaleY:1, ease:Sine.easeInOut});
            gsap.to("#deco2", 0.3, {scaleY:1, ease:Sine.easeInOut});
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
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, "start")
    masterTL.from("#bgBorderWrapper", 15, {x:-560, ease:Power0.easeNone}, "start")
    masterTL.to("#bg", 4, {scale:1.1, ease:Sine.easeInOut}, "start")
    
    masterTL.from("#text1A", 1, {x:300, y:-30, ease:Power1.easeOut}, "start+=0.5")
    masterTL.from("#text1B", 1, {x:300, y:-30, ease:Power1.easeOut}, "start+=0.7")
    masterTL.from("#text1C", 1, {x:300, y:-30, ease:Power1.easeOut}, "start+=0.9")
    
    masterTL.add("frame2", "start+=3.5");
    masterTL.to("#bg", 0.5, {opacity:0, ease:Sine.easeInOut}, "frame2")
    masterTL.to("#text1A", 0.5, {x:300, y:-30, ease:Power1.easeOut}, "frame2")
    masterTL.to("#text1B", 0.5, {x:300, y:-30, ease:Power1.easeOut}, "frame2+=0.1")
    masterTL.to("#text1C", 0.5, {x:300, y:-30, ease:Power1.easeOut}, "frame2+=0.2")
    
    masterTL.from("#star1", 1, {scale:0, ease:Power1.easeOut}, "frame2+=0.5")
    masterTL.from("#star1", 10, {rotation:-999, ease:Power0.easeNone}, "frame2+=0.5")
    masterTL.from("#product1", 1, {x:300, ease:Power1.easeOut}, "frame2+=0.5")
    masterTL.from("#info1", 1, {x:400, ease:Power1.easeOut}, "frame2+=0.5")
    masterTL.from("#star2", 1, {scale:0, ease:Power1.easeOut}, "frame2+=0.7")
    masterTL.from("#star2", 10, {rotation:-444, ease:Power0.easeNone}, "frame2+=0.7")
    masterTL.from("#legal1", 0.5, {opacity:0, ease:Power1.easeOut}, "frame2+=1")
    masterTL.from("#price1", 0.5, {scale:0, ease:Back.easeOut}, "frame2+=1.4")
    
    masterTL.from("#date", 0.5, {x:-200, ease:Power2.easeOut}, "frame2+=1.8")
    masterTL.from("#age", 0.5, {x:-200, ease:Power2.easeOut}, "frame2+=2")
    
    masterTL.add("frame3", "start+=7");
    masterTL.to("#product1", 1, {x:-300, ease:Power1.easeIn}, "frame3")
    masterTL.to("#info1", 1, {x:-400, ease:Power1.easeIn}, "frame3")
    masterTL.to("#legal1", 0.5, {opacity:0, ease:Power1.easeIn}, "frame3")
    masterTL.to("#price1", 0.5, {scale:0, ease:Power1.easeIn}, "frame3")
    
    masterTL.from("#product2", 1, {x:300, ease:Power1.easeOut}, "frame3+=0.5")
    masterTL.from("#info2", 1, {x:400, ease:Power1.easeOut}, "frame3+=0.5")
    masterTL.from("#legal2", 0.5, {opacity:0, ease:Power1.easeOut}, "frame3+=1")
    masterTL.from("#price2", 0.5, {scale:0, ease:Back.easeOut}, "frame3+=1.4")
    
    masterTL.add("frame4", "start+=11");
    masterTL.from("#endBg", 0.5, {opacity:0, ease:Back.easeOut}, "frame4")
    masterTL.from("#deco1", 3, {scaleY:0, ease:"elastic.out(1,0.3)"}, "frame4")
    masterTL.from("#deco1", 3, {rotation:30, ease:Back.easeOut}, "frame4")
    masterTL.from("#deco2", 3, {scaleY:0, ease:"elastic.out(1,0.3)"}, "frame4+=0.2")
    masterTL.from("#deco2", 3, {rotation:-20, ease:Back.easeOut}, "frame4+=0.2")
    masterTL.from("#logoEnd", 0.5, {opacity:0, y:-30, ease:Sine.easeOut}, "frame4+=0.5")
    masterTL.from("#tagline", 0.5, {opacity:0, y:-50, ease:Sine.easeOut}, "frame4+=0.6")
    masterTL.from("#endText", 0.5, {x:-300, ease:Sine.easeOut}, "frame4+=0.8")
    masterTL.from("#endHighlightWrapper", 1, {width:0, ease:Sine.easeInOut}, "frame4+=1.2")
    masterTL.from("#cta", 1, {scale:0, ease:Back.easeOut}, "frame4+=2")
    

 
    masterTL.play();

    console.log(masterTL.duration());
}