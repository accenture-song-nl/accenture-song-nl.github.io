window.onload = init;

function init(id){

  document.querySelector("#page").addEventListener("mouseover", function(e){

    getMousePos();
    
    gsap.to("#cta", 0.5, {opacity:0, ease: "power1.inOut"});
    gsap.to("#ctaOver", 0.5, {opacity:1, ease: "power1.inOut"});
  });

  document.querySelector("#page").addEventListener("mouseout", function(){
    gsap.to("#cta", 0.5, {opacity:1, ease: "power1.inOut"});
    gsap.to("#ctaOver", 0.5, {opacity:0, ease: "power1.inOut"});
  });

}

function getMousePos() {
    document.querySelector("#page").addEventListener("mousemove", function (e) {
        var xPos = e.clientX/250;
        var yPos = e.clientY/25;
        console.log(xPos, yPos);
        
        gsap.to("#phone", 0.1, {y:yPos, rotation:xPos-4, ease:Sine.easeInOut});
        
    });
}