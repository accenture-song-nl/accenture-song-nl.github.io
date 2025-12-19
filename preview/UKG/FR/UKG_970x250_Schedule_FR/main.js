window.onload = function () {
    init();
}

function loadLocalDynamic() {

    if(localDynamicData.campaignName == "DE"){
        console.log("Germany, payrollText font size is smaller with js"); 
        document.querySelector("#payrollTaskText").style.fontSize = "27px";
        document.querySelector("#payrollTaskText").style.top = "81px";
    }

    if(localDynamicData.campaignName == "IT"){
        console.log("Italy, headcountText font size is smaller with js"); 
        document.querySelector("#headcountText").style.fontSize = "17px";
        document.querySelector("#headcountText").style.width = "180px";
    }

    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerH = document.querySelector("#banner").offsetHeight;
    var size = bannerW+"x"+bannerH;

    document.querySelector('#bg').src = localDynamicData.bg;
    document.querySelector('#logo').src = localDynamicData.logo;

    document.querySelector('#text1').innerHTML = localDynamicData.text1[size];
    document.querySelector('#tagline').innerHTML = localDynamicData.tagline;
    document.querySelector('#ctaText').innerHTML = localDynamicData.ctaText;
    
    document.querySelector('#payrollText').innerHTML = localDynamicData.lineText;
    document.querySelector('#payrollTaskWord').innerHTML = localDynamicData.lineTaskWord;
    document.querySelector('#payrollTaskTotal').innerHTML = localDynamicData.lineTaskTotal[size];
    document.querySelector('#headcountText').innerHTML = localDynamicData.barsText;

    var retentionText = localDynamicData.circleText.replace("<BR>", " ");
    document.querySelector('#retentionText').innerHTML = retentionText;

    var ani1 = localDynamicData.animation1;
    var ani2 = localDynamicData.animation2;
    var ani3 = localDynamicData.animation3;

    getAnimation(ani1, ani2, ani3);
}

function init() {

    loadLocalDynamic();

    var arrowTL = gsap.timeline({});
    arrowTL.to("#arrow", 0.2, {x:10, ease:Power2.easeInOut});
    arrowTL.to("#arrow", 0.0000001, {x:-10, ease:Power2.easeInOut});
    arrowTL.to("#arrow", 0.2, {x:0, ease:Power2.easeInOut});

    document.querySelector("#mainExit").addEventListener("mouseover", function () {    
        if (masterTL.progress() > 0.16) {
           gsap.to("#cta", 0.3, {scale:1.05, ease:Power2.easeInOut});
              arrowTL.play(0);
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() > 0.16){
            gsap.to("#cta", 0.3, {scale:1, ease:Power2.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(clickTag, '_blank');
        masterTL.progress(1).pause();
    })
}


function getAnimation(ani1, ani2, ani3){

    var introTL = animateIntro();
    var payrollTL = animatePayroll(ani3);
    var headcountTL = animateHeadcount(ani3);
    var retentionTL = animateRetention(ani3);

    masterTL = gsap.timeline({repeat:0, paused:true});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.add(introTL, "start+=1");

    for (var i = 1; i < 4; i++) {        
        if(eval("ani"+i) === "circle"){
            masterTL.add(retentionTL);
        }
        else if(eval("ani"+i) === "line"){
            masterTL.add(payrollTL);
        }
        else{
            masterTL.add(headcountTL);
        }
    }

    masterTL.play(0).duration(15);

}

function animateIntro() {
    var tl = gsap.timeline({repeat:0});

    var taglineSplit = new SplitText("#tagline", {type: "lines"});
    var text1Split = new SplitText("#text1", {type: "lines"});

    tl.add('start');
    tl.to("#introPanel", 1, {height:32, ease:Power2.easeInOut}, "start");
    tl.to("#logo", 1, {scale:0.4, ease:Power2.easeInOut}, "start");
    tl.from(taglineSplit.lines, 0.5, {x:-100, stagger:0.2, ease:Sine.easeOut}, "start+=1");
    tl.from(text1Split.lines, 0.5, {y:10, opacity:0, stagger:0.2, ease:Sine.easeOut}, "start+=1");
    tl.from("#cta", 0.5, {y:100, ease:Power2.easeOut}, "start+=1");
    tl.to("#bg", 0.75, {y:-250, ease:Power3.easeIn}, "start+=3");

    return tl;
}

function animatePayroll(ani3) {
    var tl = gsap.timeline({repeat:0});

    tl.add('start');
    tl.from("#payrollWrapper", 1, {y:250, ease:Power3.easeOut}, "start");
    tl.from("#payrollLine", 1, {width:0, ease:Power2.easeInOut}, "start+=0.8");
    tl.from("#payrollTaskNr", 1,{textContent: 0, ease:Power2.easeInOut, snap: { textContent: 1 }, stagger: {
        each: 1.0,
        onUpdate: function() {
            this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
        }
    }}, "start+=0.8");
    tl.from("#payrollBar", 0.7, {width:0}, "start+=1.1");
    if(ani3 != "line"){
        tl.to("#payrollWrapper", 1, {y:-250, ease:Power3.easeIn}, "start+=3");
    }

    return tl;
}

function animateHeadcount(ani3) {
    
    var tl = gsap.timeline({repeat:0});

    var allBars = document.querySelectorAll(".bar");
    var allLines = document.querySelectorAll(".line");

    tl.add('start');
    tl.from("#headcountWrapper", 1, {y:250, ease:Power3.easeOut}, "start");
    tl.from(allBars, 1, {height:0, stagger:0.1, ease:Power3.easeOut}, "start+=0.5");
    tl.from(allLines, 1, {height:0, stagger:0.08, ease:Power3.easeOut}, "start+=1");
    if(ani3 != "bars"){
        tl.to("#headcountWrapper", 1, {y:-250, ease:Power3.easeIn}, "start+=3");
    }

    return tl;
}

function animateRetention(ani3) {

    var tl = gsap.timeline({repeat:0});    

    tl.add('start');
    tl.from("#retentionWrapper", 1, {y:250, ease:Power3.easeOut}, "start");
    tl.from("#retentionSVG", 0.4, {scale:0, ease:Power2.easeOut}, "start+=0.6");
    tl.from("#retentionNr", 0.4, {scale:0, ease:Power2.easeOut}, "start+=0.7");
    tl.fromTo("#retentionLine", 1,{drawSVG: 0}, {drawSVG: "91%", ease:Power2.easeInOut}, "start+=1");
    tl.from("#retentionNr span", 1,{textContent: 0, ease:Power2.easeInOut, snap: { textContent: 1 }, stagger: {
        each: 1.0,
        onUpdate: function() {
            this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
        }
    }}, "start+=1");
    
    if(ani3 != "circle"){
        tl.to("#retentionWrapper", 1, {y:-250, ease:Power3.easeIn}, "start+=3");
    }
    

    return tl;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

