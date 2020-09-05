
//apk

var AwardStamp = {};
AwardStamp.$container = $("#js-award-stamp-container"), AwardStamp.managePosition = function() {
  var e = $("#site-footer"),
    t = $("#js-hero");
  if (t.length) {
    var i = !(Math.round(t.offset().top) + t.outerHeight() <= window.pageYOffset);
    AwardStamp.$container.toggleClass("-sticky-to-top", i), i ? AwardStamp.$container.css({
      top: t.outerHeight() + 65
    }) : AwardStamp.$container.css({
      top: ""
    })
  } else AwardStamp.$container.removeClass("-sticky-to-top"), AwardStamp.$container.css({
    top: ""
  });
  var n = Math.round(e.offset().top - AwardStamp.$container.outerHeight() - 65) <= window.pageYOffset;
  AwardStamp.$container.toggleClass("-sticky-to-bottom", n), n ? AwardStamp.$container.css({
    bottom: e.outerHeight() + "px"
  }) : AwardStamp.$container.css({
    bottom: ""
  })
}, AwardStamp.init = function() {
  AwardStamp.managePosition(), $(window).scroll(AwardStamp.managePosition), $(document).on("barba-link-clicked", function(e) {
    AwardStamp.$container.addClass("-hidden")
  }), $(document).on("barba-page-loaded", function(e) {
    AwardStamp.managePosition(), AwardStamp.$container.removeClass("-hidden")
  }), $(".js-toggle-contact-form").on("click", AwardStamp.managePosition)
}, $(document).ready(function() {
  AwardStamp.init()
}), window.setTimeout(function() {
  $(".js-animation-top").removeClass("uk-animation-slide-top"), $(".js-animation-right").removeClass("uk-animation-slide-right"), $(".js-animation-scale").removeClass("uk-animation-scale-up"), $(".js-animation-bottom").removeClass("uk-animation-slide-bottom"), $(".js-animation-fade").removeClass("uk-animation-fade")
}, 1500), Barba.Pjax.start();


//apk

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this))
  },
  fadeOut: function() {
    return $(this.oldContainer).animate({
      opacity: 0
    }).promise()
  },
  fadeIn: function() {
    var e = this,
      t = $(this.newContainer);
    t.show(), $(this.oldContainer).hide(), t.css({
      visibility: "visible",
      opacity: 0
    }), window.location.href.indexOf("#") < 0 && $("html, body").animate({
      scrollTop: 0
    }, 0), t.animate({
      opacity: 1
    }, 800, function() {
      e.done()
    })
  }
});






//apk

Barba.Pjax.getTransition = function() {
  return pathArray = Barba.Pjax.getCurrentUrl().split("/"), FadeTransition
}, Barba.Dispatcher.on("linkClicked", function(e, t) {
  $(document).trigger("barba-link-clicked"), $("#form-area").is(":hidden") && ContactForm.reset(), $(".contact-form").hasClass("-open") && !$(e).hasClass("no-barba") && $(".js-toggle-contact-form").trigger("click"), $(e).hasClass("no-barba") || $(e).hasClass("active") || (window.innerWidth >= Bkp.large ? (Navbar.$navbar_wrapper_desktop.addClass("hide-transition"), Navbar.$navbar_wrapper_desktop.find(".navbar__item").removeClass("uk-animation-slide-left")) : (Navbar.$navbar_wrapper.removeClass("open"), Navbar.$burguer.removeClass("open")))
}), Barba.Dispatcher.on("transitionCompleted", function(e, t) {
  $(document).trigger("page-loaded"), $(document).trigger("barba-page-loaded"), window.location.href.indexOf("#") > -1 && setTimeout(function() {
    var e = window.location.href.split("#"),
      t = $("body").hasClass("home") ? $("#" + e[1]).offset().top : $("#" + e[1]).offset().top - 100;
    $("html, body").animate({
      scrollTop: t
    }, 1e3)
  }, 200), window.innerWidth >= Bkp.large && (Navbar.$navbar_wrapper_desktop.midnight("refresh"), Navbar.$navbar_wrapper_desktop.removeClass("hide-transition"), Navbar.$navbar_wrapper_desktop.find(".navbar__item").each(function(e, t) {
    var i = e + 3;
    $(this).addClass("uk-animation-slide-left delay-" + i)
  }))
});
var originalFn = Barba.Pjax.Dom.parseResponse;
Barba.Pjax.Dom.parseResponse = function(e) {
  e = e.replace(/(<\/?)body( .+?)?>/gi, "$1notbody$2>", e);
  var t = $(e).filter("notbody").attr("class");
  $("body").attr("class", t);
  var i = $(e).find("#js-navbar-wrapper").html();
  return document.getElementById("js-navbar-wrapper").innerHTML = i, document.getElementById("js-navbar-wrapper-desktop").innerHTML = i, originalFn.apply(Barba.Pjax.Dom, arguments)
}, Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck, Barba.Pjax.preventCheck = function(e, t) {
  var i = $(t);
  return !(i.hasClass("no-barba") || i.hasClass("ab-item") || 0 < i.parents(".js-child-no-barba").length) && (!!(i.attr("href") && i.attr("href").indexOf("#") > -1) || (!i.hasClass("js-menu-item") || !i.hasClass("active")) && Barba.Pjax.originalPreventCheck(e, t))
};




