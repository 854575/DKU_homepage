!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function t(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}function n(t,n){function i(e){if(e)for(var t in e)e.hasOwnProperty(t)&&r.push(t)}"string"==typeof t&&(t=[t]);var r=[];i(n.keywords),i(n.builtin),i(n.atoms),r.length&&(n.helperType=t[0],e.registerHelper("hintWords",t[0],r));for(var o=0;o<t.length;++o)e.defineMIME(t[o],n)}e.defineMode("modelica",function(t,n){function i(e,t){return e.skipToEnd(),t.tokenize=null,"comment"}function r(e,t){for(var n,i=!1;n=e.next();){if(i&&"/"==n){t.tokenize=null;break}i="*"==n}return"comment"}function o(e,t){for(var n,i=!1;null!=(n=e.next());){if('"'==n&&!i){t.tokenize=null,t.sol=!1;break}i=!i&&"\\"==n}return"string"}function a(e,t){for(e.eatWhile(m);e.eat(m)||e.eat(g););var n=e.current();return!t.sol||"package"!=n&&"model"!=n&&"when"!=n&&"connector"!=n?t.sol&&"end"==n&&t.level>0&&t.level--:t.level++,t.tokenize=null,t.sol=!1,u.propertyIsEnumerable(n)?"keyword":d.propertyIsEnumerable(n)?"builtin":f.propertyIsEnumerable(n)?"atom":"variable"}function s(e,t){for(;e.eat(/[^']/););return t.tokenize=null,t.sol=!1,e.eat("'")?"variable":"error"}function l(e,t){return e.eatWhile(m),e.eat(".")&&e.eatWhile(m),(e.eat("e")||e.eat("E"))&&(e.eat("-")||e.eat("+"),e.eatWhile(m)),t.tokenize=null,t.sol=!1,"number"}var c=t.indentUnit,u=n.keywords||{},d=n.builtin||{},f=n.atoms||{},h=/[;=\(:\),{}.*<>+\-\/^\[\]]/,p=/(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/,m=/[0-9]/,g=/[_a-zA-Z]/;return{startState:function(){return{tokenize:null,level:0,sol:!0}},token:function(e,t){if(null!=t.tokenize)return t.tokenize(e,t);if(e.sol()&&(t.sol=!0),e.eatSpace())return t.tokenize=null,null;var n=e.next();if("/"==n&&e.eat("/"))t.tokenize=i;else if("/"==n&&e.eat("*"))t.tokenize=r;else{if(p.test(n+e.peek()))return e.next(),t.tokenize=null,"operator";if(h.test(n))return t.tokenize=null,"operator";if(g.test(n))t.tokenize=a;else if("'"==n&&e.peek()&&"'"!=e.peek())t.tokenize=s;else if('"'==n)t.tokenize=o;else{if(!m.test(n))return t.tokenize=null,"error";t.tokenize=l}}return t.tokenize(e,t)},indent:function(t,n){if(null!=t.tokenize)return e.Pass;var i=t.level;return/(algorithm)/.test(n)&&i--,/(equation)/.test(n)&&i--,/(initial algorithm)/.test(n)&&i--,/(initial equation)/.test(n)&&i--,/(end)/.test(n)&&i--,i>0?c*i:0},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}});var i="algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within",r="abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh",o="Real Boolean Integer String";n(["text/x-modelica"],{name:"modelica",keywords:t(i),builtin:t(r),atoms:t(o)})});