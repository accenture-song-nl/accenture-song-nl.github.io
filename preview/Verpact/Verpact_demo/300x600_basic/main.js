window.onload = function () {
    init();
}

function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function () {
        if(masterTL.progress() > 0.35){
            gsap.to("#cta", 0.3, {scale:1.1, ease:Sine.easeOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() > 0.35){
            gsap.to("#cta", 0.3, {scale:1, ease:Sine.easeOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){    
        window.open(clickTag, '_blank');
    })

    getAnimation();
}


function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start");
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)

    masterTL.to("#bg", 3.75, {scale:1.1, repeat:3, yoyo:true, ease:Sine.easeInOut}, "start");

    masterTL.from("#hand", 2, {y:600, rotation:-40, ease:Power2.easeOut}, "start+=0.5");
    
    masterTL.from("#text1", 1, {opacity:0, y:50, ease:Sine.easeInOut}, "start+=1");
    
    masterTL.to("#hand", 3.125, {y:10, rotation:-5, x:-5, repeat:3, yoyo:true, ease:Sine.easeInOut}, "start+=2.5");
    masterTL.from("#highlightWrapper1", 1, {width:0, ease:Sine.easeInOut}, "start+=2.5");
    masterTL.from("#highlightWrapper2", 1, {width:0, ease:Sine.easeInOut}, "start+=3");

    
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=5");
    
    masterTL.play();
    console.log(masterTL.duration());
}