//apk
var Bkp = {};
Bkp.xsmall = 480, Bkp.small = 768, Bkp.medium = 960, Bkp.large = 1024, Bkp.xlarge = 1280, Bkp.xxlarge = 1360, Bkp.full = 1500, Bkp.xxsmall_max = Bkp.xsmall - 1, Bkp.xsmall_max = Bkp.small - 1, Bkp.small_max = Bkp.medium - 1, Bkp.medium_max = Bkp.large - 1, Bkp.large_max = Bkp.xlarge - 1, Bkp.xlarge_max = Bkp.xxlarge - 1, Bkp.xxlarge_max = Bkp.full - 1;




//apk
var CardMember = function() {
  if (!(this instanceof CardMember)) return new CardMember
};
CardMember.init = function() {
  $(".js-card-member").length && (TouchDetection.isTouchDevice || ($(".js-card-member").mouseenter(this.playVideo), $(".js-card-member").mouseleave(this.pauseVideo), $(".js-card-member-video").on("ended", function() {
    $(this).parents(".js-card-member").addClass("-video-finished")
  })), CardMember.setupModal())
}, CardMember.playVideo = function(e) {
  if ($(".js-card-member-video", this).length) {
    var t = $(".js-card-member-video", this).get(0);
    $(this).removeClass("-video-finished"), t.play()
  }
}, CardMember.pauseVideo = function(e) {
  if ($(".js-card-member-video", this).length) {
    var t = $(".js-card-member-video", this).get(0);
    t.pause(), t.currentTime = 0
  }
}, CardMember.changingMember = !1, CardMember.visitedMember = !1, CardMember.setupModal = function() {
  $(".js-card-member-modal").each(function() {
    var e = $(this);
    e.iziModal({
      headerColor: "",
      background: "white",
      width: "900px",
      radius: 0,
      focusInput: !0,
      navigateArrows: !1,
      onOpening: function() {
        CardMember.changingMember = !0, CardMember.visitedMember = !0
      },
      onOpened: function(t) {
        e.addClass("active"), history.pushState("", document.title, window.location.pathname + window.location.search + "#" + t.$element.attr("id")), CardMember.changingMember = !1
      },
      onClosed: function() {
        CardMember.changingMember || history.pushState("", document.title, window.location.pathname + window.location.search)
      }
    })
  }), $(".js-member-navigation").on("click", function(e) {
    e.preventDefault()
  }), $(window).on("popstate", function(e) {
    var t = $(".js-card-member-modal.active");
    t.length && CardMember.visitedMember && (backbutton = !0, t.iziModal("close"))
  })
};




