adsCfg.documentUrl = (window.location != window.parent.location) ? document.referrer : document.location;

var afgCfg = {
    gameDivId: 'game-container',
    showPreroll: adsCfg.prerollActive,
    hasMidroll: adsCfg.midrollActive,
    removePrerollCallback: "removePrerollAd",
    removeMidrollCallback: "removeMidrollAd", //removeAdHTML5
    customParams: "pid=" + adsCfg.pid + "&gid=" + adsCfg.gid + "&adxt=" + adsCfg.adxt + (typeof dfpCustomVars != "undefined" && dfpCustomVars ? dfpCustomVars : ''),
    adTagUrl: "//pubads.g.doubleclick.net/gampad/ads?sz=800x500|300x250&iu=/4244160/network_preroll&impl=s&gdfp_req=1&env=vp&output=xml_vast3&unviewed_position_start=1&hl=" + (navigator.language || navigator.userLanguage) + "&url=" + encodeURIComponent(adsCfg.documentUrl) + "&description_url=" + encodeURIComponent(adsCfg.documentUrl) + "&correlator=" + Math.floor(Math.random() * 10000000) + (adsCfg.nonPersonalizedAds ? '&npa=1' : ''),
    adTagUrlMidroll: "//pubads.g.doubleclick.net/gampad/ads?sz=800x500|300x250&iu=/4244160/network_midroll&impl=s&gdfp_req=1&env=vp&output=xml_vast3&unviewed_position_start=1&hl=" + (navigator.language || navigator.userLanguage) + "&url=" + encodeURIComponent(adsCfg.documentUrl) + "&description_url=" + encodeURIComponent(adsCfg.documentUrl) + "&correlator=" + Math.floor(Math.random() * 10000000) + (adsCfg.nonPersonalizedAds ? '&npa=1' : ''),
    splash: {
        thumb: '/html5/games-thumb/sources/' + gameSlug + '.jpg',
        gameName: gameName,
        thumbRatio: 1,
        theme: 'round'
    } //girls / boys / round	
};

//______ads calls and remove
var midroll_is_active = false;
var midroll_was_shown_before_gameover = false;
var adCappingTime = adsCfg.capping; //seconds
var currentTimeCapping = 0;
if ('firstImpressionCapping' in adsCfg) currentTimeCapping = getUnixSeconds();

function removePrerollAd() {
    console.log('remove preroll');
    if (adsCfg.prerollActive == true) //is preroll && run first time
    {
        initGame();
        adsCfg.prerollActive = false;
    }
}

function removeMidrollAd() {
    console.log('remove midroll');
    if (midroll_is_active) {
        exportRoot.onBannerClose();
        midroll_is_active = false;
        recordGameEvent('close_midroll');
    }
}


function showMidrollAd(midrollLocation) {
    console.log("attempting midroll at " + midrollLocation);

    if (midrollLocation == 'interlevel' && premiumGame == 0) recordGameEvent('mid_game');
    if (midrollLocation == 'mainmenu' && premiumGame == 0) recordGameEvent('main_menu');

    //deal breakers: location not valid OR midroll is already active OR capping not met
    if (adsCfg.midrollLocation.indexOf(midrollLocation) < 0 || midroll_is_active == true || (getUnixSeconds() - currentTimeCapping < adCappingTime && midrollLocation != 'unlock')) {
        //check to show at gameover regardless of capping, if interlevel was not shown because of first impression capping
        if (!('firstImpressionCapping' in adsCfg && adsCfg.firstImpressionCapping == true && midrollLocation == 'gameover' && midroll_was_shown_before_gameover == false)) {
            //reset for the next gameover if it ever comes again
            midroll_was_shown_before_gameover = false;
            return;
        }
    }

    if (adsCfg.midrollActive == false) return;

    if (midrollLocation != 'unlock') {
        recordGameEvent('show_midroll');
        currentTimeCapping = getUnixSeconds();
    } else
        recordGameEvent('show_midroll_reward');

    //if(endlessGame && midrollLocation=='gameover') recordGameEvent('endless_game_next_level');

    if (midrollLocation == 'interlevel') midroll_was_shown_before_gameover = true;
    else if (midrollLocation == 'gameover') midroll_was_shown_before_gameover = false;

    midroll_is_active = true;
    exportRoot.onBannerOpen();

    if (typeof callExternalAfgPlayer == 'function')
        callExternalAfgPlayer(midrollLocation);
    else
        wthPlayer.showMidrollSplash();
}


function adEventCallback(ev, type) {
    //console.debug( "Ad event" + ( type ? '[' + type + ']' : '' ) + ": ", ev );
}