function checkForDOMChange(){stickyFooter()}function getCSS(t,e){var i=document.getElementsByTagName(t)[0],n=null;return i.currentStyle?n=i.currentStyle[e]:window.getComputedStyle&&(n=document.defaultView.getComputedStyle(i,null).getPropertyValue(e)),n}function stickyFooter(){if(null!=document.getElementsByTagName("footer")[0].getAttribute("style")&&document.getElementsByTagName("footer")[0].removeAttribute("style"),window.innerHeight!=document.body.offsetHeight){var t=window.innerHeight-document.body.offsetHeight,e=getCSS("footer","margin-top");1==isNaN(e)?(document.getElementsByTagName("footer")[0].setAttribute("style","margin-top:0px;"),e=0):e=parseInt(e),e+t>parseInt(getCSS("footer","margin-top"))&&document.getElementsByTagName("footer")[0].setAttribute("style","margin-top:"+(e+t)+"px;")}}window.onload=function(){stickyFooter()},window.onresize=function(){stickyFooter()};