//apk
var Facebook = {};
Facebook.$messenger = $("#fb-root"), Facebook.init = function() {
  $(window).scroll(function(e) {
    Facebook.$messenger.toggleClass("-shown", $(document).scrollTop() >= window.innerHeight)
  }), $("body").hasClass("single-career") && Facebook.likeFacebook()
}, Facebook.likeFacebook = function() {
  var e, t = document.getElementsByTagName("script")[0];
  document.getElementById("facebook-jssdk") || (e = document.createElement("script"), e.id = "facebook-jssdk", e.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=481081562338996&autoLogAppEvents=1", t.parentNode.insertBefore(e, t))
};




//apk
var ContactForm = {};
ContactForm.$el = $("#footer-contact-form"), ContactForm.submit = function() {
  var e = "",
    t = {
      input_values: {}
    };
  $(ContactForm.$el.serializeArray()).each(function(i, n) {
    switch (n.name) {
      case "name":
        e = "input_1";
        break;
      case "company":
        e = "input_2";
        break;
      case "subject":
        e = "input_3";
        break;
      case "email":
        e = "input_6";
        break;
      case "message":
        e = "input_5"
    }
    t.input_values[e] = n.value
  });
  var t = JSON.stringify(t),
    i = ContactForm.$el.attr("data-gform-id"),
    n = window.location.protocol + "//" + window.location.hostname + "/gravityformsapi/forms/" + i + "/submissions";
  $.ajax({
    url: n,
    type: "post",
    data: t
  }).done(function(e, t, i) {
    ContactForm.$el[0].reset(), Spinner.hide("#footer-spinner"), e.response.is_valid ? ($("img#form-conversion").remove(), $("#form-confirmation-success").append('<img id="form-conversion" height="1" width="1" style="border-style:none; visibility:hidden;" alt="" src="//www.googleadservices.com/pagead/conversion/973597117/?label=mQFTCLKzsIoBEL3Tn9AD&amp;guid=ON&amp;script=0"/>'), $("#form-confirmation-success").fadeIn()) : $("#form-confirmation-failure").fadeIn()
  }).fail(function() {
    ContactForm.$el[0].reset(), Spinner.hide("#footer-spinner"), $("#form-confirmation-failure").fadeIn()
  })
}, ContactForm.init = function() {
  ContactForm.$el.on("submit", function(e) {
    e.preventDefault(), $("#form-area").fadeOut(150, function() {
      Spinner.show("#footer-spinner"), ContactForm.submit()
    })
  }), $(".js-toggle-contact-form").on("click", function(e) {
    e.preventDefault();
    var t = $("#contact-form");
    t.hasClass("-open") ? t.fadeOut(300, function() {
      t.removeClass("-open"), $(".js-toggle-contact-form").show()
    }) : ($(this).hide(), t.fadeIn(300, function() {
      t.addClass("-open")
    }))
  })
}, ContactForm.reset = function() {
  $("#form-area").show(), ContactForm.$el.find("input").val(""), ContactForm.$el.find("textarea").val(""), $("#form-confirmation-success").hide(), $("#form-confirmation-failure").hide()
};





//apk

var FormErrors = {};
FormErrors.processInvalid = function(e) {
  e.preventDefault();
  var t = $('.form__error[for="' + this.form.id + '"]');
  t.length && t.addClass("-shown");
  var i = $('.form__field-label[for="' + this.id + '"]');
  i.length && i.addClass("-invalid")
}, FormErrors.removeInvalid = function(e) {
  var t = $('.form__field-label[for="' + this.id + '"]');
  t.length && t.removeClass("-invalid")
}, $("input").on("invalid", FormErrors.processInvalid), $("textarea").on("invalid", FormErrors.processInvalid), $("input").on("focus", FormErrors.removeInvalid), $("textarea").on("focus", FormErrors.removeInvalid);






//apk


var InsertImages = {};
InsertImages.runned = !1, InsertImages.init = function() {
  InsertImages.$el = $(".js-data-image"), InsertImages.$el.length && (InsertImages.runned = !0, InsertImages.$el.each(function() {
    var e = $(this),
      t = e.data("img-big"),
      i = e.data("img-small");
    window.innerWidth > Bkp.small && t ? e.css("background-image", " url(" + t + ")") : window.innerWidth <= Bkp.small && i && e.css("background-image", " url(" + i + ")")
  }))
}, $(window).on("resize", function() {
  InsertImages.init()
});





//apk

var GMap = {};
GMap.$el = $("#map-frame"), GMap.location = {
  lat: parseFloat(GMap.$el.attr("data-lat")),
  lng: parseFloat(GMap.$el.attr("data-lng"))
}, GMap.style = [{
  elementType: "geometry",
  stylers: [{
    color: "#212121"
  }]
}, {
  elementType: "geometry.fill",
  stylers: [{
    color: "#333333"
  }]
}, {
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  elementType: "labels.text.fill",
  stylers: [{
    color: "#757575"
  }]
}, {
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#212121"
  }]
}, {
  featureType: "administrative",
  elementType: "geometry",
  stylers: [{
    color: "#757575"
  }]
}, {
  featureType: "administrative.country",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#9e9e9e"
  }]
}, {
  featureType: "administrative.land_parcel",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "administrative.locality",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#bdbdbd"
  }]
}, {
  featureType: "landscape.man_made",
  elementType: "geometry",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "landscape.man_made",
  elementType: "labels.text",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "poi",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#757575"
  }]
}, {
  featureType: "poi.school",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road",
  elementType: "geometry.fill",
  stylers: [{
    color: "#2c2c2c"
  }]
}, {
  featureType: "road",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#8a8a8a"
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry",
  stylers: [{
    color: "#373737"
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.fill",
  stylers: [{
    color: "#2e2e2e"
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#2e2e2e"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry",
  stylers: [{
    color: "#3c3c3c"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.fill",
  stylers: [{
    color: "#2b2b2b"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#2b2b2b"
  }]
}, {
  featureType: "road.highway.controlled_access",
  elementType: "geometry",
  stylers: [{
    color: "#4e4e4e"
  }]
}, {
  featureType: "road.highway.controlled_access",
  elementType: "geometry.fill",
  stylers: [{
    color: "#2b2b2b"
  }]
}, {
  featureType: "road.highway.controlled_access",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#2b2b2b"
  }]
}, {
  featureType: "road.local",
  elementType: "geometry.fill",
  stylers: [{
    color: "#2e2e2e"
  }]
}, {
  featureType: "road.local",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#2e2e2e"
  }]
}, {
  featureType: "road.local",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#616161"
  }]
}, {
  featureType: "transit",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#757575"
  }]
}, {
  featureType: "water",
  elementType: "geometry",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#3d3d3d"
  }]
}], GMap.init = function() {
  if (GMap.$el.length) {
    var e = new google.maps.Map(GMap.$el[0], {
        center: GMap.location,
        zoom: 14,
        disableDefaultUI: !0,
        draggable: !0,
        zoomControl: !1,
        scrollwheel: !1,
        disableDoubleClickZoom: !0,
        styles: GMap.style
      }),
      t = "data:image/svg+xml;charset=UTF-8;base64," + btoa('<svg width="25" height="30" viewBox="0 0 25 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M12.649 29.894s12.024-10.955 12.024-17.583c0-6.628-5.383-12-12.024-12C6.009.31.625 5.682.625 12.31S12.65 29.894 12.65 29.894z" fill-rule="nonzero" fill="#000"/><path d="M12.649 29.894s12.024-10.955 12.024-17.583c0-6.628-5.383-12-12.024-12C6.009.31.625 5.682.625 12.31S12.65 29.894 12.65 29.894z" fill="#2A2A2A"/><path d="M12.649 18.364c-1.791 0-3.249-1.467-3.249-3.27 0-1.802 1.458-3.268 3.249-3.268 1.791 0 3.249 1.466 3.249 3.269 0 1.802-1.458 3.269-3.249 3.269zm-3.246-6.256V7.332h3.019a1.67 1.67 0 0 1 1.664 1.674c0 .862-.65 1.573-1.483 1.664a4.375 4.375 0 0 0-3.2 1.438zM8.25 15.095c0 2.444 1.97 4.426 4.399 4.426 2.43 0 4.399-1.982 4.399-4.426 0-1.818-1.09-3.38-2.648-4.06a2.841 2.841 0 0 0 .847-2.029 2.833 2.833 0 0 0-2.825-2.842H8.25v8.93z" fill="#FFF" fill-rule="nonzero"/></g></svg>');
    new google.maps.Marker({
      position: GMap.location,
      map: e,
      icon: t
    }), google.maps.event.addDomListener(window, "resize", function() {
      e.setCenter(GMap.location)
    })
  }
};






