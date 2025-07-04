window.onload = function () {
    init();
}

function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function () {
        if (masterTL.progress() == 1) {
            rolloverTL.play(0);
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



    rolloverTL = gsap.timeline({paused:true});
    rolloverTL.add("start");

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#copy", 1, {clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start");

    masterTL.from("#flowers1", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#flowers2", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=0.8");
    masterTL.from("#flowers3", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=1.2");
    masterTL.from("#flowers4", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=1.5");

    masterTL.to("#butterfly1L", 1.63333333333, {rotationY:60, repeat:5, yoyo:true, ease:Sine.easeInOut}, "start");
    masterTL.to("#butterfly1R", 1.63333333333, {rotationY:-60, repeat:5, yoyo:true, ease:Sine.easeInOut}, "start");
    
    masterTL.to("#butterfly2F", 0.625, {rotationX:50, rotationY:-20, repeat:15, yoyo:true, ease:Sine.easeInOut}, "start");
    masterTL.to("#butterfly2B", 0.625, {rotationX:50, rotationY:20, repeat:15, yoyo:true, ease:Sine.easeInOut}, "start");
    masterTL.to("#butterfly2Container", 0.625, {y:-10, x:-2, repeat:15, yoyo:true, ease:Sine.easeInOut}, "start");

    masterTL.fromTo("#butterfly2Wrapper", 9, {x:100, y:-20}, {x:-100, y:65, ease:Sine.easeOut}, "start+=1");

    masterTL.to("#banner", 0.5, {}, "start+=9.3");
    
    console.log(masterTL.duration());

}