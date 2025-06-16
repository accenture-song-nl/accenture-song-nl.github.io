window.onload = function () {
    init();
}

function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function () {
        if (masterTL.progress() == 1) {
            rolloverTL.play(0);
            getMousePos();
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

    getAnimation();
}


function getAnimation(){

      var skeletonTL = animateSkeleton();
      var monsterTL = animateMonster();

    rolloverTL = gsap.timeline({paused:true});
    rolloverTL.add("start");
    rolloverTL.to("#spaceWrapper", 0.5, {clipPath:"polygon(-89% 0%, 160% 0%, 33% 75%)", repeat:1, yoyo:true, ease:Sine.easeInOut}, "start");
    rolloverTL.to("#monsterWrapper", 1, {y:3, x:10, repeat:1, yoyo:true, ease:Power1.easeInOut}, "start");
    rolloverTL.to("#arm1", 1, {rotation:-20, yoyo:true, repeat:1, ease:Power2.easeInOut}, "start");
    rolloverTL.to("#arm2", 1, {rotation:40, yoyo:true, repeat:1, ease:Sine.easeInOut}, "start");
    // rolloverTL.to("#skeleton", 0.75, {rotation:-5, yoyo:true, repeat:1, ease:Power1.easeInOut}, "start");
    rolloverTL.to("#gremlin", 0.9, {x:-5, yoyo:true, repeat:1, ease:"bac1.inOut(1.4)"}, "start");
    // rolloverTL.to("#gremlin", 0.18, {y:-2, repeat:9, yoyo:true, ease:Sine.easeInOut}, "start");


    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#spaceWrapper", 2, {clipPath:"polygon(30% 0%, 30% 0%, 33% 75%)", ease:Sine.easeInOut}, "start+=0.5");
        masterTL.from("#copy", 1, {clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#copy", {opacity:0});
        gsap.set("#copy2", {opacity:1});
    }}, "start+=1");
    masterTL.from("#gremlin", 0.75, {y:100, ease:"back.out(1.4)"}, "start+=1");
    masterTL.to("#gremlin", 2, {x:10, ease:"bac1.inOut(1.4)"}, "start+=1.75");
    // masterTL.to("#gremlin", 0.16666666666, {y:-2, repeat:5, yoyo:true, ease:Sine.easeInOut}, "start+=1.75");
    masterTL.to("#gremlin", 4, {x:-10, y:5, ease:"back.inOut(1.4)"}, "start+=3.75");
    // masterTL.to("#gremlin", 0.16666666666, {y:-1, repeat:11, yoyo:true, ease:Sine.easeInOut}, "start+=2.75");
    masterTL.to("#gremlin", 2, {x:0, y:0, ease:"back.inOut(1.4)"}, "start+=7.75");
    // masterTL.to("#gremlin", 0.16666666666, {y:-1, repeat:5, yoyo:true, ease:Sine.easeInOut}, "start+=4.75");
    masterTL.add(skeletonTL, "start+=2");
    
    masterTL.add(monsterTL, "start+=2.5");
    
    console.log(masterTL.duration());
    

}

function animateSkeleton() {
    var tl = gsap.timeline({repeat:0});

    tl.add('start');
    tl.to("#skeleton", 4, {rotation:-30, y:5, ease:Power1.easeInOut}, "start");
    tl.to("#skeleton", 4, {rotation:0, y:0, ease:Power1.easeInOut}, "start+=4");

    return tl;
}

function animateMonster() {
    var tl = gsap.timeline({});

    tl.add('start');
    tl.from("#monsterWrapper", 2, {y:200, x:200, ease:Power1.easeOut}, "start");
    tl.fromTo("#arm1", 2, {rotation:-105}, {rotation:5, ease:Power1.easeOut}, "start");
    tl.fromTo("#arm2", 3, {rotation:-65}, {rotation:30, ease:Power2.easeOut}, "start");
    tl.to("#arm1", 1.5, {rotation:-75, ease:Power1.easeInOut}, "start+=2");
    tl.to("#monsterWrapper", 3, {y:10, x:10, ease:Power1.easeInOut}, "start+=2");
    tl.to("#arm2", 1, {rotation:0, ease:Sine.easeInOut}, "start+=3");
    tl.to("#eye1", 2, {y:-5, ease:Power1.easeInOut}, "start+=3");
    tl.to("#eye2", 2.05, {y:-5, ease:Power1.easeInOut}, "start+=3");
    tl.to("#arm1", 3.8, {rotation:0, ease:Power2.easeInOut}, "start+=3.5");
    tl.to("#arm2", 1.65, {rotation:10, yoyo:true, repeat:1, ease:Sine.easeInOut}, "start+=4");
    tl.to("#eye1", 1.5, {y:0, ease:Power1.easeInOut}, "start+=5.5");
    tl.to("#eye2", 1.55, {y:0, ease:Power1.easeInOut}, "start+=5.5");
    tl.to("#monsterWrapper", 2.3, {y:0, x:0, ease:Power1.easeInOut}, "start+=5");

    return tl;
}

function getMousePos() {
    document.querySelector("#mainExit").addEventListener("mousemove", function (e) {
        var xPos = e.clientX/50;
        var yPos = e.clientY/90;
        gsap.to("#eye1", 0.1, {y:yPos-8, x:xPos-4, ease:Sine.easeInOut});
        gsap.to("#eye2", 0.1, {y:yPos-8, x:xPos-4, ease:Sine.easeInOut});
        
    });
}