//apk
var Navbar = {};
Navbar.mobileCreated = !1, Navbar.desktopCreated = !1, Navbar.$burguer = $("#js-burguer"), Navbar.$navbar_wrapper = $("#js-navbar-wrapper"), Navbar.$navbar_wrapper_desktop = $("#js-navbar-wrapper-desktop"), Navbar.hero_height = 0, Navbar.init = function() {
  window.innerWidth >= Bkp.large ? Navbar.createMenuDesktop() : Navbar.createMenuMobile()
}, Navbar.createMenuMobile = function() {
  Navbar.mobileCreated = !0, Navbar.$burguer.midnight(), Navbar.$burguer.on("click", function(e) {
    e.preventDefault(), e.stopPropagation(), Navbar.openMobile()
  }), $(document).on("click", "#js-close-menu", function(e) {
    e.preventDefault(), e.stopPropagation(), Navbar.closeMobile()
  }), $(document).on("click", ".js-menu-item", function(e) {
    Navbar.closeMobile()
  }), Navbar.menuMobileLoop()
}, Navbar.menuMobileLoop = function() {
  var e = $(window).scrollTop();
  window.lastScrollTop > e ? (window.lastScrollTop = e, Navbar.$burguer.removeClass("-invisible")) : window.lastScrollTop < e && (window.lastScrollTop = e, e < $(document).height() / 3 || Navbar.$burguer.addClass("-invisible"));
  var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
  t && t(Navbar.menuMobileLoop)
}, Navbar.closeMobile = function() {
  TouchDetection.isTouchDevice && (document.ontouchmove = function(e) {
    return !0
  }), $("body").removeClass("no-scroll"), Navbar.$burguer.removeClass("open"), Navbar.$navbar_wrapper.removeClass("open")
}, Navbar.openMobile = function() {
  TouchDetection.isTouchDevice && (document.ontouchmove = function(e) {
    e.preventDefault()
  }), $("body").addClass("no-scroll"), Navbar.$burguer.addClass("open"), Navbar.$navbar_wrapper.addClass("open")
}, Navbar.createMenuDesktop = function() {
  Navbar.desktopCreated = !0, $(".navbar__item:last-child .js-menu-item").addClass("no-barba"), Navbar.$navbar_wrapper_desktop.midnight(), window.lastScrollTop = $(window).scrollTop(), Navbar.menuDesktopLoop()
}, Navbar.menuDesktopLoop = function() {
  var e = $(window).scrollTop();
  e >= Navbar.hero_height && Navbar.$navbar_wrapper_desktop.hasClass("uk-position-absolute") ? (Navbar.$navbar_wrapper_desktop.removeClass("uk-position-absolute"), Navbar.$navbar_wrapper_desktop.css("transform", "initial")) : e < Navbar.hero_height && !Navbar.$navbar_wrapper_desktop.hasClass("uk-position-absolute") && (Navbar.$navbar_wrapper_desktop.addClass("uk-position-absolute"), Navbar.$navbar_wrapper_desktop.css("transform", "translateY(" + Navbar.hero_height + "px)"));
  var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
  t && t(Navbar.menuDesktopLoop)
}, Navbar.heroHeight = function() {
  $("body").hasClass("home") ? (Navbar.hero_height = $("#js-hero").height(), Navbar.$navbar_wrapper_desktop.css("transform", "translateY(" + Navbar.hero_height + "px)"), Navbar.$navbar_wrapper_desktop.addClass("uk-position-absolute")) : (Navbar.hero_height = 0, Navbar.$navbar_wrapper_desktop.css("transform", "translateY(" + Navbar.hero_height + "px)"), Navbar.$navbar_wrapper_desktop.addClass("uk-position-absolute"))
}, $(window).on("resize", function() {
  window.innerWidth >= Bkp.large && !Navbar.desktopCreated ? Navbar.createMenuDesktop() : window.innerWidth < Bkp.large && !Navbar.mobileCreated && Navbar.createMenuMobile()
});





