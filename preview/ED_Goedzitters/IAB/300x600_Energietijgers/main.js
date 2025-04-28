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
    masterTL.to("#bg1", 3, {x:-80, ease:Sine.easeInOut}, "start");
    masterTL.from("#text1", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#text1Green", 0.1, {opacity:0}, "start+=1");
    masterTL.to("#text1Green", 0.1, {opacity:0.2}, "start+=1.1");
    masterTL.to("#text1Green", 0.1, {opacity:1}, "start+=1.2");
    masterTL.to("#text1Green", 0.1, {opacity:0.5}, "start+=1.3");
    masterTL.to("#text1Green", 0.1, {opacity:1}, "start+=1.4");
    masterTL.to("#text1Green", 0.1, {opacity:0.8}, "start+=1.6");
    masterTL.to("#text1Green", 0.1, {opacity:1}, "start+=1.7");
    masterTL.add("frame2", 3.5);
    masterTL.to("#bg1", .5, {x:-380, ease:Sine.easeInOut}, "frame2");
    masterTL.from("#bg2", .5, {x:300, ease:Sine.easeInOut}, "frame2");
    masterTL.to("#bg2", 3, {scale:1.1, ease:Sine.easeInOut}, "frame2+=0.5");
    masterTL.from("#text2", 0.3, {opacity:0, ease:Sine.easeInOut}, "frame2+=0.5");
    masterTL.from("#text2Green", 0.1, {opacity:0}, "frame2+=1");
    masterTL.to("#text2Green", 0.1, {opacity:0.2}, "frame2+=1.1");
    masterTL.to("#text2Green", 0.1, {opacity:1}, "frame2+=1.2");
    masterTL.to("#text2Green", 0.1, {opacity:0.5}, "frame2+=1.3");
    masterTL.to("#text2Green", 0.1, {opacity:1}, "frame2+=1.4");
    masterTL.to("#text2Green", 0.1, {opacity:0.8}, "frame2+=1.6");
    masterTL.to("#text2Green", 0.1, {opacity:1}, "frame2+=1.7");
    masterTL.add("frame3", 7);
    masterTL.to("#bg2", .5, {x:-300, ease:Sine.easeInOut}, "frame3");
    masterTL.from("#bg3", .5, {x:300, ease:Sine.easeInOut}, "frame3");
    masterTL.to("#bg3", 3, {scale:1.1, ease:Sine.easeInOut}, "frame3+=0.5");
    masterTL.from("#text3", 0.5, {x:-300, ease:Sine.easeOut}, "frame3+=0.5");
    masterTL.add("frame4", 10.5);
    masterTL.from("#endScreen", .5, {opacity:0, ease:Sine.easeInOut}, "frame4");
    masterTL.from("#cta", .5, {scale:0, ease:Back.easeOut}, "frame4+=0.5");
    masterTL.to("#banner", .5, {}, 14.5);    
}