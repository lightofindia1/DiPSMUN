(function(a){a(document).ready(function(h){var e=h(document),g=h("body"),d=h(window),i=h("#wrapper"),c=h(".site-menu-toggle"),k=h(".site-menu-panel"),f=h(".tb-floating-search"),b=h(".site-header");i.after('<div class="site-mobile-panel tb-mobile-menu-wrapper"><div class="wrap"></div></div>');var j=h(".site-mobile-panel > .wrap");h(".tb-floating-search .tb-search").first().clone().addClass("mini").appendTo(j);k.find(".tb-primary-menu").clone().appendTo(j);j.find(".tb-primary-menu").removeClass("sf-menu sf-js-enabled sf-arrows tb-primary-menu").addClass("tb-mobile-menu tb-side-menu");k.find(".tb-social-icons").clone().appendTo(j);if(themeblvd.superfish=="true"){j.find(".tb-mobile-menu").superfish({speed:200,popUpSelector:".non-mega-sub-menu, .sf-mega"})}if(b.hasClass("mobile-light")){j.find(".tb-mobile-menu").addClass("mobile-light");j.closest(".site-mobile-panel").addClass("mobile-light")}else{j.find(".tb-mobile-menu").addClass("mobile-dark");j.closest(".site-mobile-panel").addClass("mobile-dark")}if(g.hasClass("tb-suck-up")){if(d.width()>767){if(e.scrollTop()>150){b.removeClass("transparent")}else{b.addClass("transparent")}}d.on("scroll",function(){if(d.width()>767){if(e.scrollTop()>150){b.removeClass("transparent")}else{b.addClass("transparent")}}})}c.on("click",function(){var l=h(this);if(l.hasClass("collapse-menu")){g.removeClass("gnar-menu-panel-on");c.removeClass("collapse collapse-menu");k.removeClass("on");j.closest(".site-mobile-panel").removeClass("on")}else{if(!l.hasClass("collapse-search")){g.addClass("gnar-menu-panel-on");c.addClass("collapse collapse-menu");k.addClass("on");j.closest(".site-mobile-panel").addClass("on")}}return false});h(".gnar-search-trigger").on("click",function(){g.addClass("gnar-search-panel-on no-scroll");c.addClass("collapse collapse-search");return false});h(".tb-floating-search .search-input").on("focusout",function(){g.removeClass("gnar-search-panel-on no-scroll");f.removeClass("on");setTimeout(function(){c.removeClass("collapse collapse-search")},100)})})})(jQuery);