//apk
var Spinner = {};
Spinner.$el = $("#spinner"), Spinner.hide = function(e) {
  var t;
  t = e ? $(e) : Spinner.$dom, t.addClass("uk-hidden")
}, Spinner.show = function(e) {
  var t;
  t = e ? $(e) : Spinner.$dom, t.removeClass("uk-hidden")
};






//apk
var TouchDetection = {};
TouchDetection.touchEvent = "touchend", TouchDetection.isTouchDevice = !0, TouchDetection.init = function() {
  TouchDetection.isTouchDevice = "ontouchstart" in document.documentElement, TouchDetection.touchEvent = TouchDetection.isTouchDevice ? "touchend" : "click", $("body").toggleClass("no-touch", !TouchDetection.isTouchDevice), $("body").toggleClass("touch", TouchDetection.isTouchDevice)
};







//apk
var WordTyping = {};
WordTyping.init = function() {
  WordTyping.$el = $(".js-word-typing"), WordTyping.$el.length && (WordTyping.words_container = $(WordTyping.$el.data("words-collection"))[0], new Typed(WordTyping.$el[0], {
    stringsElement: WordTyping.words_container,
    typeSpeed: 27,
    backSpeed: 27,
    backDelay: 1500,
    startDelay: 0,
    loop: !0
  }))
};







