+function(t){"use strict";function e(t,e){var n=document.createElement("div").style;for(var i in t)if(void 0!==n[t[i]])return"pfx"==e?t[i]:!0;return!1}function n(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]}}function i(){var t=["transformProperty","WebkitTransform","MozTransform","msTransform"];return!!e(t)}function r(){return"WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix}if(!("ontouchstart"in window||navigator.msMaxTouchPoints))return!1;t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one(t.support.transition.end,function(){n=!0});var r=function(){n||t(i).trigger(t.support.transition.end)};return setTimeout(r,e),this},t(function(){t.support.transition=n(),t.support.csstransforms=i(),t.support.csstransforms3d=r()});var s="touch-carousel",a=function(e,n){return this.$element=t(e),this.$itemsWrapper=this.$element.find(".carousel-inner"),this.$items=this.$element.find(".item"),this.$indicators=this.$element.find(".carousel-indicators"),this.pane_width=this.pane_count=this.current_pane=0,this.onGesture=!1,this.options=n,this._setPaneDimensions(),this.$items.length<=1?this.disable():(this._regTouchGestures(),void t(window).on("orientationchange resize",t.proxy(this._setPaneDimensions,this)))};a.DEFAULTS={interval:!1,toughness:.25},a.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},a.prototype.to=function(t){return t>this.$items.length-1||0>t?void 0:this._showPane(t)},a.prototype.pause=function(t){return t||(this.paused=!0),clearInterval(this.interval),this.interval=null,this},a.prototype._regTouchGestures=function(){this.$itemsWrapper.add(this.$indicators).hammer({drag_lock_to_axis:!0}).on("release dragleft dragright swipeleft swiperight",t.proxy(this._handleGestures,this))},a.prototype._setPaneDimensions=function(){this.pane_width=this.$element.width(),this.pane_count=this.$items.length,this.$itemsWrapper.width(this.pane_width*this.pane_count),this.$items.width(this.pane_width)},a.prototype._showPane=function(t){this.$items.eq(this.current_pane).toggleClass("active"),t>=this.pane_count&&this.pause(),t=Math.max(0,Math.min(t,this.pane_count-1)),this.$items.eq(t).toggleClass("active"),this.current_pane=t;var e=-(100/this.pane_count*this.current_pane);return this._setContainerOffset(e,!0,t),this},a.prototype._setContainerOffset=function(e,n,i){var r=this;if(this.$itemsWrapper.removeClass("animate"),n&&this.$itemsWrapper.addClass("animate"),t.support.csstransforms3d)this.onGesture=!0,this.$itemsWrapper.css("transform","translate3d("+e+"%,0,0) scale3d(1,1,1)");else if(t.support.csstransforms)this.onGesture=!0,this.$itemsWrapper.css("transform","translate("+e+"%,0)");else{var s=this.pane_width*this.pane_count/100*e;this.$itemsWrapper.css("left",s+"px")}t.support.transition?this.$itemsWrapper.one(t.support.transition.end,function(){r.$itemsWrapper.removeClass("animate"),r.onGesture=!1,r._updateIndicators(i)}):(this.$itemsWrapper.removeClass("animate"),this.onGesture=!1,this._updateIndicators(i))},a.prototype.next=function(){return this._showPane(this.current_pane+1)},a.prototype.prev=function(){return this._showPane(this.current_pane-1)},a.prototype._handleGestures=function(t){if(t.gesture.preventDefault(),!this.sliding)switch(this.pause(),t.type){case"dragright":case"dragleft":var e=-(100/this.pane_count)*this.current_pane,n=100/this.pane_width*t.gesture.deltaX/this.pane_count;(0===this.current_pane&&t.gesture.direction==Hammer.DIRECTION_RIGHT||this.current_pane==this.pane_count-1&&t.gesture.direction==Hammer.DIRECTION_LEFT)&&(n*=this.options.toughness),this._setContainerOffset(n+e);break;case"swipeleft":this.next(),t.gesture.stopDetect();break;case"swiperight":this.prev(),t.gesture.stopDetect();break;case"release":Math.abs(t.gesture.deltaX)>this.pane_width/2?"right"==t.gesture.direction?this.prev():this.next():this._showPane(this.current_pane,!0)}},a.prototype.disable=function(){return this.$indicators.hide(),this.$element.removeData(s),!1},a.prototype._updateIndicators=function(t){return this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$indicators.children().eq(t).addClass("active")),this};var o=t.fn.carousel;t.fn.carousel=function(e){return this.each(function(){var n=t(this),i=n.data(s),r=t.extend({},a.DEFAULTS,n.data(),"object"==typeof e&&e),o="string"==typeof e?e:r.slide;i||n.data(s,i=new a(this,r)).addClass(s),"number"==typeof e?i.to(e):o?i[o]():r.interval&&i.pause().cycle()})},t.fn.carousel.Constructor=a,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this},t(document).off("click.bs.carousel").on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,i=t(this),r=t(i.attr("data-target")||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),a=t.extend({},r.data(),i.data()),o=i.attr("data-slide-to");o&&(a.interval=!1),r.carousel(a),(o=i.attr("data-slide-to"))&&r.data(s).to(o),e.preventDefault()})}(window.jQuery),function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=t.navigator.pointerEnabled||t.navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&t.navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=t.document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;i<n.length;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;i<n.length;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){e||(e={});var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,s=!1,a=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;r<i.length;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var o=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!a){u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which?s=!0:u.match(/mouse/)&&1!==c.which&&(s=!1),u.match(/touch|pointer/)&&(a=!0);var h=0;s&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:a||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),(h||null===r)&&(r=c),n.call(i.detection,o.collectEventData(t,e,o.getTouchList(r,e),c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,s=!1,a=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:(t.indentifier=1,[t])},collectEventData:function(t,e,n,r){var s=i.POINTER_TOUCH;return(r.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,r))&&(s=i.POINTER_MOUSE),{center:i.utils.getCenter(n),timeStamp:(new Date).getTime(),target:r.target,touches:n,eventType:e,pointerType:s,srcEvent:r,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","Moz","ms","o",""];if(e&&t.style){for(var r=0;r<i.length;r++)for(var s in e)e.hasOwnProperty(s)&&(n=s,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[s]);"none"==e.userSelect&&(t.onselectstart=function(){return!1}),"none"==e.userDrag&&(t.ondragstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var s=this.gestures[n];if(!this.stopped&&e[s.name]!==!1&&s.handler.call(s,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var s=t.timeStamp-e.timeStamp,a=t.center.pageX-e.center.pageX,o=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(s,a,o);return i.utils.extend(t,{deltaTime:s,deltaX:a,deltaY:o,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),interimAngle:this.current.lastEvent&&i.utils.getAngle(this.current.lastEvent.center,t.center),direction:i.utils.getDirection(e.center,t.center),interimDirection:this.current.lastEvent&&i.utils.getDirection(this.current.lastEvent.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END&&"touchcancel"!=t.srcEvent.type){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,e){if(i.detection.current.name!=this.name&&this.triggered)return e.trigger(this.name+"end",t),void(this.triggered=!1);if(!(e.options.drag_max_touches>0&&t.touches.length>e.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<e.options.drag_min_distance&&i.detection.current.name!=this.name)return;if(i.detection.current.name!=this.name&&(i.detection.current.name=this.name,e.options.correct_for_drag_min_distance)){var n=Math.abs(e.options.drag_min_distance/t.distance);i.detection.current.startEvent.center.pageX+=t.deltaX*n,i.detection.current.startEvent.center.pageY+=t.deltaY*n,t=i.detection.extendEventData(t)}(i.detection.current.lastEvent.drag_locked_to_axis||e.options.drag_lock_to_axis&&e.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?t.deltaY<0?i.DIRECTION_UP:i.DIRECTION_DOWN:t.deltaX<0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(e.trigger(this.name+"start",t),this.triggered=!0),e.trigger(this.name,t),e.trigger(this.name+t.direction,t),(e.options.drag_block_vertical&&i.utils.isVertical(t.direction)||e.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&e.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,e){if(i.detection.current.name!=this.name&&this.triggered)return e.trigger(this.name+"end",t),void(this.triggered=!1);if(!(t.touches.length<2))switch(e.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var n=Math.abs(1-t.scale),r=Math.abs(t.rotation);if(n<e.options.transform_min_scale&&r<e.options.transform_min_rotation)return;i.detection.current.name=this.name,this.triggered||(e.trigger(this.name+"start",t),this.triggered=!0),e.trigger(this.name,t),r>e.options.transform_min_rotation&&e.trigger("rotate",t),n>e.options.transform_min_scale&&(e.trigger("pinch",t),e.trigger("pinch"+(t.scale<1?"in":"out"),t));break;case i.EVENT_END:this.triggered&&e.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,e){return e.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?void t.stopDetect():(e.options.prevent_default&&t.preventDefault(),void(t.eventType==i.EVENT_START&&e.trigger(this.name,t)))}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return i}):"object"==typeof module&&"object"==typeof module.exports?module.exports=i:t.Hammer=i}(this),function(t){"use strict";var e=function(e,n){return n===t?e:(e.event.bindDom=function(e,i,r){n(e).on(i,function(e){var n=e.originalEvent||e;n.pageX===t&&(n.pageX=e.pageX,n.pageY=e.pageY),n.target||(n.target=e.target),n.which===t&&(n.which=n.button),n.preventDefault||(n.preventDefault=e.preventDefault),n.stopPropagation||(n.stopPropagation=e.stopPropagation),r.call(this,n)})},e.Instance.prototype.on=function(t,e){return n(this.element).on(t,e)},e.Instance.prototype.off=function(t,e){return n(this.element).off(t,e)},e.Instance.prototype.trigger=function(t,e){var i=n(this.element);return i.has(e.target).length&&(i=n(e.target)),i.trigger({type:t,gesture:e})},n.fn.hammer=function(t){return this.each(function(){var i=n(this),r=i.data("hammer");r?r&&t&&e.utils.extend(r.options,t):i.data("hammer",new e(this,t||{}))})},e)};"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("hammer-jquery",["hammer","jquery"],e):e(window.Hammer,window.jQuery||window.Zepto)}();