!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){"use strict";t.registerHelper("fold","markdown",function(e,n){function i(n){var i=e.getTokenTypeAt(t.Pos(n,0));return i&&/\bheader\b/.test(i)}function s(t,e,n){var s=e&&e.match(/^#+/);return s&&i(t)?s[0].length:(s=n&&n.match(/^[=\-]+\s*$/),s&&i(t+1)?"="==n[0]?1:2:r)}var r=100,a=e.getLine(n.line),o=e.getLine(n.line+1),l=s(n.line,a,o);if(l!==r){for(var c=e.lastLine(),d=n.line,u=e.getLine(d+2);d<c&&!(s(d+1,o,u)<=l);)++d,o=u,u=e.getLine(d+2);return{from:t.Pos(n.line,a.length),to:t.Pos(d,e.getLine(d).length)}}})});