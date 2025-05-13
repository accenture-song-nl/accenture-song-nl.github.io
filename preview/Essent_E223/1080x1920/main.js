window.onload = function () {
    init();
}

function init() {
   

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
    

    masterTL = gsap.timeline({repeat:0});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#bg", 1.5, {scale:1.2, ease:Sine.easeInOut}, "start");
    masterTL.from("#pinkBorder", 1.5, {scale:3.75, ease:Sine.easeInOut}, "start");
    masterTL.from("#quote", 0.5, {scale:0, x:-20, ease:Back.easeOut}, "start+=2");

    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=2.5");
    masterTL.to("#price", 2.5, { innerText:150, snap: {innerText:1}, onUpdate:function(){
        if(Number(this._targets[0].innerText) < 10){
            gsap.set("#price", {width:50});
        }
        else if (Number(this._targets[0].innerText) < 100){
            gsap.set("#price", {width:100});
        }
        else{
            gsap.set("#price", {width:132});
        }
        
    }, ease:Circ.easeInOut}, "start+=3");

    masterTL.from("#text2", 0.5, {opacity:0, y:50, ease:Sine.easeInOut}, "start+=6");
}