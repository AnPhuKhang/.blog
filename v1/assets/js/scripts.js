Number.prototype.map = function(in_min, in_max, out_min, out_max) {
    return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}





// Q ANIMATE

function q_animate(element, animation, delay) {

    if (animation === 'stagTop') {
        TweenMax.staggerFromTo(
            element, 1,
            { alpha: 0, y: 130 },
            { alpha: 1, y: 0, ease: Expo.easeOut, delay: delay }, 0.15
        );
    }

    if (animation === 'fadeOut') {
        TweenMax.to(
            element, .3,
            { alpha: 0, ease: Power1.easeOut, delay: delay }, 0.15
        );
    }





    if (animation === 'slideTop') {
        TweenMax.fromTo(
            element, 1.5,
            { alpha: 0, y: 50 },
            { alpha: 1, y: 0, ease: Expo.easeOut, delay: delay }
        );
    }


    if (animation === 'slideLeft') {
        TweenMax.fromTo(
            element, 1.5,
            { alpha: 0, xPercent: -100 },
            { alpha: 1, xPercent: 0, ease: Expo.easeOut, delay: delay }
        );
    }

    else if (animation === 'sideLeft') {
        TweenMax.staggerFromTo(
            element, 1.5,
            { alpha: 0, x: 120 },
            { alpha: 1, x: 0, ease: Expo.easeOut, delay: delay }, 0.2
        );
    }

    else if (animation === 'clientLeft') {
        TweenMax.staggerFromTo(
            element, 1.5,
            { alpha: 0, x: 180 },
            { alpha: .6, x: 0, ease: Expo.easeOut, delay: delay }, 0.05
        );
    }

    else if (animation === 'sideRight') {
        TweenMax.staggerFromTo(
            element, 1.5,
            { alpha: 0, x: -120 },
            { alpha: 1, x: 0, ease: Expo.easeOut, delay: delay }, 0.2
        );
    }

    else if (animation === 'clipRight') {
        TweenMax.staggerTo(
            element, 1,
            { clipPath: 'inset(0px 0px 0px 0px)', ease: Expo.easeInOut, delay: delay }, 0.1
        );
    }

    if (animation === 'stagLeft') {

        TweenMax.staggerFromTo(
            element, 1.5,
            { alpha: 0, x: 50 },
            { alpha: 1, x: 0, ease: Expo.easeOut, delay: delay }, 0.1
        );
    }

    if (animation === 'stagRight') {
        TweenMax.staggerFromTo(
            element, 1.5,
            { alpha: 0, x: -50 },
            { alpha: 1, x: 0, ease: Expo.easeOut, delay: delay }, 0.1
        );
    }

    if (animation === 'fadeLeft') {

        TweenMax.staggerFromTo(
            element, .6,
            { alpha: 1, x: 0 },
            { alpha: 0, x: -50, ease: Expo.easeIn, delay: 0 }, 0.05
        );
    }

    if (animation === 'fadeRight') {

        TweenMax.staggerFromTo(
            element, .6,
            { alpha: 1, x: 0 },
            { alpha: 0, x: 50, ease: Expo.easeIn, delay: 0 }, 0.05
        );
    }

    else if (animation === 'splitLeft') {

        var chars = element.querySelectorAll('span');

        TweenMax.set(chars, { x: 60, alpha: 0 });

        setTimeout(function () {
            TweenMax.staggerTo(
                chars, 1.3,
                { x: 0, alpha: 1, ease: Expo.easeOut }, 0.025
            );
        }, 700);

    }

    else if (animation === 'splitRight') {

        var chars = element.querySelectorAll('span');

        TweenMax.set(chars, { x: -80, alpha: 0 });

        setTimeout(function () {
            TweenMax.staggerTo(
                chars, 1.5,
                { x: 0, alpha: 1, ease: Expo.easeOut }, -0.035
            );
        }, delay);

    }

};


// split text animation

function animateText() {
    var lettr = document.getElementById("lettr");
    var lines = lettr.querySelectorAll('font');
    for (var x = lines.length - 1; x >= 0; x--) {
        var line = lines[x];
        lineHandler(line);
    };
    function lineHandler(line) {
        var text = line.textContent;
        var wordSplit = text.split("");
        line.innerHTML = "";
        for (w = 0; w < wordSplit.length; w++) {
            line.innerHTML += "<span>" + wordSplit[w] + "</span>";
        }
        chars = line.querySelectorAll('span');
        for (var x = chars.length - 1; x >= 0; x--) {
            var char = chars[x];
            charHandler(char, x);
        };
        function charHandler(char, x) {
            char.style.transitionDelay = x * .1 + "s";
        }
    }
}
// Animate Header on Page Ready

function animateHeader() {

    const headerWrap = document.querySelector('.header_animate');
    const preAnimate = document.querySelector('.header_animate_pre');
  
    if (headerWrap) {
  
  
      if (preAnimate && !isMobile()) {
  
        const revealItemsPre = preAnimate.querySelectorAll('.pre_reveal');
        const revealItems = headerWrap.querySelectorAll('.reveal_item');
        
        if (revealItemsPre && revealItems) {
          TweenMax.set(revealItems, { yPercent: 130 })
          TweenMax.staggerFromTo(
            revealItemsPre, 1, {
            skewY: 10,
            yPercent: 160,
          }, {
            skewY: 0,
            yPercent: 0,
            ease: Expo.easeOut,
            delay: .5, onComplete: function () {
              TweenMax.staggerFromTo(
                revealItemsPre, 1, {
                yPercent: 0,
                skewY: 0,
              }, {
                yPercent: -130,
                skewY: 15,
                ease: Expo.easeIn,
                delay: 0, onComplete: function () {
                  revealAll(0)
                  headerWrap.classList.add('active')
                }
  
              }, .1);
            }
  
          }, .1);
        }

      } else {
        headerWrap.classList.add('active')
        revealAll(.5)
      }
  
  
      function revealAll(delay) {
        const revealItems = headerWrap.querySelectorAll('.reveal_item');
        const revealImage = headerWrap.querySelector('.image_opacity');
        const revealSlideImage = headerWrap.querySelector('.image_reveal');
        const revealShorts = headerWrap.querySelectorAll('.reveal_short');
        const revealLine = headerWrap.querySelectorAll('.reveal_line');
  
        if (revealSlideImage) {
          var cover = revealSlideImage.querySelector('.cover')
          TweenMax.to(cover, 1.4, {
            width: 0,
            ease: Expo.easeInOut,
          })
        }
  
        if (revealItems) {
          TweenMax.staggerFromTo(
            revealItems, 1, {
            yPercent: 110,
          }, {
            yPercent: 0,
            ease: Expo.easeOut,
            delay: delay
          }, .12
          );
        }
  
        if (revealShorts) {
          TweenMax.staggerFromTo(
            revealShorts, 1.5, {
            y: 30,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: delay
          }, .2
          );
        }
  
        if (revealLine) {
          TweenMax.fromTo(
            revealLine, 2, {
            width: '0%'
          }, {
            width: '100%',
            ease: Expo.easeOut,
            delay: (delay * 2)
          }
          );
        }
  
        if (revealImage) {
          //var w = revealImage.clientWidth;
          TweenMax.to(revealImage, 4, {
            webkitMaskSize: "cover",
            webkitMaskImage: "radial-gradient(circle at 30% 30%, rgb(0, 0, 0) ".concat(0, "%, rgba(255, 255, 255, 0) ").concat(300, "%)"),
            ease: Power2.easeOut,
            delay: .8,
  
          })
        }
  
        
  
  
      }
  
  
  
    }
  
  
  }
const mathCursor = {
    lerp: (a, b, n) => {
        return (1 - n) * a + n * b
    }
}

class Cursor {
    constructor() {
        this.el = document.querySelector('[data-cursor]')
        this.hovers = document.querySelectorAll('[data-hover]')
        this.drags = document.querySelectorAll('[data-drag]')


        this.data = {
            mouse: {
                x: -200,
                y: -200
            },
            current: {
                x: -200,
                y: -200
            },
            last: {
                x: -200,
                y: -200
            },
            ease: 0.1,
            dist: 50,
            fx: {
                diff: 0,
                acc: 0,
                velo: 0,
                scale: 0
            }
        }

        this.rAF = null
        this.targets = null

        this.run = this.run.bind(this)
        this.mousePos = this.mousePos.bind(this)


        this.init()
    }



    mousePos(e) {
        this.data.mouse.x = e.clientX
        this.data.mouse.y = e.clientY

        this.data.current.x = e.clientX
        this.data.current.y = e.clientY
    }


    run() {


        this.data.last.x = mathCursor.lerp(this.data.last.x, this.data.current.x, this.data.ease)
        this.data.last.y = mathCursor.lerp(this.data.last.y, this.data.current.y, this.data.ease)

        this.data.fx.diff = this.data.current.x - this.data.last.x
        this.data.fx.acc = this.data.fx.diff / window.innerWidth
        this.data.fx.velo = + this.data.fx.acc
        let scaleNum = 1 - Math.abs(this.data.fx.velo * 3)
        this.data.fx.scale = .7 < scaleNum ? scaleNum : .7

        this.el.style.transform = `translate3d(${this.data.last.x}px, ${this.data.last.y}px, 0) scale(${this.data.fx.scale})`

        this.raf()

    }

    raf() {
        this.rAF = requestAnimationFrame(this.run)
    }

    addListeners() {

        var element = this

        var el = document.querySelector('[data-cursor]')

        this.hovers.forEach(function (target) {


            target.addEventListener('mousemove', element.mousePos, { passive: true })
            target.addEventListener('mouseover', element.mousePos, { passive: true })


            target.addEventListener('mouseover', function () {

                

                var textContent = target.getAttribute('data-hover')
                var cursorStyle = target.getAttribute('data-style')
                el.querySelector('.cursor_text').innerHTML = textContent
                el.classList.add('is-active')

                if (cursorStyle == 'fill') {
                    el.classList.add('fill')
                } else {
                    el.classList.remove('fill')
                }

                

            });

            target.addEventListener('mouseout', function () {
                el.classList.remove('is-active')
                el.classList.remove('fill')
            });

        });

        this.drags.forEach(function (target) {
            target.addEventListener('mouseover', function () {
                el.classList.add('is-drag')
            });
            target.addEventListener('mouseout', function () {
                el.classList.remove('is-drag')
            });
        });





    }

    init() {
        this.addListeners()
        this.raf()
    }

    cancel() {
        window.cancelAnimationFrame(this.rAF);
    }
}




// ----- OPTIONS ----- //

run_webgl = true
run_smoothscroll = true
run_reveal = true
customCursor = true


var cursor = false
var imagetrail = false


// ----- HELPER FUNCTIONS ----- //

// get index of an element in its parent node

function indexInParent(node) {
  var children = node.parentNode.childNodes;
  var num = 0;
  for (var i = 0; i < children.length; i++) {
    if (children[i] == node) return num;
    if (children[i].nodeType == 1) num++;
  }
  return -1;
}

// element(index) selector 

function eq(index) {
  if (index >= 0 && index < this.length)
    return this[index];
  else
    return -1;
}

// detect mobile

function isMobile() {
  return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
}

// trigger resize

function triggerResize() {
  var ev = document.createEvent('HTMLEvents');
  ev.initEvent('resize', true, false);
  window.dispatchEvent(ev);
};


// Barba Init

document.addEventListener("DOMContentLoaded", function () {
  Barba.Pjax.start();
  init()
});


// Hide Header on Scroll

function headerScroll() {
  var header = document.querySelector('.header-wrap');
  var scrollPos = window.scrollY;

  if (scrollPos > 100) {

    header.classList.add('hide');

  } else if (scrollPos < 100) {
    header.classList.remove('hide');
  }

  requestAnimationFrame(headerScroll);
}





// Accordion

