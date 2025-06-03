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

    gsap.set("#product1", {scale:0.83711340206, x:-18, y:29});
    gsap.set("#product2", {scale:0.74845360824, x:431, y:43});
    gsap.set("#product3", {scale:0.875, x:-117, y:0});
    gsap.set("#product4", {x:287, y:14});

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    
    masterTL.add("start");
    masterTL.from("#panelLeft", 0.5, {x:-500, ease:Power2.easeOut}, "start")
    masterTL.from("#product1", 0.5, {x:-600, ease:Sine.easeOut}, "start+=0.2")
    masterTL.from("#text1A", 0.5, {x:-300, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#product2", 0.5, {x:900, ease:Sine.easeOut}, "start+=0.7")
    masterTL.from("#text1B", 0.5, {x:900, ease:Sine.easeOut}, "start+=0.9")
    
    masterTL.add("frame2", "+=1");
    masterTL.from("#mainText1", 0.5, {x:-40, opacity:0, ease:Sine.easeOut}, "frame2")
    masterTL.from("#mainText2", 0.5, {x:40, opacity:0, ease:Sine.easeOut}, "frame2+=0.4")
    masterTL.from("#mainText3", 0.5, {x:-40, opacity:0, ease:Sine.easeOut}, "frame2+=0.8")
    
    masterTL.add("frame3", "+=1");
    masterTL.to("#mainText1", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame3")
    masterTL.to("#mainText2", 0.5, {x:20, opacity:0, ease:Sine.easeIn}, "frame3")
    masterTL.to("#mainText3", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame3")
    masterTL.to("#text1A", 0.5, {x:-900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#text1B", 0.5, {x:900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#product2", 0.5, {x:900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#product1", 0.5, {x:-900, ease:Sine.easeIn}, "frame3")
    masterTL.to("#panelLeft", 0.5, {x:-900, ease:Power2.easeIn}, "frame3")
    masterTL.from("#panelRight", 0.5, {x:1100, ease:Sine.easeOut}, "frame3+=0.5")
    masterTL.set("#product1", {scale:1, x:900, y:0}, "frame3+=0.5")
    masterTL.to("#product1", 0.5, {x:0, ease:Sine.easeOut}, "frame3+=0.7")
    masterTL.from("#product1Info", 0.5, {x:900, ease:Sine.easeOut}, "frame3+=1.4")
    masterTL.from("#product1Price", 0.5, {scale:0, ease:Power4.easeOut}, "frame3+=2.1")
    
    masterTL.add("frame4", "+=1");
    masterTL.to("#product1Info", 0.5, {x:900, ease:Sine.easeIn}, "frame4")
    masterTL.to("#product1Price", 0.5, {scale:0, ease:Power4.easeIn}, "frame4")
    masterTL.to("#product1", 0.5, {x:900, ease:Sine.easeIn}, "frame4+=0.5")
    masterTL.to("#panelRight", 0.5, {x:1100, ease:Sine.easeIn}, "frame4+=0.7")
    masterTL.to("#banner", 0.5, {background:"#008a96", ease:Sine.easeIn}, "frame4+=1")
    masterTL.from("#panelRight2", 0.5, {x:1100, ease:Sine.easeOut}, "frame4+=1.3")
    masterTL.set("#product2", {scale:1, x:900, y:0}, "frame4+=1.3")
    masterTL.to("#product2", 0.5, {x:0, ease:Sine.easeOut}, "frame4+=1.5")
    masterTL.from("#product2Info", 0.5, {x:900, ease:Sine.easeOut}, "frame4+=2.2")
    masterTL.from("#product2Price", 0.5, {scale:0, ease:Power4.easeOut}, "frame4+=2.9")

    masterTL.add("frame5", "+=1");
    masterTL.to("#product2Info", 0.5, {x:900, ease:Sine.easeIn}, "frame5")
    masterTL.to("#product2Price", 0.5, {scale:0, ease:Power4.easeIn}, "frame5")
    masterTL.to("#product2", 0.5, {x:900, ease:Sine.easeIn}, "frame5+=0.5")
    masterTL.to("#panelRight2", 0.5, {x:1100, ease:Sine.easeIn}, "frame5+=0.7")
    masterTL.to("#banner", 0.5, {background:"#b0d784", ease:Sine.easeIn}, "frame5+=1")

    masterTL.add("frame6");
    masterTL.from("#panelLeft2", 0.5, {x:-500, ease:Power2.easeOut}, "frame6")
    masterTL.from("#product3", 0.5, {x:-600, ease:Sine.easeOut}, "frame6+=0.2")
    masterTL.from("#text2A", 0.5, {x:-300, ease:Sine.easeOut}, "frame6+=0.3")
    masterTL.from("#product4", 0.5, {x:900, ease:Sine.easeOut}, "frame6+=0.7")
    masterTL.from("#text2B", 0.5, {x:900, ease:Sine.easeOut}, "frame6+=0.9")

    masterTL.add("frame7", "+=1");
    masterTL.to("#mainText1", 0.5, {x:0, opacity:1, ease:Sine.easeOut}, "frame7")
    masterTL.to("#mainText2", 0.5, {x:0, opacity:1, ease:Sine.easeOut}, "frame7+=0.4")
    masterTL.to("#mainText3", 0.5, {x:0, opacity:1, ease:Sine.easeOut}, "frame7+=0.8")

    masterTL.add("frame8", "+=1");
    masterTL.to("#mainText1", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame8")
    masterTL.to("#mainText2", 0.5, {x:20, opacity:0, ease:Sine.easeIn}, "frame8")
    masterTL.to("#mainText3", 0.5, {x:-20, opacity:0, ease:Sine.easeIn}, "frame8")
    masterTL.to("#text2A", 0.5, {x:-900, ease:Sine.easeIn}, "frame8")
    masterTL.to("#text2B", 0.5, {x:900, ease:Sine.easeIn}, "frame8")
    masterTL.to("#product3", 0.5, {x:-900, ease:Sine.easeIn}, "frame8")
    masterTL.to("#product4", 0.5, {x:900, ease:Sine.easeIn}, "frame8")
    masterTL.to("#panelLeft2", 0.5, {x:-900, ease:Power2.easeIn}, "frame8")
    masterTL.from("#panelRight3", 0.5, {x:1100, ease:Sine.easeOut}, "frame8+=0.5")
    masterTL.set("#product3", {scale:1, x:900, y:0}, "frame8+=0.5")
    masterTL.to("#product3", 0.5, {x:0, ease:Sine.easeOut}, "frame8+=0.7")
    masterTL.from("#product3Info", 0.5, {x:900, ease:Sine.easeOut}, "frame8+=1.4")
    masterTL.from("#product3Price", 0.5, {scale:0, ease:Power4.easeOut}, "frame8+=2.1")

    masterTL.add("frame9", "+=1");
    masterTL.to("#product3Info", 0.5, {x:900, ease:Sine.easeIn}, "frame9")
    masterTL.to("#product3Price", 0.5, {scale:0, ease:Power4.easeIn}, "frame9")
    masterTL.to("#product3", 0.5, {x:900, ease:Sine.easeIn}, "frame9+=0.5")
    masterTL.to("#panelRight3", 0.5, {x:1100, ease:Sine.easeIn}, "frame9+=0.7")
    masterTL.to("#banner", 0.5, {background:"#7cbc32", ease:Sine.easeIn}, "frame9+=1")
    masterTL.from("#panelRight4", 0.5, {x:1100, ease:Sine.easeOut}, "frame9+=1.3")
    masterTL.set("#product4", {scale:1, x:900, y:0}, "frame9+=1.3")
    masterTL.to("#product4", 0.5, {x:0, ease:Sine.easeOut}, "frame9+=1.5")
    masterTL.from("#product4Info", 0.5, {x:900, ease:Sine.easeOut}, "frame9+=2.2")
    masterTL.from("#product4Price", 0.5, {scale:0, ease:Power4.easeOut}, "frame9+=2.9")

    masterTL.add("frame10", "+=1");
    masterTL.to("#product4Info", 0.5, {x:900, ease:Sine.easeIn}, "frame10")
    masterTL.to("#product4Price", 0.5, {scale:0, ease:Power4.easeIn}, "frame10")
    masterTL.to("#product4", 0.5, {x:900, ease:Sine.easeIn}, "frame10+=0.5")
    masterTL.to("#panelRight4", 0.5, {x:1100, ease:Sine.easeIn}, "frame10+=0.7")
    masterTL.to("#banner", 0.5, {background:"#b0d784", ease:Sine.easeIn}, "frame10+=1")
    masterTL.set("#product3", {scale:0.875, x:-900, y:0});
    masterTL.set("#product4", {x:900, y:14}); 
    masterTL.to("#panelLeft2", 0.5, {x:0, ease:Power2.easeOut}, "frame10+=1.5")
    masterTL.to("#product3", 0.5, {x:-188, ease:Sine.easeOut}, "frame10+=1.7")
    masterTL.to("#product4", 0.5, {x:330, ease:Sine.easeOut}, "frame10+=2.2")

    masterTL.add("frame11", "+=0");
    masterTL.from("#mainTextEnd1", 0.5, {x:-40, opacity:0, ease:Sine.easeOut}, "frame11")
    masterTL.from("#mainTextEnd2", 0.5, {x:40, opacity:0, ease:Sine.easeOut}, "frame11+=0.4")
    masterTL.from("#mainTextEnd3", 0.5, {x:-40, opacity:0, ease:Sine.easeOut}, "frame11+=0.8")
    
    masterTL.add("endScreen");
    masterTL.from("#cta", 1, {scale:0, ease:Back.easeOut}, "endScreen")
    
    
    masterTL.duration(30).play();    
    
}