function getUnixSeconds() {
    return Math.round((new Date().getTime() / 1000));
}
var eventCapping = {};
var gameEventDebug = true;

function recordGameEvent(eee) {
    if (eee == 'go_home') {
        rotateBrandingLinks();
    } else if (eee == 'preload_start') {
        document.getElementById('spinner').style.display = 'none';
        if (typeof onGameLoadingStart == 'function') onGameLoadingStart();
    } else if (eee == 'preload_1st_quarter' || eee == 'preload_2nd_quarter' || eee == 'preload_3rd_quarter') {
        if (typeof onGameLoadingProgress == 'function') onGameLoadingProgress(eee);
    } else if (eee == 'preload_end') {
        exportRoot.globals.homeFunction = onGoHome;
        if (typeof onGameLoaded == 'function') onGameLoaded();
    } else if (eee == 'main_menu') {
        if (typeof onMainMenu == 'function') onMainMenu();
    } else if (eee == 'close_midroll') {
        if (typeof onCloseMidroll == 'function') onCloseMidroll();
    } else if (eee == 'play') {
        if (typeof onGameStart == 'function') onGameStart();
    } else if (eee == 'game_over') {
        if (typeof onGameOver == 'function') onGameOver();
    }
    if (typeof eventCapping[eee] != "undefined" && getUnixSeconds() - eventCapping[eee] < 5) {
        if (gameEventDebug == true) console.log('[EVENT gid:' + gid + '] ' + eee + ' %c[blocked spam]', 'color:red;');
        return;
    }
    eventCapping[eee] = getUnixSeconds();
    if (gameEventDebug == true) console.log('%c [EVENT gid:' + gid + '] ' + eee, 'color:green;');
    if (eee == 'play' || eee == 'show_midroll' || eee == 'show_midroll_reward' || eee == 'game_over' || eee == 'play_level')
        ga('send', 'event', 'game_events_' + gid, eee);
}

function rotateBrandingLinks() {
    if (premiumGame != 0 || typeof exportRoot == 'undefined') return;
    var brandingUrls = ['http://www.girlsplay.com', 'http://www.girlg.com', 'http://www.pop.games'];
    var cdev = getCookie('dev');
    if (cdev === null) cdev = dev;
    if (++cdev > 3) cdev = 1;
    setCookie('dev', cdev, 30, '/');
    exportRoot.globals.mother = window.mgBrandingLink = brandingUrls[cdev - 1];
}

function onGoHome() {
    if (window.blk) {
        if (window.blk.indexOf(this.globals.blkVar) >= 0) {
            return;
        } else if (window.blk.indexOf('all') >= 0) {
            return;
        }
    }
    this.globals.recordEvent('go_home');
    if (typeof window.mother2 == 'undefined') {
        this.globals.mother2 = this.globals.mother;
    } else {
        this.globals.mother2 = window.mother2;
    }
    var urlCat = '/?';
    var urlCats = [];
    if (this.globals.mother2.indexOf('girlsplay.com') != -1)
        urlCats = ['/girlsplay-games.html?', '/girlsplay-games_2.html?', '/girlsplay-games_3.html?', '/girlsplay-games_4.html?'];
    else if (this.globals.mother2.indexOf('girlg.com') != -1)
        urlCats = ['/exclusive-games.html?', '/exclusive-games_2.html?', '/exclusive-games_3.html?', '/exclusive-games_4.html?'];
    else if (this.globals.mother2.indexOf('pop.games') != -1)
        urlCats = ['/?', '/?p=2&', '/?p=3&', '/?p=4&'];
    if (urlCats.length > 0)
        urlCat = urlCats[Math.floor(Math.random() * urlCats.length)];
    var target = this.globals.mother2 + urlCat + 'utm_source=' + this.globals.getHost() + '&utm_medium=html5_game&utm_campaign=' + this.globals.gameID + '&utm_content=' + this.currentLabel;
    window.open(target, '_new');
}

function getHostURL() {
    var hostURL = (window.location != window.parent.location) ? document.referrer : document.location;
    hostURL += '';
    var hostArray = hostURL.split('/');
    return hostArray[2];
}

function includeScriptURL(_src, fOnload) {
    var oScript = document.createElement("script");
    oScript.async = false;
    oScript.src = _src;
    if (fOnload) {
        oScript.onload = fOnload;
    }
    document.head.appendChild(oScript);
}

function inArrayURI(urlArray) {
    var urlFound = false;
    if (window.location != window.parent.location)
        for (var ck in urlArray)
            if (document.referrer.indexOf(urlArray[ck]) > -1)
                urlFound = true;
    return urlFound;
}

function setCookie(name, value, expires, path, domain, secure) {
    var today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + "=" + escape(value) +
        ((expires) ? ";expires=" + expires_date.toGMTString() : "") +
        ((path) ? ";path=" + path : "") +
        ((domain) ? ";domain=" + domain : "") +
        ((secure) ? ";secure" : "");
}

function getCookie(name) {
    var c = document.cookie;
    var start = c.indexOf(name + "=");
    var len = start + name.length + 1;
    if (!start && name != c.substring(0, name.length)) return null;
    if (start == -1) return null;
    var end = c.indexOf(";", len);
    if (end == -1) end = c.length;
    return unescape(c.substring(len, end));
}