function accordionInit(accordion) {

  var lists = accordion.querySelectorAll('li')
  lists.forEach(function (list) {

    list.addEventListener('click', function () {
      if (list.classList.contains('selected')) {
        closeList(list)
      } else {
        openList(list)
      }

      closeAllList()
      setTimeout(function () {
        triggerResize();
      }, 600);
    });
  });

  function closeAllList() {
    lists.forEach(function (list) {
      if (!list.classList.contains('active')) {
        closeList(list)
      }
    });
  }

  function openList(list) {
    var content = list.querySelector('.list-content')
    var more = list.querySelector('.more')
    TweenMax.set(content, { height: "auto" })
    TweenMax.from(content, 0.5, { height: 0, ease: Expo.easeOut })
    list.classList.add('active', 'selected');
    more.innerHTML = '–'

    setTimeout(function () {
      list.classList.remove('active');
    }, 200);

  }
  function closeList(list) {
    var content = list.querySelector('.list-content')
    var more = list.querySelector('.more')
    TweenMax.to(content, 0.5, { height: 0, ease: Expo.easeOut })
    list.classList.remove('selected');
    more.innerHTML = '+'
  }
}


// Side Scroll

function sideScroll(serviceSlide) {
  var progress = document.querySelector('.carousel__progress')
  var progressBar = document.querySelector('.carousel__progress-bar')
  var cursor = document.querySelector('[data-cursor]')

  var flkty = new Flickity(serviceSlide, {
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    freeScrollFriction: 0.03
  });

  flkty.on('dragStart', function (event, pointer) {
    serviceSlide.classList.add('dragging')
    progress.classList.add('dragging')
    //cursor.classList.add('is-dragging')
  });

  flkty.on('dragEnd', function (event, pointer) {
    serviceSlide.classList.remove('dragging')
    progress.classList.remove('dragging')
    //cursor.classList.remove('is-dragging')
  });

  flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
  })
}


// Confetti

function confettiInit(element) {
  var myCanvas = document.createElement('canvas');
  element.appendChild(myCanvas);

  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
  });
  myConfetti({
    particleCount: 200,
    spread: 130,
    origin: { y: .8 }
  });
}


// All INIT

function init() {

  requestAnimationFrame(headerScroll);

}

function cancelAllAnimationFrames(){
  var id = window.requestAnimationFrame(function(){});
  while(id--){
    window.cancelAnimationFrame(id);
  }
}


// All UPDATE

function updateAllInit() {


  //cancelAllAnimationFrames()

  // smooth scroll
  if (!isMobile() && run_smoothscroll) {
    var view = document.querySelector('.vs-scroll-view')
    if (view !== null) {
      view.remove()
    }
    if (document.getElementsByClassName('q_smooth').length) {
      var qSmooth = new Parallax({
        native: true,
        section: document.querySelector('.q_smooth'),
        preload: true,
        ease: 0.1,
        divs: document.querySelectorAll('.vs-div'),
      });
      qSmooth.init();
    }
  }

  // slider
  var q_slide = document.getElementById('q_slide');
  if (q_slide) {
    qSlide(q_slide);
  };

  // Accordion
  var accordion = document.querySelector('.accordion')
  if (accordion) {
    accordionInit(accordion);
  };

  animateHeader()

  // reveal
  if (run_reveal) {
    initReveal()
  }

  // custom cursor
  if(!isMobile() && customCursor){
    if (cursor) {
      cursor.cancel()
    }
    document.body.classList.add('custom_cursor')
    cursor = new Cursor()
  }
  

  // Magnet
  var magnets = document.querySelectorAll('.magnet');
  if (magnets.length > 0 && !isMobile()) {
    magnet(magnets)
  }


  // Trail
  var trailElement = document.getElementById('trails')
  if (trailElement) {
    initTrail(trailElement)
  }
  

  // Side scroll
  var serviceSlide = document.querySelector('.carousel')
  if (serviceSlide) {
    sideScroll(serviceSlide)
  }

  // Confetti
  var confettiDOM = document.querySelector('.confetti')
  if (confettiDOM) {
    setTimeout(function () {
      confettiInit(confettiDOM)
    }, 1200);

  }


  // WebGL Image Motion Hover
  const container = document.querySelector('.motion_hover')
  if (container && run_webgl && !isMobile()) {
    const itemsWrapper = container.querySelector('.motion_hover_container')
    const effect = new StretchEffect(container, itemsWrapper)
    //const effect = new RGBShiftEffect(container, itemsWrapper, { strength: 0.25 })
  }

  triggerResize();

  window.scrollTo(0, 0);

}


// Dynamic Load for Barba

function showLoading(container) {
    const dynamicLoad = document.getElementById('dynamicLoad');
    const dynamicProgress = dynamicLoad.querySelector('.progress');
    const dynamicBar = dynamicLoad.querySelector('.bar');


    var loadedCount = 0;
    var loadingProgress = 0;

    TweenMax.set(container, { alpha: 0 });

    TweenMax.to(
        dynamicProgress, .5,
        { width: '100%', ease: Expo.easeInOut }
    );

    var imgLoad = imagesLoaded(container, { background: '.background-image' });

    if (imgLoad.images.length == 0) {
        dynamicBar.style.width = '100%';
        doneLoading()
    }

    imgLoad.on('progress', function (instance, image) {
        var imagesToLoad = instance.images.length
        loadProgress(imagesToLoad);
    });

    function loadProgress(imagesToLoad) {
        loadedCount++;
        loadingProgress = (loadedCount / imagesToLoad) * 100;
        dynamicBar.style.width = loadingProgress + '%';

        

        if (loadingProgress == 100) {
            doneLoading()
        }
    }

    function doneLoading() {
        setTimeout(function () {
            hideLoading();
            updateAllInit();
        }, 500);

    }

    function hideLoading() {
        setTimeout(function () {
            TweenMax.set(dynamicProgress, { css: { right: '0', left: 'auto' } });
            TweenMax.to(
                dynamicProgress, .5,
                { alpha: 1, width: '0', ease: Expo.easeInOut, onComplete: resetLeft() }
            );
        }, 100);
        TweenMax.to(container, .6, { alpha: 1 });
        function resetLeft() {
            setTimeout(function () {
                TweenMax.set(dynamicProgress, { css: { left: '0', right: 'auto' } });
                TweenMax.set(dynamicBar, { css: { width: '0' } });
            }, 450);
        }
        document.body.classList.remove('is-loading')
        
    }


}




//Barba Events


Barba.Dispatcher.on('linkClicked', function (el, e) {
    const barbaContainer = document.querySelector('.barba-container');
    if (el.classList.contains("logo")) { }
    TweenMax.to(barbaContainer, .4, { alpha: 0 });
    
    //hide custom cursor
    var el = document.querySelector('[data-cursor]')
    el.classList.remove('is-active')
    el.classList.remove('fill')

});



Barba.Dispatcher.on('initStateChange', function() {
    if (typeof ga === 'function') {
      ga('send', 'pageview', location.pathname);
    }
  });

Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
    showLoading(container);
});

Barba.Dispatcher.on('transitionCompleted', function () { });




var HideShowTransition = Barba.BaseTransition.extend({
    start: function () {
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.finish.bind(this));
    },

    fadeOut: function () {
    },

    finish: function () {
        this.newContainer.style.opacity = 0;
        this.done();
    }
});

Barba.Pjax.getTransition = function () {
    return HideShowTransition;
};

// ----- Q MAGNET ----- //


function magnet(magnets) {

	

    const btn = magnets;

    
    const update = function(e) {
        const span = this.querySelector('.magnet_circle');
        const spanFast = this.querySelector('.magnet_circle_fast');
        const spanChild = this.querySelector('.magnet_arrow');
        
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            walk = 6,
            //        xWalk = (x / width) * (walk * 14.5) - walk,
            xWalk = (x / width) * (walk * 3) - (walk * 1.5),
            yWalk = (y / height) * (walk * 1.5) - (walk * .5);

        if(span) {
            span.style.transform = `translate(${xWalk}px, ${yWalk}px) scale(1.5)`;
        }
        if(spanChild) {
            spanChild.style.transform = `translate(${xWalk}px, ${yWalk}px)`;
        }
        if(spanFast) {
            spanFast.style.transform = `translate(${xWalk*1.5 +10}px, ${yWalk*3-10}px) scale(1.5)`;
        }
        
    
        if(e.type === 'mouseleave') {
            if(span) {
                span.style.transform = '', span.style.borderColor = `rgba(#fff,0)`;
            }
            
            if(spanChild) {
                spanChild.style.transform = '';
            }
            if(spanFast) {
                spanFast.style.transform = '';
                spanFast.style.borderColor = `rgba(#fff,0)`;
            }
        }
        
         
    }
    
    btn.forEach(b => b.addEventListener('mousemove', update));
    btn.forEach(b => b.addEventListener('mouseleave', update));
        	
      
      
      

}


// ---- NAVIGATION MENU ---- //




const menu = document.getElementById('menuNav');
const overlay = document.getElementById('menu-overlay');
const navBtn = document.getElementById('nav');
const main = document.getElementById('menu-overlay');
const cover = document.getElementById('menu-cover');
const menuItem = document.querySelectorAll("#menuNav ol li");
const header = document.querySelector(".header-wrap");
const clsBtn = document.getElementById('navClose');
const address = menu.querySelector('.address');
const innerLinks = menu.querySelectorAll('.inner_link');

navMenu();

function navMenu() {


    for (var i = innerLinks.length - 1; i >= 0; i--) {
        var innerLink = innerLinks[i];
        innerLink.addEventListener('click', function (e) {
            closeMenu();
        });
    };


    navBtn.addEventListener('click', function (e) {
        openMenu();
    });
    clsBtn.addEventListener('click', function (e) {
        closeMenu();
    });


}

function openMenu() {

    var menuFade = document.querySelectorAll(".menu_fade");
    
    header.classList.add('menu_show')
    menu.classList.add('active');
    TweenMax.to(
        navBtn, .5,
        { opacity: 0, x: 100, ease: Power4.easeIn }
    );
    
    TweenMax.to(
        menuFade, .5,
        { opacity: 0, y: -20, ease: Power4.easeIn }
    );
    TweenMax.to(
        main, .5,
        { opacity: 1, ease: Power2.easeIn }
    );
    TweenMax.to(
        cover, 1,
        { opacity: 1, ease: Power2.easeIn }
    );
    TweenMax.to(
        menu, .5,
        { opacity: 1, delay: .5, ease: Power2.easeIn }
    );
    TweenMax.fromTo(
        address, 1,
        { opacity: 0, y: 0, yPercent: -40 },
        { opacity: 1, y: 0, yPercent: -50, delay: 1, ease: Power2.easeOut }
    );
    TweenMax.staggerFromTo(menuItem, 2, {
        y: 100,
        opacity: 0
    }, {
        y: "0px",
        opacity: 1,
        ease: Expo.easeOut,
        delay: .5
    }, .1)

}

function closeMenu() {

    var menuFade = document.querySelectorAll(".menu_fade");

    header.classList.remove('menu_show')

    menu.classList.remove('active');
    TweenMax.to(
        navBtn, 1.5,
        { opacity: 1, x: 0, delay: 1, ease: Power4.easeOut }
    );
    
    TweenMax.to(
        menuFade, 1.5,
        { opacity: 1, y: 0, delay: 1, ease: Power4.easeOut }
    );
    TweenMax.to(
        main, 1.5,
        { opacity: 0, delay: 1, ease: Power2.easeOut }
    );
    TweenMax.to(
        cover, 1.5,
        { opacity: 0, delay: 1, ease: Power2.easeOut }
    );
    TweenMax.to(
        menu, .5,
        { opacity: 0, delay: .5, ease: Power2.easeIn }
    );
    TweenMax.fromTo(
        address, .5,
        { opacity: 1, y: 0, yPercent: -50 },
        { opacity: 0, y: 0, yPercent: -40, ease: Power2.easeIn }
    );
    TweenMax.staggerTo(menuItem, 1, {
        y: 100,
        opacity: 0,
        ease: Power2.easeIn
    }, -.1)

}

