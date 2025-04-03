window.onload = function () {
    init();
}

function init(clickTAGvalue) {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
        
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
         
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.example.com');
        masterTL.pause();
        // masterTL.progress(1).pause();
        
    })

    getAnimation();
}

function getAnimation(){
    
    
    masterTL = new TimelineLite({paused:true, repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete: 
        function(){
            document.querySelector("#loaderWrapper").style.display = "none";
        }
    })
    masterTL.add("start");

    masterTL.from("#bg1", 0.3, {scale:1.2, transformOrigin:"50% 50%", ease:Sine.easeInOut}, "start")
    masterTL.to("#bg1", 4, {scale:1.2, transformOrigin:"0% 100%", ease:Sine.easeInOut}, "start+=0.3");
    masterTL.from("#text1A", 0.3, {x:-300, ease:Sine.easeInOut}, "start+=0.5")
    masterTL.from("#text1B", 0.3, {x:-300, ease:Sine.easeInOut}, "start+=0.65")
    
    masterTL.add("switchBg", "-=0.3")
    masterTL.to("#bg1", 0.3, {scale:1.3, ease:Sine.easeInOut}, "switchBg")
    masterTL.to(["#text1A", "#text1B"], 0.3, {opacity:0, ease:Sine.easeInOut}, "switchBg")
    masterTL.from("#bg2", 0.3, {scale:1.4, ease:Sine.easeInOut},"switchBg")
    masterTL.to("#bg1", 0.15, {opacity:0, ease:Sine.easeInOut}, "switchBg+=0.15")
    masterTL.to("#bg2", 4, {scale:1.075, transformOrigin:"20% 80%", ease:Sine.easeInOut}, "switchBg+=0.3")
    masterTL.from("#text2A", 0.3, {x:-300, ease:Sine.easeInOut}, "switchBg+=0.5")
    masterTL.from("#text2B", 0.3, {x:-300, ease:Sine.easeInOut}, "switchBg+=0.65")
    masterTL.from("#text2C", 0.3, {x:-300, ease:Sine.easeInOut}, "switchBg+=0.8")
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "switchBg+=1.2")

    // masterTL.from("#borderT", 0.3, {width:0, ease:Sine.easeInOut}, "switchBg+=1.5")
    // masterTL.from("#borderR", 0.3, {height:0, ease:Sine.easeInOut}, "switchBg+=1.8")
    // masterTL.from("#borderB", 0.3, {width:0, ease:Sine.easeInOut}, "switchBg+=2.1")
    // masterTL.from("#borderL", 0.3, {height:0, ease:Sine.easeInOut}, "switchBg+=2.4")

    masterTL.add("animateCTA", "-=0");
    masterTL.to("#ctaOver", 0.25, {opacity:1, ease:Sine.easeInOut}, "animateCTA");
    masterTL.to("#ctaOver", 0.25, {opacity:0, ease:Sine.easeInOut}, "animateCTA+=0.25");
    masterTL.to("#ctaOver", 0.25, {opacity:1, ease:Sine.easeInOut}, "animateCTA+=0.5");
    masterTL.to("#ctaOver", 0.25, {opacity:0, ease:Sine.easeInOut}, "animateCTA+=0.75");
    masterTL.to("#ctaOver", 0.25, {opacity:1, ease:Sine.easeInOut}, "animateCTA+=1");
    masterTL.to("#ctaOver", 0.25, {opacity:0, ease:Sine.easeInOut}, "animateCTA+=1.25");
    
    masterTL.from("#banner", 0.5, {}, 12);


    console.log(masterTL.duration())
    

    masterTL.play();
}