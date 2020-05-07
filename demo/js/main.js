//plugins.js
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

(function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode.parentNode, 'input--filled' );
					}
				}
			})();

(function($){

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var $w = $(window);
    $.fn.visible = function(partial,hidden,direction){

        if (this.length < 1)
            return;

        var $t        = this.length > 1 ? this.eq(0) : this,
            t         = $t.get(0),
            vpWidth   = $w.width(),
            vpHeight  = $w.height(),
            direction = (direction) ? direction : 'both',
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = rec.top    >= 0 && rec.top    <  vpHeight,
                bViz = rec.bottom >  0 && rec.bottom <= vpHeight,
                lViz = rec.left   >= 0 && rec.left   <  vpWidth,
                rViz = rec.right  >  0 && rec.right  <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop         = $w.scrollTop(),
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $w.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                offset          = $t.offset(),
                _top            = offset.top,
                _bottom         = _top + $t.height(),
                _left           = offset.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);


//main.js
function smoothScroll() {
    //
    // SmoothScroll for websites v1.3.8 (Balazs Galambosi)
    // Licensed under the terms of the MIT license.
    //
    // You may use it in your theme if you credit me. 
    // It is also free to use on any individual website.
    //
    // Exception:
    // The only restriction would be not to publish any  
    // extension for browsers or native application
    // without getting a written permission first.
    //

    // Scroll Variables (tweakable)
    var safariOptions = {

        // Scrolling Core
        frameRate: 100, // [Hz]
        animationTime: 400, // [px]
        stepSize: 10, // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Acceleration
        accelerationDelta: 20, // 20
        accelerationMax: 1, // 1

        // Keyboard Settings
        keyboardSupport: true, // option
        arrowScroll: 50, // [px]

        // Other
        touchpadSupport: true,
        fixedBackground: true,
        excluded: ''
    };

    var defaultOptions = {

        // Scrolling Core
        frameRate: 100, // [Hz]
        animationTime: 400, // [px]
        stepSize: 40, // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Acceleration
        accelerationDelta: 20, // 20
        accelerationMax: 1, // 1

        // Keyboard Settings
        keyboardSupport: true, // option
        arrowScroll: 50, // [px]

        // Other
        touchpadSupport: true,
        fixedBackground: true,
        excluded: ''
    };

    var options;

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            options = defaultOptions;
        } else {
            options = safariOptions;
        }
    } else {
        options = defaultOptions;
    }




    // Other Variables
    var isExcluded = false;
    var isFrame = false;
    var direction = {
        x: 0,
        y: 0
    };
    var initDone = false;
    var root = document.documentElement;
    var activeElement;
    var observer;
    var deltaBuffer = [];
    var isMac = /^Mac/.test(navigator.platform);

    var key = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };


    /***********************************************
     * INITIALIZE
     ***********************************************/

    /**
     * Tests if smooth scrolling is allowed. Shuts down everything if not.
     */
    function initTest() {
        if (options.keyboardSupport) {
            addEvent('keydown', keydown);
        }
    }

    /**
     * Sets up scrolls array, determines if frames are involved.
     */
    function init() {

        if (initDone || !document.body) return;

        initDone = true;

        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;

        // check compat mode for root element
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;

        initTest();

        // Checks if this script is running in a frame
        if (top != self) {
            isFrame = true;
        }

        /**
         * This fixes a bug where the areas left and right to
         * the content does not trigger the onmousewheel event
         * on some pages. e.g.: html, body { height: 100% }
         */
        else if (scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight ||
                html.offsetHeight <= windowHeight)) {

            var fullPageElem = document.createElement('div');
            fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
                'top:0; left:0; right:0; height:' +
                root.scrollHeight + 'px';
            document.body.appendChild(fullPageElem);

            // DOM changed (throttled) to fix height
            var pendingRefresh;
            var refresh = function () {
                if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
                pendingRefresh = setTimeout(function () {
                    if (isExcluded) return; // could be running after cleanup
                    fullPageElem.style.height = '0';
                    fullPageElem.style.height = root.scrollHeight + 'px';
                    pendingRefresh = null;
                }, 500); // act rarely to stay fast
            };

            setTimeout(refresh, 10);

            // TODO: attributeFilter?
            var config = {
                attributes: true,
                childList: true,
                characterData: false
                    // subtree: true
            };

            observer = new MutationObserver(refresh);
            observer.observe(body, config);

            if (root.offsetHeight <= windowHeight) {
                var clearfix = document.createElement('div');
                clearfix.style.clear = 'both';
                body.appendChild(clearfix);
            }
        }

        // disable fixed background
        if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = 'scroll';
            html.style.backgroundAttachment = 'scroll';
        }
    }

    /**
     * Removes event listeners and other traces left on the page.
     */
    function cleanup() {
        observer && observer.disconnect();
        removeEvent(wheelEvent, wheel);
        removeEvent('mousedown', mousedown);
        removeEvent('keydown', keydown);
    }


    /************************************************
     * SCROLLING
     ************************************************/

    var que = [];
    var pending = false;
    var lastScroll = Date.now();

    /**
     * Pushes scroll actions to the scrolling queue.
     */
    function scrollArray(elem, left, top) {

        directionCheck(left, top);

        if (options.accelerationMax != 1) {
            var now = Date.now();
            var elapsed = now - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + (50 / elapsed)) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    left *= factor;
                    top *= factor;
                }
            }
            lastScroll = Date.now();
        }

        // push a scroll command
        que.push({
            x: left,
            y: top,
            lastX: (left < 0) ? 0.99 : -0.99,
            lastY: (top < 0) ? 0.99 : -0.99,
            start: Date.now()
        });

        // don't act if there's a pending queue
        if (pending) {
            return;
        }

        var scrollWindow = (elem === document.body);

        var step = function (time) {

            var now = Date.now();
            var scrollX = 0;
            var scrollY = 0;

            for (var i = 0; i < que.length; i++) {

                var item = que[i];
                var elapsed = now - item.start;
                var finished = (elapsed >= options.animationTime);

                // scroll position: [0, 1]
                var position = (finished) ? 1 : elapsed / options.animationTime;

                // easing [optional]
                if (options.pulseAlgorithm) {
                    position = pulse(position);
                }

                // only need the difference
                var x = (item.x * position - item.lastX) >> 0;
                var y = (item.y * position - item.lastY) >> 0;

                // add this to the total scrolling
                scrollX += x;
                scrollY += y;

                // update last values
                item.lastX += x;
                item.lastY += y;

                // delete and step back if it's over
                if (finished) {
                    que.splice(i, 1);
                    i--;
                }
            }

            // scroll left and top
            if (scrollWindow) {
                window.scrollBy(scrollX, scrollY);
            } else {
                if (scrollX) elem.scrollLeft += scrollX;
                if (scrollY) elem.scrollTop += scrollY;
            }

            // clean up if there's nothing left to do
            if (!left && !top) {
                que = [];
            }

            if (que.length) {
                requestFrame(step, elem, (1000 / options.frameRate + 1));
            } else {
                pending = false;
            }
        };

        // start a new queue of actions
        requestFrame(step, elem, 0);
        pending = true;
    }


    /***********************************************
     * EVENTS
     ***********************************************/

    /**
     * Mouse wheel handler.
     * @param {Object} event
     */
    function wheel(event) {

        if (!initDone) {
            init();
        }

        var target = event.target;
        var overflowing = overflowingAncestor(target);

        // use default if there's no overflowing
        // element or default action is prevented   
        // or it's a zooming event with CTRL 
        if (!overflowing || event.defaultPrevented || event.ctrlKey) {
            return true;
        }

        // leave embedded content alone (flash & pdf)
        if (isNodeName(activeElement, 'embed') ||
            (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
            isNodeName(activeElement, 'object')) {
            return true;
        }

        var deltaX = -event.wheelDeltaX || event.deltaX || 0;
        var deltaY = -event.wheelDeltaY || event.deltaY || 0;

        if (isMac) {
            if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
                deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
            }
            if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
                deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
            }
        }

        // use wheelDelta if deltaX/Y is not available
        if (!deltaX && !deltaY) {
            deltaY = -event.wheelDelta || 0;
        }

        // line based scrolling (Firefox mostly)
        if (event.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40;
        }

        // check if it's a touchpad scroll that should be ignored
        if (!options.touchpadSupport && isTouchpad(deltaY)) {
            return true;
        }

        // scale by step size
        // delta is 120 most of the time
        // synaptics seems to send 1 sometimes
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120;
        }

        scrollArray(overflowing, deltaX, deltaY);
        event.preventDefault();
        scheduleClearCache();
    }

    /**
     * Keydown event handler.
     * @param {Object} event
     */
    function keydown(event) {

        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey ||
            (event.shiftKey && event.keyCode !== key.spacebar);

        // our own tracked active element could've been removed from the DOM
        if (!document.contains(activeElement)) {
            activeElement = document.activeElement;
        }

        // do nothing if user is editing text
        // or using a modifier key (except shift)
        // or in a dropdown
        // or inside interactive elements
        var inputNodeNames = /^(textarea|select|embed|object)$/i;
        var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (inputNodeNames.test(target.nodeName) ||
            isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
            isNodeName(activeElement, 'video') ||
            isInsideYoutubeVideo(event) ||
            target.isContentEditable ||
            event.defaultPrevented ||
            modifier) {
            return true;
        }

        // spacebar should trigger button press
        if ((isNodeName(target, 'button') ||
                isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
            event.keyCode === key.spacebar) {
            return true;
        }

        var shift, x = 0,
            y = 0;
        var elem = overflowingAncestor(activeElement);
        var clientHeight = elem.clientHeight;

        if (elem == document.body) {
            clientHeight = window.innerHeight;
        }

        switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            y = -elem.scrollTop;
            break;
        case key.end:
            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
            y = (damt > 0) ? damt + 10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;
        default:
            return true; // a key we don't care about
        }

        scrollArray(elem, x, y);
        event.preventDefault();
        scheduleClearCache();
    }

    /**
     * Mousedown event only for updating activeElement
     */
    function mousedown(event) {
        activeElement = event.target;
    }


    /***********************************************
     * OVERFLOW
     ***********************************************/

    var uniqueID = (function () {
        var i = 0;
        return function (el) {
            return el.uniqueID || (el.uniqueID = i++);
        };
    })();

    var cache = {}; // cleared out after a scrolling session
    var clearCacheTimer;

    //setInterval(function () { cache = {}; }, 10 * 1000);

    function scheduleClearCache() {
        clearTimeout(clearCacheTimer);
        clearCacheTimer = setInterval(function () {
            cache = {};
        }, 1 * 1000);
    }

    function setCache(elems, overflowing) {
        for (var i = elems.length; i--;)
            cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
    }

    //  (body)                (root)
    //         | hidden | visible | scroll |  auto  |
    // hidden  |   no   |    no   |   YES  |   YES  |
    // visible |   no   |   YES   |   YES  |   YES  |
    // scroll  |   no   |   YES   |   YES  |   YES  |
    // auto    |   no   |   YES   |   YES  |   YES  |

    function overflowingAncestor(el) {
        var elems = [];
        var body = document.body;
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = cache[uniqueID(el)];
            if (cached) {
                return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
                var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
                if (isFrame && isContentOverflowing(root) ||
                    !isFrame && isOverflowCSS) {
                    return setCache(elems, getScrollRoot());
                }
            } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
                return setCache(elems, el);
            }
        } while (el = el.parentElement);
    }

    function isContentOverflowing(el) {
        return (el.clientHeight + 10 < el.scrollHeight);
    }

    // typically for <body> and <html>
    function overflowNotHidden(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow !== 'hidden');
    }

    // for all other elements
    function overflowAutoOrScroll(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow === 'scroll' || overflow === 'auto');
    }


    /***********************************************
     * HELPERS
     ***********************************************/

    function addEvent(type, fn) {
        window.addEventListener(type, fn, false);
    }

    function removeEvent(type, fn) {
        window.removeEventListener(type, fn, false);
    }

    function isNodeName(el, tag) {
        return (el.nodeName || '').toLowerCase() === tag.toLowerCase();
    }

    function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
            lastScroll = 0;
        }
    }

    var deltaBufferTimer;

    if (window.localStorage && localStorage.SS_deltaBuffer) {
        deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    }

    function isTouchpad(deltaY) {
        if (!deltaY) return;
        if (!deltaBuffer.length) {
            deltaBuffer = [deltaY, deltaY, deltaY];
        }
        deltaY = Math.abs(deltaY)
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);
        deltaBufferTimer = setTimeout(function () {
            if (window.localStorage) {
                localStorage.SS_deltaBuffer = deltaBuffer.join(',');
            }
        }, 1000);
        return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
    }

    function isDivisible(n, divisor) {
        return (Math.floor(n / divisor) == n / divisor);
    }

    function allDeltasDivisableBy(divisor) {
        return (isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor));
    }

    function isInsideYoutubeVideo(event) {
        var elem = event.target;
        var isControl = false;
        if (document.URL.indexOf('www.youtube.com/watch') != -1) {
            do {
                isControl = (elem.classList &&
                    elem.classList.contains('html5-video-controls'));
                if (isControl) break;
            } while (elem = elem.parentNode);
        }
        return isControl;
    }

    var requestFrame = (function () {
        return (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback, element, delay) {
                window.setTimeout(callback, delay || (1000 / 60));
            });
    })();

    var MutationObserver = (window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver);

    var getScrollRoot = (function () {
        var SCROLL_ROOT;
        return function () {
            if (!SCROLL_ROOT) {
                var dummy = document.createElement('div');
                dummy.style.cssText = 'height:10000px;width:1px;';
                document.body.appendChild(dummy);
                var bodyScrollTop = document.body.scrollTop;
                var docElScrollTop = document.documentElement.scrollTop;
                window.scrollBy(0, 1);
                if (document.body.scrollTop != bodyScrollTop)
                    (SCROLL_ROOT = document.body);
                else
                    (SCROLL_ROOT = document.documentElement);
                window.scrollBy(0, -1);
                document.body.removeChild(dummy);
            }
            return SCROLL_ROOT;
        };
    })();


    /***********************************************
     * PULSE (by Michael Herf)
     ***********************************************/

    /**
     * Viscous fluid with a pulse for part and decay for the rest.
     * - Applies a fixed force over an interval (a damped acceleration), and
     * - Lets the exponential bleed away the velocity over a longer interval
     * - Michael Herf, http://stereopsis.com/stopping/
     */
    function pulse_(x) {
        var val, start, expx;
        // test
        x = x * options.pulseScale;
        if (x < 1) { // acceleartion
            val = x - (1 - Math.exp(-x));
        } else { // tail
            // the previous animation ended here:
            start = Math.exp(-1);
            // simple viscous drag
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + (expx * (1 - start));
        }
        return val * options.pulseNormalize;
    }

    function pulse(x) {
        if (x >= 1) return 1;
        if (x <= 0) return 0;

        if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
    }

    var wheelEvent;
    if ('onwheel' in document.createElement('div'))
        wheelEvent = 'wheel';
    else if ('onmousewheel' in document.createElement('div'))
        wheelEvent = 'mousewheel';

    if (wheelEvent) {
        addEvent(wheelEvent, wheel);
        addEvent('mousedown', mousedown);
        addEvent('load', init);
    }
}