class EffectShell {
    constructor(container = document.body, itemsWrapper = null) {
        this.container = container
        this.itemsWrapper = itemsWrapper
        if (!this.container || !this.itemsWrapper) return
        this.setup()
        this.initEffectShell().then(() => {
            this.isLoaded = true
            if (this.isMouseOver) this.onMouseOver(this.tempItemIndex)
            this.tempItemIndex = null
        })
        this.createEventsListeners()
    }

    setup() {
        window.addEventListener('resize', this.onWindowResize.bind(this), false)

        // renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setSize(this.viewport.width, this.viewport.height)
        this.renderer.setPixelRatio = window.devicePixelRatio
        //this.container.appendChild(this.renderer.domElement)
        this.container.insertBefore(this.renderer.domElement, this.container.firstChild);

        // scene
        this.scene = new THREE.Scene()

        // camera
        this.camera = new THREE.PerspectiveCamera(
            this.container.getAttribute('data-fov') || 40,
            
            this.viewport.aspectRatio,
            0.1,
            100
        )

        

        
        
        this.camera.position.set(0, 0, 3)

        //mouse
        this.mouse = new THREE.Vector2()

        // time
        this.timeSpeed = 2
        this.time = 0
        this.clock = new THREE.Clock()

        // animation loop
        this.renderer.setAnimationLoop(this.render.bind(this))
    }

    render() {
        // called every frame
        this.time += this.clock.getDelta() * this.timeSpeed
        this.renderer.render(this.scene, this.camera)
    }

    initEffectShell() {
        let promises = []

        this.items = this.itemsElements

        const THREEtextureLoader = new THREE.TextureLoader()
        this.items.forEach((item, index) => {
            // create textures
            promises.push(
                this.loadTexture(
                    THREEtextureLoader,
                    item.img ? item.img.src : null,
                    index
                )
            )
        })

        return new Promise((resolve, reject) => {
            // resolve textures promises
            Promise.all(promises).then(promises => {
                // all textures are loaded
                promises.forEach((promise, index) => {
                    // assign texture to item
                    this.items[index].texture = promise.texture
                })
                resolve()
            })
        })
    }

    createEventsListeners() {
        this.items.forEach((item, index) => {
            item.element.addEventListener(
                'mouseover',
                this._onMouseOver.bind(this, index),
                false
            )
        })

        this.container.addEventListener(
            'mousemove',
            this._onMouseMove.bind(this),
            false
        )
        this.itemsWrapper.addEventListener(
            'mouseleave',
            this._onMouseLeave.bind(this),
            false
        )
    }

    _onMouseLeave(event) {
        this.isMouseOver = false
        this.onMouseLeave(event)
    }

    _onMouseMove(event) {
        // get normalized mouse position on viewport
        this.mouse.x = (event.clientX / this.viewport.width) * 2 - 1
        this.mouse.y = -((event.clientY - this.container.getBoundingClientRect().top) / this.viewport.height )  * 2 + 1  

        this.onMouseMove(event)
    }

    _onMouseOver(index, event) {
        this.tempItemIndex = index
        this.onMouseOver(index, event)
    }

    onWindowResize() {
        this.camera.aspect = this.viewport.aspectRatio
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.viewport.width, this.viewport.height)
    }

    onUpdate() { }

    onMouseEnter(event) { }

    onMouseLeave(event) { }

    onMouseMove(event) { }

    onMouseOver(index, event) { }

    get viewport() {
        let width = this.container.clientWidth
        let height = this.container.clientHeight
        let aspectRatio = width / height
        return {
            width,
            height,
            aspectRatio
        }
    }

    get viewSize() {
        // fit plane to screen
        // https://gist.github.com/ayamflow/96a1f554c3f88eef2f9d0024fc42940f

        let distance = this.camera.position.z
        let vFov = (this.camera.fov * Math.PI) / 180
        let height = 2 * Math.tan(vFov / 2) * distance
        let width = height * this.viewport.aspectRatio
        return { width, height, vFov }
    }

    get itemsElements() {
        // convert NodeList to Array
        const items = [...this.itemsWrapper.querySelectorAll('.link')]

        //create Array of items including element, image and index
        return items.map((item, index) => ({
            element: item,
            img: item.querySelector('img') || null,
            index: index
        }))
    }

    loadTexture(loader, url, index) {
        // https://threejs.org/docs/#api/en/loaders/TextureLoader
        return new Promise((resolve, reject) => {
            if (!url) {
                resolve({ texture: null, index })
                return
            }
            // load a resource
            loader.load(
                // resource URL
                url,

                // onLoad callback
                texture => {
                    resolve({ texture, index })
                },

                // onProgress callback currently not supported
                undefined,

                // onError callback
                error => {
                    console.error('An error happened.', error)
                    reject(error)
                }
            )
        })
    }
}


class StretchEffect extends EffectShell {
    constructor(container = document.body, itemsWrapper = null, options = {}) {
        super(container, itemsWrapper)
        if (!this.container || !this.itemsWrapper) return

        options.strength = options.strength || 0.25
        this.options = options

        this.init()
    }

    init() {
        this.position = new THREE.Vector3(0, 0, 0)
        this.scale = new THREE.Vector3(1, 1, 1)
        this.geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32)
        this.uniforms = {
            uTexture: {
                value: null
            },
            uOffset: {
                value: new THREE.Vector2(0.0, 0.0)
            },
            uAlpha: {
                value: 0
            }
        }
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: `
          uniform vec2 uOffset;
  
          varying vec2 vUv;
  
          vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
            float M_PI = 3.1415926535897932384626433832795;
            position.x = position.x + (sin(uv.y * M_PI) * offset.x);
            position.y = position.y + (sin(uv.x * M_PI) * offset.y);
            return position;
          }
  
          void main() {
            vUv =  uv + (uOffset * 2.);
            vec3 newPosition = position;
            newPosition = deformationCurve(position,uv,uOffset);
            gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
          }
        `,
            fragmentShader: `
          uniform sampler2D uTexture;
          uniform float uAlpha;
  
          varying vec2 vUv;
  
          vec2 scaleUV(vec2 uv,float scale) {
            float center = 0.5;
            return ((uv - center) * scale) + center;
          }
  
          void main() {
            vec3 color = texture2D(uTexture,scaleUV(vUv,0.8)).rgb;
            gl_FragColor = vec4(color,uAlpha);
          }
        `,
            transparent: true
        })
        this.plane = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.plane)
    }

    onMouseEnter() {
        if (!this.currentItem || !this.isMouseOver) {
            this.isMouseOver = true
            // show plane
            TweenLite.to(this.uniforms.uAlpha, 0.5, {
                value: 1,
                ease: Power4.easeOut
            })
        }
    }

    onMouseLeave(event) {
        TweenLite.to(this.uniforms.uAlpha, 0.5, {
            value: 0,
            ease: Power4.easeOut
        })
    }

    onMouseMove(event) {
        // project mouse position to world coodinates
        let x = this.mouse.x.map(
            -1,
            1,
            -this.viewSize.width / 2,
            this.viewSize.width / 2
        )
        let y = this.mouse.y.map(
            -1,
            1,
            -this.viewSize.height / 2,
            this.viewSize.height / 2
        )

        // update position
        this.position = new THREE.Vector3(x, y, 0)
        TweenLite.to(this.plane.position, 1, {
            x: x,
            y: y,
            ease: Power4.easeOut,
            onUpdate: this.onPositionUpdate.bind(this)
        })
    }

    onPositionUpdate() {
        // compute offset
        let offset = this.plane.position
            .clone()
            .sub(this.position)
            .multiplyScalar(-this.options.strength)
        this.uniforms.uOffset.value = offset
    }

    onMouseOver(index, e) {
        if (!this.isLoaded) return
        this.onMouseEnter()
        if (this.currentItem && this.currentItem.index === index) return
        this.onTargetChange(index)
    }

    onTargetChange(index) {
        // item target changed
        this.currentItem = this.items[index]
        if (!this.currentItem.texture) return

        // compute image ratio
        let imageRatio =
            this.currentItem.img.naturalWidth / this.currentItem.img.naturalHeight
        this.scale = new THREE.Vector3(imageRatio, 1, 1)
        this.uniforms.uTexture.value = this.currentItem.texture
        this.plane.scale.copy(this.scale)
    }
}

/*

class RGBShiftEffect extends EffectShell {
    constructor(container = document.body, itemsWrapper = null, options = {}) {
      super(container, itemsWrapper)
      if (!this.container || !this.itemsWrapper) return
  
      options.strength = options.strength || 0.25
      this.options = options
  
      this.init()
    }
  
    init() {
      this.position = new THREE.Vector3(0, 0, 0)
      this.scale = new THREE.Vector3(1, 1, 1)
      this.geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32)
      this.uniforms = {
        uTime: {
          value: 0
        },
        uTexture: {
          value: null
        },
        uOffset: {
          value: new THREE.Vector2(0.0, 0.0)
        },
        uAlpha: {
          value: 0
        }
      }
      this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: `
          uniform vec2 uOffset;
  
          varying vec2 vUv;
  
          vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
            float M_PI = 3.1415926535897932384626433832795;
            position.x = position.x + (sin(uv.y * M_PI) * offset.x);
            position.y = position.y + (sin(uv.x * M_PI) * offset.y);
            return position;
          }
  
          void main() {
            vUv = uv;
            vec3 newPosition = position;
            newPosition = deformationCurve(position,uv,uOffset);
            gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
          }
        `,
        fragmentShader: `
          uniform sampler2D uTexture;
          uniform float uAlpha;
          uniform vec2 uOffset;
  
          varying vec2 vUv;
  
          vec3 rgbShift(sampler2D texture, vec2 uv, vec2 offset) {
            float r = texture2D(uTexture,vUv + uOffset).r;
            vec2 gb = texture2D(uTexture,vUv).gb;
            return vec3(r,gb);
          }
  
          void main() {
            vec3 color = rgbShift(uTexture,vUv,uOffset);
            gl_FragColor = vec4(color,uAlpha);
          }
        `,
        transparent: true
      })
      this.plane = new THREE.Mesh(this.geometry, this.material)
      this.scene.add(this.plane)
    }
  
    onMouseEnter() {
      if (!this.currentItem || !this.isMouseOver) {
        this.isMouseOver = true
        // show plane
        TweenLite.to(this.uniforms.uAlpha, 0.5, {
          value: 1,
          ease: Power4.easeOut
        })
      }
    }
  
    onMouseLeave(event) {
      TweenLite.to(this.uniforms.uAlpha, 0.5, {
        value: 0,
        ease: Power4.easeOut
      })
    }
  
    onMouseMove(event) {
      // project mouse position to world coodinates
      let x = this.mouse.x.map(
        -1,
        1,
        -this.viewSize.width / 2,
        this.viewSize.width / 2
      )
      let y = this.mouse.y.map(
        -1,
        1,
        -this.viewSize.height / 2,
        this.viewSize.height / 2
      )
  
      this.position = new THREE.Vector3(x, y, 0)
      TweenLite.to(this.plane.position, 1, {
        x: x,
        y: y,
        ease: Power4.easeOut,
        onUpdate: this.onPositionUpdate.bind(this)
      })
    }
  
    onPositionUpdate() {
      // compute offset
      let offset = this.plane.position
        .clone()
        .sub(this.position)
        .multiplyScalar(-this.options.strength)
      this.uniforms.uOffset.value = offset
    }
  
    onMouseOver(index, e) {
      if (!this.isLoaded) return
      this.onMouseEnter()
      if (this.currentItem && this.currentItem.index === index) return
      this.onTargetChange(index)
    }
  
    onTargetChange(index) {
      // item target changed
      this.currentItem = this.items[index]
      if (!this.currentItem.texture) return
  
      // compute image ratio
      let imageRatio =
        this.currentItem.img.naturalWidth / this.currentItem.img.naturalHeight
      this.scale = new THREE.Vector3(imageRatio, 1, 1)
      this.uniforms.uTexture.value = this.currentItem.texture
      this.plane.scale.copy(this.scale)
    }
  }
  */
