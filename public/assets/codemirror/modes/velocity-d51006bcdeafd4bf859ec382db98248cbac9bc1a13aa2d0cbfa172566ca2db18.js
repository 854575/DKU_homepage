!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("velocity",function(){function e(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}function t(e,t,n){return t.tokenize=n,n(e,t)}function n(e,n){var u=n.beforeParams;n.beforeParams=!1;var d=e.next();if("'"==d&&!n.inString&&n.inParams)return n.lastTokenWasBuiltin=!1,t(e,n,i(d));if('"'!=d){if(/[\[\]{}\(\),;\.]/.test(d))return"("==d&&u?n.inParams=!0:")"==d&&(n.inParams=!1,n.lastTokenWasBuiltin=!0),null;if(/\d/.test(d))return n.lastTokenWasBuiltin=!1,e.eatWhile(/[\w\.]/),"number";if("#"==d&&e.eat("*"))return n.lastTokenWasBuiltin=!1,t(e,n,r);if("#"==d&&e.match(/ *\[ *\[/))return n.lastTokenWasBuiltin=!1,t(e,n,o);if("#"==d&&e.eat("#"))return n.lastTokenWasBuiltin=!1,e.skipToEnd(),"comment";if("$"==d)return e.eatWhile(/[\w\d\$_\.{}]/),l&&l.propertyIsEnumerable(e.current())?"keyword":(n.lastTokenWasBuiltin=!0,n.beforeParams=!0,"builtin");if(c.test(d))return n.lastTokenWasBuiltin=!1,e.eatWhile(c),"operator";e.eatWhile(/[\w\$_{}@]/);var f=e.current();return a&&a.propertyIsEnumerable(f)?"keyword":s&&s.propertyIsEnumerable(f)||e.current().match(/^#@?[a-z0-9_]+ *$/i)&&"("==e.peek()&&(!s||!s.propertyIsEnumerable(f.toLowerCase()))?(n.beforeParams=!0,n.lastTokenWasBuiltin=!1,"keyword"):n.inString?(n.lastTokenWasBuiltin=!1,"string"):e.pos>f.length&&"."==e.string.charAt(e.pos-f.length-1)&&n.lastTokenWasBuiltin?"builtin":(n.lastTokenWasBuiltin=!1,null)}return n.lastTokenWasBuiltin=!1,n.inString?(n.inString=!1,"string"):n.inParams?t(e,n,i(d)):void 0}function i(e){return function(t,i){for(var r,o=!1,a=!1;null!=(r=t.next());){if(r==e&&!o){a=!0;break}if('"'==e&&"$"==t.peek()&&!o){i.inString=!0,a=!0;break}o=!o&&"\\"==r}return a&&(i.tokenize=n),"string"}}function r(e,t){for(var i,r=!1;i=e.next();){if("#"==i&&r){t.tokenize=n;break}r="*"==i}return"comment"}function o(e,t){for(var i,r=0;i=e.next();){if("#"==i&&2==r){t.tokenize=n;break}"]"==i?r++:" "!=i&&(r=0)}return"meta"}var a=e("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"),s=e("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"),l=e("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"),c=/[+\-*&%=<>!?:\/|]/;return{startState:function(){return{tokenize:n,beforeParams:!1,inParams:!1,inString:!1,lastTokenWasBuiltin:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"#*",blockCommentEnd:"*#",lineComment:"##",fold:"velocity"}}),e.defineMIME("text/velocity","velocity")});