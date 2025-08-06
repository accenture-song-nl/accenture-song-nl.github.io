myFT.on("ready", init);


function init() {

    getAnimation();

    window.addEventListener("resize", onResize);
    onResize();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta2", 0.3, {opacity:0.8, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta2", 0.3, {opacity:1, ease:Sine.easeInOut});
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
    masterTL.from("#logoPP", 0.5, {y:-450, ease:Power2.easeOut}, "intro+=1");
    masterTL.to("#bluePanel", 1, {borderRadius:"30px 30px 0px 0px", height:435, ease:Sine.easeInOut}, "intro+=1");
    masterTL.from("#stickerDate", 1, {y:1000, ease:Sine.easeInOut}, "intro+=1");
    masterTL.from("#sticker1", 1, {y:1000, ease:Sine.easeInOut}, "intro+=1");
    masterTL.from("#sticker2", 1, {y:1200, ease:Sine.easeInOut}, "intro+=1");
    masterTL.from("#sticker3", 1, {y:1000, ease:Sine.easeInOut}, "intro+=1");
    masterTL.from("#stickerBadge", 1, {y:1400, ease:Sine.easeInOut}, "intro+=1");
    masterTL.from("#frame", 1, {opacity:0, x:-50, y:10, rotation:-20, ease:Power2.easeOut}, "intro+=1.2");
    masterTL.to("#sticker1", 1, {rotation:4, repeat:3, yoyo:true, ease:Sine.easeInOut}, "intro+=2");
    masterTL.to("#sticker2", 1, {rotation:-4, repeat:3, yoyo:true, ease:Sine.easeInOut}, "intro+=2");
    masterTL.to("#sticker3", 2, {rotation:4, repeat:1, yoyo:true, ease:Sine.easeInOut}, "intro+=2");
    
    masterTL.add("text1", "-=2.5")
    masterTL.to("#logoPP", 0.5, {y:-450, ease:Power2.easeIn}, "text1");
    masterTL.from("#text1", 0.5, {opacity:0, y:-20, ease:Power2.easeIn}, "text1+=0.5");
    
    masterTL.add("text2", "+=0.5")
    masterTL.to("#text1", 0.5, {opacity:0, ease:Power2.easeIn}, "text2");
    masterTL.from("#text2", 0.5, {opacity:0, y:-20, ease:Power2.easeOut}, "text2+=0.4");
    
    masterTL.add("showAlbum", "+=1.5")
    masterTL.to("#stickerDate", 1, {y:1000, ease:Sine.easeInOut}, "showAlbum");
    masterTL.to("#sticker1", 1, {y:1100, ease:Sine.easeInOut}, "showAlbum");
    masterTL.to("#sticker2", 1, {y:1200, ease:Sine.easeInOut}, "showAlbum");
    masterTL.to("#sticker3", 1, {y:1000, ease:Sine.easeInOut}, "showAlbum");
    masterTL.to("#stickerBadge", 1, {y:1400, ease:Sine.easeInOut}, "showAlbum");
    masterTL.to("#text1", 0.5, {opacity:1, ease:Power2.easeIn}, "showAlbum");
    masterTL.to("#text2", 0.8, {scale:0.6, y:-27, ease:Power2.easeIn}, "showAlbum");
    masterTL.to(["#pups", "#frame"], 1.5, {scale:0.4, ease:Power2.easeIn}, "showAlbum+=0.3");
    masterTL.from("#album", 1, {x:1000, ease:Power2.easeOut}, "showAlbum+=0.8");
    masterTL.from("#albumText", 1, {x:1100, ease:Power2.easeOut}, "showAlbum+=0.8");
    masterTL.from("#price", 1, {x:1200, ease:Power2.easeOut}, "showAlbum+=0.8");
    masterTL.from("#cta1", 0.5, {scale:0, ease:Back.easeOut}, "showAlbum+=1.5");
    masterTL.to("#cta1", 0.5, {scale:1.1, repeat:1, yoyo:true, ease:Power2.easeInOut}, "showAlbum+=2.5");
    masterTL.to(["#pups", "#frame"], 0.2, {opacity:0, ease:Power2.easeIn}, "showAlbum+=1.8");
    
    masterTL.add("endScreen", "+=0.5")
    masterTL.to("#album", 1, {x:-1000, ease:Power2.easeOut}, "endScreen");
    masterTL.to("#albumText", 1, {x:-1100, ease:Power2.easeOut}, "endScreen");
    masterTL.to("#price", 1, {x:-1200, ease:Power2.easeOut}, "endScreen");
    masterTL.to("#cta1", 0.3, {scale:0, ease:Sine.easeIn}, "endScreen");
    
    masterTL.to("#bluePanel", 0.3, {height:642, ease:Sine.easeInOut}, "endScreen+=0.8");
    masterTL.from("#winImage", 1, {x:1200, ease:Power2.easeOut}, "endScreen+=0.8");
    masterTL.from("#winText", 1, {x:1100, ease:Power2.easeOut}, "endScreen+=0.8");
    masterTL.from("#cta2", 0.5, {scale:0, ease:Back.easeOut}, "endScreen+=1.5");
    masterTL.from("#highlight1Wrapper", 1, {width:0, ease:Power2.easeOut}, "endScreen+=1.8");
    masterTL.to("#cta2", 0.5, {scale:1.1, repeat:1, yoyo:true, ease:Power2.easeInOut}, "endScreen+=2.5");
    
    masterTL.play();

    console.log(masterTL.duration());
    
    
}