window.onload = function () {
    init();
}

function init() {
   
    var mouseoverTL = getMouseOverAnimation();
    document.querySelector("#mainExit").addEventListener("mouseover", function () {
        if (masterTL.progress() == 1) {
            console.log('play');
            
            mouseoverTL.play(0);
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(clickTag, '_blank');
        masterTL.progress(1).pause();
    })

    populateStarryBackground();
    getAnimation();
}

function populateStarryBackground() {
    var starryBackground = document.querySelector("#starryBackground");
    var starCount = 30;

    for (var i = 0; i < starCount; i++) {
        var star = document.createElement("div");
        star.className = "star";

        var starSize = Math.random() * 5 + 3;
        var starColor = "#ffffff";
        var starOpacity = Math.random() * 0.5 + 0.25; 

        star.style.position = "absolute";
        star.style.top = Math.random() * 100 + "%"; 
        star.style.left = Math.random() * 100 + "%"; 
        star.style.pointerEvents = "none";
        star.style.transform = "translate(-50%, -50%)";
        star.style.opacity = 0.5;
        star.style.boxShadow = "0 0 5px " + starColor;
        star.style.borderRadius = "50%";

        star.style.width = starSize + "px";
        star.style.height = starSize + "px";
        star.borderRadius = "50%";
        star.style.backgroundColor = starColor;
        star.style.opacity = starOpacity;
        
        gsap.to(star, {
            duration: Math.random() * 2 + 1,
            scale: Math.random() * 0.5 + 0.75,
            opacity: Math.random() * 0.25 + 0.15,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: Math.random() * 2
        });

        starryBackground.appendChild(star);
    }
};


function getAnimation(){
    var musicIconTL = getMusicIconAnimation();
    var musicIconTL2 = getMusicIconAnimation2();
    var buttonPressTL = getButtonPressAnimation();
    var spriteTL = getSpriteAnimation();
    var rayEdgeTL = getRayEdgeAnimation();
    // var horizonEndframeTL = getHorizonEndframeAnimation();
    masterTL = gsap.timeline({repeat:0, timeScale:0.5 });

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");

    masterTL.add('bookOpen', 'start+=0.25');

    masterTL.add(spriteTL, 'bookOpen');

    masterTL.from("#spaceWrapper", 1, {clipPath:"polygon(33% -7%, 33% 0%, 33% 79%)", ease:Sine.easeInOut}, "bookOpen");
    masterTL.add(musicIconTL, 'bookOpen+=0.5');
    masterTL.add(musicIconTL2, '-=1.5');
    
    masterTL.add(buttonPressTL, '-=5');
    // masterTL.add(horizonEndframeTL, '-=2.5')
    masterTL.from("#gradient", 0.5, { opacity: 0.3, ease: Sine.easeIn }, "bookOpen+=0.5");
    masterTL.from("#darkGradient", 1.5, { opacity: 0, ease: Sine.easeIn }, "bookOpen+=0.7");

    
    masterTL.add(rayEdgeTL, 'bookOpen');

}

function getSpriteAnimation() {
    var tl = gsap.timeline({ paused: false, repeat: 0 });
    tl.add("sprite");
    for (var i = 0; i < 4; i++) {
        tl.to("#sprite", 0, {x:"-=132", ease:Sine.easeInOut}, "sprite+="+(0.2*i));
    }

    return tl;
}

function getButtonPressAnimation() { 
    var tl = gsap.timeline({ paused: false, repeat: 0 });
    tl.from('.handButtonContainer', 3, { scale: 0, y: -120, ease: Sine.easeIn }, "start+=1.7");
    tl.from("#hand", 1, { y: -80, x: -10, repeat: 1, repeatDelay:0.1, yoyo: true, ease: Sine.easeInOut }, "start+=3.7");
    tl.from(document.querySelectorAll('.buttonBottomLine'), 0.8, { width: 0, ease: Sine.easeOut, stagger: 0.25 }, "start+=4.7");
    tl.to(document.querySelectorAll('.buttonBottomLine'), 0.7, {y: 50, opacity:0, ease: Sine.easeOut, stagger:0.25 }, "start+=4.7");
    tl.to('.handButtonContainer', 3.5, { scale: 2.7, y: 50, ease: Sine.easeOut }, "start+=4.6");
    tl.to('.buttonBottomLinesContainer', 1.5,{scale: 2.7, y:50, ease: Sine.easeOut }, "start+=4.6");
    tl.to('.handButtonContainer', 0.3, { opacity: 0, ease: Sine.easeOut }, "start+=5.3");
    
    tl.to('.ray01', 0.2, { repeat:0, yoyo:true, backgroundColor: "rgb(202, 195, 208);", boxShadow: "1px 1px 26px 8px rgba(214,177,247,0.32)", ease: "power2.out", }, "start+=4.5")
    tl.to('.ray02', 0.2, { repeat:0, yoyo:true, boxShadow: "1px 1px 10px 8px rgb(184, 161, 204)", ease: "power2.out", }, "start+=4.5")
    tl.to('.ray03', 0.2, { repeat:0, yoyo:true, boxShadow: "1px 1px 16px 8px rgba(153, 150, 156, 0.27)", ease: "power2.out", }, "start+=4.5")
    tl.to('.ray04', 0.2, { repeat:0, yoyo:true, boxShadow: "1px 1px 18px 8px rgba(255, 255, 255, 0.42)", ease: "power2.out", }, "start+=4.5")
    tl.to('.ray05', 0.2, { repeat: 0, yoyo: true, boxShadow: "1px 1px 38px 8px rgba(220, 216, 224, 0.82)", ease: "power2.out", }, "start+=4.5")
    

    tl.to('.ray01', 0.2, { repeat:0, yoyo:true, backgroundColor: "rgb(202, 195, 208);", boxShadow: "1px 1px 13px 2px rgba(214,177,247,0.32)", ease: "power2.out", }, "start+=4.7")
    tl.to('.ray02', 0.2, { repeat:0, yoyo:true, boxShadow: "1px 1px 5px 2px rgb(184, 161, 204)", ease: "power2.out", }, "start+=4.7")
    tl.to('.ray03', 0.2, { repeat:0, yoyo:true, boxShadow: "1px 1px 8px 2px rgba(153, 150, 156, 0.27)", ease: "power2.out", }, "start+=4.7")
    tl.to('.ray04', 0.2, { repeat:0, yoyo:true, boxShadow: "1px 1px 9px 2px rgba(255, 255, 255, 0.42)", ease: "power2.out", }, "start+=4.7")
    tl.to('.ray05', 0.2, { repeat: 0, yoyo: true, boxShadow: "1px 1px 19px 2px rgba(220, 216, 224, 0.82)", ease: "power2.out", }, "start+=4.7")

    tl.from("#buttonPressGradient", 0.2, { opacity: 0, ease: Sine.easeIn, yoyo:true, repeat:1 }, "start+=4.5");

    tl.to('#button', 0.2, {filter:"brightness(1.75)"}, "start+=4.5");
    return tl;
}

function getMusicIconAnimation() { 
    var tl = gsap.timeline({ paused: false });
    var iconPace = 1;
    
    tl.add("bookOpen");
    tl.from(".musicIconContainer01", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "bookOpen");
    tl.to(".musicIconContainer01", 0.75/iconPace, { scale: 2, ease: Sine.easeOut }, "bookOpen+=0.75");
    tl.to(".musicIconContainer01", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer01", 1.5/iconPace, {filter: "blur(4px)",  x: -350, y: -50, ease: Sine.easeIn }, "bookOpen");

    tl.add('musicIconContainer02In', 'bookOpen+=0.75');
    tl.from(".musicIconContainer02", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "musicIconContainer02In");
    tl.to(".musicIconContainer02", 0.75/iconPace, { scale: 1.6, ease: Sine.easeOut }, "musicIconContainer02In+=0.75");
    tl.to(".musicIconContainer02", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer02", 1.5/iconPace, {filter: "blur(4px)", x:-550, y:0, ease:Sine.easeIn}, "musicIconContainer02In");

    tl.add('musicIconContainer03In', 'bookOpen+=1.25');
    tl.from(".musicIconContainer03", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "musicIconContainer03In");
    tl.to(".musicIconContainer03", 0.75/iconPace, { scale: 1.6, ease: Sine.easeOut }, "musicIconContainer03In+=0.75");
    tl.to(".musicIconContainer03", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer03", 1.5/iconPace, {filter: "blur(4px)", x:-550, y:-150, ease:Sine.easeIn}, "musicIconContainer03In");

    tl.add('musicIconContainer04In', 'bookOpen+=0.3');
    tl.from(".musicIconContainer04", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "musicIconContainer04In");
    tl.to(".musicIconContainer04", 0.75/iconPace, { scale: 2, ease: Sine.easeOut }, "musicIconContainer04In+=0.75");
    tl.to(".musicIconContainer04", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer04", 1.5/iconPace, {filter: "blur(4px)",  x: 600, y: -50, ease: Sine.easeIn }, "musicIconContainer04In");

    tl.add('musicIconContainer05In', 'bookOpen+=1');
    tl.from(".musicIconContainer05", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "musicIconContainer05In");
    tl.to(".musicIconContainer05", 0.75/iconPace, { scale: 1.6, ease: Sine.easeOut }, "musicIconContainer05In+=0.75");
    tl.to(".musicIconContainer05", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer05", 1.5/iconPace, {filter: "blur(4px)", x:650, y:0, ease:Sine.easeIn}, "musicIconContainer05In");

    tl.add('musicIconContainer06In', 'bookOpen+=1.55');
    tl.from(".musicIconContainer06", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "musicIconContainer06In");
    tl.to(".musicIconContainer06", 0.75/iconPace, { scale: 1.6, ease: Sine.easeOut }, "musicIconContainer06In+=0.75");
    tl.to(".musicIconContainer06", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer06", 1.5/iconPace, {filter: "blur(4px)", x:550, y:-150, ease:Sine.easeIn}, "musicIconContainer06In");

    return tl;

}

function getMusicIconAnimation2() { 
    var tl = gsap.timeline({ paused: false });
    var iconPace = 1;
    
    tl.add("bookOpen");
    tl.from(".musicIconContainer07", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "bookOpen");
    tl.to(".musicIconContainer07", 0.75/iconPace, { scale: 2, ease: Sine.easeOut }, "bookOpen+=0.75");
    tl.to(".musicIconContainer07", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer07", 1.5/iconPace, {filter: "blur(4px)",  x: -350, y: -50, ease: Sine.easeIn }, "bookOpen");

    tl.add('musicIconContainer08In', 'bookOpen+=0.75');
    tl.from(".musicIconContainer08", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "musicIconContainer08In");
    tl.to(".musicIconContainer08", 0.75/iconPace, { scale: 1.6, ease: Sine.easeOut }, "musicIconContainer08In+=0.75");
    tl.to(".musicIconContainer08", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer08", 1.5/iconPace, {filter: "blur(4px)", x:-550, y:0, ease:Sine.easeIn}, "musicIconContainer08In");

    tl.add('musicIconContainer09In', 'bookOpen+=1.25');
    tl.from(".musicIconContainer09", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "musicIconContainer09In");
    tl.to(".musicIconContainer09", 0.75/iconPace, { scale: 1.6, ease: Sine.easeOut }, "musicIconContainer09In+=0.75");
    tl.to(".musicIconContainer09", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer09", 1.5/iconPace, {filter: "blur(4px)", x:-550, y:-150, ease:Sine.easeIn}, "musicIconContainer09In");

    tl.add('musicIconContainer10In', 'bookOpen+=0.3');
    tl.from(".musicIconContainer10", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "musicIconContainer10In");
    tl.to(".musicIconContainer10", 0.75/iconPace, { scale: 2, ease: Sine.easeOut }, "musicIconContainer10In+=0.75");
    tl.to(".musicIconContainer10", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer10", 1.5/iconPace, {filter: "blur(4px)",  x: 600, y: -50, ease: Sine.easeIn }, "musicIconContainer10In");

    tl.add('musicIconContainer11In', 'bookOpen+=1');
    tl.from(".musicIconContainer11", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "musicIconContainer11In");
    tl.to(".musicIconContainer11", 0.75/iconPace, { scale: 1.6, ease: Sine.easeOut }, "musicIconContainer11In+=0.75");
    tl.to(".musicIconContainer11", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer11", 1.5/iconPace, {filter: "blur(4px)", x:650, y:0, ease:Sine.easeIn}, "musicIconContainer11In");

    tl.add('musicIconContainer12In', 'bookOpen+=1.55');
    tl.from(".musicIconContainer12", 0.75/iconPace, { opacity: 0, scale: 0, ease: Sine.easeIn }, "musicIconContainer12In");
    tl.to(".musicIconContainer12", 0.75/iconPace, { scale: 1.6, ease: Sine.easeOut }, "musicIconContainer12In+=0.75");
    tl.to(".musicIconContainer12", 0.25/iconPace, { opacity:0, ease: Sine.easeOut }, '-=0.25');
    tl.to(".musicIconContainer12", 1.5/iconPace, {filter: "blur(4px)", x:550, y:-150, ease:Sine.easeIn}, "musicIconContainer12In");

    return tl;

}

function getRayEdgeAnimation() { 
    var tl = gsap.timeline({ paused: false });
    tl.add('start')
    tl.from('.rayContainerLeft', 0.3, { opacity: 0, ease: "power2.out", }, 'start')
    tl.from('.rayContainerRight', 0.3, { opacity:0, ease: "power2.out", }, 'start')
    tl.to('.rayContainerLeft', 0.95, { rotation: -73, ease: "power2.out", }, 'start+=0.1')
    tl.to('.rayContainerRight', 0.95, {rotation: 74, ease: "power2.out",}, 'start+=0.1')
    
    tl.to('.ray01', 3, { repeat:0, yoyo:true, backgroundColor: "rgb(202, 195, 208);", boxShadow: "1px 1px 13px 2px rgba(214,177,247,0.32)", ease: "power2.out", }, 'start+=0.1')
    tl.to('.ray02', 3, { repeat:0, yoyo:true, boxShadow: "1px 1px 5px 2px rgb(184, 161, 204)", ease: "power2.out", }, 'start+=0.1')
    tl.to('.ray03', 3, { repeat:0, yoyo:true, boxShadow: "1px 1px 8px 2px rgba(153, 150, 156, 0.27)", ease: "power2.out", }, 'start+=0.1')
    tl.to('.ray04', 3, { repeat:0, yoyo:true, boxShadow: "1px 1px 9px 2px rgba(255, 255, 255, 0.42)", ease: "power2.out", }, 'start+=0.1')
    tl.to('.ray05', 3, { repeat:0, yoyo:true, boxShadow: "1px 1px 19px 2px rgba(220, 216, 224, 0.82)", ease: "power2.out", }, 'start+=0.1')

    return tl;

}

function getHorizonEndframeAnimation() { 
    var tl = gsap.timeline({ paused: false });
    tl.add('start')
    tl.from('.endFrameHorizon', 0.5, { opacity: 0, ease: "power2.out", }, 'start')

    return tl;
}

function getMouseOverAnimation() { 
    var tl = gsap.timeline({ paused: true});
    tl.add("sprite");
    tl.to("#sprite", 0, { x: "+=132", ease: Sine.easeInOut }, "sprite");
    tl.to("#sprite", 0, { x: "-=132", ease: Sine.easeInOut }, "sprite+=0.4");
    
    tl.to('.rayContainerLeft', 0.3, { rotation: -63, ease: "power2.out", }, 'sprite')
    tl.to('.rayContainerRight', 0.3, { rotation: 63, ease: "power2.out", }, 'sprite')
    
    tl.to("#spaceWrapper", 0.3, {clipPath:"polygon(4% -7%, 60% 0%, 33% 79%)", ease: "power2.out"}, 'sprite');

    tl.to('.rayContainerLeft', 0.3, { rotation: -73, ease: "power2.out", }, 'sprite+=0.4')
    tl.to('.rayContainerRight', 0.3, { rotation: 74, ease: "power2.out", }, 'sprite+=0.4')
    tl.to("#spaceWrapper", 0.3, {clipPath:"polygon(-17% -7%, 81% 0%, 33% 79%)", ease: "power2.out"}, 'sprite+=0.4');
    tl.from("#buttonPressGradient", 0.2, { opacity: 0, ease: Sine.easeIn, yoyo:true, repeat:1, repeatDelay:0.2 }, 'sprite');
    
    return tl;
}