//apk
var YoutubeVideo = {};
YoutubeVideo.isAPILoaded = !1, YoutubeVideo.createVideo = function(e, t) {
  document.getElementById(e).getAttribute("src") || new YT.Player(e, {
    videoId: t,
    playerVars: {
      controls: 0,
      rel: 0
    }
  })
}, YoutubeVideo.init = function(e) {
  if (void 0 === e && (e = $(".js-youtube-video")), 0 !== e.length)
    if (YoutubeVideo.isAPILoaded) e.each(function() {
      YoutubeVideo.createVideo($(this).attr("id"), $(this).data("video"))
    });
    else {
      var t = document.createElement("script");
      t.src = "https://www.youtube.com/iframe_api";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(t, i), window.onYouTubeIframeAPIReady = function() {
        YoutubeVideo.isAPILoaded = !0, e.each(function() {
          YoutubeVideo.createVideo($(this).attr("id"), $(this).data("video"))
        })
      }
    }
};







//apk
var ArchiveProject = {};
ArchiveProject.isProjectOpen = !1, ArchiveProject.closeProjects = function() {
  if (ArchiveProject.isProjectOpen) {
    var e = $(".js-hide-on-project-open"),
      t = $(".js-project-list"),
      i = t.find(".js-project-list-item"),
      n = i.find(".js-card-project"),
      s = $("#single-project-clone-background-title");
    e.show(500), s.css({
      opacity: 0
    }), t.removeClass("-project-open"), i.removeClass("-open"), n.removeClass("-big"), n.addClass("-link"), ArchiveProject.isProjectOpen = !1, "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, ArchiveProject.prevScrollTop)
  }
}, ArchiveProject.toggleProject = function(e) {
  var t = $(".js-hide-on-project-open"),
    i = $(e),
    n = i.parents(".js-project-list"),
    s = i.find(".js-card-project"),
    r = $("#single-project-clone-background-title"),
    o = ArchiveProject.isProjectOpen;
  if (o || (ArchiveProject.prevScrollTop = window.pageYOffset, window.scrollTo(0, 0)), t.css({
      visibility: o ? "visible" : "hidden"
    }), t.toggle(500), r.css({
      opacity: o ? 0 : 1
    }), i.toggleClass("-open", !o), n.toggleClass("-project-open", !o), s.toggleClass("-big", !o), s.toggleClass("-link", o), o) {
    window.scrollTo(0, ArchiveProject.prevScrollTop);
    var a = window.location.pathname.split("/");
    a = a.filter(function(e) {
      return "" !== e
    }), a = a.slice(0, 1), a = a.join("/");
    var l = window.location.protocol + "//" + window.location.hostname;
    window.location.port ? l += ":" + window.location.port + "/" + a + "/" : l += "/" + a + "/", window.history.pushState({}, null, l)
  } else setTimeout(function() {
    window.scrollTo(0, 1), window.scrollTo(0, 0)
  }, 1e3);
  ArchiveProject.isProjectOpen = !o
}, ArchiveProject.init = function() {
  ArchiveProject.prevScrollTop = window.pageYOffset, $(".js-project-list-item").find(".card-project").find("a").on("click", function(e) {
    var t = $(this);
    if (0 !== t.attr("href").indexOf("#")) {
      e.preventDefault(), ArchiveProject.isProjectOpen || window.history.pushState({}, t.attr("title"), t.attr("href"));
      var i = t.parents(".js-project-list-item");
      ArchiveProject.toggleProject(i[0]), SingleProject.galleryLazyload(i.find(".js-gallery-lazyload")), YoutubeVideo.init(i.find(".js-youtube-video"))
    }
  }), $(".js-back-button").on("click", function(e) {
    e.preventDefault();
    var t = $(this),
      i = t.parents(".js-project-list-item")[0];
    ArchiveProject.toggleProject(i)
  }), window.onpopstate = ArchiveProject.closeProjects
};







