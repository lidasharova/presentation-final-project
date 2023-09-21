(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const h of r)if(h.type==="childList")for(const c of h.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const h={};return r.integrity&&(h.integrity=r.integrity),r.referrerPolicy&&(h.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?h.credentials="include":r.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(r){if(r.ep)return;r.ep=!0;const h=e(r);fetch(r.href,h)}})();/*!
* reveal.js 4.5.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
*/const It=(f,t)=>{for(let e in t)f[e]=t[e];return f},D=(f,t)=>Array.from(f.querySelectorAll(t)),ne=(f,t,e)=>{e?f.classList.add(t):f.classList.remove(t)},zt=f=>{if(typeof f=="string"){if(f==="null")return null;if(f==="true")return!0;if(f==="false")return!1;if(f.match(/^-?[\d\.]+$/))return parseFloat(f)}return f},Lt=(f,t)=>{f.style.transform=t},Vt=(f,t)=>{let e=f.matches||f.matchesSelector||f.msMatchesSelector;return!(!e||!e.call(f,t))},st=(f,t)=>{if(typeof f.closest=="function")return f.closest(t);for(;f;){if(Vt(f,t))return f;f=f.parentNode}return null},cn=(f,t,e,s="")=>{let r=f.querySelectorAll("."+e);for(let c=0;c<r.length;c++){let p=r[c];if(p.parentNode===f)return p}let h=document.createElement(t);return h.className=e,h.innerHTML=s,f.appendChild(h),h},ae=f=>{let t=document.createElement("style");return t.type="text/css",f&&f.length>0&&(t.styleSheet?t.styleSheet.cssText=f:t.appendChild(document.createTextNode(f))),document.head.appendChild(t),t},Me=()=>{let f={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,t=>{f[t.split("=").shift()]=t.split("=").pop()});for(let t in f){let e=f[t];f[t]=zt(unescape(e))}return f.dependencies!==void 0&&delete f.dependencies,f},un=(f,t=0)=>{if(f){let e,s=f.style.height;return f.style.height="0px",f.parentNode.style.height="auto",e=t-f.parentNode.offsetHeight,f.style.height=s+"px",f.parentNode.style.removeProperty("height"),e}return t},hn={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},He=navigator.userAgent,Dt=/(iphone|ipod|ipad|android)/gi.test(He)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Fe=/android/gi.test(He);var Ue={};Object.defineProperty(Ue,"__esModule",{value:!0});var ze=Object.assign||function(f){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(f[s]=e[s])}return f},pn=Ue.default=function(f){if(f){var t=function(b){return[].slice.call(b)},e=0,s=1,r=2,h=3,c=[],p=null,u="requestAnimationFrame"in f?function(){f.cancelAnimationFrame(p),p=f.requestAnimationFrame(function(){return z(c.filter(function(b){return b.dirty&&b.active}))})}:function(){},I=function(b){return function(){c.forEach(function(S){return S.dirty=b}),u()}},z=function(b){b.filter(function(R){return!R.styleComputed}).forEach(function(R){R.styleComputed=d(R)}),b.filter($).forEach(Y);var S=b.filter(y);S.forEach(L),S.forEach(function(R){Y(R),A(R)}),S.forEach(ot)},A=function(b){return b.dirty=e},L=function(b){b.availableWidth=b.element.parentNode.clientWidth,b.currentWidth=b.element.scrollWidth,b.previousFontSize=b.currentFontSize,b.currentFontSize=Math.min(Math.max(b.minSize,b.availableWidth/b.currentWidth*b.previousFontSize),b.maxSize),b.whiteSpace=b.multiLine&&b.currentFontSize===b.minSize?"normal":"nowrap"},y=function(b){return b.dirty!==r||b.dirty===r&&b.element.parentNode.clientWidth!==b.availableWidth},d=function(b){var S=f.getComputedStyle(b.element,null);b.currentFontSize=parseFloat(S.getPropertyValue("font-size")),b.display=S.getPropertyValue("display"),b.whiteSpace=S.getPropertyValue("white-space")},$=function(b){var S=!1;return!b.preStyleTestCompleted&&(/inline-/.test(b.display)||(S=!0,b.display="inline-block"),b.whiteSpace!=="nowrap"&&(S=!0,b.whiteSpace="nowrap"),b.preStyleTestCompleted=!0,S)},Y=function(b){b.element.style.whiteSpace=b.whiteSpace,b.element.style.display=b.display,b.element.style.fontSize=b.currentFontSize+"px"},ot=function(b){b.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:b.previousFontSize,newValue:b.currentFontSize,scaleFactor:b.currentFontSize/b.previousFontSize}}))},ct=function(b,S){return function(){b.dirty=S,b.active&&u()}},it=function(b){return function(){c=c.filter(function(S){return S.element!==b.element}),b.observeMutations&&b.observer.disconnect(),b.element.style.whiteSpace=b.originalStyle.whiteSpace,b.element.style.display=b.originalStyle.display,b.element.style.fontSize=b.originalStyle.fontSize}},X=function(b){return function(){b.active||(b.active=!0,u())}},J=function(b){return function(){return b.active=!1}},B=function(b){b.observeMutations&&(b.observer=new MutationObserver(ct(b,s)),b.observer.observe(b.element,b.observeMutations))},Q={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in f&&{subtree:!0,childList:!0,characterData:!0}},j=null,_=function(){f.clearTimeout(j),j=f.setTimeout(I(r),nt.observeWindowDelay)},F=["resize","orientationchange"];return Object.defineProperty(nt,"observeWindow",{set:function(b){var S=(b?"add":"remove")+"EventListener";F.forEach(function(R){f[S](R,_)})}}),nt.observeWindow=!0,nt.observeWindowDelay=100,nt.fitAll=I(h),nt}function W(b,S){var R=ze({},Q,S),lt=b.map(function(at){var Z=ze({},R,{element:at,active:!0});return function(rt){rt.originalStyle={whiteSpace:rt.element.style.whiteSpace,display:rt.element.style.display,fontSize:rt.element.style.fontSize},B(rt),rt.newbie=!0,rt.dirty=!0,c.push(rt)}(Z),{element:at,fit:ct(Z,h),unfreeze:X(Z),freeze:J(Z),unsubscribe:it(Z)}});return u(),lt}function nt(b){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof b=="string"?W(t(document.querySelectorAll(b)),S):W([b],S)[0]}}(typeof window>"u"?null:window);class gn{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,D(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(r=>{(r.tagName!=="IFRAME"||this.shouldPreload(r))&&(r.setAttribute("src",r.getAttribute("data-src")),r.setAttribute("data-lazy-loaded",""),r.removeAttribute("data-src"))}),D(t,"video, audio").forEach(r=>{let h=0;D(r,"source[data-src]").forEach(c=>{c.setAttribute("src",c.getAttribute("data-src")),c.removeAttribute("data-src"),c.setAttribute("data-lazy-loaded",""),h+=1}),Dt&&r.tagName==="VIDEO"&&r.setAttribute("playsinline",""),h>0&&r.load()});let s=t.slideBackgroundElement;if(s){s.style.display="block";let r=t.slideBackgroundContentElement,h=t.getAttribute("data-background-iframe");if(s.hasAttribute("data-loaded")===!1){s.setAttribute("data-loaded","true");let p=t.getAttribute("data-background-image"),u=t.getAttribute("data-background-video"),I=t.hasAttribute("data-background-video-loop"),z=t.hasAttribute("data-background-video-muted");if(p)/^data:/.test(p.trim())?r.style.backgroundImage=`url(${p.trim()})`:r.style.backgroundImage=p.split(",").map(A=>`url(${((L="")=>encodeURI(L).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,y=>`%${y.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(A.trim()))})`).join(",");else if(u&&!this.Reveal.isSpeakerNotes()){let A=document.createElement("video");I&&A.setAttribute("loop",""),z&&(A.muted=!0),Dt&&(A.muted=!0,A.setAttribute("playsinline","")),u.split(",").forEach(L=>{let y=((d="")=>hn[d.split(".").pop()])(L);A.innerHTML+=y?`<source src="${L}" type="${y}">`:`<source src="${L}">`}),r.appendChild(A)}else if(h&&e.excludeIframes!==!0){let A=document.createElement("iframe");A.setAttribute("allowfullscreen",""),A.setAttribute("mozallowfullscreen",""),A.setAttribute("webkitallowfullscreen",""),A.setAttribute("allow","autoplay"),A.setAttribute("data-src",h),A.style.width="100%",A.style.height="100%",A.style.maxHeight="100%",A.style.maxWidth="100%",r.appendChild(A)}}let c=r.querySelector("iframe[data-src]");c&&this.shouldPreload(s)&&!/autoplay=(1|true|yes)/gi.test(h)&&c.getAttribute("src")!==h&&c.setAttribute("src",h)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach(e=>{pn(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",D(e,"iframe[src]").forEach(s=>{s.removeAttribute("src")})),D(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(s=>{s.setAttribute("data-src",s.getAttribute("src")),s.removeAttribute("src")}),D(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach(s=>{s.setAttribute("data-src",s.getAttribute("src")),s.removeAttribute("src")})}formatEmbeddedContent(){let t=(e,s,r)=>{D(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+s+'"]').forEach(h=>{let c=h.getAttribute(e);c&&c.indexOf(r)===-1&&h.setAttribute(e,c+(/\?/.test(c)?"&":"?")+r)})};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){t&&!this.Reveal.isSpeakerNotes()&&(D(t,'img[src$=".gif"]').forEach(e=>{e.setAttribute("src",e.getAttribute("src"))}),D(t,"video, audio").forEach(e=>{if(st(e,".fragment")&&!st(e,".fragment.visible"))return;let s=this.Reveal.getConfig().autoPlayMedia;if(typeof s!="boolean"&&(s=e.hasAttribute("data-autoplay")||!!st(e,".slide-background")),s&&typeof e.play=="function")if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(Dt){let r=e.play();r&&typeof r.catch=="function"&&e.controls===!1&&r.catch(()=>{e.controls=!0,e.addEventListener("play",()=>{e.controls=!1})})}else e.removeEventListener("loadeddata",this.startEmbeddedMedia),e.addEventListener("loadeddata",this.startEmbeddedMedia)}),D(t,"iframe[src]").forEach(e=>{st(e,".fragment")&&!st(e,".fragment.visible")||this.startEmbeddedIframe({target:e})}),D(t,"iframe[data-src]").forEach(e=>{st(e,".fragment")&&!st(e,".fragment.visible")||e.getAttribute("src")!==e.getAttribute("data-src")&&(e.removeEventListener("load",this.startEmbeddedIframe),e.addEventListener("load",this.startEmbeddedIframe),e.setAttribute("src",e.getAttribute("data-src")))}))}startEmbeddedMedia(t){let e=!!st(t.target,"html"),s=!!st(t.target,".present");e&&s&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let s=!!st(t.target,"html"),r=!!st(t.target,".present");if(s&&r){let h=this.Reveal.getConfig().autoPlayMedia;typeof h!="boolean"&&(h=e.hasAttribute("data-autoplay")||!!st(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&h?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&h?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=It({unloadIframes:!0},e),t&&t.parentNode&&(D(t,"video, audio").forEach(s=>{s.hasAttribute("data-ignore")||typeof s.pause!="function"||(s.setAttribute("data-paused-by-reveal",""),s.pause())}),D(t,"iframe").forEach(s=>{s.contentWindow&&s.contentWindow.postMessage("slide:stop","*"),s.removeEventListener("load",this.startEmbeddedIframe)}),D(t,'iframe[src*="youtube.com/embed/"]').forEach(s=>{!s.hasAttribute("data-ignore")&&s.contentWindow&&typeof s.contentWindow.postMessage=="function"&&s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),D(t,'iframe[src*="player.vimeo.com/"]').forEach(s=>{!s.hasAttribute("data-ignore")&&s.contentWindow&&typeof s.contentWindow.postMessage=="function"&&s.contentWindow.postMessage('{"method":"pause"}',"*")}),e.unloadIframes===!0&&D(t,"iframe[data-src]").forEach(s=>{s.setAttribute("src","about:blank"),s.removeAttribute("src")}))}}class mn{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let s="none";t.slideNumber&&!this.Reveal.isPrintingPDF()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(s="block"),this.element.style.display=s}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,s=this.Reveal.getConfig(),r="h.v";if(typeof s.slideNumber=="function")e=s.slideNumber(t);else{typeof s.slideNumber=="string"&&(r=s.slideNumber),/c/.test(r)||this.Reveal.getHorizontalSlides().length!==1||(r="c");let c=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],r){case"c":e.push(this.Reveal.getSlidePastCount(t)+c);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+c,"/",this.Reveal.getTotalSlides());break;default:let p=this.Reveal.getIndices(t);e.push(p.h+c);let u=r==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(u,p.v+1)}}let h="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],h)}formatNumber(t,e,s,r="#"+this.Reveal.location.getHash()){return typeof s!="number"||isNaN(s)?`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${s}</span>
					</a>`}destroy(){this.element.remove()}}class fn{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;const t=this.jumpInput.value.trim("");let e=this.Reveal.location.getIndicesFromHash(t,{oneBasedIndex:!0});return!e&&/\S+/i.test(t)&&t.length>1&&(e=this.search(t)),e&&t!==""?(this.Reveal.slide(e.h,e.v,e.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),s=this.Reveal.getSlides().find(r=>e.test(r.innerText));return s?this.Reveal.getIndices(s):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}}const ie=f=>{let t=f.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=f.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let s=f.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(s)return{r:parseInt(s[1],10),g:parseInt(s[2],10),b:parseInt(s[3],10)};let r=f.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return r?{r:parseInt(r[1],10),g:parseInt(r[2],10),b:parseInt(r[3],10),a:parseFloat(r[4])}:null};class vn{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(t=>{let e=this.createBackground(t,this.element);D(t,"section").forEach(s=>{this.createBackground(s,e),e.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let s=document.createElement("div");s.className="slide-background "+t.className.replace(/present|past|future/,"");let r=document.createElement("div");return r.className="slide-background-content",s.appendChild(r),e.appendChild(s),t.slideBackgroundElement=s,t.slideBackgroundContentElement=r,this.sync(t),s}sync(t){const e=t.slideBackgroundElement,s=t.slideBackgroundContentElement,r={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},h=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",s.style.backgroundSize="",s.style.backgroundRepeat="",s.style.backgroundPosition="",s.style.backgroundImage="",s.style.opacity="",s.innerHTML="",r.background&&(/^(http|file|\/\/)/gi.test(r.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(r.background)?t.setAttribute("data-background-image",r.background):e.style.background=r.background),(r.background||r.backgroundColor||r.backgroundGradient||r.backgroundImage||r.backgroundVideo||r.backgroundIframe)&&e.setAttribute("data-background-hash",r.background+r.backgroundSize+r.backgroundImage+r.backgroundVideo+r.backgroundIframe+r.backgroundColor+r.backgroundGradient+r.backgroundRepeat+r.backgroundPosition+r.backgroundTransition+r.backgroundOpacity),r.backgroundSize&&e.setAttribute("data-background-size",r.backgroundSize),r.backgroundColor&&(e.style.backgroundColor=r.backgroundColor),r.backgroundGradient&&(e.style.backgroundImage=r.backgroundGradient),r.backgroundTransition&&e.setAttribute("data-background-transition",r.backgroundTransition),h&&e.setAttribute("data-preload",""),r.backgroundSize&&(s.style.backgroundSize=r.backgroundSize),r.backgroundRepeat&&(s.style.backgroundRepeat=r.backgroundRepeat),r.backgroundPosition&&(s.style.backgroundPosition=r.backgroundPosition),r.backgroundOpacity&&(s.style.opacity=r.backgroundOpacity);let c=r.backgroundColor;if(!c||!ie(c)){let u=window.getComputedStyle(e);u&&u.backgroundColor&&(c=u.backgroundColor)}if(c){const u=ie(c);u&&u.a!==0&&(typeof(p=c)=="string"&&(p=ie(p)),(p?(299*p.r+587*p.g+114*p.b)/1e3:null)<128?t.classList.add("has-dark-background"):t.classList.add("has-light-background"))}var p}update(t=!1){let e=this.Reveal.getCurrentSlide(),s=this.Reveal.getIndices(),r=null,h=this.Reveal.getConfig().rtl?"future":"past",c=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((p,u)=>{p.classList.remove("past","present","future"),u<s.h?p.classList.add(h):u>s.h?p.classList.add(c):(p.classList.add("present"),r=p),(t||u===s.h)&&D(p,".slide-background").forEach((I,z)=>{I.classList.remove("past","present","future"),z<s.v?I.classList.add("past"):z>s.v?I.classList.add("future"):(I.classList.add("present"),u===s.h&&(r=I))})}),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),r){this.Reveal.slideContent.startEmbeddedContent(r);let p=r.querySelector(".slide-background-content");if(p){let z=p.style.backgroundImage||"";/\.gif/i.test(z)&&(p.style.backgroundImage="",window.getComputedStyle(p).opacity,p.style.backgroundImage=z)}let u=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,I=r.getAttribute("data-background-hash");I&&I===u&&r!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=r}e&&["has-light-background","has-dark-background"].forEach(p=>{e.classList.contains(p)?this.Reveal.getRevealElement().classList.add(p):this.Reveal.getRevealElement().classList.remove(p)},this),setTimeout(()=>{this.element.classList.remove("no-transition")},1)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,s,r=this.Reveal.getHorizontalSlides(),h=this.Reveal.getVerticalSlides(),c=this.element.style.backgroundSize.split(" ");c.length===1?e=s=parseInt(c[0],10):(e=parseInt(c[0],10),s=parseInt(c[1],10));let p,u,I=this.element.offsetWidth,z=r.length;p=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:z>1?(e-I)/(z-1):0,u=p*t.h*-1;let A,L,y=this.element.offsetHeight,d=h.length;A=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(s-y)/(d-1),L=d>0?A*t.v:0,this.element.style.backgroundPosition=u+"px "+-L+"px"}}destroy(){this.element.remove()}}const Nt=".slides section",Pt=".slides>section",Ie=".slides>section.present>section",bn=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,De=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;let _e=0;class yn{constructor(t){this.Reveal=t}run(t,e){this.reset();let s=this.Reveal.getSlides(),r=s.indexOf(e),h=s.indexOf(t);if(t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(r>h?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||ae();let c=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",c.slideDirection=r>h?"forward":"backward";let p=t.style.display==="none";p&&(t.style.display=this.Reveal.getConfig().display);let u=this.getAutoAnimatableElements(t,e).map(I=>this.autoAnimateElements(I.from,I.to,I.options||{},c,_e++));if(p&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let I=.8*c.duration,z=.2*c.duration;this.getUnmatchedAutoAnimateElements(e).forEach(A=>{let L=this.getAutoAnimateOptions(A,c),y="unmatched";L.duration===c.duration&&L.delay===c.delay||(y="unmatched-"+_e++,u.push(`[data-auto-animate="running"] [data-auto-animate-target="${y}"] { transition: opacity ${L.duration}s ease ${L.delay}s; }`)),A.dataset.autoAnimateTarget=y},this),u.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${I}s ease ${z}s; }`)}this.autoAnimateStyleSheet.innerHTML=u.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){D(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(t=>{t.dataset.autoAnimate=""}),D(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(t=>{delete t.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,s,r,h){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=h;let c=this.getAutoAnimateOptions(e,r);s.delay!==void 0&&(c.delay=s.delay),s.duration!==void 0&&(c.duration=s.duration),s.easing!==void 0&&(c.easing=s.easing);let p=this.getAutoAnimatableProperties("from",t,s),u=this.getAutoAnimatableProperties("to",e,s);if(e.classList.contains("fragment")&&(delete u.styles.opacity,t.classList.contains("fragment"))&&(t.className.match(De)||[""])[0]===(e.className.match(De)||[""])[0]&&r.slideDirection==="forward"&&e.classList.add("visible","disabled"),s.translate!==!1||s.scale!==!1){let A=this.Reveal.getScale(),L={x:(p.x-u.x)/A,y:(p.y-u.y)/A,scaleX:p.width/u.width,scaleY:p.height/u.height};L.x=Math.round(1e3*L.x)/1e3,L.y=Math.round(1e3*L.y)/1e3,L.scaleX=Math.round(1e3*L.scaleX)/1e3,L.scaleX=Math.round(1e3*L.scaleX)/1e3;let y=s.translate!==!1&&(L.x!==0||L.y!==0),d=s.scale!==!1&&(L.scaleX!==0||L.scaleY!==0);if(y||d){let $=[];y&&$.push(`translate(${L.x}px, ${L.y}px)`),d&&$.push(`scale(${L.scaleX}, ${L.scaleY})`),p.styles.transform=$.join(" "),p.styles["transform-origin"]="top left",u.styles.transform="none"}}for(let A in u.styles){const L=u.styles[A],y=p.styles[A];L===y?delete u.styles[A]:(L.explicitValue===!0&&(u.styles[A]=L.value),y.explicitValue===!0&&(p.styles[A]=y.value))}let I="",z=Object.keys(u.styles);return z.length>0&&(p.styles.transition="none",u.styles.transition=`all ${c.duration}s ${c.easing} ${c.delay}s`,u.styles["transition-property"]=z.join(", "),u.styles["will-change"]=z.join(", "),I='[data-auto-animate-target="'+h+'"] {'+Object.keys(p.styles).map(A=>A+": "+p.styles[A]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+h+'"] {'+Object.keys(u.styles).map(A=>A+": "+u.styles[A]+" !important;").join("")+"}"),I}getAutoAnimateOptions(t,e){let s={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(s=It(s,e),t.parentNode){let r=st(t.parentNode,"[data-auto-animate-target]");r&&(s=this.getAutoAnimateOptions(r,s))}return t.dataset.autoAnimateEasing&&(s.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(s.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(s.delay=parseFloat(t.dataset.autoAnimateDelay)),s}getAutoAnimatableProperties(t,e,s){let r=this.Reveal.getConfig(),h={styles:[]};if(s.translate!==!1||s.scale!==!1){let p;if(typeof s.measure=="function")p=s.measure(e);else if(r.center)p=e.getBoundingClientRect();else{let u=this.Reveal.getScale();p={x:e.offsetLeft*u,y:e.offsetTop*u,width:e.offsetWidth*u,height:e.offsetHeight*u}}h.x=p.x,h.y=p.y,h.width=p.width,h.height=p.height}const c=getComputedStyle(e);return(s.styles||r.autoAnimateStyles).forEach(p=>{let u;typeof p=="string"&&(p={property:p}),p.from!==void 0&&t==="from"?u={value:p.from,explicitValue:!0}:p.to!==void 0&&t==="to"?u={value:p.to,explicitValue:!0}:(p.property==="line-height"&&(u=parseFloat(c["line-height"])/parseFloat(c["font-size"])),isNaN(u)&&(u=c[p.property])),u!==""&&(h.styles[p.property]=u)}),h}getAutoAnimatableElements(t,e){let s=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),r=[];return s.filter((h,c)=>{if(r.indexOf(h.to)===-1)return r.push(h.to),!0})}getAutoAnimatePairs(t,e){let s=[];const r="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(s,t,e,"[data-id]",h=>h.nodeName+":::"+h.getAttribute("data-id")),this.findAutoAnimateMatches(s,t,e,r,h=>h.nodeName+":::"+h.innerText),this.findAutoAnimateMatches(s,t,e,"img, video, iframe",h=>h.nodeName+":::"+(h.getAttribute("src")||h.getAttribute("data-src"))),this.findAutoAnimateMatches(s,t,e,"pre",h=>h.nodeName+":::"+h.innerText),s.forEach(h=>{Vt(h.from,r)?h.options={scale:!1}:Vt(h.from,"pre")&&(h.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(s,h.from,h.to,".hljs .hljs-ln-code",c=>c.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(s,h.from,h.to,".hljs .hljs-ln-line[data-line-number]",c=>c.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),s}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,s,r,h,c){let p={},u={};[].slice.call(e.querySelectorAll(r)).forEach((I,z)=>{const A=h(I);typeof A=="string"&&A.length&&(p[A]=p[A]||[],p[A].push(I))}),[].slice.call(s.querySelectorAll(r)).forEach((I,z)=>{const A=h(I);let L;if(u[A]=u[A]||[],u[A].push(I),p[A]){const y=u[A].length-1,d=p[A].length-1;p[A][y]?(L=p[A][y],p[A][y]=null):p[A][d]&&(L=p[A][d],p[A][d]=null)}L&&t.push({from:L,to:I,options:c})})}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce((e,s)=>{const r=s.querySelector("[data-auto-animate-target]");return s.hasAttribute("data-auto-animate-target")||r||e.push(s),s.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(s))),e},[])}}class wn{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){D(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.add("visible"),t.classList.remove("current-fragment")})}enable(){D(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")})}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),s=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-s.length>0,next:!!s.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let s=[],r=[],h=[];t.forEach(p=>{if(p.hasAttribute("data-fragment-index")){let u=parseInt(p.getAttribute("data-fragment-index"),10);s[u]||(s[u]=[]),s[u].push(p)}else r.push([p])}),s=s.concat(r);let c=0;return s.forEach(p=>{p.forEach(u=>{h.push(u),u.setAttribute("data-fragment-index",c)}),c++}),e===!0?s:h}sortAll(){this.Reveal.getHorizontalSlides().forEach(t=>{let e=D(t,"section");e.forEach((s,r)=>{this.sort(s.querySelectorAll(".fragment"))},this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))})}update(t,e){let s={shown:[],hidden:[]},r=this.Reveal.getCurrentSlide();if(r&&this.Reveal.getConfig().fragments&&(e=e||this.sort(r.querySelectorAll(".fragment"))).length){let h=0;if(typeof t!="number"){let c=this.sort(r.querySelectorAll(".fragment.visible")).pop();c&&(t=parseInt(c.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach((c,p)=>{if(c.hasAttribute("data-fragment-index")&&(p=parseInt(c.getAttribute("data-fragment-index"),10)),h=Math.max(h,p),p<=t){let u=c.classList.contains("visible");c.classList.add("visible"),c.classList.remove("current-fragment"),p===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(c)),c.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(c)),u||(s.shown.push(c),this.Reveal.dispatchEvent({target:c,type:"visible",bubbles:!1}))}else{let u=c.classList.contains("visible");c.classList.remove("visible"),c.classList.remove("current-fragment"),u&&(this.Reveal.slideContent.stopEmbeddedContent(c),s.hidden.push(c),this.Reveal.dispatchEvent({target:c,type:"hidden",bubbles:!1}))}}),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,h),-1),r.setAttribute("data-fragment",t)}return s}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let s=this.Reveal.getCurrentSlide();if(s&&this.Reveal.getConfig().fragments){let r=this.sort(s.querySelectorAll(".fragment:not(.disabled)"));if(r.length){if(typeof t!="number"){let c=this.sort(s.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=c?parseInt(c.getAttribute("data-fragment-index")||0,10):-1}t+=e;let h=this.update(t,r);return h.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:h.hidden[0],fragments:h.hidden}}),h.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:h.shown[0],fragments:h.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!h.shown.length&&!h.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class kn{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),D(this.Reveal.getRevealElement(),Nt).forEach(r=>{r.classList.contains("stack")||r.addEventListener("click",this.onSlideClicked,!0)});const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const s=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:s.h,indexv:s.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((t,e)=>{t.setAttribute("data-index-h",e),Lt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&D(t,"section").forEach((s,r)=>{s.setAttribute("data-index-h",e),s.setAttribute("data-index-v",r),Lt(s,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((t,e)=>{Lt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),D(t,".slide-background").forEach((s,r)=>{Lt(s,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")})})}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,s=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-s.h*this.overviewSlideWidth+"px)","translateY("+-s.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),D(this.Reveal.getRevealElement(),Nt).forEach(e=>{Lt(e,""),e.removeEventListener("click",this.onSlideClicked,!0)}),D(this.Reveal.getBackgroundsElement(),".slide-background").forEach(e=>{Lt(e,"")}),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let s=parseInt(e.getAttribute("data-index-h"),10),r=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(s,r)}}}}class xn{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1),document.addEventListener("keypress",this.onDocumentKeyPress,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1),document.removeEventListener("keypress",this.onDocumentKeyPress,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(t){t.shiftKey&&t.charCode===63&&this.Reveal.toggleHelp()}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let s=t.keyCode,r=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let h=document.activeElement&&document.activeElement.isContentEditable===!0,c=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),p=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),u=!([32,37,38,39,40,78,80].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(h||c||p||u)return;let I,z=[66,86,190,191];if(typeof e.keyboard=="object")for(I in e.keyboard)e.keyboard[I]==="togglePause"&&z.push(parseInt(I,10));if(this.Reveal.isPaused()&&z.indexOf(s)===-1)return!1;let A=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),L=!1;if(typeof e.keyboard=="object"){for(I in e.keyboard)if(parseInt(I,10)===s){let y=e.keyboard[I];typeof y=="function"?y.apply(null,[t]):typeof y=="string"&&typeof this.Reveal[y]=="function"&&this.Reveal[y].call(),L=!0}}if(L===!1){for(I in this.bindings)if(parseInt(I,10)===s){let y=this.bindings[I].callback;typeof y=="function"?y.apply(null,[t]):typeof y=="string"&&typeof this.Reveal[y]=="function"&&this.Reveal[y].call(),L=!0}}L===!1&&(L=!0,s===80||s===33?this.Reveal.prev({skipFragments:t.altKey}):s===78||s===34?this.Reveal.next({skipFragments:t.altKey}):s===72||s===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&A?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):s===76||s===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&A?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):s===75||s===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&A?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):s===74||s===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&A?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):s===36?this.Reveal.slide(0):s===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):s===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):s===58||s===59||s===66||s===86||s===190||s===191?this.Reveal.togglePause():s===70?(y=>{let d=(y=y||document.documentElement).requestFullscreen||y.webkitRequestFullscreen||y.webkitRequestFullScreen||y.mozRequestFullScreen||y.msRequestFullscreen;d&&d.apply(y)})(e.embedded?this.Reveal.getViewportElement():document.documentElement):s===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(r):s===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():L=!1),L?t.preventDefault&&t.preventDefault():s!==27&&s!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}}class Sn{constructor(t){var e,s,r;r=1e3,(s="MAX_REPLACE_STATE_FREQUENCY")in(e=this)?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let s=t.replace(/^#\/?/,""),r=s.split("/");if(/^[0-9]*$/.test(r[0])||!s.length){const h=this.Reveal.getConfig();let c,p=h.hashOneBasedIndex||e.oneBasedIndex?1:0,u=parseInt(r[0],10)-p||0,I=parseInt(r[1],10)-p||0;return h.fragmentInURL&&(c=parseInt(r[2],10),isNaN(c)&&(c=void 0)),{h:u,v:I,f:c}}{let h,c;/\/[-\d]+$/g.test(s)&&(c=parseInt(s.split("/").pop(),10),c=isNaN(c)?void 0:c,s=s.split("/").shift());try{h=document.getElementById(decodeURIComponent(s))}catch{}if(h)return{...this.Reveal.getIndices(h),f:c}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),s=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(s){let r=this.getHash();e.history?window.location.hash=r:e.hash&&(r==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+r))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout(()=>this.replaceState(t),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",s=t||this.Reveal.getCurrentSlide(),r=s?s.getAttribute("id"):null;r&&(r=encodeURIComponent(r));let h=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(h.f=void 0),typeof r=="string"&&r.length)e="/"+r,h.f>=0&&(e+="/"+h.f);else{let c=this.Reveal.getConfig().hashOneBasedIndex?1:0;(h.h>0||h.v>0||h.f>=0)&&(e+=h.h+c),(h.v>0||h.f>=0)&&(e+="/"+(h.v+c)),h.f>=0&&(e+="/"+h.f)}return e}onWindowHashChange(t){this.readURL()}}class En{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=D(e,".navigate-left"),this.controlsRight=D(e,".navigate-right"),this.controlsUp=D(e,".navigate-up"),this.controlsDown=D(e,".navigate-down"),this.controlsPrev=D(e,".navigate-prev"),this.controlsNext=D(e,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];Fe&&(t=["touchstart"]),t.forEach(e=>{this.controlsLeft.forEach(s=>s.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(s=>s.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(s=>s.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(s=>s.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(s=>s.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(s=>s.addEventListener(e,this.onNavigateNextClicked,!1))})}unbind(){["touchstart","click"].forEach(t=>{this.controlsLeft.forEach(e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(e=>e.removeEventListener(t,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(e=>e.removeEventListener(t,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(e=>e.removeEventListener(t,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(e=>e.removeEventListener(t,this.onNavigateNextClicked,!1))})}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(s=>{s.classList.remove("enabled","fragmented"),s.setAttribute("disabled","disabled")}),t.left&&this.controlsLeft.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),t.right&&this.controlsRight.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),t.up&&this.controlsUp.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),t.down&&this.controlsDown.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),(t.left||t.up)&&this.controlsPrev.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),(t.right||t.down)&&this.controlsNext.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")});let e=this.Reveal.getCurrentSlide();if(e){let s=this.Reveal.fragments.availableRoutes();s.prev&&this.controlsPrev.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),s.next&&this.controlsNext.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),this.Reveal.isVerticalSlide(e)?(s.prev&&this.controlsUp.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),s.next&&this.controlsDown.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})):(s.prev&&this.controlsLeft.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),s.next&&this.controlsRight.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let s=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&s.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&s.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}}class An{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),s=e.length,r=Math.floor(t.clientX/this.getMaxWidth()*s);this.Reveal.getConfig().rtl&&(r=s-r);let h=this.Reveal.getIndices(e[r]);this.Reveal.slide(h.h,h.v)}destroy(){this.element.remove()}}class Rn{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?(document.addEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.addEventListener("mousewheel",this.onDocumentMouseScroll,!1)):(document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1)),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const Oe=(f,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=f,typeof t=="function"&&(e.onload=e.onreadystatechange=r=>{(r.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=r=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+r))});const s=document.querySelector("head");s.insertBefore(e,s.lastChild)};class Ln{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise(s=>{let r=[],h=0;if(e.forEach(c=>{c.condition&&!c.condition()||(c.async?this.asyncDependencies.push(c):r.push(c))}),r.length){h=r.length;const c=p=>{p&&typeof p.callback=="function"&&p.callback(),--h==0&&this.initPlugins().then(s)};r.forEach(p=>{typeof p.id=="string"?(this.registerPlugin(p),c(p)):typeof p.src=="string"?Oe(p.src,()=>c(p)):(console.warn("Unrecognized plugin format",p),c())})}else this.initPlugins().then(s)})}initPlugins(){return new Promise(t=>{let e=Object.values(this.registeredPlugins),s=e.length;if(s===0)this.loadAsync().then(t);else{let r,h=()=>{--s==0?this.loadAsync().then(t):r()},c=0;r=()=>{let p=e[c++];if(typeof p.init=="function"){let u=p.init(this.Reveal);u&&typeof u.then=="function"?u.then(h):h()}else h()},r()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(t=>{Oe(t.src,t.callback)}),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(t=>{typeof t.destroy=="function"&&t.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}class Cn{constructor(t){this.Reveal=t}async setupPDF(){const t=this.Reveal.getConfig(),e=D(this.Reveal.getRevealElement(),Nt),s=t.slideNumber&&/all|print/i.test(t.showSlideNumber),r=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),h=Math.floor(r.width*(1+t.margin)),c=Math.floor(r.height*(1+t.margin)),p=r.width,u=r.height;await new Promise(requestAnimationFrame),ae("@page{size:"+h+"px "+c+"px; margin: 0px;}"),ae(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+p+"px; max-height:"+u+"px}"),document.documentElement.classList.add("print-pdf"),document.body.style.width=h+"px",document.body.style.height=c+"px";const I=document.querySelector(".reveal-viewport");let z;if(I){const $=window.getComputedStyle(I);$&&$.background&&(z=$.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(p,u),await new Promise(requestAnimationFrame);const A=e.map($=>$.scrollHeight),L=[],y=e[0].parentNode;let d=1;e.forEach(function($,Y){if($.classList.contains("stack")===!1){let ot=(h-p)/2,ct=(c-u)/2;const it=A[Y];let X=Math.max(Math.ceil(it/c),1);X=Math.min(X,t.pdfMaxPagesPerSlide),(X===1&&t.center||$.classList.contains("center"))&&(ct=Math.max((c-it)/2,0));const J=document.createElement("div");if(L.push(J),J.className="pdf-page",J.style.height=(c+t.pdfPageHeightOffset)*X+"px",z&&(J.style.background=z),J.appendChild($),$.style.left=ot+"px",$.style.top=ct+"px",$.style.width=p+"px",this.Reveal.slideContent.layout($),$.slideBackgroundElement&&J.insertBefore($.slideBackgroundElement,$),t.showNotes){const B=this.Reveal.getSlideNotes($);if(B){const j=typeof t.showNotes=="string"?t.showNotes:"inline",_=document.createElement("div");_.classList.add("speaker-notes"),_.classList.add("speaker-notes-pdf"),_.setAttribute("data-layout",j),_.innerHTML=B,j==="separate-page"?L.push(_):(_.style.left="8px",_.style.bottom="8px",_.style.width=h-2*8+"px",J.appendChild(_))}}if(s){const B=document.createElement("div");B.classList.add("slide-number"),B.classList.add("slide-number-pdf"),B.innerHTML=d++,J.appendChild(B)}if(t.pdfSeparateFragments){const B=this.Reveal.fragments.sort(J.querySelectorAll(".fragment"),!0);let Q;B.forEach(function(j,_){Q&&Q.forEach(function(W){W.classList.remove("current-fragment")}),j.forEach(function(W){W.classList.add("visible","current-fragment")},this);const F=J.cloneNode(!0);if(s){const W=_+1;F.querySelector(".slide-number-pdf").innerHTML+="."+W}L.push(F),Q=j},this),B.forEach(function(j){j.forEach(function(_){_.classList.remove("visible","current-fragment")})})}else D(J,".fragment:not(.fade-out)").forEach(function(B){B.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),L.forEach($=>y.appendChild($)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"})}isPrintingPDF(){return/print-pdf/gi.test(window.location.search)}}class Tn{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if(Vt(t,"video, audio"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)Fe&&t.preventDefault();else{this.Reveal.onUserInput(t);let s=t.touches[0].clientX,r=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let h=this.Reveal.availableRoutes({includeFragments:!0}),c=s-this.touchStartX,p=r-this.touchStartY;c>40&&Math.abs(c)>Math.abs(p)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):c<-40&&Math.abs(c)>Math.abs(p)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):p>40&&h.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):p<-40&&h.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}}const se="focus",$e="blur";class Pn{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==se&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=se}blur(){this.state!==$e&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=$e}isFocused(){return this.state===se}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=st(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class Nn{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map(s=>s.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class Mn{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,s=this.diameter2,r=this.diameter2,h=28;this.progressOffset+=.1*(1-this.progressOffset);const c=-Math.PI/2+t*(2*Math.PI),p=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(s,r,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(s,r,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(s,r,e,p,c,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(s-14,r-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,h),this.context.fillRect(18,0,10,h)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,h),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var zn={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const Be="4.5.0";function je(f,t){arguments.length<2&&(t=arguments[0],f=document.querySelector(".reveal"));const e={};let s,r,h,c,p,u={},I=!1,z={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},A=[],L=1,y={layout:"",overview:""},d={},$="idle",Y=0,ot=0,ct=-1,it=!1,X=new gn(e),J=new mn(e),B=new fn(e),Q=new yn(e),j=new vn(e),_=new wn(e),F=new kn(e),W=new xn(e),nt=new Sn(e),b=new En(e),S=new An(e),R=new Rn(e),lt=new Ln(e),at=new Cn(e),Z=new Pn(e),rt=new Tn(e),dt=new Nn(e);function qt(l){if(!f)throw'Unable to find presentation root (<div class="reveal">).';if(d.wrapper=f,d.slides=f.querySelector(".slides"),!d.slides)throw'Unable to find slides container (<div class="slides">).';return u={...zn,...u,...t,...l,...Me()},ft(),window.addEventListener("load",mt,!1),lt.load(u.plugins,u.dependencies).then(q),new Promise(g=>e.on("ready",g))}function ft(){u.embedded===!0?d.viewport=st(f,".reveal-viewport")||f:(d.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),d.viewport.classList.add("reveal-viewport")}function q(){I=!0,T(),i(),x(),m(),v(),tn(),w(),nt.readURL(),j.update(!0),setTimeout(()=>{d.slides.classList.remove("no-transition"),d.wrapper.classList.add("ready"),K({type:"ready",data:{indexh:s,indexv:r,currentSlide:c}})},1),at.isPrintingPDF()&&(N(),document.readyState==="complete"?at.setupPDF():window.addEventListener("load",()=>{at.setupPDF()}))}function T(){u.showHiddenSlides||D(d.wrapper,'section[data-visibility="hidden"]').forEach(l=>{l.parentNode.removeChild(l)})}function i(){d.slides.classList.add("no-transition"),Dt?d.wrapper.classList.add("no-hover"):d.wrapper.classList.remove("no-hover"),j.render(),J.render(),B.render(),b.render(),S.render(),dt.render(),d.pauseOverlay=cn(d.wrapper,"div","pause-overlay",u.controls?'<button class="resume-button">Resume presentation</button>':null),d.statusElement=n(),d.wrapper.setAttribute("role","application")}function n(){let l=d.wrapper.querySelector(".aria-status");return l||(l=document.createElement("div"),l.style.position="absolute",l.style.height="1px",l.style.width="1px",l.style.overflow="hidden",l.style.clip="rect( 1px, 1px, 1px, 1px )",l.classList.add("aria-status"),l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),d.wrapper.appendChild(l)),l}function a(l){d.statusElement.textContent=l}function o(l){let g="";if(l.nodeType===3)g+=l.textContent;else if(l.nodeType===1){let E=l.getAttribute("aria-hidden"),k=window.getComputedStyle(l).display==="none";E==="true"||k||Array.from(l.childNodes).forEach(P=>{g+=o(P)})}return g=g.trim(),g===""?"":g+" "}function m(){setInterval(()=>{d.wrapper.scrollTop===0&&d.wrapper.scrollLeft===0||(d.wrapper.scrollTop=0,d.wrapper.scrollLeft=0)},1e3)}function v(){document.addEventListener("fullscreenchange",Wt),document.addEventListener("webkitfullscreenchange",Wt)}function x(){u.postMessage&&window.addEventListener("message",Ae,!1)}function w(l){const g={...u};if(typeof l=="object"&&It(u,l),e.isReady()===!1)return;const E=d.wrapper.querySelectorAll(Nt).length;d.wrapper.classList.remove(g.transition),d.wrapper.classList.add(u.transition),d.wrapper.setAttribute("data-transition-speed",u.transitionSpeed),d.wrapper.setAttribute("data-background-transition",u.backgroundTransition),d.viewport.style.setProperty("--slide-width",u.width+"px"),d.viewport.style.setProperty("--slide-height",u.height+"px"),u.shuffle&&Yt(),ne(d.wrapper,"embedded",u.embedded),ne(d.wrapper,"rtl",u.rtl),ne(d.wrapper,"center",u.center),u.pause===!1&&Ot(),u.previewLinks?(H(),wt("[data-preview-link=false]")):(wt(),H("[data-preview-link]:not([data-preview-link=false])")),Q.reset(),p&&(p.destroy(),p=null),E>1&&u.autoSlide&&u.autoSlideStoppable&&(p=new Mn(d.wrapper,()=>Math.min(Math.max((Date.now()-ct)/Y,0),1)),p.on("click",ln),it=!1),u.navigationMode!=="default"?d.wrapper.setAttribute("data-navigation-mode",u.navigationMode):d.wrapper.removeAttribute("data-navigation-mode"),dt.configure(u,g),Z.configure(u,g),R.configure(u,g),b.configure(u,g),S.configure(u,g),W.configure(u,g),_.configure(u,g),J.configure(u,g),he()}function C(){window.addEventListener("resize",Ce,!1),u.touch&&rt.bind(),u.keyboard&&W.bind(),u.progress&&S.bind(),u.respondToHashChanges&&nt.bind(),b.bind(),Z.bind(),d.slides.addEventListener("click",Le,!1),d.slides.addEventListener("transitionend",Re,!1),d.pauseOverlay.addEventListener("click",Ot,!1),u.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Te,!1)}function N(){rt.unbind(),Z.unbind(),W.unbind(),b.unbind(),S.unbind(),nt.unbind(),window.removeEventListener("resize",Ce,!1),d.slides.removeEventListener("click",Le,!1),d.slides.removeEventListener("transitionend",Re,!1),d.pauseOverlay.removeEventListener("click",Ot,!1)}function O(){N(),Ft(),wt(),dt.destroy(),Z.destroy(),lt.destroy(),R.destroy(),b.destroy(),S.destroy(),j.destroy(),J.destroy(),B.destroy(),document.removeEventListener("fullscreenchange",Wt),document.removeEventListener("webkitfullscreenchange",Wt),document.removeEventListener("visibilitychange",Te,!1),window.removeEventListener("message",Ae,!1),window.removeEventListener("load",mt,!1),d.pauseOverlay&&d.pauseOverlay.remove(),d.statusElement&&d.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),d.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),d.wrapper.removeAttribute("data-transition-speed"),d.wrapper.removeAttribute("data-background-transition"),d.viewport.classList.remove("reveal-viewport"),d.viewport.style.removeProperty("--slide-width"),d.viewport.style.removeProperty("--slide-height"),d.slides.style.removeProperty("width"),d.slides.style.removeProperty("height"),d.slides.style.removeProperty("zoom"),d.slides.style.removeProperty("left"),d.slides.style.removeProperty("top"),d.slides.style.removeProperty("bottom"),d.slides.style.removeProperty("right"),d.slides.style.removeProperty("transform"),Array.from(d.wrapper.querySelectorAll(Nt)).forEach(l=>{l.style.removeProperty("display"),l.style.removeProperty("top"),l.removeAttribute("hidden"),l.removeAttribute("aria-hidden")})}function M(l,g,E){f.addEventListener(l,g,E)}function tt(l,g,E){f.removeEventListener(l,g,E)}function vt(l){typeof l.layout=="string"&&(y.layout=l.layout),typeof l.overview=="string"&&(y.overview=l.overview),y.layout?Lt(d.slides,y.layout+" "+y.overview):Lt(d.slides,y.overview)}function K({target:l=d.wrapper,type:g,data:E,bubbles:k=!0}){let P=document.createEvent("HTMLEvents",1,2);return P.initEvent(g,k,!0),It(P,E),l.dispatchEvent(P),l===d.wrapper&&ht(g),P}function ht(l,g){if(u.postMessageEvents&&window.parent!==window.self){let E={namespace:"reveal",eventName:l,state:Se()};It(E,g),window.parent.postMessage(JSON.stringify(E),"*")}}function H(l="a"){Array.from(d.wrapper.querySelectorAll(l)).forEach(g=>{/^(http|www)/gi.test(g.getAttribute("href"))&&g.addEventListener("click",Pe,!1)})}function wt(l="a"){Array.from(d.wrapper.querySelectorAll(l)).forEach(g=>{/^(http|www)/gi.test(g.getAttribute("href"))&&g.removeEventListener("click",Pe,!1)})}function Ct(l){V(),d.overlay=document.createElement("div"),d.overlay.classList.add("overlay"),d.overlay.classList.add("overlay-preview"),d.wrapper.appendChild(d.overlay),d.overlay.innerHTML=`<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${l}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${l}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,d.overlay.querySelector("iframe").addEventListener("load",g=>{d.overlay.classList.add("loaded")},!1),d.overlay.querySelector(".close").addEventListener("click",g=>{V(),g.preventDefault()},!1),d.overlay.querySelector(".external").addEventListener("click",g=>{V()},!1)}function pt(l){typeof l=="boolean"?l?St():V():d.overlay?V():St()}function St(){if(u.help){V(),d.overlay=document.createElement("div"),d.overlay.classList.add("overlay"),d.overlay.classList.add("overlay-help"),d.wrapper.appendChild(d.overlay);let l='<p class="title">Keyboard Shortcuts</p><br/>',g=W.getShortcuts(),E=W.getBindings();l+="<table><th>KEY</th><th>ACTION</th>";for(let k in g)l+=`<tr><td>${k}</td><td>${g[k]}</td></tr>`;for(let k in E)E[k].key&&E[k].description&&(l+=`<tr><td>${E[k].key}</td><td>${E[k].description}</td></tr>`);l+="</table>",d.overlay.innerHTML=`
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${l}</div>
				</div>
			`,d.overlay.querySelector(".close").addEventListener("click",k=>{V(),k.preventDefault()},!1)}}function V(){return!!d.overlay&&(d.overlay.parentNode.removeChild(d.overlay),d.overlay=null,!0)}function mt(){if(d.wrapper&&!at.isPrintingPDF()){if(!u.disableLayout){Dt&&!u.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const l=Ht(),g=L;Et(u.width,u.height),d.slides.style.width=l.width+"px",d.slides.style.height=l.height+"px",L=Math.min(l.presentationWidth/l.width,l.presentationHeight/l.height),L=Math.max(L,u.minScale),L=Math.min(L,u.maxScale),L===1?(d.slides.style.zoom="",d.slides.style.left="",d.slides.style.top="",d.slides.style.bottom="",d.slides.style.right="",vt({layout:""})):(d.slides.style.zoom="",d.slides.style.left="50%",d.slides.style.top="50%",d.slides.style.bottom="auto",d.slides.style.right="auto",vt({layout:"translate(-50%, -50%) scale("+L+")"}));const E=Array.from(d.wrapper.querySelectorAll(Nt));for(let k=0,P=E.length;k<P;k++){const U=E[k];U.style.display!=="none"&&(u.center||U.classList.contains("center")?U.classList.contains("stack")?U.style.top=0:U.style.top=Math.max((l.height-U.scrollHeight)/2,0)+"px":U.style.top="")}g!==L&&K({type:"resize",data:{oldScale:g,scale:L,size:l}})}d.viewport.style.setProperty("--slide-scale",L),S.update(),j.updateParallax(),F.isActive()&&F.update()}}function Et(l,g){D(d.slides,"section > .stretch, section > .r-stretch").forEach(E=>{let k=un(E,g);if(/(img|video)/gi.test(E.nodeName)){const P=E.naturalWidth||E.videoWidth,U=E.naturalHeight||E.videoHeight,et=Math.min(l/P,k/U);E.style.width=P*et+"px",E.style.height=U*et+"px"}else E.style.width=l+"px",E.style.height=k+"px"})}function Ht(l,g){let E=u.width,k=u.height;u.disableLayout&&(E=d.slides.offsetWidth,k=d.slides.offsetHeight);const P={width:E,height:k,presentationWidth:l||d.wrapper.offsetWidth,presentationHeight:g||d.wrapper.offsetHeight};return P.presentationWidth-=P.presentationWidth*u.margin,P.presentationHeight-=P.presentationHeight*u.margin,typeof P.width=="string"&&/%$/.test(P.width)&&(P.width=parseInt(P.width,10)/100*P.presentationWidth),typeof P.height=="string"&&/%$/.test(P.height)&&(P.height=parseInt(P.height,10)/100*P.presentationHeight),P}function re(l,g){typeof l=="object"&&typeof l.setAttribute=="function"&&l.setAttribute("data-previous-indexv",g||0)}function oe(l){if(typeof l=="object"&&typeof l.setAttribute=="function"&&l.classList.contains("stack")){const g=l.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(l.getAttribute(g)||0,10)}return 0}function _t(l=c){return l&&l.parentNode&&!!l.parentNode.nodeName.match(/section/i)}function le(){return!(!c||!_t(c))&&!c.nextElementSibling}function de(){return s===0&&r===0}function Xt(){return!!c&&!c.nextElementSibling&&(!_t(c)||!c.parentNode.nextElementSibling)}function ce(){if(u.pause){const l=d.wrapper.classList.contains("paused");Ft(),d.wrapper.classList.add("paused"),l===!1&&K({type:"paused"})}}function Ot(){const l=d.wrapper.classList.contains("paused");d.wrapper.classList.remove("paused"),Mt(),l&&K({type:"resumed"})}function ue(l){typeof l=="boolean"?l?ce():Ot():$t()?Ot():ce()}function $t(){return d.wrapper.classList.contains("paused")}function Je(l){typeof l=="boolean"?l?B.show():B.hide():B.isVisible()?B.hide():B.show()}function Ze(l){typeof l=="boolean"?l?Bt():Ut():it?Bt():Ut()}function Qe(){return!(!Y||it)}function bt(l,g,E,k){if(K({type:"beforeslidechange",data:{indexh:l===void 0?s:l,indexv:g===void 0?r:g,origin:k}}).defaultPrevented)return;h=c;const P=d.wrapper.querySelectorAll(Pt);if(P.length===0)return;g!==void 0||F.isActive()||(g=oe(P[l])),h&&h.parentNode&&h.parentNode.classList.contains("stack")&&re(h.parentNode,r);const U=A.concat();A.length=0;let et=s||0,gt=r||0;s=pe(Pt,l===void 0?s:l),r=pe(Ie,g===void 0?r:g);let xt=s!==et||r!==gt;xt||(h=null);let Tt=P[s];c=Tt.querySelectorAll("section")[r]||Tt;let G=!1;xt&&h&&c&&!F.isActive()&&(h.hasAttribute("data-auto-animate")&&c.hasAttribute("data-auto-animate")&&h.getAttribute("data-auto-animate-id")===c.getAttribute("data-auto-animate-id")&&!(s>et||r>gt?c:h).hasAttribute("data-auto-animate-restart")&&(G=!0,d.slides.classList.add("disable-slide-transitions")),$="running"),Jt(),mt(),F.isActive()&&F.update(),E!==void 0&&_.goto(E),h&&h!==c&&(h.classList.remove("present"),h.setAttribute("aria-hidden","true"),de()&&setTimeout(()=>{nn().forEach(yt=>{re(yt,0)})},0));t:for(let yt=0,dn=A.length;yt<dn;yt++){for(let Kt=0;Kt<U.length;Kt++)if(U[Kt]===A[yt]){U.splice(Kt,1);continue t}d.viewport.classList.add(A[yt]),K({type:A[yt]})}for(;U.length;)d.viewport.classList.remove(U.pop());xt&&K({type:"slidechanged",data:{indexh:s,indexv:r,previousSlide:h,currentSlide:c,origin:k}}),!xt&&h||(X.stopEmbeddedContent(h),X.startEmbeddedContent(c)),requestAnimationFrame(()=>{a(o(c))}),S.update(),b.update(),dt.update(),j.update(),j.updateParallax(),J.update(),_.update(),nt.writeURL(),Mt(),G&&(setTimeout(()=>{d.slides.classList.remove("disable-slide-transitions")},0),u.autoAnimate&&Q.run(h,c))}function he(){N(),C(),mt(),Y=u.autoSlide,Mt(),j.create(),nt.writeURL(),u.sortFragmentsOnSync===!0&&_.sortAll(),b.update(),S.update(),Jt(),dt.update(),dt.updateVisibility(),j.update(!0),J.update(),X.formatEmbeddedContent(),u.autoPlayMedia===!1?X.stopEmbeddedContent(c,{unloadIframes:!1}):X.startEmbeddedContent(c),F.isActive()&&F.layout()}function Ge(l=c){j.sync(l),_.sync(l),X.load(l),j.update(),dt.update()}function tn(){At().forEach(l=>{D(l,"section").forEach((g,E)=>{E>0&&(g.classList.remove("present"),g.classList.remove("past"),g.classList.add("future"),g.setAttribute("aria-hidden","true"))})})}function Yt(l=At()){l.forEach((g,E)=>{let k=l[Math.floor(Math.random()*l.length)];k.parentNode===g.parentNode&&g.parentNode.insertBefore(g,k);let P=g.querySelectorAll("section");P.length&&Yt(P)})}function pe(l,g){let E=D(d.wrapper,l),k=E.length,P=at.isPrintingPDF(),U=!1,et=!1;if(k){u.loop&&(g>=k&&(U=!0),(g%=k)<0&&(g=k+g,et=!0)),g=Math.max(Math.min(g,k-1),0);for(let ut=0;ut<k;ut++){let G=E[ut],yt=u.rtl&&!_t(G);G.classList.remove("past"),G.classList.remove("present"),G.classList.remove("future"),G.setAttribute("hidden",""),G.setAttribute("aria-hidden","true"),G.querySelector("section")&&G.classList.add("stack"),P?G.classList.add("present"):ut<g?(G.classList.add(yt?"future":"past"),u.fragments&&ge(G)):ut>g?(G.classList.add(yt?"past":"future"),u.fragments&&me(G)):ut===g&&u.fragments&&(U?me(G):et&&ge(G))}let gt=E[g],xt=gt.classList.contains("present");gt.classList.add("present"),gt.removeAttribute("hidden"),gt.removeAttribute("aria-hidden"),xt||K({target:gt,type:"visible",bubbles:!1});let Tt=gt.getAttribute("data-state");Tt&&(A=A.concat(Tt.split(" ")))}else g=0;return g}function ge(l){D(l,".fragment").forEach(g=>{g.classList.add("visible"),g.classList.remove("current-fragment")})}function me(l){D(l,".fragment.visible").forEach(g=>{g.classList.remove("visible","current-fragment")})}function Jt(){let l,g,E=At(),k=E.length;if(k&&s!==void 0){let P=F.isActive()?10:u.viewDistance;Dt&&(P=F.isActive()?6:u.mobileViewDistance),at.isPrintingPDF()&&(P=Number.MAX_VALUE);for(let U=0;U<k;U++){let et=E[U],gt=D(et,"section"),xt=gt.length;if(l=Math.abs((s||0)-U)||0,u.loop&&(l=Math.abs(((s||0)-U)%(k-P))||0),l<P?X.load(et):X.unload(et),xt){let Tt=oe(et);for(let ut=0;ut<xt;ut++){let G=gt[ut];g=Math.abs(U===(s||0)?(r||0)-ut:ut-Tt),l+g<P?X.load(G):X.unload(G)}}}we()?d.wrapper.classList.add("has-vertical-slides"):d.wrapper.classList.remove("has-vertical-slides"),ye()?d.wrapper.classList.add("has-horizontal-slides"):d.wrapper.classList.remove("has-horizontal-slides")}}function kt({includeFragments:l=!1}={}){let g=d.wrapper.querySelectorAll(Pt),E=d.wrapper.querySelectorAll(Ie),k={left:s>0,right:s<g.length-1,up:r>0,down:r<E.length-1};if(u.loop&&(g.length>1&&(k.left=!0,k.right=!0),E.length>1&&(k.up=!0,k.down=!0)),g.length>1&&u.navigationMode==="linear"&&(k.right=k.right||k.down,k.left=k.left||k.up),l===!0){let P=_.availableRoutes();k.left=k.left||P.prev,k.up=k.up||P.prev,k.down=k.down||P.next,k.right=k.right||P.next}if(u.rtl){let P=k.left;k.left=k.right,k.right=P}return k}function fe(l=c){let g=At(),E=0;t:for(let k=0;k<g.length;k++){let P=g[k],U=P.querySelectorAll("section");for(let et=0;et<U.length;et++){if(U[et]===l)break t;U[et].dataset.visibility!=="uncounted"&&E++}if(P===l)break;P.classList.contains("stack")===!1&&P.dataset.visibility!=="uncounted"&&E++}return E}function en(){let l=ke(),g=fe();if(c){let E=c.querySelectorAll(".fragment");if(E.length>0){let k=.9;g+=c.querySelectorAll(".fragment.visible").length/E.length*k}}return Math.min(g/(l-1),1)}function ve(l){let g,E=s,k=r;if(l){let P=_t(l),U=P?l.parentNode:l,et=At();E=Math.max(et.indexOf(U),0),k=void 0,P&&(k=Math.max(D(l.parentNode,"section").indexOf(l),0))}if(!l&&c&&c.querySelectorAll(".fragment").length>0){let P=c.querySelector(".current-fragment");g=P&&P.hasAttribute("data-fragment-index")?parseInt(P.getAttribute("data-fragment-index"),10):c.querySelectorAll(".fragment.visible").length-1}return{h:E,v:k,f:g}}function Zt(){return D(d.wrapper,Nt+':not(.stack):not([data-visibility="uncounted"])')}function At(){return D(d.wrapper,Pt)}function be(){return D(d.wrapper,".slides>section>section")}function nn(){return D(d.wrapper,Pt+".stack")}function ye(){return At().length>1}function we(){return be().length>1}function sn(){return Zt().map(l=>{let g={};for(let E=0;E<l.attributes.length;E++){let k=l.attributes[E];g[k.name]=k.value}return g})}function ke(){return Zt().length}function xe(l,g){let E=At()[l],k=E&&E.querySelectorAll("section");return k&&k.length&&typeof g=="number"?k?k[g]:void 0:E}function an(l,g){let E=typeof l=="number"?xe(l,g):l;if(E)return E.slideBackgroundElement}function Se(){let l=ve();return{indexh:l.h,indexv:l.v,indexf:l.f,paused:$t(),overview:F.isActive()}}function rn(l){if(typeof l=="object"){bt(zt(l.indexh),zt(l.indexv),zt(l.indexf));let g=zt(l.paused),E=zt(l.overview);typeof g=="boolean"&&g!==$t()&&ue(g),typeof E=="boolean"&&E!==F.isActive()&&F.toggle(E)}}function Mt(){if(Ft(),c&&u.autoSlide!==!1){let l=c.querySelector(".current-fragment");l||(l=c.querySelector(".fragment"));let g=l?l.getAttribute("data-autoslide"):null,E=c.parentNode?c.parentNode.getAttribute("data-autoslide"):null,k=c.getAttribute("data-autoslide");g?Y=parseInt(g,10):k?Y=parseInt(k,10):E?Y=parseInt(E,10):(Y=u.autoSlide,c.querySelectorAll(".fragment").length===0&&D(c,"video, audio").forEach(P=>{P.hasAttribute("data-autoplay")&&Y&&1e3*P.duration/P.playbackRate>Y&&(Y=1e3*P.duration/P.playbackRate+1e3)})),!Y||it||$t()||F.isActive()||Xt()&&!_.availableRoutes().next&&u.loop!==!0||(ot=setTimeout(()=>{typeof u.autoSlideMethod=="function"?u.autoSlideMethod():ee(),Mt()},Y),ct=Date.now()),p&&p.setPlaying(ot!==-1)}}function Ft(){clearTimeout(ot),ot=-1}function Ut(){Y&&!it&&(it=!0,K({type:"autoslidepaused"}),clearTimeout(ot),p&&p.setPlaying(!1))}function Bt(){Y&&it&&(it=!1,K({type:"autoslideresumed"}),Mt())}function jt({skipFragments:l=!1}={}){z.hasNavigatedHorizontally=!0,u.rtl?(F.isActive()||l||_.next()===!1)&&kt().left&&bt(s+1,u.navigationMode==="grid"?r:void 0):(F.isActive()||l||_.prev()===!1)&&kt().left&&bt(s-1,u.navigationMode==="grid"?r:void 0)}function Qt({skipFragments:l=!1}={}){z.hasNavigatedHorizontally=!0,u.rtl?(F.isActive()||l||_.prev()===!1)&&kt().right&&bt(s-1,u.navigationMode==="grid"?r:void 0):(F.isActive()||l||_.next()===!1)&&kt().right&&bt(s+1,u.navigationMode==="grid"?r:void 0)}function Gt({skipFragments:l=!1}={}){(F.isActive()||l||_.prev()===!1)&&kt().up&&bt(s,r-1)}function te({skipFragments:l=!1}={}){z.hasNavigatedVertically=!0,(F.isActive()||l||_.next()===!1)&&kt().down&&bt(s,r+1)}function Ee({skipFragments:l=!1}={}){if(l||_.prev()===!1)if(kt().up)Gt({skipFragments:l});else{let g;if(g=u.rtl?D(d.wrapper,Pt+".future").pop():D(d.wrapper,Pt+".past").pop(),g&&g.classList.contains("stack")){let E=g.querySelectorAll("section").length-1||void 0;bt(s-1,E)}else jt({skipFragments:l})}}function ee({skipFragments:l=!1}={}){if(z.hasNavigatedHorizontally=!0,z.hasNavigatedVertically=!0,l||_.next()===!1){let g=kt();g.down&&g.right&&u.loop&&le()&&(g.down=!1),g.down?te({skipFragments:l}):u.rtl?jt({skipFragments:l}):Qt({skipFragments:l})}}function on(l){u.autoSlideStoppable&&Ut()}function Ae(l){let g=l.data;if(typeof g=="string"&&g.charAt(0)==="{"&&g.charAt(g.length-1)==="}"&&(g=JSON.parse(g),g.method&&typeof e[g.method]=="function"))if(bn.test(g.method)===!1){const E=e[g.method].apply(e,g.args);ht("callback",{method:g.method,result:E})}else console.warn('reveal.js: "'+g.method+'" is is blacklisted from the postMessage API')}function Re(l){$==="running"&&/section/gi.test(l.target.nodeName)&&($="idle",K({type:"slidetransitionend",data:{indexh:s,indexv:r,previousSlide:h,currentSlide:c}}))}function Le(l){const g=st(l.target,'a[href^="#"]');if(g){const E=g.getAttribute("href"),k=nt.getIndicesFromHash(E);k&&(e.slide(k.h,k.v,k.f),l.preventDefault())}}function Ce(l){mt()}function Te(l){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function Wt(l){(document.fullscreenElement||document.webkitFullscreenElement)===d.wrapper&&(l.stopImmediatePropagation(),setTimeout(()=>{e.layout(),e.focus.focus()},1))}function Pe(l){if(l.currentTarget&&l.currentTarget.hasAttribute("href")){let g=l.currentTarget.getAttribute("href");g&&(Ct(g),l.preventDefault())}}function ln(l){Xt()&&u.loop===!1?(bt(0,0),Bt()):it?Bt():Ut()}const Ne={VERSION:Be,initialize:qt,configure:w,destroy:O,sync:he,syncSlide:Ge,syncFragments:_.sync.bind(_),slide:bt,left:jt,right:Qt,up:Gt,down:te,prev:Ee,next:ee,navigateLeft:jt,navigateRight:Qt,navigateUp:Gt,navigateDown:te,navigatePrev:Ee,navigateNext:ee,navigateFragment:_.goto.bind(_),prevFragment:_.prev.bind(_),nextFragment:_.next.bind(_),on:M,off:tt,addEventListener:M,removeEventListener:tt,layout:mt,shuffle:Yt,availableRoutes:kt,availableFragments:_.availableRoutes.bind(_),toggleHelp:pt,toggleOverview:F.toggle.bind(F),togglePause:ue,toggleAutoSlide:Ze,toggleJumpToSlide:Je,isFirstSlide:de,isLastSlide:Xt,isLastVerticalSlide:le,isVerticalSlide:_t,isPaused:$t,isAutoSliding:Qe,isSpeakerNotes:dt.isSpeakerNotesWindow.bind(dt),isOverview:F.isActive.bind(F),isFocused:Z.isFocused.bind(Z),isPrintingPDF:at.isPrintingPDF.bind(at),isReady:()=>I,loadSlide:X.load.bind(X),unloadSlide:X.unload.bind(X),showPreview:Ct,hidePreview:V,addEventListeners:C,removeEventListeners:N,dispatchEvent:K,getState:Se,setState:rn,getProgress:en,getIndices:ve,getSlidesAttributes:sn,getSlidePastCount:fe,getTotalSlides:ke,getSlide:xe,getPreviousSlide:()=>h,getCurrentSlide:()=>c,getSlideBackground:an,getSlideNotes:dt.getSlideNotes.bind(dt),getSlides:Zt,getHorizontalSlides:At,getVerticalSlides:be,hasHorizontalSlides:ye,hasVerticalSlides:we,hasNavigatedHorizontally:()=>z.hasNavigatedHorizontally,hasNavigatedVertically:()=>z.hasNavigatedVertically,addKeyBinding:W.addKeyBinding.bind(W),removeKeyBinding:W.removeKeyBinding.bind(W),triggerKey:W.triggerKey.bind(W),registerKeyboardShortcut:W.registerKeyboardShortcut.bind(W),getComputedSlideSize:Ht,getScale:()=>L,getConfig:()=>u,getQueryHash:Me,getSlidePath:nt.getHash.bind(nt),getRevealElement:()=>f,getSlidesElement:()=>d.slides,getViewportElement:()=>d.viewport,getBackgroundsElement:()=>j.element,registerPlugin:lt.registerPlugin.bind(lt),hasPlugin:lt.hasPlugin.bind(lt),getPlugin:lt.getPlugin.bind(lt),getPlugins:lt.getRegisteredPlugins.bind(lt)};return It(e,{...Ne,announceStatus:a,getStatusText:o,print:at,focus:Z,progress:S,controls:b,location:nt,overview:F,fragments:_,slideContent:X,slideNumber:J,onUserInput:on,closeOverlay:V,updateSlidesVisibility:Jt,layoutSlideContents:Et,transformSlides:vt,cueAutoSlide:Mt,cancelAutoSlide:Ft}),Ne}let Rt=je,qe=[];Rt.initialize=f=>(Object.assign(Rt,new je(document.querySelector(".reveal"),f)),qe.map(t=>t(Rt)),Rt.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(f=>{Rt[f]=(...t)=>{qe.push(e=>e[f].call(null,...t))}}),Rt.isReady=()=>!1,Rt.VERSION=Be;var We=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ke(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Ve={exports:{}};(function(f,t){(function(e,s){f.exports=s()})(We,function(){function e(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let s={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const r=/[&<>"']/,h=/[&<>"']/g,c=/[<>"']|&(?!#?\w+;)/,p=/[<>"']|&(?!#?\w+;)/g,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},I=T=>u[T];function z(T,i){if(i){if(r.test(T))return T.replace(h,I)}else if(c.test(T))return T.replace(p,I);return T}const A=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function L(T){return T.replace(A,(i,n)=>(n=n.toLowerCase())==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):"")}const y=/(^|[^\[])\^/g;function d(T,i){T=T.source||T,i=i||"";const n={replace:(a,o)=>(o=(o=o.source||o).replace(y,"$1"),T=T.replace(a,o),n),getRegex:()=>new RegExp(T,i)};return n}const $=/[^\w:]/g,Y=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ot(T,i,n){if(T){let a;try{a=decodeURIComponent(L(n)).replace($,"").toLowerCase()}catch{return null}if(a.indexOf("javascript:")===0||a.indexOf("vbscript:")===0||a.indexOf("data:")===0)return null}i&&!Y.test(n)&&(n=function(a,o){ct[" "+a]||(it.test(a)?ct[" "+a]=a+"/":ct[" "+a]=_(a,"/",!0)),a=ct[" "+a];const m=a.indexOf(":")===-1;return o.substring(0,2)==="//"?m?o:a.replace(X,"$1")+o:o.charAt(0)==="/"?m?o:a.replace(J,"$1")+o:a+o}(i,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const ct={},it=/^[^:]+:\/*[^/]*$/,X=/^([^:]+:)[\s\S]*$/,J=/^([^:]+:\/*[^/]*)[\s\S]*$/,B={exec:function(){}};function Q(T){let i,n,a=1;for(;a<arguments.length;a++)for(n in i=arguments[a],i)Object.prototype.hasOwnProperty.call(i,n)&&(T[n]=i[n]);return T}function j(T,i){const n=T.replace(/\|/g,(o,m,v)=>{let x=!1,w=m;for(;--w>=0&&v[w]==="\\";)x=!x;return x?"|":" |"}).split(/ \|/);let a=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>i)n.splice(i);else for(;n.length<i;)n.push("");for(;a<n.length;a++)n[a]=n[a].trim().replace(/\\\|/g,"|");return n}function _(T,i,n){const a=T.length;if(a===0)return"";let o=0;for(;o<a;){const m=T.charAt(a-o-1);if(m!==i||n){if(m===i||!n)break;o++}else o++}return T.substr(0,a-o)}function F(T){T&&T.sanitize&&!T.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function W(T,i){if(i<1)return"";let n="";for(;i>1;)1&i&&(n+=T),i>>=1,T+=T;return n+T}function nt(T,i,n,a){const o=i.href,m=i.title?z(i.title):null,v=T[1].replace(/\\([\[\]])/g,"$1");if(T[0].charAt(0)!=="!"){a.state.inLink=!0;const x={type:"link",raw:n,href:o,title:m,text:v,tokens:a.inlineTokens(v,[])};return a.state.inLink=!1,x}return{type:"image",raw:n,href:o,title:m,text:z(v)}}class b{constructor(i){this.options=i||s}space(i){const n=this.rules.block.newline.exec(i);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(i){const n=this.rules.block.code.exec(i);if(n){const a=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?a:_(a,`
`)}}}fences(i){const n=this.rules.block.fences.exec(i);if(n){const a=n[0],o=function(m,v){const x=m.match(/^(\s+)(?:```)/);if(x===null)return v;const w=x[1];return v.split(`
`).map(C=>{const N=C.match(/^\s+/);if(N===null)return C;const[O]=N;return O.length>=w.length?C.slice(w.length):C}).join(`
`)}(a,n[3]||"");return{type:"code",raw:a,lang:n[2]?n[2].trim():n[2],text:o}}}heading(i){const n=this.rules.block.heading.exec(i);if(n){let a=n[2].trim();if(/#$/.test(a)){const m=_(a,"#");this.options.pedantic?a=m.trim():m&&!/ $/.test(m)||(a=m.trim())}const o={type:"heading",raw:n[0],depth:n[1].length,text:a,tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}hr(i){const n=this.rules.block.hr.exec(i);if(n)return{type:"hr",raw:n[0]}}blockquote(i){const n=this.rules.block.blockquote.exec(i);if(n){const a=n[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(a,[]),text:a}}}list(i){let n=this.rules.block.list.exec(i);if(n){let a,o,m,v,x,w,C,N,O,M,tt,vt,K=n[1].trim();const ht=K.length>1,H={type:"list",raw:"",ordered:ht,start:ht?+K.slice(0,-1):"",loose:!1,items:[]};K=ht?`\\d{1,9}\\${K.slice(-1)}`:`\\${K}`,this.options.pedantic&&(K=ht?K:"[*+-]");const wt=new RegExp(`^( {0,3}${K})((?: [^\\n]*)?(?:\\n|$))`);for(;i&&(vt=!1,n=wt.exec(i))&&!this.rules.block.hr.test(i);){if(a=n[0],i=i.substring(a.length),N=n[2].split(`
`,1)[0],O=i.split(`
`,1)[0],this.options.pedantic?(v=2,tt=N.trimLeft()):(v=n[2].search(/[^ ]/),v=v>4?1:v,tt=N.slice(v),v+=n[1].length),w=!1,!N&&/^ *$/.test(O)&&(a+=O+`
`,i=i.substring(O.length+1),vt=!0),!vt){const pt=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;i&&(M=i.split(`
`,1)[0],N=M,this.options.pedantic&&(N=N.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!pt.test(N));){if(N.search(/[^ ]/)>=v||!N.trim())tt+=`
`+N.slice(v);else{if(w)break;tt+=`
`+N}w||N.trim()||(w=!0),a+=M+`
`,i=i.substring(M.length+1)}}H.loose||(C?H.loose=!0:/\n *\n *$/.test(a)&&(C=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(tt),o&&(m=o[0]!=="[ ] ",tt=tt.replace(/^\[[ xX]\] +/,""))),H.items.push({type:"list_item",raw:a,task:!!o,checked:m,loose:!1,text:tt}),H.raw+=a}H.items[H.items.length-1].raw=a.trimRight(),H.items[H.items.length-1].text=tt.trimRight(),H.raw=H.raw.trimRight();const Ct=H.items.length;for(x=0;x<Ct;x++){this.lexer.state.top=!1,H.items[x].tokens=this.lexer.blockTokens(H.items[x].text,[]);const pt=H.items[x].tokens.filter(V=>V.type==="space"),St=pt.every(V=>{const mt=V.raw.split("");let Et=0;for(const Ht of mt)if(Ht===`
`&&(Et+=1),Et>1)return!0;return!1});!H.loose&&pt.length&&St&&(H.loose=!0,H.items[x].loose=!0)}return H}}html(i){const n=this.rules.block.html.exec(i);if(n){const a={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(a.type="paragraph",a.text=this.options.sanitizer?this.options.sanitizer(n[0]):z(n[0]),a.tokens=[],this.lexer.inline(a.text,a.tokens)),a}}def(i){const n=this.rules.block.def.exec(i);if(n)return n[3]&&(n[3]=n[3].substring(1,n[3].length-1)),{type:"def",tag:n[1].toLowerCase().replace(/\s+/g," "),raw:n[0],href:n[2],title:n[3]}}table(i){const n=this.rules.block.table.exec(i);if(n){const a={type:"table",header:j(n[1]).map(o=>({text:o})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(a.header.length===a.align.length){a.raw=n[0];let o,m,v,x,w=a.align.length;for(o=0;o<w;o++)/^ *-+: *$/.test(a.align[o])?a.align[o]="right":/^ *:-+: *$/.test(a.align[o])?a.align[o]="center":/^ *:-+ *$/.test(a.align[o])?a.align[o]="left":a.align[o]=null;for(w=a.rows.length,o=0;o<w;o++)a.rows[o]=j(a.rows[o],a.header.length).map(C=>({text:C}));for(w=a.header.length,m=0;m<w;m++)a.header[m].tokens=[],this.lexer.inlineTokens(a.header[m].text,a.header[m].tokens);for(w=a.rows.length,m=0;m<w;m++)for(x=a.rows[m],v=0;v<x.length;v++)x[v].tokens=[],this.lexer.inlineTokens(x[v].text,x[v].tokens);return a}}}lheading(i){const n=this.rules.block.lheading.exec(i);if(n){const a={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}paragraph(i){const n=this.rules.block.paragraph.exec(i);if(n){const a={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}text(i){const n=this.rules.block.text.exec(i);if(n){const a={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}escape(i){const n=this.rules.inline.escape.exec(i);if(n)return{type:"escape",raw:n[0],text:z(n[1])}}tag(i){const n=this.rules.inline.tag.exec(i);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):z(n[0]):n[0]}}link(i){const n=this.rules.inline.link.exec(i);if(n){const a=n[2].trim();if(!this.options.pedantic&&/^</.test(a)){if(!/>$/.test(a))return;const v=_(a.slice(0,-1),"\\");if((a.length-v.length)%2==0)return}else{const v=function(x,w){if(x.indexOf(w[1])===-1)return-1;const C=x.length;let N=0,O=0;for(;O<C;O++)if(x[O]==="\\")O++;else if(x[O]===w[0])N++;else if(x[O]===w[1]&&(N--,N<0))return O;return-1}(n[2],"()");if(v>-1){const x=(n[0].indexOf("!")===0?5:4)+n[1].length+v;n[2]=n[2].substring(0,v),n[0]=n[0].substring(0,x).trim(),n[3]=""}}let o=n[2],m="";if(this.options.pedantic){const v=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);v&&(o=v[1],m=v[3])}else m=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(o=this.options.pedantic&&!/>$/.test(a)?o.slice(1):o.slice(1,-1)),nt(n,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:m&&m.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(i,n){let a;if((a=this.rules.inline.reflink.exec(i))||(a=this.rules.inline.nolink.exec(i))){let o=(a[2]||a[1]).replace(/\s+/g," ");if(o=n[o.toLowerCase()],!o||!o.href){const m=a[0].charAt(0);return{type:"text",raw:m,text:m}}return nt(a,o,a[0],this.lexer)}}emStrong(i,n,a=""){let o=this.rules.inline.emStrong.lDelim.exec(i);if(!o||o[3]&&a.match(/[\p{L}\p{N}]/u))return;const m=o[1]||o[2]||"";if(!m||m&&(a===""||this.rules.inline.punctuation.exec(a))){const v=o[0].length-1;let x,w,C=v,N=0;const O=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(O.lastIndex=0,n=n.slice(-1*i.length+v);(o=O.exec(n))!=null;){if(x=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!x)continue;if(w=x.length,o[3]||o[4]){C+=w;continue}if((o[5]||o[6])&&v%3&&!((v+w)%3)){N+=w;continue}if(C-=w,C>0)continue;if(w=Math.min(w,w+C+N),Math.min(v,w)%2){const tt=i.slice(1,v+o.index+w);return{type:"em",raw:i.slice(0,v+o.index+w+1),text:tt,tokens:this.lexer.inlineTokens(tt,[])}}const M=i.slice(2,v+o.index+w-1);return{type:"strong",raw:i.slice(0,v+o.index+w+1),text:M,tokens:this.lexer.inlineTokens(M,[])}}}}codespan(i){const n=this.rules.inline.code.exec(i);if(n){let a=n[2].replace(/\n/g," ");const o=/[^ ]/.test(a),m=/^ /.test(a)&&/ $/.test(a);return o&&m&&(a=a.substring(1,a.length-1)),a=z(a,!0),{type:"codespan",raw:n[0],text:a}}}br(i){const n=this.rules.inline.br.exec(i);if(n)return{type:"br",raw:n[0]}}del(i){const n=this.rules.inline.del.exec(i);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(i,n){const a=this.rules.inline.autolink.exec(i);if(a){let o,m;return a[2]==="@"?(o=z(this.options.mangle?n(a[1]):a[1]),m="mailto:"+o):(o=z(a[1]),m=o),{type:"link",raw:a[0],text:o,href:m,tokens:[{type:"text",raw:o,text:o}]}}}url(i,n){let a;if(a=this.rules.inline.url.exec(i)){let o,m;if(a[2]==="@")o=z(this.options.mangle?n(a[0]):a[0]),m="mailto:"+o;else{let v;do v=a[0],a[0]=this.rules.inline._backpedal.exec(a[0])[0];while(v!==a[0]);o=z(a[0]),m=a[1]==="www."?"http://"+o:o}return{type:"link",raw:a[0],text:o,href:m,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(i,n){const a=this.rules.inline.text.exec(i);if(a){let o;return o=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):z(a[0]):a[0]:z(this.options.smartypants?n(a[0]):a[0]),{type:"text",raw:a[0],text:o}}}}const S={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:B,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};S.def=d(S.def).replace("label",S._label).replace("title",S._title).getRegex(),S.bullet=/(?:[*+-]|\d{1,9}[.)])/,S.listItemStart=d(/^( *)(bull) */).replace("bull",S.bullet).getRegex(),S.list=d(S.list).replace(/bull/g,S.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+S.def.source+")").getRegex(),S._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",S._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,S.html=d(S.html,"i").replace("comment",S._comment).replace("tag",S._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),S.paragraph=d(S._paragraph).replace("hr",S.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S._tag).getRegex(),S.blockquote=d(S.blockquote).replace("paragraph",S.paragraph).getRegex(),S.normal=Q({},S),S.gfm=Q({},S.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),S.gfm.table=d(S.gfm.table).replace("hr",S.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S._tag).getRegex(),S.gfm.paragraph=d(S._paragraph).replace("hr",S.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",S.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S._tag).getRegex(),S.pedantic=Q({},S.normal,{html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",S._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:B,paragraph:d(S.normal._paragraph).replace("hr",S.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",S.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const R={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:B,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:B,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function lt(T){return T.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function at(T){let i,n,a="";const o=T.length;for(i=0;i<o;i++)n=T.charCodeAt(i),Math.random()>.5&&(n="x"+n.toString(16)),a+="&#"+n+";";return a}R._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",R.punctuation=d(R.punctuation).replace(/punctuation/g,R._punctuation).getRegex(),R.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,R.escapedEmSt=/\\\*|\\_/g,R._comment=d(S._comment).replace("(?:-->|$)","-->").getRegex(),R.emStrong.lDelim=d(R.emStrong.lDelim).replace(/punct/g,R._punctuation).getRegex(),R.emStrong.rDelimAst=d(R.emStrong.rDelimAst,"g").replace(/punct/g,R._punctuation).getRegex(),R.emStrong.rDelimUnd=d(R.emStrong.rDelimUnd,"g").replace(/punct/g,R._punctuation).getRegex(),R._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,R._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,R._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,R.autolink=d(R.autolink).replace("scheme",R._scheme).replace("email",R._email).getRegex(),R._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,R.tag=d(R.tag).replace("comment",R._comment).replace("attribute",R._attribute).getRegex(),R._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,R._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,R._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,R.link=d(R.link).replace("label",R._label).replace("href",R._href).replace("title",R._title).getRegex(),R.reflink=d(R.reflink).replace("label",R._label).replace("ref",S._label).getRegex(),R.nolink=d(R.nolink).replace("ref",S._label).getRegex(),R.reflinkSearch=d(R.reflinkSearch,"g").replace("reflink",R.reflink).replace("nolink",R.nolink).getRegex(),R.normal=Q({},R),R.pedantic=Q({},R.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",R._label).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",R._label).getRegex()}),R.gfm=Q({},R.normal,{escape:d(R.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),R.gfm.url=d(R.gfm.url,"i").replace("email",R.gfm._extended_email).getRegex(),R.breaks=Q({},R.gfm,{br:d(R.br).replace("{2,}","*").getRegex(),text:d(R.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class Z{constructor(i){this.tokens=[],this.tokens.links=Object.create(null),this.options=i||s,this.options.tokenizer=this.options.tokenizer||new b,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:S.normal,inline:R.normal};this.options.pedantic?(n.block=S.pedantic,n.inline=R.pedantic):this.options.gfm&&(n.block=S.gfm,this.options.breaks?n.inline=R.breaks:n.inline=R.gfm),this.tokenizer.rules=n}static get rules(){return{block:S,inline:R}}static lex(i,n){return new Z(n).lex(i)}static lexInline(i,n){return new Z(n).inlineTokens(i)}lex(i){let n;for(i=i.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(i,this.tokens);n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(i,n=[]){let a,o,m,v;for(this.options.pedantic&&(i=i.replace(/^ +$/gm,""));i;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(x=>!!(a=x.call({lexer:this},i,n))&&(i=i.substring(a.raw.length),n.push(a),!0))))if(a=this.tokenizer.space(i))i=i.substring(a.raw.length),a.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(a);else if(a=this.tokenizer.code(i))i=i.substring(a.raw.length),o=n[n.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?n.push(a):(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(a=this.tokenizer.fences(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.heading(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.hr(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.blockquote(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.list(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.html(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.def(i))i=i.substring(a.raw.length),o=n[n.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title}):(o.raw+=`
`+a.raw,o.text+=`
`+a.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(a=this.tokenizer.table(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.lheading(i))i=i.substring(a.raw.length),n.push(a);else{if(m=i,this.options.extensions&&this.options.extensions.startBlock){let x=1/0;const w=i.slice(1);let C;this.options.extensions.startBlock.forEach(function(N){C=N.call({lexer:this},w),typeof C=="number"&&C>=0&&(x=Math.min(x,C))}),x<1/0&&x>=0&&(m=i.substring(0,x+1))}if(this.state.top&&(a=this.tokenizer.paragraph(m)))o=n[n.length-1],v&&o.type==="paragraph"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(a),v=m.length!==i.length,i=i.substring(a.raw.length);else if(a=this.tokenizer.text(i))i=i.substring(a.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(a);else if(i){const x="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(x);break}throw new Error(x)}}return this.state.top=!0,n}inline(i,n){this.inlineQueue.push({src:i,tokens:n})}inlineTokens(i,n=[]){let a,o,m,v,x,w,C=i;if(this.tokens.links){const N=Object.keys(this.tokens.links);if(N.length>0)for(;(v=this.tokenizer.rules.inline.reflinkSearch.exec(C))!=null;)N.includes(v[0].slice(v[0].lastIndexOf("[")+1,-1))&&(C=C.slice(0,v.index)+"["+W("a",v[0].length-2)+"]"+C.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(v=this.tokenizer.rules.inline.blockSkip.exec(C))!=null;)C=C.slice(0,v.index)+"["+W("a",v[0].length-2)+"]"+C.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(v=this.tokenizer.rules.inline.escapedEmSt.exec(C))!=null;)C=C.slice(0,v.index)+"++"+C.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;i;)if(x||(w=""),x=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(N=>!!(a=N.call({lexer:this},i,n))&&(i=i.substring(a.raw.length),n.push(a),!0))))if(a=this.tokenizer.escape(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.tag(i))i=i.substring(a.raw.length),o=n[n.length-1],o&&a.type==="text"&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):n.push(a);else if(a=this.tokenizer.link(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.reflink(i,this.tokens.links))i=i.substring(a.raw.length),o=n[n.length-1],o&&a.type==="text"&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):n.push(a);else if(a=this.tokenizer.emStrong(i,C,w))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.codespan(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.br(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.del(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.autolink(i,at))i=i.substring(a.raw.length),n.push(a);else if(this.state.inLink||!(a=this.tokenizer.url(i,at))){if(m=i,this.options.extensions&&this.options.extensions.startInline){let N=1/0;const O=i.slice(1);let M;this.options.extensions.startInline.forEach(function(tt){M=tt.call({lexer:this},O),typeof M=="number"&&M>=0&&(N=Math.min(N,M))}),N<1/0&&N>=0&&(m=i.substring(0,N+1))}if(a=this.tokenizer.inlineText(m,lt))i=i.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(w=a.raw.slice(-1)),x=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):n.push(a);else if(i){const N="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(N);break}throw new Error(N)}}else i=i.substring(a.raw.length),n.push(a);return n}}class rt{constructor(i){this.options=i||s}code(i,n,a){const o=(n||"").match(/\S*/)[0];if(this.options.highlight){const m=this.options.highlight(i,o);m!=null&&m!==i&&(a=!0,i=m)}return i=i.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+z(o,!0)+'">'+(a?i:z(i,!0))+`</code></pre>
`:"<pre><code>"+(a?i:z(i,!0))+`</code></pre>
`}blockquote(i){return`<blockquote>
`+i+`</blockquote>
`}html(i){return i}heading(i,n,a,o){return this.options.headerIds?"<h"+n+' id="'+this.options.headerPrefix+o.slug(a)+'">'+i+"</h"+n+`>
`:"<h"+n+">"+i+"</h"+n+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(i,n,a){const o=n?"ol":"ul";return"<"+o+(n&&a!==1?' start="'+a+'"':"")+`>
`+i+"</"+o+`>
`}listitem(i){return"<li>"+i+`</li>
`}checkbox(i){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(i){return"<p>"+i+`</p>
`}table(i,n){return n&&(n="<tbody>"+n+"</tbody>"),`<table>
<thead>
`+i+`</thead>
`+n+`</table>
`}tablerow(i){return`<tr>
`+i+`</tr>
`}tablecell(i,n){const a=n.header?"th":"td";return(n.align?"<"+a+' align="'+n.align+'">':"<"+a+">")+i+"</"+a+`>
`}strong(i){return"<strong>"+i+"</strong>"}em(i){return"<em>"+i+"</em>"}codespan(i){return"<code>"+i+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(i){return"<del>"+i+"</del>"}link(i,n,a){if((i=ot(this.options.sanitize,this.options.baseUrl,i))===null)return a;let o='<a href="'+z(i)+'"';return n&&(o+=' title="'+n+'"'),o+=">"+a+"</a>",o}image(i,n,a){if((i=ot(this.options.sanitize,this.options.baseUrl,i))===null)return a;let o='<img src="'+i+'" alt="'+a+'"';return n&&(o+=' title="'+n+'"'),o+=this.options.xhtml?"/>":">",o}text(i){return i}}class dt{strong(i){return i}em(i){return i}codespan(i){return i}del(i){return i}html(i){return i}text(i){return i}link(i,n,a){return""+a}image(i,n,a){return""+a}br(){return""}}class qt{constructor(){this.seen={}}serialize(i){return i.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(i,n){let a=i,o=0;if(this.seen.hasOwnProperty(a)){o=this.seen[i];do o++,a=i+"-"+o;while(this.seen.hasOwnProperty(a))}return n||(this.seen[i]=o,this.seen[a]=0),a}slug(i,n={}){const a=this.serialize(i);return this.getNextSafeSlug(a,n.dryrun)}}class ft{constructor(i){this.options=i||s,this.options.renderer=this.options.renderer||new rt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new dt,this.slugger=new qt}static parse(i,n){return new ft(n).parse(i)}static parseInline(i,n){return new ft(n).parseInline(i)}parse(i,n=!0){let a,o,m,v,x,w,C,N,O,M,tt,vt,K,ht,H,wt,Ct,pt,St,V="";const mt=i.length;for(a=0;a<mt;a++)if(M=i[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[M.type]&&(St=this.options.extensions.renderers[M.type].call({parser:this},M),St!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(M.type)))V+=St||"";else switch(M.type){case"space":continue;case"hr":V+=this.renderer.hr();continue;case"heading":V+=this.renderer.heading(this.parseInline(M.tokens),M.depth,L(this.parseInline(M.tokens,this.textRenderer)),this.slugger);continue;case"code":V+=this.renderer.code(M.text,M.lang,M.escaped);continue;case"table":for(N="",C="",v=M.header.length,o=0;o<v;o++)C+=this.renderer.tablecell(this.parseInline(M.header[o].tokens),{header:!0,align:M.align[o]});for(N+=this.renderer.tablerow(C),O="",v=M.rows.length,o=0;o<v;o++){for(w=M.rows[o],C="",x=w.length,m=0;m<x;m++)C+=this.renderer.tablecell(this.parseInline(w[m].tokens),{header:!1,align:M.align[m]});O+=this.renderer.tablerow(C)}V+=this.renderer.table(N,O);continue;case"blockquote":O=this.parse(M.tokens),V+=this.renderer.blockquote(O);continue;case"list":for(tt=M.ordered,vt=M.start,K=M.loose,v=M.items.length,O="",o=0;o<v;o++)H=M.items[o],wt=H.checked,Ct=H.task,ht="",H.task&&(pt=this.renderer.checkbox(wt),K?H.tokens.length>0&&H.tokens[0].type==="paragraph"?(H.tokens[0].text=pt+" "+H.tokens[0].text,H.tokens[0].tokens&&H.tokens[0].tokens.length>0&&H.tokens[0].tokens[0].type==="text"&&(H.tokens[0].tokens[0].text=pt+" "+H.tokens[0].tokens[0].text)):H.tokens.unshift({type:"text",text:pt}):ht+=pt),ht+=this.parse(H.tokens,K),O+=this.renderer.listitem(ht,Ct,wt);V+=this.renderer.list(O,tt,vt);continue;case"html":V+=this.renderer.html(M.text);continue;case"paragraph":V+=this.renderer.paragraph(this.parseInline(M.tokens));continue;case"text":for(O=M.tokens?this.parseInline(M.tokens):M.text;a+1<mt&&i[a+1].type==="text";)M=i[++a],O+=`
`+(M.tokens?this.parseInline(M.tokens):M.text);V+=n?this.renderer.paragraph(O):O;continue;default:{const Et='Token with "'+M.type+'" type was not found.';if(this.options.silent)return void console.error(Et);throw new Error(Et)}}return V}parseInline(i,n){n=n||this.renderer;let a,o,m,v="";const x=i.length;for(a=0;a<x;a++)if(o=i[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(m=this.options.extensions.renderers[o.type].call({parser:this},o),m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)))v+=m||"";else switch(o.type){case"escape":case"text":v+=n.text(o.text);break;case"html":v+=n.html(o.text);break;case"link":v+=n.link(o.href,o.title,this.parseInline(o.tokens,n));break;case"image":v+=n.image(o.href,o.title,o.text);break;case"strong":v+=n.strong(this.parseInline(o.tokens,n));break;case"em":v+=n.em(this.parseInline(o.tokens,n));break;case"codespan":v+=n.codespan(o.text);break;case"br":v+=n.br();break;case"del":v+=n.del(this.parseInline(o.tokens,n));break;default:{const w='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(w);throw new Error(w)}}return v}}function q(T,i,n){if(T==null)throw new Error("marked(): input parameter is undefined or null");if(typeof T!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(T)+", string expected");if(typeof i=="function"&&(n=i,i=null),F(i=Q({},q.defaults,i||{})),n){const a=i.highlight;let o;try{o=Z.lex(T,i)}catch(x){return n(x)}const m=function(x){let w;if(!x)try{i.walkTokens&&q.walkTokens(o,i.walkTokens),w=ft.parse(o,i)}catch(C){x=C}return i.highlight=a,x?n(x):n(null,w)};if(!a||a.length<3||(delete i.highlight,!o.length))return m();let v=0;return q.walkTokens(o,function(x){x.type==="code"&&(v++,setTimeout(()=>{a(x.text,x.lang,function(w,C){if(w)return m(w);C!=null&&C!==x.text&&(x.text=C,x.escaped=!0),v--,v===0&&m()})},0))}),void(v===0&&m())}try{const a=Z.lex(T,i);return i.walkTokens&&q.walkTokens(a,i.walkTokens),ft.parse(a,i)}catch(a){if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,i.silent)return"<p>An error occurred:</p><pre>"+z(a.message+"",!0)+"</pre>";throw a}}return q.options=q.setOptions=function(T){var i;return Q(q.defaults,T),i=q.defaults,s=i,q},q.getDefaults=e,q.defaults=s,q.use=function(...T){const i=Q({},...T),n=q.defaults.extensions||{renderers:{},childTokens:{}};let a;T.forEach(o=>{if(o.extensions&&(a=!0,o.extensions.forEach(m=>{if(!m.name)throw new Error("extension name required");if(m.renderer){const v=n.renderers?n.renderers[m.name]:null;n.renderers[m.name]=v?function(...x){let w=m.renderer.apply(this,x);return w===!1&&(w=v.apply(this,x)),w}:m.renderer}if(m.tokenizer){if(!m.level||m.level!=="block"&&m.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[m.level]?n[m.level].unshift(m.tokenizer):n[m.level]=[m.tokenizer],m.start&&(m.level==="block"?n.startBlock?n.startBlock.push(m.start):n.startBlock=[m.start]:m.level==="inline"&&(n.startInline?n.startInline.push(m.start):n.startInline=[m.start]))}m.childTokens&&(n.childTokens[m.name]=m.childTokens)})),o.renderer){const m=q.defaults.renderer||new rt;for(const v in o.renderer){const x=m[v];m[v]=(...w)=>{let C=o.renderer[v].apply(m,w);return C===!1&&(C=x.apply(m,w)),C}}i.renderer=m}if(o.tokenizer){const m=q.defaults.tokenizer||new b;for(const v in o.tokenizer){const x=m[v];m[v]=(...w)=>{let C=o.tokenizer[v].apply(m,w);return C===!1&&(C=x.apply(m,w)),C}}i.tokenizer=m}if(o.walkTokens){const m=q.defaults.walkTokens;i.walkTokens=function(v){o.walkTokens.call(this,v),m&&m.call(this,v)}}a&&(i.extensions=n),q.setOptions(i)})},q.walkTokens=function(T,i){for(const n of T)switch(i.call(q,n),n.type){case"table":for(const a of n.header)q.walkTokens(a.tokens,i);for(const a of n.rows)for(const o of a)q.walkTokens(o.tokens,i);break;case"list":q.walkTokens(n.items,i);break;default:q.defaults.extensions&&q.defaults.extensions.childTokens&&q.defaults.extensions.childTokens[n.type]?q.defaults.extensions.childTokens[n.type].forEach(function(a){q.walkTokens(n[a],i)}):n.tokens&&q.walkTokens(n.tokens,i)}},q.parseInline=function(T,i){if(T==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof T!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(T)+", string expected");F(i=Q({},q.defaults,i||{}));try{const n=Z.lexInline(T,i);return i.walkTokens&&q.walkTokens(n,i.walkTokens),ft.parseInline(n,i)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,i.silent)return"<p>An error occurred:</p><pre>"+z(n.message+"",!0)+"</pre>";throw n}},q.Parser=ft,q.parser=ft.parse,q.Renderer=rt,q.TextRenderer=dt,q.Lexer=Z,q.lexer=Z.lex,q.Tokenizer=b,q.Slugger=qt,q.parse=q,()=>{let T,i,n=null;function a(){if(n&&!n.closed)n.focus();else{if(n=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),n.marked=q,n.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!n)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const x=i.getConfig().url,w=typeof x=="string"?x:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;T=setInterval(function(){n.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:i.getState(),url:w}),"*")},500),window.addEventListener("message",m)})()}}function o(x){let w=i.getCurrentSlide(),C=w.querySelectorAll("aside.notes"),N=w.querySelector(".current-fragment"),O={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:i.getState()};if(w.hasAttribute("data-notes")&&(O.notes=w.getAttribute("data-notes"),O.whitespace="pre-wrap"),N){let M=N.querySelector("aside.notes");M?(O.notes=M.innerHTML,O.markdown=typeof M.getAttribute("data-markdown")=="string",C=null):N.hasAttribute("data-notes")&&(O.notes=N.getAttribute("data-notes"),O.whitespace="pre-wrap",C=null)}C&&(O.notes=Array.from(C).map(M=>M.innerHTML).join(`
`),O.markdown=C[0]&&typeof C[0].getAttribute("data-markdown")=="string"),n.postMessage(JSON.stringify(O),"*")}function m(x){if(function(w){try{return window.location.origin===w.source.location.origin}catch{return!1}}(x)){let w=JSON.parse(x.data);w&&w.namespace==="reveal-notes"&&w.type==="connected"?(clearInterval(T),v()):w&&w.namespace==="reveal-notes"&&w.type==="call"&&function(C,N,O){let M=i[C].apply(i,N);n.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:M,callId:O}),"*")}(w.methodName,w.arguments,w.callId)}}function v(){i.on("slidechanged",o),i.on("fragmentshown",o),i.on("fragmenthidden",o),i.on("overviewhidden",o),i.on("overviewshown",o),i.on("paused",o),i.on("resumed",o),o()}return{id:"notes",init:function(x){i=x,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?a():window.addEventListener("message",w=>{if(!n&&typeof w.data=="string"){let N;try{N=JSON.parse(w.data)}catch{}N&&N.namespace==="reveal-notes"&&N.type==="heartbeat"&&(C=w.source,n&&!n.closed?n.focus():(n=C,window.addEventListener("message",m),v()))}var C}),i.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){a()}))},open:a}}})})(Ve);var In=Ve.exports;const Dn=Ke(In);var Xe={exports:{}};(function(f,t){(function(e,s){f.exports=s()})(We,function(){/*!
* reveal.js Zoom plugin
*/const e={id:"zoom",init:function(r){r.getRevealElement().addEventListener("mousedown",function(h){var c=/Linux/.test(window.navigator.platform)?"ctrl":"alt",p=(r.getConfig().zoomKey?r.getConfig().zoomKey:c)+"Key",u=r.getConfig().zoomLevel?r.getConfig().zoomLevel:2;h[p]&&!r.isOverview()&&(h.preventDefault(),s.to({x:h.clientX,y:h.clientY,scale:u,pan:!1}))})},destroy:()=>{s.reset()}};var s=function(){var r=1,h=0,c=0,p=-1,u=-1,I="transform"in document.body.style;function z(y,d){var $=L();if(y.width=y.width||1,y.height=y.height||1,y.x-=(window.innerWidth-y.width*d)/2,y.y-=(window.innerHeight-y.height*d)/2,I)if(d===1)document.body.style.transform="";else{var Y=$.x+"px "+$.y+"px",ot="translate("+-y.x+"px,"+-y.y+"px) scale("+d+")";document.body.style.transformOrigin=Y,document.body.style.transform=ot}else d===1?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-($.x+y.x)/d+"px",document.body.style.top=-($.y+y.y)/d+"px",document.body.style.width=100*d+"%",document.body.style.height=100*d+"%",document.body.style.zoom=d);r=d,document.documentElement.classList&&(r!==1?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function A(){var y=.12*window.innerWidth,d=.12*window.innerHeight,$=L();c<d?window.scroll($.x,$.y-14/r*(1-c/d)):c>window.innerHeight-d&&window.scroll($.x,$.y+(1-(window.innerHeight-c)/d)*(14/r)),h<y?window.scroll($.x-14/r*(1-h/y),$.y):h>window.innerWidth-y&&window.scroll($.x+(1-(window.innerWidth-h)/y)*(14/r),$.y)}function L(){return{x:window.scrollX!==void 0?window.scrollX:window.pageXOffset,y:window.scrollY!==void 0?window.scrollY:window.pageYOffset}}return I&&(document.body.style.transition="transform 0.8s ease"),document.addEventListener("keyup",function(y){r!==1&&y.keyCode===27&&s.out()}),document.addEventListener("mousemove",function(y){r!==1&&(h=y.clientX,c=y.clientY)}),{to:function(y){if(r!==1)s.out();else{if(y.x=y.x||0,y.y=y.y||0,y.element){var d=y.element.getBoundingClientRect();y.x=d.left-20,y.y=d.top-20,y.width=d.width+40,y.height=d.height+40}y.width!==void 0&&y.height!==void 0&&(y.scale=Math.max(Math.min(window.innerWidth/y.width,window.innerHeight/y.height),1)),y.scale>1&&(y.x*=y.scale,y.y*=y.scale,z(y,y.scale),y.pan!==!1&&(p=setTimeout(function(){u=setInterval(A,1e3/60)},800)))}},out:function(){clearTimeout(p),clearInterval(u),z({x:0,y:0},1),r=1},magnify:function(y){this.to(y)},reset:function(){this.out()},zoomLevel:function(){return r}}}();/*!
	 * zoom.js 0.3 (modified for use with reveal.js)
	 * http://lab.hakim.se/zoom-js
	 * MIT licensed
	 *
	 * Copyright (C) 2011-2014 Hakim El Hattab, http://hakim.se
	 */return()=>e})})(Xe);var _n=Xe.exports;const On=Ke(_n);const Ye=new Rt;Ye.configure({backgroundTransition:"zoom"});Ye.initialize({hash:!0,slideNumber:!0,plugins:[Dn,On],parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundHorizontal:200,parallaxBackgroundVertical:50});
