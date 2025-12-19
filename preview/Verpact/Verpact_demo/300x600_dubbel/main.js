window.winPrice = false;
window.allowTip =true;
window.exitClicked = false;


window.onload = function () {
    init();
}

function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function () {
        gsap.to("#cta", 0.5, {opacity:0.8, ease:Sine.easeOut});
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        gsap.to("#cta", 0.5, {opacity:1, ease:Sine.easeOut});
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        console.log("click");
        if(window.exitClicked){
            console.log("end");
            
            window.open(clickTag, '_blank');
        }
        else if(window.winPrice){
            gsap.killTweensOf(["#can1", "#can2"]);
            gsap.to("#can1", 0.5, {x:0, ease:Sine.easeOut});
            gsap.to("#can2", 0.5, {x:95, ease:Sine.easeOut});
            gsap.to("#text2", 0.5, {opacity:0, ease:Sine.easeOut});
            gsap.to("#text3", 0.5, {opacity:1, ease:Sine.easeOut, delay:0.4});
            gsap.to("#cta", 0.5, {scale:1, ease:Back.easeOut, delay:0.5});
            window.exitClicked = true;
        }
        else{
            if(window.allowTip){
                window.allowTip = false;
                gsap.to("#tryAgainBtn", 0.25, {opacity:1, repeat:1, repeatDelay:0.5, yoyo:true, ease:Power1.easeOut, onComplete:function(){
                    window.allowTip = true;
                }});
                gsap.set("#tryAgainBtn", {rotation:gsap.utils.random(-10, 10, 1)});
            }
        }
    })

    getAnimation();
    gsap.set("#can2", {x:395});
}


function getAnimation(){

    masterTL = gsap.timeline({paused:true});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#text1A", 1, {scale:0, ease:Back.easeOut.config(1.7)}, "start+=0.2");
    masterTL.fromTo("#text1B", 1, {x:270}, {x:-270, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.fromTo("#text1B2", 1, {x:-270}, {x:270, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.to("#text1B", 1.3, {x:0, ease:Back.easeOut}, "start+=1.5");
    masterTL.to("#text1B2", 1.3, {x:0, ease:Back.easeOut}, "start+=1.5");
    masterTL.from("#text1C", 2, {scale:0, ease: "elastic.out(1,0.3)"}, "start+=2");

    masterTL.fromTo("#can1", 2, {x:300}, {x:-300, ease:Power1.easeOut}, "start+=1");
    masterTL.fromTo("#can1", 2, {x:300}, {x:-300, ease:Power1.easeOut }, "start+=3");
    masterTL.to("#canShadowGlow", 1.5, {opacity:1, repeat:1, yoyo:true, ease:Power1.easeOut}, "start+=5");
    masterTL.fromTo("#can1", 3, {x:300}, {x:-300, ease:Power1.easeOut, onStart:function(){
        window.winPrice = true;
    }}, "start+=5");
    masterTL.fromTo("#can2", 3, {x:395}, {x:-205, ease:Power1.easeOut, onComplete:animateCan}, "start+=5");
    
    masterTL.play();
    console.log(masterTL.duration());
}

function animateCan(){
    var num = gsap.utils.random(1, 3, 1);
    console.log(num);
    if(num == 1){
        gsap.fromTo("#can1", 3, {x:300}, {x:-300, ease:Power1.easeOut, onComplete:animateCan});
        gsap.fromTo("#can2", 3, {x:395}, {x:-205, ease:Power1.easeOut});
        gsap.to("#canShadowGlow", 1.5, {opacity:1, repeat:1, yoyo:true, ease:Power1.easeOut});
        window.winPrice = true;
    }
    else{
        gsap.fromTo("#can1", 2, {x:300}, {x:-300, ease:Power1.easeOut, onComplete:animateCan});
        window.winPrice = false;
    }
    
}