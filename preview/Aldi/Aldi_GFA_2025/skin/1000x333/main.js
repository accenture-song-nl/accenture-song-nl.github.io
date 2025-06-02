window.onload = function () {
    init();
}


function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.1, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    gsap.set("#product1", {scale:0.83711340206, x:-18, y:29});
    gsap.set("#product2", {scale:0.74845360824, x:431, y:43});

    masterTL = gsap.timeline({paused:true, repeat:0});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    
    masterTL.add("start");
    masterTL.from("#panelLeft", 0.5, {x:-500, ease:Power2.easeOut}, "start")
    masterTL.from("#product1", 0.5, {x:-600, ease:Sine.easeOut}, "start+=0.2")
    masterTL.from("#text1A", 0.5, {x:-300, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#product2", 0.5, {x:900, ease:Sine.easeOut}, "start+=1.5")
    masterTL.from("#text1B", 0.5, {x:900, ease:Sine.easeOut}, "start+=1.6")
    
    masterTL.add("frame2", "+=1");
    masterTL.from("#mainText1", 0.5, {x:-40, opacity:0, ease:Sine.easeOut}, "frame2")
    masterTL.from("#mainText2", 0.5, {x:40, opacity:0, ease:Sine.easeOut}, "frame2+=0.4")
    masterTL.from("#mainText3", 0.5, {x:-40, opacity:0, ease:Sine.easeOut}, "frame2+=0.8")
    
    masterTL.add("frame3", "+=1");
    masterTL.to("#mainText1", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame3")
    masterTL.to("#mainText2", 0.5, {x:20, opacity:0, ease:Sine.easeIn}, "frame3")
    masterTL.to("#mainText3", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame3")
    masterTL.to("#text1A", 0.5, {x:-900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#text1B", 0.5, {x:900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#product2", 0.5, {x:900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#product1", 0.5, {x:-900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#panelLeft", 0.5, {x:-900, ease:Power2.easeIn}, "frame3")
    masterTL.from("#panelRight", 0.5, {x:1100, ease:Sine.easeOut}, "frame3+=0.5")
    masterTL.set("#product1", {scale:1, x:900, y:0}, "frame3+=0.5")
    masterTL.to("#product1", 0.5, {x:0, ease:Sine.easeOut}, "frame3+=0.7")
    masterTL.from("#product1Info", 0.5, {x:900, ease:Sine.easeOut}, "frame3+=1.4")
    masterTL.from("#product1Price", 0.5, {scale:0, ease:Power4.easeOut}, "frame3+=2.1")
    
    masterTL.add("frame4", "+=1");
    masterTL.to("#product1Info", 0.5, {x:900, ease:Sine.easeIn}, "frame4")
    masterTL.to("#product1Price", 0.5, {scale:0, ease:Power4.easeIn}, "frame4")
    masterTL.to("#product1", 0.5, {x:900, ease:Sine.easeIn}, "frame4+=0.5")
    masterTL.to("#panelRight", 0.5, {x:1100, ease:Sine.easeIn}, "frame4+=0.7")
    masterTL.to("#banner", 0.5, {background:"#008a96", ease:Sine.easeIn}, "frame4+=1")
    masterTL.from("#panelRight2", 0.5, {x:1100, ease:Sine.easeOut}, "frame4+=1.3")
    masterTL.set("#product2", {scale:1, x:900, y:0}, "frame4+=1.3")
    masterTL.to("#product2", 0.5, {x:0, ease:Sine.easeOut}, "frame4+=1.5")
    masterTL.from("#product2Info", 0.5, {x:900, ease:Sine.easeOut}, "frame4+=2.2")
    masterTL.from("#product2Price", 0.5, {scale:0, ease:Power4.easeOut}, "frame4+=2.9")

    masterTL.add("frame5", "+=1");
    masterTL.to("#product2Info", 0.5, {x:900, ease:Sine.easeIn}, "frame5")
    masterTL.to("#product2Price", 0.5, {scale:0, ease:Power4.easeIn}, "frame5")
    masterTL.to("#product2", 0.5, {x:900, ease:Sine.easeIn}, "frame5+=0.5")
    masterTL.to("#panelRight2", 0.5, {x:1100, ease:Sine.easeIn}, "frame5+=0.7")
    masterTL.to("#banner", 0.5, {background:"#66b9c0", ease:Sine.easeIn}, "frame5+=1")
    masterTL.set("#product1", {x:-900, y:0});
    masterTL.set("#product2", {scale:0.89, x:900, y:29}); 
    masterTL.to("#panelLeft", 0.5, {x:0, ease:Power2.easeOut}, "frame5+=1.5")
    masterTL.to("#product1", 0.5, {x:-178, ease:Sine.easeOut}, "frame5+=1.7")
    masterTL.to("#product2", 0.5, {x:401, ease:Sine.easeOut}, "frame5+=3")

    masterTL.add("frame6", "+=0");
    masterTL.from("#mainTextEnd1", 0.5, {x:-40, opacity:0, ease:Sine.easeOut}, "frame6")
    masterTL.from("#mainTextEnd2", 0.5, {x:40, opacity:0, ease:Sine.easeOut}, "frame6+=0.4")
    masterTL.from("#mainTextEnd3", 0.5, {x:-40, opacity:0, ease:Sine.easeOut}, "frame6+=0.8")
    
    masterTL.add("endScreen");
    masterTL.from("#cta", 1, {scale:0, ease:Back.easeOut}, "endScreen")
    
    
    masterTL.play();

    console.log(masterTL.duration());
    
    
}