function initReveal() {


    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const reveal_items = document.querySelectorAll('.reveal');

    reveal_items.forEach((rev, i) => {
        rev.classList.add('reveal__on')
    });

    if (isSafari) {
        
        reveal_items.forEach((rev, i) => {
            //rev.classList.remove('reveal')
        });
        
        //return
    }

    if (reveal_items && reveal_items.length > 0) {
        
        requestAnimationFrame(reveal);
    }

    function reveal() {

        const reveal_on_items = document.querySelectorAll('.reveal__on');
        

        reveal_on_items.forEach((rev, i) => {
            let offsetTop = rev.getBoundingClientRect().top + document.body.scrollTop;
            if (window.pageYOffset <= 100 && !(offsetTop <= window.innerHeight)) {
                resetReveal(rev)
            } else {
                if (offsetTop <= window.innerHeight) {
                    setTimeout(() => {
                        runReveal(rev)
                    }, 10) 
                }
            }

            
        })

        requestAnimationFrame(reveal);
    }

    function runReveal(rev) {
        
        const reveal_masks = rev.querySelectorAll('.text_covers');

        if (reveal_masks && !rev.classList.contains('active')) {
            TweenMax.staggerTo(reveal_masks, 1.2, {
                //alpha:1,
                webkitMaskSize: "cover",
                webkitMaskImage: "linear-gradient(170deg, rgb(0, 0, 0) ".concat(60, "%, rgba(255, 255, 255, 0) ").concat(150, "%)"),
                ease:Power0.easeOut,
                delay:.3
            },.1)
          
        }
        setTimeout(() => {rev.classList.add('active')}, 10) 
        
    }

    function resetReveal(rev) {
        
        const reveal_masks = rev.querySelectorAll('.text_covers');

        if (reveal_masks && rev.classList.contains('active')) {
            TweenMax.set(reveal_masks, {
                //alpha:0,
                webkitMaskSize: "cover",
                webkitMaskImage: "linear-gradient(170deg, rgb(0, 0, 0) ".concat(0, "%, rgba(255, 255, 255, 0) ").concat(0, "%)"),
            })
          
        }

        setTimeout(() => {rev.classList.remove('active')}, 10) 
    }


}

// ----- Q SLIDE ----- //


function qSlide(q_slide) {

    q_slide.classList.add('q_slide');

    // global vars

    var slides = q_slide.querySelectorAll('.slide');




    // trigger resize

    function triggerResize() {
        var ev = document.createEvent('HTMLEvents');
        ev.initEvent('resize', true, false);
        window.dispatchEvent(ev);
    };

    // autoplay function

    function autoPlay() {
        if (q_slide.getAttribute('autoplay') != null) {
            var q_slideDuration = q_slide.getAttribute('autoplay') || 4000;

            var timeout = setTimeout(function () {
                q_slideNext(q_slide, false, true);
            }, q_slideDuration);
        }
    };




    // parallax init

    var q_slideFriction = 1; // no parallax
    if (q_slide.getAttribute('parallax') != null) {
        var q_slideFriction = q_slide.getAttribute('parallax') || 0.25;
    }

    // opacity init

    if (q_slide.getAttribute('opacity') != null) {
        var slideOpacity = q_slide.getAttribute('opacity') || 0.6;
    }


    // split text init


    /*
    var lines = q_slide.querySelectorAll('.q_splitText');
    if (lines) {
        for (var i = lines.length - 1; i >= 0; i--) {
            var line = lines[i];
            
            var content = line.textContent;
            var letters = content.split("");
            line.innerHTML = "";

            for (var idx = 0; idx < letters.length; idx++) {
                line.innerHTML += "<span>" + letters[idx] + "</span>";
            }
            
        };

    }
    */



    // switch slide function

    function q_slideSwitch(q_slide, index, auto) {


        if (q_slide.getAttribute('wait') === 'true') return;

        var captions = q_slide.querySelectorAll('.slide-content');

        var activeSlide = q_slide.querySelector('.q_current');
        var activeSlideImage = activeSlide.querySelector('.image-container');
        var newSlide = eq.call(slides, index);
        var index = indexInParent(newSlide);
        var newSlideImage = newSlide.querySelector('.image-container');
        var newSlideContent = newSlide.querySelector('.slide-content') || captions[index];
        var allSlideElements = q_slide.querySelectorAll('.q_split_wrap');
        if (newSlideContent) {
            var newSlideElements = newSlideContent.querySelectorAll('.q_split_wrap');
        }


        if (newSlide === activeSlide) return;

        newSlide.classList.add('is-new');

        var timeout = 0;
        clearTimeout(timeout);




        q_slide.setAttribute('wait', 'true');

        if (indexInParent(newSlide) > indexInParent(activeSlide)) {
            // next slide
            var newSlideRight = 0;
            var newSlideLeft = 'auto';
            var newSlideImageLeft = -q_slide.clientWidth * (1 - q_slideFriction) + 'px';
            var newSlideContentLeft = 'auto';
            var newSlideContentRight = 0;
            var activeSlideImageLeft = -q_slide.clientWidth * q_slideFriction + 'px';
            var sideAnim = 'sideLeft';
            var splitAnim = 'splitLeft';
            var slideAnim = 'stagLeft';
            var fadeAnim = 'fadeLeft';
        } else {
            // prev slide
            var newSlideRight = '';
            var newSlideLeft = 0;
            var newSlideImageLeft = -q_slide.clientWidth * q_slideFriction + 'px';
            var newSlideContentLeft = 0;
            var newSlideContentRight = 'auto';
            var activeSlideImageLeft = q_slide.clientWidth * q_slideFriction + 'px';
            var sideAnim = 'sideRight';
            var splitAnim = 'splitRight';
            var slideAnim = 'stagRight';
            var fadeAnim = 'fadeRight';

        }

        newSlide.style.display = 'block';
        newSlide.style.width = 0;
        newSlide.style.right = newSlideRight;
        newSlide.style.left = newSlideLeft;
        newSlide.style.zIndex = 2;

        newSlideImage.style.width = q_slide.clientWidth + 'px';
        activeSlideImage.style.transform = 'translateX(0)';

        TweenMax.set(newSlideImage, { x: newSlideImageLeft });


        var img = newSlide.querySelector('img')
        var video = newSlide.querySelector('video')


        if (img) {
            TweenMax.set(img, { scale: 1.4, rotation: 5 });
        } else if (video) {
            TweenMax.set(video, { scale: 1.6, rotation: 0 });
        }

        

        if (slideOpacity) {
            newSlideImage.style.opacity = slideOpacity;
        }



        if (newSlideContent) {
            newSlideContent.style.width = q_slide.clientWidth + 'px';
            newSlideContent.style.right = newSlideContentRight;
            newSlideContent.style.left = newSlideContentLeft;
        }


        TweenMax.to(activeSlideImage, 1.5, {
            x: activeSlideImageLeft,
            opacity: slideOpacity,
            ease: Expo.easeInOut
        });

        var old_video = activeSlideImage.querySelector('video')

        if (old_video) {

            setTimeout(function () {
                old_video.pause()
            }, 700);
        }




        TweenMax.to(newSlide, 1.5, {
            width: q_slide.clientWidth,
            ease: Expo.easeInOut
        });

        var img = newSlide.querySelector('img')
        var video = newSlide.querySelector('video')


        if (video) {
            setTimeout(function () {
                video.play()
            }, 500);
            TweenMax.to(video, 3, {
                scale: 1.1,
                rotation: 0,
                ease: Expo.easeOut
            });
        } else if (img) {
            TweenMax.to(img, 3, {
                scale: 1,
                rotation: 0,
                ease: Expo.easeOut
            });
        }






        TweenMax.to(newSlideImage, 1.5, {
            x: 0,
            opacity: 1,

            ease: Expo.easeInOut,
            onComplete: function () {
                // switch active class
                newSlide.classList.add('q_current');
                newSlide.classList.remove('is-new');
                activeSlide.classList.remove('q_current');
                newSlide.removeAttribute('style');
                // reset all styles
                newSlideImage.removeAttribute('style');
                if (newSlideContent) {
                    newSlideContent.removeAttribute('style');
                }
                activeSlideImage.removeAttribute('style');
                q_slide.setAttribute('wait', 'false');



                if (auto) {
                    autoPlay()
                }
            }
        });


        // caption animation

        q_animate(activeSlide.querySelectorAll('.q_split_wrap'), fadeAnim, 0);
        q_animate(newSlideElements, slideAnim, .8);

        var letters = newSlide.querySelectorAll('.q_splitText');
        if (letters) {
            for (var i = letters.length - 1; i >= 0; i--) {
                var letter = letters[i];
                //q_animate(letter, splitAnim, 100);
            };

        }
    }


    // next/prev slide switch calls

    function q_slideNext(q_slide, previous, auto) {

        var activeSlide = q_slide.querySelector('.q_current');
        var newSlide = null;
        if (previous) {
            newSlide = activeSlide.previousElementSibling;
            if (!newSlide) {
                newSlide = slides[slides.length - 1];
            }
        } else {
            newSlide = activeSlide.nextElementSibling;
            if (!newSlide)
                newSlide = slides[0];
        }


        // requestAnimationFrame(function() {
        //     q_slideSwitch(q_slide, indexInParent(newSlide), auto);
        // });

        q_slideSwitch(q_slide, indexInParent(newSlide), auto);

        triggerResize();

    }




    for (var i = slides.length - 1; i >= 0; i--) {
        var slide = slides[i];
        slide.classList.add('is-loaded');
    };

    // arrows click event

    var arrows = q_slide.querySelector('.arrows');

    if (arrows) {
        var next = arrows.querySelector('.next');
        var prev = arrows.querySelector('.prev');

        next.addEventListener('click', function (e) {
            q_slideNext(q_slide, false);
        });
        prev.addEventListener('click', function (e) {
            q_slideNext(q_slide, true);
        });
    }



    autoPlay(); // autoplay init


};

