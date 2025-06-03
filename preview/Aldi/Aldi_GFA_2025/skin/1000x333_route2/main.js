window.onload = function () {
    init();
}

var getUriParams = function() {
        var query_string = {}, query = window.location.search.substring(1), parmsArray = query.split('&');
        if(parmsArray.length <= 0) return query_string;
        for(var i = 0; i < parmsArray.length; i++) {
        var pair = parmsArray[i].split('=');
        var val = decodeURIComponent(pair[1]);
        if (val != '' && pair[0] != '') query_string[pair[0]] = val;
        }
        return query_string;
}();


function init() {

    document.getElementById('mainExit').setAttribute('href', getUriParams.clicktag);

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.1, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true, repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    
    masterTL.add("start");
    masterTL.from("#panelLeft", 0.5, {x:-500, ease:Power2.easeOut}, "start")
    masterTL.from("#product1", 0.5, {x:-400, ease:Sine.easeOut}, "start+=0.2")
    masterTL.from("#text1A", 0.5, {x:-500, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#product1Info", 0.5, {x:-500, ease:Sine.easeOut}, "start+=0.4")
    masterTL.from(["#product1PriceBg", "#product1PriceTopText"], 0.5, {scale:0, ease:Back.easeOut}, "start+=1.5")
    masterTL.from("#product1PriceTop", 1, {y:-100, ease:Power2.easeOut}, "start+=2")
    masterTL.from("#product1Price", 0.5, {scale:0, ease:Back.easeOut}, "start+=2.8")
    masterTL.from("#text1B", 0.5, {x:300, ease:Sine.easeOut}, "start+=3")
    

    masterTL.add("frame2", "+=1.5");
    masterTL.to("#text1A", 0.5, {x:-500, ease:Sine.easeIn}, "frame2")
    masterTL.to("#text1B", 0.5, {x:500, ease:Sine.easeIn}, "frame2")
    masterTL.to("#product1Info", 0.5, {x:-500, ease:Sine.easeIn}, "frame2")
    masterTL.to(["#product1Price", "#product1PriceBg", "#product1PriceTop", "#product1PriceTopText"], 0.5, {x:500, ease:Sine.easeIn}, "frame2")
    masterTL.to("#product1", 0.5, {x:-600, ease:Sine.easeIn}, "frame2")
    masterTL.to("#panelLeft", 0.5, {x:-500, ease:Power2.easeIn}, "frame2")
    masterTL.to("#banner", 0.5, {background:"#fdd5a5", ease:Sine.easeInOut}, "frame2")

    masterTL.add("frame3");
    masterTL.from("#panelLeft2", 0.5, {x:-500, ease:Power2.easeOut}, "frame3")
    masterTL.from("#product2", 0.5, {x:-450, ease:Sine.easeOut}, "frame3+=0.2")
    masterTL.from("#text2A", 0.5, {x:-500, ease:Sine.easeOut}, "frame3+=0.3")
    masterTL.from("#product2Info", 0.5, {x:-500, ease:Sine.easeOut}, "frame3+=0.4")
    masterTL.from(["#product2PriceBg", "#product2PriceTopText"], 0.5, {scale:0, ease:Back.easeOut}, "frame3+=1.5")
    masterTL.from("#product2PriceTop", 1, {y:-100, ease:Power2.easeOut}, "frame3+=2")
    masterTL.from("#product2Price", 0.5, {scale:0, ease:Back.easeOut}, "frame3+=2.8")
    masterTL.from("#text2B", 0.5, {x:300, ease:Sine.easeOut}, "frame3+=3")   
    
    masterTL.add("endScreen", "+=1.5");
     masterTL.to("#text2A", 0.5, {x:-500, ease:Sine.easeIn}, "endScreen")
    masterTL.to("#text2B", 0.5, {x:500, ease:Sine.easeIn}, "endScreen")
    masterTL.to("#product2", 0.5, {x:-25, y:-10, ease:Sine.easeInOut}, "endScreen+=0.3")
    masterTL.to("#product2Info", 0.5, {x:-100, ease:Sine.easeInOut}, "endScreen+=0.3")
    masterTL.to(["#product2Price", "#product2PriceBg", "#product2PriceTop", "#product2PriceTopText"], 0.5, {x:50, ease:Sine.easeInOut}, "endScreen+=0.3")
    masterTL.from("#mainText1", 0.5, {x:-20, opacity:0, ease:Sine.easeOut}, "endScreen+=0.4")
    masterTL.from("#mainText2", 0.5, {x:20, opacity:0, ease:Sine.easeOut}, "endScreen+=0.8")
    masterTL.from("#mainText3", 0.5, {x:-20, opacity:0, ease:Sine.easeOut}, "endScreen+=1.2")
    masterTL.from("#cta", 1, {scale:0, ease:Back.easeOut}, "endScreen+=1.5")
    
    masterTL.from("#banner", 1, {}, 14);
    
    
    masterTL.play();

    console.log(masterTL.duration());
    
    
}