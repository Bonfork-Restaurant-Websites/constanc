// MENU
(function () {
    function getScrollBarWidth() {
        var outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

        document.body.appendChild(outer);
        var widthNoScroll = outer.offsetWidth; // force scrollbars

        outer.style.overflow = 'scroll'; // add innerdiv

        var inner = document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        var widthWithScroll = inner.offsetWidth; // remove divs

        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    }


    var button = $('.header__menu-button');
    var panel = $('.header__menu');

    function openMenu() {
        var scrollBarWidth = window.innerWidth > document.querySelector('body').offsetWidth ? getScrollBarWidth() : 0;
        $('body').css({
            overflow: 'hidden',
            paddingRight: "".concat(scrollBarWidth, "px")
        });
    };

    function hideMenu() {
        $('body').css({
            overflow: '',
            paddingRight: ''
        });
        button.css({
            marginRight: ''
        });
    };

    button.on('click', function () {
        button.toggleClass('header__menu-button_cross');
        button.toggleClass('header__menu-button_burger', !button.hasClass('header__menu-button_cross'));
        panel.toggleClass('header__menu_opened');


        if (button.hasClass('header__menu-button_cross')) {
            openMenu();
        } else {
            hideMenu();
        }
    });
})();


let telInput = $("#phone");

// initialize
telInput.intlTelInput({
    initialCountry: 'auto',
    separateDialCode: true,
    autoPlaceholder: 'aggressive',
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/js/utils.js",
    geoIpLookup: function (callback) {
        fetch('https://api.ipdata.co/?api-key=a86af3a7a4a375bfa71f9259b5404149d1eabb74adcc275e4faf9dfe', {
            cache: 'reload'
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Failed: ' + response.status)
        }).then(ipjson => {
            callback(ipjson.country_code)
        }).catch(e => {
            callback('ca')
        })
    }
});

let telInput2 = $("#contact-phone");

// initialize
telInput2.intlTelInput({
    initialCountry: 'auto',
    separateDialCode: true,
    autoPlaceholder: 'aggressive',
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/js/utils.js",
    geoIpLookup: function (callback) {
        fetch('https://api.ipdata.co/?api-key=a86af3a7a4a375bfa71f9259b5404149d1eabb74adcc275e4faf9dfe', {
            cache: 'reload'
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Failed: ' + response.status)
        }).then(ipjson => {
            callback(ipjson.country_code)
        }).catch(e => {
            callback('ca')
        })
    }
});


// Helper function to get form data in the supported format
function getFormDataString(formEl) {
    var formData = new FormData(formEl),
        data = [];

    for (var keyValue of formData) {
        data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
    }

    return data.join("&");
}

// Fetch the form element
var reservationForm = document.getElementById("reservation-form");

// Override the submit event
reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var request = new XMLHttpRequest();

    request.addEventListener("load", function () {
        if (request.status === 302) { // CloudCannon redirects on success
            // It worked
        }
    });

    request.open(reservationForm.method, reservationForm.action);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(getFormDataString(reservationForm));
    reservationForm.style.display = 'none';
    document.getElementById('reservation-alert').style.display = 'block';
});


// Cursor 
const cursor = $(".cursor"),
    body = $("body"),
    wwidth = $(window).width(),
    wheight = $(window).height(),

    cursorMove = function () {
        var e, n;
        return (
            body.addClass("cursor-on"),
            cursor.css({
                transform: "matrix(1, 0, 0, 1, " + wwidth / 2 + ", " + wheight / 2 + ")"
            }),
            (e = wheight / 2),
            (n = 0.65 * wwidth / 2),
            n > e ? e : n,
            $(window).on("mousemove", function (e) {
                var n, t;
                if (
                    ((window.x = e.clientX),
                        (window.y = e.clientY),
                        cursor.css({
                            transform: "matrix(1, 0, 0, 1, " + x + ", " + y + ")"
                        }))
                );
            })
        );
    };
cursorBind = function () {
    var e, n, t;
    if (
        ((n = cursor.find("span")).removeClass("link external new"),
            (e = $(".focus")),
            (t = $(".slack")),
            $(window).on({
                mouseenter: function () {
                    return n.removeClass("off");
                },
                mouseleave: function () {
                    return n.addClass("off");
                }
            }),
            $("a, button").on({
                mouseenter: function () {
                    var e;
                    return (
                        (e = $(this).hasClass("external") ? "link external" : "link"),
                        n.addClass(e)
                    );
                },
                mouseleave: function () {
                    return n.removeClass("link external");
                }
            })
        )
    )
        return;
};

cursorMove();
cursorBind();

// Preloader
(function ($) {
    "use strict";
    $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 500,
        outDuration: 500,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([href$=".jpg"]):not([href$=".png"])',
        loading: true,
        loadingParentElement: "body",
        loadingClass: "animsition-loading2",
        loadingInner:
            '<div class="spinner">\n        <div class="double-bounce1"></div>\n      <div class="double-bounce2"></div>\n      </div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ["animation-duration", "-webkit-animation-duration"],
        overlay: false,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body",
        transition: function transition(url) {
            window.location.href = url;
        }
    });
})(jQuery);