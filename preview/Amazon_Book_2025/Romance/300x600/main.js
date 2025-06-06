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

    // var druidTL = animateDruid();

    rolloverTL = gsap.timeline({paused:true});
    rolloverTL.add("start");
    rolloverTL.to("#spaceWrapper", 0.5, {clipPath:"polygon(-93% -7%, 151% 0%, 31% 79%)", repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#spaceWrapper", 2, {clipPath:"polygon(31% -7%, 31% 0%, 31% 79%)", ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from(["#couple", "#bootWoman"], 3, {y:100, ease:Sine.easeOut}, "start+=0.5");
    masterTL.from("#scarfWrapper3", 1.5, {width:0, ease:Sine.easeInOut}, "start+=1.4");
    masterTL.from("#scarfWrapper2", 1, {width:0, ease:Sine.easeInOut}, "start+=2.8");
    masterTL.from("#scarfWrapper1", 1.2, {width:0, ease:Sine.easeInOut}, "start+=3.7");
    masterTL.from("#flame1", 0.5, {scale:0, ease:Sine.easeOut}, "start+=3.7");
    masterTL.from("#flame1", 0.01, {rotationY:180, repeat:30, yoyo:true, repeatDelay:0.19, ease:Sine.easeOut}, "start+=4.3");
    masterTL.from("#flame2", 0.5, {scale:0, ease:Sine.easeOut}, "start+=4.5");
    masterTL.from("#flame2", 0.01, {rotationY:180, rotation:7, repeat:20, yoyo:true, repeatDelay:0.24, ease:Sine.easeOut}, "start+=5");
    
    // masterTL.add(druidTL, "start+=2");
    masterTL.to("#banner", 0.5, {}, "start+=9.3");

    console.log(masterTL.duration());
    

}

// function animateDruid() {
//     var tl = gsap.timeline({});

//     tl.add('start');
//     tl.to("#druid", 3.5, {x:-230, y:50, ease:Sine.easeIn}, "start");
//     tl.to("#druid", .5, {marginTop:5, repeat:6, yoyo:true, ease:Sine.easeInOut}, "start");

//     return tl;
// }

