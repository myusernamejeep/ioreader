function log(){var a="";for(var b=0;b<arguments.length;b++)a+=arguments[b]+",";console.log(a)}!function(a){function f(){try{document.createEvent("TouchEvent");return!0}catch(a){return!1}}function e(a){var b="touchstart,touchmove,touchend,mousedown,mousemove,mouseup".split(",");for(var c in b)a["on"+c]=null}var b,c=mouseDownEvent=mouseMoveEvent=null,d=f();a.fn.touch=function(f){function j(a,b){a.x=d?a.touches&&a.touches[0]?a.touches[0].pageX:(mouseMoveEvent||mouseDownEvent).x:a.clientX,a.y=d?a.touches&&a.touches[0]?a.touches[0].pageY:(mouseMoveEvent||mouseDownEvent).y:a.clientY;if(!b)return a;a.dx=a.x-b.x,a.dy=a.y-b.y;return a}var h=a.extend({},a.fn.touch.defaults,f),i=a(this).get(0);if(h==null)return e(i);i[d?"ontouchstart":"onmousedown"]=function(a){mouseDownEvent=j(a),b=new Date;return!1},i[d?"ontouchmove":"onmousemove"]=function(a){if(!!mouseDownEvent){if(!mouseMoveEvent){a=j(a,mouseDownEvent),console.log(a.dx,a.dy,h.minMove);if(g(a.dx)>=g(a.dy)&&g(a.dx)>h.minMove)mouseMoveEvent=a,c="x";else if(g(a.dy)>g(a.dx)&&g(a.dy)>h.minMove)mouseMoveEvent=a,mouseMoveEvent=a,c="y";else return}else mouseMoveEvent=j(a,mouseMoveEvent);log("dir",c,"md",a),c=="x"?h.moveX(a):h.moveY(a);return!1}},i[d?"ontouchend":"onmouseup"]=function(a){a.x=d&&mouseMoveEvent?mouseMoveEvent.x:mouseDownEvent.x,a.y=d&&mouseMoveEvent?mouseMoveEvent.y:mouseDownEvent.y,j(a,mouseDownEvent),c=="x"&&g(a.dx)>h.minSwipe?h.swipeX(a):c=="y"&&g(a.dy)>h.minSwipe?h.swipeY(a):+(new Date)-b<h.maxClickTime?h.click(a):h.longHold(a),c=mouseDownEvent=mouseMoveEvent=null;return!1};return a(this)},a.fn.touch.defaults={move:null,small:null,minMove:5,minSwipe:20,maxClickTime:500};var g=Math.abs}(jQuery)