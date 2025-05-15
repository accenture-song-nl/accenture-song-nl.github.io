window.onload = function () {
    init();
}


function init() {

    gsap.registerPlugin(SplitText);

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {background:"#d4512b", ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {background:"#ea650d", ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(window.clickTag);
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    var split = new SplitText("#text1", {type: "words"});
    var split2 = new SplitText("#text2", {type: "words"});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#logoWrapper", 0.5, {scale:0, ease:Back.easeOOut}, "start")
    masterTL.from(split.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.2}, "start+=0.5");
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=1.7")
    masterTL.to(split.words, {opacity: 0, x:10, ease:Sine.easeOut, stagger: -0.05}, "start+=3.5");
    masterTL.to("#logoWrapper", 0.4, {height:586, y:5, ease:Sine.easeInOut}, "start+=4")
    masterTL.from("#border", 0.4, {opacity:0, ease:Power3.easeOut}, "start+=4")
    masterTL.from(split2.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.2});
    masterTL.from("#endText", 0.3, {opacity:0, ease:Sine.easeOut}, "+=0.3")
 
}