//apk
var PageHome = {};
PageHome.first_visit = !1, PageHome.$hero = $("#js-hero"), PageHome.$video_play = $("#js-hero-video-play"), PageHome.setupHero = function() {
  var e = document.getElementById("js-hero-video-mobile");
  setTimeout(function() {
    var t = e.currentTime > 0 && !e.paused && !e.ended;
    "connection" in navigator && navigator.connection.saveData && !t && window.innerWidth < Bkp.medium && (PageHome.$video_play.addClass("-shown"), PageHome.$video_play.on("click", function(t) {
      t.preventDefault(), e.play()
    }))
  }, 2e3), e.addEventListener("play", function() {
    PageHome.$video_play.removeClass("-shown")
  }), PageHome.$hero.css("height", window.innerHeight), window.initialWidth = window.outerWidth, $(window).on("orientationchange", function() {
    PageHome.$hero.css("height", window.innerHeight)
  }), $(window).resize(function() {
    window.outerWidth >= Bkp.xlarge ? PageHome.$hero.css("height", "") : window.initialWidth != window.outerWidth && (window.initialWidth = window.outerWidth, PageHome.$hero.css("height", window.innerHeight))
  }), $("#js-hero-scrolldown").on("click", function(e) {
    e.preventDefault(), PageHome.scrollToContent()
  })
}, PageHome.mouseWheel = function(e) {
  var t = 0;
  switch (e.type) {
    case "DOMMouseScroll":
      t = -e.detail / 2;
      break;
    case "wheel":
      t = -e.deltaY;
      break;
    default:
      t = e.originalEvent.wheelDelta
  }
  PageHome.first_visit && 0 > t && PageHome.scrollToContent()
}, PageHome.scrollToContent = function() {
  UIkit.scroll("#ola", null).scrollTo("#ola")
}, PageHome.init = function(e) {
  PageHome.first_visit = !$(window).scrollTop(), PageHome.setupHero(), window.innerWidth >= Bkp.medium && (PageHome.first_visit && $("body").addClass("first-visit"), document.addEventListener("wheel", PageHome.mouseWheel), document.addEventListener("mousewheel", PageHome.mouseWheel), document.addEventListener("DOMMouseScroll", PageHome.mouseWheel)), UIkit.util.on("#ola", "scrolled", function(e) {
    PageHome.first_visit && ($("body").removeClass("first-visit"), PageHome.first_visit = !1)
  })
};