smoothScroll();

var number = 100;
var numberTwo = 100;
var position = $(window).scrollTop();


(function (a) {
    if ((jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|android|ipad|playbook|silk|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        sqMobile = true;
        return sqMobile;
    } else {
        sqMobile = false;
        return sqMobile;
    }
})(navigator.userAgent || navigator.vendor || window.opera);

function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}


//menu control

$('.menu-open').click(function () {
    $('header .header-inner').removeClass('menu-right-off');
});

$('main').click(function () {
    $('header .header-inner').addClass('menu-right-off');
});
$('.menu-close').click(function () {
    $('header .header-inner').addClass('menu-right-off');
});


$(window).load(function () {
    var windowH = $(window).height();
    var windowW = $(window).width();
    var heroH = $('.about-hero.wrapper').height();
    var aboutLineHeight = (windowW > 1009) ? "120%" : "150%";
    $('.loader-inner').fadeOut(500, function(){
        $('.loader').delay(500).animate({
            width: 0
        }, 500, function () {
            $('.loader').hide();
            $('.logo-wrapper').removeClass('off-win-left');
            setTimeout(function () {
                $('.header-inner').removeClass('off-win-left');
            }, 1000);

            //home
            if ($('#home-hero-video').parent().visible(true)) {
                setTimeout(function () {
                    $('#home-hero-video').delay(500).removeClass('full-width');
                    $('.home-hero-top-left').delay(500).removeClass('off-win-left');
                    $('.hero-line.top').delay(800).animate({
                        height: "75%"
                    }, 500);
                    $('.hero-line.bottom').delay(800).animate({
                        height: "100%"
                    }, 500);
                }, 1000);
            }


            if ($('.home-sub-inro.one a p').visible(true)) {
                setTimeout(function () {
                    $('.home-sub-inro.one a .line').delay(1000).animate({
                        top: "-400px"
                    }, 500);
                }, 1000);

            }
            if ($('.home-sub-link-row').visible(true)) {
                setTimeout(function () {
                    $('.home-sub-link-row .line.sub').delay(800).animate({
                        bottom: "0px"
                    }, 500);
                }, 1000);

            }
            if ($('.testimonial-outer-wrapper').visible(true)) {
                setTimeout(function () {
                    $('.testimonial-line').delay(1000).animate({
                        height: "200px"
                    }, 500);
                }, 1000);

            }
            //about
            $('.about-sub-wrapper .row .line-vertical').delay(500).animate({
                height: (position - heroH + windowH * 0.3) + 10
            }, 500);
            $('.about-sub-wrapper .row .about-row-bg').delay(500).animate({
                height: (position - heroH + windowH * 0.3) + 10
            }, 500);
            if ($('.about-hero.wrapper').visible(true)) {
                setTimeout(function () {
                    $('.about-hero-content').removeClass('off-win-left');
                    setTimeout(function () {
                        $('.about-hero-bottom-bg').removeClass('off-win-bottom');
                    }, 500);
                    $('.about-hero-content .line-vertical').delay(500).animate({
                        height: aboutLineHeight
                    }, 500);
                    $('.about-hero-content .line-horizontal').delay(500).animate({
                        width: "85%"
                    }, 500);

                }, 500);
            }
            if ($('.about-key-2').visible(true)) {
                $('.about-key-1').removeClass('off-win-left');
            }
            if ($('.about-3-control').visible(true)) {
                $('.about-key-3').removeClass('off-win-right-2');
            }

            //services

            $('.services-big-bg').delay(500).animate({
                height: (position + windowH * 0.7) + 10
            }, 500);

            if ($('.services-hero-wrapper').visible(true)) {
                setTimeout(function () {
                    $('.services-hero-bg').removeClass('off-win-left-2');
                    $('.services-hero-wrapper .line-vertical').delay(500).animate({
                        height: "200%"
                    }, 500, function () {
                        $('.services-hero-wrapper .line-horizontal').animate({
                            width: "120%"
                        }, 500);
                        $('.services-hero-bottom-left-bg').removeClass('off-win-left');
                        $('.services-hero-bottom-right-bg').removeClass('off-win-right');
                    });
                }, 500);

            }

            //projects
            if ($('.project-hero-wrapper').visible(true)) {
                setTimeout(function () {
                    $('.project-hero-bg').removeClass('off-win-right-2');
                    $('.project-hero-wrapper .line-vertical').delay(500).animate({
                        height: "200%"
                    }, 500, function () {
                        $('.project-hero-wrapper .line-horizontal').animate({
                            width: "150%"
                        }, 500);
                        $('.project-hero-bottom-top-bg').removeClass('off-win-left');

                    });
                    $('.project-hero-bottom-bg').removeClass('off-win-left');
                }, 500);
            }

            if ($('.project-a-wrapper .project-content .gallery-link').visible(true)) {
                setTimeout(function () {
                    $('.project-a-wrapper .project-hero-bg-overlay').addClass('off-win-left');
                }, 500);
            }

            if ($('.project-b-wrapper .project-content .gallery-link').visible(true)) {
                setTimeout(function () {
                    $('.project-b-wrapper .project-hero-bg-overlay').addClass('off-win-right');
                }, 500);
            }

            if ($('.project-c-wrapper .project-content .gallery-link').visible(true)) {
                setTimeout(function () {
                    $('.project-c-wrapper .project-hero-bg-overlay').addClass('off-win-left');
                }, 500);
            }

            //contact
            setTimeout(function () {
                $('.contact-left-wrapper').removeClass('full-width');
            }, 1000);


        });
    });


});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //home
    if ($('#home-hero-video').parent().visible(true)) {
        setTimeout(function () {
            $('#home-hero-video').delay(500).removeClass('full-width');
            $('.home-hero-top-left').delay(500).removeClass('off-win-left');
            $('.hero-line.top').delay(800).animate({
                height: "75%"
            }, 500);
            $('.hero-line.bottom').delay(800).animate({
                height: "100%"
            }, 500);
        }, 1000);
    }

    if ($('.home-sub-inro.one a p').visible(true)) {
        $('.home-sub-inro.one a .line').delay(100).animate({
            top: "-400px"
        }, 500);
    }
    if ($('.home-sub-link-row').visible(true)) {
        $('.home-sub-link-row .line.sub').delay(500).animate({
            bottom: "0px"
        }, 500);
    }
    if ($('.testimonial-outer-wrapper').visible(true)) {
        $('.testimonial-line').delay(500).animate({
            height: "200px"
        }, 500);
    }
    //about
    var windowH = $(window).height();
    var heroH = $('.about-hero.wrapper').height();
    var windowW = $(window).width();
    var aboutLineHeight = (windowW > 1009) ? "120%" : "150%";
    if ($('.about-hero.wrapper').visible(true)) {
        setTimeout(function () {
            $('.about-hero-content').removeClass('off-win-left');
            setTimeout(function () {
                $('.about-hero-bottom-bg').removeClass('off-win-bottom');
            }, 500);
            $('.about-hero-content .line-vertical').delay(500).animate({
                height: aboutLineHeight
            }, 500);
            $('.about-hero-content .line-horizontal').delay(500).animate({
                width: "85%"
            }, 500);
        }, 500);
    }

    if ($('.about-key-2').visible(true)) {
        $('.about-key-1').removeClass('off-win-left');
    }
    if ($('.about-3-control').visible(true)) {
        $('.about-key-3').removeClass('off-win-right-2');
    }

    if (scroll > position) {
        number = (position - heroH + windowH * 0.3) + 10;
        numberTwo = (position + windowH * 0.7) + 10;
        $('.about-sub-wrapper .row .line-vertical').animate({
            height: number
        }, 0);
        $('.about-sub-wrapper .row .about-row-bg').animate({
            height: number
        }, 0);
        $('.services-big-bg').animate({
            height: numberTwo
        }, 0);

    } else if (scroll < position) {
        number = (position - heroH + windowH * 0.3) - 10;
        numberTwo = (position + windowH * 0.7) - 10;
        $('.about-sub-wrapper .row .line-vertical').animate({
            height: number
        }, 0);
        $('.about-sub-wrapper .row .about-row-bg').animate({
            height: number
        }, 0);
        $('.services-big-bg').animate({
            height: numberTwo
        }, 0);

    }

    position = scroll;

    //services

    if ($('.services-hero-wrapper').visible(true)) {
        setTimeout(function () {
            $('.services-hero-bg').removeClass('off-win-left-2');
            $('.services-hero-wrapper .line-vertical').delay(500).animate({
                height: "200%"
            }, 500, function () {
                $('.services-hero-wrapper .line-horizontal').animate({
                    width: "120%"
                }, 500);
                $('.services-hero-bottom-left-bg').removeClass('off-win-left');
                $('.services-hero-bottom-right-bg').removeClass('off-win-right');
            });
        }, 500);

    }


    //projects
    if ($('.project-hero-wrapper').visible(true)) {
        setTimeout(function () {
            $('.project-hero-bg').removeClass('off-win-right-2');
            $('.project-hero-wrapper .line-vertical').delay(500).animate({
                height: "200%"
            }, 500, function () {
                $('.project-hero-wrapper .line-horizontal').animate({
                    width: "150%"
                }, 500);
                $('.project-hero-bottom-top-bg').removeClass('off-win-left');

            });
            $('.project-hero-bottom-bg').removeClass('off-win-left');
        }, 500);
    }

    if ($('.project-a-wrapper .project-content .gallery-link').visible(true)) {
        setTimeout(function () {
            $('.project-a-wrapper .project-hero-bg-overlay').addClass('off-win-left');
        }, 50);
    }

    if ($('.project-b-wrapper .project-content .gallery-link').visible(true)) {
        setTimeout(function () {
            $('.project-b-wrapper .project-hero-bg-overlay').addClass('off-win-right');
        }, 50);
    }

    if ($('.project-c-wrapper .project-content .gallery-link').visible(true)) {
        setTimeout(function () {
            $('.project-c-wrapper .project-hero-bg-overlay').addClass('off-win-left');
        }, 50);
    }


});




