myFT.on("ready", init);


function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            // gsap.to("#ctaRight", 0.3, {opacity:0.8, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            // gsap.to("#ctaRight", 0.3, {opacity:1, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1);
        // masterTL.pause();
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("intro")
    masterTL.from("#bg", 1, {scale:1.2, ease:Sine.easeInOut}, "intro");
    masterTL.from("#pups", 1, {scale:0.75, ease:Sine.easeInOut}, "intro");
    masterTL.from("#logoPP", 0.5, {y:-100, ease:Power2.easeOut}, "intro+=1");
    //masterTL.from("#frame", 1, {opacity:0, x:-50, y:10, rotation:-20, ease:Power2.easeOut}, "intro+=1.2");
    
    masterTL.add("text1", "+=0.3")
    masterTL.to("#logoPP", 0.5, {y:-100, ease:Power2.easeIn}, "text1");
    masterTL.to(["#pups", "#frame"], 0.3, {opacity:0, ease:Power2.easeIn}, "text1+=0.5");
    masterTL.to("#bg", 1, {objectPosition: "50% 26%", height: "107px", ease:Sine.easeInOut}, "text1+=1.2");
    masterTL.from("#text1", 0.5, {opacity:0, y:-20, ease:Power2.easeIn}, "text1+=1.5");
    masterTL.from("#sticker1", 0.5, {x:100, opacity: 0, ease:Power2.easeOut}, "text1+=2.1");
    masterTL.from("#highlight1Wrapper", 1, {width:0, ease:Power2.easeOut}, "text1+=1.9");
    
    // masterTL.add("text2", "-=3")
    // masterTL.to("#text1", 0.5, {opacity:0, ease:Power2.easeIn}, "text2");
    
    masterTL.add("firstDate")
    masterTL.to("#sticker1", 0.5, {x:20, opacity: 0, ease:Sine.easeInOut}, "firstDate+=1");
    masterTL.to("#highlight1Wrapper", 1, {width: 0, ease:Sine.easeInOut}, "firstDate+=1");
    masterTL.from("#date01", 1, {x:300, ease:Power2.easeOut}, "firstDate+=1.8");
    masterTL.to("#date01", 1, {x:-300, ease:Power2.easeOut}, "firstDate+=4.5");
    masterTL.to("#text1", 0.5, {opacity:0, ease:Power2.easeIn}, "firstDate+=4.5");
    
    masterTL.add("secondDate", "-=1")
    masterTL.from("#date02", 1, {x:300, ease:Power2.easeOut}, "secondDate");
    masterTL.from("#text2", 0.5, {opacity:0, y:-20, ease:Power2.easeOut}, "secondDate+=0.5");
    masterTL.to("#text2", 0.5, {opacity:0, ease:Power2.easeIn}, "secondDate+=2.7");
    masterTL.to("#date02", 1, {x:-300, ease:Power2.easeOut}, "secondDate+=2.7");
    
    masterTL.add("endScreen", "-=1");
    masterTL.to("#bg", 0.3, {height:"280px", objectPosition: "0", top: "-30px", scale: 1, borderRadius: 0, ease:Sine.easeInOut}, "endScreen+=0.8");
    masterTL.to("#bluePanel", 0, {height:143, width: "280px", left: "10px", ease:Sine.easeInOut}, "endScreen+=0.8");
    masterTL.to("#bluePanel", 0, {borderRadius:"15px 15px 0px 0px", zIndex: 0, ease:Sine.easeInOut}, "endScreen+=0.8");
    masterTL.from("#bluePanel", 1, {y:200, ease:Sine.easeInOut}, "endScreen+=0.8");
    masterTL.to("#text1", 0.5, {opacity:1, ease:Power2.easeIn}, "endScreen+=0.8");
    masterTL.from("#winImage", 1, {x:300, ease:Power2.easeOut}, "endScreen+=0.8");
    masterTL.from("#winText", 1, {x:280, ease:Power2.easeOut}, "endScreen+=0.8");
    masterTL.from("#cta2", 0.5, {opacity:0, ease:Back.easeOut}, "endScreen+=1.5");
    masterTL.to("#sticker1", 0, {y: -7, ease:Sine.easeInOut}, "endScreen+=1.8");
    masterTL.to("#highlight1Wrapper", 0, {y: -7, ease:Sine.easeInOut}, "endScreen+=1.8");
    masterTL.to("#sticker1", 0.3, {x:0, opacity: 1, ease:Sine.easeInOut}, "endScreen+=2.1");
    masterTL.to("#highlight1Wrapper", 0.5, {width:"100%", ease:Sine.easeInOut}, "endScreen+=1.9");
    masterTL.to("#cta2", 0.5, {scale:1.05, repeat:1, yoyo:true, ease:Power2.easeInOut}, "endScreen+=2.5");
    
    masterTL.play();

    console.log(masterTL.duration());
    masterTL.duration(18);
    
}