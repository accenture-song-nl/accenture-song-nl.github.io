window.onload = function () {
    init();
}

function init(clickTAGvalue) {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {scale:1.1, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {scale:1, ease:Sine.easeInOut});

        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.example.com');
        window.open(clickTAGvalue);
        masterTL.progress(1).pause();    
    })

    getAnimation();
}

function getAnimation(){
    
    
    masterTL = new TimelineLite({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete: 
        function(){
            document.querySelector("#loaderWrapper").style.display = "none";
        }
    })

    masterTL.add("start");
    masterTL.from("#bg1", 1.5, {scale:1.2, ease:Sine.easeInOut}, "start")
    // masterTL.from(["#footer", "#logo", "#gradient"], 1, {y:250, ease:Sine.easeOut}, "start+=1")
    masterTL.from("#text1", 0.5, {x:-250, ease:Sine.easeOut}, "start+=2")
    masterTL.to(["#bg1", "#text1"], 0.5, {opacity:0, ease:Sine.easeOut}, "start+=4")
    
    masterTL.add("frame2", "-=0.5");
    masterTL.to("#bg2", 1.5, {scale:1.6, x:-89, y:-56, ease:Sine.easeInOut}, "frame2+=1")
    masterTL.from("#text2", 0.5, {x:-170, ease:Sine.easeOut}, "frame2+=2")
    masterTL.from("#darken", 0.5, {opacity:0, ease:Sine.easeOut}, "frame2+=2")
    masterTL.to(["#bg2", "#text2", "#darken"], 0.5, {opacity:0, ease:Sine.easeOut}, "frame2+=4")

    masterTL.add("frame3", "-=0.5");
    masterTL.from("#bg3", 1.5, {scale:1.2, ease:Sine.easeInOut}, "frame3")
    masterTL.from("#text3A", 0.5, {x:-250, ease:Sine.easeOut}, "frame3+=1")
    masterTL.from("#text3B", 0.5, {x:-250, ease:Sine.easeOut}, "frame3+=1.2")
    masterTL.from("#text3C", 0.5, {x:-250, ease:Sine.easeOut}, "frame3+=1.4")
    masterTL.from("#text3D", 0.5, {x:-250, ease:Sine.easeOut}, "frame3+=1.6")
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "frame3+=4")
    masterTL.to(["#bg3", "#text3A", "#text3B", "#text3C", "#text3D"], 0.5, {opacity:0, ease:Sine.easeOut}, "frame3+=6")
    
    masterTL.add("frame4", "-=0.5");
    masterTL.from("#bg4", 1.5, {scale:1.2, ease:Sine.easeInOut}, "frame4")
    masterTL.from("#text4A", 0.5, {x:-250, ease:Sine.easeOut}, "frame4+=1")
    masterTL.from("#text4B", 0.5, {x:-250, ease:Sine.easeOut}, "frame4+=1.2")
    
    masterTL.add("end", "+=1");
    masterTL.to("#cta", 0.2, {scale:1.1, ease:Sine.easeInOut}, "end")
    masterTL.to("#cta", 0.2, {scale:1, ease:Sine.easeInOut})
    masterTL.to("#cta", 0.2, {scale:1.1, ease:Sine.easeInOut})
    masterTL.to("#cta", 0.2, {scale:1, ease:Sine.easeInOut})
    
    masterTL.add("end2", "+=3");
    masterTL.to("#cta", 0.2, {scale:1.1, ease:Sine.easeInOut}, "end2")
    masterTL.to("#cta", 0.2, {scale:1, ease:Sine.easeInOut})
    masterTL.to("#cta", 0.2, {scale:1.1, ease:Sine.easeInOut})
    masterTL.to("#cta", 0.2, {scale:1, ease:Sine.easeInOut})
    
    masterTL.add("end3", "+=3");
    masterTL.to("#cta", 0.2, {scale:1.1, ease:Sine.easeInOut}, "end3")
    masterTL.to("#cta", 0.2, {scale:1, ease:Sine.easeInOut})
    masterTL.to("#cta", 0.2, {scale:1.1, ease:Sine.easeInOut})
    masterTL.to("#cta", 0.2, {scale:1, ease:Sine.easeInOut})
    
    console.log(masterTL.duration())
    

    masterTL.play();
}