function updateFullPageHeader() {
    var windowH = $(window).height();
    var windowW = $(window).width();
    $(".about-hero.wrapper").css({
        height: windowH
    });
    $(".services-hero.wrapper").css({
        height: windowH
    });
    $(".project-hero.wrapper").css({
        height: windowH
    });
    $(".gallery-outer-wrapper .owl-wrapper-outer div").css({
        height: windowH - 100
    });
    $(".gallery-outer-wrapper .owl-carousel.gallery .item p").css({
        width: windowW * 0.8
    });
    $(".gallery-outer-wrapper .gallery-wrapper").css({
        width: windowW * 0.8
    });
}

updateFullPageHeader();

$(window).resize(function () {
    var windowW = $(window).width();
    updateFullPageHeader();
     if (windowW > 590) {
         $('header .header-inner').addClass('menu-right-off');
    $('.home-sub-modal-wrapper.one').removeClass('content-is-visible');
    $('.home-sub-modal-wrapper.two').removeClass('content-is-visible');
    $('.home-sub-modal-wrapper.three').removeClass('content-is-visible');
    $(".home-second").animate({
        'padding-top': 0,
    }, 0);
     }
    
});

$('.home-sub-inro.one .effect-reveal').click(function (event) {
    event.preventDefault();
    var windowW = $(window).width();
    var heroH = $('.home-hero.wrapper').height();
    $('html,body').animate({
            scrollTop: $("#home-second").offset().top
        },
        'slow');
    if (windowW > 590) {
        $(".home-second").animate({
            'padding-top': 500,
        }, 500);
    }

    if ($('.home-sub-modal-wrapper.two').hasClass('content-is-visible') || $('.home-sub-modal-wrapper.three').hasClass('content-is-visible')) {
        $('.home-sub-modal-wrapper.two').removeClass('content-is-visible');
        $('.home-sub-modal-wrapper.three').removeClass('content-is-visible');
        $('.home-sub-modal-wrapper.one').addClass('content-is-visible');

    } else {
        $('.home-sub-modal-wrapper.one').addClass('content-is-visible');

    }

});

