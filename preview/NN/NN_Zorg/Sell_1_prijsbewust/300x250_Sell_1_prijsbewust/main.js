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

    var barW = document.querySelector("#dragBar").offsetWidth;

    setupDrag();

    var split = new SplitText("#text1", {type: "words"});
    var split2 = new SplitText("#text2", {type: "words"});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#logoWrapper", 0.5, {scale:0, ease:Back.easeOOut}, "start")
    masterTL.from(split.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.2}, "start+=0.5");
    // masterTL.from("#logo", 0.5, {opacity:0, ease:Back.easeOut}, "start+=1.5")
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=1.7")
    masterTL.to(split.words, {opacity: 0, x:10, ease:Sine.easeOut, stagger: -0.05}, "start+=3.5");
    masterTL.to("#logoWrapper", 0.4, {height:248, ease:Sine.easeInOut}, "start+=4")
    masterTL.from("#border", 0.4, {opacity:0, ease:Power3.easeOut}, "start+=4")
    masterTL.from(split2.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.2});
    masterTL.from("#dragWrapper", 0.5, {x:-30, ease:Sine.easeOut});
    masterTL.to("#dragWrapper", 0.5, {opacity:1, ease:Sine.easeOut}, "-=0.5");
    masterTL.add("animateDrag")
    masterTL.to(["#dot", "#priceBottom"], 0.5, {x:barW/2, ease:Sine.easeInOut}, "animateDrag");
    masterTL.to("#bar", 0.5, {width:barW/2, ease:Sine.easeInOut, onStart:animateNumbers}, "animateDrag");

}

function setupDrag(){
    window.pricePos = "middle";
    window.oldPricePos = "middle";

    Draggable.create("#dot", {
        bounds:"#dragBar",
        onDragEnd: dragEnded,
        onDrag: drag,
        lockAxis:"x"
    });
}

function dragEnded(){

    var barW = document.querySelector("#dragBar").offsetWidth;
    var barDragged = (this.x/barW)*100;

    if(barDragged < 33){
        gsap.to("#dot", 0.5, {x:5});
        gsap.to("#priceBottom", 0.5, {x:5});
        gsap.to("#bar", 0.5, {width:0+"px"});
    }
    else if(barDragged >= 33 && barDragged <= 66){
        gsap.to("#dot", 0.5, {x:barW/2});
        gsap.to("#priceBottom", 0.5, {x:barW/2});
        gsap.to("#bar", 0.5, {width:50+"%"});
    }
    else{
        gsap.to("#dot", 0.5, {x:(barW-5)});
        gsap.to("#priceBottom", 0.5, {x:(barW-5)});
        gsap.to("#bar", 0.5, {width:100+"%"});
    }    
}

function drag(){

    window.oldPricePos =window.pricePos;

    var barW = document.querySelector("#dragBar").offsetWidth;
    var barDragged = (this.x/barW)*100;

    gsap.set("#bar", {width:this.x+"px"});
    gsap.set("#priceBottom", {x:this.x});

    if(barDragged < 33){
        window.pricePos = "start";
    }
    else if(barDragged >= 33 && barDragged <= 66){
        window.pricePos = "middle";
    }
    else{
        window.pricePos = "end";
    } 

    if(window.oldPricePos != window.pricePos){
        animateNumbers()
    }

}

function animateNumbers(){
    
    var priceDiv = document.querySelector("#price");
    var price = {value:priceDiv.innerText.replace('€', '').toString().replace(",", ".")};
    
    var bottomPriceDiv = document.querySelector("#priceBottom");
    var priceBottom = {value:priceDiv.innerText.replace('€', '').replace(',-', '')};
    

    if(window.pricePos == "start"){
        gsap.to(price, 0.5, {value:140.50, ease:Sine.easeOut, onUpdate:function() {
            priceDiv.innerHTML = "€"+price.value.toFixed(2).toString().replace(".", ",");
        }});
        gsap.to(priceBottom, 0.5, {value:385, ease:Sine.easeOut, onUpdate:function() {
            bottomPriceDiv.innerHTML = "€"+Math.floor(priceBottom.value)+",-";
        }});
        
    }
    else if(window.pricePos == "middle"){
        gsap.to(price, 0.5, {value:134.50, ease:Sine.easeOut, onUpdate:function() {
            priceDiv.innerHTML = "€"+price.value.toFixed(2).toString().replace(".", ",");
        }});
        gsap.to(priceBottom, 0.5, {value:585, ease:Sine.easeOut, onUpdate:function() {
            bottomPriceDiv.innerHTML = "€"+Math.floor(priceBottom.value)+",-";
        }});
        
    }
    else{
        gsap.to(price, 0.5, {value:125.50, ease:Sine.easeOut, onUpdate:function() {
            priceDiv.innerHTML = "€"+price.value.toFixed(2).toString().replace(".", ",");
        }});
        gsap.to(priceBottom, 0.5, {value:885, ease:Sine.easeOut, onUpdate:function() {
            bottomPriceDiv.innerHTML = "€"+Math.floor(priceBottom.value)+",-";
        }});
    } 
}