(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = 'function' == typeof require && require
                    if (!f && c) return c(i, !0)
                    if (u) return u(i, !0)
                    var a = new Error('Cannot find module \'' + i + '\'')
                    throw a.code = 'MODULE_NOT_FOUND', a
                }
                var p = n[i] = {exports: {}}
                e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r]
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }

        for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i])
        return o
    }

    return r
})()({
    1: [function (require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
            value: true
        })

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i]
                    descriptor.enumerable = descriptor.enumerable || false
                    descriptor.configurable = true
                    if ('value' in descriptor) descriptor.writable = true
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }

            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps)
                if (staticProps) defineProperties(Constructor, staticProps)
                return Constructor
            }
        }()

        var _domClasses = require('dom-classes')

        var _domClasses2 = _interopRequireDefault(_domClasses)

        var _domCreateElement = require('dom-create-element')

        var _domCreateElement2 = _interopRequireDefault(_domCreateElement)

        var _prefix = require('prefix')

        var _prefix2 = _interopRequireDefault(_prefix)

        var _virtualScroll = require('virtual-scroll')

        var _virtualScroll2 = _interopRequireDefault(_virtualScroll)

        var _domEvents = require('dom-events')

        var _domEvents2 = _interopRequireDefault(_domEvents)

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function')
            }
        }

        var Smooth = function () {
            function Smooth() {
                var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

                _classCallCheck(this, Smooth)

                this.createBound()
                this.options = opt
                this.prefix = (0, _prefix2.default)('transform')
                this.rAF = undefined
                // It seems that under heavy load, Firefox will still call the RAF callback even though the RAF has been canceled
                // To prevent that we set a flag to prevent any callback to be executed when RAF is removed
                this.isRAFCanceled = false
                var constructorName = this.constructor.name ? this.constructor.name : 'Smooth'
                this.extends = typeof opt.extends === 'undefined' ? this.constructor !== Smooth : opt.extends
                this.callback = this.options.callback || null
                this.vars = {
                    direction: this.options.direction || 'vertical',
                    native: this.options.native || false,
                    ease: this.options.ease || 0.075,
                    preload: this.options.preload || false,
                    current: 0,
                    last: 0,
                    target: 0,
                    height: window.innerHeight,
                    width: window.innerWidth,
                    bounding: 0,
                    timer: null,
                    ticking: false
                }
                this.vs = this.vars.native ? null : new _virtualScroll2.default({
                    limitInertia: this.options.vs && this.options.vs.limitInertia || false,
                    mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || 1,
                    touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5,
                    firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30,
                    preventTouch: this.options.vs && this.options.vs.preventTouch || true
                })
                this.dom = {
                    listener: this.options.listener || document.body,
                    section: this.options.section || document.querySelector('.vs-section') || null,
                    scrollbar: this.vars.native || this.options.noscrollbar ? null : {
                        state: {
                            clicked: false,
                            x: 0
                        },
                        el: (0, _domCreateElement2.default)({
                            selector: 'div',
                            styles: 'vs-scrollbar vs-' + this.vars.direction + ' vs-scrollbar-' + constructorName.toLowerCase()
                        }),
                        drag: {
                            el: (0, _domCreateElement2.default)({selector: 'div', styles: 'vs-scrolldrag'}),
                            delta: 0,
                            height: 50
                        }
                    }
                }
            }

            _createClass(Smooth, [{
                key: 'createBound',
                value: function createBound() {
                    var _this = this;

                    ['run', 'calc', 'debounce', 'resize', 'mouseUp', 'mouseDown', 'mouseMove', 'calcScroll', 'scrollTo'].forEach(function (fn) {
                        return _this[fn] = _this[fn].bind(_this)
                    })
                }
            }, {
                key: 'init',
                value: function init() {
                    this.addClasses()
                    this.vars.preload && this.preloadImages()
                    this.vars.native ? this.addFakeScrollHeight() : !this.options.noscrollbar && this.addFakeScrollBar()
                    this.addEvents()
                    this.resize()
                }
            }, {
                key: 'addClasses',
                value: function addClasses() {
                    var type = this.vars.native ? 'native' : 'virtual'
                    var direction = this.vars.direction === 'vertical' ? 'y' : 'x'
                    _domClasses2.default.add(this.dom.listener, 'is-' + type + '-scroll')
                    _domClasses2.default.add(this.dom.listener, direction + '-scroll')
                }
            }, {
                key: 'preloadImages',
                value: function preloadImages() {
                    var _this2 = this

                    var images = Array.prototype.slice.call(this.dom.listener.querySelectorAll('img'), 0)
                    images.forEach(function (image) {
                        var img = document.createElement('img')
                        _domEvents2.default.once(img, 'load', function () {
                            images.splice(images.indexOf(image), 1)
                            images.length === 0 && _this2.resize()
                        })
                        img.src = image.getAttribute('src')
                    })
                }
            }, {
                key: 'calc',
                value: function calc(e) {
                    var delta = e.deltaY
                    this.vars.target += delta * -1
                    this.clampTarget()
                }
            }, {
                key: 'debounce',
                value: function debounce() {
                    var _this3 = this

                    var win = this.dom.listener === document.body
                    this.vars.target = this.vars.direction === 'vertical' ? win ? window.scrollY || window.pageYOffset : this.dom.listener.scrollTop : win ? window.scrollX || window.pageXOffset : this.dom.listener.scrollLeft
                    clearTimeout(this.vars.timer)
                    if (!this.vars.ticking) {
                        this.vars.ticking = true
                        _domClasses2.default.add(this.dom.listener, 'is-scrolling')
                    }
                    this.vars.timer = setTimeout(function () {
                        _this3.vars.ticking = false
                        _domClasses2.default.remove(_this3.dom.listener, 'is-scrolling')
                    }, 200)
                }
            }, {
                key: 'run',
                value: function run() {
                    if (this.isRAFCanceled) return
                    this.vars.current += (this.vars.target - this.vars.current) * this.vars.ease
                    this.vars.current < .1 && (this.vars.current = 0)
                    this.requestAnimationFrame()
                    if (!this.extends) {
                        this.dom.section.style[this.prefix] = this.getTransform(-this.vars.current.toFixed(2))
                    }
                    if (!this.vars.native && !this.options.noscrollbar) {
                        var size = this.dom.scrollbar.drag.height
                        var bounds = this.vars.direction === 'vertical' ? this.vars.height : this.vars.width
                        var value = Math.abs(this.vars.current) / (this.vars.bounding / (bounds - size)) + size / .5 - size
                        var clamp = Math.max(0, Math.min(value - size, value + size))
                        this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(clamp.toFixed(2))
                    }
                    if (this.callback && this.vars.current !== this.vars.last) {
                        this.callback(this.vars.current)
                    }
                    this.vars.last = this.vars.current
                }
            }, {
                key: 'getTransform',
                value: function getTransform(value) {
                    return this.vars.direction === 'vertical' ? 'translate3d(0,' + value + 'px,0)' : 'translate3d(' + value + 'px,0,0)'
                }
            }, {
                key: 'on',
                value: function on() {
                    var requestAnimationFrame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true

                    if (this.isRAFCanceled) {
                        this.isRAFCanceled = false
                    }
                    var node = this.dom.listener === document.body ? window : this.dom.listener
                    this.vars.native ? _domEvents2.default.on(node, 'scroll', this.debounce) : this.vs && this.vs.on(this.calc)
                    requestAnimationFrame && this.requestAnimationFrame()
                }
            }, {
                key: 'off',
                value: function off() {
                    var cancelAnimationFrame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true

                    var node = this.dom.listener === document.body ? window : this.dom.listener
                    this.vars.native ? _domEvents2.default.off(node, 'scroll', this.debounce) : this.vs && this.vs.off(this.calc)
                    cancelAnimationFrame && this.cancelAnimationFrame()
                }
            }, {
                key: 'requestAnimationFrame',
                value: function (_requestAnimationFrame) {
                    function requestAnimationFrame() {
                        return _requestAnimationFrame.apply(this, arguments)
                    }

                    requestAnimationFrame.toString = function () {
                        return _requestAnimationFrame.toString()
                    }

                    return requestAnimationFrame
                }(function () {
                    this.rAF = requestAnimationFrame(this.run)
                })
            }, {
                key: 'cancelAnimationFrame',
                value: function (_cancelAnimationFrame) {
                    function cancelAnimationFrame() {
                        return _cancelAnimationFrame.apply(this, arguments)
                    }

                    cancelAnimationFrame.toString = function () {
                        return _cancelAnimationFrame.toString()
                    }

                    return cancelAnimationFrame
                }(function () {
                    this.isRAFCanceled = true
                    cancelAnimationFrame(this.rAF)
                })
            }, {
                key: 'addEvents',
                value: function addEvents() {
                    this.on()
                    _domEvents2.default.on(window, 'resize', this.resize)
                }
            }, {
                key: 'removeEvents',
                value: function removeEvents() {
                    this.off()
                    _domEvents2.default.off(window, 'resize', this.resize)
                }
            }, {
                key: 'addFakeScrollBar',
                value: function addFakeScrollBar() {
                    this.dom.listener.appendChild(this.dom.scrollbar.el)
                    this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el)
                    _domEvents2.default.on(this.dom.scrollbar.el, 'click', this.calcScroll)
                    _domEvents2.default.on(this.dom.scrollbar.el, 'mousedown', this.mouseDown)
                    _domEvents2.default.on(document, 'mousemove', this.mouseMove)
                    _domEvents2.default.on(document, 'mouseup', this.mouseUp)
                }
            }, {
                key: 'removeFakeScrollBar',
                value: function removeFakeScrollBar() {
                    _domEvents2.default.off(this.dom.scrollbar.el, 'click', this.calcScroll)
                    _domEvents2.default.off(this.dom.scrollbar.el, 'mousedown', this.mouseDown)
                    _domEvents2.default.off(document, 'mousemove', this.mouseMove)
                    _domEvents2.default.off(document, 'mouseup', this.mouseUp)
                    this.dom.listener.removeChild(this.dom.scrollbar.el)
                }
            }, {
                key: 'mouseDown',
                value: function mouseDown(e) {
                    e.preventDefault()
                    e.which == 1 && (this.dom.scrollbar.state.clicked = true)
                }
            }, {
                key: 'mouseUp',
                value: function mouseUp(e) {
                    this.dom.scrollbar.state.clicked = false
                    _domClasses2.default.remove(this.dom.listener, 'is-dragging')
                }
            }, {
                key: 'mouseMove',
                value: function mouseMove(e) {
                    this.dom.scrollbar.state.clicked && this.calcScroll(e)
                }
            }, {
                key: 'addFakeScrollHeight',
                value: function addFakeScrollHeight() {
                    this.dom.scroll = (0, _domCreateElement2.default)({
                        selector: 'div',
                        styles: 'vs-scroll-view'
                    })
                    this.dom.listener.appendChild(this.dom.scroll)
                }
            }, {
                key: 'removeFakeScrollHeight',
                value: function removeFakeScrollHeight() {
                    this.dom.listener.removeChild(this.dom.scroll)
                }
            }, {
                key: 'calcScroll',
                value: function calcScroll(e) {
                    var client = this.vars.direction == 'vertical' ? e.clientY : e.clientX
                    var bounds = this.vars.direction == 'vertical' ? this.vars.height : this.vars.width
                    var delta = client * (this.vars.bounding / bounds)
                    _domClasses2.default.add(this.dom.listener, 'is-dragging')
                    this.vars.target = delta
                    this.clampTarget()
                    this.dom.scrollbar && (this.dom.scrollbar.drag.delta = this.vars.target)
                }
            }, {
                key: 'scrollTo',
                value: function scrollTo(offset) {
                    if (this.vars.native) {
                        this.vars.direction == 'vertical' ? window.scrollTo(0, offset) : window.scrollTo(offset, 0)
                    } else {
                        this.vars.target = offset
                        this.clampTarget()
                    }
                }
            }, {
                key: 'resize',
                value: function resize() {
                    var prop = this.vars.direction === 'vertical' ? 'height' : 'width'
                    this.vars.height = window.innerHeight
                    this.vars.width = window.innerWidth
                    if (!this.extends) {
                        var bounding = this.dom.section.getBoundingClientRect()
                        this.vars.bounding = this.vars.direction === 'vertical' ? bounding.height - (this.vars.native ? 0 : this.vars.height) : bounding.right - (this.vars.native ? 0 : this.vars.width)
                    }
                    if (!this.vars.native && !this.options.noscrollbar) {
                        this.dom.scrollbar.drag.height = this.vars.height * (this.vars.height / (this.vars.bounding + this.vars.height))
                        this.dom.scrollbar.drag.el.style[prop] = this.dom.scrollbar.drag.height + 'px'
                    } else if (this.vars.native) {
                        this.dom.scroll.style[prop] = this.vars.bounding + 'px'
                    }
                    !this.vars.native && this.clampTarget()
                }
            }, {
                key: 'clampTarget',
                value: function clampTarget() {
                    this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding)))
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    if (this.vars.native) {
                        _domClasses2.default.remove(this.dom.listener, 'is-native-scroll')
                        this.removeFakeScrollHeight()
                    } else {
                        _domClasses2.default.remove(this.dom.listener, 'is-virtual-scroll')
                        !this.options.noscrollbar && this.removeFakeScrollBar()
                    }
                    this.vars.direction === 'vertical' ? _domClasses2.default.remove(this.dom.listener, 'y-scroll') : _domClasses2.default.remove(this.dom.listener, 'x-scroll')
                    this.vars.current = 0
                    this.vs && (this.vs.destroy(), this.vs = null)
                    this.removeEvents()
                }
            }])

            return Smooth
        }()

        exports.default = Smooth


        window.Smooth = Smooth

    }, {'dom-classes': 3, 'dom-create-element': 4, 'dom-events': 5, 'prefix': 9, 'virtual-scroll': 15}],
    2: [function (require, module, exports) {
        'use strict'

        var toString = Object.prototype.toString,
            hasOwnProperty = Object.prototype.hasOwnProperty

        module.exports = function (object) {
            if (!object) return console.warn('bindAll requires at least one argument.')

            var functions = Array.prototype.slice.call(arguments, 1)

            if (functions.length === 0) {

                for (var method in object) {
                    if (hasOwnProperty.call(object, method)) {
                        if (typeof object[method] == 'function' && toString.call(object[method]) == '[object Function]') {
                            functions.push(method)
                        }
                    }
                }
            }

            for (var i = 0; i < functions.length; i++) {
                var f = functions[i]
                object[f] = bind(object[f], object)
            }
        }

        /*
            Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
            bindAll is only needed for events binding so no need to make slow fixes for constructor
            or partial application.
        */
        function bind(func, context) {
            return function () {
                return func.apply(context, arguments)
            }
        }
    }, {}],
    3: [function (require, module, exports) {
        /**
         * Module dependencies.
         */

        var index = require('indexof')

        /**
         * Whitespace regexp.
         */

        var whitespaceRe = /\s+/

        /**
         * toString reference.
         */

        var toString = Object.prototype.toString

        module.exports = classes
        module.exports.add = add
        module.exports.contains = has
        module.exports.has = has
        module.exports.toggle = toggle
        module.exports.remove = remove
        module.exports.removeMatching = removeMatching

        function classes(el) {
            if (el.classList) {
                return el.classList
            }

            var str = el.className.replace(/^\s+|\s+$/g, '')
            var arr = str.split(whitespaceRe)
            if ('' === arr[0]) arr.shift()
            return arr
        }

        function add(el, name) {
            // classList
            if (el.classList) {
                el.classList.add(name)
                return
            }

            // fallback
            var arr = classes(el)
            var i = index(arr, name)
            if (!~i) arr.push(name)
            el.className = arr.join(' ')
        }

        function has(el, name) {
            return el.classList
                ? el.classList.contains(name)
                : !!~index(classes(el), name)
        }

        function remove(el, name) {
            if ('[object RegExp]' == toString.call(name)) {
                return removeMatching(el, name)
            }

            // classList
            if (el.classList) {
                el.classList.remove(name)
                return
            }

            // fallback
            var arr = classes(el)
            var i = index(arr, name)
            if (~i) arr.splice(i, 1)
            el.className = arr.join(' ')
        }

        function removeMatching(el, re, ref) {
            var arr = Array.prototype.slice.call(classes(el))
            for (var i = 0; i < arr.length; i++) {
                if (re.test(arr[i])) {
                    remove(el, arr[i])
                }
            }
        }

        function toggle(el, name) {
            // classList
            if (el.classList) {
                return el.classList.toggle(name)
            }

            // fallback
            if (has(el, name)) {
                remove(el, name)
            } else {
                add(el, name)
            }
        }

    }, {'indexof': 6}],
    4: [function (require, module, exports) {
        /*
        `dom-create-element`
        var create = require('dom-create-element');
        var el = create({
          selector: 'div',
          styles: 'preloader',
          html: '<span>Text</span>'
        });
        */

        module.exports = create

        function create(opt) {

            opt = opt || {}

            var el = document.createElement(opt.selector)

            if (opt.attr) for (var index in opt.attr)
                opt.attr.hasOwnProperty(index) && el.setAttribute(index, opt.attr[index])

            'a' == opt.selector && opt.link && (
                el.href = opt.link,
                opt.target && el.setAttribute('target', opt.target)
            )

            'img' == opt.selector && opt.src && (
                el.src = opt.src,
                opt.lazyload && (
                    el.style.opacity = 0,
                        el.onload = function () {
                            el.style.opacity = 1
                        }
                )
            )

            opt.id && (el.id = opt.id)
            opt.styles && (el.className = opt.styles)

            opt.html && (el.innerHTML = opt.html)
            opt.children && (el.appendChild(opt.children))

            return el
        }
    }, {}],
    5: [function (require, module, exports) {

        var synth = require('synthetic-dom-events')

        var on = function (element, name, fn, capture) {
            return element.addEventListener(name, fn, capture || false)
        }

        var off = function (element, name, fn, capture) {
            return element.removeEventListener(name, fn, capture || false)
        }

        var once = function (element, name, fn, capture) {
            function tmp(ev) {
                off(element, name, tmp, capture)
                fn(ev)
            }

            on(element, name, tmp, capture)
        }

        var emit = function (element, name, opt) {
            var ev = synth(name, opt)
            element.dispatchEvent(ev)
        }

        if (!document.addEventListener) {
            on = function (element, name, fn) {
                return element.attachEvent('on' + name, fn)
            }
        }

        if (!document.removeEventListener) {
            off = function (element, name, fn) {
                return element.detachEvent('on' + name, fn)
            }
        }

        if (!document.dispatchEvent) {
            emit = function (element, name, opt) {
                var ev = synth(name, opt)
                return element.fireEvent('on' + ev.type, ev)
            }
        }

        module.exports = {
            on: on,
            off: off,
            once: once,
            emit: emit
        }

    }, {'synthetic-dom-events': 10}],
    6: [function (require, module, exports) {

        var indexOf = [].indexOf

        module.exports = function (arr, obj) {
            if (indexOf) return arr.indexOf(obj)
            for (var i = 0; i < arr.length; ++i) {
                if (arr[i] === obj) return i
            }
            return -1
        }
    }, {}],
    7: [function (require, module, exports) {
        // Generated by CoffeeScript 1.9.2
        (function () {
            var root

            root = typeof exports !== 'undefined' && exports !== null ? exports : this

            root.Lethargy = (function () {
                function Lethargy(stability, sensitivity, tolerance, delay) {
                    this.stability = stability != null ? Math.abs(stability) : 8
                    this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100
                    this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1
                    this.delay = delay != null ? delay : 150
                    this.lastUpDeltas = (function () {
                        var i, ref, results
                        results = []
                        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
                            results.push(null)
                        }
                        return results
                    }).call(this)
                    this.lastDownDeltas = (function () {
                        var i, ref, results
                        results = []
                        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
                            results.push(null)
                        }
                        return results
                    }).call(this)
                    this.deltasTimestamp = (function () {
                        var i, ref, results
                        results = []
                        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
                            results.push(null)
                        }
                        return results
                    }).call(this)
                }

                Lethargy.prototype.check = function (e) {
                    var lastDelta
                    e = e.originalEvent || e
                    if (e.wheelDelta != null) {
                        lastDelta = e.wheelDelta
                    } else if (e.deltaY != null) {
                        lastDelta = e.deltaY * -40
                    } else if ((e.detail != null) || e.detail === 0) {
                        lastDelta = e.detail * -40
                    }
                    this.deltasTimestamp.push(Date.now())
                    this.deltasTimestamp.shift()
                    if (lastDelta > 0) {
                        this.lastUpDeltas.push(lastDelta)
                        this.lastUpDeltas.shift()
                        return this.isInertia(1)
                    } else {
                        this.lastDownDeltas.push(lastDelta)
                        this.lastDownDeltas.shift()
                        return this.isInertia(-1)
                    }
                    return false
                }

                Lethargy.prototype.isInertia = function (direction) {
                    var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum
                    lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas
                    if (lastDeltas[0] === null) {
                        return direction
                    }
                    if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
                        return false
                    }
                    lastDeltasOld = lastDeltas.slice(0, this.stability)
                    lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2)
                    oldSum = lastDeltasOld.reduce(function (t, s) {
                        return t + s
                    })
                    newSum = lastDeltasNew.reduce(function (t, s) {
                        return t + s
                    })
                    oldAverage = oldSum / lastDeltasOld.length
                    newAverage = newSum / lastDeltasNew.length
                    if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
                        return direction
                    } else {
                        return false
                    }
                }

                Lethargy.prototype.showLastUpDeltas = function () {
                    return this.lastUpDeltas
                }

                Lethargy.prototype.showLastDownDeltas = function () {
                    return this.lastDownDeltas
                }

                return Lethargy

            })()

        }).call(this)

    }, {}],
    8: [function (require, module, exports) {
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */

        'use strict'
        /* eslint-disable no-unused-vars */
        var getOwnPropertySymbols = Object.getOwnPropertySymbols
        var hasOwnProperty = Object.prototype.hasOwnProperty
        var propIsEnumerable = Object.prototype.propertyIsEnumerable

        function toObject(val) {
            if (val === null || val === undefined) {
                throw new TypeError('Object.assign cannot be called with null or undefined')
            }

            return Object(val)
        }

        function shouldUseNative() {
            try {
                if (!Object.assign) {
                    return false
                }

                // Detect buggy property enumeration order in older V8 versions.

                // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                var test1 = new String('abc')  // eslint-disable-line no-new-wrappers
                test1[5] = 'de'
                if (Object.getOwnPropertyNames(test1)[0] === '5') {
                    return false
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test2 = {}
                for (var i = 0; i < 10; i++) {
                    test2['_' + String.fromCharCode(i)] = i
                }
                var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                    return test2[n]
                })
                if (order2.join('') !== '0123456789') {
                    return false
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test3 = {}
                'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                    test3[letter] = letter
                })
                if (Object.keys(Object.assign({}, test3)).join('') !==
                    'abcdefghijklmnopqrst') {
                    return false
                }

                return true
            } catch (err) {
                // We don't expect any of the above to throw, but better to be safe.
                return false
            }
        }

        module.exports = shouldUseNative() ? Object.assign : function (target, source) {
            var from
            var to = toObject(target)
            var symbols

            for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s])

                for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                        to[key] = from[key]
                    }
                }

                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from)
                    for (var i = 0; i < symbols.length; i++) {
                        if (propIsEnumerable.call(from, symbols[i])) {
                            to[symbols[i]] = from[symbols[i]]
                        }
                    }
                }
            }

            return to
        }

    }, {}],
    9: [function (require, module, exports) {
        // check document first so it doesn't error in node.js
        var style = typeof document != 'undefined'
            ? document.createElement('p').style
            : {}

        var prefixes = ['O', 'ms', 'Moz', 'Webkit']
        var upper = /([A-Z])/g
        var memo = {}

        /**
         * prefix `key`
         *
         *   prefix('transform') // => WebkitTransform
         *
         * @param {String} key
         * @return {String}
         * @api public
         */
        function prefix(key) {
            // Camel case
            key = key.replace(/-([a-z])/g, function (_, char) {
                return char.toUpperCase()
            })

            // Without prefix
            if (style[key] !== undefined) return key

            // With prefix
            var Key = key.charAt(0).toUpperCase() + key.slice(1)
            var i = prefixes.length
            while (i--) {
                var name = prefixes[i] + Key
                if (style[name] !== undefined) return name
            }

            return key
        }

        /**
         * Memoized version of `prefix`
         *
         * @param {String} key
         * @return {String}
         * @api public
         */
        function prefixMemozied(key) {
            return key in memo
                ? memo[key]
                : memo[key] = prefix(key)
        }

        /**
         * Create a dashed prefix
         *
         * @param {String} key
         * @return {String}
         * @api public
         */
        function prefixDashed(key) {
            key = prefix(key)
            if (upper.test(key)) {
                key = '-' + key.replace(upper, '-$1')
                upper.lastIndex = 0
            }
            return key.toLowerCase()
        }

        module.exports = prefixMemozied
        module.exports.dash = prefixDashed

    }, {}],
    10: [function (require, module, exports) {

        // for compression
        var win = window
        var doc = document || {}
        var root = doc.documentElement || {}

        // detect if we need to use firefox KeyEvents vs KeyboardEvents
        var use_key_event = true
        try {
            doc.createEvent('KeyEvents')
        } catch (err) {
            use_key_event = false
        }

        // Workaround for https://bugs.webkit.org/show_bug.cgi?id=16735
        function check_kb(ev, opts) {
            if (ev.ctrlKey != (opts.ctrlKey || false) ||
                ev.altKey != (opts.altKey || false) ||
                ev.shiftKey != (opts.shiftKey || false) ||
                ev.metaKey != (opts.metaKey || false) ||
                ev.keyCode != (opts.keyCode || 0) ||
                ev.charCode != (opts.charCode || 0)) {

                ev = document.createEvent('Event')
                ev.initEvent(opts.type, opts.bubbles, opts.cancelable)
                ev.ctrlKey = opts.ctrlKey || false
                ev.altKey = opts.altKey || false
                ev.shiftKey = opts.shiftKey || false
                ev.metaKey = opts.metaKey || false
                ev.keyCode = opts.keyCode || 0
                ev.charCode = opts.charCode || 0
            }

            return ev
        }

        // modern browsers, do a proper dispatchEvent()
        var modern = function (type, opts) {
            opts = opts || {}

            // which init fn do we use
            var family = typeOf(type)
            var init_fam = family
            if (family === 'KeyboardEvent' && use_key_event) {
                family = 'KeyEvents'
                init_fam = 'KeyEvent'
            }

            var ev = doc.createEvent(family)
            var init_fn = 'init' + init_fam
            var init = typeof ev[init_fn] === 'function' ? init_fn : 'initEvent'

            var sig = initSignatures[init]
            var args = []
            var used = {}

            opts.type = type
            for (var i = 0; i < sig.length; ++i) {
                var key = sig[i]
                var val = opts[key]
                // if no user specified value, then use event default
                if (val === undefined) {
                    val = ev[key]
                }
                used[key] = true
                args.push(val)
            }
            ev[init].apply(ev, args)

            // webkit key event issue workaround
            if (family === 'KeyboardEvent') {
                ev = check_kb(ev, opts)
            }

            // attach remaining unused options to the object
            for (var key in opts) {
                if (!used[key]) {
                    ev[key] = opts[key]
                }
            }

            return ev
        }

        var legacy = function (type, opts) {
            opts = opts || {}
            var ev = doc.createEventObject()

            ev.type = type
            for (var key in opts) {
                if (opts[key] !== undefined) {
                    ev[key] = opts[key]
                }
            }

            return ev
        }

        // expose either the modern version of event generation or legacy
        // depending on what we support
        // avoids if statements in the code later
        module.exports = doc.createEvent ? modern : legacy

        var initSignatures = require('./init.json')
        var types = require('./types.json')
        var typeOf = (function () {
            var typs = {}
            for (var key in types) {
                var ts = types[key]
                for (var i = 0; i < ts.length; i++) {
                    typs[ts[i]] = key
                }
            }

            return function (name) {
                return typs[name] || 'Event'
            }
        })()

    }, {'./init.json': 11, './types.json': 12}],
    11: [function (require, module, exports) {
        module.exports = {
            'initEvent': [
                'type',
                'bubbles',
                'cancelable'
            ],
            'initUIEvent': [
                'type',
                'bubbles',
                'cancelable',
                'view',
                'detail'
            ],
            'initMouseEvent': [
                'type',
                'bubbles',
                'cancelable',
                'view',
                'detail',
                'screenX',
                'screenY',
                'clientX',
                'clientY',
                'ctrlKey',
                'altKey',
                'shiftKey',
                'metaKey',
                'button',
                'relatedTarget'
            ],
            'initMutationEvent': [
                'type',
                'bubbles',
                'cancelable',
                'relatedNode',
                'prevValue',
                'newValue',
                'attrName',
                'attrChange'
            ],
            'initKeyboardEvent': [
                'type',
                'bubbles',
                'cancelable',
                'view',
                'ctrlKey',
                'altKey',
                'shiftKey',
                'metaKey',
                'keyCode',
                'charCode'
            ],
            'initKeyEvent': [
                'type',
                'bubbles',
                'cancelable',
                'view',
                'ctrlKey',
                'altKey',
                'shiftKey',
                'metaKey',
                'keyCode',
                'charCode'
            ]
        }

    }, {}],
    12: [function (require, module, exports) {
        module.exports = {
            'MouseEvent': [
                'click',
                'mousedown',
                'mouseup',
                'mouseover',
                'mousemove',
                'mouseout'
            ],
            'KeyboardEvent': [
                'keydown',
                'keyup',
                'keypress'
            ],
            'MutationEvent': [
                'DOMSubtreeModified',
                'DOMNodeInserted',
                'DOMNodeRemoved',
                'DOMNodeRemovedFromDocument',
                'DOMNodeInsertedIntoDocument',
                'DOMAttrModified',
                'DOMCharacterDataModified'
            ],
            'HTMLEvents': [
                'load',
                'unload',
                'abort',
                'error',
                'select',
                'change',
                'submit',
                'reset',
                'focus',
                'blur',
                'resize',
                'scroll'
            ],
            'UIEvent': [
                'DOMFocusIn',
                'DOMFocusOut',
                'DOMActivate'
            ]
        }

    }, {}],
    13: [function (require, module, exports) {
        function E() {
            // Keep this empty so it's easier to inherit from
            // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
        }

        E.prototype = {
            on: function (name, callback, ctx) {
                var e = this.e || (this.e = {});

                (e[name] || (e[name] = [])).push({
                    fn: callback,
                    ctx: ctx
                })

                return this
            },

            once: function (name, callback, ctx) {
                var self = this

                function listener() {
                    self.off(name, listener)
                    callback.apply(ctx, arguments)
                }

                listener._ = callback
                return this.on(name, listener, ctx)
            },

            emit: function (name) {
                var data = [].slice.call(arguments, 1)
                var evtArr = ((this.e || (this.e = {}))[name] || []).slice()
                var i = 0
                var len = evtArr.length

                for (i; i < len; i++) {
                    evtArr[i].fn.apply(evtArr[i].ctx, data)
                }

                return this
            },

            off: function (name, callback) {
                var e = this.e || (this.e = {})
                var evts = e[name]
                var liveEvents = []

                if (evts && callback) {
                    for (var i = 0, len = evts.length; i < len; i++) {
                        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                            liveEvents.push(evts[i])
                    }
                }

                // Remove event from queue to prevent memory leak
                // Suggested by https://github.com/lazd
                // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

                (liveEvents.length)
                    ? e[name] = liveEvents
                    : delete e[name]

                return this
            }
        }

        module.exports = E

    }, {}],
    14: [function (require, module, exports) {
        'use strict'

        module.exports = function (source) {
            return JSON.parse(JSON.stringify(source))
        }
    }, {}],
    15: [function (require, module, exports) {
        'use strict'

        var objectAssign = require('object-assign')
        var Emitter = require('tiny-emitter')
        var Lethargy = require('lethargy').Lethargy
        var support = require('./support')
        var clone = require('./clone')
        var bindAll = require('bindall-standalone')
        var EVT_ID = 'virtualscroll'

        module.exports = VirtualScroll

        var keyCodes = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SPACE: 32
        }

        function VirtualScroll(options) {
            bindAll(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown')

            this.el = window
            if (options && options.el) {
                this.el = options.el
                delete options.el
            }
            this.options = objectAssign({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: false,
                unpreventTouchClass: 'vs-touchmove-allowed',
                limitInertia: false
            }, options)

            if (this.options.limitInertia) this._lethargy = new Lethargy()

            this._emitter = new Emitter()
            this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            }
            this.touchStartX = null
            this.touchStartY = null
            this.bodyTouchAction = null

            if (this.options.passive !== undefined) {
                this.listenerOptions = {passive: this.options.passive}
            }
        }

        VirtualScroll.prototype._notify = function (e) {
            var evt = this._event
            evt.x += evt.deltaX
            evt.y += evt.deltaY

            this._emitter.emit(EVT_ID, {
                x: evt.x,
                y: evt.y,
                deltaX: evt.deltaX,
                deltaY: evt.deltaY,
                originalEvent: e
            })
        }

        VirtualScroll.prototype._onWheel = function (e) {
            var options = this.options
            if (this._lethargy && this._lethargy.check(e) === false) return
            var evt = this._event

            // In Chrome and in Firefox (at least the new one)
            evt.deltaX = e.wheelDeltaX || e.deltaX * -1
            evt.deltaY = e.wheelDeltaY || e.deltaY * -1

            // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
            // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
            if (support.isFirefox && e.deltaMode == 1) {
                evt.deltaX *= options.firefoxMultiplier
                evt.deltaY *= options.firefoxMultiplier
            }

            evt.deltaX *= options.mouseMultiplier
            evt.deltaY *= options.mouseMultiplier

            this._notify(e)
        }

        VirtualScroll.prototype._onMouseWheel = function (e) {
            if (this.options.limitInertia && this._lethargy.check(e) === false) return

            var evt = this._event

            // In Safari, IE and in Chrome if 'wheel' isn't defined
            evt.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0
            evt.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta

            this._notify(e)
        }

        VirtualScroll.prototype._onTouchStart = function (e) {
            var t = (e.targetTouches) ? e.targetTouches[0] : e
            this.touchStartX = t.pageX
            this.touchStartY = t.pageY
        }

        VirtualScroll.prototype._onTouchMove = function (e) {
            var options = this.options
            if (options.preventTouch
                && !e.target.classList.contains(options.unpreventTouchClass)) {
                e.preventDefault()
            }

            var evt = this._event

            var t = (e.targetTouches) ? e.targetTouches[0] : e

            evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier
            evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier

            this.touchStartX = t.pageX
            this.touchStartY = t.pageY

            this._notify(e)
        }

        VirtualScroll.prototype._onKeyDown = function (e) {
            var evt = this._event
            evt.deltaX = evt.deltaY = 0
            var windowHeight = window.innerHeight - 40

            switch (e.keyCode) {
                case keyCodes.LEFT:
                case keyCodes.UP:
                    evt.deltaY = this.options.keyStep
                    break

                case keyCodes.RIGHT:
                case keyCodes.DOWN:
                    evt.deltaY = -this.options.keyStep
                    break
                case keyCodes.SPACE && e.shiftKey:
                    evt.deltaY = windowHeight
                    break
                case keyCodes.SPACE:
                    evt.deltaY = -windowHeight
                    break
                default:
                    return
            }

            this._notify(e)
        }

        VirtualScroll.prototype._bind = function () {
            if (support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions)
            if (support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions)

            if (support.hasTouch) {
                this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions)
                this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions)
            }

            if (support.hasPointer && support.hasTouchWin) {
                this.bodyTouchAction = document.body.style.msTouchAction
                document.body.style.msTouchAction = 'none'
                this.el.addEventListener('MSPointerDown', this._onTouchStart, true)
                this.el.addEventListener('MSPointerMove', this._onTouchMove, true)
            }

            if (support.hasKeyDown) document.addEventListener('keydown', this._onKeyDown)
        }

        VirtualScroll.prototype._unbind = function () {
            if (support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel)
            if (support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel)

            if (support.hasTouch) {
                this.el.removeEventListener('touchstart', this._onTouchStart)
                this.el.removeEventListener('touchmove', this._onTouchMove)
            }

            if (support.hasPointer && support.hasTouchWin) {
                document.body.style.msTouchAction = this.bodyTouchAction
                this.el.removeEventListener('MSPointerDown', this._onTouchStart, true)
                this.el.removeEventListener('MSPointerMove', this._onTouchMove, true)
            }

            if (support.hasKeyDown) document.removeEventListener('keydown', this._onKeyDown)
        }

        VirtualScroll.prototype.on = function (cb, ctx) {
            this._emitter.on(EVT_ID, cb, ctx)

            var events = this._emitter.e
            if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind()
        }

        VirtualScroll.prototype.off = function (cb, ctx) {
            this._emitter.off(EVT_ID, cb, ctx)

            var events = this._emitter.e
            if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind()
        }

        VirtualScroll.prototype.reset = function () {
            var evt = this._event
            evt.x = 0
            evt.y = 0
        }

        VirtualScroll.prototype.destroy = function () {
            this._emitter.off()
            this._unbind()
        }

    }, {
        './clone': 14,
        './support': 16,
        'bindall-standalone': 2,
        'lethargy': 7,
        'object-assign': 8,
        'tiny-emitter': 13
    }],
    16: [function (require, module, exports) {
        'use strict'

        module.exports = (function getSupport() {
            return {
                hasWheelEvent: 'onwheel' in document,
                hasMouseWheelEvent: 'onmousewheel' in document,
                hasTouch: 'ontouchstart' in document,
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: 'onkeydown' in document,
                isFirefox: navigator.userAgent.indexOf('Firefox') > -1
            }
        })()

    }, {}]
}, {}, [1])


