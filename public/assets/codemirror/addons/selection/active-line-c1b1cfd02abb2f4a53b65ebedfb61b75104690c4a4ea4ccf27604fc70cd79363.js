!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){"use strict";function e(t){for(var e=0;e<t.state.activeLines.length;e++)t.removeLineClass(t.state.activeLines[e],"wrap",s),t.removeLineClass(t.state.activeLines[e],"background",o),t.removeLineClass(t.state.activeLines[e],"gutter",a)}function n(t,e){if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!=e[n])return!1;return!0}function i(t,i){for(var r=[],l=0;l<i.length;l++){var c=i[l];if(c.empty()){var u=t.getLineHandleVisualStart(c.head.line);r[r.length-1]!=u&&r.push(u)}}n(t.state.activeLines,r)||t.operation(function(){e(t);for(var n=0;n<r.length;n++)t.addLineClass(r[n],"wrap",s),t.addLineClass(r[n],"background",o),t.addLineClass(r[n],"gutter",a);t.state.activeLines=r})}function r(t,e){i(t,e.ranges)}var s="CodeMirror-activeline",o="CodeMirror-activeline-background",a="CodeMirror-activeline-gutter";t.defineOption("styleActiveLine",!1,function(n,s,o){var a=o&&o!=t.Init;s&&!a?(n.state.activeLines=[],i(n,n.listSelections()),n.on("beforeSelectionChange",r)):!s&&a&&(n.off("beforeSelectionChange",r),e(n),delete n.state.activeLines)})});