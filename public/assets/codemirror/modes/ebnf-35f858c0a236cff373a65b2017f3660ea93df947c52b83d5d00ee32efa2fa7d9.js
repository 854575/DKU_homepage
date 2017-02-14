!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){"use strict";t.defineMode("ebnf",function(e){var n={slash:0,parenthesis:1},i={comment:0,_string:1,characterClass:2},r=null;return e.bracesMode&&(r=t.getMode(e,e.bracesMode)),{startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(e,o){if(e){switch(0===o.stack.length&&('"'==e.peek()||"'"==e.peek()?(o.stringType=e.peek(),e.next(),o.stack.unshift(i._string)):e.match(/^\/\*/)?(o.stack.unshift(i.comment),o.commentType=n.slash):e.match(/^\(\*/)&&(o.stack.unshift(i.comment),o.commentType=n.parenthesis)),o.stack[0]){case i._string:for(;o.stack[0]===i._string&&!e.eol();)e.peek()===o.stringType?(e.next(),o.stack.shift()):"\\"===e.peek()?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return o.lhs?"property string":"string";case i.comment:for(;o.stack[0]===i.comment&&!e.eol();)o.commentType===n.slash&&e.match(/\*\//)?(o.stack.shift(),o.commentType=null):o.commentType===n.parenthesis&&e.match(/\*\)/)?(o.stack.shift(),o.commentType=null):e.match(/^.[^\*]*/);return"comment";case i.characterClass:for(;o.stack[0]===i.characterClass&&!e.eol();)e.match(/^[^\]\\]+/)||e.match(/^\\./)||o.stack.shift();return"operator"}var a=e.peek();if(null!==r&&(o.braced||"{"===a)){null===o.localState&&(o.localState=t.startState(r));var s=r.token(e,o.localState),l=e.current();if(!s)for(var c=0;c<l.length;c++)"{"===l[c]?(0===o.braced&&(s="matchingbracket"),o.braced++):"}"===l[c]&&(o.braced--,0===o.braced&&(s="matchingbracket"));return s}switch(a){case"[":return e.next(),o.stack.unshift(i.characterClass),"bracket";case":":case"|":case";":return e.next(),"operator";case"%":if(e.match("%%"))return"header";if(e.match(/[%][A-Za-z]+/))return"keyword";if(e.match(/[%][}]/))return"matchingbracket";break;case"/":if(e.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(e.match(/[\][a-z]+/))return"string-2";case".":if(e.match("."))return"atom";case"*":case"-":case"+":case"^":if(e.match(a))return"atom";case"$":if(e.match("$$"))return"builtin";if(e.match(/[$][0-9]+/))return"variable-3";case"<":if(e.match(/<<[a-zA-Z_]+>>/))return"builtin"}return e.match(/^\/\//)?(e.skipToEnd(),"comment"):e.match(/return/)?"operator":e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)?e.match(/(?=[\(.])/)?"variable":e.match(/(?=[\s\n]*[:=])/)?"def":"variable-2":["[","]","(",")"].indexOf(e.peek())!=-1?(e.next(),"bracket"):(e.eatSpace()||e.next(),null)}}}}),t.defineMIME("text/x-ebnf","ebnf")});