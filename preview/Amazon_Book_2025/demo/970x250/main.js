window.onload = function () {
    init();
}

function init() {
   

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
    

    masterTL = gsap.timeline({repeat:0});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#spaceWrapper", 1, {clipPath:"polygon(33% -7%, 33% 0%, 33% 79%)", ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#gradient", 0.5, {opacity:0.5, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.to("#gradient", 0.25, {opacity:0.7, ease:Sine.easeInOut}, "start+=1");
    masterTL.to("#gradient", 0.25, {opacity:1, ease:Sine.easeInOut}, "start+=1.25");
    // masterTL.from("#button", 2, {scale:0, ease:Sine.easeOut}, "start+=2");
    // masterTL.from("#button", 2, {y:-50, ease:Sine.easeInOut}, "start+=2");
    // masterTL.from("#hand", 1, {y:-120, x:-50, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start+=2.8");
    // masterTL.to("#button", 1, {opacity:0, ease:Sine.easeInOut}, "start+=4");
    

    masterTL.add("sprite", "0.7");
    for (var i = 0; i < 4; i++) {
        masterTL.to("#sprite", 0, {x:"-=132", ease:Sine.easeInOut}, "sprite+="+(0.2*i));
    }
}