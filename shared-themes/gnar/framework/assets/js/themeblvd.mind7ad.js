jQuery(document).ready(function(f){var l=f(window),c=l.width(),r=f("body"),u=f("#branding"),h=f(".tb-primary-menu"),e=null,t={},q=f(".site-inner.full_width .entry-content .alignnone"),o={yt_init:function(){f(".tb-bg-video.youtube .video").each(function(){var w=f(this),x=w.data();t[this.id]=new YT.Player(this.id,{videoId:x.vid,playerVars:x,events:{onReady:o.yt_ready}})})},yt_ready:function(y){var x=y.target.getIframe(),w=f("#"+x.id);y.target.mute();y.target.playVideo();setTimeout(function(){w.closest(".youtube").addClass("playing");o.bg_video_size(w);l.on("resize",function(){o.bg_video_size(w)})},500)},bg_video_size:function(J){if(!J.is("video, iframe")){return}var x=J.attr("id"),D="",E=J.closest(".has-bg-video"),C=E.outerWidth(),y=E.outerHeight(),F=J.closest(".tb-bg-video").data("ratio").split(":"),I=0,B=0,z=F[0],H=F[1],A=(H*C)/z,G=(z*y)/H;D="#"+x+" {";if(C/y>z/H){I=Math.ceil(C);B=Math.ceil(A)}else{I=Math.ceil(G);B=Math.ceil(y)}D+="width: "+(I+2)+"px !important;";D+="height: "+(B+2)+"px !important;";D+="}";f("#"+x+"-styles").remove();f("<style type='text/css' id='"+x+"-styles'>"+D+"</style>").appendTo("head:first")},popout_img:function(x,y,w){w.each(function(){var A=f(this),B=x.hasClass("tb-boxed")?f("#container").width():y.width();if(y.width()>=992){if(A.hasClass("wp-caption")){var z=A.find("img");if(z.hasClass("size-full")){if(x.hasClass("rtl")){A.css({"margin-right":((A.closest(".entry-content").width()/2)-(B/2)),"max-width":"none"}).addClass("tb-img-popout")}else{A.css({"margin-left":((A.closest(".entry-content").width()/2)-(B/2)),"max-width":"none"}).addClass("tb-img-popout")}A.add(z).css({width:B,"max-width":"none"})}}else{if(A.hasClass("size-full")){if(x.hasClass("rtl")){A.css({"margin-right":((A.closest(".entry-content").width()/2)-(B/2)),"margin-left":"0","max-width":"none",width:B}).addClass("tb-img-popout")}else{A.css({"margin-left":((A.closest(".entry-content").width()/2)-(B/2)),"margin-right":"0","max-width":"none",width:B}).addClass("tb-img-popout")}}}}})}};if(c<768){r.addClass("mobile-on");r.removeClass("tablet-on");if(u.hasClass("transparent")){u.removeClass("transparent");u.addClass("transparent-off")}}else{if(c<992){r.addClass("tablet-on");r.removeClass("mobile-on")}}l.on("resize",function(){var w=l.width();if(w<768){r.addClass("mobile-on");r.removeClass("tablet-on");if(u.hasClass("transparent")){u.removeClass("transparent");u.addClass("transparent-off")}}else{if(w<992){r.addClass("tablet-on");r.removeClass("mobile-on");if(u.hasClass("transparent-off")){u.removeClass("transparent-off");u.addClass("transparent")}}else{r.removeClass("tablet-on");r.removeClass("mobile-on");if(u.hasClass("transparent-off")){u.removeClass("transparent-off");u.addClass("transparent")}}}});if(themeblvd.mobile_panel=="true"){r.addClass("mobile-menu-"+themeblvd.mobile_menu_location+"-off");f("#wrapper").after('<div class="tb-mobile-menu-wrapper '+themeblvd.mobile_panel_class+" "+themeblvd.mobile_menu_location+'"><div class="wrap"></div></div>');var k=f(".tb-mobile-menu-wrapper > .wrap"),i=f(".tb-to-mobile-menu"),n=f(".tb-nav-trigger"),s=parseInt(themeblvd.mobile_menu_viewport_max);f(".tb-floating-search .tb-search").first().clone().addClass("mini panel-item").appendTo(k);if(h.hasClass("tb-to-mobile-menu")){h.first().clone().removeClass("sf-menu tb-primary-menu tb-to-mobile-menu").addClass("tb-mobile-menu tb-side-menu panel-item").appendTo(k)}if(themeblvd.side_panel=="true"){var v=f(".tb-side-panel > .wrap");if(k.find(".tb-mobile-menu").length){v.find(".menu").children("li").clone().appendTo(k.find(".tb-mobile-menu"))}else{v.find(".menu").first().clone().addClass("tb-mobile-menu tb-side-menu panel-item").appendTo(k)}k.find(".submenu-toggle").remove();v.find(".secondary-menu").clone().addClass("panel-item").appendTo(k)}r.find(".header-text.to-mobile").first().clone().addClass("panel-item").appendTo(k);r.find(".tb-social-icons.to-mobile").first().clone().removeClass("grey dark light flat").addClass("panel-item").appendTo(k);k.find("li.menu-search, li.menu-contact, li.menu-cart").remove();if(!u.find(".menu-item-language").length){u.find(".top-wpml").each(function(){var x=f(this),w=f('<li class="menu-item mobile-wpml"></li>'),z=f('<span class="menu-btn">'+x.find(".tb-wpml-switcher > ul > li > a").html()+"</span>"),y=x.find(".lang-sub-menu");if(y.length){w.append(z);z.find(".fa").addClass("sf-sub-indicator");w.append(y.clone().addClass("sub-menu non-mega-sub-menu"));w.appendTo(k.find(".tb-mobile-menu"))}})}r.trigger("themeblvd-mobile-panel",k);n.on("click",function(){if(n.hasClass("collapse")){r.removeClass("mobile-menu-"+themeblvd.mobile_menu_location+"-on").addClass("mobile-menu-"+themeblvd.mobile_menu_location+"-off");n.removeClass("collapse")}else{r.removeClass("mobile-menu-"+themeblvd.mobile_menu_location+"-off").addClass("mobile-menu-"+themeblvd.mobile_menu_location+"-on");n.addClass("collapse")}return false});f("#wrapper").on("click",function(){r.removeClass("mobile-menu-"+themeblvd.mobile_menu_location+"-on").addClass("mobile-menu-"+themeblvd.mobile_menu_location+"-off");n.removeClass("collapse")});l.on("resize",function(){if(l.width()>s){r.removeClass("mobile-menu-"+themeblvd.mobile_menu_location+"-on").addClass("mobile-menu-"+themeblvd.mobile_menu_location+"-off");n.removeClass("collapse")}})}f(".tb-side-menu").on("click",".tb-side-menu-toggle",function(){var w=f(this);if(w.hasClass("open")){w.next(".sub-menu, .sf-mega").slideUp(100);w.removeClass("open fa-"+w.data("close"));w.addClass("fa-"+w.data("open"))}else{w.next(".sub-menu, .sf-mega").slideDown(100);w.removeClass("fa-"+w.data("open"));w.addClass("open fa-"+w.data("close"))}return false});if(themeblvd.side_panel=="true"){f(".tb-side-trigger").on("click",function(){var w=f(this);if(w.hasClass("collapse")){w.removeClass("collapse");r.removeClass("side-panel-on")}else{w.addClass("collapse");r.addClass("side-panel-on")}return false});f(".tb-side-panel .submenu-toggle").on("click",function(){var w=f(this);if(w.hasClass("collapse")){w.removeClass("collapse").closest("li").find(".sub-menu").slideUp(200)}else{w.addClass("collapse").closest("li").find(".sub-menu").slideDown(200)}return false})}if(themeblvd.sticky!=="false"){var b=f('<div id="sticky-menu" class="tb-sticky-menu"><div class="wrap sticky-wrap clearfix"><div class="nav"></div></div></div>').insertAfter(f("#wrapper"));if(themeblvd.sticky_class){b.addClass(themeblvd.sticky_class)}u.find(".header-logo:first-child").clone().appendTo(b.find(".sticky-wrap"));if(themeblvd.sticky_logo){b.find(".header_logo_image img").attr("src",themeblvd.sticky_logo).removeAttr("width height srcset")}h.clone().appendTo(b.find(".sticky-wrap > .nav"));if(b.find(".tb-primary-menu li.menu-contact").length){b.find(".tb-contact-trigger").data("container",".tb-sticky-menu")}else{if(u.find(".tb-social-icons").length){b.find(".tb-primary-menu").append('<li class="menu-item level-1 menu-contact"><a href="#" class="tb-contact-trigger menu-btn" tabindex="0" data-toggle="popover" data-container=".tb-sticky-menu" data-placement="bottom" data-open="envelope-o" data-close="close"><i class="fa fa-envelope-o"></i></a></li>');u.find(".tb-social-icons").first().clone().appendTo(b.find(".menu-contact")).wrap('<div class="contact-popover-content hide"></div>')}}if(b.find(".tb-social-icons").hasClass("light")){b.find(".tb-social-icons").removeClass("light").addClass("grey")}if(u.find(".tb-cart-trigger").length&&!b.find(".tb-primary-menu li.menu-cart").length){u.find(".tb-cart-trigger").first().clone().appendTo(b.find(".tb-primary-menu")).wrap('<li class="menu-item level-1 menu-cart"></li>')}if(b.find(".tb-primary-menu li.menu-search").length){b.find(".tb-search-trigger").addClass("menu-btn")}else{if(u.find(".tb-search-trigger").length){u.find(".tb-search-trigger").first().clone().appendTo(b.find(".tb-primary-menu")).wrap('<li class="menu-item level-1 menu-search"></li>');b.find(".tb-search-trigger").addClass("menu-btn")}}b.find(".no-sticky").remove();u.viewportChecker({classToAdd:"visible",offset:parseInt(themeblvd.sticky_offset),repeat:true,callbackFunction:function(w,x){if(w.hasClass("visible")){r.removeClass("sticky-on");b.find(".tb-contact-trigger").popover("hide");b.find(".menu-item").each(function(){var y=f(this).closest("li");if(y.hasClass("sfHover")){y.removeClass("sfHover");y.find(".non-mega-sub-menu").hide();y.find(".sf-mega").hide()}})}else{r.addClass("sticky-on")}}})}if(themeblvd.superfish=="true"){f("ul.sf-menu").superfish({speed:200,popUpSelector:".non-mega-sub-menu,.sf-mega",onBeforeShow:function(){var x=f(this),z=x.closest("li"),w=z.offset(),y=200;if(!w){return}if(r.hasClass("rtl")){w=w.right}else{w=w.left}if(!x.hasClass("non-mega-sub-menu")||!z.hasClass("level-1")){return}if(x.find(".level-4").length>0){y=600}else{if(x.find(".level-3").length>0){y=400}}if((f(window).width()-w)<=y){x.addClass("reverse");x.find(".fa-caret-right, .fa-caret-left, .fa-angle-right, fa-angle-left").each(function(){f(this).addClass("inverse")})}else{x.removeClass("reverse");x.find(".fa-caret-right, .fa-caret-left, .fa-angle-right, fa-angle-left").each(function(){f(this).removeClass("inverse")})}}});f(".tb-mobile-menu").superfish({speed:200,popUpSelector:".non-mega-sub-menu,.sf-mega"})}f("ul.sf-menu li.no-click, ul.tb-mobile-menu li.no-click, .tb-side-panel li.no-click").find("a:first").on("click",function(){return false});f("a.no-click").on("click",function(){return false});f(".tb-search-trigger").on("click",function(){var w=f(".tb-floating-search");w.addClass("on");if(!r.hasClass("mobile")){w.find(".search-input").focus()}return false});f(".tb-floating-search .close-search").on("click",function(){f(this).closest(".tb-floating-search").removeClass("on");return false});f(".tb-floating-search .search-input").on("focusout",function(){f(this).closest(".tb-floating-search").removeClass("on")});f(".epic-thumb.gallery").on({mouseenter:function(){if(l.width()>=768){f(this).addClass("hover").find(".entry-header").stop().fadeOut(200)}},mouseleave:function(){if(l.width()>=768){f(this).removeClass("hover").find(".entry-header").stop().fadeIn(200)}}});if(r.hasClass("tb-img-popout")){o.popout_img(r,l,q);l.resize(function(){o.popout_img(r,l,q)})}if(f.isFunction(f.fn.owlCarousel)){f(".tb-gallery-carousel").each(function(){var x=f(this),y=x.find(".owl-carousel"),w=true;if(x.hasClass("has-nav-thumbs")||x.hasClass("has-nav-dots")){w=false}y.owlCarousel({rtl:r.hasClass("rtl")?true:false,center:true,autoWidth:true,loop:w,dots:false,nav:false,margin:1,onInitialized:function(){x.find(".tb-loader").fadeOut(100)},onChanged:function(z){if(!w){if(z.item.index==0){x.find(".tb-slider-arrows a.prev").fadeOut(100);x.find(".tb-slider-arrows a.next").fadeIn(100)}else{if(z.item.index+1==z.item.count){x.find(".tb-slider-arrows a.next").fadeOut(100);x.find(".tb-slider-arrows a.prev").fadeIn(100)}else{x.find(".tb-slider-arrows a.next, .tb-slider-arrows a.prev").fadeIn(100)}}if(x.hasClass("has-nav-thumbs")){x.find(".carousel-thumb-nav li").removeClass("active");x.find(".carousel-thumb-nav li:nth-child("+(z.item.index+1)+")").addClass("active")}if(x.hasClass("has-nav-dots")){x.find(".carousel-indicators li").removeClass("active");x.find(".carousel-indicators li:nth-child("+(z.item.index+1)+")").addClass("active")}}}});x.find(".tb-slider-arrows a").on("click",function(){if(f(this).hasClass("next")){y.trigger("next.owl.carousel")}else{y.trigger("prev.owl.carousel")}return false});x.find(".carousel-thumb-nav li, .carousel-indicators li").on("click",function(){y.trigger("to.owl.carousel",f(this).data("slide-to"))})})}l.on("load",function(){f(".tb-isotope").each(function(){var y=f(this),x="fitRows",w=true;if(y.hasClass("tb-masonry")){x="masonry"}if(r.hasClass("rtl")){w=false}y.find(".post-wrap > .row").fadeIn(400,function(){var z=y.find(".post-wrap > .row").isotope({layoutMode:x,itemSelector:".iso-item",filter:"*",isOriginLeft:w});y.find(".tb-loader").fadeOut(100);if(y.hasClass("tb-filter")){y.find(".tb-filter-nav").fadeIn(400);y.find(".filter-menu > li > a").on("click",function(){var B=f(this),A=B.data("filter");y.find(".filter-menu > li").removeClass("active");B.closest("li").addClass("active");z.isotope({filter:A});B.closest(".tb-filter").find(".grid-item, .showcase-item").each(function(){var C=f(this);if(C.is(A)){C.find("a.lightbox-gallery-item").addClass("visible")}else{C.find("a.lightbox-gallery-item").removeClass("visible")}});return false})}})})});f(".tb-contact-trigger").popover({html:true,template:'<div class="tb-contact-popover popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',content:function(){return f(this).next(".contact-popover-content").html()}}).on("click",function(w){w.preventDefault()});f(".tb-contact-trigger").on("show.bs.popover",function(){var w=f(this);w.html('<i class="fa fa-'+w.data("close")+'"></i>')});f(".tb-contact-trigger").on("hide.bs.popover",function(){var w=f(this);w.html('<i class="fa fa-'+w.data("open")+'"></i>')});if(themeblvd.scroll_to_top=="true"){var j=f(".tb-scroll-to-top");l.on("scroll",function(){if(f(this).scrollTop()>400){j.fadeIn()}else{j.fadeOut()}});j.on("click",function(){f("html, body").animate({scrollTop:0},400);return false})}f(".tb-scroll-to").on("click",function(){var w=f(this),y=null,x=0;if(this.hash&&this.hash!="#"){y=this.hash}else{y="#"+w.closest(".element-section").next().attr("id")}x=f(y).offset().top;if(themeblvd.scroll_to_section_offset){x=x-parseInt(themeblvd.scroll_to_section_offset)}else{if(themeblvd.sticky!=="false"){x=x-parseInt(themeblvd.sticky_offset)}}f("html, body").animate({scrollTop:x},800);return false});f(".tb-share .btn-share.popup").on("click",function(){if(!window.open(f(this).attr("href"),"","height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no")){document.location.href=f(this).attr("href")}return false});if(themeblvd.gallery=="true"){f(".gallery").each(function(){var w=f(this);w.addClass("themeblvd-gallery clearfix");w.find(".gallery-item a").each(function(){var x=this.href.split("?"),x=x[0],y="tb-thumb-link";if(themeblvd.gallery_thumb_frame=="true"){y+=" thumbnail"}if(x.match(/\.(jpe?g|png|bmp|gif|tiff?)$/i)){y+=" image";if(themeblvd.magnific_popup=="true"){y+=" lightbox-gallery-item mfp-image image-button visible"}}else{y+=" post"}f(this).addClass(y)})})}if(themeblvd.magnific_popup=="true"){var g=0,d="";if(themeblvd.lightbox_animation!="none"){g=160;d="themeblvd-mfp-"+themeblvd.lightbox_animation}f(".themeblvd-gallery").each(function(){f(this).find(".themeblvd-lightbox").each(function(){f(this).removeClass("themeblvd-lightbox").addClass("lightbox-gallery-item visible")});f(this).magnificPopup({disableOn:themeblvd.lightbox_mobile_gallery,delegate:"a.lightbox-gallery-item.visible",gallery:{enabled:true},removalDelay:g,mainClass:d,image:{cursor:null,},iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>'},callbacks:{markupParse:function(x,w,y){w.title=y.el.attr("title")}}})});f(".themeblvd-lightbox").magnificPopup({disableOn:themeblvd.lightbox_mobile,removalDelay:g,mainClass:d,image:{cursor:null,}});f(".themeblvd-lightbox.lightbox-iframe, li.menu-item.video > a:first-child").magnificPopup({disableOn:themeblvd.lightbox_mobile_iframe,type:"iframe",removalDelay:g,mainClass:d,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>'},callbacks:{markupParse:function(x,w,y){w.title=y.el.attr("title")}}});f.extend(true,f.magnificPopup.defaults,{tClose:themeblvd.lightbox_close,tLoading:themeblvd.lightbox_loading,gallery:{tPrev:themeblvd.lightbox_previous,tNext:themeblvd.lightbox_next,tCounter:themeblvd.lightbox_counter},image:{tError:themeblvd.lightbox_error},ajax:{tError:themeblvd.lightbox_error}})}f(".tb-jump-menu").change(function(){window.location.href=f(this).val()});f(".tb-block-slider").each(function(){var B=f(this),C=B.find(".slider-inner"),A=B.data("fx"),z=B.data("timeout"),E=true,w=B.data("nav"),D=false,x=false,y=false;if(r.hasClass("mobile")){A="slide"}if(z&&z!=="0"&&!r.hasClass("mobile")){z=z+"000"}else{E=false}if(w&&w!=="0"){w=true}else{w=false}if(!w){D=true}l.on("load",function(){C.flexslider({smoothHeight:x,animation:A,easing:"swing",slideshowSpeed:z,animationSpeed:"1000",slideshow:E,directionNav:false,controlNav:y,pauseOnHover:D,pauseOnAction:false,start:function(F){if(!r.hasClass("mobile")){B.find(".tb-slider-arrows").fadeIn(100)}B.find(".tb-loader").fadeOut(100)}})});if(w){C.on("mouseover",function(){C.data("flexslider").flexslider("pause")});B.find(".slider-inner > .tb-slider-arrows a").on("click",function(){if(f(this).hasClass("next")){C.data("flexslider").flexslider("next")}else{C.data("flexslider").flexslider("prev")}C.data("flexslider").flexslider("pause");return false})}});f(".tb-jumbotron-slider").each(function(){var w=f(this);w.on("slide.bs.carousel",function(y){var x=f(y.relatedTarget).find(".jumbotron-outer").outerHeight();if(!x){x=f(y.relatedTarget).find(".jumbotron-wrap").outerHeight()}w.animate({height:x},1000);if(!r.hasClass("mobile")){w.addClass("animate");setTimeout(function(){w.removeClass("animate")},1000)}});w.find(".tb-slider-arrows a, .carousel-indicators li").on("click",function(){w.carousel("pause")});l.on("load",function(){w.find(".carousel-control-wrap").fadeIn(200,function(){var x=w.find(".item.active .jumbotron-outer").outerHeight();w.animate({height:x});w.find(".tb-loader").fadeOut(100);o.bg_video_size(w.find(".tb-bg-video video, .tb-bg-video iframe"))})})});l.on("resize",function(){f(".tb-jumbotron-slider").each(function(){var x=f(this),w=x.find(".item.active .jumbotron-outer").outerHeight();x.css("height",w)})});var p=f(".tb-parallax .parallax-figure");l.on("load",function(){p.each(function(){var H=f(this),w=H.find("img, .img");if(r.hasClass("mobile")||l.width()>991&&l.height()>499){var z=w.height(),A=(H.height()>0)?H.height():500,D=z-A,x=H.offset().top+A,F=H.offset().top,E=l.scrollTop(),G=window.innerHeight,y=E+G,C=(y-F)/(A+G),B=Math.round((D*C));if((x>E)&&(F<(E+G))){w.css("transform","translate3D(-50%,"+B+"px, 0)")}}H.addClass("on").find(".tb-loader").fadeOut()})});l.on("scroll resize",function(){if(r.hasClass("mobile")||l.width()<992||l.height()<500){return}p.each(function(){var H=f(this),w=H.find("img, .img"),z=w.height(),A=(H.height()>0)?H.height():500,D=z-A,x=H.offset().top+A,F=H.offset().top,E=l.scrollTop(),G=window.innerHeight,y=E+G,C=(y-F)/(A+G),B=Math.round((D*C));if((x>E)&&(F<(E+G))){w.css("transform","translate3D(-50%,"+B+"px, 0)")}})});if(themeblvd.custom_buttons=="true"){f(".tb-custom-button").hover(function(){var w=f(this);w.css({"background-color":w.data("bg-hover"),color:w.data("text-hover")})},function(){var w=f(this);w.css({"background-color":w.data("bg"),color:w.data("text")})})}if(typeof google==="object"&&typeof google.maps==="object"){f(".tb-map").each(function(){var x=f(this);var w=function(){var y=x.find(".map-canvas").attr("id"),E=x.data("mode"),A,D;if(E=="roadmap"){E=google.maps.MapTypeId.ROADMAP}else{if(E=="satellite"){E=google.maps.MapTypeId.SATELLITE}else{if(E=="hybrid"){E=google.maps.MapTypeId.HYBRID}else{if(E=="terrain"){E=google.maps.MapTypeId.TERRAIN}}}}A={center:new google.maps.LatLng(x.find(".map-center").data("lat"),x.find(".map-center").data("long")),zoom:x.data("zoom"),draggable:x.data("draggable"),panControl:x.data("pan_control"),zoomControl:x.data("zoom_control"),mapMaker:false,mapTypeControl:false,mapTypeId:E,backgroundColor:"transparent",streetViewControl:false,scrollwheel:false};D=new google.maps.Map(document.getElementById(y),A);x.find(".map-marker").each(function(){var H=f(this),G=null;if(H.data("image")){G={url:H.data("image")};if(H.data("image-width")&&H.data("image-height")){G.scaledSize=new google.maps.Size(parseInt(H.data("image-width")),parseInt(H.data("image-height")))}}var F=new google.maps.Marker({position:new google.maps.LatLng(H.data("lat"),H.data("long")),map:D,title:H.data("name"),icon:G,animation:google.maps.Animation.DROP});var I=new google.maps.InfoWindow({content:'<div class="map-marker-info">'+H.find(".map-marker-info").html()+"</div>"});google.maps.event.addListener(F,"click",function(){I.open(D,F)})});var z=[],B=[],C;z.push({saturation:x.data("saturation")});z.push({lightness:x.data("lightness")});if(x.data("hue")){z.push({hue:x.data("hue")})}if(z.length){B=[{featureType:"all",elementType:"all",stylers:z}];C=new google.maps.StyledMapType(B,{name:"tb_map_style"});D.mapTypes.set("tb_map_style",C);D.setMapTypeId("tb_map_style")}};google.maps.event.addDomListener(window,"load",w)})}if(themeblvd.bootstrap=="true"){f("#calendar_wrap table").addClass("table table-bordered");f(".tabbable.fixed-height").each(function(){var w=0;f(this).find(".tab-pane").each(function(){var x=f(this).height();if(x>w){w=x}});f(this).find(".tab-pane").height(w)});f(".collapse").on("show.bs.collapse",function(){f(this).closest(".panel").find(".panel-heading a").addClass("active-trigger").find(".switch-me").removeClass("fa-plus-circle").addClass("fa-minus-circle")});f(".collapse").on("hide.bs.collapse",function(){f(this).closest(".panel").find(".panel-heading a").removeClass("active-trigger").find(".switch-me").removeClass("fa-minus-circle").addClass("fa-plus-circle")});var m;f(".tb-accordion").each(function(){m=f(this).attr("id");f(this).find(".panel-heading a").each(function(){f(this).attr("data-parent","#"+m)})});f(".tb-simple-slider .carousel-thumb-nav li").on("click",function(){var w=f(this);if(w.closest(".tb-simple-slider").data("ride")){w.closest(".carousel-thumb-nav").find("li").removeClass("active");w.addClass("active")}});f(".tb-simple-slider").on("slid.bs.carousel",function(){var w=f(this),x=w.data("bs.carousel"),y=x.getItemIndex(x.$element.find(".item.active"))+1;w.find(".carousel-thumb-nav li").removeClass("active");w.find(".carousel-thumb-nav li:nth-child("+y+")").addClass("active")});f(".tb-simple-slider .carousel-indicators").each(function(){var w=f(this),x=(14*w.find("li").length);w.css({width:x+"px","margin-left":"-"+(x/2)+"px"})});f(".tb-simple-slider").each(function(){var w=f(this);w.find(".tb-thumb-link, .carousel-indicators li, .carousel-control, .tb-slider-arrows > li > a").on("click",function(){w.carousel("pause")})});if(f.mobile){f('[data-ride="carousel"]').swiperight(function(){if(r.hasClass("rtl")){f(this).carousel("next")}else{f(this).carousel("prev")}});f('[data-ride="carousel"]').swipeleft(function(){if(r.hasClass("rtl")){f(this).carousel("prev")}else{f(this).carousel("next")}})}if(themeblvd.tabs_deep_linking=="true"){var a=document.location.hash;if(a&&a.indexOf("tab_")!=-1){f('.element-tabs a[href="'+a.replace("tab_","")+'"]').tab("show")}}f(".desktop .tb-tooltip").tooltip()}if(f.fn.easyPieChart!="undefined"){if(!r.hasClass("tb-scroll-effects")||r.hasClass("mobile")){f(".tb-milestone-percent").each(function(){var w=f(this).find(".chart");w.easyPieChart({lineWidth:6,size:160,animate:1000,barColor:w.data("color"),trackColor:w.data("track-color"),scaleColor:false,lineCap:"square",easing:"easeOutBounce"})})}}if(typeof Chart!=="undefined"){f(".tb-chart.pie, .tb-chart.doughnut").each(function(){var x=f(this),z="pie",w=x.find("canvas").get(0).getContext("2d"),A=[],y;if(x.hasClass("doughnut")){z="doughnut"}x.find(".data").each(function(){var B=f(this);A.push({value:B.data("value"),color:B.data("color"),highlight:B.data("highlight"),label:B.data("label")})});if(z=="doughnut"){y=new Chart(w).Doughnut(A,{showTooltips:x.data("tooltips")})}else{y=new Chart(w).Pie(A,{showTooltips:x.data("tooltips")})}if(x.data("legend")){x.append('<div class="legend">'+y.generateLegend()+"</div>")}if(r.hasClass("tb-scroll-effects")&&r.hasClass("desktop")){x.find(".chart-wrap").css("opacity","0").viewportChecker({classToAdd:"visible",offset:0,callbackFunction:function(B,C){B.css("opacity","1");y.render()}})}});f(".tb-chart.bar, .tb-chart.line").each(function(){var x=f(this),A="line",w=x.find("canvas").get(0).getContext("2d"),B=[],z=[],y;if(x.hasClass("bar")){A="bar"}x.find(".data").each(function(){var C=f(this);z.push({label:C.data("label"),fillColor:C.data("fill"),strokeColor:C.data("stroke"),pointColor:C.data("point"),data:C.data("values").split(",")})});B={labels:x.data("labels").split(","),datasets:z};if(A=="bar"){y=new Chart(w).Bar(B,{barShowStroke:false,scaleBeginAtZero:x.data("zero"),showTooltips:x.data("tooltips")})}else{y=new Chart(w).Line(B,{bezierCurve:x.data("curve"),datasetFill:x.data("fill"),pointDot:x.data("dot"),scaleBeginAtZero:x.data("start"),showTooltips:x.data("tooltips")})}if(x.data("legend")){x.append('<div class="legend">'+y.generateLegend()+"</div>")}if(r.hasClass("tb-scroll-effects")&&r.hasClass("desktop")){x.find(".chart-wrap").css("opacity","0").viewportChecker({classToAdd:"visible",offset:0,callbackFunction:function(C,D){C.css("opacity","1");y.render()}})}})}if(r.hasClass("tb-scroll-effects")){f("#custom-main").find(".element-section, .element-section > .element").viewportChecker({classToAdd:"visible",offset:0})}f(".desktop.tb-scroll-effects .tb-milestone .milestone").each(function(){var x=f(this),w=parseInt(x.data("num"));x.viewportChecker({classToAdd:"visible",offset:0,callbackFunction:function(y,z){y.find(".num").countTo({from:0,to:w,speed:900,refreshInterval:30})}})});if(f.fn.easyPieChart!="undefined"){f(".desktop.tb-scroll-effects .tb-milestone-percent").each(function(){var w=f(this).find(".chart");w.css("opacity","0").viewportChecker({classToAdd:"visible",offset:0,callbackFunction:function(x,y){x.easyPieChart({lineWidth:6,size:160,animate:1000,barColor:w.data("color"),trackColor:w.data("track-color"),scaleColor:false,lineCap:"square",easing:"easeOutBounce",onStart:function(){w.css("opacity","1")}})}})})}f(".desktop.tb-scroll-effects .tb-progress .progress-bar").each(function(){f(this).viewportChecker({classToAdd:"visible",offset:0,callbackFunction:function(w,x){w.animate({width:w.data("percent")+"%"},400)}})});f(".tb-bg-video.html5").each(function(){var w=f(this);w.find("video").mediaelementplayer({startVolume:0,loop:true,enableKeyboard:false,pauseOtherPlayers:false,success:function(x){x.addEventListener("canplay",function(){x.play();o.bg_video_size(w.find("video"));w.addClass("playing")},false)}});l.on("resize",function(){o.bg_video_size(w.find("video"))})});if(f(".tb-bg-video.youtube").length){f.getScript("https://www.youtube.com/iframe_api",function(){if(typeof YT==="object"){e=setInterval(function(){if(typeof YT==="object"){o.yt_init();clearInterval(e)}},500)}})}if(typeof Froogaloop!=="undefined"){f(".tb-bg-video.vimeo").each(function(){var x=f(this),y=x.find("iframe"),w=$f(y[0]);w.addEvent("ready",function(){o.bg_video_size(y);l.on("resize",function(){o.bg_video_size(y)});w.addEvent("play",function(z){x.addClass("playing")});w.api("play");w.api("setVolume",0)})})}});(function(a){a.fn.viewportChecker=function(b){var d={classToAdd:"visible",offset:100,repeat:false,callbackFunction:function(g,h){}};a.extend(d,b);var c=this,f=a(window).height(),e=((navigator.userAgent.toLowerCase().indexOf("webkit")!=-1)?"body":"html");this.checkElements=function(){var g=a(e).scrollTop(),h=(g+f);c.each(function(){var k=a(this);if(k.hasClass(d.classToAdd)&&!d.repeat){return}var i=Math.round(k.offset().top)+d.offset,j=i+(k.height());if((i<h)&&(j>g)){k.addClass(d.classToAdd);d.callbackFunction(k,"add")}else{if(k.hasClass(d.classToAdd)&&(d.repeat)){k.removeClass(d.classToAdd);d.callbackFunction(k,"remove")}}})};a(window).bind("load scroll touchmove",this.checkElements);a(window).on("resize",function(g){f=g.currentTarget.innerHeight});return this}})(jQuery);(function(b){b.fn.countTo=function(c){c=c||{};return b(this).each(function(){var e=b.extend({},b.fn.countTo.defaults,{from:b(this).data("from"),to:b(this).data("to"),speed:b(this).data("speed"),refreshInterval:b(this).data("refresh-interval"),decimals:b(this).data("decimals")},c);var j=Math.ceil(e.speed/e.refreshInterval),k=(e.to-e.from)/j;var l=this,h=b(this),g=0,i=e.from,f=h.data("countTo")||{};h.data("countTo",f);if(f.interval){clearInterval(f.interval)}f.interval=setInterval(m,e.refreshInterval);d(i);function m(){i+=k;g++;d(i);if(typeof(e.onUpdate)=="function"){e.onUpdate.call(l,i)}if(g>=j){h.removeData("countTo");clearInterval(f.interval);i=e.to;if(typeof(e.onComplete)=="function"){e.onComplete.call(l,i)}}}function d(o){var n=e.formatter.call(l,o,e);h.text(n)}})};b.fn.countTo.defaults={from:0,to:0,speed:1000,refreshInterval:100,decimals:0,formatter:a,onUpdate:null,onComplete:null};function a(d,c){return d.toFixed(c.decimals)}}(jQuery));