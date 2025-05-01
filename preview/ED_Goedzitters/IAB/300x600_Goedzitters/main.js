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
        // window.open(clickTag, '_blank');
        // masterTL.progress(1).pause();
        masterTL.pause();
    })

    getAnimation();
}

function getAnimation(){
    

    masterTL = gsap.timeline({repeat:1});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#text1", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#feet", 3, {rotation:10, transformOrigin:"50% 55%", ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#text1GreenWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "start+=1");
    masterTL.add("frame2", 3.5);
    masterTL.to(["#text1", "#text1GreenWrapper"], 0.3, {opacity:0, ease:Sine.easeInOut}, "frame2+=0.3");
    masterTL.to("#top", 3.5, {rotation:-30, transformOrigin:"50% 55%", ease:Sine.easeInOut}, "frame2+=0.5");
    masterTL.from("#text2", 0.3, {opacity:0, ease:Sine.easeInOut}, "frame2+=0.5");
    masterTL.from("#text2GreenWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "frame2+=1");
    masterTL.add("frame3", 5);
    masterTL.to(["#text2", "#text2GreenWrapper"], 0.3, {opacity:0, ease:Sine.easeInOut}, "frame3+=3.3");
    masterTL.from("#text3", 0.3, {opacity:0, ease:Sine.easeInOut}, "frame3+=3.5");
    masterTL.from("#text3GreenWrapper", 0.5, {width:0, ease:Sine.easeInOut}, "frame3+=4");
    masterTL.add("frame4", 12);
    masterTL.from("#endScreen", .5, {opacity:0, ease:Sine.easeInOut}, "frame4");
    masterTL.from("#text4", 0.5, {x:-300, ease:Sine.easeOut}, "frame4+=0.5");
    masterTL.from("#cta", .5, {scale:0, ease:Back.easeOut}, "frame4+=1");
    masterTL.to("#banner", .5, {}, 14.5);    
    
    masterTL.to("#coin1", 1.5, {scale:0.5, x:30, y:-30, rotation:70, ease:Sine.easeIn}, "start+=1");
    masterTL.to("#coin1", 0.25, {opacity:0, ease:Sine.easeIn}, "start+=2.25");
    
    masterTL.to("#coin2", 1.5, {scale:0.5, x:-10, y:-30, rotation:-45, ease:Sine.easeIn}, "start+=1.5");
    masterTL.to("#coin2", 0.25, {opacity:0, ease:Sine.easeIn}, "start+=2.75");
    
    masterTL.to("#coin3", 1.5, {scale:1, x:20, y:-60, rotation:55, ease:Sine.easeIn}, "start+=7.5");
    masterTL.to("#coin3", 0.25, {opacity:0, ease:Sine.easeIn}, "start+=8.75");

    masterTL.to("#coin4", 1.5, {scale:0.9, x:-20, y:-60, rotation:-40, ease:Sine.easeIn}, "start+=8");
    masterTL.to("#coin4", 0.25, {opacity:0, ease:Sine.easeIn}, "start+=9.25");
   
    masterTL.to("#coin5", 1.5, {scale:0.8, x:10, y:-60, rotation:30, ease:Sine.easeIn}, "start+=8.5");
    masterTL.to("#coin5", 0.25, {opacity:0, ease:Sine.easeIn}, "start+=9.75");
    
    masterTL.to("#coin6", 1.5, {scale:1, x:-20, y:-60, rotation:-60, ease:Sine.easeIn}, "start+=9");
    masterTL.to("#coin6", 0.25, {opacity:0, ease:Sine.easeIn}, "start+=10.25");
}