// PARALLAX EXTENSION


class Parallax extends Smooth {

    constructor(opt) {
        super(opt)
        this.createExtraBound()
        this.resizing = false
        this.cache = null
        this.dom.divs = Array.prototype.slice.call(opt.divs, 0)
        

    }

    createExtraBound() {
        ['getCache', 'inViewport']
        .forEach((fn) => this[fn] = this[fn].bind(this))
    }

    resize() {
        this.resizing = true
        this.getCache('cache', this.dom.divs)
        
        super.resize()
        this.resizing = false
    }

    getCache(cacheKey, doms, style) {
        this[cacheKey] = []
        doms.forEach((el, index) => {
            if (!style) {
                el.style.display = 'block'
                el.style.transform = 'none'
            }
            const scrollY = this.vars.target
            const bounding = el.getBoundingClientRect()
            const bounds = {
                el: el,
                state: true,
                top: bounding.top + scrollY,
                left: bounding.left,
                center: bounding.height / 2,
                bottom: bounding.bottom + scrollY,
                speed: el.getAttribute('data-speed') || '0'
            }
            if (index === 4) {

            }
            // this.vars.bounding = bounding.bottom > this.vars.bounding ? bounding.bottom - window.innerHeight : this.vars.bounding;
            this[cacheKey].push(bounds)
        })
        // get bounding value based on the container (.vs-section) height
        if (this.dom && this.dom.section) {
            this.vars.bounding = this.dom.section.getBoundingClientRect().height - (this.vars.native ? 0 : this.vars.height)
        }
    }