$('.home-sub-inro.two .effect-reveal').click(function (event) {
    event.preventDefault();
    var windowW = $(window).width();
    var heroH = $('.home-hero.wrapper').height();
    $('html,body').animate({
            scrollTop: $("#home-second").offset().top
        },
        'slow');
    if (windowW > 590) {
        $(".home-second").animate({
            'padding-top': 500,
        }, 500);
    }
    if ($('.home-sub-modal-wrapper.one').hasClass('content-is-visible') || $('.home-sub-modal-wrapper.three').hasClass('content-is-visible')) {
        $('.home-sub-modal-wrapper.one').removeClass('content-is-visible');
        $('.home-sub-modal-wrapper.three').removeClass('content-is-visible');
        $('.home-sub-modal-wrapper.two').addClass('content-is-visible');
    } else {
        $('.home-sub-modal-wrapper.two').addClass('content-is-visible');
    }

});


$('.home-sub-inro.three .effect-reveal').click(function (event) {
    event.preventDefault();
    var windowW = $(window).width();
    var heroH = $('.home-hero.wrapper').height();
    $('html,body').animate({
            scrollTop: $("#home-second").offset().top
        },
        'slow');
    if (windowW > 590) {
        $(".home-second").animate({
            'padding-top': 500,
        }, 500);
    }
    if ($('.home-sub-modal-wrapper.one').hasClass('content-is-visible') || $('.home-sub-modal-wrapper.two').hasClass('content-is-visible')) {
        $('.home-sub-modal-wrapper.one').removeClass('content-is-visible');
        $('.home-sub-modal-wrapper.two').removeClass('content-is-visible');
        $('.home-sub-modal-wrapper.three').addClass('content-is-visible');
    } else {
        $('.home-sub-modal-wrapper.three').addClass('content-is-visible');
    }

});


