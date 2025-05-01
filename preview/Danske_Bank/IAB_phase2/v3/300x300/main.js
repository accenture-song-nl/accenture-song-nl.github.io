window.onload = function () {
    init();
}

function init() {
   

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to(".cta", 0.3, {scale:1.05, transformOrigin:"50% 180px", ease: "back.out(1.7)"})
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to(".cta", 0.3, {scale:1, ease: "power1.out"})
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(clickTag, '_blank');
        masterTL.progress(1).pause();
    })

    getAnimation();
}

function getAnimation(){
    var splitMainCopy = new SplitText(".mainCopy", { type: "words,chars,lines" });
    console.log(splitMainCopy);
    
    var brandElementSpeed = 2

    masterTL = gsap.timeline({repeat:2});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.from(".squareBrandElement", brandElementSpeed/2, { opacity: 0, ease: Power3.easeOut })
    masterTL.add("start");
    masterTL.add("brandElementAnim", "start");
    
    masterTL.set(".whiteForeground", { right:0, left:'auto', ease: 'none'})
    masterTL.to(".whiteForeground", brandElementSpeed / 3, { width: 0, ease: Power3.easeIn })
    masterTL.set(".whiteForeground", { left: 0, right:"auto", ease: 'none'})
    masterTL.to(".whiteForeground", brandElementSpeed/3, { width: "100%", ease: 'none'})
    masterTL.set(".whiteForeground", { right:0, left:'auto', ease: 'none'})
    masterTL.to(".whiteForeground", brandElementSpeed / 3, { width: "39%", ease: Power3.easeOut })
    
    masterTL.add("brandElementMovement", "start");
    masterTL.to(".squareBrandElement", brandElementSpeed, { x:-106, ease: Power2.easeInOut }, "brandElementMovement")
    masterTL.to('.greyBackground', brandElementSpeed/1.5, { opacity: 0 }, "brandElementMovement");
    
    masterTL.add("bluePanelIn", "brandElementMovement");
    masterTL.from(".bluePanel", brandElementSpeed/2, { opacity: 0, ease: Power3.easeInOut }, "brandElementAnim")
    masterTL.from([".bluePanel"], brandElementSpeed, { x: 578, ease: Power3.easeInOut }, "brandElementAnim")
    masterTL.from([".addressInfo"], brandElementSpeed, { opacity:0, ease: Power3.easeInOut }, "brandElementAnim+=1")
    masterTL.from(".bg", brandElementSpeed, { scale: 1.4, x: 0, ease: Power3.easeOut }, "brandElementAnim")
    masterTL.from([splitMainCopy.lines, '.cta', '.tagline'], brandElementSpeed, { x:15, opacity:0, ease: Power3.easeOut, stagger:0.15 }, "brandElementAnim+="+brandElementSpeed/2)
    masterTL.to("#banner", 0.5, {}, 9.5);
}