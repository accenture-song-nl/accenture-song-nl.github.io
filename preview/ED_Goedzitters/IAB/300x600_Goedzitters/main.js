window.onload = function () {
    init();
}

function init() {
   

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
    

    masterTL = gsap.timeline({repeat:1});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.to("#top", 7.5, {rotation:-30, transformOrigin:"50% 55%", ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#feet", 7.5, {rotation:10, transformOrigin:"50% 55%", ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#text1", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#text1GreenWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=1");
    masterTL.add("frame2", 3.5);
    masterTL.to(["#text1", "#text1GreenWrapper"], 0.3, {opacity:0, ease:Sine.easeInOut}, "frame2+=0.3");
    masterTL.from("#text2", 0.3, {opacity:0, ease:Sine.easeInOut}, "frame2+=0.5");
    masterTL.add("frame3", 7);
    masterTL.to("#text2", 0.3, {opacity:0, ease:Sine.easeInOut}, "frame3+=0.3");
    masterTL.from("#text3", 0.3, {opacity:0, ease:Sine.easeInOut}, "frame3+=0.5");
    masterTL.add("frame4", 10.5);
    masterTL.from("#endScreen", .5, {opacity:0, ease:Sine.easeInOut}, "frame4");
    masterTL.from("#text4", 0.5, {x:-300, ease:Sine.easeOut}, "frame4+=0.5");
    masterTL.from("#cta", .5, {scale:0, ease:Back.easeOut}, "frame4+=1");
    masterTL.to("#banner", .5, {}, 14.5);    
    
    masterTL.from("#coin1", 3, {scale:0, x:67, y:73, rotation:70, ease:Sine.easeIn}, "start+=0.5");
    masterTL.to("#coin1", 0.5, {opacity:0, ease:Sine.easeIn}, "start+=2.5");
    
    masterTL.from("#coin2", 3, {scale:0, x:10, y:73, rotation:-45, ease:Sine.easeIn}, "start+=1");
    masterTL.to("#coin2", 0.5, {opacity:0, ease:Sine.easeIn}, "start+=3");
    
    masterTL.from("#coin3", 3, {scale:0, x:35, y:73, rotation:55, ease:Sine.easeIn}, "start+=2");
    masterTL.to("#coin3", 0.5, {opacity:0, ease:Sine.easeIn}, "start+=4.5");
    
    masterTL.from("#coin4", 3, {scale:0, x:67, y:73, rotation:70, ease:Sine.easeIn}, "start+=4");
    masterTL.to("#coin4", 0.5, {opacity:0, ease:Sine.easeIn}, "start+=6.5");

    masterTL.from("#coin5", 3, {scale:0, x:10, y:73, rotation:-45, ease:Sine.easeIn}, "start+=4.5");
    masterTL.to("#coin5", 0.5, {opacity:0, ease:Sine.easeIn}, "start+=7");

    masterTL.from("#coin6", 3, {scale:0, x:35, y:73, rotation:55, ease:Sine.easeIn}, "start+=5.5");
    masterTL.to("#coin6", 0.5, {opacity:0, ease:Sine.easeIn}, "start+=8");
}