$('.modal-close').click(function () {
    $('.home-sub-modal-wrapper.one').removeClass('content-is-visible');
    $('.home-sub-modal-wrapper.two').removeClass('content-is-visible');
    $('.home-sub-modal-wrapper.three').removeClass('content-is-visible');
    $(".home-second").animate({
        'padding-top': 0,
    }, 200);
});




$('.project-a-wrapper .gallery-link a').click(function (event) {
    event.preventDefault();
    $('html').addClass('noscroll');
    $('body').addClass('noscroll');
    var owl = $('#project-a-gallery');

    owl.owlCarousel({
        items: 1,
        lazyLoad: true,
        navigation: true,
        navigationText: false,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        afterInit: attachEvent
    });

    function attachEvent() {
        var windowH = $(window).height();
        var windowW = $(window).width();
        $(".gallery-outer-wrapper .owl-wrapper-outer div").css({
            height: windowH - 100
        });
        $(".gallery-outer-wrapper .owl-carousel.gallery .item p").css({
            width: windowW * 0.8
        });
        $(".gallery-outer-wrapper .gallery-wrapper").css({
            width: windowW * 0.8
        });
    }

    $('#project-a-gallery').removeClass('hidden');
    $('#project-b-gallery').addClass('hidden');
    $('#project-c-gallery').addClass('hidden');
    $('.gallery-outer-wrapper').addClass('gallery-animate');

});