    run() {
        super.run()
        
        this.dom.divs.forEach(this.inViewport)
        if (this.dom && this.dom.section) this.dom.section.style[this.prefix] = this.getTransform(this.vars.current * -1)
    }

    inViewport(el, index, addTransform = true, cacheKey = 'cache') {
        //if (!this[cacheKey] || this.resizing) return
        const cache = this[cacheKey][index]
        const current = this.vars.current
        const transform = (cache.top - current) * cache.speed
        const top = Math.round((cache.top + transform) - current)
        const bottom = Math.round((cache.bottom + transform) - current)
        const inview = bottom > 0 && top < this.vars.height

        
        const opacityEnd = Math.max(0, Math.min(1 - transform / (this.vars.height * .5), 1))
        const opacityStart = Math.max(0, Math.min(1 + transform / (this.vars.height  * .7), 1))
        const opacityWork = Math.max(0, Math.min(1.2 + transform / (this.vars.height  * .4), 1))
        const opacityFar = Math.max(0, Math.min(4 + (transform * .5) / (window.innerHeight * .1), 1))
        const opacityTitle = Math.max(0, Math.min(.5 - transform / (window.innerHeight * .3), 1))
        const opacityTitleStart = Math.max(0, Math.min(1.8 + transform / (window.innerHeight * .3), 1))
        

        if (inview) {
            if (addTransform) {
                el.style[this.prefix] = this.getTransform(transform)

                if (el.classList.contains('vs-opacity-end')) {
                    el.style.opacity = opacityEnd.toFixed(2);
                } else if (el.classList.contains('vs-opacity-start')) {
                    el.style.opacity = opacityStart.toFixed(2);
                } else if (el.classList.contains('vs-opacity-work')) {
                    el.style.opacity = opacityWork.toFixed(2);
                }  else if (el.classList.contains('vs-opacity-start-far')) {
                    el.style.opacity = opacityFar.toFixed(2);
                } else if (el.classList.contains('vs-opacity-title')) {
                    el.style.opacity = opacityTitle.toFixed(2);
                } else if (el.classList.contains('vs-opacity-title-start')) {
                    el.style.opacity = opacityTitleStart.toFixed(2);
                }

            } else {
               

            }
        } else {
            if (!addTransform) {
               
            }
        }
    }
}



