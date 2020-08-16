"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BarbaInit = function BarbaInit() {
  _classCallCheck(this, BarbaInit);

  var nav = document.querySelector('nav');
  var that = this;
  barba.init({
    debug: false,
    transitions: [{
      name: 'default',
      leave: function leave(data) {
        var $out = document.createElement('div');
        $out.classList.add('transition');
        data.current.container.appendChild($out);
        return gsap.from($out, {
          ease: "power2.out",
          duration: 0.5,
          x: '100vw'
        });
      },
      enter: function enter(data) {},
      afterEnter: function afterEnter(data) {
        data.current.container.style.display = 'none';
        var $in = document.createElement('div');
        $in.classList.add('transition');
        data.next.container.appendChild($in);
        return gsap.to($in, {
          ease: "power2.out",
          duration: 0.5,
          x: '-100vw'
        });
      }
    }, {
      name: 'aboutTransition',
      to: {
        namespace: ['about']
      },
      leave: function leave(data) {
        var $out = document.createElement('div');
        $out.classList.add('redTransition');
        data.current.container.appendChild($out);
        return gsap.from($out, {
          ease: "power2.out",
          duration: 0.5,
          x: '100vw'
        });
      },
      enter: function enter(data) {},
      afterEnter: function afterEnter(data) {
        data.current.container.style.display = 'none';
        var $in = document.createElement('div');
        $in.classList.add('redTransition');
        data.next.container.appendChild($in);
        return gsap.to($in, {
          ease: "power2.out",
          duration: 0.5,
          x: '-100vw'
        });
      }
    }, {
      name: 'aboutTransitionOut',
      from: {
        namespace: ['about']
      },
      leave: function leave(data) {
        var $out = document.createElement('div');
        $out.classList.add('redTransition');
        data.current.container.appendChild($out);
        return gsap.from($out, {
          ease: "power2.out",
          duration: 0.5,
          x: '100vw'
        });
      },
      enter: function enter(data) {},
      afterEnter: function afterEnter(data) {
        data.current.container.style.display = 'none';
        var $in = document.createElement('div');
        $in.classList.add('redTransition');
        data.next.container.appendChild($in);
        return gsap.to($in, {
          ease: "power2.out",
          duration: 0.5,
          x: '-100vw'
        });
      }
    }, {
      name: 'caseTransition',
      from: {
        namespace: ['case']
      },
      to: {
        namespace: ['case']
      },
      beforeLeave: function beforeLeave(data) {
        var $nextCase = data.current.container.querySelector('.next-case>.hero');
        var $others = [data.current.container.querySelector('.next-case>.arrow'), data.current.container.querySelector('.react')];
        gsap.to($others, {
          ease: "power4.out",
          duration: 1,
          y: -$nextCase.getBoundingClientRect().top - 200
        });
        return gsap.to($nextCase, {
          ease: "power4.out",
          duration: 1,
          height: '82vh',
          y: -$nextCase.getBoundingClientRect().top
        });
      },
      enter: function enter(data) {},
      afterEnter: function afterEnter(data) {
        var $intro = data.next.container.querySelector('.intro');
        gsap.to(data.current.container, {
          duration: 0,
          opacity: 0
        });
        return gsap.from($intro, {
          ease: "power4.out",
          duration: 1,
          y: 200,
          opacity: 0
        });
      }
    }],
    views: [{
      namespace: 'home',
      beforeEnter: function beforeEnter(data) {
        that.menu = new Menu(data.next.container);
        that.eyeballs = new Eyeballs(data.next.container);
        gsap.to(nav, {
          ease: "power4.out",
          duration: 1,
          y: '-100px'
        });
      },
      afterLeave: function afterLeave() {
        gsap.to(nav, {
          ease: "power4.out",
          duration: 1,
          y: '0px'
        });
      }
    }, {
      namespace: 'about',
      afterEnter: function afterEnter(data) {
        that.menu = new Menu(data.next.container);
        that.eyeballs = new Eyeballs(data.next.container);

        if (data.next.container.dataset.stuff) {
          data.next.container.scrollTo(0, data.next.container.querySelector('#stuff').offsetTop - 100);
        }
      }
    }, {
      namespace: 'case',
      afterEnter: function afterEnter(data) {
        that.fluidContainers = new FluidContainers(data.next.container);

        for (var _i = 0, _Array$from = Array.from(data.next.container.querySelectorAll(".js-autoplay")); _i < _Array$from.length; _i++) {
          var $autoplay = _Array$from[_i];

          if ($autoplay.paused) {
            $autoplay.play();
          }
        }

        if (data.next.container.querySelector('.gallery-grid')) {
          var gallery = new Gallery(data.next.container);
        }

        var $react = data.next.container.querySelector('.react');

        if ($react) {
          var threshold = $react.offsetTop - 0.5 * windowSize[1];
          var react = anims.react($react);
          var playing = false;
          data.next.container.addEventListener('scroll', function () {
            if (data.next.container.scrollTop > threshold && !playing) {
              playing = true;
              react.play();
            }
          });
        }
      }
    }, {
      namespace: 'work',
      afterEnter: function afterEnter(data) {
        gsap.to(nav, {
          ease: "power4.out",
          duration: 1,
          y: '-100px'
        });
        var videoContainer = data.next.container.querySelector('.showreel');
        var video = videoContainer.querySelector('video');
        var columns = data.next.container.querySelectorAll(".column");
        video.play();
        that.fluidContainers = new FluidContainers(data.next.container);
        data.next.container.addEventListener('scroll', function () {
          if (!video.paused && data.next.container.scrollTop > window.innerHeight / 4) {
            video.pause();
          } else if (video.paused && data.next.container.scrollTop < window.innerHeight / 4) {
            video.play();
          }
        });
        video.addEventListener('click', function () {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });
        video.addEventListener('dblclick', function () {
          video.requestFullscreen();
        });
        video.addEventListener('ended', function () {
          video.currentTime = 0;
          data.next.container.scrollTo(0, 200);
        });
        video.addEventListener('waiting', function () {
          videoContainer.classList.add('load');
          videoContainer.classList.remove('paused');
        });
        video.addEventListener('pause', function () {
          videoContainer.classList.add('paused');
          videoContainer.classList.remove('load');
          gsap.to(nav, {
            ease: "power4.out",
            duration: 1,
            y: '0px'
          });

          if (window.innerWidth > 499) {
            gsap.to(columns[0], {
              ease: "power4.out",
              duration: 1,
              y: '-195'
            });
          } else {
            gsap.to(columns[0], {
              ease: "power4.out",
              duration: 1,
              y: '-100'
            });
          }

          gsap.to(columns[1], {
            ease: "power4.out",
            duration: 1,
            y: '-100'
          });
        });
        video.addEventListener('playing', function () {
          videoContainer.classList.remove('paused');
          videoContainer.classList.remove('load');
          gsap.to(nav, {
            ease: "power4.out",
            duration: 1,
            y: '-100px'
          });
          gsap.to(columns[0], {
            ease: "power4.out",
            duration: 1,
            y: '0'
          });
          gsap.to(columns[1], {
            ease: "power4.out",
            duration: 1,
            y: '0'
          });
        });
      }
    }]
  });
  barba.hooks.after(function () {
    gtag('config', 'UA-113302800-2', {
      'page_path': window.location.pathname
    });
  });
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Eyeballs = /*#__PURE__*/function () {
  function Eyeballs(container) {
    _classCallCheck(this, Eyeballs);

    this.container = container;
    this.windowSize = [window.innerWidth, window.innerHeight];
    this.element = this.container.querySelectorAll('.js-eyeballs');
    this.listen();
  }

  _createClass(Eyeballs, [{
    key: "listen",
    value: function listen() {
      var _this = this;

      var pi = Math.PI;
      window.addEventListener('mousemove', function (e) {
        var mouseX = e.clientX / _this.windowSize[0] - 0.5;
        var mouseY = e.clientY / _this.windowSize[1] - 0.5;
        var hypo = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
        var angle = mouseY > 0 ? Math.acos(mouseX / hypo) * 180 / pi : 360 - Math.acos(mouseX / hypo) * 180 / pi;
        _this.element[0].style.transform = "rotate(".concat(angle, "deg) translateX(").concat(hypo >= 0.5 ? 20 : hypo * 40, "px)");
        _this.element[1].style.transform = "rotate(".concat(angle, "deg) translateX(").concat(hypo >= 0.5 ? 20 : hypo * 40, "px)");
      });
    }
  }]);

  return Eyeballs;
}();
"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FluidContainers = /*#__PURE__*/function () {
  function FluidContainers(container) {
    _classCallCheck(this, FluidContainers);

    this.elements = Array.from(container.querySelectorAll('.js-fluid-container'));
    this.adapt();
  }

  _createClass(FluidContainers, [{
    key: "adapt",
    value: function adapt() {
      var _iterator = _createForOfIteratorHelper(this.elements),
          _step;

      try {
        var _loop = function _loop() {
          var element = _step.value;
          var img = element.querySelector('img');

          if (img.complete) {
            if (element.offsetHeight / element.offsetWidth > img.offsetHeight / img.offsetWidth) {
              element.querySelector('img').style.width = 'auto';
              element.querySelector('img').style.height = '100%';
            } else {
              element.querySelector('img').style.width = '100%';
              element.querySelector('img').style.height = 'auto';
            }
          } else {
            img.addEventListener('load', function () {
              if (element.offsetHeight / element.offsetWidth > img.offsetHeight / img.offsetWidth) {
                element.querySelector('img').style.width = 'auto';
                element.querySelector('img').style.height = '100%';
              } else {
                element.querySelector('img').style.width = '100%';
                element.querySelector('img').style.height = 'auto';
              }
            });
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return FluidContainers;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gallery = /*#__PURE__*/function () {
  function Gallery(container) {
    _classCallCheck(this, Gallery);

    this.container = container;
    var $columns = Array.from(container.querySelectorAll('.column'));
    var $projects = Array.from(container.querySelectorAll('.gallery-project'));
    this.parallax($columns);
    this.lazyload($projects);
  }

  _createClass(Gallery, [{
    key: "parallax",
    value: function parallax($columns) {
      var _this = this;

      if (window.innerWidth > 999) {
        this.container.addEventListener('scroll', function () {
          var scroll = _this.container.scrollTop;
          $columns[1].style.transform = "translateY(-".concat(scroll / 5, "px)");
          $columns[2].style.transform = "translateY(-".concat(scroll / 10, "px)");
        });
      } else if (window.innerWidth > 499) {
        this.container.addEventListener('scroll', function () {
          var scroll = _this.container.scrollTop;
          $columns[1].style.transform = "translateY(-".concat(scroll / 10, "px)");
          $columns[4].style.transform = "translateY(-".concat(scroll / 10, "px)");
        });
      }
    }
  }, {
    key: "lazyload",
    value: function lazyload($projects) {
      var _this2 = this;

      var windowHeight = window.innerHeight;
      this.container.addEventListener('scroll', function () {
        var _loop = function _loop(i) {
          var $project = $projects[i];

          if ($project.getBoundingClientRect().top < 0.8 * windowHeight) {
            if ($project.complete || $project.readyState >= 2) {
              gsap.to($project, {
                duration: 0.4,
                opacity: 1
              });
            } else if ($project.nodeName == 'IMG') {
              $project.addEventListener('load', function () {
                gsap.to($project, {
                  duration: 0.4,
                  opacity: 1
                });
              });
            } else {
              $project.addEventListener('loadeddata', function () {
                gsap.to($project, {
                  duration: 0.4,
                  opacity: 1
                });
              });
            }

            $project.addEventListener('click', function () {
              _this2.viewer($project);
            });
            $projects.splice(i, 1);
          }
        };

        for (var i = 0; i < $projects.length; i++) {
          _loop(i);
        }
      });
    }
  }, {
    key: "viewer",
    value: function viewer($project) {
      var $viewer = document.createElement('div');
      $viewer.classList.add('viewer');
      this.container.appendChild($viewer);
      $viewer.appendChild($project.cloneNode(true));
      $viewer.addEventListener('click', function () {
        $viewer.remove();
      });
    }
  }]);

  return Gallery;
}();
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LottieAnimations = /*#__PURE__*/function () {
  function LottieAnimations(path) {
    _classCallCheck(this, LottieAnimations);

    
    
    var $nav = document.querySelector('.nav-logo');
    var navAnimation = lottie.loadAnimation({
      container: $nav,
      // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      speed: 2,
      path: path + '/data.json' // the path to the animation json

    });
    $nav.addEventListener('mouseenter', function () {
      navAnimation.setDirection(1);
      navAnimation.play();
    });
    $nav.addEventListener('mouseleave', function () {
      navAnimation.setDirection(-1);
      navAnimation.play();
    });
    this.reactId = Math.floor(Math.random() * 5 + 1);
  }

  _createClass(LottieAnimations, [{
    key: "react",
    value: function react(container) {
      var reactAnimation = lottie.loadAnimation({
        container: container,
        // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "../assets/js/".concat(this.reactId, ".json") // the path to the animation json

      });
      this.reactId + 1 == 6 ? this.reactId = 1 : this.reactId++;
      return reactAnimation;
    }
  }]);

  return LottieAnimations;
}();
"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu(container) {
    _classCallCheck(this, Menu);

    this.container = container;
    this.init();
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      this.circle = window.innerWidth >= 650 ? true : false;
      this.offset = this.circle ? 2 : 10;
      this.getSectors();
      this.linkboxes = Array.from(this.container.querySelectorAll('.link-box'));
      this.listen();
    }
  }, {
    key: "getSectors",
    value: function getSectors() {
      this.sectors = [];

      if (window.innerWidth >= 650) {
        for (var _i = 0, _Array$from = Array.from(this.container.querySelectorAll(".sektor")); _i < _Array$from.length; _i++) {
          var $sector = _Array$from[_i];
          var sector = {
            element: $sector,
            active: false,
            angle_o: 126,
            angle_c: 25,
            rotate: 0,
            color: '#567DF8',
            text: 'Work'
          };
          this.sectors.push(sector);
        }

        this.sectors[0].active = true;
        this.sectors[1].rotate = 128;
        this.sectors[1].color = '#E63E33';
        this.sectors[1].text = 'About';
        this.sectors[2].rotate = 155;
        this.sectors[2].color = '#FAC242';
        this.sectors[2].text = 'Contact';

        var _iterator = _createForOfIteratorHelper(this.sectors),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _sector = _step.value;
            _sector.sektor = new Sektor(_sector.element, _sector.active ? _sector.angle_o : _sector.angle_c, _sector.rotate, _sector.color, _sector.text);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        for (var _i2 = 0, _Array$from2 = Array.from(this.container.querySelectorAll(".sektor")); _i2 < _Array$from2.length; _i2++) {
          var _$sector = _Array$from2[_i2];
          var _sector2 = {
            element: _$sector,
            active: false,
            angle_o: 370,
            angle_c: 120,
            rotate: 0,
            color: '#567DF8',
            text: 'Work'
          };
          this.sectors.push(_sector2);
        }

        this.sectors[0].active = true;
        this.sectors[1].rotate = 380; //this.sectors[1].angle_o = 170

        this.sectors[1].color = '#E63E33';
        this.sectors[1].text = 'About';
        this.sectors[2].rotate = 510; //this.sectors[2].angle_o = 305

        this.sectors[2].color = '#FAC242';
        this.sectors[2].text = 'Contact';

        var _iterator2 = _createForOfIteratorHelper(this.sectors),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _sector3 = _step2.value;
            _sector3.sektor = new RecSektor(_sector3.element, _sector3.active ? _sector3.angle_o : _sector3.angle_c, _sector3.rotate, _sector3.color, _sector3.text);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "changeSector",
    value: function changeSector(SectorID) {
      var _this = this;

      var _loop = function _loop(i) {
        var linkbox = _this.linkboxes[i];

        if (i != SectorID) {
          _this.sectors[i].active = false;
          _this.sectors[i].rotate = i == 0 ? 0 : (_this.sectors[i - 1].active ? _this.sectors[i - 1].angle_o : _this.sectors[i - 1].angle_c) + _this.sectors[i - 1].rotate + _this.offset;

          _this.sectors[i].sektor.animateTo(_this.sectors[i].angle_c, _this.sectors[i].rotate);

          linkbox.style.display = "none";
          linkbox.classList.remove('active');
        } else {
          _this.sectors[i].active = true;
          _this.sectors[i].rotate = i == 0 ? 0 : _this.sectors[i - 1].angle_c + _this.sectors[i - 1].rotate + _this.offset;

          _this.sectors[i].sektor.animateTo(_this.sectors[i].angle_o, _this.sectors[i].rotate);

          linkbox.style.display = "block";
          window.setTimeout(function () {
            linkbox.classList.add('active');
          }, 5);
        }
      };

      for (var i = 0; i < this.sectors.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this2 = this;

      this.touchFunction = function (e) {
        var touch = e.changedTouches[0];

        if (touch.clientY <= _this2.sectors[1].sektor.sector.getBoundingClientRect().top) {
          if (!_this2.sectors[0].active) {
            e.preventDefault();

            _this2.changeSector(0);
          }
        } else if (touch.clientY >= _this2.sectors[1].sektor.sector.getBoundingClientRect().bottom) {
          if (!_this2.sectors[2].active) {
            e.preventDefault();

            _this2.changeSector(2);
          }
        } else {
          if (!_this2.sectors[1].active) e.preventDefault();
          {
            _this2.changeSector(1);
          }
        }
      };

      this.mouseFunction = function (e) {
        if (window.innerWidth < 650 || e.clientX > window.innerWidth / 2) {
          if (e.clientY <= _this2.sectors[1].sektor.sector.getBoundingClientRect().top) {
            if (!_this2.sectors[0].active) {
              _this2.changeSector(0);
            }
          } else if (e.clientY >= _this2.sectors[1].sektor.sector.getBoundingClientRect().bottom) {
            if (!_this2.sectors[2].active) {
              _this2.changeSector(2);
            }
          } else {
            if (!_this2.sectors[1].active) {
              _this2.changeSector(1);
            }
          }
        }
      };

      if (Modernizr.touchevents) {
        this.container.addEventListener('touchend', this.touchFunction);
      } else {
        this.container.addEventListener('mousemove', this.mouseFunction);
      }
    }
  }, {
    key: "adapt",
    value: function adapt(width) {
      if (this.circle && width < 650 || !this.circle && width >= 650) {
        var _iterator3 = _createForOfIteratorHelper(this.sectors),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var sector = _step3.value;
            sector.element.innerHTML = "";
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        this.linkboxes[0].style.display = "block";
        this.linkboxes[0].classList.add('active');
        this.linkboxes[1].style.display = "none";
        this.linkboxes[1].classList.remove('active');
        this.linkboxes[2].style.display = "none";
        this.linkboxes[2].classList.remove('active');
        this.container.removeEventListener('touchend', this.touchFunction);
        this.container.removeEventListener('mousemove', this.mouseFunction);
        this.init();
      }
    }
  }]);

  return Menu;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RecSektor = /*#__PURE__*/function () {
  function RecSektor(selector, angle, rotate, color, text) {
    _classCallCheck(this, RecSektor);

    this.element = selector;
    this.options = {
      size: window.innerWidth,
      stroke: 12,
      arc: true,
      angle: 180,
      sectorColor: color,
      circleColor: 'none',
      fillCircle: false,
      rotate: 0,
      text: text
    }; // Merge options with default ones

    this.options.angle = angle;
    this.options.rotate = rotate; // Reset stroke to 0 if drawing full sector

    this.options.stroke = this.options.arc ? this.options.stroke : 0; // Circle dimenstions

    this.options.center = this.options.size / 2;
    this.options.radius = this.options.stroke ? this.options.center - 50 - this.options.stroke / 2 : this.options.center - 50;
    var svg = "<svg style='width:".concat(this.options.size, "px; height:650px;' class='Sektor' xmlns=\"http://www.w3.org/2000/svg\" \n    xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox='0 0 ").concat(this.options.size, " 650'>\n      ").concat(this.getSector(), "\n    </svg>");
    this.element.innerHTML = svg;
    this.innerCircle = this.element.querySelector('.inner-circle');
    this.group = this.element.querySelector('.group');
    this.text = this.group.querySelector('.text');
    this.sector = this.group.querySelector('.Sektor-sector');
  }

  _createClass(RecSektor, [{
    key: "changeAngle",
    value: function changeAngle(angle, rotate) {
      this.options.angle = angle;
      this.options.rotate = rotate;
      this.sector.setAttribute('d', this.getSector(true));
      this.text.setAttribute('transform', "rotate(90 2,24) translate(".concat(rotate, ")"));
    }
  }, {
    key: "step",
    value: function step(ease) {
      var _this = this;

      if (Math.abs(this.options.endAngle - this.options.angle) <= 0.1 && Math.abs(this.options.endRotate - this.options.rotate) <= 0.1) {
        this.changeAngle(this.options.endAngle, this.options.endRotate);
      } else {
        //const angle = endAngle - (angleOffset * timeOffset / time);
        var angle = this.options.angle + (this.options.endAngle - this.options.angle) / ease;
        var rotate = this.options.rotate + (this.options.endRotate - this.options.rotate) / ease;
        this.changeAngle(angle, rotate);
        requestAnimationFrame(function () {
          return _this.step(ease);
        });
      }
    }
  }, {
    key: "animateTo",
    value: function animateTo(angle, rotate) {
      var _this2 = this;

      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      this.options.endAngle = angle;
      this.options.endRotate = rotate;
      requestAnimationFrame(function () {
        return _this2.step(ease);
      });
    }
  }, {
    key: "getSector",
    value: function getSector() {
      var returnD = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options; // Colors

      var sectorFill = options.arc ? 'none' : options.sectorColor;
      var sectorStroke = options.arc ? options.sectorColor : 'none';
      var d = "M16 ".concat(18 + options.rotate, " l 0 ").concat(options.angle);

      if (returnD) {
        return d;
      }

      return "\n    <g class='group'>\n    <path\n      class='Sektor-sector'\n      id='curve'\n      stroke-width='".concat(options.stroke, "px'\n      fill=").concat(sectorFill, "\n      stroke=").concat(sectorStroke, "\n      d='").concat(d, "' />\n    <style>\n    text { \n        font-size: 26px;\n        font-family: 'Okta', sans-serif;\n        font-weight: 700; \n        letter-spacing: 0px;\n    }\n    </style>\n    <text class='text' x='2' y='24' transform=\"rotate(90 2,24) translate(").concat(options.rotate, ")\">\n          ").concat(options.text, "\n    </text>\n    </g>");
    }
  }]);

  return RecSektor;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sektor = /*#__PURE__*/function () {
  function Sektor(selector, angle, rotate, color, text) {
    _classCallCheck(this, Sektor);

    this.element = selector;
    this.options = {
      size: 640,
      stroke: 12,
      arc: true,
      angle: 180,
      sectorColor: color,
      circleColor: 'none',
      fillCircle: false,
      rotate: 0,
      text: text
    }; // Merge options with default ones

    this.options.angle = angle;
    this.options.rotate = rotate; // Reset stroke to 0 if drawing full sector

    this.options.stroke = this.options.arc ? this.options.stroke : 0; // Circle dimenstions

    this.options.center = this.options.size / 2;
    this.options.radius = this.options.stroke ? this.options.center - 50 - this.options.stroke / 2 : this.options.center - 50;
    this.checkAngle();
    var svg = "<svg class='Sektor' xmlns=\"http://www.w3.org/2000/svg\" \n    xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox='0 0 ".concat(this.options.size, " ").concat(this.options.size, "'>\n      <circle class=\"inner-circle\" stroke-width=\"2\" fill=\"none\" stroke=").concat(this.options.angle > 110 ? this.options.sectorColor : 'none', " cx=\"320\" cy=\"320\" r=\"254\"></circle>\n\n      ").concat(this.getCircle(), "\n      ").concat(this.getSector(), "\n    </svg>");
    this.element.innerHTML = svg;
    this.innerCircle = this.element.querySelector('.inner-circle');
    this.group = this.element.querySelector('.group');
    this.sector = this.group.querySelector('.Sektor-sector');
  }

  _createClass(Sektor, [{
    key: "checkAngle",
    value: function checkAngle() {
      if (this.options.angle > 360) {
        this.options.angle = this.options.angle % 360;
      }
    }
  }, {
    key: "changeAngle",
    value: function changeAngle(angle, rotate) {
      this.options.angle = angle;
      this.options.rotate = rotate;
      this.checkAngle();
      this.sector.setAttribute('d', this.getSector(true));
      this.group.setAttribute('transform', "rotate(".concat(this.options.rotate, ",").concat(this.options.center, ",").concat(this.options.center, ")"));
    }
  }, {
    key: "step",
    value: function step(ease) {
      var _this = this;

      if (Math.abs(this.options.endAngle - this.options.angle) <= 0.1 && Math.abs(this.options.endRotate - this.options.rotate) <= 0.1) {
        this.changeAngle(this.options.endAngle, this.options.endRotate);
      } else {
        //const angle = endAngle - (angleOffset * timeOffset / time);
        var angle = this.options.angle + (this.options.endAngle - this.options.angle) / ease;
        var rotate = this.options.rotate + (this.options.endRotate - this.options.rotate) / ease;
        this.changeAngle(angle, rotate);
        requestAnimationFrame(function () {
          return _this.step(ease);
        });
      }
    }
  }, {
    key: "animateTo",
    value: function animateTo(angle, rotate) {
      var _this2 = this;

      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      if (angle > 360) {
        angle = angle % 360;
      }

      this.options.endAngle = angle;
      this.options.endRotate = rotate;

      if (angle > this.options.angle) {
        this.innerCircle.setAttribute('stroke', this.options.sectorColor);
      } else {
        this.innerCircle.setAttribute('stroke', 'none');
      }
      /*const startTime = new Date().valueOf();
      const endTime = startTime + time;*/
      //const angleOffset = angle - this.options.angle;


      requestAnimationFrame(function () {
        return _this2.step(ease);
      });
    }
  }, {
    key: "getSector",
    value: function getSector() {
      var returnD = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options; // Colors

      var sectorFill = options.arc ? 'none' : options.sectorColor;
      var sectorStroke = options.arc ? options.sectorColor : 'none'; // Arc angles

      var firstAngle = options.angle > 180 ? 90 : options.angle - 90;
      var secondAngle = -270 + options.angle - 180; // Arcs

      var firstArc = this.getArc(firstAngle, options);
      var secondArc = options.angle > 180 ? this.getArc(secondAngle, options) : ''; // start -> starting line
      // end -> will path be closed or not

      var end = '';
      var start = null;

      if (options.arc) {
        start = "M".concat(options.center, ",").concat(options.stroke / 2 + 50);
      } else {
        start = "M".concat(options.center, ",").concat(options.center, " L").concat(options.center, ",").concat(options.stroke / 2 + 50);
        end = 'z';
      }

      var d = "".concat(start, " ").concat(firstArc, " ").concat(secondArc, " ").concat(end);

      if (returnD) {
        return d;
      }

      return "\n    <g class='group' transform='rotate(".concat(options.rotate, ",").concat(options.center, ",").concat(options.center, ")'>\n    <path\n      class='Sektor-sector'\n      id='curve'\n      stroke-width='").concat(options.stroke, "'\n      fill=").concat(sectorFill, "\n      stroke=").concat(sectorStroke, "\n      d='").concat(d, "' />\n    <style>\n    text { \n        font-size: 26px;\n        font-family: 'Okta', sans-serif;\n        font-weight: 700; \n        letter-spacing: 0px;\n    }\n    </style>\n    <text dx=\"4\" dy=\"2\">\n        <textPath xlink:href=\"#curve\">\n            ").concat(options.text, "\n        </textPath>\n    </text>\n    </g>");
    }
  }, {
    key: "getCircle",
    value: function getCircle() {
      var options = this.options;
      var circleFill = options.fillCircle || !options.arc ? options.circleColor : 'none';
      return "<circle\n      class='Sektor-circle'\n      stroke-width='".concat(options.stroke, "'\n      fill=").concat(circleFill, "\n      stroke=").concat(options.circleColor, "\n      cx='").concat(options.center, "'\n      cy='").concat(options.center, "'\n      r='").concat(options.radius, "' />");
    }
  }, {
    key: "getArc",
    // Generates SVG arc string
    value: function getArc(angle) {
      var options = this.options;
      var x = options.center + options.radius * Math.cos(this.radians(angle));
      var y = options.center + options.radius * Math.sin(this.radians(angle));
      return "A".concat(options.radius, ",").concat(options.radius, " 1 0 1 ").concat(x, ",").concat(y);
    }
  }, {
    key: "radians",
    // Converts from degrees to radians.
    value: function radians(degrees) {
      return degrees / 180 * Math.PI;
    }
  }]);

  return Sektor;
}();
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT */
!function (e, n, t) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function s() {
    var e, n, t, s, a, i, r;

    for (var l in c) {
      if (c.hasOwnProperty(l)) {
        if (e = [], n = c[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
          e.push(n.options.aliases[t].toLowerCase());
        }

        for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], r = i.split("."), 1 === r.length ? Modernizr[r[0]] = s : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = s), f.push((s ? "" : "no-") + r.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        t = Modernizr._config.classPrefix || "";

    if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n);
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }

  function r() {
    var e = n.body;
    return e || (e = i(p ? "svg" : "body"), e.fake = !0), e;
  }

  function l(e, t, o, s) {
    var a,
        l,
        f,
        c,
        d = "modernizr",
        p = i("div"),
        h = r();
    if (parseInt(o, 10)) for (; o--;) {
      f = i("div"), f.id = s ? s[o] : d + (o + 1), p.appendChild(f);
    }
    return a = i("style"), a.type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(h)), l = t(p, e), h.fake ? (h.parentNode.removeChild(h), u.style.overflow = c, u.offsetHeight) : p.parentNode.removeChild(p), !!l;
  }

  var f = [],
      c = [],
      d = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var t = this;
      setTimeout(function () {
        n(t[e]);
      }, 0);
    },
    addTest: function addTest(e, n, t) {
      c.push({
        name: e,
        fn: n,
        options: t
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      c.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = d, Modernizr = new Modernizr();
  var u = n.documentElement,
      p = "svg" === u.nodeName.toLowerCase(),
      h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  d._prefixes = h;
  var m = d.testStyles = l;
  Modernizr.addTest("touchevents", function () {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;else {
      var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      m(o, function (e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  }), s(), a(f), delete d.addTest, delete d.addAsyncTest;

  for (var v = 0; v < Modernizr._q.length; v++) {
    Modernizr._q[v]();
  }

  e.Modernizr = Modernizr;
}(window, document);
var windowSize = [window.innerWidth, window.innerHeight];
var fluidContainers = null;
var anims = new LottieAnimations(window.location.origin + '/assets/js');
var barbaInit = new BarbaInit();
window.addEventListener('resize', function () {
  windowSize[0] = window.innerWidth;
  windowSize[1] = window.innerHeight;

  if (barbaInit.fluidContainers) {
    barbaInit.fluidContainers.adapt();
  }

  if (barbaInit.menu) {
    barbaInit.menu.adapt(windowSize[0]);
  }
});