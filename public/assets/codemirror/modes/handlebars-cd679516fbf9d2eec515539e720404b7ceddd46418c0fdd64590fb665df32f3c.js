!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../../addon/mode/simple"),require("../../addon/mode/multiplex")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../addon/mode/simple","../../addon/mode/multiplex"],t):t(CodeMirror)}(function(t){"use strict";t.defineSimpleMode("handlebars-tags",{start:[{regex:/\{\{!--/,push:"dash_comment",token:"comment"},{regex:/\{\{!/,push:"comment",token:"comment"},{regex:/\{\{/,push:"handlebars",token:"tag"}],handlebars:[{regex:/\}\}/,pop:!0,token:"tag"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"},{regex:/'(?:[^\\']|\\.)*'?/,token:"string"},{regex:/>|[#\/]([A-Za-z_]\w*)/,token:"keyword"},{regex:/(?:else|this)\b/,token:"keyword"},{regex:/\d+/i,token:"number"},{regex:/=|~|@|true|false/,token:"atom"},{regex:/(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/,token:"variable-2"}],dash_comment:[{regex:/--\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],comment:[{regex:/\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}]}),t.defineMode("handlebars",function(e,n){var i=t.getMode(e,"handlebars-tags");return n&&n.base?t.multiplexingMode(t.getMode(e,n.base),{open:"{{",close:"}}",mode:i,parseDelimiters:!0}):i}),t.defineMIME("text/x-handlebars-template","handlebars")});