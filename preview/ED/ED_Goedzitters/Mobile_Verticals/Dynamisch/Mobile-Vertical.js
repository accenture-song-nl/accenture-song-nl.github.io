function exitClick() {
  screenad.click();
}

function addEventListener() {
  if (document.getElementById("click-area")) {
    document.getElementById("click-area").addEventListener("click", exitClick);
  }
}

function onInit() {
  addEventListener();

  masterTL = gsap.timeline({paused:true});
  masterTL.add('start');
  masterTL.from('#bg', 0.5, {scale:1.2, transformOrigin:"50% 50%", ease:Sine.easeInOut}, 'start');
  masterTL.from('#textA', 0.5, {opacity:0, x:-50, ease:Sine.easeInOut}, 'start+=0.5');
  masterTL.from('#textB', 0.5, {scale:0, ease:Back.easeOut}, 'start+=1');
  
  masterTL.from('#dynamisch', 1, {scale:0, y:250, x:68, rotation: -10, ease:Sine.easeInOut}, 'start+=1');
  masterTL.from('#dynamisch', 0.5, {opacity:0, ease:Sine.easeInOut}, 'start+=1');
  
  masterTL.from('#variable', 1.2, {scale:0, y:240, x:90, rotation: 60, ease:Sine.easeInOut}, 'start+=1');
  masterTL.from('#variable', 0.5, {opacity:0, ease:Sine.easeInOut}, 'start+=1');
  
  masterTL.from('#vast', 1.4, {scale:0, y:250, x:90, rotation: 15, ease:Sine.easeInOut}, 'start+=1');
  masterTL.from('#vast', 0.5, {opacity:0, ease:Sine.easeInOut}, 'start+=1');
  
  masterTL.from('#textC', 0.5, {opacity:0, x:-50, ease:Sine.easeInOut}, 'start+=2.5');
  
  masterTL.to(['#vast', '#variable', '#dynamisch'], 0.5, {opacity:0, ease:Sine.easeInOut}, 'start+=3');
  
  masterTL.from('#endScreen', 0.5, {opacity:0, ease:Sine.easeInOut}, "+=2");
  masterTL.from('#logoEnd', 0.5, {opacity:0, ease:Sine.easeInOut});
  masterTL.from('#cta', 0.5, {scale:0, ease:Back.easeOut});
}

screenad.onScroll = function() {
  if(screenad.hasVisibility){
    if(masterTL.progress() == 0){
      masterTL.play();
    }
  }
  else{
    masterTL.progress(0).pause();
  }
}



var siteObject = new Object();

screenad.onPreloadComplete = function () {
  var getDomain = function () {
    var d = "",
      url;
    if (
      typeof window.location.ancestorOrigins !== "undefined" &&
      window.location.ancestorOrigins.length > 0
    ) {
      var iframeParents = null;
      iframeParents = window.location.ancestorOrigins;
      if (iframeParents && iframeParents.length > 0) {
        url = iframeParents[iframeParents.length - 1];
      }
    } else if (
      window.location !== window.parent.location &&
      document.referrer
    ) {
      url = document.referrer;
    } else {
      url = document.location.href;
    }
    try {
      if (!url || url.indexOf("http") !== 0) {
        url = "#";
      }
      var el = document.createElement("a");
      el.href = url;
      d = url /* el.hostname*/;
    } catch (e) {}
    return d;
  };

  var getDomainStr = "(" + getDomain.toString() + ")()";
  if (
    screenad.vars.page !== undefined &&
    Boolean(screenad.vars.previewer2) === true
  ) {
    getSiteSpecs(screenad.vars.page);
  } else {
    screenad.executeScript(getDomainStr, getSiteSpecs);
  }
};

/** Receives current location and loads site-specs data */
function getSiteSpecs(location) {
  var xobj = new XMLHttpRequest();
  if (typeof xobj.overrideMimeType === "function") {
    xobj.overrideMimeType("application/json");
  }
  xobj.open(
    "GET",
    "//ade.weborama.nl/api/v2/specs?url=" +
      location.replaceAll("#", "") +
      "&formats=mobile-portrait",
    true
  );
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4 && xobj.status === 200) {
      var json =
        xobj.responseText === "0" || xobj.responseText === 0
          ? undefined
          : JSON.parse(xobj.responseText);
      onSucces(json);
    }
  };
  xobj.onerror = function () {
    onSucces(undefined);
  };
  xobj.send(null);
}
/** Parses site-specs data */
function onSucces(json) {
  if (json !== undefined) {
    for (var key in json) {
      siteObject[key] = json[key];
    }
  }
  setSizes();
  onInit();
}

function setSizes() {
  var content = document.getElementById("banner");

  if (Boolean(Number(siteObject.fixed_size)) === true) {
    width = screenad.originalWidth;
    height = screenad.originalHeight;
  } else {
    width = (screenad.browserwidth * 94) / 100;
    height = (width * 177.77) / 100;
    if (width > 420) {
      width = 420;
      height = 747;
    }
  }
  content.style.width = width;
  content.style.height = height - 1;

  screenad.setSize(width, height);
  screenad.setAlignment("center", "banner");
  screenad.executeScript(
    "document.getElementById('weborama_pushdown_div').style.height = '" +
      height +
      "px'"
  );
  screenad.resize(screenad.bannerwidth, height, "banner");
  screenad.position();
}

screenad.addEventListener("resize", () => {
  setSizes();
});
