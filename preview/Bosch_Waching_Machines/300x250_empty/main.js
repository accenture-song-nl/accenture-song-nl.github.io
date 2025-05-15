window.onload = function () {
    init();
}

function init() {
    // 0 or "" will not show the price
    var price = 0;

    if(price == 0 | price == ""){
        gsap.set("#price", {display:"none"});
    }
    else{
        document.querySelector("#price").innerHTML = price.toFixed(2).replace(".", ",") + "<span id='priceSign'>€<span>";
    }

   

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            
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

    var split1 = new SplitText("#text1", {type: "lines"});
    var split2 = new SplitText("#text2", {type: "lines"});
    var split3 = new SplitText("#usp", {type: "lines"});

    masterTL = gsap.timeline({repeat:0});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from(split1.lines, 0.5, {opacity:0, x:-20, stagger:0.5, ease:Sine.easeOut}, "start");
    masterTL.to(split1.lines, 0.5, {opacity:0, x:20, stagger:0.1, ease:Sine.easeIn}, "+=1");
    masterTL.from(split2.lines, 0.5, {opacity:0, x:-20, stagger:0.5, ease:Sine.easeOut});
    masterTL.from("#product", 1, {x:350, ease:Sine.easeOut}, "-=0.5");
    masterTL.from(split3.lines, 0.5, {opacity:0, x:-20, stagger:0.5, ease:Sine.easeOut});
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut});
    masterTL.from("#price", 0.5, {opacity:0, x:-20, ease:Sine.easeOut});
    masterTL.from("#badgeEnergy", 0.5, {y:20, opacity:0, ease:Sine.easeOut}, "-=0.1");
    masterTL.from("#badge", 0.5, {scale:0, rotation:-360, ease:Back.easeOut});
}