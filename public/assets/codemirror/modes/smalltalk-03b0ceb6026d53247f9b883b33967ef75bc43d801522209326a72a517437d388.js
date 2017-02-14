!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("smalltalk",function(e){var t=/[+\-\/\\*~<>=@%|&?!.,:;^]/,n=/true|false|nil|self|super|thisContext/,i=function(e,t){this.next=e,this.parent=t},r=function(e,t,n){this.name=e,this.context=t,this.eos=n},o=function(){this.context=new i(a,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};o.prototype.userIndent=function(t){this.userIndentationDelta=t>0?t/e.indentUnit-this.indentation:0};var a=function(e,o,a){var d=new r(null,o,!1),f=e.next();return'"'===f?d=s(e,new i(s,o)):"'"===f?d=l(e,new i(l,o)):"#"===f?"'"===e.peek()?(e.next(),d=c(e,new i(c,o))):e.eatWhile(/[^\s.{}\[\]()]/)?d.name="string-2":d.name="meta":"$"===f?("<"===e.next()&&(e.eatWhile(/[^\s>]/),e.next()),d.name="string-2"):"|"===f&&a.expectVariable?d.context=new i(u,o):/[\[\]{}()]/.test(f)?(d.name="bracket",d.eos=/[\[{(]/.test(f),"["===f?a.indentation++:"]"===f&&(a.indentation=Math.max(0,a.indentation-1))):t.test(f)?(e.eatWhile(t),d.name="operator",d.eos=";"!==f):/\d/.test(f)?(e.eatWhile(/[\w\d]/),d.name="number"):/[\w_]/.test(f)?(e.eatWhile(/[\w\d_]/),d.name=a.expectVariable?n.test(e.current())?"keyword":"variable":null):d.eos=a.expectVariable,d},s=function(e,t){return e.eatWhile(/[^"]/),new r("comment",e.eat('"')?t.parent:t,!0)},l=function(e,t){return e.eatWhile(/[^']/),new r("string",e.eat("'")?t.parent:t,!1)},c=function(e,t){return e.eatWhile(/[^']/),new r("string-2",e.eat("'")?t.parent:t,!1)},u=function(e,t){var n=new r(null,t,!1),i=e.next();return"|"===i?(n.context=t.parent,n.eos=!0):(e.eatWhile(/[^|]/),n.name="variable"),n};return{startState:function(){return new o},token:function(e,t){if(t.userIndent(e.indentation()),e.eatSpace())return null;var n=t.context.next(e,t.context,t);return t.context=n.context,t.expectVariable=n.eos,n.name},blankLine:function(e){e.userIndent(0)},indent:function(t,n){var i=t.context.next===a&&n&&"]"===n.charAt(0)?-1:t.userIndentationDelta;return(t.indentation+i)*e.indentUnit},electricChars:"]"}}),e.defineMIME("text/x-stsrc",{name:"smalltalk"})});