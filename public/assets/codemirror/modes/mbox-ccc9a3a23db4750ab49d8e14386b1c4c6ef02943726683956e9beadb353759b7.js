!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){"use strict";function e(t){return"Subject"===t?"header":"string"}function n(t,n){if(t.sol()){if(n.inSeparator=!1,n.inHeader&&t.match(o))return null;if(n.inHeader=!1,n.header=null,t.match(a))return n.inHeaders=!0,n.inSeparator=!0,"atom";var i,r=!1;return(i=t.match(l))||(r=!0)&&(i=t.match(s))?(n.inHeaders=!0,n.inHeader=!0,n.emailPermitted=r,n.header=i[1],"atom"):n.inHeaders&&(i=t.match(c))?(n.inHeader=!0,n.emailPermitted=!0,n.header=i[1],"atom"):(n.inHeaders=!1,t.skipToEnd(),null)}if(n.inSeparator)return t.match(u)?"link":t.match(d)?"atom":(t.skipToEnd(),"atom");if(n.inHeader){var p=e(n.header);if(n.emailPermitted){if(t.match(f))return p+" link";if(t.match(h))return p}return t.skipToEnd(),p}return t.skipToEnd(),null}var i=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],r=["Date","Subject","Comments","Keywords","Resent-Date"];t.registerHelper("hintWords","mbox",i.concat(r));var o=/^[ \t]/,a=/^From /,s=new RegExp("^("+i.join("|")+"): "),l=new RegExp("^("+r.join("|")+"): "),c=/^[^:]+:/,u=/^[^ ]+@[^ ]+/,d=/^.*?(?=[^ ]+?@[^ ]+)/,f=/^<.*?>/,h=/^.*?(?=<.*>)/;t.defineMode("mbox",function(){return{startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:n,blankLine:function(t){t.inHeaders=t.inSeparator=t.inHeader=!1}}}),t.defineMIME("application/mbox","mbox")});