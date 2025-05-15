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

    var now = new Date(); 
    var live = new Date("12/31/2023 00:00:00");

	var delta = Math.abs(live - now) / 1000;
	var days = Math.floor(delta / 86400)+1;

    if(days == 1){
        document.querySelector("#daysText").innerText = "dag";
    }

    if(live < now){
        console.log("deadline past");
        gsap.set("#counter", {display:"none"});
    }

    var split = new SplitText("#text1", {type: "words"});
    var split2 = new SplitText("#text2", {type: "words"});

    var number = {value:99},
    day1 = document.getElementById("day1"),
    day2 = document.getElementById("day2");

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#logoWrapper", 0.5, {scale:0, ease:Back.easeOOut}, "start")
    masterTL.from(split.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.2}, "start+=0.5");
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=1.7")
    masterTL.to(split.words, {opacity: 0, x:10, ease:Sine.easeOut, stagger: -0.05}, "start+=3.5");
    masterTL.to("#logoWrapper", 0.4, {width:946, ease:Sine.easeInOut}, "start+=4")
    masterTL.from("#border", 0.4, {opacity:0, ease:Power3.easeOut}, "start+=4")
    masterTL.from(split2.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.2});
    masterTL.from("#sticker", 0.3, {scale:0, rotation:360, ease:Back.easeOut})
    masterTL.from("#endText", 0.3, {opacity:0, ease:Sine.easeOut}, "+=0.3")
    masterTL.from("#counter", 1, {rotationX:-90, y:30, ease:Sine.easeInOut}, "+=0.3")
    masterTL.to(number, 2, {
        value:days, 
        ease:Sine.easeOut, 
        onUpdate:function() {
            if(number.value.toFixed(0) > 9){
                var digits = number.value.toFixed(0).toString().split('');
            }
            else{
                var digits = [0, number.value.toFixed(0)];
            }

            day1.innerHTML = digits[0];
            day2.innerHTML = digits[1];
        }
    });
 
}