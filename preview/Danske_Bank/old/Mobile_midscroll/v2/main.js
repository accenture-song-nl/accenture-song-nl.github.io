window.addEventListener('load', () => {
    var banner = document.querySelector("#banner");
    
	acu.init(banner, getAnimation, {preloader:{bg:"#002346", ring:"#fff", highlight:"#000"}});
});

function getAnimation(){

    window.addEventListener("resize", onResize);
    onResize();

    document.querySelector("#videoEl").addEventListener("click", function(e){
        checkPlayVid();
    })

    document.querySelector("#pauseBtn").addEventListener("click", function(e){
        checkPlayVid();
    })
    
    document.querySelector("#playBtn").addEventListener("click", function(e){
        checkPlayVid();
    })
    
    document.querySelector("#muteBtn").addEventListener("click", function(e){
        checkMuteVid();
    })
    document.querySelector("#unmuteBtn").addEventListener("click", function(e){
        checkMuteVid();
    })
    
    document.querySelector("#mainExit").addEventListener("click", function(e){
        gsap.set("#muteBtn", {display:"block"});
        gsap.set("#unmuteBtn", {display:"none"});
    });
        
    acu.applyClickTag(document.querySelector("#mainExit"), window.adnmClick);
    acu.applyVideoTracking(videoEl);

    masterTL = gsap.timeline({paused:true});
    masterTL.from("#text1", 0.3, {opacity:0, ease:Sine.easeInOut}, 0);
    masterTL.to("#text1", 0.3, {opacity:0, ease:Sine.easeInOut}, 3);
    masterTL.from("#text2", 0.3, {opacity:0, ease:Sine.easeInOut});
    masterTL.to("#text2", 0.3, {opacity:0, ease:Sine.easeInOut}, 6);
    masterTL.from("#text3", 0.3, {opacity:0, ease:Sine.easeInOut});
    
    masterTL.play();
}

function checkPlayVid(){
    if(videoEl.paused){
        videoEl.play();
        gsap.set("#pauseBtn", {display:"block"});
        gsap.set("#playBtn", {display:"none"});
    }
    else{
        videoEl.pause();
        gsap.set("#pauseBtn", {display:"none"});
        gsap.set("#playBtn", {display:"block"});
    }
}

function checkMuteVid(){
    if(videoEl.muted){
        videoEl.muted = false;
        gsap.set("#muteBtn", {display:"none"});
        gsap.set("#unmuteBtn", {display:"block"});
    }
    else{
        videoEl.muted = true;
        gsap.set("#muteBtn", {display:"block"});
        gsap.set("#unmuteBtn", {display:"none"});
    }
}

function onResize (){

    var frameH = window.innerHeight;
    var vScalerH = document.querySelector("#vScaler").offsetHeight;
    var newScale = frameH/vScalerH;

    if(vScalerH > frameH){
        gsap.set("#vScaler", {scale:newScale});
        var hScalerW = document.querySelector("#hScaler").offsetWidth*newScale;
    }
    else{
        var hScalerW = document.querySelector("#hScaler").offsetWidth;
    }
    
    var frameW = window.innerWidth;
    var newScale2 = frameW/hScalerW;
    
    if(hScalerW > frameW){
        gsap.set("#hScaler", {scale:newScale2});
    }
}