var t=function(t){var e={w:0,h:0};if(t.naturalWidth)e.w=t.naturalWidth,e.h=t.naturalHeight;else{var r=new Image,i=t.getAttribute("src")||"";r.src=i,e.w=r.width,e.h=r.height}return e},e=function(e){if(e&&void 0!==e.getAttribute("usemap")){var r=Number.parseInt;e.addEventListener("load",(function(){var i=r(e.getAttribute("width")||"0"),a=r(e.getAttribute("height")||"0");if(!i||!a){var n=t(e);i||(i=n.w),a||(a=n.h)}var o=e.clientWidth/100,u=e.clientHeight/100,c=e.getAttribute("usemap"),s="string"==typeof c?c.replace("#",""):"";document.querySelectorAll('map[name="'+s+'"] area').forEach((function(t){var e=t.dataset;e.coords||(e.coords=t.getAttribute("coords")||"");for(var n=e.coords.split(",").map((function(t){return r(t)})),c=new Array(n.length),s=0;s<c.length;++s)c[s]=s%2==0?n[s]/i*100*o:n[s]/a*100*u;t.setAttribute("coords",c.toString())}))})),e.setAttribute("src",e.getAttribute("src")||"")}};export{t as getImageNaturalSize,e as responsiveImgMapArea};