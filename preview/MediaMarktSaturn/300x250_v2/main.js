window.onload = function () {
    init();
}

function init(clickTAGvalue) {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {opacity:0.8, ease:Sine.easeInOut});
            gsap.to("#cta", 0.1, {x:5, repeat:3, yoyo:true, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {opacity:1, ease:Sine.easeInOut});

        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1).pause();    
    })

    document.getElementById('mainExit').setAttribute('href', getUriParams.clicktag);

    getAnimation();
}

function getAnimation(){
    
    
    masterTL = new TimelineLite({paused:true, repeat:2});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete: 
        function(){
            document.querySelector("#loaderWrapper").style.display = "none";
        }
    })

    masterTL.add("start");
    masterTL.from("#campaign", 0.5, {opacity:0, ease:Power0.easeNone}, "start")
    masterTL.from("#logo", 1, {y:70, ease:Sine.easeInOut}, "start+=0.5")
    masterTL.from("#campaign", 1, {y:70, ease:Sine.easeInOut}, "start+=0.7")
    masterTL.from("#circle1", 1, {scale:0, ease:Power3.easeOut}, "start+=1")
    masterTL.from("#circle2", 1, {scale:0, ease:Back.easeOut}, "start+=1.2")
    masterTL.from("#product", 0.5, {x:-300, ease:Sine.easeOut}, "start+=1.4")
    masterTL.from("#price", 0.5, {x:300, ease:Sine.easeOut}, "start+=1.9")
    masterTL.from("#cta", 0.5, {y:250, ease:Sine.easeOut}, "start+=2.3")

    masterTL.to("#cta", 0.1, {x:5, repeat:3, yoyo:true, ease:Sine.easeInOut}, "start+=3")
    masterTL.to("#cta", 0.1, {x:5, repeat:3, yoyo:true, ease:Sine.easeInOut}, "start+=4")

    masterTL.to("#banner", 0.5, {}, "start+=4.5")
    
    console.log(masterTL.duration())
    

    masterTL.play();
}

var getUriParams = function() {
        var query_string = {}
        var query = window.location.search.substring(1);
        var parmsArray = query.split('&');
        if (parmsArray.length <= 0)
            return query_string;
        for (var i = 0; i < parmsArray.length; i++) {
            var pair = parmsArray[i].split('=');
            var val = decodeURIComponent(pair[1]);
            if (val != '' && pair[0] != '') query_string[pair[0]] = val;
        }
        return query_string;
    }
    ();
