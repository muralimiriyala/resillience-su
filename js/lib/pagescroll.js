!function(t){"use strict";var e=!1===t.support.optSelected,i={};function o(o){var s,n,l=i[t(this).prop("stickOnScroll")];for(s=0,n=l.length;s<n;s++)!function(t){var i,o,n,c,r,p;null!==(t=l[s])&&null===t.ele[0].parentNode&&(l[s]=t=null),null!==t&&(i=t.viewport.scrollTop(),o=t.getEleMaxTop(),!1===t.isWindow&&e&&t.ele.stop(),i>o?(n={position:"fixed",top:t.topOffset-t.eleTopMargin},!1===t.isWindow&&(n={position:"absolute",top:i+t.topOffset-t.eleTopMargin}),t.isStick=!0,t.footerElement.length&&(c=t.footerElement.position().top,r=t.ele.outerHeight(),p=n.top+r+t.bottomOffset+t.topOffset,!1===t.isWindow?p=r+t.bottomOffset+t.topOffset:(p=n.top+i+r+t.bottomOffset,c=t.footerElement.offset().top),p>c&&(!0===t.isWindow?n.top=c-(i+r+t.bottomOffset):n.top=i-(p-c))),!0===t.setParentOnStick&&t.eleParent.css("height",t.eleParent.height()),!0===t.setWidthOnStick&&t.ele.css("width",t.ele.css("width")),e&&!1===t.isWindow?t.ele.addClass(t.stickClass).css("position",n.position).animate({top:n.top},150):t.ele.css(n).addClass(t.stickClass),!1===t.wasStickCalled&&(t.wasStickCalled=!0,setTimeout(function(){!0===t.isOnStickSet&&t.onStick.call(t.ele,t.ele),t.ele.trigger("stickOnScroll:onStick",[t.ele])},20))):i<=o&&t.isStick&&(t.ele.css({position:"",top:""}).removeClass(t.stickClass),t.isStick=!1,!0===t.setParentOnStick&&t.eleParent.css("height",""),!0===t.setWidthOnStick&&t.ele.css("width",""),t.wasStickCalled=!1,setTimeout(function(){t.isOnUnStickSet&&t.onUnStick.call(t.ele,t.ele),t.ele.trigger("stickOnScroll:onUnStick",[t.ele])},20)),0===i&&t.setEleTop())}(l[s]);return this}t.fn.onScrollSection=function(e){return this.each(function(){if(t(this).hasClass("hasStickOnScroll"))return this;var s,n,l=t.extend({},{topOffset:0,bottomOffset:5,footerElement:null,viewport:window,stickClass:"stickOnScroll-on",setParentOnStick:!1,setWidthOnStick:!1,onStick:null,onUnStick:null},e),c=1800;function r(){l.setEleTop(),(s=l.viewport.prop("stickOnScroll"))||(s="stickOnScroll"+String(Math.random()).replace(/\D/g,""),l.viewport.prop("stickOnScroll",s),i[s]=[],l.viewport.on("scroll",o)),i[s].push(l),l.viewport.scroll()}return l.isStick=!1,l.ele=t(this).addClass("hasStickOnScroll"),l.eleParent=l.ele.parent(),l.viewport=t(l.viewport),l.eleTop=0,l.eleTopMargin=parseFloat(l.ele.css("margin-top")),l.footerElement=t(l.footerElement),l.isWindow=!0,l.isOnStickSet=t.isFunction(l.onStick),l.isOnUnStickSet=t.isFunction(l.onUnStick),l.wasStickCalled=!1,l.setEleTop=function(){!1===l.isStick&&(l.isWindow?l.eleTop=l.ele.offset().top:l.eleTop=l.ele.position().top)},l.getEleMaxTop=function(){var t=l.eleTop-l.topOffset;return l.isWindow||(t+=l.eleTopMargin),t},!0===l.setParentOnStick&&l.eleParent.is("body")&&(l.setParentOnStick=!1),t.isWindow(l.viewport[0])||(l.isWindow=!1),l.ele.is(":visible")?r():n=setInterval(function(){(l.ele.is(":visible")||!c)&&(clearInterval(n),r()),--c},100),this})}}(jQuery);