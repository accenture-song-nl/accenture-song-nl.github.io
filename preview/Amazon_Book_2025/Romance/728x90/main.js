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
    rolloverTL.to(["#couple"], 0.5, {y:-10, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to(["#scarfWrapper1", "#scarfWrapper2", "#scarfWrapper3", "#flame1", "#flame2"], 0.65, {y:-20, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from(["#couple"], 3, {y:120, ease:Sine.easeOut}, "start+=0.5");
        masterTL.from("#copy", 1, {clipPath:"polygon(85% 0px, 85% 0%, 85% 100%, 85% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start+=1");

    masterTL.to("#butterfly2F", 0.625, {rotationX:50, rotationY:-20, repeat:15, yoyo:true, ease:Sine.easeInOut}, "start");
    masterTL.to("#butterfly2B", 0.625, {rotationX:50, rotationY:20, repeat:15, yoyo:true, ease:Sine.easeInOut}, "start");
    masterTL.to("#butterfly2Container", 0.625, {y:-10, x:-2, repeat:15, yoyo:true, ease:Sine.easeInOut}, "start");

    masterTL.fromTo("#butterfly2Wrapper", 9, {x:300, y:-100}, {x:-100, y:65, ease:Sine.easeOut}, "start+=3");

    masterTL.from("#scarfWrapper3", 5, {width:0, ease:Sine.easeInOut}, "start+=0.4");
    masterTL.from("#scarfWrapper2", 3.5, {width:0, ease:Sine.easeInOut}, "start+=1.8");
    masterTL.from("#scarfWrapper1", 3, {width:0, ease:Sine.easeInOut}, "start+=2.7");
    masterTL.from("#flame1", 0.5, {scale:0, ease:Sine.easeOut}, "start+=3.7");

    masterTL.from("#flame1", 0.02, {rotationY:180, repeat:15, yoyo:true, repeatDelay:0.19, ease:Sine.easeOut}, "start+=4.3");
    masterTL.from("#flame2", 0.5, {scale:0, ease:Sine.easeOut}, "start+=4.5");
    masterTL.from("#flame2", 0.02, {rotationY:180, rotation:7, repeat:10, yoyo:true, repeatDelay:0.24, ease:Sine.easeOut}, "start+=5");
    masterTL.from("#flower1", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=6.5");
    masterTL.from("#flower2", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=6.8");
    masterTL.from("#flower3", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=7.1");
    masterTL.from("#flower4", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=7.4");
    
    masterTL.to("#banner", 0.5, {}, "start+=9.3");

    console.log(masterTL.duration());
    

}

