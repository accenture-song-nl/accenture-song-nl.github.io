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
    rolloverTL.to("#gremlin", 0.9, {x:-5, yoyo:true, repeat:1, ease:"bac1.inOut(1.4)"}, "start");

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#copy", 1, {clipPath:"polygon(85% 0px, 85% 0%, 85% 100%, 85% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start+=1");
    masterTL.from("#gremlin", 0.75, {y:100, ease:"back.out(1.4)"}, "start+=1");
    masterTL.to("#gremlin", 2, {x:10, ease:"bac1.inOut(1.4)"}, "start+=1.75");
    masterTL.to("#gremlin", 4, {x:-10, y:5, ease:"back.inOut(1.4)"}, "start+=3.75");
    masterTL.to("#gremlin", 2, {x:0, y:0, ease:"back.inOut(1.4)"}, "start+=7.75");

    
    console.log(masterTL.duration());
    

}




