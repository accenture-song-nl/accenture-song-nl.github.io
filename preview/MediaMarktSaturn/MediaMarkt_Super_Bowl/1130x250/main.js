window.onload = function () {
    init();
}

function init(){

    document.querySelector("#mainExit").addEventListener("click", exit);
    
    masterTL = new TimelineLite({paused:true});
    masterTL.add("start");
    masterTL.add(showAndPlayVideo(), "start");
    masterTL.add(getIntroAnimation(), "start");
    
    masterTL.play(0);

    setControls();
}

function setControls(){
    var pauseButton = document.getElementById("pause"),
        unmuteButton = document.getElementById("unmute"),
        playButton = document.getElementById("play"),
        muteButton = document.getElementById("mute"),
        videoEL = document.querySelector("#vid");
        videoControls = document.querySelector("#videoControls"),
        playBig = document.querySelector("#playBig")

    pauseButton.addEventListener("click", function() {
        if (videoEL.paused == false) {
            videoEL.pause();
            pauseButton.style.display = "none";
            playButton.style.display = "inline";
        }
    });
    
    playButton.addEventListener("click", function() {
        if (videoEL.paused == true) {
            videoEL.play();
            pauseButton.style.display = "inline";
            playButton.style.display = "none";
        }
    });

    unmuteButton.addEventListener("click", function() {
        if (videoEL.muted == true) {
            videoEL.muted = false;
            muteButton.style.display = 'inline';
            unmuteButton.style.display = 'none';
        } 
    });

    muteButton.addEventListener("click", function() {
        if (videoEL.muted == false) {
            videoEL.muted = true;
            muteButton.style.display = 'none';
            unmuteButton.style.display = 'inline';
        } 
    });

    videoEL.addEventListener("click", function() {
        if(videoEL.paused == true){
            videoEL.play();
            pauseButton.style.display = "inline";
            playButton.style.display = "none";
        }
        else{
            videoEL.pause();
            pauseButton.style.display = "none";
            playButton.style.display = "inline";
        }
        if(playBig.style.display != "none"){
            videoEL.muted = false;
            muteButton.style.display = 'inline';
            unmuteButton.style.display = 'none';
            videoEL.currentTime = 0;
            videoEL.play();
            videoControls.style.display = "inline";
            playBig.style.display = "none";
            return;
        }
    });

    videoEL.addEventListener('ended', function(){
        videoEL.currentTime = 0;
        pauseButton.style.display = "none";
        playButton.style.display = "inline";
        videoControls.style.display = "none";
        playBig.style.display = "inline";

    });

    videoEL.addEventListener("mouseover", function(){
        console.log("video over");
        
        playBig.style.fill = "#e00000";
    })

    videoEL.addEventListener("mouseout", function(){
        playBig.style.fill = "rgba(255, 255, 255, 1)";
    })
}
    
function showAndPlayVideo(){
    var videoEL = document.querySelector("#vid");

    var tl = new TimelineLite({});
    tl.add("start")
    tl.to("#loaderWrapper", 0.5, {autoAlpha:0, ease:Sine.easeInOut}, "start");
    tl.to("#vid", 0.01, {opacity:1, onStart:function(){
        videoEL.play();
    }}, "start");

    return tl;
}

function getIntroAnimation(){

    var tl = new TimelineLite({});
    tl.add("start")

    return tl;
}

function exit(){
    var videoEL = document.querySelector("#vid");
    
    masterTL.progress(1);
    
    videoEL.pause();
    videoEL.currentTime = videoEL.duration;
}