class Horizontal extends Smooth {

  constructor(opt) {
    super(opt)
    this.createExtraBound()
    this.resizing = false
    this.cache = null
    this.dom.divs = Array.prototype.slice.call(opt.divs, 0)
    
  }
  
  createExtraBound() {
    ['getCache', 'inViewport']
    .forEach((fn) => this[fn] = this[fn].bind(this))
  }

  resize() {
    this.resizing = true
    this.getCache()
    super.resize()
    
    this.resizing = false
  }

  getCache() {
    this.cache = []
    const unit = (this.vars.width / 2.6)
    this.dom.divs.forEach((el, index) => {
      el.style.display = 'inline-block'
      el.style.transform = 'none'
      
      const scrollX = this.vars.target
      const bounding = el.getBoundingClientRect()
      const bounds = {
        el: el,
        state: true,
        left: bounding.left + scrollX,
        right: bounding.right + scrollX,
        center: unit / 2,
        speed: el.getAttribute('data-speed') || '0'
      }
      this.cache.push(bounds)
    })
    this.dom.section.style.width = this.vars.width  + 'px';
    this.vars.bounding = unit * this.dom.divs.length - this.vars.width;
  }

  run() {
    this.dom.divs.forEach(this.inViewport)
    this.dom.section.style[this.prefix] = `translate3d(${this.vars.current * -1}px,0,0)`
    super.run()
  }

  inViewport(el, index) {
    if (!this.cache || this.resizing) return;

    var cache = this.cache[index];
    var current = this.vars.current;
    var transform = (cache.left - current) * cache.speed;
    var left = Math.round(cache.left + transform - current);
    var right = Math.round(cache.right + transform - current);
    var inview = right > 0 && left < this.vars.width;

    //el.style[this.prefix] = this.getTransform(transform);

    

  }
}



/**
* demo.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2019, Codrops
* http://www.codrops.com
*/

    // body element

function initTrail(element) {

    
    element.classList.add('trailElement')

    const trailElement = document.querySelector('.trailElement');

    trailElement.removeEventListener('mousemove', _listener, true);
    

    // helper functions
    const MathUtils = {
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b,
        // distance between two points
        distance: (x1,y1,x2,y2) => Math.hypot(x2-x1, y2-y1)
    }

    // get the mouse position
    const getMousePos = (ev) => {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
    
            posx = ev.clientX;
            posy = ev.clientY - trailElement.getBoundingClientRect().top;
      
        return {x: posx, y: posy};

        
    }

    // mousePos: current mouse position
    // cacheMousePos: previous mouse position
    // lastMousePos: last last recorded mouse position (at the time the last image was shown)
    let mousePos = lastMousePos = cacheMousePos = {x: 0, y: 0};

    var _listener =  ev => mousePos = getMousePos(ev)
    
    
    // update the mouse position
    trailElement.addEventListener('mousemove', _listener, true);
    

    

    //trailElement.removeEventListener('mousemove', ev => mousePos = getMousePos(ev));
    
    // gets the distance from the current mouse position to the last recorded mouse position
    const getMouseDistance = () => MathUtils.distance(mousePos.x,mousePos.y,lastMousePos.x,lastMousePos.y);

    class Image {
        constructor(el) {
            this.DOM = {el: el};
            // image deafult styles
            this.defaultStyle = {
                scale: 1,
                x: 0,
                y: 0,
                opacity: 0
            };
            // get sizes/position
            this.getRect();
            // init/bind events
            this.initEvents();
        }
        initEvents() {
            // on resize get updated sizes/position
            window.addEventListener('resize', () => this.resize());
        }
        resize() {
            // reset styles
            TweenMax.set(this.DOM.el, this.defaultStyle);
            // get sizes/position
            this.getRect();
        }
        getRect() {
            this.rect = this.DOM.el.getBoundingClientRect();
        }
        isActive() {
            // check if image is animating or if it's visible
            return TweenMax.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
        }
    }

    class ImageTrail {
        constructor() {
            // images container
            this.DOM = {content: trailElement};
            
            // array of Image objs, one per image element
            this.images = [];
            [...this.DOM.content.querySelectorAll('.content__img')].forEach(img => this.images.push(new Image(img)));
            // total number of images
            this.imagesTotal = this.images.length;
            // upcoming image index
            this.imgPosition = 0;
            // zIndex value to apply to the upcoming image
            this.zIndexVal = 1;
            // mouse distance required to show the next image
            this.threshold = 150;
            // render the images
            this.raf()
        }
        render() {
            // get distance between the current mouse position and the position of the previous image
            let distance = getMouseDistance();
            // cache previous mouse position
            cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
            cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

            // if the mouse moved more than [this.threshold] then show the next image
            if ( distance > this.threshold ) {
                this.showNextImage();

                ++this.zIndexVal;
                this.imgPosition = this.imgPosition < this.imagesTotal-1 ? this.imgPosition+1 : 0;
                
                lastMousePos = mousePos;
            }

            // check when mousemove stops and all images are inactive (not visible and not animating)
            let isIdle = true;
            for (let img of this.images) {
                if ( img.isActive() ) {
                    isIdle = false;
                    break;
                }
            }
            // reset z-index initial value
            if ( isIdle && this.zIndexVal !== 1 ) {
                this.zIndexVal = 1;
            }

            // loop..
            this.raf()
            
        }

        raf() {
            this.rAF = requestAnimationFrame(() => this.render());
        }

        cancel() {
            window.cancelAnimationFrame(this.rAF);
        }


        showNextImage() {
            // show image at position [this.imgPosition]
            const img = this.images[this.imgPosition];
            // kill any tween on the image
            TweenMax.killTweensOf(img.DOM.el);

            new TimelineMax()
            // show the image
            .set(img.DOM.el, {
                startAt: {opacity: 0, scale: 1},
                opacity: 1,
                scale: 1,
                zIndex: this.zIndexVal,
                x: cacheMousePos.x - img.rect.width/2,
                y: cacheMousePos.y - img.rect.height/2
            }, 0)
            // animate position
            .to(img.DOM.el, 3, {
                ease: Expo.easeOut,
                x: mousePos.x - img.rect.width/2,
                y: mousePos.y - img.rect.height/2
            }, 0)
            // then make it disappear
            .to(img.DOM.el, 1, {
                ease: Power1.easeOut,
                delay:.5,
                opacity: 0
            }, 0.4)
            // scale down the image
            .to(img.DOM.el, 1, {
                ease: Quint.easeOut,
                delay:.5,
                scale: 0.2
            }, 0.4);
        }

       
    }


    if (!imagetrail) {
        imagetrail = new ImageTrail();
    } else {
        imagetrail.cancel()
        imagetrail = new ImageTrail();
    }
    
   
}
    

    

    

