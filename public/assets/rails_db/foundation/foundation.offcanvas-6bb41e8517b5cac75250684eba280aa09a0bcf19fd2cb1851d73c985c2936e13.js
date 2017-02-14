!function(t){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.5.3",settings:{open_method:"move",close_on_click:!1},init:function(t,e,n){this.bindings(e,n)},events:function(){var e=this,n=e.S,i="",r="",s="",o="",a="";"move"===this.settings.open_method?(i="move-",r="right",s="left",o="top",a="bottom"):"overlap_single"===this.settings.open_method?(i="offcanvas-overlap-",r="right",s="left",o="top",a="bottom"):"overlap"===this.settings.open_method&&(i="offcanvas-overlap"),n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(s){e.click_toggle_class(s,i+r),"overlap"!==e.settings.open_method&&n(".left-submenu").removeClass(i+r),t(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(s){var o=e.get_settings(s),a=n(this).parent();!o.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?n(this).parent().hasClass("has-submenu")?(s.preventDefault(),n(this).siblings(".left-submenu").toggleClass(i+r)):a.hasClass("back")&&(s.preventDefault(),a.parent().removeClass(i+r)):(e.hide.call(e,i+r,e.get_wrapper(s)),a.parent().removeClass(i+r)),t(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(r){e.click_toggle_class(r,i+s),"overlap"!==e.settings.open_method&&n(".right-submenu").removeClass(i+s),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(r){var o=e.get_settings(r),a=n(this).parent();!o.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?n(this).parent().hasClass("has-submenu")?(r.preventDefault(),n(this).siblings(".right-submenu").toggleClass(i+s)):a.hasClass("back")&&(r.preventDefault(),a.parent().removeClass(i+s)):(e.hide.call(e,i+s,e.get_wrapper(r)),a.parent().removeClass(i+s)),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-toggle",function(r){e.click_toggle_class(r,i+a),"overlap"!==e.settings.open_method&&n(".top-submenu").removeClass(i+a),t(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-menu a",function(r){var s=e.get_settings(r),o=n(this).parent();!s.close_on_click||o.hasClass("has-submenu")||o.hasClass("back")?n(this).parent().hasClass("has-submenu")?(r.preventDefault(),n(this).siblings(".top-submenu").toggleClass(i+a)):o.hasClass("back")&&(r.preventDefault(),o.parent().removeClass(i+a)):(e.hide.call(e,i+a,e.get_wrapper(r)),o.parent().removeClass(i+a)),t(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-toggle",function(r){e.click_toggle_class(r,i+o),"overlap"!==e.settings.open_method&&n(".bottom-submenu").removeClass(i+o),t(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-menu a",function(r){var s=e.get_settings(r),a=n(this).parent();!s.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?n(this).parent().hasClass("has-submenu")?(r.preventDefault(),n(this).siblings(".bottom-submenu").toggleClass(i+o)):a.hasClass("back")&&(r.preventDefault(),a.parent().removeClass(i+o)):(e.hide.call(e,i+o,e.get_wrapper(r)),a.parent().removeClass(i+o)),t(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(o){e.click_remove_class(o,i+s),n(".right-submenu").removeClass(i+s),r&&(e.click_remove_class(o,i+r),n(".left-submenu").removeClass(i+s)),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){e.click_remove_class(n,i+s),t(".left-off-canvas-toggle").attr("aria-expanded","false"),r&&(e.click_remove_class(n,i+r),t(".right-off-canvas-toggle").attr("aria-expanded","false"))}).on("click.fndtn.offcanvas",".exit-off-canvas",function(r){e.click_remove_class(r,i+o),n(".bottom-submenu").removeClass(i+o),a&&(e.click_remove_class(r,i+a),n(".top-submenu").removeClass(i+o)),t(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){e.click_remove_class(n,i+o),t(".top-off-canvas-toggle").attr("aria-expanded","false"),a&&(e.click_remove_class(n,i+a),t(".bottom-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(t,e){e=e||this.get_wrapper(),e.is("."+t)?this.hide(t,e):this.show(t,e)},show:function(t,e){e=e||this.get_wrapper(),e.trigger("open.fndtn.offcanvas"),e.addClass(t)},hide:function(t,e){e=e||this.get_wrapper(),e.trigger("close.fndtn.offcanvas"),e.removeClass(t)},click_toggle_class:function(t,e){t.preventDefault();var n=this.get_wrapper(t);this.toggle(e,n)},click_remove_class:function(t,e){t.preventDefault();var n=this.get_wrapper(t);this.hide(e,n)},get_settings:function(t){var e=this.S(t.target).closest("["+this.attr_name()+"]");return e.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(t){var e=this.S(t?t.target:this.scope).closest(".off-canvas-wrap");return 0===e.length&&(e=this.S(".off-canvas-wrap")),e},reflow:function(){}}}(jQuery,window,window.document);