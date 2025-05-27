myFT.on("ready", init);


function init() {

    getAnimation();

    window.addEventListener("resize", onResize);
    onResize();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to(["#cta_bg", "#cta_text"], 0.3, { scale:1.1, ease: Sine.easeInOut });
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to(["#cta_bg", "#cta_text"], 0.3, { scale:1.0, ease: Sine.easeInOut });
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
    gsap.set("#scaler", {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
        if(masterTL.progress() < 0.9){
            gsap.set("#logo", {left:335, x:0, xPercent:0});
        }
    }
    else if(bannerW < scalerW){
        if(masterTL.progress() < 0.9){
            gsap.set("#logo", {left:"50%", xPercent:-50, x:-screenW/2 });
        }
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
    }
    else{
        if(masterTL.progress() < 0.9){
            gsap.set("#logo", {left:35, x:0, xPercent:0});
        }
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from('#preisfuhrer_sticker_wrapper', 0.5, {width: 0}, "start+=0.1")
    masterTL.from('#preisfuhrer_sticker_bg', 0.5, {opacity: 0}, "start+=0.2")
    masterTL.from('#preisfuhrer_sticker_text', 0.5, {opacity: 0}, "start+=0.7")
    masterTL.from('#OAP_sticker', 0.3, {opacity:0, scale: 1.4, rotation:-45, ease: "back.out(2)"}, "start+=0.7")

    masterTL.add('product01In', "+=1.1")
    masterTL.to(['#preisfuhrer_sticker_wrapper', '#OAP_sticker'], 0, {opacity:0}, 'product01In+=1')

    masterTL.from('#bg_overlay', 0.5, {opacity:0, y:'-100%', x:'100%', ease: "power2.out"}, "product01In")
    masterTL.from('#date_wrapper', 0.5, {width: 0}, "product01In+=0.4")
    masterTL.from('#date_bg', 0.5, {opacity: 0}, "product01In+=0.5")
    masterTL.from('#date_text', 0.5, { opacity: 0 }, "product01In+=0.8")
    masterTL.from('#product01', 0.7, {opacity:0, scale: 1.4, rotation:-45, ease: "back.out(2)"}, "product01In+=1.2")

    masterTL.from('#description_text01', 0.5, { opacity: 0, y:35 }, "product01In+=1.6")
    masterTL.from('#price_sticker01', 0.5, { opacity: 0, y: 35 }, "product01In+=1.8")
    
    masterTL.to(['#price_sticker01', '#description_text01', '#product01'], 0.5, { opacity: 0, xPercent:50, ease: "back.in(1.2)" }, "product01In+=3.1")
    
    masterTL.add('product02In', "-=0.9")
    masterTL.from('#product02', 0.7, {opacity:0, scale: 1.4, rotation:-45, ease: "back.out(2)"}, "product02In+=1.2")

    masterTL.from('#description_text02', 0.5, { opacity: 0, y:35 }, "product02In+=1.6")
    masterTL.from('#price_sticker02', 0.5, { opacity: 0, y: 35 }, "product02In+=1.8")
    
    masterTL.add('product02Out', "+=1")
    masterTL.to(['#bg_overlay', '#price_sticker02', '#description_text02', '#product02', "#date_wrapper", "#aldi_logo"], 0.5, { opacity: 0, xPercent:50, ease: "power2.in" }, "product02Out")
    

    masterTL.add('endframeIn', "+=0")
    masterTL.from('#aldi_endframe_logo', 0.5, { opacity: 0 }, "endframeIn+=0.1")
    masterTL.from('#description_bg_endframe', 0.3, { opacity: 0, scale:0.2, ease: "back.out(2)" }, "endframeIn+=0.6")
    masterTL.from('#description_text_endframe', 0.5, { opacity: 0 }, "endframeIn+=1")
    masterTL.from('#OAP_sticker_endframe', 0.5, { opacity:0, scale: 1.4, rotation:-45, ease: "back.out(2)" }, "endframeIn+=1.2")

    masterTL.from('#cta_bg', 0.5, { opacity: 0 }, "endframeIn+=1.5")
    masterTL.from('#cta_text', 0.5, { opacity: 0 }, "endframeIn+=1.6")
                
    masterTL.to(['#cta_bg', '#cta_text'], 0.3, { scale:1.2, yoyo:true, repeat:3, ease: "power1.in" }, "endframeIn+=2.3")

    masterTL.play();
}