$('.project-b-wrapper .gallery-link a').click(function (event) {
    event.preventDefault();
    $('html').addClass('noscroll');
    $('body').addClass('noscroll');
    var owl2 = $('#project-b-gallery');

    owl2.owlCarousel({
        items: 1,
        lazyLoad: true,
        navigation: true,
        navigationText: false,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        afterInit: attachEvent
    });

    function attachEvent() {
        var windowH = $(window).height();
        var windowW = $(window).width();
        $(".gallery-outer-wrapper .owl-wrapper-outer div").css({
            height: windowH - 100
        });
        $(".gallery-outer-wrapper .owl-carousel.gallery .item p").css({
            width: windowW * 0.8
        });
        $(".gallery-outer-wrapper .gallery-wrapper").css({
            width: windowW * 0.8
        });
    }

    $('#project-a-gallery').addClass('hidden');
    $('#project-b-gallery').removeClass('hidden');
    $('#project-c-gallery').addClass('hidden');
    $('.gallery-outer-wrapper').addClass('gallery-animate');

});

$('.project-c-wrapper .gallery-link a').click(function (event) {
    event.preventDefault();
    $('html').addClass('noscroll');
    $('body').addClass('noscroll');
    var owl3 = $('#project-c-gallery');

    owl3.owlCarousel({
        items: 1,
        lazyLoad: true,
        navigation: true,
        navigationText: false,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        afterInit: attachEvent
    });

    function attachEvent() {
        var windowH = $(window).height();
        var windowW = $(window).width();
        $(".gallery-outer-wrapper .owl-wrapper-outer div").css({
            height: windowH - 100
        });
        $(".gallery-outer-wrapper .owl-carousel.gallery .item p").css({
            width: windowW * 0.8
        });
        $(".gallery-outer-wrapper .gallery-wrapper").css({
            width: windowW * 0.8
        });
    }
    $('#project-a-gallery').addClass('hidden');
    $('#project-b-gallery').addClass('hidden');
    $('#project-c-gallery').removeClass('hidden');
    $('.gallery-outer-wrapper').addClass('gallery-animate');

});

$('.gallery-close').click(function () {
    $('.gallery-outer-wrapper').removeClass('gallery-animate');
    $('html').removeClass('noscroll');
    $('body').removeClass('noscroll');
});


$('.menu-estimate-btn').click(function (event) {
    event.preventDefault();
    $('html').addClass('noscroll');
    $('body').addClass('noscroll');
    $('.free-estimate-form-wrapper').addClass('free-estimate-animate');
});

$('.free-estimate-close').click(function () {
    $('.free-estimate-form-wrapper').removeClass('free-estimate-animate');
    $('html').removeClass('noscroll');
    $('body').removeClass('noscroll');
});