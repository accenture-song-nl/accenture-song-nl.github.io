window.onload = function () {
    init();
}

function init() {

    var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
    new FlipDown(twoDaysFromNow, {
        theme: "light",
    }).start();

    document.querySelector("#mainExit").addEventListener("mouseover", function () {
        if(masterTL.progress() > 0.35){
            // gsap.to("#cta", 0.3, {scale:1.1, ease:Sine.easeOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() > 0.35){
            // gsap.to("#cta", 0.3, {scale:1, ease:Sine.easeOut});
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
    masterTL.from("#text1A", 0.5, {scale:0, ease:Sine.easeInOut}, "start");
    masterTL.from("#text1B", 0.5, {scale:0, ease:Sine.easeInOut}, "start+=0.3");
    masterTL.from("#text1C", 0.5, {scale:0, ease:Sine.easeInOut}, "start+=0.6");
    masterTL.from("#text1D", 0.5, {scale:0, ease:Sine.easeInOut}, "start+=0.9");
    
    masterTL.from(["#flipdown", "#clockOuter"], 0.5, {opacity:0, y:20, ease:Sine.easeInOut}, "start+=1.7");
    
    masterTL.from("#text2", 0.5, {opacity:0, y:20, ease:Sine.easeInOut}, "start+=1.8");

    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=2.2");
    
    masterTL.play();
    console.log(masterTL.duration());
}

