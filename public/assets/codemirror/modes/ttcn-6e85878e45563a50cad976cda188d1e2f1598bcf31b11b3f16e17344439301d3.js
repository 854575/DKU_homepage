!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function t(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}function n(t,n){function i(e){if(e)for(var t in e)e.hasOwnProperty(t)&&r.push(t)}"string"==typeof t&&(t=[t]);var r=[];i(n.keywords),i(n.builtin),i(n.timerOps),i(n.portOps),r.length&&(n.helperType=t[0],e.registerHelper("hintWords",t[0],r));for(var o=0;o<t.length;++o)e.defineMIME(t[o],n)}e.defineMode("ttcn",function(e,t){function n(e,t){var n=e.next();if('"'==n||"'"==n)return t.tokenize=i(n),t.tokenize(e,t);if(/[\[\]{}\(\),;\\:\?\.]/.test(n))return l=n,"punctuation";if("#"==n)return e.skipToEnd(),"atom preprocessor";if("%"==n)return e.eatWhile(/\b/),"atom ttcn3Macros";if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if("/"==n){if(e.eat("*"))return t.tokenize=r,r(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(T.test(n))return"@"==n&&(e.match("try")||e.match("catch")||e.match("lazy"))?"keyword":(e.eatWhile(T),"operator");e.eatWhile(/[\w\$_\xa1-\uffff]/);var o=e.current();return u.propertyIsEnumerable(o)?"keyword":d.propertyIsEnumerable(o)?"builtin":f.propertyIsEnumerable(o)?"def timerOps":p.propertyIsEnumerable(o)?"def configOps":m.propertyIsEnumerable(o)?"def verdictOps":h.propertyIsEnumerable(o)?"def portOps":g.propertyIsEnumerable(o)?"def sutOps":v.propertyIsEnumerable(o)?"def functionOps":b.propertyIsEnumerable(o)?"string verdictConsts":y.propertyIsEnumerable(o)?"string booleanConsts":_.propertyIsEnumerable(o)?"string otherConsts":x.propertyIsEnumerable(o)?"builtin types":k.propertyIsEnumerable(o)?"builtin visibilityModifiers":w.propertyIsEnumerable(o)?"atom templateMatch":"variable"}function i(e){return function(t,n){for(var i,r=!1,o=!1;null!=(i=t.next());){if(i==e&&!r){var a=t.peek();a&&(a=a.toLowerCase(),"b"!=a&&"h"!=a&&"o"!=a||t.next()),o=!0;break}r=!r&&"\\"==i}return(o||!r&&!C)&&(n.tokenize=null),"string"}}function r(e,t){for(var n,i=!1;n=e.next();){if("/"==n&&i){t.tokenize=null;break}i="*"==n}return"comment"}function o(e,t,n,i,r){this.indented=e,this.column=t,this.type=n,this.align=i,this.prev=r}function a(e,t,n){var i=e.indented;return e.context&&"statement"==e.context.type&&(i=e.context.indented),e.context=new o(i,t,n,null,e.context)}function s(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}var l,c=e.indentUnit,u=t.keywords||{},d=t.builtin||{},f=t.timerOps||{},h=t.portOps||{},p=t.configOps||{},m=t.verdictOps||{},g=t.sutOps||{},v=t.functionOps||{},b=t.verdictConsts||{},y=t.booleanConsts||{},_=t.otherConsts||{},x=t.types||{},k=t.visibilityModifiers||{},w=t.templateMatch||{},C=t.multiLineStrings,S=t.indentStatements!==!1,T=/[+\-*&@=<>!\/]/;return{startState:function(e){return{tokenize:null,context:new o((e||0)-c,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var i=t.context;if(e.sol()&&(null==i.align&&(i.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;l=null;var r=(t.tokenize||n)(e,t);if("comment"==r)return r;if(null==i.align&&(i.align=!0),";"!=l&&":"!=l&&","!=l||"statement"!=i.type)if("{"==l)a(t,e.column(),"}");else if("["==l)a(t,e.column(),"]");else if("("==l)a(t,e.column(),")");else if("}"==l){for(;"statement"==i.type;)i=s(t);for("}"==i.type&&(i=s(t));"statement"==i.type;)i=s(t)}else l==i.type?s(t):S&&(("}"==i.type||"top"==i.type)&&";"!=l||"statement"==i.type&&"newstatement"==l)&&a(t,e.column(),"statement");else s(t);return t.startOfLine=!1,r},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}}),n(["text/x-ttcn","text/x-ttcn3","text/x-ttcnpp"],{name:"ttcn",keywords:t("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),builtin:t("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),types:t("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),timerOps:t("read running start stop timeout"),portOps:t("call catch check clear getcall getreply halt raise receive reply send trigger"),configOps:t("create connect disconnect done kill killed map unmap"),verdictOps:t("getverdict setverdict"),sutOps:t("action"),functionOps:t("apply derefers refers"),verdictConsts:t("error fail inconc none pass"),booleanConsts:t("true false"),otherConsts:t("null NULL omit"),visibilityModifiers:t("private public friend"),templateMatch:t("complement ifpresent subset superset permutation"),multiLineStrings:!0})});