//apk
var SingleProject = {};
SingleProject.hasRunned = !1, SingleProject.galleryLazyload = function(e) {
  if (void 0 === e && (e = $(".js-gallery-lazyload")), e.length) {
    var t = null,
      i = null,
      n = null;
    e.each(function(e, s) {
      i = $(s), t = i.find("img"), n = t.attr("data-src"), t.attr("src", n), i.css({
        "background-image": "url(" + n + ")"
      }), i.attr("hidden", !1)
    })
  }
}, SingleProject.animateElements = function(e) {
  var e = e || !1,
    t = $("#project-info"),
    i = $("#card-project-name"),
    n = $("#card-project-background"),
    s = $("#card-project-display");
  if (e) {
    var r = {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    };
    i.css(r), n.css(r), s.css(r), t.css(r)
  } else {
    var o;
    o = Bkp.full <= window.innerWidth ? 100 : Bkp.xlarge <= window.innerWidth ? 45 : Bkp.small <= window.innerWidth ? 10 : 0, i.css({
      transform: "translate3d(-" + o + "px, 0, 0)",
      opacity: 0
    }), n.css({
      transform: "translate3d(0, -" + o + "px, 0)",
      opacity: 0
    }), s.css({
      transform: "translate3d(0, " + o + "px, 0)",
      opacity: 0
    }), t.css({
      transform: "translate3d(" + o + "px, 0, 0)",
      opacity: 0
    })
  }
}, SingleProject.scrollActions = function(e) {
  if (!(Bkp.small > window.innerWidth) && $("#project-gallery").length) {
    var t = $("#card-project-background");
    $(document).scrollTop(), t.scrollTop(), t.height()
  }
}, SingleProject.setupScrollActions = function() {
  $(window).on("scroll", SingleProject.scrollActions), $("#project-explore-more").on("click", function(e) {
    $(window).off("scroll"), setTimeout(function() {
      $(window).on("scroll", SingleProject.scrollActions)
    }, 1e3)
  })
}, SingleProject.init = function() {
  SingleProject.hasRunned || (SingleProject.setupScrollActions(), SingleProject.hasRunned = !0), SingleProject.galleryLazyload()
};







//apk
var $ = jQuery,
  isCommon = !1,
  isHome = !1,
  isSingleProject = !1,
  isAbout = !1,
  isCareers = !1,
  isArchiveProject = !1,
  Brief = {
    common: {
      init: function() {
        TouchDetection.init(), Facebook.init(), WordTyping.init(), InsertImages.init(), isCommon || (isCommon = !0, Navbar.init(), ContactForm.init()), window.innerWidth >= Bkp.large && Navbar.heroHeight()
      },
      finalize: function() {}
    },
    home: {
      init: function() {
        isHome || (isHome = !0, PageHome.init())
      }
    },
    single_project: {
      init: function() {
        isSingleProject || (isSingleProject = !0), SingleProject.init(), YoutubeVideo.init()
      }
    },
    about: {
      init: function() {
        isAbout || (isAbout = !0), CardMember.init()
      }
    },
    single_career: {
      init: function() {
        isCareers || (isCareers = !0, Facebook.init())
      }
    },
    post_type_archive_project: {
      init: function() {
        isArchiveProject || (isArchiveProject = !0, ArchiveProject.init())
      }
    }
  },
  UTIL = {
    fire: function(e, t, i) {
      var n, s = Brief;
      t = void 0 === t ? "init" : t, n = "" !== e, n = n && s[e], (n = n && "function" == typeof s[e][t]) && s[e][t](i)
    },
    loadEvents: function() {
      UTIL.fire("common"), $.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(e, t) {
        UTIL.fire(t), UTIL.fire(t, "finalize")
      }), UTIL.fire("common", "finalize")
    }
  };
$(document).on("page-loaded", UTIL.loadEvents), $(document).ready(function() {
  $(document).trigger("page-loaded")
})