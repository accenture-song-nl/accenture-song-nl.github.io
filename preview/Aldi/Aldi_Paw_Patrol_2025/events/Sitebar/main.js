myFT.on("ready", init);


function init() {

    getAnimation();

    window.addEventListener("resize", onResize);
    onResize();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {opacity:0.8, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {opacity:1, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        // masterTL.progress(1);
        masterTL.pause();
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
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#logo", {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("intro")
    masterTL.from("#bg", 1, {scale:1.2, ease:Sine.easeInOut}, "intro");
    masterTL.from("#pups", 1, {scale:0.75, ease:Sine.easeInOut}, "intro");
    masterTL.from("#text1", 0.5, {opacity:0, y:-20, ease:Power2.easeIn}, "intro");
    masterTL.from("#logoPP", 0.5, {y:-450, ease:Power2.easeOut}, "intro+=1");
    // masterTL.to("#bluePanel", 1, {borderRadius:"30px 30px 0px 0px", height:435, ease:Sine.easeInOut}, "intro+=1");
    
    masterTL.add("text1", "+=2")
    masterTL.to("#logoPP", 0.5, {y:-450, ease:Power2.easeIn}, "text1");
    
    masterTL.add("text2", "-=0.5")
    masterTL.to("#text1", 0.5, {opacity:0, ease:Power2.easeIn}, "text2");
    masterTL.from("#text2", 0.5, {opacity:0, y:-20, ease:Power2.easeOut}, "text2+=0.4");
    masterTL.from("#text3", 0.5, {opacity:0, y:-20, ease:Power2.easeOut}, "text2+=0.8");
    
    masterTL.add("date1", "-=0.5")
    masterTL.from("#date1", 0.5, {opacity:0, x:600, ease:Power2.easeOut}, "date1");
    masterTL.from("#cities1", 0.5, {opacity:0, x:600, ease:Power2.easeOut}, "date1+=0.3");
    masterTL.to("#date1", 0.5, {opacity:0, x:-600, ease:Power2.easeOut}, "date1+=3");
    masterTL.to("#cities1", 0.5, {opacity:0, x:-600, ease:Power2.easeOut}, "date1+=3.1");
    
    masterTL.add("date2", "-=0.3")
    masterTL.from("#date2", 0.5, {opacity:0, x:600, ease:Power2.easeOut}, "date2");
    masterTL.from("#cities2", 0.5, {opacity:0, x:600, ease:Power2.easeOut}, "date2+=0.3");
    masterTL.to("#date2", 0.5, {opacity:0, x:-600, ease:Power2.easeOut}, "date2+=3");
    masterTL.to("#cities2", 0.5, {opacity:0, x:-600, ease:Power2.easeOut}, "date2+=3.1");
    
    masterTL.add("end", "-=0.1")
    masterTL.to("#text1", 0.5, {opacity:1, ease:Power2.easeIn}, "end");
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "end+=0.5");
    
    masterTL.play();

    console.log(masterTL.duration());
    
    
}