!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){"use strict";function e(t,e){function n(t){clearTimeout(i.doRedraw),i.doRedraw=setTimeout(function(){i.redraw()},t)}this.cm=t,this.options=e,this.buttonHeight=e.scrollButtonHeight||t.getOption("scrollButtonHeight"),this.annotations=[],this.doRedraw=this.doUpdate=null,this.div=t.getWrapperElement().appendChild(document.createElement("div")),this.div.style.cssText="position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none",this.computeScale();var i=this;t.on("refresh",this.resizeHandler=function(){clearTimeout(i.doUpdate),i.doUpdate=setTimeout(function(){i.computeScale()&&n(20)},100)}),t.on("markerAdded",this.resizeHandler),t.on("markerCleared",this.resizeHandler),e.listenForChanges!==!1&&t.on("change",this.changeHandler=function(){n(250)})}t.defineExtension("annotateScrollbar",function(t){return"string"==typeof t&&(t={className:t}),new e(this,t)}),t.defineOption("scrollButtonHeight",0),e.prototype.computeScale=function(){var t=this.cm,e=(t.getWrapperElement().clientHeight-t.display.barHeight-2*this.buttonHeight)/t.getScrollerElement().scrollHeight;if(e!=this.hScale)return this.hScale=e,!0},e.prototype.update=function(t){this.annotations=t,this.redraw()},e.prototype.redraw=function(t){function e(t,e){if(l!=t.line&&(l=t.line,c=n.getLineHandle(l)),o&&c.height>a)return n.charCoords(t,"local")[e?"top":"bottom"];var i=n.heightAtLine(c,"local");return i+(e?0:c.height)}t!==!1&&this.computeScale();var n=this.cm,i=this.hScale,r=document.createDocumentFragment(),s=this.annotations,o=n.getOption("lineWrapping"),a=o&&1.5*n.defaultTextHeight(),l=null,c=null;if(n.display.barWidth)for(var u,d=0;d<s.length;d++){for(var h=s[d],f=u||e(h.from,!0)*i,p=e(h.to,!1)*i;d<s.length-1&&(u=e(s[d+1].from,!0)*i,!(u>p+.9));)h=s[++d],p=e(h.to,!1)*i;if(p!=f){var g=Math.max(p-f,3),m=r.appendChild(document.createElement("div"));m.style.cssText="position: absolute; right: 0px; width: "+Math.max(n.display.barWidth-1,2)+"px; top: "+(f+this.buttonHeight)+"px; height: "+g+"px",m.className=this.options.className,h.id&&m.setAttribute("annotation-id",h.id)}}this.div.textContent="",this.div.appendChild(r)},e.prototype.clear=function(){this.cm.off("refresh",this.resizeHandler),this.cm.off("markerAdded",this.resizeHandler),this.cm.off("markerCleared",this.resizeHandler),this.changeHandler&&this.cm.off("change",this.changeHandler),this.div.parentNode.removeChild(this.div)}});