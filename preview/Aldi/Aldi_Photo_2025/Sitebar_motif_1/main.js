myFT.on("ready", init);


function init() {

    getAnimation();

    window.addEventListener("resize", onResize);
    onResize();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#ctaRight", 0.3, {opacity:0.8, ease:Sine.easeInOut});
        
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#ctaRight", 0.3, {opacity:1, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1);
    })
}

function onResize(){
    var screenW = document.body.offsetWidth;
    var bannerH = document.querySelector("#banner").offsetHeight;
    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerS = bannerH/1200;
    gsap.set(["#scaler", "#extraScaler"], {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
        gsap.set("#extraScaler", {scale:newScale*bannerS});
        gsap.set("#logo", {x:-300});
        console.log("1");
        gsap.set("#border", {width:"50%", left:"50%", x:"-50%"});
      
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#logo", {x:-((scalerW - screenW)/2)/bannerS});
        console.log("2");
        gsap.set("#border", {width:bannerW*((1/bannerS)*1), left:"50%", x:"-50%"});
        
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
        console.log("3");
        
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.from("#bg1Wrapper", 3, {y:1200, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 1, {x:1200, ease:Power1.easeOut}, "start+=1")
    
    masterTL.to("#text1", 1, {x:-1200, ease:Power1.easeIn}, "start+=4")
    masterTL.from(["#text2"], 1, {x:1200, ease:Power1.easeOut}, "start+=4.5")
    
    masterTL.to("#photoLogo", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=8")
    masterTL.from("#endscreen", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=8")
    masterTL.from("#text3", 1, {x:-50, opacity:0, ease:Power1.easeOut}, "start+=8.5")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=9");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=9.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=9.7");
 
    masterTL.play();

    console.log(masterTL.duration());
   
}