function getHost() {
    var t = window.location != window.parent.location ? document.referrer : document.location;
    t += "";
    var e = t.split("/");
    return getHostVar = e[2], e[2]
}

function goToPlaypod() {
    if (window.blk) {
        if (window.blk.indexOf(globals.blkVar) >= 0) return;
        if (window.blk.indexOf("all") >= 0) return
    }
    var t = content,
        e = globals.gameID,
        i = mother + "?utm_source=" + getHostVar + "&utm_medium=html5_game&utm_campaign=" + e + "&utm_content=" + t;
    window.open(i, "_new")
}

function goToThumbnail() {
    if (window.blk) {
        if (window.blk.indexOf(globals.blkVar) >= 0) return;
        if (window.blk.indexOf("all") >= 0) return
    }
    var t = content + "_thumbnail",
        e = globals.gameID,
        i = mother + "?utm_source=" + getHostVar + "&utm_medium=html5_game&utm_campaign=" + e + "&utm_content=" + t;
    window.open(i, "_new")
}

function goToWitchHut() {
    window.open("http://www.witchhut.com/", "_new")
}

function recordEvent(t) {
    try {
        window.recordGameEvent(t)
    } catch (t) {}
}

function showMidroll() {
    try {
        window.showMidrollAd("interlevel")
    } catch (t) {
        console.log("MIDROLL ERROR:", t)
    }
}

function isObjInArray(t, e) {
    "use strict";
    for (var i = 0; i <= e.length; i++)
        if (e[i] == t) return !0;
    return !1
}

function updateCounter() {
    timerPreload++
}

function showTextCredits(t, e, i, s, a) {
    var n = this.game.add.text(s, a, t, {
        fill: e
    });
    return n.font = "CooperBlackStd", n.fontSize = i, n.fontWeight = "normal", n
}

function toggleCreditsTween() {
    this.game.add.tween(creditsGroup).from({
        y: -200
    }, 800, Phaser.Easing.Bounce.Out, !0), clickOnStage()
}

function clickOnStage() {
    inputBG.inputEnabled = !0, inputBG.input.priorityID = 0, inputBG.events.onInputDown.addOnce(showCredits, this)
}

function goToMap(t) {
    this.game.state.start(MAP, !0, !1, dataInMenu, void 0, t)
}

function closeLevelPanel() {
    return function() {
        preLevelGroup.destroy(), overlayGroup.destroy()
    }
}

function startLevel(t, e, i) {
    recordEvent("play_level"), e.isTutorial, game.state.start(GAME, !0, !1, t, e, i)
}

function showText(t, e, i, s, a, n) {
    var o = this.game.add.text(s, a, t, {
        fill: e
    });
    return o.font = "font-interfata", o.anchor.set(.5, .5), o.fontSize = i, o.fontWeight = "normal", o.stroke = n, o.strokeThickness = 6, o
}

function onBannerOpen() {
    if (window.midroll_is_active) {
        for (var t = 0; t < ingameSounds.length; t++) ingameSounds[t].volume = 0;
        for (var e = 0; e < themeSounds.length; e++) themeSounds[e].volume = 0;
        for (var i = 0; i < interfaceSounds.length; i++) interfaceSounds[i].volume = 0
    }
}

function onBannerClose() {
    if (!musicOFF) {
        for (var t = 0; t < ingameSounds.length; t++) ingameSounds[t].volume = 1;
        for (var e = 0; e < themeSounds.length; e++) themeSounds[e].volume = 1;
        for (var i = 0; i < interfaceSounds.length; i++) interfaceSounds[i].volume = 1
    }
}

function pauseGame() {
    if (0 == pause) {
        pause = !0, game.state.callbackContext.timer.pause(), game.state.callbackContext.clients.pause();
        for (var t = 0; t < game.state.callbackContext.clickableObjects.length; t++) game.state.callbackContext.clickableObjects[t] && game.state.callbackContext.clickableObjects[t].processor && game.state.callbackContext.clickableObjects[t].processor.pause();
        pauseScreenGroup.visible = !0, overlayGroup.visible = !0
    }
}

function resumeGame() {
    if (1 == pause) {
        pause = !1, game.state.callbackContext.timer.resume(), game.state.callbackContext.clients.resume();
        for (var t = 0; t < game.state.callbackContext.clickableObjects.length; t++) game.state.callbackContext.clickableObjects[t] && game.state.callbackContext.clickableObjects[t].processor && game.state.callbackContext.clickableObjects[t].processor.resume();
        pauseScreenGroup.visible = !1, overlayGroup.visible = !1
    }
}

function stopSounds() {
    schclack.play(), this.soundBtn && (this.soundBtn.scale.setTo(1.3), this.game.add.tween(this.soundBtn.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Bounce.Out, !0).onComplete.addOnce(stopSound, this), 1 == game.sound.mute ? (game.sound.mute = !1, this.soundBtn.setFrames("sound-button")) : (game.sound.mute = !0, this.soundBtn.setFrames("sound-off-button")))
}

function stopSound() {}

function showCredits() {
    schclack.play(), this.creditsBtn && (this.creditsBtn.scale.setTo(1.3), this.game.add.tween(this.creditsBtn.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Bounce.Out, !0)), creditsGroup.visible ? (creditsGroup.visible = !1, playButton.inputEnabled = !0, playButton.input.useHandCursor = !0) : (creditsGroup.visible = !0, playButton.inputEnabled = !1, playButton.input.useHandCursor = !1, toggleCreditsTween())
}

function backToMainMenu() {
    schclack.play(), this.game.state.start(MENU, !0, !1, this.data)
}

function getPlateIngredientTexture(t, e) {
    var i = "";
    return e && (i = e), "i_14" == t && (i = "pickle_rotated"), "i_12" == t && (i = "ketchup"), "i_13" == t && (i = "mustard"), "i_11" == t && (i = "chifla"), i
}
var CookingGame = CookingGame || {},
    mother, getHostVar, transition;
const BOOT = "Boot",
    PRELOADER = "Preloader",
    MENU = "Menu",
    MAP = "Map",
    GAME = "Game",
    TUTORIAL = "Tutorial",
    GAME_WIDTH = 800,
    GAME_HEIGHT = 600,
    GAME_ATLAS = "gameAtlas",
    UI_ATLAS = "uiAtlas",
    ATLAS = "atlas";
var _this = this,
    globals = {};
globals.gameID = "burger-truck-frenzy-usa", globals.blkVar = "preloader";
var content = "preloader";
CookingGame.Boot = function() {
    "use strict";
    Phaser.State.call(this)
}, CookingGame.prototype = Object.create(Phaser.State.prototype), CookingGame.prototype.constructor = CookingGame.Boot, CookingGame.Boot.prototype.init = function(t) {
    "use strict";
    this.data = t, this.game.stage.backgroundColor = "#336699", this.game.stage.disableVisibilityChange = !0, this.game.renderer.renderSession.roundPixels = !0, this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.scale.pageAlignHorizontally = !0, this.scale.pageAlignVertically = !0, game.input.mspointer.stop()
}, CookingGame.Boot.prototype.preload = function() {
    "use strict";
    getHost(), this.load.image("preloaderBar", "assets/images/_preloaderBar.png"), this.load.image("_preloader", "assets/images/_preloader.jpg"), this.load.text("data", this.data)
}, CookingGame.Boot.prototype.create = function() {
    "use strict";
    var t, e;
    e = this.game.cache.getText("data"), t = JSON.parse(e), mother = window.brandingURL, this.game.state.start(PRELOADER, !0, !1, t)
};
var showAds, sounds, LevelTxt, musicOFF, inGame, timerPreload, thisLevelNr, groups = [],
    imgUrl_0, imgW_0, imgH_0, imgLinkURL_0, imgScaleX_0, imgScaleY_0, imgUrl_1, imgW_1, imgH_1, imgLinkURL_1, imgScaleX_1, imgScaleY_1;
CookingGame.Preloader = function() {
    "use strict";
    Phaser.State.call(this)
}, CookingGame.Preloader.prototype.init = function(t) {
    "use strict";
    this.data = t, this.ready = !1
}, CookingGame.Preloader.prototype.preload = function() {
    "use strict";
    content = "preloader";
    var t, e, i;
    timerPreload = 0, t = this.data.assets, game = this.game;
    for (e in t)
        if (t.hasOwnProperty(e)) switch (i = t[e], i.type) {
            case "image":
                this.load.image(e, i.source);
                break;
            case "spritesheet":
                this.load.spritesheet(e, i.source, i.frame_width, i.frame_height, i.frames, i.margin, i.spacing);
                break;
            case "tilemap":
                this.load.tilemap(e, i.source, null, Phaser.Tilemap.TILED_JSON);
                break;
            case "atlas":
                this.game.load.atlas(e, i.source, i.sourceJson);
                break;
            case "audio":
                this.load.audio(e, i.source)
        }
    if (this.data.groups.forEach(function(t) {
            groups[t] = this.game.add.group()
        }, this), this.game.sound.boot(), this.game.add.image(0, 0, "_preloader"), recordEvent("preload_start"), this.preloadBar = this.add.sprite(this.game.world.centerX - 200, 450, "preloaderBar"), this.load.setPreloadSprite(this.preloadBar), this.inputBG = this.game.add.sprite(0, 0, ""), this.inputBG.alpha = 0, this.inputBG.width = 800, this.inputBG.height = 600, this.inputBG.inputEnabled = !0, this.inputBG.input.priorityID = 0, this.inputBG.input.useHandCursor = !0, this.inputBG.events.onInputDown.add(goToWitchHut, this), this.game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this), "function" == typeof window.getThumbnailData) {
        var s = window.getThumbnailData(content);
        if (null == s) return;
        imgUrl_0 = s.imageURL, imgW_0 = s.width, imgH_0 = s.height, imgLinkURL_0 = s.linkURL, imgScaleX_0 = 1, imgScaleY_0 = 1, null != s.targetWidth && (imgScaleX_0 = s.targetWidth / s.width), null != s.targetHeight && (imgScaleY_0 = s.targetHeight / s.height);
        var a = window.getThumbnailData(content);
        if (null == a) return;
        imgUrl_1 = a.imageURL, imgW_1 = a.width, imgH_1 = a.height, imgLinkURL_1 = a.linkURL, imgScaleX_1 = 1, imgScaleY_1 = 1, null != a.targetWidth && (imgScaleX_1 = a.targetWidth / a.width), null != s.targetHeight && (imgScaleY_1 = a.targetHeight / a.height)
    } else console.log("###########################"), console.log("###########################"), console.log("window.getThumbnailData is not a FUNCTION !!!!"), console.log("###########################"), console.log("###########################");
    game.load.image("thumbImg_0", imgUrl_0), game.load.image("thumbImg_1", imgUrl_1)
}, CookingGame.Preloader.prototype.create = function() {
    "use strict";
    sounds = new CookingGame.Sounds(this.game);
    var t = game.add.sprite(95 - imgW_0 / 2, 500 - imgH_0 / 2, "thumbImg_0"),
        e = game.add.sprite(705 - imgW_1 / 2, 500 - imgH_1 / 2, "thumbImg_1");
    t.scale.setTo(imgScaleX_0, imgScaleY_0), e.scale.setTo(imgScaleX_1, imgScaleY_1), t.inputEnabled = !0, t.input.useHandCursor = !0, e.inputEnabled = !0, e.input.useHandCursor = !0, t.events.onInputDown.add(goToThumbnail, this), e.events.onInputDown.add(goToThumbnail, this), this.game.time.events.duration < 3e3 ? this.game.time.events.add(3e3 - this.game.time.events.duration, function() {
        recordEvent("preload_end"), this.game.state.start(MENU, !0, !1, this.data)
    }, this) : (recordEvent("preload_end"), this.game.state.start(MENU, !0, !1, this.data))
}, CookingGame.Preloader.prototype.update = function() {}, CookingGame.Preloader.prototype.startMainMenu = function() {
    this.game.state.start(MENU, !0, !1, this.data)
};
var creditsTxt, soundsCreditTxt, programmingTxt, artTxt, artTxt2, creditsGroup, pauseScreenGroup, inputBG, playButton, initPlayerPos, newStartGame, stars = [],
    btns, justOnce = !0,
    playerIdle, state_menu, dataInMenu, mapProgress = [],
    soundAdded, transGroup;
CookingGame.Menu = function() {
    "use strict";
    Phaser.State.call(this)
}, CookingGame.Menu.prototype.init = function(t) {
    "use strict";
    state_menu = this, this.data = t, dataInMenu = t
}, CookingGame.Menu.prototype.create = function() {
    inputBG = this.game.add.sprite(0, 0, ""), inputBG.alpha = 0, inputBG.width = 800, inputBG.height = 600, inGame = !1, content = "mainmenu", this.data.groups.forEach(function(t) {
        groups[t] = this.game.add.group()
    }, this), this.game.add.sprite(0, 0, "cover"), this.title = game.add.sprite(555, 302, ATLAS, "titlu"), this.title.anchor.set(.5, 1), this.subtitle = game.add.sprite(609.5, 277, ATLAS, "frenzy"), this.subtitle.anchor.set(.5), this.blink = game.add.sprite(150, 190, ATLAS, "clipit"), this.smile = game.add.sprite(172, 252, ATLAS, "zambet"), this.blink.visible = !1, this.subtitle.scale.setTo(0, 0), this.startBlink(), this.startSmile(), this.showSubtitle(), this.startSquish();
    btns = new CookingGame.Buttons(this.game, this.data), playButton = btns.createButton("play", 548, 410, 1, this), btns.createButton("more-games", 548, 500, 1, this), this.soundBtn = btns.createButton("sound", 756, 41, 1, this), this.creditsBtn = btns.createButton("credits", 44, 41, 1, this), creditsGroup = this.game.add.group();
    var t = game.add.graphics(0, 0);
    t.beginFill(460551, .75), t.drawRoundedRect(230, 150, 352, 318, 10), this.logoCredits = this.game.add.sprite(350, 370, "logo"), this.logoCredits.inputEnabled = !0, this.logoCredits.input.priorityID = 1, this.logoCredits.input.useHandCursor = !0, this.logoCredits.events.onInputDown.add(goToWitchHut, this), creditsTxt = showTextCredits("CREDITS", "#ffffff", 30, 333, 170), messageCreditsTxt = showTextCredits("Asre Jadid", "#ffffff", 20, 296, 210), artTxt = showTextCredits(" ", "#ffffff", 20, 255, 270), programmingTxt = showTextCredits(" ", "#ffffff", 20, 255, 304), soundsCreditTxt = showTextCredits("karimianj1@gmail.com", "#ffffff", 10, 330, 348), creditsGroup.add(t), creditsGroup.add(creditsTxt), creditsGroup.add(messageCreditsTxt), creditsGroup.add(soundsCreditTxt), creditsGroup.add(artTxt), creditsGroup.add(programmingTxt), creditsGroup.add(this.logoCredits), creditsGroup.visible = !1
}, CookingGame.Menu.prototype.update = function() {}, CookingGame.Menu.prototype.startBlink = function() {
    game.time.events.add(.6 * Phaser.Timer.SECOND, this.toggleBlink, this), game.time.events.add(.9 * Phaser.Timer.SECOND, this.toggleBlink, this), game.time.events.add(2 * Phaser.Timer.SECOND, this.toggleBlink, this), game.time.events.add(2.1 * Phaser.Timer.SECOND, this.toggleBlink, this), game.time.events.add(3.9 * Phaser.Timer.SECOND, this.toggleBlink, this), game.time.events.add(4.3 * Phaser.Timer.SECOND, this.toggleBlink, this), game.time.events.add(5.2 * Phaser.Timer.SECOND, this.toggleBlink, this), game.time.events.add(5.3 * Phaser.Timer.SECOND, this.toggleBlink, this), this.blinkCall = game.time.events.add(8.6 * Phaser.Timer.SECOND, this.startBlink, this)
}, CookingGame.Menu.prototype.toggleBlink = function() {
    1 == this.blink.visible ? this.blink.visible = !1 : this.blink.visible = !0
}, CookingGame.Menu.prototype.startSmile = function() {
    game.time.events.add(2.4 * Phaser.Timer.SECOND, this.toggleSmile, this), game.time.events.add(3 * Phaser.Timer.SECOND, this.toggleSmile, this), this.smileCall = game.time.events.add(12 * Phaser.Timer.SECOND, this.startSmile, this)
}, CookingGame.Menu.prototype.showSubtitle = function() {
    game.add.tween(this.subtitle.scale).to({
        x: 1,
        y: 1
    }, 1500, Phaser.Easing.Back.Out, !0), game.add.tween(this.subtitle).to({
        angle: 360
    }, 1500, Phaser.Easing.Bounce.Out, !0)
}, CookingGame.Menu.prototype.startSquish = function() {
    this.title.scale.setTo(1, .95), this.unsquish = game.add.tween(this.title.scale).to({
        x: 1,
        y: 1
    }, 750, Phaser.Easing.Bounce.Out, !0), this.doSquish = game.time.events.add(5 * Phaser.Timer.SECOND, this.startSquish, this)
}, CookingGame.Menu.prototype.toggleSmile = function() {
    1 == this.smile.visible ? this.smile.visible = !1 : this.smile.visible = !0
}, CookingGame.Menu.prototype.startGame = function() {
    recordEvent("play"), this.blinkCall && game.time.events.remove(this.blinkCall), this.smileCall && game.time.events.remove(this.smileCall), this.doSquish && game.time.events.remove(this.doSquish), schclack.play(), transGroup = this.game.add.group(), transition = new CookingGame.BgTransition(this, this.level_data), playButton.scale.setTo(1.2), this.game.add.tween(playButton.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Bounce.Out, !0).onComplete.add(function() {
        transition.actionIn(function() {
            goToMap(!0)
        })
    }, this), 0 == soundAdded && (soundManager = new CookingGame.Sounds(this), soundAdded = !0)
};
var localStorage, mapProgress = [],
    localStorageName = "BurgerFrenzyUSAMap",
    infoStorageName = "BurgerFrenzyUSAStuffSeen",
    preLevelGroup, overlayGroup, seenItems = [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1];
CookingGame.Map = function(t, e, i) {
    "use strict";
    Phaser.State.call(this, t, e, i)
}, CookingGame.Map.prototype.init = function(t, e, i) {
    "use strict";
    this.data = t, this.didWin = i
}, CookingGame.Map.prototype.create = function() {
    theme.volume = 1, game.stage.disableVisibilityChange = !1, mapProgress[0] = 0, this.savedData = null == localStorage.getItem(localStorageName) ? mapProgress.toString() : localStorage.getItem(localStorageName), mapProgress = this.savedData.split(","), this.savedInfo = null == localStorage.getItem(infoStorageName) ? seenItems.toString() : localStorage.getItem(infoStorageName), seenItems = this.savedInfo.split(",");
    game.add.image(0, 0, "gameMap");
    this.data.groups.forEach(function(t) {
        groups[t] = this.game.add.group()
    }, this), btns = new CookingGame.Buttons(this.game, this.data), this.soundBtn = btns.createButton("sound", 756, 41, 1, this), this.backBtn = btns.createButton("back", 44, 41, 1, this), transGroup = this.game.add.group(), this.show(), this.levelPositions = [{
        x: 96,
        y: 351
    }, {
        x: 42,
        y: 269
    }, {
        x: 46,
        y: 173
    }, {
        x: 117,
        y: 225
    }, {
        x: 111,
        y: 107
    }, {
        x: 197,
        y: 110
    }, {
        x: 193,
        y: 200
    }, {
        x: 181,
        y: 284
    }, {
        x: 183,
        y: 368
    }, {
        x: 235,
        y: 428
    }, {
        x: 292,
        y: 373
    }, {
        x: 278,
        y: 291
    }, {
        x: 277,
        y: 199
    }, {
        x: 333,
        y: 135
    }, {
        x: 412,
        y: 158
    }, {
        x: 415,
        y: 246
    }, {
        x: 383,
        y: 322
    }, {
        x: 363,
        y: 401
    }, {
        x: 388,
        y: 479
    }, {
        x: 470,
        y: 476
    }, {
        x: 464,
        y: 391
    }, {
        x: 468,
        y: 305
    }, {
        x: 529,
        y: 240
    }, {
        x: 575,
        y: 309
    }, {
        x: 570,
        y: 419
    }, {
        x: 639,
        y: 517
    }, {
        x: 649,
        y: 434
    }, {
        x: 678,
        y: 337
    }, {
        x: 709,
        y: 257
    }, {
        x: 760,
        y: 174
    }];
    var t;
    this.levels = this.data.levels, this.levelsArray = [];
    var e = 0;
    mapProgress[mapProgress.length - 1] > 0 && mapProgress.length < this.levelPositions.length && mapProgress.push("0");
    for (t in this.levels)
        if (this.levels.hasOwnProperty(t)) {
            t = this.levels[t];
            var i = game.add.sprite(this.levelPositions[e].x, this.levelPositions[e].y),
                s = !1;
            e < mapProgress.length - 1 && (s = !0);
            var a = game.add.sprite(0, 0, ATLAS, "buton-level");
            s && a.addChild(game.add.sprite(-30, -33, ATLAS, "buton-level-passed"));
            var n;
            if (e < mapProgress.length) {
                n = "#4471CC";
                var o = game.add.sprite(-36, 13, ATLAS, "suport-steluta"),
                    r = game.add.sprite(12, 13, ATLAS, "suport-steluta"),
                    h = game.add.sprite(-15, 18, ATLAS, "suport-steluta");
                if (o.scale.set(.24), r.scale.set(.24), h.scale.set(.3), 29 == e) {
                    var l = mapProgress[e];
                    o.visible = !1, r.visible = !1, h.visible = !1;
                    var d = game.add.sprite(-37, 14, ATLAS, "consola-bani");
                    d.scale.set(.5);
                    var c = {
                            font: "CooperBlackStd",
                            fill: "#ffffff",
                            fontSize: 12
                        },
                        p = this.game.add.text(0, 0, "0", c);
                    l || (l = 0), p.text = Math.ceil(l), p.position = {
                        x: d.x + d.width - 27,
                        y: 12
                    }, p.y += p.height / 2, p.x -= p.width / 2
                } else {
                    if (1 == mapProgress[e]) var m = game.add.sprite(-36, 13, ATLAS, "steluta");
                    if (2 == mapProgress[e]) var m = game.add.sprite(-36, 13, ATLAS, "steluta"),
                        g = game.add.sprite(12, 13, ATLAS, "steluta");
                    if (3 == mapProgress[e]) var m = game.add.sprite(-36, 13, ATLAS, "steluta"),
                        g = game.add.sprite(12, 13, ATLAS, "steluta"),
                        u = game.add.sprite(-15, 18, ATLAS, "steluta")
                }
                i.inputEnabled = !0, i.input.useHandCursor = !0, i.events.onInputDown.add(this.onLevelClicked, this)
            } else n = "#888888";
            var c = {
                font: "CooperBlackStd",
                fill: n,
                fontSize: 38
            };
            if (a.anchor.setTo(.5, .5), i.addChild(a), !s) {
                var y = game.add.text(0, 0, "0", c);
                y.text = e + 1, y.anchor.setTo(.5, .5), y.x += 2, y.y -= 4, i.addChild(y)
            }
            d && i.addChild(d), p && i.addChild(p), o && i.addChild(o), r && i.addChild(r), h && i.addChild(h), m && (m.scale.set(.24), i.addChild(m)), g && (g.scale.set(.24), i.addChild(g)), u && (u.scale.set(.3), i.addChild(u)), e++, i.level = t, i.levelNum = e, o = null, r = null, h = null, m = null, g = null, u = null, this.levelsArray.push(i), groups.map.add(i)
        }
    this.car = game.add.sprite(96, 351), this.car.anchor.set(.5), this.car.scale.set(-1, 1), this.car.loadTexture("car_spritesheet", 0), this.car.animations.add("idle"), this.car.animations.play("idle", 6, !0), groups.map.add(this.car), this.didWin ? (mapProgress.length > 1 && (this.car.x = this.levelPositions[mapProgress.length - 2].x, this.car.y = this.levelPositions[mapProgress.length - 2].y), this.moveCarEvent = game.time.events.add(1e3, this.moveCar, this)) : (this.car.x = this.levelPositions[mapProgress.length - 1].x, this.car.y = this.levelPositions[mapProgress.length - 1].y)
}, CookingGame.Map.prototype.moveCar = function() {
    this.movingCar = !0, this.carTween && this.carTween.stop(), 1 == mapProgress.length ? (this.car.x = this.levelPositions[0].x, this.car.y = this.levelPositions[0].y) : 0 == mapProgress[mapProgress.length - 1] ? (this.car.x = this.levelPositions[mapProgress.length - 2].x, this.car.y = this.levelPositions[mapProgress.length - 2].y) : (this.car.x = this.levelPositions[mapProgress.length - 1].x, this.car.y = this.levelPositions[mapProgress.length - 1].y);
    var t = {
            x: this.car.x,
            y: this.car.y
        },
        e = {
            x: this.levelPositions[mapProgress.length - 1].x,
            y: this.levelPositions[mapProgress.length - 1].y
        },
        i = Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y)),
        s = i / 100;
    mapProgress.length > 1 ? (this.carTween = game.add.tween(this.car).to({
        x: e.x,
        y: e.y
    }, 1e3 * s, Phaser.Easing.Sinusoidal.InOut, !0), game.time.events.add(1e3 * s, function() {
        this.onCarMoved(this.levelsArray[mapProgress.length - 1])
    }, this)) : game.time.events.add(300, function() {
        this.onCarMoved(this.levelsArray[0])
    }, this)
}, CookingGame.Map.prototype.onCarMoved = function(t) {
    this.movingCar = !1, this.onLevelClicked(t)
}, CookingGame.Map.prototype.onLevelClicked = function(t) {
    if (game.time.events.remove(this.moveCarEvent), !this.movingCar) {
        woosh1.play(), preLevelGroup && preLevelGroup.destroy(), overlayGroup && overlayGroup.destroy(), overlayGroup = this.game.add.group(), preLevelGroup = this.game.add.group();
        var e = game.add.sprite(this.game.world.centerX, this.game.world.centerY, ATLAS, "chenar");
        e.anchor.set(.5);
        var i = game.add.sprite(this.game.world.centerX, 420, ATLAS, "buton-ok"),
            s = game.add.sprite(580, 110, ATLAS, "buton-x");
        s.inputEnabled = !0, s.input.useHandCursor = !0, i.inputEnabled = !0, i.input.useHandCursor = !0, i.anchor.set(.5), s.anchor.set(.5), s.events.onInputDown.add(closeLevelPanel(), this), i.events.onInputDown.addOnce(function() {
            this.onPlayClicked(i, t.level, t.levelNum)
        }, this);
        var a = new Phaser.Graphics(this.game, 0, 0);
        a.beginFill(0, .35), a.drawRect(0, 0, 800, 600), a.endFill(), this.overlay = this.game.add.image(0, 0, a.generateTexture()), this.overlay.inputEnabled = !0;
        var n, o = game.add.sprite(353, 159, ATLAS, "goal");
        n = 1 == t.levelNum ? game.add.sprite(300, 228, ATLAS, "earn") : 30 == t.levelNum ? game.add.sprite(290, 235, ATLAS, "Cook-as-much-as-you-can!") : game.add.sprite(300, 228, ATLAS, "earn");
        var r, h = showText("Day " + t.levelNum, "#ffffff", 50, 402, 110, "#b86005");
        1 == t.levelNum ? (r = showText(t.level.goal, "#3D7305", 34, 400, 245), r.visible = !0) : 30 == t.levelNum ? (r = showText(t.level.goal, "#3D7305", 34, 400, 245), r.visible = !1) : (r = showText(t.level.goal, "#3D7305", 34, 400, 245), r.visible = !0);
        var l, d = t.level.timeLimit,
            c = Math.ceil(d % 60);
        l = c < 10 ? "0" + c : c;
        var p = showText(Math.floor(d / 60) + ":" + l, "#3D7305", 34, 362, 285);
        1 == t.levelNum ? p.visible = !1 : (t.levelNum, p.visible = !1), overlayGroup.add(this.overlay), preLevelGroup.add(e), preLevelGroup.add(i), preLevelGroup.add(h), preLevelGroup.add(o), preLevelGroup.add(n), preLevelGroup.add(r), preLevelGroup.add(p), preLevelGroup.add(s), this.game.add.tween(preLevelGroup).from({
            y: -200
        }, 400, Phaser.Easing.Exponential.Out, !0)
    }
}, CookingGame.Map.prototype.show = function() {
    transition = new CookingGame.BgTransition(this, this.level_data), transition.actionOut(this.onMapShown)
}, CookingGame.Map.prototype.onPlayClicked = function(t, e, i) {
    schclick.play(), transGroup = this.game.add.group(), transGroup.add(transition);
    var s = this.data;
    t.scale.setTo(1.2), game.add.tween(t.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Bounce.Out, !0).onComplete.add(function() {
        transition.actionIn(function() {
            startLevel(s, e, i)
        })
    }, this)
}, CookingGame.Map.prototype.startLevel = function(t) {}, CookingGame.Map.prototype.onMapShown = function() {}, CookingGame.Game = function(t, e) {
    "use strict";
    Phaser.State.call(this, t, e)
}, CookingGame.Game.prototype.init = function(t, e, i) {
    "use strict";
    this.data = t, this.levelData = e, this.levelNum = i
}, CookingGame.Game.prototype.create = function() {
    "use strict";
    theme.volume = .4;
    var t = this.game.add.image(0, 0, "gameBackground");
    this.recipes = [], this.stations = [], this.ingredients = [], this.proccesingObjects = [], this.clickableObjects = [], this.win = !1, this.clickActions = [], this.data.groups.forEach(function(t) {
        groups[t] = this.game.add.group()
    }, this), this.timer = new CookingGame.Timer(this), this.timer.ticked.add(this.onTick, this), btns = new CookingGame.Buttons(this.game, this.data), this.show(), groups.backgrounds.add(this.game.add.sprite(636, 375, ATLAS, "blat-de-taiat")), this.shadow = groups.player.add(this.game.add.sprite(0, 0, ATLAS, "umbra-ketchup")), this.shadow.scale.setTo(1.3, 1.3), this.shadow.alpha = 0, groups.tools.add(this.game.add.sprite(87, 487, ATLAS, "aragaz")), groups.tools.add(this.game.add.sprite(316, 578, ATLAS, "umbra-ketchup")), groups.tools.add(this.game.add.sprite(366, 569, ATLAS, "umbra-ketchup"));
    var e = !1,
        i = !1;
    this.levelData.items.forEach(function(t) {
        "i_09" != t && "i_10" != t || (e = !0), "i_15" == t && (i = !0)
    }), e && groups.backgrounds.add(this.game.add.sprite(242, 249, ATLAS, "lada-frigorifica")), i && groups.backgrounds.add(this.game.add.sprite(415, 163, ATLAS, "dozator")), this.player = new CookingGame.Player(this, this.data.player.position, this.data.player.properties, this.data), this.items = this.data.items, this.items.forEach(function(t) {
        if ("r" == t.id.charAt(0) && isObjInArray(t.id, this.levelData.burgers) && this.recipes.push(t), "i" == t.id.charAt(0) && isObjInArray(t.id, this.levelData.items) && this.ingredients.push(t), "s" == t.id.charAt(0) && isObjInArray(t.id, this.levelData.stations) && this.stations.push(t), t.hasOwnProperty("x") && this.isInLevel(t.id)) {
            var e = {
                    x: t.x,
                    y: t.y
                },
                i = new CookingGame.ClickableObject(this, e, t, this.data);
            i.events.onInputDown.add(this.onItemClicked, this), this.clickableObjects.push(i), "s_05" == t.id && (this.plate = i)
        }
    }, this);
    for (var s = 0; s < 6; s++) {
        var a = {
                x: 0,
                y: -100
            },
            n = new CookingGame.ProccesingObject(this, a, null, this.data);
        this.proccesingObjects.push(n), n.visible = !1, n.signal.add(this.onProccesingObjectSignaled, this)
    }
    var o = game.add.graphics(0, 0);
    o.beginFill(16777215), o.moveTo(80, 0), o.lineTo(80, 492), o.lineTo(136, 460), o.lineTo(168, 492), o.lineTo(652, 492), o.lineTo(667, 434), o.lineTo(800, 434), o.lineTo(800, 0), o.lineTo(100, 0), o.endFill(), groups.player.mask = o;
    var r = game.add.graphics(0, 0);
    r.beginFill(16777215), r.moveTo(490, 0), r.lineTo(490, 253), r.lineTo(521, 262), r.lineTo(800, 345), r.lineTo(800, 0), r.lineTo(490, 0), r.endFill(), groups.clients.mask = r, this.clients = new CookingGame.Clients(this, this.data.clients, this.data, this.levelData), this.clients.clientsSignal.add(this.onClientsSignaled, this), this.clients.isDozator = i, this.recipeShown = !1, this.helpingHand = game.add.sprite(0, 0), this.tap_0 = game.add.sprite(0, 0, ATLAS, "tap1"), this.tap_1 = game.add.sprite(0, 0, ATLAS, "tap2"), this.clickSprite = game.add.sprite(0, 0, ATLAS, "click-mic"), this.clickSprite.anchor.set(.5), this.clickSprite.scale.set(2), this.clickSprite.x = 80, this.clickSprite.y = 134, this.helpingHand.addChild(this.tap_0), this.helpingHand.addChild(this.tap_1), this.helpingHand.addChild(this.clickSprite), this.helpingHand.scale.set(.4), this.tap_0.visible = !1, this.tap_1.visible = !1, this.clickSprite.visible = !1, this.gameInterface = new CookingGame.GameInterface(this, this.data), this.gameInterface.starCashRequirement = Math.ceil(1.5 * this.levelData.goal), this.hinter = new CookingGame.Hinter(this, this.data), this.levelData.isTutorial ? this.satisfactionCounter = 0 : this.hinter.putOnSleep(), t.inputEnabled = !0, t.events.onInputDown.add(this.onClick, this), this.player.playerSignal.add(this.onMoveComplete, this), this.pauseBG = game.add.sprite(715, 0, ATLAS, "consola-ingrediente-colt"), groups.interface.add(this.pauseBG), this.pauseBtn = btns.createButton("pause-green", 756, 41, 1, this), this.gameInterface.tweenableConsole.addChild(this.pauseBG), this.gameInterface.tweenableConsole.addChild(this.pauseBtn), this.gameInterface.addStarOnTop(), pauseScreenGroup && pauseScreenGroup.destroy(), overlayGroup && overlayGroup.destroy(), overlayGroup = this.game.add.group(), pauseScreenGroup = this.game.add.group();
    var h = game.add.sprite(game.world.centerX, game.world.centerY, ATLAS, "paused-game");
    h.anchor.set(.5);
    var l = game.add.sprite(game.world.centerX - 98, 316, ATLAS, "go-to-map-button"),
        d = game.add.sprite(game.world.centerX, 316, ATLAS, "resume-button");
    this.soundBtn = btns.createButton("sound", game.world.centerX + 98, 316, 1, this), l.inputEnabled = !0, l.input.useHandCursor = !0, d.inputEnabled = !0, d.input.useHandCursor = !0, this.soundBtn.inputEnabled = !0, this.soundBtn.input.useHandCursor = !0, l.anchor.set(.5), d.anchor.set(.5), this.soundBtn.anchor.set(.5), d.events.onInputDown.add(function() {
        this.onBtnPressedDuringPause(d, "resume")
    }, this), this.soundBtn.events.onInputDown.add(function() {
        this.onBtnPressedDuringPause(this.soundBtn, "sound")
    }, this), l.events.onInputDown.add(function() {
        this.onBtnPressedDuringPause(l, "exit")
    }, this);
    var c = new Phaser.Graphics(this.game, 0, 0);
    c.beginFill(0, .35), c.drawRect(0, 0, 800, 600), c.endFill(), this.overlay = this.game.add.image(0, 0, c.generateTexture()), this.overlay.inputEnabled = !0, overlayGroup.add(this.overlay), pauseScreenGroup.add(h), pauseScreenGroup.add(l), pauseScreenGroup.add(d), pauseScreenGroup.add(this.soundBtn), pauseScreenGroup.visible = !1, overlayGroup.visible = !1, this.checkForNewItems(), this.wrongBubble = new CookingGame.WrongIngredientsBubble(this, {
        x: 420,
        y: 410
    }, null, this.data), this.wrongBubble.visible = !1, this.wrongBubble.events.onInputDown.add(function() {
        this.onWrongIgredientsThrow()
    }, this)
}, CookingGame.Game.prototype.onWrongIgredientsThrow = function() {
    this.tryToAddToPlate(null, null), this.hinter.onSignal("move")
}, CookingGame.Game.prototype.onBtnPressedDuringPause = function(t, e) {
    if ("sound" == e) return void stopSounds();
    schclick.play(), t.scale.setTo(1.2);
    var i = game.add.tween(t.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Bounce.Out, !0);
    "resume" == e && resumeGame(), "exit" == e && (resumeGame(), transGroup = this.game.add.group(), transGroup.add(transition), this.clients.reset(), i.onComplete.add(function() {
        transition.actionIn(function() {
            goToMap(this.win)
        })
    }, this))
}, CookingGame.Game.prototype.show = function() {
    transGroup.destroy(), transGroup = game.add.group(), transGroup.add(transition), transition = new CookingGame.BgTransition(this, this.data), transition.actionOut(this.onGameShown, this)
}, CookingGame.Game.prototype.onGameShown = function() {
    this.timer.initialize(this.levelData.timeLimit)
}, CookingGame.Game.prototype.onClick = function(t, e) {
    if (!this.isMoving) {
        if (this.game.input.activePointer.isDown) {
            var i = this.game.input.activePointer;
            this.player.moveTo(i.x, i.y)
        }
        this.itemToUse = null
    }
}, CookingGame.Game.prototype.onTick = function(t) {
    "stop" == t && (this.clients.gameOver = !0), this.clients.onTick(), this.clients.gameOver && this.clients.currentClients.length <= 0 && this.stopGame()
}, CookingGame.Game.prototype.onMoveComplete = function(t, e) {
    if (this.currentClient) {
        var i = this.player.recipe,
            s = this.currentClient.burgerRecipe;
        if (!i || !s) return void this.onMoveActionComplete();
        for (var a = !0, n = 0, o = 0, r = 0; r < i.length; r++) "i_12" != i[r].id && "i_13" != i[r].id && n++;
        for (var h = 0; h < s.length; h++) "i_12" != s[h] && "i_13" != s[h] && o++;
        var l = !1;
        if (n == o)
            for (var d = 0; d < s.length; d++) {
                for (var c = !0, p = 0; p < i.length; p++) "i_12" == s[d] && "i_13" == i[p].id || "i_13" == s[d] && "i_12" == i[p].id ? (l = !0, c = !1) : "i_12" != s[d] && "i_13" != s[d] && "i_12" != i[p] && "i_13" != i[p] ? s[d] == i[p].id && (c = !1) : c = !1;
                if (c) {
                    a = !1;
                    break
                }
            } else a = !1;
        if ("i_15" == i && "i_15" == s && (a = !0), a) {
            i.length != s.length && (l = !0), "i_15" == i && "i_15" == s && (l = !1), this.player.takeItem(null), this.clients.satisfyClient(this.currentClient, l), this.hinter.onSignal("satisfy"), this.levelData.isTutorial && this.satisfactionCounter++;
            if (this.gameInterface.tryCleanRecipe(this.currentClient.burgerRecipe)) {
                if (this.clients && this.clients.currentClients.length > 0)
                    for (var m = 999999, g = null, u = null, y = 0; y < this.clients.currentClients.length; y++) {
                        var v = this.clients.currentClients[y];
                        !v.leaving && v.request && v.request.getBarPercent() < m && v.burgerRecipe && v.burgerRecipe.length > 1 && (m = this.clients.currentClients[y].request.getBarPercent(), g = v.burgerRecipe, u = v.burgerImg)
                    }
                g && (this.activeClient = this.clients.activateClient(v), this.gameInterface.showRecipe(g, u))
            }
        } else this.clients.wrongOrderToClient(this.currentClient), this.hinter.makeHandVisible()
    }
    if (!this.itemToUse || !this.itemToUse.properties) return void this.onMoveActionComplete();
    if (this.player.currentItem && "r" == this.player.currentItem.id.charAt(0));
    else {
        if ("i" == this.itemToUse.properties.id.charAt(0)) {
            var f = this.itemToUse.properties.id.substr(this.itemToUse.properties.id.indexOf("_") + 1);
            if (12 == f || 13 == f) this.player.recipe && this.player.recipe.length > 0 ? this.player.addItem(this.itemToUse.properties) : this.tryToAddToPlate(this.data.items, this.itemToUse.properties), this.itemToUse.doInteractAnimation();
            else if (f < 15 && !this.player.recipe) {
                if (12 == f || 13 == f) return void this.onMoveActionComplete();
                this.itemToUse.doInteractAnimation(), this.player.takeItem(this.itemToUse.properties)
            } else 1 == this.itemToUse.processing && (this.itemToUse.processing = !1)
        }
        if ("s" == this.itemToUse.properties.id.charAt(0))
            if (this.itemToUse.properties.id.substr(this.itemToUse.properties.id.indexOf("0") + 1) < 5 || "s_06" == this.itemToUse.properties.id)
                if (1 == this.itemToUse.processing) {
                    if (this.itemToUse.burnt);
                    else if (1 == this.itemToUse.processed && !this.player.recipe) {
                        if (this.player.currentItem && "s_06" != this.itemToUse.properties.id) var C = this.player.currentItem;
                        this.player.takeItem(this.itemToUse.processor.item), "i_15" == this.player.currentItem.id && (this.player.recipe = "i_15"), this.itemToUse.processor.reset(), this.proccesingObjects.push(this.itemToUse.processor), this.itemToUse.processor = null, this.itemToUse.processed = !1, this.itemToUse.processing = !1, this.itemToUse.burnt = !1, "s_03" == this.itemToUse.properties.id || this.itemToUse.stopAnimation(), C && this.tryToProcessItem(this.data.items, C)
                    }
                } else this.tryToProcessItem(this.data.items, this.player.currentItem) && "s_06" != this.itemToUse.properties.id && this.player.takeItem(null);
        else 5 == this.itemToUse.properties.id.substr(this.itemToUse.properties.id.indexOf("0") + 1) ? (!this.player.currentItem || this.player.currentItem && "i_15" != this.player.currentItem.id) && (this.player.recipe && "i_15" != this.player.recipe ? this.player.takeItem(this.tryToAddToPlate(this.data.items, this.player.recipe)) : this.player.takeItem(this.tryToAddToPlate(this.data.items, this.player.currentItem))) : 7 == this.itemToUse.properties.id.substr(this.itemToUse.properties.id.indexOf("0") + 1) && ((this.player.recipe || this.player.currentItem) && this.itemToUse.doInteractAnimation(), this.player.takeItem(null))
    }
    this.hinter.onSignal("move"), this.onMoveActionComplete()
}, CookingGame.Game.prototype.tryToProcessItem = function(t, e) {
    var i = !1;
    return t.forEach(function(t) {
        if ("i" == t.id.charAt(0) && t.hasOwnProperty("recipe")) {
            if (e && "i_06" == e.id && "s_01" == this.itemToUse.properties.id) return this.itemToUse.explode(), this.player.takeItem(null), !1;
            var s = t.recipe;
            (e && e.id == s[0] && this.itemToUse.properties.id == s[1] || this.itemToUse.properties.id == s[0]) && (i = !0, this.itemToUse.processing = !0, this.itemToUse.processor = this.proccesingObjects.pop(), this.itemToUse.processor.start(t, this.itemToUse), this.itemToUse.animate())
        }
    }, this), i
}, CookingGame.Game.prototype.tryToAddToPlate = function(t, e) {
    var i = null;
    if (!e) return this.itemToUse ? (i = this.itemToUse.addItemToPlate(e), this.wrongBubble.visible = !1, i) : null;
    if ("i_01" == e.id) return e;
    if ("i_03" == e.id) return e;
    if ("i_04" == e.id) return e;
    if ("i_05" == e.id) return e;
    if ("i_07" == e.id) return e;
    if ("i_08" == e.id) return e;
    if ("i_09" == e.id) return e;
    if ("i_10" == e.id) return e;
    if ("i_14" == e.id) return e;
    if ("i_21" == e.id) return e;
    var s = this.plate.addItemToPlate(e);
    this.gameInterface.checkRecipe(this.plate.plateContents);
    var a = this.hinter.checkIfPlateValidWithAnyClients(this.plate.plateContents);
    return this.wrongBubble.visible = !a, s ? i : e
}, CookingGame.Game.prototype.onItemClicked = function(t, e) {
    if (schclack.play(), game.input.activePointer.isDown) {
        var i = (this.game.input.activePointer, t.x),
            s = t.y;
        "s_03" == t.properties.id && (i = 520, s = 440);
        var a = {
            item: t,
            xPos: i,
            yPos: s,
            client: null
        };
        t.id && this.clickActions[this.clickActions.length - 1] && !this.clickActions[this.clickActions.length - 1].item.id && this.clickActions.pop(), this.clickActions.push(a), this.tryMovePlayerToNextAction()
    }
}, CookingGame.Game.prototype.tryMovePlayerToNextAction = function() {
    if (!this.isMoving) {
        this.isMoving = !0;
        var t = this.clickActions[0];
        t && (this.itemToUse = t.item, this.currentClient = t.client, this.player.moveTo(t.xPos, t.yPos))
    }
}, CookingGame.Game.prototype.onMoveActionComplete = function() {
    this.isMoving = !1, this.clickActions.length > 0 && this.clickActions.splice(0, 1), this.clickActions.length > 0 && this.tryMovePlayerToNextAction()
}, CookingGame.Game.prototype.onProccesingObjectSignaled = function(t, e) {
    "disappeared" == e && (t.station.processed = !1, t.station.processing = !1, t.station.burnt = !1, t.station.processor = null, t.station.stopAnimation(), t.reset(), this.proccesingObjects.push(t)), this.hinter.onSignal("process")
}, CookingGame.Game.prototype.onClientRequestObjectSignaled = function(t, e) {
    "showRecipe" == e && (this.activeClient = this.clients.activateClient(t.client), this.gameInterface.showRecipe(t.client.burgerRecipe, t.client.burgerImg), this.stopShowingHand()), "disappeared" == e && t.reset()
}, CookingGame.Game.prototype.onClientsSignaled = function(t, e) {
    if ("move" == e) {
        var i = t.x,
            s = t.y;
        765 == i && (s = t.y + 100), 692 == i && (s = t.y + 75), 620 == i && (s = t.y + 50), 544 == i && (s = t.y + 25), this.activeClient = this.clients.activateClient(t), this.gameInterface.showRecipe(t.burgerRecipe, t.burgerImg), this.stopShowingHand();
        var a = {
            item: null,
            xPos: i,
            yPos: s,
            client: t
        };
        this.clickActions.push(a), this.tryMovePlayerToNextAction()
    }
    if ("arrived" == e) {
        var n = {
            x: 0,
            y: 0
        };
        null == this.gameInterface.oldRecipe && (this.activeClient = this.clients.activateClient(t), this.gameInterface.showRecipe(t.burgerRecipe, t.burgerImg));
        var o = new CookingGame.ClientRequest(this, n, null, this.data);
        o.visible = !1, o.signal.add(this.onClientRequestObjectSignaled, this), t.request = o, t.request.start(this.clients, t), this.recipeShow || this.showingHelpingHand || (this.showingHelpingHand = game.time.events.add(6 * Phaser.Timer.SECOND, this.showClickHand, this))
    }
    if ("thirsty" == e) {
        var n = {
                x: 0,
                y: 0
            },
            o = new CookingGame.ClientRequest(this, n, null, this.data);
        o.visible = !1, o.signal.add(this.onClientRequestObjectSignaled, this), t.request = o, t.request.start(this.clients, t, !0), this.recipeShow || this.showingHelpingHand || (this.showingHelpingHand = game.time.events.add(6 * Phaser.Timer.SECOND, this.showClickHand, this))
    }
    if ("cash" == e) {
        var r = t.cash,
            h = t.pos,
            l = {
                x: 0,
                y: 0
            };
        765 == h.x && (l.x = 715, l.y = 329), 692 == h.x && (l.x = 660, l.y = 311), 620 == h.x && (l.x = 603, l.y = 294), 544 == h.x && (l.x = 551, l.y = 278), this.gameInterface.addCash(r, l)
    }
    if ("disappointed" == e && (this.gameInterface.breakStar(), 30 == this.levelNum && (this.clients.gameOver = !0, this.stopGame())), "left" == e && this.levelData.isTutorial && 2 == this.satisfactionCounter && (this.clients.gameOver = !0, this.stopGame()), "remaining" == e && (console.log("REMAINING!!", this.activeClient), this.activeClient || (this.activeClient = this.clients.activateClient(t), this.gameInterface.showRecipe(t.burgerRecipe, t.burgerImg), this.stopShowingHand()), this.plate.plateContents)) {
        var d = this.hinter.checkIfPlateValidWithAnyClients(this.plate.plateContents);
        this.wrongBubble.visible = !d
    }
}, CookingGame.Game.prototype.showClickHand = function() {
    this.stopHand(), this.clients.currentClients[0] && this.clients.currentClients[0].request && this.player && (this.showSequence({
        x: this.player.x,
        y: this.player.y - 130
    }, {
        x: this.clients.currentClients[0].x + this.clients.currentClients[0].request.x + this.clients.currentClients[0].request.width / 2,
        y: this.clients.currentClients[0].y + this.clients.currentClients[0].request.y + this.clients.currentClients[0].request.height / 2
    }, !0), this.tap_0.visible = !0)
}, CookingGame.Game.prototype.stopShowingHand = function() {
    this.recipeShown = !0, game.time.events.remove(this.showingHelpingHand), this.stopHand()
}, CookingGame.Game.prototype.showSequence = function(t, e, i) {
    this.helpingHand.visible = !1
}, CookingGame.Game.prototype.showClick = function() {
    this.t6 = game.time.events.add(.3 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t7 = game.time.events.add(.5 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t8 = game.time.events.add(.8 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t9 = game.time.events.add(1 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t10 = game.add.tween(this.helpingHand).to({
        alpha: 0
    }, 300, "Sine.easeIn", !0, 1e3)
}, CookingGame.Game.prototype.toggleHelpingHand = function() {
    0 == this.tap_0.visible ? (this.tap_0.visible = !0, this.tap_1.visible = !1, this.clickSprite.scale.set(2)) : (this.tap_0.visible = !1, this.tap_1.visible = !0, this.clickSprite.scale.set(1.8))
}, CookingGame.Game.prototype.update = function() {
    this.shadow.x = this.player.x - 42, this.shadow.y = this.player.y + .65 * this.player.height
}, CookingGame.Game.prototype.stopGame = function() {
    preLevelGroup && preLevelGroup.destroy(), overlayGroup && overlayGroup.destroy(), overlayGroup = this.game.add.group(), preLevelGroup = this.game.add.group(), this.timer.reset(), this.clients.shouldStop = !0;
    var t = game.add.sprite(this.game.world.centerX, this.game.world.centerY, ATLAS, "chenar");
    t.anchor.set(.5);
    var e = game.add.sprite(this.game.world.centerX, 420, ATLAS, "buton-ok"),
        i = game.add.sprite(580, 110, ATLAS, "buton-x");
    this.win = !1;
    var s = this.gameInterface.getCoins();
    s >= this.levelData.goal ? this.win = !0 : this.win = !1;
    var a, n, o, r;
    if (30 == this.levelNum && (this.win = !0), this.win) {
        a = showText(s, "#3D7305", 34, 400, 324), n = game.add.sprite(253, 312, ATLAS, "score"), r = game.add.sprite(319, 79, ATLAS, "you-won"), o = game.add.sprite(503, 197, ATLAS, "chef-chenar-win");
        var h = game.add.sprite(0, 0, ATLAS, "suport-steluta"),
            l = game.add.sprite(0, 0, ATLAS, "suport-steluta"),
            d = game.add.sprite(0, 0, ATLAS, "suport-steluta");
        h.anchor.set(.5), l.anchor.set(.5), d.anchor.set(.5), h.scale.set(.88), l.scale.set(.88), d.scale.set(1), h.position.setTo(293, 233), l.position.setTo(497, 233), d.position.setTo(395, 211);
        var c = game.add.sprite(0, 0, ATLAS, "steluta");
        c.anchor.set(.5), c.scale.set(0), c.position.setTo(293, 233);
        var p = 1;
        if (this.gameInterface.starCashRequirement < s && p++, this.gameInterface.starBroken || p++, 30 == this.levelNum && (p = 3), 2 == p) {
            var m = game.add.sprite(0, 0, ATLAS, "steluta");
            m.anchor.set(.5), m.scale.set(0), m.position.setTo(497, 233)
        } else if (3 == p) {
            var m = game.add.sprite(0, 0, ATLAS, "steluta");
            m.anchor.set(.5), m.scale.set(0), m.position.setTo(497, 233);
            var g = game.add.sprite(0, 0, ATLAS, "steluta");
            g.anchor.set(.5), g.scale.set(0), g.position.setTo(395, 211)
        }
        game.add.tween(c.scale).to({
            x: .88,
            y: .88
        }, 300, Phaser.Easing.Back.Out, !0, 500), p > 1 && game.add.tween(m.scale).to({
            x: .88,
            y: .88
        }, 300, Phaser.Easing.Back.Out, !0, 650), p > 2 && game.add.tween(g.scale).to({
            x: 1,
            y: 1
        }, 300, Phaser.Easing.Back.Out, !0, 800)
    } else a = showText(s, "#3D7305", 34, 400, 276), n = game.add.sprite(255, 165, ATLAS, "fail"), r = game.add.sprite(316, 79, ATLAS, "you-lost"), o = game.add.sprite(153, 188, ATLAS, "chef-chenar-lose");
    i.inputEnabled = !0, i.input.useHandCursor = !0, e.inputEnabled = !0, e.input.useHandCursor = !0, e.anchor.set(.5), i.anchor.set(.5), i.events.onInputDown.addOnce(function() {
        this.onCloseClicked(i)
    }, this), e.events.onInputDown.addOnce(function() {
        this.onPlayClicked(e, this.win, this.data, this.levelData, this.levelNum)
    }, this);
    var u = new Phaser.Graphics(this.game, 0, 0);
    u.beginFill(0, .35), u.drawRect(0, 0, 800, 600), u.endFill(), this.overlay = this.game.add.image(0, 0, u.generateTexture()), this.overlay.inputEnabled = !0, overlayGroup.add(this.overlay), preLevelGroup.add(t), preLevelGroup.add(e), preLevelGroup.add(a), preLevelGroup.add(n), preLevelGroup.add(r), preLevelGroup.add(o), preLevelGroup.add(i), this.win && (preLevelGroup.add(h), preLevelGroup.add(l), preLevelGroup.add(d), preLevelGroup.add(c)), p > 1 && preLevelGroup.add(m), p > 2 && preLevelGroup.add(g), 30 == this.levelNum && mapProgress[this.levelNum - 1] < s ? (mapProgress[this.levelNum - 1] = s, localStorage.setItem(localStorageName, mapProgress.toString())) : mapProgress[this.levelNum - 1] < p && (mapProgress[this.levelNum - 1] = p, localStorage.setItem(localStorageName, mapProgress.toString())), this.game.add.tween(preLevelGroup).from({
        y: -200
    }, 400, Phaser.Easing.Exponential.Out, !0), showMidroll(), this.win ? levelWin.play() : levelLose.play()
}, CookingGame.Game.prototype.onPlayClicked = function(t, e, i, s, a) {
    transGroup.destroy(), transGroup = this.game.add.group(), transition = new CookingGame.BgTransition(this, this.data), transGroup.add(transition);
    this.data;
    t.scale.setTo(1.2);
    var n = game.add.tween(t.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Bounce.Out, !0);
    this.win ? (this.clients.reset(), n.onComplete.add(function() {
        transition.actionIn(function() {
            goToMap(!0)
        })
    }, this)) : n.onComplete.add(function() {
        transition.actionIn(function() {
            startLevel(i, s, a)
        })
    }, this)
}, CookingGame.Game.prototype.onCloseClicked = function(t) {
    transGroup.destroy(), transGroup = this.game.add.group(), transition = new CookingGame.BgTransition(this, this.data), transGroup.add(transition);
    this.data;
    t.scale.setTo(1.2);
    var e = game.add.tween(t.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Bounce.Out, !0);
    this.clients.reset(), e.onComplete.add(function() {
        transition.actionIn(function() {
            goToMap(this.win)
        })
    }, this)
}, CookingGame.Game.prototype.isInLevel = function(t) {
    "use strict";
    var e = isObjInArray(t, this.levelData.items),
        i = isObjInArray(t, this.levelData.burgers),
        s = isObjInArray(t, this.levelData.stations);
    return e || i || s
}, CookingGame.Game.prototype.create_object = function(t) {
    "use strict";
    position = {
        x: t.x,
        y: t.y
    };
    var e;
    switch (t.name) {
        case "player":
            e = new CookingGame.Player(this, position, t.properties, this.level_data)
    }
    this.tools[t.name] = e
}, CookingGame.Game.prototype.checkForNewItems = function() {
    this.handsArr = [];
    for (var t = 0; t < this.ingredients.length; t++) {
        var e = this.ingredients[t].id;
        "i_03" == e && 0 == seenItems[2] && (seenItems[2] = 1, this.showNewHandAt({
            x: this.ingredients[t].x - 24,
            y: this.ingredients[t].y - 24
        }, !0)), "i_04" == e && 0 == seenItems[3] && (seenItems[3] = 1, this.showNewHandAt({
            x: this.ingredients[t].x - 24,
            y: this.ingredients[t].y - 24
        }, !0)), "i_06" == e && 0 == seenItems[5] && (seenItems[5] = 1, this.showNewHandAt({
            x: this.ingredients[t].x - 24,
            y: this.ingredients[t].y - 24
        }, !0)), "i_07" == e && 0 == seenItems[6] && (seenItems[6] = 1, this.showNewHandAt({
            x: this.ingredients[t].x - 24,
            y: this.ingredients[t].y - 24
        }, !0)), "i_08" == e && 0 == seenItems[7] && (seenItems[7] = 1, this.showNewHandAt({
            x: this.ingredients[t].x - 24,
            y: this.ingredients[t].y - 24
        }, !0)), "i_09" == e && 0 == seenItems[8] && (seenItems[8] = 1, this.showNewHandAt({
            x: this.ingredients[t].x - 24,
            y: this.ingredients[t].y - 24
        }, !0)), "i_10" == e && 0 == seenItems[9] && (seenItems[9] = 1, this.showNewHandAt({
            x: this.ingredients[t].x - 24,
            y: this.ingredients[t].y - 24
        }, !0))
    }
    for (var i = 0; i < this.stations.length; i++) {
        var s = this.stations[i].id;
        "s_02" == s && 0 == seenItems[15] && (seenItems[15] = 1, this.showNewHandAt({
            x: this.stations[i].x - 50,
            y: this.stations[i].y - 24
        }, !0, "overtools")), "s_04" == s && 0 == seenItems[17] && (seenItems[17] = 1, this.showNewHandAt({
            x: this.stations[i].x - 24,
            y: this.stations[i].y - 38
        }, !0, "overtools")), "s_06" == s && 0 == seenItems[19] && (seenItems[19] = 1, this.showNewHandAt({
            x: this.stations[i].x - 24,
            y: this.stations[i].y - 24
        }, !0))
    }
    localStorage.setItem(infoStorageName, seenItems.toString())
}, CookingGame.Game.prototype.showNewHandAt = function(t, e, i) {
    var s = game.add.sprite(0, 0);
    "overtools" == i ? groups.overtools.add(s) : groups.subplayer.add(s), s.helper_tap = game.add.sprite(0, 0, ATLAS, "tap1"), s.new_sprite = game.add.sprite(0, 0, ATLAS, "new-mic"), s.new_sprite.anchor.set(.5), s.new_sprite.scale.set(2), s.new_sprite.x = 80, s.new_sprite.y = 134, s.addChild(s.helper_tap), s.addChild(s.new_sprite), s.scale.set(.4), s.helper_tap.visible = !1, s.new_sprite.visible = !1, this.destinationPoint = t, this.repeat = e, s.alpha = 0, s.visible = !0, s.helper_tap.visible = !0, s.new_sprite.visible = !0, s.anchor.set(.5), s.x = this.destinationPoint.x + s.width / 2, s.y = this.destinationPoint.y + s.height / 2;
    var a = 300;
    game.add.tween(s).to({
        alpha: 1
    }, 1e3, "Sine.easeOut", !0, a);
    a += 6e3;
    game.add.tween(s).from({
        alpha: 1
    }, 500, "Sine.easeIn", !0, a);
    this.handsArr.push(s)
}, CookingGame.Game.prototype.showClick = function() {
    this.t6 = game.time.events.add(.3 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t7 = game.time.events.add(.5 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t8 = game.time.events.add(.8 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t9 = game.time.events.add(1 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t10 = game.add.tween(this.helpingHand).to({
        alpha: 0
    }, 300, "Sine.easeIn", !0, 1e3)
}, CookingGame.Game.prototype.toggleHelpingHand = function() {
    0 == this.tap_0.visible ? (this.tap_0.visible = !0, this.tap_1.visible = !1, this.clickSprite.scale.set(2)) : (this.tap_0.visible = !1, this.tap_1.visible = !0, this.clickSprite.scale.set(1.8))
}, CookingGame.Game.prototype.stopHand = function() {
    this.tap_0.visible = !1, this.tap_1.visible = !1, this.clickSprite.visible = !1, this.t0 && this.t0.stop(), this.t1 && this.t1.stop(), this.t2 && this.t2.stop(), this.t3 && this.t3.stop(), this.t4 && game.time.events.remove(this.t4), this.t5 && game.time.events.remove(this.t5), this.t6 && game.time.events.remove(this.t6), this.t7 && game.time.events.remove(this.t7), this.t8 && game.time.events.remove(this.t8), this.t9 && game.time.events.remove(this.t9), this.t10 && this.t10.stop()
}, CookingGame.Tutorial = function(t, e) {
    "use strict";
    Phaser.State.call(this, t, e)
}, CookingGame.Tutorial.prototype.init = function(t, e, i) {
    "use strict";
    this.data = t, this.levelData = e, this.levelNum = i
}, CookingGame.Tutorial.prototype.create = function() {
    "use strict";
    theme.volume = .4;
    var t = this.game.add.image(0, 0, "gameBackground");
    this.recipes = [], this.stations = [], this.ingredients = [], this.proccesingObjects = [], this.clickableObjects = [], this.win = !1, this.clickActions = [], this.data.groups.forEach(function(t) {
        groups[t] = this.game.add.group()
    }, this), this.timer = new CookingGame.Timer(this), this.timer.ticked.add(this.onTick, this), btns = new CookingGame.Buttons(this.game, this.data), this.show(), groups.backgrounds.add(this.game.add.sprite(636, 375, ATLAS, "blat-de-taiat")), this.shadow = groups.player.add(this.game.add.sprite(0, 0, ATLAS, "umbra-ketchup")), this.shadow.scale.setTo(1.3, 1.3), this.shadow.alpha = 0, groups.tools.add(this.game.add.sprite(87, 487, ATLAS, "aragaz")), groups.tools.add(this.game.add.sprite(316, 578, ATLAS, "umbra-ketchup")), groups.tools.add(this.game.add.sprite(366, 569, ATLAS, "umbra-ketchup")), this.player = new CookingGame.Player(this, this.data.player.position, this.data.player.properties, this.data), this.items = this.data.items, this.items.forEach(function(t) {
        if ("r" == t.id.charAt(0) && isObjInArray(t.id, this.levelData.burgers) && this.recipes.push(t), "i" == t.id.charAt(0) && isObjInArray(t.id, this.levelData.items) && this.ingredients.push(t), "s" == t.id.charAt(0) && isObjInArray(t.id, this.levelData.stations) && this.stations.push(t), t.hasOwnProperty("x") && this.isInLevel(t.id)) {
            var e = {
                    x: t.x,
                    y: t.y
                },
                i = new CookingGame.ClickableObject(this, e, t, this.data);
            "s_05" == t.id && (this.plate = i), i.events.onInputDown.add(this.onItemClicked, this), this.clickableObjects.push(i)
        }
    }, this);
    for (var e = 0; e < 6; e++) {
        var i = {
                x: 0,
                y: -100
            },
            s = new CookingGame.ProccesingObject(this, i, null, this.data);
        this.proccesingObjects.push(s), s.tutorial = !0, s.visible = !1, s.signal.add(this.onProccesingObjectSignaled, this)
    }
    var a = game.add.graphics(0, 0);
    a.beginFill(16777215), a.moveTo(80, 0), a.lineTo(80, 492), a.lineTo(136, 460), a.lineTo(168, 492), a.lineTo(652, 492), a.lineTo(667, 434), a.lineTo(800, 434), a.lineTo(800, 0), a.lineTo(100, 0), a.endFill(), groups.player.mask = a;
    var n = game.add.graphics(0, 0);
    n.beginFill(16777215), n.moveTo(490, 0), n.lineTo(490, 253), n.lineTo(521, 262), n.lineTo(800, 345), n.lineTo(800, 0), n.lineTo(490, 0), n.endFill(), groups.clients.mask = n, this.clients = new CookingGame.Clients(this, this.data.clients, this.data, this.levelData), this.clients.clientsSignal.add(this.onClientsSignaled, this), this.helpingHand = game.add.sprite(0, 0), this.tap_0 = game.add.sprite(0, 0, ATLAS, "tap1"), this.tap_1 = game.add.sprite(0, 0, ATLAS, "tap2"), this.helpingHand.addChild(this.tap_0), this.helpingHand.addChild(this.tap_1), this.tap_0.visible = !1, this.tap_1.visible = !1, this.gameInterface = new CookingGame.GameInterface(this, this.data), this.gameInterface.starCashRequirement = Math.ceil(1.5 * this.levelData.goal), t.inputEnabled = !0, t.events.onInputDown.add(this.onClick, this), this.player.playerSignal.add(this.onMoveComplete, this), this.pauseBtn = btns.createButton("pause", 756, 41, 1, this), this.recipeShown = 0, this.tomatoTaken = 0, this.tomatoProccesed = 0, this.tomatoProccesedNTaken = 0, this.tomatoOnPlate = 0, this.beefTaken = 0, this.beefProccesed = 0, this.beefProccesedNTaken = 0, this.beefOnPlate = 0, this.bunTaken = 0, this.bunOnPlate = 0, this.burgerInHand = 0, this.mustardAdded = 0, this.arr_tut_0 = [0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0], this.arr_tut_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0], this.tutStep = 0, pauseScreenGroup && pauseScreenGroup.destroy(), overlayGroup && overlayGroup.destroy(), overlayGroup = this.game.add.group(), pauseScreenGroup = this.game.add.group();
    var o = game.add.sprite(game.world.centerX, game.world.centerY, ATLAS, "paused-game");
    o.anchor.set(.5);
    var r = game.add.sprite(game.world.centerX - 98, 316, ATLAS, "go-to-map-button"),
        h = game.add.sprite(game.world.centerX, 316, ATLAS, "resume-button");
    this.soundBtn = btns.createButton("sound", game.world.centerX + 98, 316, 1, this), r.inputEnabled = !0, r.input.useHandCursor = !0, h.inputEnabled = !0, h.input.useHandCursor = !0, this.soundBtn.inputEnabled = !0, this.soundBtn.input.useHandCursor = !0, r.anchor.set(.5), h.anchor.set(.5), this.soundBtn.anchor.set(.5), h.events.onInputDown.add(function() {
        this.onBtnPressedDuringPause(h, "resume")
    }, this), this.soundBtn.events.onInputDown.add(function() {
        this.onBtnPressedDuringPause(this.soundBtn, "sound")
    }, this), r.events.onInputDown.add(function() {
        this.onBtnPressedDuringPause(r, "exit")
    }, this);
    var l = new Phaser.Graphics(this.game, 0, 0);
    l.beginFill(0, .35), l.drawRect(0, 0, 800, 600), l.endFill(), this.overlay = this.game.add.image(0, 0, l.generateTexture()), this.overlay.inputEnabled = !0, overlayGroup.add(this.overlay), pauseScreenGroup.add(o), pauseScreenGroup.add(r), pauseScreenGroup.add(h), pauseScreenGroup.add(this.soundBtn), pauseScreenGroup.visible = !1, overlayGroup.visible = !1
}, CookingGame.Tutorial.prototype.onBtnPressedDuringPause = function(t, e) {
    if ("sound" == e) return void stopSounds();
    schclick.play(), t.scale.setTo(1.2);
    var i = game.add.tween(t.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Bounce.Out, !0);
    "resume" == e && resumeGame(), "exit" == e && (resumeGame(), transGroup = this.game.add.group(), transGroup.add(transition), this.clients.reset(), i.onComplete.add(function() {
        transition.actionIn(function() {
            goToMap(this.win)
        })
    }, this))
}, CookingGame.Tutorial.prototype.show = function() {
    transGroup.destroy(), transGroup = game.add.group(), transGroup.add(transition), transition = new CookingGame.BgTransition(this, this.data), transition.actionOut(this.onGameShown, this)
}, CookingGame.Tutorial.prototype.onGameShown = function() {
    this.timer.initialize(this.levelData.timeLimit)
}, CookingGame.Tutorial.prototype.onClick = function(t, e) {
    if (!this.isMoving) {
        if (console.log("On Click", t), this.game.input.activePointer.isDown) {
            var i = this.game.input.activePointer;
            this.player.moveTo(i.x, i.y)
        }
        this.itemToUse = null
    }
}, CookingGame.Tutorial.prototype.onTick = function(t) {
    this.clients.onTick()
}, CookingGame.Tutorial.prototype.onMoveComplete = function(t, e) {
    if (console.log("On Move Complete", this.itemToUse), this.currentClient) {
        console.log("COMPARE REQUESTS:");
        var i = this.player.recipe;
        console.log("player order:", i);
        var s = this.currentClient.burgerRecipe;
        if (console.log("client order:", s), !i || !s) return void this.onMoveActionComplete();
        var a = !0;
        if (i.length == s.length)
            for (var n = 0; n < s.length; n++) {
                var o = !0;
                if ("i_12" != s[n] && "i_13" != s[n]) {
                    for (var r = 0; r < i.length; r++) s[n] == i[r].id && (o = !1);
                    if (o) {
                        a = !1;
                        break
                    }
                }
            } else a = !1;
        a ? (console.log("BINGO!1!!"), this.player.takeItem(null), this.gameInterface.tryCleanRecipe(this.currentClient.burgerRecipe), 0 == this.clients.firstClient && 1 == this.clients.secondClient ? this.arr_tut_0[13] = 1 : 0 == this.clients.firstClient && 0 == this.clients.secondClient && (this.arr_tut_1[15] = 1, game.time.events.add(1600, this.stopGame, this)), this.clients.satisfyClient(this.currentClient), this.checkTutorial()) : console.log(" SORRY! Wrong order...")
    }
    if (!this.itemToUse || !this.itemToUse.properties) return void this.onMoveActionComplete();
    if (this.player.currentItem && "r" == this.player.currentItem.id.charAt(0));
    else {
        if ("i" == this.itemToUse.properties.id.charAt(0)) {
            var h = this.itemToUse.properties.id.substr(this.itemToUse.properties.id.indexOf("_") + 1);
            if (12 == h || 13 == h) this.player.recipe && this.player.recipe.length > 0 ? this.player.addItem(this.itemToUse.properties) : this.tryToAddToPlate(this.data.items, this.itemToUse.properties), this.itemToUse.doInteractAnimation();
            else if (h < 15 && !this.player.recipe) {
                if (12 == h || 13 == h) return void this.onMoveActionComplete();
                this.itemToUse.doInteractAnimation(), this.checkIfItemDestroyed(), this.player.takeItem(this.itemToUse.properties)
            } else 1 == this.itemToUse.processing && (this.itemToUse.processing = !1)
        }
        if ("s" == this.itemToUse.properties.id.charAt(0))
            if (this.itemToUse.properties.id.substr(this.itemToUse.properties.id.indexOf("0") + 1) < 5 || "s_06" == this.itemToUse.properties.id)
                if (1 == this.itemToUse.processing) {
                    if (this.itemToUse.burnt);
                    else if (1 == this.itemToUse.processed && !this.player.recipe) {
                        if (this.player.currentItem && "s_06" != this.itemToUse.properties.id) var l = this.player.currentItem;
                        this.checkIfItemDestroyed(), this.player.takeItem(this.itemToUse.processor.item), this.itemToUse.processor.reset(), this.proccesingObjects.push(this.itemToUse.processor), this.itemToUse.processor = null, this.itemToUse.processed = !1, this.itemToUse.processing = !1, this.itemToUse.burnt = !1, "s_03" == this.itemToUse.properties.id || this.itemToUse.stopAnimation(), l && this.tryToProcessItem(this.data.items, l)
                    }
                } else this.tryToProcessItem(this.data.items, this.player.currentItem) && "s_06" != this.itemToUse.properties.id && (this.checkIfItemDestroyed(), this.lastStation = this.itemToUse, this.lastItem = this.player.currentItem, this.player.takeItem(null));
        else 5 == this.itemToUse.properties.id.substr(this.itemToUse.properties.id.indexOf("0") + 1) ? (this.checkIfItemDestroyed(), this.player.recipe ? this.player.takeItem(this.tryToAddToPlate(this.data.items, this.player.recipe)) : this.player.takeItem(this.tryToAddToPlate(this.data.items, this.player.currentItem))) : 7 == this.itemToUse.properties.id.substr(this.itemToUse.properties.id.indexOf("0") + 1) && (this.checkIfItemDestroyed(), (this.player.recipe || this.player.currentItem) && this.itemToUse.doInteractAnimation(), this.player.takeItem(null))
    }
    0 == this.clients.firstClient && 1 == this.clients.secondClient && (console.log("$$$%$%$%$", this.player.lastItem, this.player.currentItem), this.player.currentItem && "i_01" == this.player.currentItem.id && (this.arr_tut_0[1] = 1), this.lastItem && "i_01" == this.lastItem.id && this.lastStation && "s_01" == this.lastStation.properties.id && (this.arr_tut_0[2] = 1), this.player.currentItem && "i_05" == this.player.currentItem.id && (this.arr_tut_0[3] = 1), this.lastItem && "i_05" == this.lastItem.id && this.lastStation && "s_03" == this.lastStation.properties.id && (this.arr_tut_0[4] = 1), this.player.currentItem && "i_11" == this.player.currentItem.id && (this.arr_tut_0[5] = 1), this.plate && this.plate.isItemInPlate("i_11") && (console.log("BUN ON PLATE MAN!!"), this.arr_tut_0[6] = 1), this.player.currentItem && "i_16" == this.player.currentItem.id && (this.arr_tut_0[7] = 1), this.plate && this.plate.isItemInPlate("i_16") && (this.arr_tut_0[8] = 1), this.player.currentItem && "i_19" == this.player.currentItem.id && (this.arr_tut_0[9] = 1), this.plate && this.plate.isItemInPlate("i_19") && (this.arr_tut_0[10] = 1), this.plate && this.plate.isItemInPlate("i_13") && (this.arr_tut_0[11] = 1), this.player.recipe && 4 == this.player.recipe.length && this.player.hasRecipe(["i_11", "i_16", "i_19", "i_13"]) && (this.arr_tut_0[12] = 1)), 0 == this.clients.firstClient && 0 == this.clients.secondClient && (this.player.currentItem && "i_01" == this.player.currentItem.id && (this.arr_tut_1[1] = 1), this.lastItem && "i_01" == this.lastItem.id && this.lastStation && "s_01" == this.lastStation.properties.id && (this.arr_tut_1[2] = 1), this.player.currentItem && "i_14" == this.player.currentItem.id && (this.arr_tut_1[3] = 1), this.lastItem && "i_14" == this.lastItem.id && this.lastStation && "s_03" == this.lastStation.properties.id && (this.arr_tut_1[4] = 1), this.player.currentItem && "i_11" == this.player.currentItem.id && (this.arr_tut_1[5] = 1), this.plate && this.plate.isItemInPlate("i_11") && (this.arr_tut_1[6] = 1), this.player.currentItem && "i_02" == this.player.currentItem.id && (this.arr_tut_1[7] = 1), this.plate && this.plate.isItemInPlate("i_02") && (this.arr_tut_1[8] = 1), this.player.currentItem && "i_16" == this.player.currentItem.id && (this.arr_tut_1[9] = 1), this.plate && this.plate.isItemInPlate("i_16") && (this.arr_tut_1[10] = 1), this.player.currentItem && "i_25" == this.player.currentItem.id && (this.arr_tut_1[11] = 1), this.plate && this.plate.isItemInPlate("i_25") && (this.arr_tut_1[12] = 1), this.plate && this.plate.isItemInPlate("i_12") && (this.arr_tut_1[13] = 1), this.player.recipe && 5 == this.player.recipe.length && this.player.hasRecipe(["i_11", "i_16", "i_25", "i_02", "i_12"]) && (this.arr_tut_1[14] = 1)), this.lastItem = null, this.checkTutorial(), this.onMoveActionComplete()
}, CookingGame.Tutorial.prototype.checkIfItemDestroyed = function() {
    0 == this.clients.firstClient && 1 == this.clients.secondClient && (this.plate && !this.plate.isItemInPlate("i_11") && this.itemToUse && "s_05" != this.itemToUse.properties.id && (this.arr_tut_0[5] = 0), this.plate && !this.plate.isItemInPlate("i_16") && (this.player.currentItem && "i_16" == this.player.currentItem.id && this.itemToUse && "s_05" != this.itemToUse.properties.id && (this.arr_tut_0[1] = 0, this.arr_tut_0[2] = 0, this.arr_tut_0[7] = 0, this.arr_tut_0[8] = 0), !this.player.currentItem || "i_01" != this.player.currentItem.id || 1 == this.arr_tut_0[2] || this.itemToUse && "s_01" == this.itemToUse.properties.id || (this.arr_tut_0[1] = 0)), this.plate && !this.plate.isItemInPlate("i_19") && (this.player.currentItem && "i_19" == this.player.currentItem.id && this.itemToUse && "s_05" != this.itemToUse.properties.id && (this.arr_tut_0[3] = 0, this.arr_tut_0[4] = 0, this.arr_tut_0[9] = 0, this.arr_tut_0[10] = 0), !this.player.currentItem || "i_05" != this.player.currentItem.id || 1 == this.arr_tut_0[4] || this.itemToUse && "s_03" == this.itemToUse.properties.id || (this.arr_tut_0[3] = 0)), this.itemToUse && "s_07" == this.itemToUse.properties.id && this.player.recipe && this.player.recipe.length > 0 && (this.player.isItemInPlate("i_16") && (this.arr_tut_0[1] = 0, this.arr_tut_0[2] = 0, this.arr_tut_0[7] = 0, this.arr_tut_0[8] = 0), this.player.isItemInPlate("i_19") && (this.arr_tut_0[3] = 0, this.arr_tut_0[4] = 0, this.arr_tut_0[9] = 0, this.arr_tut_0[10] = 0), this.player.isItemInPlate("i_13") && (this.arr_tut_0[11] = 0), this.player.isItemInPlate("i_11") && (this.arr_tut_0[5] = 0, this.arr_tut_0[6] = 0), this.arr_tut_0[12] = 0)), 0 == this.clients.firstClient && 0 == this.clients.secondClient && (this.plate && !this.plate.isItemInPlate("i_11") && this.itemToUse && "s_05" != this.itemToUse.properties.id && (this.arr_tut_1[5] = 0), this.plate && !this.plate.isItemInPlate("i_02") && this.itemToUse && "s_05" != this.itemToUse.properties.id && (this.arr_tut_1[7] = 0), this.plate && !this.plate.isItemInPlate("i_16") && (this.player.currentItem && "i_16" == this.player.currentItem.id && this.itemToUse && "s_05" != this.itemToUse.properties.id && (this.arr_tut_1[1] = 0, this.arr_tut_1[2] = 0, this.arr_tut_1[7] = 0, this.arr_tut_1[8] = 0), !this.player.currentItem || "i_01" != this.player.currentItem.id || 1 == this.arr_tut_1[2] || this.itemToUse && "s_01" == this.itemToUse.properties.id || (this.arr_tut_1[1] = 0)), this.plate && !this.plate.isItemInPlate("i_25") && (this.player.currentItem && "i_25" == this.player.currentItem.id && this.itemToUse && "s_05" != this.itemToUse.properties.id && (this.arr_tut_1[3] = 0, this.arr_tut_1[4] = 0, this.arr_tut_1[9] = 0, this.arr_tut_1[10] = 0), !this.player.currentItem || "i_14" != this.player.currentItem.id || 1 == this.arr_tut_1[4] || this.itemToUse && "s_03" == this.itemToUse.properties.id || (this.arr_tut_1[3] = 0)), this.itemToUse && "s_07" == this.itemToUse.properties.id && this.player.recipe && this.player.recipe.length > 0 && (this.player.isItemInPlate("i_16") && (this.arr_tut_1[1] = 0, this.arr_tut_1[2] = 0, this.arr_tut_1[9] = 0, this.arr_tut_1[10] = 0), this.player.isItemInPlate("i_25") && (this.arr_tut_1[3] = 0, this.arr_tut_1[4] = 0, this.arr_tut_1[11] = 0, this.arr_tut_1[12] = 0), this.player.isItemInPlate("i_12") && (this.arr_tut_1[13] = 0), this.player.isItemInPlate("i_11") && (this.arr_tut_1[5] = 0, this.arr_tut_1[6] = 0), this.player.isItemInPlate("i_01") && (this.arr_tut_1[7] = 0, this.arr_tut_1[8] = 0), this.arr_tut_1[14] = 0))
}, CookingGame.Tutorial.prototype.tryToProcessItem = function(t, e) {
    var i = !1;
    return t.forEach(function(t) {
        if ("i" == t.id.charAt(0) && t.hasOwnProperty("recipe")) {
            var s = t.recipe;
            (e && e.id == s[0] && this.itemToUse.properties.id == s[1] || this.itemToUse.properties.id == s[0]) && (i = !0, this.itemToUse.processing = !0, this.itemToUse.processor = this.proccesingObjects.pop(), this.itemToUse.processor.start(t, this.itemToUse), this.itemToUse.animate())
        }
    }, this), i
}, CookingGame.Tutorial.prototype.tryToAddToPlate = function(t, e) {
    var i = null;
    if (!e) return i = this.itemToUse.addItemToPlate(e);
    if ("i_01" == e.id) return e;
    if ("i_03" == e.id) return e;
    if ("i_04" == e.id) return e;
    if ("i_05" == e.id) return e;
    if ("i_07" == e.id) return e;
    if ("i_08" == e.id) return e;
    if ("i_09" == e.id) return e;
    if ("i_10" == e.id) return e;
    if ("i_14" == e.id) return e;
    if ("i_21" == e.id) return e;
    var s = this.plate.addItemToPlate(e);
    return this.gameInterface.checkRecipe(this.plate.plateContents), s ? i : e
}, CookingGame.Tutorial.prototype.onItemClicked = function(t, e) {
    if (schclack.play(), game.input.activePointer.isDown) {
        var i = (this.game.input.activePointer, {
            item: t,
            xPos: t.x,
            yPos: t.y,
            client: null
        });
        t.id && this.clickActions[this.clickActions.length - 1] && !this.clickActions[this.clickActions.length - 1].item.id && this.clickActions.pop(), this.clickActions.push(i), this.tryMovePlayerToNextAction()
    }
}, CookingGame.Tutorial.prototype.tryMovePlayerToNextAction = function() {
    if (!this.isMoving) {
        this.isMoving = !0;
        var t = this.clickActions[0];
        t && (this.itemToUse = t.item, this.currentClient = t.client, this.player.moveTo(t.xPos, t.yPos))
    }
}, CookingGame.Tutorial.prototype.onMoveActionComplete = function() {
    this.isMoving = !1, this.clickActions.length > 0 && this.clickActions.splice(0, 1), this.clickActions.length > 0 && this.tryMovePlayerToNextAction()
}, CookingGame.Tutorial.prototype.onProccesingObjectSignaled = function(t, e) {
    "disappeared" == e && (t.station.processed = !1, t.station.processing = !1, t.station.burnt = !1, t.station.processor = null, t.station.stopAnimation(), t.reset(), this.proccesingObjects.push(t)), "processed" == e && (0 == this.clients.firstClient && 1 == this.clients.secondClient && ("s_01" == t.station.properties.id && "i_16" == t.item.id && (this.arr_tut_0[7] = 0), "s_03" == t.station.properties.id && "i_19" == t.item.id && (this.arr_tut_0[9] = 0)), 0 == this.clients.firstClient && 0 == this.clients.secondClient && ("s_01" == t.station.properties.id && "i_16" == t.item.id && (this.arr_tut_1[9] = 0), "s_03" == t.station.properties.id && "i_25" == t.item.id && (this.arr_tut_1[11] = 0)), this.checkTutorial())
}, CookingGame.Tutorial.prototype.onClientRequestObjectSignaled = function(t, e) {
    "showRecipe" == e && (this.gameInterface.showRecipe(t.client.burgerRecipe, t.client.burgerImg), 0 == this.clients.firstClient && 1 == this.clients.secondClient ? this.arr_tut_0[0] = 1 : this.arr_tut_1[0] = 1, this.checkTutorial()), "disappeared" == e && t.reset()
}, CookingGame.Tutorial.prototype.onClientsSignaled = function(t, e) {
    if ("move" == e) {
        var i = t.x,
            s = t.y;
        765 == i && (s = t.y + 100), 692 == i && (s = t.y + 75), 620 == i && (s = t.y + 50), 544 == i && (s = t.y + 25), this.gameInterface.showRecipe(t.burgerRecipe, t.burgerImg);
        var a = {
            item: null,
            xPos: i,
            yPos: s,
            client: t
        };
        this.clickActions.push(a), this.tryMovePlayerToNextAction(), this.checkTutorial()
    }
    if ("arrived" == e) {
        var n = {
                x: 0,
                y: 0
            },
            o = new CookingGame.ClientRequest(this, n, null, this.data);
        o.visible = !1, o.signal.add(this.onClientRequestObjectSignaled, this), t.request = o, t.request.start(this.clients, t), this.checkTutorial()
    }
    if ("cash" == e) {
        var r = t.cash,
            h = t.pos,
            l = {
                x: 0,
                y: 0
            };
        765 == h.x && (l.x = 715, l.y = 329), 692 == h.x && (l.x = 660, l.y = 311), 620 == h.x && (l.x = 603, l.y = 294), 544 == h.x && (l.x = 551, l.y = 278), this.gameInterface.addCash(r, l)
    }
    "disappointed" == e && this.gameInterface.breakStar(), "hasRequest" == e && this.checkTutorial()
}, CookingGame.Tutorial.prototype.update = function() {
    this.shadow.x = this.player.x - 42, this.shadow.y = this.player.y + .65 * this.player.height
}, CookingGame.Tutorial.prototype.stopGame = function() {
    preLevelGroup && preLevelGroup.destroy(), overlayGroup && overlayGroup.destroy(), overlayGroup = this.game.add.group(), preLevelGroup = this.game.add.group(), this.timer.reset();
    var t = game.add.sprite(this.game.world.centerX, this.game.world.centerY, ATLAS, "chenar");
    t.anchor.set(.5);
    var e = game.add.sprite(this.game.world.centerX, 420, ATLAS, "buton-ok"),
        i = game.add.sprite(580, 110, ATLAS, "buton-x");
    this.win = !1;
    var s = this.gameInterface.getCoins();
    s >= this.levelData.goal ? this.win = !0 : this.win = !1;
    var a, n, o, r, h = 0;
    if (this.win) {
        a = showText(s, "#3D7305", 34, 400, 324), n = game.add.sprite(253, 312, ATLAS, "score"), r = game.add.sprite(319, 79, ATLAS, "you-won"), o = game.add.sprite(503, 197, ATLAS, "chef-chenar-win");
        var l = game.add.sprite(0, 0, ATLAS, "suport-steluta"),
            d = game.add.sprite(0, 0, ATLAS, "suport-steluta"),
            c = game.add.sprite(0, 0, ATLAS, "suport-steluta");
        l.anchor.set(.5), d.anchor.set(.5), c.anchor.set(.5), l.scale.set(.88), d.scale.set(.88), c.scale.set(1), l.position.setTo(293, 233), d.position.setTo(497, 233), c.position.setTo(395, 211);
        var p = game.add.sprite(0, 0, ATLAS, "steluta");
        if (p.anchor.set(.5), p.scale.set(0), p.position.setTo(293, 233), h = 1, this.gameInterface.starCashRequirement < s && h++, this.gameInterface.starBroken || h++, 2 == h) {
            var m = game.add.sprite(0, 0, ATLAS, "steluta");
            m.anchor.set(.5), m.scale.set(0), m.position.setTo(497, 233)
        } else if (3 == h) {
            var m = game.add.sprite(0, 0, ATLAS, "steluta");
            m.anchor.set(.5), m.scale.set(0), m.position.setTo(497, 233);
            var g = game.add.sprite(0, 0, ATLAS, "steluta");
            g.anchor.set(.5), g.scale.set(0), g.position.setTo(395, 211)
        }
        game.add.tween(p.scale).to({
            x: .88,
            y: .88
        }, 500, Phaser.Easing.Back.Out, !0, 800), h > 1 && game.add.tween(m.scale).to({
            x: .88,
            y: .88
        }, 500, Phaser.Easing.Back.Out, !0, 1e3), h > 2 && game.add.tween(g.scale).to({
            x: 1,
            y: 1
        }, 500, Phaser.Easing.Back.Out, !0, 1200)
    } else a = showText(s, "#3D7305", 34, 400, 276), n = game.add.sprite(255, 165, ATLAS, "fail"), r = game.add.sprite(316, 79, ATLAS, "you-lost"), o = game.add.sprite(153, 188, ATLAS, "chef-chenar-lose");
    i.inputEnabled = !0, i.input.useHandCursor = !0, e.inputEnabled = !0, e.input.useHandCursor = !0, e.anchor.set(.5), i.anchor.set(.5), i.events.onInputDown.addOnce(function() {
        this.onCloseClicked(i)
    }, this), e.events.onInputDown.addOnce(function() {
        this.onPlayClicked(e, this.win, this.data, this.levelData)
    }, this);
    var u = new Phaser.Graphics(this.game, 0, 0);
    u.beginFill(0, .35), u.drawRect(0, 0, 800, 600), u.endFill(), this.overlay = this.game.add.image(0, 0, u.generateTexture()), this.overlay.inputEnabled = !0, overlayGroup.add(this.overlay), preLevelGroup.add(t), preLevelGroup.add(e), preLevelGroup.add(a), preLevelGroup.add(n), preLevelGroup.add(r), preLevelGroup.add(o), preLevelGroup.add(i), this.win && (preLevelGroup.add(l), preLevelGroup.add(d), preLevelGroup.add(c), preLevelGroup.add(p)), h > 1 && preLevelGroup.add(m), h > 2 && preLevelGroup.add(g), mapProgress[this.levelNum - 1] = h, localStorage.setItem(localStorageName, mapProgress.toString()), this.game.add.tween(preLevelGroup).from({
        y: -200
    }, 400, Phaser.Easing.Exponential.Out, !0), showMidroll(), this.win ? levelWin.play() : levelLose.play()
}, CookingGame.Tutorial.prototype.onPlayClicked = function(t, e, i, s) {
    transGroup.destroy(), transGroup = this.game.add.group(), transition = new CookingGame.BgTransition(this, this.data), transGroup.add(transition);
    this.data;
    t.scale.setTo(1.2);
    var a = game.add.tween(t.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Bounce.Out, !0);
    this.win ? (this.clients.reset(), a.onComplete.add(function() {
        transition.actionIn(function() {
            goToMap(this.win)
        })
    }, this)) : a.onComplete.add(function() {
        transition.actionIn(function() {
            startLevel(i, s)
        })
    }, this)
}, CookingGame.Tutorial.prototype.onCloseClicked = function(t) {
    transGroup.destroy(), transGroup = this.game.add.group(), transition = new CookingGame.BgTransition(this, this.data), transGroup.add(transition);
    this.data;
    t.scale.setTo(1.2), game.add.tween(t.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Bounce.Out, !0).onComplete.add(function() {
        transition.actionIn(function() {
            goToMap(this.win)
        })
    }, this)
}, CookingGame.Tutorial.prototype.isInLevel = function(t) {
    "use strict";
    var e = isObjInArray(t, this.levelData.items),
        i = isObjInArray(t, this.levelData.burgers),
        s = isObjInArray(t, this.levelData.stations);
    return e || i || s
}, CookingGame.Tutorial.prototype.create_object = function(t) {
    "use strict";
    position = {
        x: t.x,
        y: t.y
    };
    var e;
    switch (t.name) {
        case "player":
            e = new CookingGame.Player(this, position, t.properties, this.level_data)
    }
    this.tools[t.name] = e
}, CookingGame.Tutorial.prototype.checkTutorial = function() {
    "use strict";
    if (0 != this.clients.currentClients.length && this.clients.currentClients[0] && this.clients.currentClients[0].request) {
        if (this.arr_tut_f_params_0 = [{
                x: this.clients.currentClients[0].x + this.clients.currentClients[0].request.x + this.clients.currentClients[0].request.width / 2,
                y: this.clients.currentClients[0].y + this.clients.currentClients[0].request.y + this.clients.currentClients[0].request.height / 2
            }, {
                x: this.items[0].x - 12,
                y: this.items[0].y - 13
            }, {
                x: this.items[15].x,
                y: this.items[15].y
            }, {
                x: this.items[4].x - 12,
                y: this.items[4].y - 13
            }, {
                x: this.items[17].x,
                y: this.items[17].y
            }, {
                x: this.items[10].x - 12,
                y: this.items[10].y - 13
            }, {
                x: this.items[19].x,
                y: this.items[19].y
            }, {
                x: this.items[15].x,
                y: this.items[15].y
            }, {
                x: this.items[19].x,
                y: this.items[19].y
            }, {
                x: this.items[17].x,
                y: this.items[17].y
            }, {
                x: this.items[19].x,
                y: this.items[19].y
            }, {
                x: this.items[12].x - 12,
                y: this.items[12].y
            }, {
                x: this.items[19].x,
                y: this.items[19].y
            }, {
                x: this.clients.currentClients[0].x - this.clients.currentClients[0].width / 2,
                y: this.clients.currentClients[0].y - 120
            }], this.arr_tut_f_params_1 = [{
                x: this.clients.currentClients[0].x + this.clients.currentClients[0].request.x + this.clients.currentClients[0].request.width / 2,
                y: this.clients.currentClients[0].y + this.clients.currentClients[0].request.y + this.clients.currentClients[0].request.height / 2
            }, {
                x: this.items[0].x - 12,
                y: this.items[0].y - 13
            }, {
                x: this.items[15].x,
                y: this.items[15].y
            }, {
                x: this.items[13].x - 12,
                y: this.items[13].y - 13
            }, {
                x: this.items[17].x,
                y: this.items[17].y
            }, {
                x: this.items[10].x - 12,
                y: this.items[10].y - 13
            }, {
                x: this.items[19].x,
                y: this.items[19].y
            }, {
                x: this.items[1].x - 12,
                y: this.items[1].y - 13
            }, {
                x: this.items[19].x,
                y: this.items[19].y
            }, {
                x: this.items[15].x,
                y: this.items[15].y
            }, {
                x: this.items[19].x,
                y: this.items[19].y
            }, {
                x: this.items[17].x,
                y: this.items[17].y
            }, {
                x: this.items[19].x,
                y: this.items[19].y
            }, {
                x: this.items[11].x - 12,
                y: this.items[11].y
            }, {
                x: this.items[19].x,
                y: this.items[19].y
            }, {
                x: this.clients.currentClients[0].x - this.clients.currentClients[0].width / 2,
                y: this.clients.currentClients[0].y - 120
            }], this.tap_0.visible = !1, this.tap_1.visible = !1, this.handRepeatAnim && game.time.events.remove(this.handRepeatAnim), 0 == this.clients.firstClient && 1 == this.clients.secondClient)
            for (var t = 0; t < this.arr_tut_0.length; t++) {
                if (this.arr_tut_0[7] < 0 && this.arr_tut_0[9] < 0 && t > 10) return;
                if (this.arr_tut_0[7] < 0 && 8 == t) return;
                if (this.arr_tut_0[9] < 0 && 10 == t) return;
                if (0 == this.arr_tut_0[t] && t < this.arr_tut_f_params_0.length) return this.showHandStep(this.arr_tut_f_params_0[t]), void(this.tutStep = t);
                this.stopHand()
            }
        if (0 == this.clients.firstClient && 0 == this.clients.secondClient)
            for (var e = 0; e < this.arr_tut_1.length; e++) {
                if (this.arr_tut_1[9] < 0 && this.arr_tut_1[11] < 0 && e > 12) return;
                if (this.arr_tut_1[9] < 0 && 10 == e) return;
                if (this.arr_tut_1[11] < 0 && 12 == e) return;
                if (0 == this.arr_tut_1[e] && e < this.arr_tut_f_params_1.length) return this.showHandStep(this.arr_tut_f_params_1[e]), void(this.tutStep = e);
                this.stopHand()
            }
    }
}, CookingGame.Tutorial.prototype.stopHand = function() {
    this.tap_0.visible = !1, this.tap_1.visible = !1, this.t0 && this.t0.stop(), this.t1 && this.t1.stop(), this.t2 && this.t2.stop(), this.t3 && this.t3.stop(), this.t4 && game.time.events.remove(this.t4), this.t5 && game.time.events.remove(this.t5), this.t6 && game.time.events.remove(this.t6), this.t7 && game.time.events.remove(this.t7), this.t8 && game.time.events.remove(this.t8), this.t9 && game.time.events.remove(this.t9), this.t10 && this.t10.stop()
}, CookingGame.Tutorial.prototype.showHandStep = function(t) {
    this.stopHand(), this.showSequence({
        x: this.player.x,
        y: this.player.y - 130
    }, {
        x: t.x,
        y: t.y
    }, !0), this.tap_0.visible = !0
}, CookingGame.Tutorial.prototype.showSequence = function(t, e, i) {
    this.originPoint = t, this.originPoint = {
        x: this.player.x,
        y: this.player.y - 130
    }, this.destinationPoint = e, this.repeat = i, this.helpingHand.x = this.originPoint.x, this.helpingHand.y = this.originPoint.y, this.helpingHand.alpha = 0, this.helpingHand.visible = !0, this.handRepeatAnim && game.time.events.remove(this.handRepeatAnim), this.tap_0.visible = !0, this.tap_1.visible = !1, this.t0 = game.add.tween(this.helpingHand).to({
        alpha: 1
    }, 100, "Sine.easeOut", !0, 0), this.helpingHand.x = this.destinationPoint.x, this.helpingHand.y = this.destinationPoint.y, this.t4 = game.time.events.add(.5 * Phaser.Timer.SECOND, this.showClick, this), i ? this.t5 = game.time.events.add(2 * Phaser.Timer.SECOND, function() {
        this.showSequence(t, e, i)
    }, this) : (this.tap_0.visible = !1, this.tap_1.visible = !1)
}, CookingGame.Tutorial.prototype.showClick = function() {
    this.t6 = game.time.events.add(.3 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t7 = game.time.events.add(.5 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t8 = game.time.events.add(.8 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t9 = game.time.events.add(1 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t10 = game.add.tween(this.helpingHand).to({
        alpha: 0
    }, 300, "Sine.easeIn", !0, 1e3)
}, CookingGame.Tutorial.prototype.toggleHelpingHand = function() {
    0 == this.tap_0.visible ? (this.tap_0.visible = !0, this.tap_1.visible = !1) : (this.tap_0.visible = !1, this.tap_1.visible = !0)
};
var finalSound, sound_click, sound_trampoline, s_fail, s_run1, s_run2, s_run3, s_jump1, s_jump2, s_jump3, s_spikes, theme, cashin, deepfry, frying, cut, grilling, humpf, humpf2, juicing, schclack, schclick, ticking, tisk, woosh1, woosh2, click, bell, splort, pew, levelWin, levelLose, ingameSounds = [],
    themeSounds = [],
    interfaceSounds = [];
window.exportRoot = new Object, window.exportRoot.onBannerOpen = onBannerOpen, window.exportRoot.onBannerClose = onBannerClose, CookingGame.Sounds = function(t) {
    "use strict";
    Phaser.State.call(this, t), this.game_state = t, theme = game.add.audio("theme", 1, !0), cashin = game.add.audio("cashin", 1, !1), deepfry = game.add.audio("deepfry", 2, !0), frying = game.add.audio("frying", 1, !0), cut = game.add.audio("cut", .2, !0), grilling = game.add.audio("grilling", 2, !0), humpf = game.add.audio("humpf", 1, !1), humpf2 = game.add.audio("humpf2", 1, !1), juicing = game.add.audio("juicing", 1, !0), schclack = game.add.audio("schclack", .8, !1), schclick = game.add.audio("schclick", 1, !1), ticking = game.add.audio("ticking", 1, !0), tisk = game.add.audio("tisk", 1, !1), woosh1 = game.add.audio("woosh1", 1, !1), woosh2 = game.add.audio("woosh2", 1, !1), click = game.add.audio("click", 1, !1), bell = game.add.audio("bell", 1, !1), levelWin = game.add.audio("levelWin", 1, !1), levelLose = game.add.audio("levelLose", 1, !1), pew = game.add.audio("pew", 1, !1), splort = game.add.audio("splort", 1, !1), ingameSounds.push(deepfry), ingameSounds.push(frying), ingameSounds.push(cut), ingameSounds.push(grilling), ingameSounds.push(humpf), ingameSounds.push(humpf2), ingameSounds.push(juicing), ingameSounds.push(ticking), ingameSounds.push(tisk), ingameSounds.push(splort), ingameSounds.push(pew), ingameSounds.push(bell), themeSounds.push(theme), themeSounds.push(levelWin), themeSounds.push(levelLose), interfaceSounds.push(cashin), interfaceSounds.push(schclack), interfaceSounds.push(schclick), interfaceSounds.push(woosh1), interfaceSounds.push(woosh2), interfaceSounds.push(click), theme.play()
}, window.exportRoot = new Object, window.exportRoot.onBannerOpen = onBannerOpen, window.exportRoot.onBannerClose = onBannerClose, CookingGame.Sounds.prototype = Object.create(Phaser.State.prototype), CookingGame.Sounds.prototype.constructor = CookingGame.Sounds, CookingGame.Sounds.prototype.soundsOff = function() {}, CookingGame.Sounds.prototype.soundsOn = function() {};
var pause = !1,
    addjustOnce, uiBtnsGroup, pauseScreenGroup, _sprite, chenarPause, continueButton, homeButton, message1, message2;
CookingGame.Buttons = function(t, e) {
    "use strict";
    this.game = t, this.data = e, addjustOnce = !0, uiBtnsGroup = t.add.group()
}, CookingGame.Buttons.prototype.createButton = function(t, e, i, s, a) {
    var n, t, o = !1;
    switch (t) {
        case "more-games":
            n = goToPlaypod, t = "buton-more-games";
            break;
        case "play":
            n = state_menu.startGame, t = "buton-play";
            break;
        case "sound":
            n = stopSounds, t = "sound-button";
            break;
        case "pause":
            n = pauseGame, t = "pause-button", pause = !1;
            break;
        case "pause-green":
            n = pauseGame, t = "pause-button-green", pause = !1;
            break;
        case "credits":
            n = showCredits, t = "buton-credits";
            break;
        case "back":
            n = backToMainMenu, t = "resume-button", o = !0
    }
    return this.btn = this.game.add.button(e, i, ATLAS, n, a, t, t), this.btn.bringToTop(), this.btn.anchor.set(.5), o && this.btn.scale.setTo(-1, 1), "sound-button" == t && (0 == game.sound.mute ? this.btn.setFrames("sound-button", "sound-button", "sound-button", "sound-button") : this.btn.setFrames("sound-off-button", "sound-off-button", "sound-off-button", "sound-off-button")), uiBtnsGroup.add(this.btn), this.btn
}, CookingGame.Prefab = function(t, e, i) {
    "use strict";
    Phaser.Sprite.call(this, t.game, e.x, e.y, i.texture), this.game_state = t, groups[i.group].add(this)
}, CookingGame.Prefab.prototype = Object.create(Phaser.Sprite.prototype), CookingGame.Prefab.prototype.constructor = CookingGame.Prefab, CookingGame.BgTransition = function(t, e) {
    "use strict";
    var i = {
        x: 0,
        y: 0
    };
    CookingGame.Prefab.call(this, t, i, {
        group: "transition"
    }), this.game_state = t, this.level_data = e, this.create()
}, CookingGame.BgTransition.prototype = Object.create(CookingGame.Prefab.prototype), CookingGame.BgTransition.prototype.constructor = CookingGame.BgTransition, CookingGame.BgTransition.prototype.create = function() {
    this.bgUp = this.game_state.game.add.sprite(0, -302, "transition"), this.bgDown = this.game_state.game.add.sprite(this.game_state.world.centerX, 752, "transition"), this.bgDown.anchor.set(.5, .5), this.bgDown.scale.x *= -1, this.bgDown.scale.y *= -1
}, CookingGame.BgTransition.prototype.actionIn = function(t) {
    transGroup.add(this.bgUp), transGroup.add(this.bgDown), this.bgDownTween && game.tween && game.tween.remove(this.bgDownTween), this.bgUpTween && game.tween && game.tween.remove(this.bgUpTween), this.bgDown.y = 752, this.bgUp.y = -302, this.showTransition(), this.bgDownTween = game.add.tween(this.bgDown).to({
        y: 450
    }, 400, "Linear", !0), this.bgUpTween = game.add.tween(this.bgUp).to({
        y: 0
    }, 400, "Linear", !0).onComplete.addOnce(t, this)
}, CookingGame.BgTransition.prototype.actionOut = function(t, e) {
    transGroup.add(this.bgUp), transGroup.add(this.bgDown), t || (t = this.finAnim), this.bgDownTween && game.tween.remove(this.bgDownTween), this.bgUpTween && game.tween.remove(this.bgUpTween), this.timeOut && game.time.remove(this.timeOut), this.bgDown.y = 450, this.bgUp.y = 0, this.timeOut = game.time.events.add(300, function() {
        this.bgDownTween = game.add.tween(this.bgDown).to({
            y: 752
        }, 400, "Linear", !0, 0), this.bgUpTween = game.add.tween(this.bgUp).to({
            y: -302
        }, 400, "Linear", !0, 0).onComplete.addOnce(t, e)
    }, this)
}, CookingGame.BgTransition.prototype.showTransition = function() {
    this.bgUp.visible = !0, this.bgDown.visible = !0
}, CookingGame.BgTransition.prototype.goToLevel = function() {}, CookingGame.BgTransition.prototype.finAnim = function() {}, CookingGame.Player = function(t, e, i, s) {
    "use strict";
    CookingGame.Prefab.call(this, t, e, i), this.curentLevelData = s, this.walking_speed = 350, this.state = 0, this.scaleQuantifier = 1, this.hasItem = !1, this.currentItem = "", this.minScale = .75, this.maxScaleDiff = 1 - this.minScale, this.minX = 105 + this.width / 2, this.maxX = 400 + this.width / 2, this.minY = 210 + this.height / 3, this.maxY = 375 + this.height / 3, this.dy = this.maxY - this.minY, this.orientationX = "", this.orientationY = "", this.moveTween = this.game.add.tween(this), this.scaleTween = this.game.add.tween(this.scale), this.plate = this.game.add.sprite(0, 0, ATLAS, "farfurie-mana"), this.plate.anchor.setTo(.5, .5), this.addChild(this.plate), this.plate.visible = !1, this.plate_position_front = {
        x: 71,
        y: -114
    }, this.plate_position_side = {
        x: 1,
        y: -109
    }, this.plate.position = this.plate_position_front, this.itemImage = this.game.add.sprite(0, 0), this.itemImage.visible = !1, this.itemImage.anchor.setTo(.5, .6), this.itemImage.scale.setTo(.8, .8), this.addChild(this.itemImage), this.burgerView = this.game.add.sprite(0, 0), this.burgerView.visible = !0, this.burgerView.anchor.setTo(.5, .6), this.burgerView.scale.setTo(.7, .7), this.addChild(this.burgerView), this.animations.add("idle_front", [14]), this.animations.add("idle_front_order", [13]), this.animations.add("idle_side", [20]), this.animations.add("idle_side_order", [10]), this.animations.add("walk_back", [9, 7, 6, 5, 4]), this.animations.add("walk_back_order", [8, 3, 2, 1, 23]), this.animations.add("walk_side", [12, 21, 16, 15, 0]), this.animations.add("walk_side_order", [11, 19, 18, 22, 17]), this.animations.play("idle_front", 6, !0), this.anchor.setTo(.5, .7), this.playerSignal = new Phaser.Signal
}, CookingGame.Player.prototype = Object.create(CookingGame.Prefab.prototype), CookingGame.Player.prototype.constructor = CookingGame.Player, CookingGame.Player.prototype.update = function() {
    "use strict"
}, CookingGame.Player.prototype.moveTo = function(t, e) {
    var i;
    if (e < this.minY ? e = this.minY : e > this.maxY && (e = this.maxY), this.maxX = 426 + 140 * (e - this.minY) / (this.maxY - this.minY), t < this.minX ? t = this.minX : t > this.maxX && (t = this.maxX), t == this.x && e == this.y) return void this.onMoveComplete(this);
    var s = this.x - t,
        a = this.y - e;
    i = Math.sqrt(s * s + a * a) / this.walking_speed * 1e3, this.scaleQuantifier = 1 - (this.maxY - e) / this.dy * this.maxScaleDiff, e >= this.y ? (this.orientationY = "front", this.isBack = -1) : (this.orientationY = "back", this.isBack = 1), t > this.x ? (this.orientationX = "right", this.scale.x < 0 ? (this.scaleCoeff = 1 * this.isBack, this.scale.x *= -1 * this.isBack) : (this.scaleCoeff = 1 * this.isBack, this.scale.x *= 1 * this.isBack)) : t < this.x && (this.orientationX = "left", this.scale.x > 0 ? (this.scaleCoeff = -1 * this.isBack, this.scale.x *= -1 * this.isBack) : (this.scaleCoeff = -1 * this.isBack, this.scale.x *= 1 * this.isBack)), this.moveTween.stop(!1), this.scaleTween.stop(!1), this.scaleTween = this.game.add.tween(this.scale).to({
        x: this.scaleQuantifier * this.scaleCoeff,
        y: this.scaleQuantifier
    }, i, "Linear", !0, 0), this.moveTween = this.game.add.tween(this).to({
        x: t,
        y: e
    }, i, "Linear", !0, 0), this.moveTween.onComplete.add(this.onMoveComplete, this), this.walk()
}, CookingGame.Player.prototype.walk = function() {
    this.orientationX, "front" == this.orientationY ? this.hasItem ? (this.changeAnimation("walk_side_order", !0), this.plate.position = this.plate_position_front) : this.changeAnimation("walk_side", !0) : this.hasItem ? (this.changeAnimation("walk_back_order", !0), this.plate.position = this.plate_position_front) : this.changeAnimation("walk_back", !0), this.itemImage.position = this.plate.position, this.burgerView.position = this.plate.position
}, CookingGame.Player.prototype.onMoveComplete = function(t) {
    "front" == this.orientationY ? this.hasItem ? (this.changeAnimation("idle_front_order", !0), this.plate.position = this.plate_position_front) : this.changeAnimation("idle_front", !0) : this.hasItem ? (this.changeAnimation("idle_side_order", !0), this.plate.position = this.plate_position_side) : this.changeAnimation("idle_side", !0), this.x > 437 && (this.orientationX = "right", this.scale.x < 0 ? (this.scaleCoeff = 1 * this.isBack, this.scale.x *= -1 * this.isBack) : (this.scaleCoeff = 1 * this.isBack, this.scale.x *= 1 * this.isBack), this.scale.setTo(this.scaleQuantifier * this.scaleCoeff, this.scaleQuantifier)), this.itemImage.position = this.plate.position, this.burgerView.position = this.plate.position, this.playerSignal.dispatch()
}, CookingGame.Player.prototype.changeAnimation = function(t, e) {
    this.animations.play(t, 8, e)
}, CookingGame.Player.prototype.takeItem = function(t, e) {
    return t && t.length > 0 ? (this.burgerView.removeChildren(), this.recipe = t, this.sortBurger(), this.hasItem = !0, this.plate.visible = !0, "front" == this.orientationY ? (this.changeAnimation("idle_front_order", !0), this.plate.position = this.plate_position_front) : (this.changeAnimation("idle_side_order", !0), this.plate.position = this.plate_position_side), void(this.burgerView.position = this.plate.position)) : (this.hasItem = !0, this.plate.visible = !0, this.lastItem = this.currentItem, this.currentItem = t, this.recipe = null, null == this.currentItem || 0 == this.currentItem.length ? (this.currentItem = null, this.hasItem = !1, this.plate.visible = !1, this.itemImage.visible = !1, this.burgerView.removeChildren(), void("front" == this.orientationY ? this.changeAnimation("idle_front", !0) : this.changeAnimation("idle_side", !0))) : (this.burgerView.removeChildren(), this.itemImage.visible = !0, this.itemImage.loadTexture(ATLAS, getPlateIngredientTexture(t.id, t.img)), "front" == this.orientationY ? (this.changeAnimation("idle_front_order", !0), this.plate.position = this.plate_position_front) : (this.changeAnimation("idle_side_order", !0), this.plate.position = this.plate_position_side), void(this.itemImage.position = this.plate.position)))
}, CookingGame.Player.prototype.sortBurger = function() {
    for (var t = [], e = ["i_22", "i_11", "i_16", "i_17", "i_23", "i_24", "i_06", "i_19", "i_18", "i_02", "i_12", "i_20", "i_25", "i_21", "i_13"], i = 0; i < e.length; i++)
        for (var s = 0; s < this.recipe.length; s++) e[i] == this.recipe[s].id && t.push(this.recipe[s]);
    for (var a = 0, n = !1, o = 0; o < t.length; o++) {
        var r = t[o].img,
            h = 0,
            l = 0;
        "i_06" == t[o].id && (r = "frunze-lettuce"), "i_02" == t[o].id && (r = "cheese-slice", h = 2, l = 2), "i_12" == t[o].id && (r = "ketchup", h = 2, l = 2), "i_13" == t[o].id && (r = "mustard"), "i_19" == t[o].id && (r = "tomato-slice"), "i_22" == t[o].id && (r = "cartofi-prajiti-langa-burger"), "i_25" == t[o].id && (r = "sliced-pickle", h = 6, l = 5), "i_11" == t[o].id && (r = "chifla-jos", n = !0), a += h;
        var d = this.game.add.sprite(0, a, ATLAS, r);
        d.anchor.set(.5), this.burgerView.addChild(d), a -= 5 + l
    }
    if (n) {
        var d = this.game.add.sprite(0, a, ATLAS, "chifla-sus");
        d.anchor.set(.5), this.burgerView.addChild(d), a -= 5
    }
}, CookingGame.Player.prototype.addItem = function(t, e) {
    if (this.recipe && this.recipe.length > 0) {
        for (var i = 0; i < this.recipe.length; i++)
            if (this.recipe[i].id == t.id) return;
        return this.burgerView.removeChildren(), this.recipe.push(t), this.sortBurger(), this.hasItem = !0, this.plate.visible = !0, "front" == this.orientationY ? (this.changeAnimation("idle_front_order", !0), this.plate.position = this.plate_position_front) : (this.changeAnimation("idle_side_order", !0), this.plate.position = this.plate_position_side), void(this.burgerView.position = this.plate.position)
    }
}, CookingGame.Player.prototype.hasRecipe = function(t) {
    if (null == this.recipe) return !1;
    if (this.recipe.length != t.length) return !1;
    for (var e, i = 0; i < t.length; i++) {
        e = !1;
        for (var s = 0; s < this.recipe.length; s++) t[i] == this.recipe[s].id && (e = !0);
        if (0 == e) return !1
    }
    return !0
}, CookingGame.Player.prototype.isItemInPlate = function(t) {
    if (null == this.recipe) return !1;
    for (var e = 0; e < this.recipe.length; e++)
        if (t == this.recipe[e].id) return !0;
    return !1
}, CookingGame.Clients = function(t, e, i, s) {
    "use strict";
    var a = {
            x: 0,
            y: 0
        },
        n = {
            group: "clients"
        };
    CookingGame.Prefab.call(this, t, a, n), this.clients = e, this.data = i, this.levelData = s, this.maxClients = s.maxClients, this.game_state = t, this.currentClients = [], this.positions = [], this.positions.push({
        x: 765,
        y: 350
    }), this.positions.push({
        x: 692,
        y: 340
    }), this.positions.push({
        x: 620,
        y: 330
    }), this.positions.push({
        x: 544,
        y: 320
    }), this.clientRate = s.clientRate, this.timeTillClient = 1, this.levelData.isTutorial && (this.isTutorial = !0, this.firstClient = !0, this.secondClient = !0), this.gameOver = !1, this.shouldStop = !1, this.clientsSignal = new Phaser.Signal
}, CookingGame.Clients.prototype = Object.create(CookingGame.Prefab.prototype), CookingGame.Clients.prototype.constructor = CookingGame.Clients, CookingGame.Clients.prototype.onTick = function() {
    "use strict";
    for (var t = 0; t < this.currentClients.length; t++) "angry" != this.currentClients[t].status && (this.currentClients[t].patience, this.currentClients[t].maxPatience);
    this.gameOver || this.currentClients.length < this.maxClients && (this.timeTillClient -= 1, this.timeTillClient <= 0 && (this.getClient(), this.timeTillClient = this.clientRate + 2 * Math.random()))
}, CookingGame.Clients.prototype.getClient = function() {
    "use strict";
    var t = Math.floor(Math.random() * this.levelData.clients.length),
        e = this.levelData.clients[t];
    this.levelData.clients.splice(t, 1);
    var i = Math.floor(Math.random() * this.positions.length),
        s = this.positions[i];
    this.positions.splice(i, 1);
    var a = null;
    a = this.game_state.game.add.sprite(0, 0);
    var n = this.game_state.game.add.sprite(0, 0, ATLAS, "client" + e),
        o = this.game_state.game.add.sprite(0, 0, ATLAS, "glow-clienti");
    o.y += o.height / 2, o.alpha = .85, a.addChild(o), a.addChild(n), a.leaving = !1, a.position = s, n.anchor.setTo(.5, 1), o.anchor.setTo(.5, 1), a.id = e, a.aura = o, a.aura.visible = !1;
    for (var r = 0; r < this.clients.length; r++)
        if (this.clients[r].id == a.id) {
            a.burgers = [];
            for (var h = 0; h < this.clients[r].burgers.length; h++) a.burgers.push(this.clients[r].burgers[h]);
            a.patience = this.clients[r].patience, a.maxPatience = this.clients[r].patience, this.purgeInactiveBurgersFromClient(a)
        }
    this.isTutorial && (a.patience = 70), this.addChild(a), a.inputEnabled = !0, n.inputEnabled = !0, n.input.useHandCursor = !0, n.input.pixelPerfectOver = !0, n.input.pixelPerfectClick = !0, n.events.onInputDown.add(function() {
        this.onClientClick(n, a)
    }, this), this.currentClients.push(a);
    for (var l, d = 0; d < this.currentClients.length; d++)
        for (var c = 0; c < this.currentClients.length; c++) this.currentClients[c].x < this.currentClients[d].x && c > d && (l = this.currentClients[c], this.currentClients[c] = this.currentClients[d], this.currentClients[d] = l);
    a.alpha = 0;
    var p = a.x;
    a.x += 20;
    var m = this.game_state.game.add.tween(a).to({
        alpha: 1,
        x: p
    }, 1e3, Phaser.Easing.Sinusoidal.Out);
    m.start(), m.onComplete.add(function() {
        this.setClientStatus(a, "shown")
    }, this);
    for (var g = 0; g < this.currentClients.length; g++) this.addChild(this.currentClients[g]);
    a.initialY = a.y
}, CookingGame.Clients.prototype.setClientStatus = function(t, e) {
    "use strict";
    if ("shown" == e) {
        t.burgers || (t.burgers = ["r_01,r_02"]);
        var i = Math.floor(Math.random() * t.burgers.length);
        this.isTutorial && (this.firstClient ? (i = 0, this.firstClient = !1) : this.secondClient && (i = 0, this.secondClient = !1));
        for (var s = t.burgers[i], a = 0; a < this.data.items.length; a++) this.data.items[a].id == s && (t.burger = s, t.burgerRecipe = this.data.items[a].recipe, t.burgerDiff = this.data.items[a].difficulty, t.burgerImg = this.data.items[a].img);
        this.clientsSignal.dispatch(t, "arrived")
    }
    if ("angry" == e) {
        var i = Math.random();
        i < .5 ? humpf.play() : humpf2.play(), t.removeChildren();
        var n = this.game_state.game.add.sprite(0, 0, ATLAS, "client" + t.id + "-sad");
        t.addChild(t.aura), t.addChild(n), t.addChild(t.request), n.anchor.setTo(.5, 1), n.inputEnabled = !0, n.input.useHandCursor = !0, n.input.pixelPerfectOver = !0, n.input.pixelPerfectClick = !0, n.events.onInputDown.add(function() {
            this.onClientClick(n, t)
        }, this)
    }
    if ("happy" == e) {
        t.addChild(t.aura), t.removeChildren();
        var n = this.game_state.game.add.sprite(0, 0, ATLAS, "client" + t.id + "-happy");
        t.addChild(n), n.anchor.setTo(.5, 1), n.inputEnabled = !0, n.input.useHandCursor = !0, n.input.pixelPerfectOver = !0, n.input.pixelPerfectClick = !0, n.events.onInputDown.add(function() {
            this.onClientClick(n, t)
        }, this)
    }
    t.status = e, this.animateClient(t, e)
}, CookingGame.Clients.prototype.animateClient = function(t, e) {
    t.leaving || t.animating || (t.animating = !0, this.game_state.game.add.tween(t).to({
        y: t.initialY + 4
    }, 3200, Phaser.Easing.Sinusoidal.InOut, !0, 800, -1, !0))
}, CookingGame.Clients.prototype.clientLeave = function(t) {
    "use strict";
    t.leaving = !0;
    var e = this.game_state.game.add.tween(t).to({
        alpha: 0,
        x: t.x + 20
    }, 800, Phaser.Easing.Sinusoidal.In, !0, 600);
    e.start(), e.onComplete.add(function() {
        this.resetClient(t)
    }, this)
}, CookingGame.Clients.prototype.satisfyClient = function(t, e) {
    "use strict";
    if (!t.leaving) {
        if (t.isThirsty) {
            var i, s = t.request.getBarPercent();
            t.request.signal.dispatch(t.request, "disappeared"), i = "happy" == t.status ? 1 : .8;
            var a = (5 + 50 * s) * i,
                n = {
                    cash: a,
                    pos: t.position
                };
            this.clientsSignal.dispatch(n, "cash"), r = !1
        } else {
            var i, s = t.request.getBarPercent();
            t.request.signal.dispatch(t.request, "disappeared"), "shown" == t.status ? (this.setClientStatus(t, "happy"), i = 1) : i = .8, e && (this.setClientStatus(t, "angry"), i -= .2);
            var a = (30 + 3 * t.burgerDiff + 80 * s) * i,
                n = {
                    cash: a,
                    pos: t.position
                };
            this.clientsSignal.dispatch(n, "cash");
            var o = Math.random();
            this.isDozator || (o = 1);
            var r = !1;
            o <= .15 && (r = !0, t.burgers = [], t.patience = t.maxPatience, t.burger = "i_15", t.burgerRecipe = "i_15", t.burgerDiff = 0, t.burgerImg = "pahar-suc-portocale", t.inputEnabled = !0, this.clientsSignal.dispatch(t, "thirsty"))
        }
        r ? t.isThirsty = !0 : this.clientLeave(t)
    }
}, CookingGame.Clients.prototype.activateClient = function(t) {
    "use strict";
    for (var e = 0; e < this.currentClients.length; e++) this.currentClients.length > e && this.currentClients[e] && (t == this.currentClients[e] ? this.currentClients[e].aura.visible = !0 : this.currentClients[e].aura.visible = !1);
    return t
}, CookingGame.Clients.prototype.disappointClient = function(t) {
    "use strict";
    t.leaving || this.isTutorial || this.shouldStop || (this.clientsSignal.dispatch(t.request, "disappointed"), t.request.signal.dispatch(t.request, "disappeared"), this.clientLeave(t))
}, CookingGame.Clients.prototype.wrongOrderToClient = function(t) {
    "use strict";
    t.leaving || t.request.showWrongOrder()
}, CookingGame.Clients.prototype.onClientClick = function(t, e) {
    this.game.input.activePointer.isDown && this.clientsSignal.dispatch(e, "move")
}, CookingGame.Clients.prototype.resetClient = function(t) {
    "use strict";
    this.clientsSignal.dispatch(t.request, "left"), console.log("IS SAME ACTIVE CLIENT??", this.game_state.activeClient, t, this.game_state.activeClient == t), this.game_state.activeClient == t && (this.game_state.activeClient = null), this.levelData.clients.push(t.id), t.inputEnabled = !1;
    for (var e = 0; e < this.currentClients.length; e++)
        if (t == this.currentClients[e]) {
            this.currentClients.splice(e, 1), t.x -= 20, this.positions.push(t.position);
            break
        }
    t.leaving = !1, t.destroy(), t = null, console.log("Remaining CLIENT??", this.currentClients[0]), this.currentClients[0] && this.clientsSignal.dispatch(this.currentClients[0], "remaining")
}, CookingGame.Clients.prototype.purgeInactiveBurgersFromClient = function(t) {
    "use strict";
    for (var e = 0; e < t.burgers.length; e++) isObjInArray(t.burgers[e], this.levelData.burgers) || (t.burgers.splice(e, 1), e--)
}, CookingGame.Clients.prototype.reset = function() {
    for (var t = 0; t < this.currentClients.length; t++) this.levelData.clients.push(this.currentClients[t].id)
}, CookingGame.Clients.prototype.pause = function() {
    for (var t = 0; t < this.currentClients.length; t++) this.currentClients[t].request && this.currentClients[t].request.pause()
}, CookingGame.Clients.prototype.resume = function() {
    for (var t = 0; t < this.currentClients.length; t++) this.currentClients[t].request && this.currentClients[t].request.resume()
}, CookingGame.GameInterface = function(t, e) {
    "use strict";
    var i = {
            x: 0,
            y: 0
        },
        s = {
            group: "interface"
        };
    CookingGame.Prefab.call(this, t, i, s), this.game_state = t, this.data = e, this.steps = [], this.coins = 0, this.signal = new Phaser.Signal, this.tweenableConsole = this.game_state.game.add.sprite(0, 0), this.tweenableConsole.y -= 126, this.bg = this.game_state.game.add.sprite(0, 0, ATLAS, "consola-ingrediente"), this.tweenableConsole.addChild(this.bg), this.consoleItems = this.game_state.game.add.sprite(0, 0), this.tweenableConsole.addChild(this.consoleItems), this.addChild(this.tweenableConsole), this.dictionary = {
        i_01: "obiecte-mici-consola/raw-burger-copy",
        i_02: "obiecte-mici-consola/cheese-copy",
        i_03: "obiecte-mici-consola/bacon-copy",
        i_04: "obiecte-mici-consola/egg",
        i_05: "obiecte-mici-consola/tomato",
        i_06: "obiecte-mici-consola/lettuce",
        i_07: "obiecte-mici-consola/onion",
        i_08: "obiecte-mici-consola/potato",
        i_09: "obiecte-mici-consola/raw-shrimp",
        i_10: "obiecte-mici-consola/raw-squid",
        i_11: "obiecte-mici-consola/chifla-mana",
        i_12: "obiecte-mici-consola/ketchup",
        i_13: "obiecte-mici-consola/mustard",
        i_14: "obiecte-mici-consola/castravete",
        i_15: "obiecte-mici-consola/pahare",
        s_01: "obiecte-mici-consola/plita-chiftele-mica-outline",
        s_02: "obiecte-mici-consola/tigaie",
        s_03: "obiecte-mici-consola/blat-cutit",
        s_04: "obiecte-mici-consola/friteuza",
        s_06: "obiecte-mici-consola/dozator",
        i_16: "obiecte-mici-consola/fried-burger",
        i_17: "obiecte-mici-consola/crispy-bacon",
        i_18: "obiecte-mici-consola/ou-prajit",
        i_19: "obiecte-mici-consola/tomato-slices-mana",
        i_20: "obiecte-mici-consola/onion-slices",
        i_21: "obiecte-mici-consola/cartofi-taiati",
        i_22: "obiecte-mici-consola/cartofi-prajiti-mana",
        i_23: "obiecte-mici-consola/cooked-shrimp-copy",
        i_24: "obiecte-mici-consola/fried-squid",
        i_25: "obiecte-mici-consola/sliced-pickle",
        r_01: "burger1",
        r_02: "burger2",
        r_03: "burger3",
        r_04: "burger4",
        r_05: "burger5",
        r_06: "burger6",
        r_07: "burger7",
        r_08: "burger8",
        r_09: "burger9"
    }, this.orderVect = ["i_22", "i_11", "i_16", "i_17", "i_23", "i_24", "i_06", "i_19", "i_18", "i_02", "i_12", "i_20", "i_25", "i_21", "i_13"], this.coinBg = this.game_state.game.add.sprite(4, 538, ATLAS, "consola-bani"), this.coinBg.anchor.set(.5), this.coinBg.x += this.coinBg.width / 2, this.coinBg.y += this.coinBg.height / 2, this.coinTextHolder = this.game_state.game.add.sprite(135, 566), this.coinTextHolder.anchor.setTo = .5;
    var a = {
        font: "CooperBlackStd",
        fill: "#ffffff",
        fontSize: 26
    };
    this.coinTxt = this.game.add.text(0, 0, "0", a), this.coinTxt.anchor.set(.5), this.addChild(this.coinBg), this.addChild(this.coinTxt), this.coinTxt.position = {
        x: this.coinBg.x + this.coinBg.width - 16 - this.coinTxt.width / 2,
        y: 552
    }, this.coinTxt.y += this.coinTxt.height / 2, this.setCoins(0), this.scSupport = this.game_state.game.add.sprite(735, 74, ATLAS, "suport-steluta-ingame"), this.scStar = this.game_state.game.add.sprite(735, 74, ATLAS, "steluta-ingame"), this.scStarLeft = this.game_state.game.add.sprite(755, 107, ATLAS, "steluta-ingame-broken2"), this.scStarRight = this.game_state.game.add.sprite(755, 107, ATLAS, "steluta-ingame-broken1"), this.scStarLeft.anchor.setTo(.5, .72), this.scStarRight.anchor.setTo(.5, .72), this.starMoney = this.game_state.game.add.sprite(0, 0), this.smSupport = this.game_state.game.add.sprite(146, 547, ATLAS, "suport-steluta-ingame"), this.smStar = this.game_state.game.add.sprite(146, 547, ATLAS, "steluta-ingame"), this.starMask = this.game_state.game.add.graphics(0, 0), this.starMask.beginFill(16777215), this.starMask.moveTo(0, 0), this.starMask.lineTo(45, 0), this.starMask.lineTo(45, 1), this.starMask.lineTo(0, 1), this.starMask.lineTo(0, 0), this.starMask.endFill(), this.starMask.position = {
        x: 146,
        y: 586
    };
    var n = new Phaser.Graphics(game, 0, 0);
    n.beginFill(16777215, .4), n.drawRect(0, 0, 706, 72), n.endFill(), this.overlay = this.game.add.image(5, 6, n.generateTexture()), this.overlay.visible = !1, this.smStar.mask = this.starMask, this.tweenableConsole.addChild(this.scSupport), this.addChild(this.smSupport), this.tweenableConsole.addChild(this.scStar), this.addChild(this.smStar), this.addChild(this.starMask), this.tweenableConsole.addChild(this.scStarLeft), this.tweenableConsole.addChild(this.scStarRight), this.tweenableConsole.addChild(this.overlay), this.overlay.visibe = !1, this.scStarLeft.visible = !1, this.scStarRight.visible = !1, this.starBroken = !1, this.checkMark = this.game.add.sprite(0, 0, ATLAS, "checkmark-mare"), this.checkMark.scale.set(1.3), this.checkMark.position = {
        x: 38,
        y: 40
    }, this.addChild(this.checkMark), this.checkMark.visible = !1
}, CookingGame.GameInterface.prototype = Object.create(CookingGame.Prefab.prototype), CookingGame.GameInterface.prototype.constructor = CookingGame.GameInterface, CookingGame.GameInterface.prototype.update = function() {
    "use strict";
    this.tweenableConsole.addChild(this.scSupport), this.tweenableConsole.addChild(this.scStar), this.tweenableConsole.addChild(this.scStarLeft), this.tweenableConsole.addChild(this.scStarRight), this.tweenableConsole.addChild(this.overlay)
}, CookingGame.GameInterface.prototype.reset = function() {
    "use strict";
    this.coins = 0
}, CookingGame.GameInterface.prototype.addStarOnTop = function() {
    "use strict";
    this.coins = 0
}, CookingGame.GameInterface.prototype.addCash = function(t, e) {
    "use strict";
    var i = this.game_state.game.add.sprite(e.x, e.y, ATLAS, "dropped-money");
    i.value = t, i.anchor.set(.5);
    var s = e.x - 80 - Math.floor(20 * Math.random()),
        a = 557 - Math.floor(10 * Math.random());
    this.oldCoins = this.coins, this.coins += t, i.scale.set(0);
    this.game_state.game.add.tween(i.scale).to({
        x: 1,
        y: 1
    }, 400, Phaser.Easing.Back.Out, !0);
    this.game_state.game.add.tween(i).to({
        x: [e.x, s, 120],
        y: [e.y, a, 567]
    }, 1400, Phaser.Easing.Quadratic.In, !0, 1300).interpolation(function(t, e) {
        return Phaser.Math.bezierInterpolation(t, e)
    }).onComplete.add(function() {
        this.onCoinCashed(t)
    }, this), this.addChild(i), this.addChild(this.coinBg), this.addChild(this.coinTxt)
}, CookingGame.GameInterface.prototype.onCoinCashed = function(t) {
    "use strict";
    this.coinsTween && this.coinsTween.stop(), this.bgScaleMaxTween && this.bgScaleMaxTween.stop(), this.txtScaleMaxTween && this.txtScaleMaxTween.stop(), this.bgScaleMinTween && this.bgScaleMinTween.stop(), this.txtScaleMinTween && this.txtScaleMinTween.stop(), this.coinBg.scale.set(1), this.coinTxt.scale.set(1);
    var e = {
        tCoins: this.oldCoins
    };
    this.bgScaleMaxTween = this.game_state.game.add.tween(this.coinBg.scale).to({
        x: 1.1,
        y: 1.1
    }, 200, Phaser.Easing.Sinusoidal.InOut, !0), this.txtScaleMaxTween = this.game_state.game.add.tween(this.coinTxt.scale).to({
        x: 1.1,
        y: 1.1
    }, 200, Phaser.Easing.Sinusoidal.InOut, !0), this.bgScaleMinTween = this.game_state.game.add.tween(this.coinBg.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Back.Out, !0, 200), this.txtScaleMinTween = this.game_state.game.add.tween(this.coinTxt.scale).to({
        x: 1,
        y: 1
    }, 200, Phaser.Easing.Back.Out, !0, 200), this.coinsTween = this.game_state.game.add.tween(e).to({
        tCoins: this.coins
    }, 200, Phaser.Easing.Linear.None, !0), this.coinsTween.onUpdateCallback(function() {
        this.setCoins(e.tCoins)
    }, this), this.coinsTween.onComplete.add(function() {
        this.setCoins(this.coins)
    }, this), cashin.play();
    var i = this.coins / this.starCashRequirement;
    i > 1 && (i = 1);
    var s = {
            height: this.starMask.height
        },
        a = this.starMask;
    this.maskScaleTween = this.game_state.game.add.tween(s).to({
        height: 36 * i
    }, 500, Phaser.Easing.Sinusoidal.Out, !0, 0).onUpdateCallback(function() {
        a.height = s.height, a.y = 587 - s.height
    })
}, CookingGame.GameInterface.prototype.breakStar = function(t) {
    "use strict";
    this.starBroken || (this.starBroken = !0, this.scStarLeft.visible = !0, this.scStarRight.visible = !0, this.scStar.visible = !1, this.leftStarTween = this.game_state.game.add.tween(this.scStarLeft).to({
        y: 140,
        angle: -60,
        alpha: 0
    }, 1200, Phaser.Easing.Sinusoidal.In, !0, 0), this.rightStarTween = this.game_state.game.add.tween(this.scStarRight).to({
        y: 140,
        angle: 60,
        alpha: 0
    }, 1200, Phaser.Easing.Sinusoidal.In, !0, 0), this.supportTween = this.game_state.game.add.tween(this.scSupport).to({
        alpha: 0
    }, 1200, Phaser.Easing.Sinusoidal.In, !0, 0))
}, CookingGame.GameInterface.prototype.setCoins = function(t) {
    "use strict";
    this.coinTxt.text = Math.ceil(t), this.coinTxt.position = {
        x: this.coinBg.x + this.coinBg.width - 90,
        y: 552
    }, this.coinTxt.y += this.coinTxt.height / 2, this.coinTxt.x -= this.coinTxt.width / 2
}, CookingGame.GameInterface.prototype.getCoins = function() {
    return Math.ceil(this.coins)
}, CookingGame.GameInterface.prototype.toggleOverlay = function() {
    this.overlay.visible ? this.overlay.visible = !1 : this.overlay.visible = !0
}, CookingGame.GameInterface.prototype.tryCleanRecipe = function(t) {
    return !(!this.oldRecipe || this.oldRecipe != t) && (this.consoleItems.removeChildren(), this.checkMark.visible = !1, this.oldRecipe = null, !0)
}, CookingGame.GameInterface.prototype.checkRecipe = function(t) {
    if (this.oldRecipe && t) {
        var e = !1;
        if (t.length != this.oldRecipe.length) return void(this.checkMark.visible = !1);
        for (var i = 0; i < t.length; i++) {
            e = !1;
            for (var s = 0; s < this.oldRecipe.length; s++) this.oldRecipe[s] == t[i].id && (e = !0);
            if (0 == e) return void(this.checkMark.visible = !1)
        }
        this.addChild(this.checkMark), this.checkMark.visible = !0
    }
}, CookingGame.GameInterface.prototype.showRecipe = function(t, e) {
    "use strict";
    if (t && "i_15" != t && (!this.oldRecipe || this.oldRecipe != t)) {
        var i = 0;
        this.tweenableConsole.y < 0 && (this.game_state.game.add.tween(this.tweenableConsole).to({
            x: 0,
            y: 0
        }, 400, Phaser.Easing.Bounce.Out, !0), i += 400), this.oldRecipe = t;
        var s = i + .2 * Phaser.Timer.SECOND;
        this.stepObjects = [], this.toggle1 && game.time.events.remove(this.toggle1), this.toggle2 && game.time.events.remove(this.toggle2), this.toggle3 && game.time.events.remove(this.toggle3), this.toggle4 && game.time.events.remove(this.toggle4), this.toggle5 && game.time.events.remove(this.toggle5), this.toggle6 && game.time.events.remove(this.toggle6), this.overlay.visible = !1, this.toggle1 = game.time.events.add(0 * s, this.toggleOverlay, this), this.toggle2 = game.time.events.add(1 * s, this.toggleOverlay, this), this.toggle3 = game.time.events.add(2 * s, this.toggleOverlay, this), this.toggle4 = game.time.events.add(3 * s, this.toggleOverlay, this), this.toggle5 = game.time.events.add(4 * s, this.toggleOverlay, this), this.toggle6 = game.time.events.add(5 * s, this.toggleOverlay, this), this.steps = [];
        for (var a = 0; a < t.length; a++)
            for (var n = 0; n < this.data.items.length; n++)
                if (t[a] == this.data.items[n].id) {
                    var o = [];
                    this.data.items[n].hasOwnProperty("recipe") && (o.push(this.data.items[n].recipe[0]), o.push(this.data.items[n].recipe[1])), o.push(this.data.items[n].id), this.steps.push(o)
                }
        var r = 86,
            h = 25,
            l = r,
            d = !1,
            c = !1;
        this.consoleItems.removeChildren();
        var p = [];
        this.data.items.forEach(function(t) {
            "i" == t.id.charAt(0) && p.push(t)
        }, this);
        for (var m = [], a = 0; a < t.length; a++)
            for (var n = 0; n < p.length; n++) p[n].id == t[a] && m.push(p[n]);
        for (var g = [], u = 0; u < this.orderVect.length; u++)
            for (var y = 0; y < m.length; y++) this.orderVect[u] == m[y].id && g.push(m[y]);
        this.burgBmd && this.burgBmd.destroy(), this.burgBmd = game.add.bitmapData(150, 150), this.itemView = game.add.sprite(0, 0);
        for (var v = 100, f = !1, C = !1, n = 0; n < g.length; n++) {
            var _ = g[n].img,
                b = 0,
                k = 0;
            "i_06" == g[n].id && (_ = "frunze-lettuce"), "i_02" == g[n].id && (_ = "cheese-slice", b = 5, k = 5), "i_12" == g[n].id && (_ = "ketchup", b = 5, k = 5), "i_13" == g[n].id && (_ = "mustard"), "i_19" == g[n].id && (_ = "tomato-slice"), "i_22" == g[n].id && (_ = "cartofi-prajiti-langa-burger"), "i_25" == g[n].id && (_ = "sliced-pickle", b = 10, k = 3), "i_11" == g[n].id && (_ = "chifla-jos", f = !0), v += b;
            var T = game.add.sprite(0, v, ATLAS, _);
            console.log("CREATE BURGER BITMAP", T, T.width, T.height, this.burgBmd), "cartofi-prajiti-langa-burger" == _ ? (C = !0, this.burgBmd.draw(T, 0, v, T.width, T.height)) : this.burgBmd.draw(T, 30, v, T.width, T.height), T.anchor.set(.5), this.itemView.addChild(T), v -= 7 + k
        }
        if (f) {
            var T = game.add.sprite(0, v, ATLAS, "chifla-sus");
            this.burgBmd.draw(T, 30, v, T.width, T.height), T.anchor.set(.5), this.itemView.addChild(T), v -= 7
        }
        this.burgSpr && this.burgSpr.destroy(), this.burgSpr = game.add.sprite(0, 0, this.burgBmd), this.consoleItems.addChild(this.burgSpr), this.burgSpr.anchor.setTo(.5, .5), C ? (this.burgSpr.scale.setTo(.46, .46), this.burgSpr.x = 46, this.burgSpr.y = 31) : (this.burgSpr.scale.setTo(.54, .54), this.burgSpr.x = 46, this.burgSpr.y = 26), this.burgSpr.inputEnabled = !1, this.ignoreChildInput = !0, this.itemView.destroy();
        for (var u = 0; u < this.steps.length; u++) {
            var w = this.game_state.add.sprite(0, 0);
            w.computedWidth = 0, w.origX = r, w.origY = h, l = r;
            for (var y = 0; y < this.steps[u].length; y++) {
                if (0 != y && y == this.steps[u].length - 1) {
                    var S = this.game_state.game.add.sprite(0, 0, ATLAS, "egal");
                    S.anchor.setTo(.5, .5), r += S.width / 2, S.x = r, S.y = h, r += S.width / 2 + 5, w.computedWidth += S.width + 5, w.addChild(S)
                } else if (y >= 1) {
                    var G = this.game_state.game.add.sprite(0, 0, ATLAS, "plus");
                    G.anchor.setTo(.5, .5), r += G.width / 2, G.x = r, G.y = h, r += G.width / 2 + 5, w.computedWidth += G.width + 5, w.addChild(G)
                }
                var x = this.game_state.game.add.sprite(0, 0, ATLAS, this.dictionary[this.steps[u][y]]);
                (x.height > 39 || x.width > 66) && x.scale.set(.8), x.anchor.setTo(.5, .5), r += 5 + x.width / 2, x.x = r, x.y = h, r += x.width / 2 + 5, w.computedWidth += x.width + 5, w.addChild(x)
            }
            if (this.consoleItems.addChild(w), r - l >= 162)
                if (d) {
                    if (d = !1, h = 25, r = Math.max(r, l), c) {
                        var I = this.game_state.game.add.sprite(0, 0, ATLAS, "despartitor-consola-ingrediente");
                        r += 5, I.x = r, I.y = 5, r += I.width + 5, this.consoleItems.addChild(I)
                    }
                } else c = !0, d = !0, h = 59, r = l;
            w.condition = this.steps[u][this.steps[u].length - 1], w.precondition = this.steps[u][0], w.linie = game.add.sprite(0, 0, ATLAS, "linie"), w.linie.anchor.set(.5), w.linie.width = w.computedWidth, w.linie.x = w.linie.width / 2 + w.origX, w.linie.y = w.origY, w.addChild(w.linie), w.linie.visible = !1;
            var A = new Phaser.Graphics(game, 0, 0);
            A.beginFill(16777215, .35), console.log("COMPUTED WIDTH = ", w.computedWidth), w.computedWidth > 100 && (w.computedWidth += 10), A.drawRect(0, 0, w.computedWidth, 35), A.endFill(), w.highlight = this.game.add.image(0, 0, A.generateTexture()), w.highlight.anchor.set(.5), w.highlight.x = w.highlight.width / 2 + w.origX + 2.5, w.highlight.y = w.origY, w.addChild(w.highlight), w.highlight.visible = !1, this.stepObjects.push(w)
        }
        this.checkRecipe(t), this.signal.dispatch("recipe_shown")
    }
}, CookingGame.GameInterface.prototype.highlightStep = function(t, e) {
    for (var i = 0; i < this.stepObjects.length; i++) !e || this.stepObjects[i].condition != t && this.stepObjects[i].precondition != t || 0 != this.stepObjects[i].linie.visible ? this.stepObjects[i].highlight.visible = !1 : this.stepObjects[i].highlight.visible = !0
}, CookingGame.GameInterface.prototype.crossStep = function(t, e) {
    for (var i = 0; i < this.stepObjects.length; i++) this.stepObjects[i].condition == t && (this.stepObjects[i].linie.visible = e)
}, CookingGame.Timer = function(t) {
    "use strict";
    var e = {
            x: 0,
            y: 0
        },
        i = {
            group: "backgrounds"
        };
    CookingGame.Prefab.call(this, t, e, i), this.game_state = t, this.gameOver = !1, this.timer = this.game_state.game.time.create(!1), this.ticked = new Phaser.Signal, this.timerBG = this.game_state.game.add.sprite(163, 95, ATLAS, "ceas"), this.timerHand = this.game_state.game.add.sprite(0, 0, ATLAS, "arrow"), this.timerHand.anchor.setTo(.53, .8), this.timerHand.x = 195, this.timerHand.y = 125.4, this.addChild(this.timerBG), this.addChild(this.timerHand)
}, CookingGame.Timer.prototype = Object.create(CookingGame.Prefab.prototype), CookingGame.Timer.prototype.constructor = CookingGame.Timer, CookingGame.Timer.prototype.onTick = function() {
    this.ticked.dispatch(), this.gameOver || (this.timerHand.angle += this.angleStep, this.timeLeft -= 1), 0 == this.timeLeft && (this.gameOver = !0, this.ticked.dispatch("stop"))
}, CookingGame.Timer.prototype.initialize = function(t) {
    this.maxTime = t, this.timeLeft = t, this.angleStep = 360 / this.maxTime, this.timer.loop(1e3, this.onTick, this), this.timer.start()
}, CookingGame.Timer.prototype.reset = function() {
    this.timer.stop()
}, CookingGame.Timer.prototype.pause = function() {
    this.timer.pause()
}, CookingGame.Timer.prototype.resume = function() {
    this.timer.resume()
}, CookingGame.ClickableObject = function(t, e, i) {
    "use strict";
    if (CookingGame.Prefab.call(this, t, e, i), this.properties = i, this.group = i.group, this.objectName = i.objectName, this.properties.hasOwnProperty("animation") && (this.animationFrames = i.animation), this.properties.hasOwnProperty("img") && ("i" == this.properties.id.charAt(0) && this.properties.id.charAt(3) <= 8 && 0 == this.properties.id.charAt(2) ? this.view = this.game.add.sprite(0, 0, ATLAS, this.properties.img + "-tool") : this.view = this.game.add.sprite(0, 0, ATLAS, this.properties.img), this.addChild(this.view), "i_12" == this.properties.id || "i_13" == this.properties.id ? (this.view.anchor.setTo(.5, .5), this.origY = this.y) : this.view.anchor.set(.5)), "i_11" == this.properties.id) {
        var s = new Phaser.Graphics(game, 0, 0);
        s.beginFill(0, 0), s.drawRect(0, 0, 112, 108), s.endFill();
        var a = this.game.add.image(-56, -66, s.generateTexture());
        this.addChild(a)
    }
    if ("s_03" == this.properties.id) {
        var n = new Phaser.Graphics(game, 0, 0);
        n.beginFill(0, 0), n.drawRect(0, 0, 150, 90), n.endFill();
        var o = this.game.add.image(-70, -40, n.generateTexture());
        this.addChild(o)
    }
    "plate" == this.properties.name && (this.plateContents = [], this.currentItemY = 0, this.burgerView = this.game.add.sprite(0, 0), this.burgerView.anchor.set(.5), this.addChild(this.burgerView), this.orderVect = ["i_22", "i_11", "i_16", "i_17", "i_23", "i_24", "i_06", "i_19", "i_18", "i_02", "i_12", "i_20", "i_25", "i_21", "i_13"]), this.inputEnabled = !0, this.input.useHandCursor = !0
}, CookingGame.ClickableObject.prototype = Object.create(CookingGame.Prefab.prototype), CookingGame.ClickableObject.prototype.constructor = CookingGame.ClickableObject, CookingGame.ClickableObject.prototype.update = function() {}, CookingGame.ClickableObject.prototype.animate = function() {
    switch (this.properties.id) {
        case "s_01":
            grilling.play(), this.grillSprite = this.game.add.sprite(-52, -26, ATLAS, this.animationFrames[0]), this.addChild(this.grillSprite);
            var t = 1e3;
            this.grillTween = this.game.add.tween(this.grillSprite).to({
                alpha: 0
            }, t, Phaser.Easing.Sinusoidal.InOut, !0, 0), this.grillTween.onComplete.addOnce(this.onGrillAnimed, this);
            break;
        case "s_02":
            frying.play(), this.panTween = this.game.add.sprite(-91, -20.5), this.panTween.loadTexture(ATLAS, "ulei-tigaie1"), this.panTween.animations.add("ulei-tigaie", Phaser.Animation.generateFrameNames("ulei-tigaie", 1, 2), 25, !0), this.addChild(this.panTween), this.panTween.animations.play("ulei-tigaie", 2, !0);
            break;
        case "s_03":
            cut.play(), this.view.anchor.setTo(.25, .25), this.view.x -= this.view.width / 4, this.view.y -= this.view.height / 4;
            var t = 200;
            this.knifeTween = this.game.add.tween(this.view).to({
                angle: -10
            }, t, Phaser.Easing.Sinusoidal.InOut, !0, 0), this.knifeTween.onComplete.addOnce(this.onKnifeAnimated, this), this.cutsTween = this.game.add.sprite(-34, -24), this.cutsTween.loadTexture(ATLAS, "particule-taiat1"), this.cutsTween.animations.add("particule-taiat", Phaser.Animation.generateFrameNames("particule-taiat", 1, 2), 25, !0), this.addChild(this.cutsTween), this.cutsTween.animations.play("particule-taiat", 2.2, !0);
            break;
        case "s_04":
            deepfry.play(), this.fryTween = this.game.add.sprite(-79, -44.5), this.fryTween.loadTexture(ATLAS, "ulei-bulbuci1"), this.fryTween.animations.add("ulei-bulbuci", Phaser.Animation.generateFrameNames("ulei-bulbuci", 1, 3), 25, !0), this.addChild(this.fryTween), this.fryTween.animations.play("ulei-bulbuci", 10, !0);
            break;
        case "s_06":
            juicing.play()
    }
}, CookingGame.ClickableObject.prototype.explode = function() {
    switch (this.properties.id) {
        case "s_01":
            this.fire = game.add.sprite(5, -5), this.addChild(this.fire), this.fire.anchor.set(.5), this.fire.loadTexture("burn_ss", 0), this.fire.animations.add("burn"), this.fire.animations.play("burn", 30, !1), pew.play()
    }
}, CookingGame.ClickableObject.prototype.doInteractAnimation = function() {
    this.interactTween && this.interactTween.stop(), this.scale.set(1), "i_12" == this.properties.id || "i_13" == this.properties.id ? (splort.play(), this.interactInTween = this.game.add.tween(this.scale).to({
        x: 1.3,
        y: 1.3
    }, 150, Phaser.Easing.Sinusoidal.Out, !0, 0), this.interactOutTween = this.game.add.tween(this.scale).to({
        x: 1,
        y: 1
    }, 100, Phaser.Easing.Sinusoidal.Out, !0, 150), this.rotateInTween = this.game.add.tween(this).to({
        angle: 30,
        y: this.origY - 30
    }, 150, Phaser.Easing.Sinusoidal.Out, !0, 0), this.rotateOutTween = this.game.add.tween(this).to({
        angle: 0,
        y: this.origY
    }, 100, Phaser.Easing.Sinusoidal.Out, !0, 150)) : (this.interactInTween = this.game.add.tween(this.scale).to({
        x: 1.3,
        y: 1.3
    }, 150, Phaser.Easing.Sinusoidal.Out, !0, 0), this.interactOutTween = this.game.add.tween(this.scale).to({
        x: 1,
        y: 1
    }, 100, Phaser.Easing.Sinusoidal.Out, !0, 150))
}, CookingGame.ClickableObject.prototype.addItemToPlate = function(t) {
    if (!t) {
        for (var e = []; this.plateContents.length > 0;) e.push(this.plateContents.pop());
        return this.burgerView.removeChildren(), e
    }
    if (t.hasOwnProperty("length"))
        for (; t.length > 0;) this.plateContents.push(t.pop());
    else {
        for (var i = 0; i < this.plateContents.length; i++)
            if (t.id == this.plateContents[i].id) return !1;
        this.plateContents.push(t)
    }
    this.burgerView.removeChildren();
    for (var s = [], a = 0; a < this.orderVect.length; a++)
        for (var n = 0; n < this.plateContents.length; n++) this.orderVect[a] == this.plateContents[n].id && s.push(this.plateContents[n]);
    this.currentItemY = 0;
    for (var o = !1, r = 0; r < s.length; r++) {
        var h = s[r].img,
            l = 0,
            d = 0;
        "i_06" == s[r].id && (h = "frunze-lettuce"), "i_02" == s[r].id && (h = "cheese-slice", l = 5, d = 5), "i_12" == s[r].id && (h = "ketchup", l = 5, d = 5), "i_13" == s[r].id && (h = "mustard"), "i_19" == s[r].id && (h = "tomato-slice"), "i_22" == s[r].id && (h = "cartofi-prajiti-langa-burger"), "i_25" == s[r].id && (h = "sliced-pickle", l = 10, d = 3), "i_11" == s[r].id && (h = "chifla-jos", o = !0), this.currentItemY += l;
        var c = this.game.add.sprite(0, this.currentItemY, ATLAS, h);
        c.anchor.set(.5), this.burgerView.addChild(c), this.currentItemY -= 7 + d
    }
    if (o) {
        var c = this.game.add.sprite(0, this.currentItemY, ATLAS, "chifla-sus");
        c.anchor.set(.5), this.burgerView.addChild(c), this.currentItemY -= 7
    }
    return !0
}, CookingGame.ClickableObject.prototype.isItemInPlate = function(t) {
    for (var e = 0; e < this.plateContents.length; e++)
        if (t == this.plateContents[e].id) return !0;
    return !1
}, CookingGame.ClickableObject.prototype.onGrillAnimed = function() {
    1 == this.grillSprite.alpha ? (this.grillTween = this.game.add.tween(this.grillSprite).to({
        alpha: 0
    }, 1e3, Phaser.Easing.Sinusoidal.InOut, !0, 0), this.grillTween.onComplete.addOnce(this.onGrillAnimed, this)) : (this.grillTween = this.game.add.tween(this.grillSprite).to({
        alpha: 1
    }, 1e3, Phaser.Easing.Sinusoidal.InOut, !0, 0), this.grillTween.onComplete.addOnce(this.onGrillAnimed, this))
}, CookingGame.ClickableObject.prototype.onKnifeAnimated = function() {
    -10 == this.view.angle ? (this.knifeTween = this.game.add.tween(this.view).to({
        angle: 0
    }, 200, Phaser.Easing.Sinusoidal.Out, !0, 0), this.knifeTween.onComplete.addOnce(this.onKnifeAnimated, this)) : (this.knifeTween = this.game.add.tween(this.view).to({
        angle: -10
    }, 200, Phaser.Easing.Sinusoidal.InOut, !0, 0), this.knifeTween.onComplete.addOnce(this.onKnifeAnimated, this))
}, CookingGame.ClickableObject.prototype.stopAnimation = function() {
    switch (this.properties.id) {
        case "s_01":
            grilling.stop(), this.grillTween.onComplete.removeAll(this), this.grillTween.stop(), this.grillSprite.destroy();
            break;
        case "s_02":
            frying.stop(), this.panTween.animations.stop("ulei-tigaie"), this.panTween.animations.destroy(), this.panTween.destroy();
            break;
        case "s_03":
            cut.stop(), this.view.anchor.setTo(.5, .5), this.view.x += this.view.width / 4, this.view.y += this.view.height / 4, this.view.amgle = 0, this.knifeTween.onComplete.removeAll(this), this.knifeTween.stop(), this.cutsTween.animations.stop("particule-taiat"), this.cutsTween.animations.destroy(), this.cutsTween.destroy();
            break;
        case "s_04":
            deepfry.stop(), this.fryTween.animations.stop("ulei-bulbuci"), this.fryTween.animations.destroy(), this.fryTween.destroy();
            break;
        case "s_06":
            juicing.stop()
    }
}, CookingGame.ClientRequest = function(t, e, i, s) {
    "use strict";
    CookingGame.Prefab.call(this, t, e, {
        group: "clients"
    }), this.properties = i, this.game_state = t, this.data = s, this.itemView, this.anchor.set(.5, .5), this.box = this.game_state.game.add.sprite(0, 0, ATLAS, "bula-clienti"), this.addChild(this.box), this.bar = this.game_state.game.add.sprite(0, 0, ATLAS, "fill-bula-clienti"), this.addChild(this.bar), this.bar.position = {
        x: 62,
        y: 7
    }, this.barMask = this.game_state.game.add.graphics(0, 0), this.barMask.beginFill(16777215), this.barMask.moveTo(0, 0), this.barMask.lineTo(8, 0), this.barMask.lineTo(8, 39), this.barMask.lineTo(0, 39), this.barMask.lineTo(0, 0), this.barMask.endFill(), this.barMask.position = {
        x: 62,
        y: 7
    }, this.addChild(this.barMask), this.bar.mask = this.barMask, this.inputEnabled = !0, this.input.useHandCursor = !0, this.events.onInputDown.add(function() {
        this.onClick()
    }, this), this.orderVect = ["i_22", "i_11", "i_16", "i_17", "i_23", "i_24", "i_06", "i_19", "i_18", "i_02", "i_12", "i_20", "i_25", "i_21", "i_13"], this.signal = new Phaser.Signal
}, CookingGame.ClientRequest.prototype = Object.create(CookingGame.Prefab.prototype), CookingGame.ClientRequest.prototype.start = function(t, e) {
    this.taken = !1, this.clients = t, this.client = e;
    var i = e.id,
        s = 0,
        a = e.x - 16 - 36;
    switch (i) {
        case 1:
        case 2:
            s = -230;
            break;
        case 3:
            s = -200;
            break;
        case 4:
        case 5:
        case 6:
            s = -230;
            break;
        case 7:
            s = -200;
            break;
        case 8:
            s = -230
    }
    this.position.setTo(a, s - 5);
    var n;
    n = 0 == e.burgerDiff ? 30 : 34 - 2 * e.burgerDiff;
    var o = 1e3 * (20 + e.maxPatience + n);
    this.itemView = this.game_state.game.add.sprite(0, 0);
    var r = [];
    this.data.items.forEach(function(t) {
        "i" == t.id.charAt(0) && r.push(t)
    }, this);
    for (var h = [], l = 0; l < this.client.burgerRecipe.length; l++)
        for (var d = 0; d < r.length; d++) r[d].id == this.client.burgerRecipe[l] && h.push(r[d]);
    for (var c = [], p = 0; p < this.orderVect.length; p++)
        for (var m = 0; m < h.length; m++) this.orderVect[p] == h[m].id && c.push(h[m]);
    if (h = [], r = [], "i_15" == this.client.burgerRecipe || "i_15" == this.client.burgerRecipe[0]) {
        var g = "pahar-suc-portocale";
        this.itemView = this.game_state.game.add.sprite(0, 0, ATLAS, g), this.addChild(this.itemView), this.itemView.anchor.setTo(.5, .5), this.x = -55, this.itemView.scale.setTo(.8, .8), this.itemView.position = {
            x: 34,
            y: 28
        }
    } else {
        this.burgBmd && this.burgBmd.destroy(), this.burgBmd = game.add.bitmapData(150, 150), this.currentItemY = 100;
        for (var u = !1, y = !1, d = 0; d < c.length; d++) {
            var g = c[d].img,
                v = 0,
                f = 0;
            "i_06" == c[d].id && (g = "frunze-lettuce"), "i_02" == c[d].id && (g = "cheese-slice", v = 5, f = 5), "i_12" == c[d].id && (g = "ketchup", v = 5, f = 5), "i_13" == c[d].id && (g = "mustard"), "i_19" == c[d].id && (g = "tomato-slice"), "i_22" == c[d].id && (g = "cartofi-prajiti-langa-burger"), "i_25" == c[d].id && (g = "sliced-pickle", v = 10, f = 3), "i_11" == c[d].id && (g = "chifla-jos", u = !0), this.currentItemY += v;
            var C = game.add.sprite(0, this.currentItemY, ATLAS, g);
            console.log("CREATE BURGER BITMAP", C, C.width, C.height, this.burgBmd), "cartofi-prajiti-langa-burger" == g ? (y = !0, this.burgBmd.draw(C, 0, this.currentItemY, C.width, C.height)) : this.burgBmd.draw(C, 30, this.currentItemY, C.width, C.height), C.anchor.set(.5), this.itemView.addChild(C), this.currentItemY -= 7 + f
        }
        if (u) {
            var C = game.add.sprite(0, this.currentItemY, ATLAS, "chifla-sus");
            this.burgBmd.draw(C, 30, this.currentItemY, C.width, C.height), C.anchor.set(.5), this.itemView.addChild(C), this.currentItemY -= 7
        }
        this.burgSpr && this.burgSpr.destroy(), this.burgSpr = game.add.sprite(0, 0, this.burgBmd), this.addChild(this.burgSpr), this.burgSpr.anchor.setTo(.5, .5), y ? (this.burgSpr.scale.setTo(.46, .46), this.burgSpr.x = 38, this.burgSpr.y = 12.5) : (this.burgSpr.scale.setTo(.54, .54), this.burgSpr.x = 37, this.burgSpr.y = 6.5), this.burgSpr.inputEnabled = !1, this.ignoreChildInput = !0, this.itemView.destroy()
    }
    this.x = -55, e.burgerRequest = this, e.addChild(this), this.visible = !0, this.bar.visible = !0, this.barHeight = this.barMask.height, this.barMask.visible = !0;
    var _ = this.barMask.height,
        b = this.barMask,
        k = {
            height: this.barMask.height
        };
    this.scaleTween = this.game_state.game.add.tween(k).to({
        height: 0
    }, o, "Linear", !0, 0).onUpdateCallback(function() {
        b.clear(), b.beginFill(16777215), b.drawRect(0, _ - k.height, 8, k.height), b.endFill()
    }), this.tantrumTimer = this.game_state.game.time.events.add(2 * o / 3, this.onPatienceLow, this), this.scaleTween.onComplete.add(this.onPatienceOver, this)
}, CookingGame.ClientRequest.prototype.getBarPercent = function() {
    return this.barMask.height / this.barHeight
}, CookingGame.ClientRequest.prototype.onClick = function(t, e) {
    this.game_state.game.input.activePointer.isDown && this.signal.dispatch(this, "showRecipe")
}, CookingGame.ClientRequest.prototype.showWrongOrder = function() {
    this.temp_wrong && (this.temp_wrong.removeChildren(), this.temp_wrong = null), this.temp_wrong = this.game_state.game.add.sprite(0, 0, ATLAS, "x-client"), this.addChild(this.temp_wrong), this.temp_wrong.anchor.setTo(.5, .5), this.temp_wrong.scale.setTo(1.4, 1.4), this.temp_wrong.position = {
        x: 33,
        y: 26
    }, this.game_state.game.add.tween(this.temp_wrong.scale).to({
        x: 1,
        y: 1
    }, 400, Phaser.Easing.Bounce.Out, !0, 0), this.game_state.game.add.tween(this.temp_wrong).to({
        alpha: 0
    }, 200, Phaser.Easing.Sinusoidal.In, !0, 600)
}, CookingGame.ClientRequest.prototype.onPatienceOver = function() {
    this.clients.disappointClient(this.client)
}, CookingGame.ClientRequest.prototype.pause = function() {
    this.tantrumTimer && this.tantrumTimer.timer && this.tantrumTimer.timer.pause(), this.scaleTween && this.scaleTween.pause()
}, CookingGame.ClientRequest.prototype.resume = function() {
    this.tantrumTimer && this.tantrumTimer.timer && this.tantrumTimer.timer.resume(), this.scaleTween && this.scaleTween.resume()
}, CookingGame.ClientRequest.prototype.onPatienceLow = function() {
    this.clients.setClientStatus(this.client, "angry")
}, CookingGame.ClientRequest.prototype.reset = function() {
    this.scaleTween && this.scaleTween.stop(), this.tantrumTimer && this.game_state.game.time.events.remove(this.tantrumTimer), this.burgBmd && this.burgBmd.destroy(), this.burgSpr && this.burgSpr.destroy(), this.itemView && this.itemView.destroy(), this.scaleTween = null, this.visible = !1, this.item = null, this.visible = !1, this.taken = !1, this.alpha = 1, this.barMask.height = 39, this.destroy()
}, CookingGame.ProccesingObject = function(t, e, i) {
    "use strict";
    CookingGame.Prefab.call(this, t, e, {
        group: "tools"
    }), this.game_state = t, this.properties = i, this.itemView, this.anchor.set(.5, .5), this.box = this.game.add.sprite(0, 0, ATLAS, "chenar-food-ready"), this.addChild(this.box), this.cookBar = this.game.add.sprite(0, 0, ATLAS, "bar-cooking"), this.addChild(this.cookBar), this.cookBar.position = {
        x: 2,
        y: 56
    }, this.burnBar = this.game.add.sprite(0, 0, ATLAS, "bar-burnt-food"), this.addChild(this.burnBar), this.burnBar.position = {
        x: -8,
        y: 56
    }, this.greenBar = this.game.add.sprite(0, 0, ATLAS, "fill-bar-cooking"), this.addChild(this.greenBar), this.greenBar.position = {
        x: 6,
        y: 58
    }, this.redBar = this.game.add.sprite(0, 0, ATLAS, "fill-bar-cooking2"), this.addChild(this.redBar), this.redBar.position = {
        x: 6,
        y: 58
    }, this.checkMark = this.game.add.sprite(0, 0, ATLAS, "checkmark-mic"), this.addChild(this.checkMark), this.checkMark.position = {
        x: 47,
        y: 33
    }, this.checkMark.visible = !1, this.redBar.visible = !1, this.burnBar.visible = !1, this.greenMask = this.game.add.graphics(0, 0), this.greenMask.beginFill(16777215), this.greenMask.moveTo(0, 0), this.greenMask.lineTo(51, 0), this.greenMask.lineTo(51, 11), this.greenMask.lineTo(0, 11), this.greenMask.lineTo(0, 0), this.greenMask.endFill(), this.greenMask.position = {
        x: 6,
        y: 58
    }, this.addChild(this.greenMask), this.greenBar.mask = this.greenMask, this.redMask = this.game.add.graphics(0, 0), this.redMask.beginFill(16777215), this.redMask.moveTo(0, 0), this.redMask.lineTo(51, 0), this.redMask.lineTo(51, 11), this.redMask.lineTo(0, 11), this.redMask.lineTo(0, 0), this.redMask.endFill(), this.redMask.position = {
        x: 6,
        y: 58
    }, this.addChild(this.redMask), this.redBar.mask = this.redMask, this.signal = new Phaser.Signal
}, CookingGame.ProccesingObject.prototype = Object.create(CookingGame.Prefab.prototype), CookingGame.ProccesingObject.prototype.constructor = CookingGame.ClickableObject, CookingGame.ProccesingObject.prototype.update = function() {}, CookingGame.ProccesingObject.prototype.start = function(t, e) {
    this.taken = !1, this.station = e, this.item = t;
    var i = 0;
    switch (e.properties.id) {
        case "s_01":
            this.position.setTo(88, 374), i = 5;
            break;
        case "s_02":
            this.position.setTo(230, 519), i = 4;
            break;
        case "s_03":
            this.position.setTo(731, 410), i = 2;
            break;
        case "s_04":
            this.position.setTo(593, 519), i = 4;
            break;
        case "s_05":
            break;
        case "s_06":
            this.position.setTo(451, 222), i = 2
    }
    switch (t.id) {
        case "i_16":
            i += 0;
            break;
        case "i_17":
            i += 2;
            break;
        case "i_18":
            i += 1;
            break;
        case "i_19":
        case "i_20":
        case "i_21":
        case "i_22":
            i += 2;
            break;
        case "i_23":
        case "i_24":
            i += 4;
            break;
        case "i_25":
            i += 2
    }
    "s_06" == e.properties.id ? groups.backgrounds.add(this) : groups.tools.add(this), i *= 1e3, this.itemView = this.game.add.sprite(0, 0, ATLAS, t.img), this.addChild(this.itemView), this.itemView.anchor.setTo(.5, .5), this.itemView.scale.setTo(.62, .62), this.itemView.position = {
        x: 31,
        y: 31
    }, this.visible = !0, this.cookBar.visible = !0, this.burnBar.visible = !1, this.redBar.visible = !1, this.redMask.visible = !1, this.checkMark.visible = !1, this.greenBar.visible = !0, this.greenMask.visible = !0, this.greenMask.scale.setTo(0, 1), this.greenScaleTween = this.game.add.tween(this.greenMask.scale).to({
        x: 1,
        y: 1
    }, i, "Linear", !0, 0), this.greenScaleTween.onComplete.add(this.onProccesComplete, this)
}, CookingGame.ProccesingObject.prototype.onProccesComplete = function() {
    if (this.station.processed = !0, this.signal.dispatch(this, "processed"), bell.play(), "s_03" != this.station.properties.id && "s_06" != this.station.properties.id) {
        this.cookBar.visible = !1, this.burnBar.visible = !0, this.redBar.visible = !0, this.redMask.visible = !0, this.redMask.scale.setTo(0, 1);
        var t = 1e4;
        this.tutorial && (t *= 15), this.redScaleTween = this.game.add.tween(this.redMask.scale).to({
            x: 1,
            y: 1
        }, t, "Linear", !0, 0), this.redScaleTween.onComplete.add(this.onburnComplete, this)
    }
    this.checkMark.visible = !0, this.station.stopAnimation()
}, CookingGame.ProccesingObject.prototype.onburnComplete = function() {
    this.taken || (this.station.burnt = !0, this.disappear())
}, CookingGame.ProccesingObject.prototype.disappear = function() {
    this.disappearTween = this.game.add.tween(this).to({
        alpha: 0
    }, 1e3, "Linear", !0, 0), this.disappearTween.onComplete.add(this.onDissapeared, this)
}, CookingGame.ProccesingObject.prototype.onDissapeared = function() {
    this.disappearTween.onComplete.remove(this.onDissapeared, this), this.signal.dispatch(this, "disappeared")
}, CookingGame.ProccesingObject.prototype.reset = function() {
    this.greenScaleTween && this.greenScaleTween.stop(), this.redScaleTween && this.redScaleTween.stop(), this.disappearTween && this.disappearTween.stop(), this.greenScaleTween = null, this.disappearTween = null, this.redScaleTween = null, this.station = null, this.item = null, this.itemView.destroy(), this.visible = !1, this.taken = !1, this.alpha = 1
}, CookingGame.ProccesingObject.prototype.pause = function() {
    this.greenScaleTween && this.greenScaleTween.pause(), this.redScaleTween && this.redScaleTween.pause()
}, CookingGame.ProccesingObject.prototype.resume = function() {
    this.greenScaleTween && this.greenScaleTween.resume(), this.redScaleTween && this.redScaleTween.resume()
}, CookingGame.Hinter = function(t, e) {
    this.data = e, this.game_state = t, this.init()
}, CookingGame.Hinter.prototype = Object.create(CookingGame.Prefab.prototype), CookingGame.Hinter.prototype.constructor = CookingGame.Hinter, CookingGame.Hinter.prototype.init = function() {
    this.items = this.data.items, this.gameInterface = this.game_state.gameInterface, this.gameInterface.signal.add(this.onSignal, this), this.player = this.game_state.player, this.plate = this.game_state.plate, this.stations = [], this.clients = this.game_state.clients, this.helpingHand = game.add.sprite(0, 0), this.tap_0 = game.add.sprite(0, 0, ATLAS, "tap1"), this.tap_1 = game.add.sprite(0, 0, ATLAS, "tap2"), this.helpingHand.addChild(this.tap_0), this.helpingHand.addChild(this.tap_1), this.tap_0.visible = !1, this.tap_1.visible = !1, this.counter, this.cookedItems = [];
    this.cookedItems;
    this.items.forEach(function(t) {
        if ("i" == t.id.charAt(0) && t.hasOwnProperty("recipe")) {
            t.recipe;
            this.cookedItems.push(t)
        }
    }, this);
    for (var t = 0; t < this.game_state.clickableObjects.length; t++) "s" == this.game_state.clickableObjects[t].properties.id.charAt(0) && this.stations.push(this.game_state.clickableObjects[t]);
    this.dictionary = {
        i_01: {
            x: this.items[0].x,
            y: this.items[0].y
        },
        i_02: {
            x: this.items[1].x,
            y: this.items[1].y
        },
        i_03: {
            x: this.items[2].x,
            y: this.items[2].y
        },
        i_04: {
            x: this.items[3].x,
            y: this.items[3].y
        },
        i_05: {
            x: this.items[4].x,
            y: this.items[4].y
        },
        i_06: {
            x: this.items[5].x,
            y: this.items[5].y
        },
        i_07: {
            x: this.items[6].x,
            y: this.items[6].y
        },
        i_08: {
            x: this.items[7].x,
            y: this.items[7].y
        },
        i_09: {
            x: this.items[8].x,
            y: this.items[8].y
        },
        i_10: {
            x: this.items[9].x,
            y: this.items[9].y
        },
        i_11: {
            x: this.items[10].x,
            y: this.items[10].y
        },
        i_12: {
            x: this.items[20].x,
            y: this.items[20].y
        },
        i_13: {
            x: this.items[21].x,
            y: this.items[21].y
        },
        i_14: {
            x: this.items[11].x,
            y: this.items[11].y
        },
        i_15: {
            x: this.items[18].x,
            y: this.items[18].y
        },
        i_16: {
            x: this.items[13].x,
            y: this.items[13].y
        },
        i_17: {
            x: this.items[14].x,
            y: this.items[14].y
        },
        i_18: {
            x: this.items[14].x,
            y: this.items[14].y
        },
        i_19: {
            x: this.items[15].x,
            y: this.items[15].y
        },
        i_20: {
            x: this.items[15].x,
            y: this.items[15].y
        },
        i_21: {
            x: this.items[15].x,
            y: this.items[15].y
        },
        i_22: {
            x: this.items[16].x,
            y: this.items[16].y
        },
        i_23: {
            x: this.items[16].x,
            y: this.items[16].y
        },
        i_24: {
            x: this.items[14].x,
            y: this.items[14].y
        },
        i_25: {
            x: this.items[15].x,
            y: this.items[15].y
        },
        i_25: {
            x: this.items[15].x,
            y: this.items[15].y
        },
        trash: {
            x: this.items[19].x,
            y: this.items[19].y
        },
        plate: {
            x: this.items[17].x,
            y: this.items[17].y
        }
    }
}, CookingGame.Hinter.prototype.onSignal = function(t) {
    var e = !1;
    if ("satisfy" == t) return void this.stopHand();
    "recipe_shown" == t && (e = !0), "move" == t && (e = !0), this.checkCurrentRecipe(e)
}, CookingGame.Hinter.prototype.checkCurrentRecipe = function(t) {
    this.stopHand();
    var e = this.gameInterface.oldRecipe;
    if (e)
        if (this.player.hasItem) {
            var i;
            this.player.currentItem && (i = this.player.currentItem, this.isOnPlayer(this.player.currentItem)), this.player.recipe && (i = this.player.recipe), this.isPlayerPlateValid(i)
        } else this.getNextHint(e, t), this.gameInterface.highlightStep(null, !1)
}, CookingGame.Hinter.prototype.getNextHint = function(t, e) {
    for (var i = (this.game_state.activeClient, []), s = 0; s < t.length; s++)
        for (var a = 0; a < this.cookedItems.length; a++)
            if (this.cookedItems[a].id == t[s]) {
                var n = new Object;
                n.id = this.cookedItems[a].recipe[0], n.upgrade = t[s], i.push(n)
            }
    for (var o = !0, r = !1, h = 0; h < t.length; h++)
        if (r = !1, this.isInPlate(t[h])) this.gameInterface.crossStep(t[h], !0);
        else {
            o = !1, this.gameInterface.crossStep(t[h], !1);
            for (var l = 0; l < i.length; l++)
                if (i[l].upgrade == t[h]) {
                    var d = !1;
                    r = !0;
                    for (var c = 0; c < this.stations.length; c++)
                        if (this.stations[c].processor && this.stations[c].processor.item.id == t[h]) {
                            this.stations[c].processed ? this.showHandStep(this.dictionary[t[h]]) : d = !0;
                            break
                        }
                    d || this.showHandStep(this.dictionary[i[l].id])
                }
            r || this.showHandStep(this.dictionary[t[h]])
        }
    o && this.showHandStep(this.dictionary.plate)
}, CookingGame.Hinter.prototype.isInPlate = function(t) {
    if (!this.plate.plateContents) return !1;
    for (var e = 0; e < this.plate.plateContents.length; e++)
        if (this.plate.plateContents[e].id == t) return !0;
    return !1
}, CookingGame.Hinter.prototype.isOnPlayer = function(t) {
    if (console.log("!! IS ON PLAYEr", this.player), !t) return !1;
    this.gameInterface.highlightStep(t.id, !0)
}, CookingGame.Hinter.prototype.isPlayerPlateValid = function(t) {
    for (var e = this.gameInterface.oldRecipe, i = [], s = 0; s < e.length; s++)
        for (var a = 0; a < this.cookedItems.length; a++)
            if (this.cookedItems[a].id == e[s]) {
                var n = new Object;
                n.id = this.cookedItems[a].recipe[0], n.upgrade = e[s], i.push(n)
            }
    if (t.length > 1) {
        for (var o, r = !1, h = !1, l = 0; l < this.clients.currentClients.length && (l < this.clients.currentClients.length && this.clients.currentClients[l] && (o = this.clients.currentClients[l], r = this.checkIfRecipeCorrectWithClient(t, o)), !r); l++);
        r ? this.showHandStep({
            x: o.x - o.width / 2,
            y: o.y - 120
        }) : this.game_state.activeClient ? (h = this.checkIfRecipeValidWithClient(t, this.game_state.activeClient), h ? this.showHandStep(this.dictionary.plate) : this.showHandStep(this.dictionary.trash)) : this.showHandStep(this.dictionary.trash)
    } else {
        for (var d, c = !1, p = !1, m = 0; m < i.length; m++) i[m].id == t.id && (d = i[m], c = !0);
        if (c)
            for (var g = 0; g < this.plate.plateContents.length; g++)
                if (this.plate.plateContents[g].id == d.upgrade) {
                    p = !0;
                    break
                }
        for (var u = !1, y = 0; y < this.stations.length; y++) this.stations[y].processor && d && this.stations[y].processor.item.id == d.upgrade && (c = !1, u = !0);
        u || d && !this.isInPlate(d.upgrade) && this.showHandStep(this.dictionary[d.upgrade]);
        for (var v, f = !1, C = !1, _ = 0; _ < e.length; _++) v = t.id ? t.id : t[0].id, e[_] == v && (f = !0);
        if (f)
            for (var b = 0; b < this.plate.plateContents.length; b++)
                if (v = t.id ? t.id : t[0].id, this.plate.plateContents[b].id == v) {
                    C = !0;
                    break
                }
        f && !C || c && !p ? this.showHandStep(this.dictionary.plate) : this.showHandStep(this.dictionary.trash)
    }
}, CookingGame.Hinter.prototype.putOnSleep = function() {
    this.isTutorial = !1, this.shouldHide = !0, this.helpingHand.visible = !1
}, CookingGame.Hinter.prototype.makeHandVisible = function() {
    this.helpingHand.visible = !0
}, CookingGame.Hinter.prototype.update = function() {
    "use strict"
}, CookingGame.Hinter.prototype.reset = function() {
    "use strict"
}, CookingGame.Hinter.prototype.checkIfPlateValidWithAnyClients = function(t) {
    var e;
    if (0 == this.clients.currentClients.length || !t || 0 == t.length) return !0;
    for (var i = 0; i < this.clients.currentClients.length; i++)
        if (i < this.clients.currentClients.length && this.clients.currentClients[i] && (cl = this.clients.currentClients[i], e = this.checkIfRecipeValidWithClient(t, cl)), e) return e;
    return !1
}, CookingGame.Hinter.prototype.checkIfRecipeValidWithClient = function(t, e) {
    "use strict";
    if (e) {
        var i = t,
            s = e.burgerRecipe;
        if (!i) return !1;
        if (!s) return !0;
        var a = !1,
            n = !1;
        console.log("----------- CLIENT----------------");
        for (var o = 0; o < i.length; o++) {
            n = !1;
            for (var r = 0; r < s.length; r++) "i_12" != i[o].id && "i_13" != i[o].id ? "i_12" != s[r] && "i_13" != s[r] && "i_12" != i[o].id && "i_13" != i[o].id && (console.log("COMPARING!:", i[o].id, s[r]), i[o].id == s[r] && (console.log("OK"), n = !0)) : n = !0;
            if (!n) return !1;
            a = !0
        }
        return !!a
    }
}, CookingGame.Hinter.prototype.checkIfRecipeCorrectWithClient = function(t, e) {
    "use strict";
    if (e) {
        var i = t,
            s = e.burgerRecipe;
        if (!i || !s) return !1;
        for (var a = !0, n = 0, o = 0, r = 0; r < i.length; r++) "i_12" != i[r].id && "i_13" != i[r].id && n++;
        for (var h = 0; h < s.length; h++) "i_12" != s[h] && "i_13" != s[h] && o++;
        var l = !1;
        if (n == o)
            for (var d = 0; d < s.length; d++) {
                for (var c = !0, p = 0; p < i.length; p++) "i_12" == s[d] && "i_13" == i[p].id || "i_13" == s[d] && "i_12" == i[p].id ? (l = !0, c = !1) : "i_12" != s[d] && "i_13" != s[d] && "i_12" != i[p] && "i_13" != i[p] ? s[d] == i[p].id && (c = !1) : c = !1;
                if (c) {
                    a = !1;
                    break
                }
            } else a = !1;
        if ("i_15" == i && "i_15" == s && (a = !0), !a) return !1;
        if (i.length != s.length && (l = !0), "i_15" == i && "i_15" == s && (l = !1), a && !l) return !0;
        if (a && l) return i.length >= s.length
    }
}, CookingGame.Hinter.prototype.showHandStep = function(t) {
    this.shouldHide && (this.counter && (this.counter.timer.remove(this.counter), this.counter = null), this.counter = game.time.events.add(8 * Phaser.Timer.SECOND, this.makeHandVisible, this), this.counter.timer.start()), this.showing || (this.showing = !0, this.showSequence({
        x: this.player.x,
        y: this.player.y - 130
    }, {
        x: t.x - 24,
        y: t.y - 13
    }, !0), this.tap_0.visible = !0)
}, CookingGame.Hinter.prototype.showSequence = function(t, e, i) {
    this.originPoint = t, this.originPoint = {
        x: this.player.x,
        y: this.player.y - 130
    }, this.destinationPoint = e, this.repeat = i, this.helpingHand.x = this.originPoint.x, this.helpingHand.y = this.originPoint.y, this.helpingHand.alpha = 0, this.shouldHide || (this.helpingHand.visible = !0), this.handRepeatAnim && game.time.events.remove(this.handRepeatAnim), this.tap_0.visible = !0, this.tap_1.visible = !1, this.t0 = game.add.tween(this.helpingHand).to({
        alpha: 1
    }, 100, "Sine.easeOut", !0, 0), this.helpingHand.x = this.destinationPoint.x, this.helpingHand.y = this.destinationPoint.y, this.t4 = game.time.events.add(.5 * Phaser.Timer.SECOND, this.showClick, this), i ? this.t5 = game.time.events.add(2 * Phaser.Timer.SECOND, function() {
        this.showSequence(t, e, i)
    }, this) : (this.tap_0.visible = !1, this.tap_1.visible = !1)
}, CookingGame.Hinter.prototype.showClick = function() {
    this.t6 = game.time.events.add(.3 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t7 = game.time.events.add(.5 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t8 = game.time.events.add(.8 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t9 = game.time.events.add(1 * Phaser.Timer.SECOND, this.toggleHelpingHand, this), this.t10 = game.add.tween(this.helpingHand).to({
        alpha: 0
    }, 300, "Sine.easeIn", !0, 1e3)
}, CookingGame.Hinter.prototype.toggleHelpingHand = function() {
    0 == this.tap_0.visible ? (this.tap_0.visible = !0, this.tap_1.visible = !1) : (this.tap_0.visible = !1, this.tap_1.visible = !0)
}, CookingGame.Hinter.prototype.stopHand = function() {
    this.showing = !1, this.helpingHand.visible = !1, this.tap_0.visible = !1, this.tap_1.visible = !1, this.t0 && this.t0.stop(), this.t1 && this.t1.stop(), this.t2 && this.t2.stop(), this.t3 && this.t3.stop(), this.t4 && game.time.events.remove(this.t4), this.t5 && game.time.events.remove(this.t5), this.t6 && game.time.events.remove(this.t6), this.t7 && game.time.events.remove(this.t7), this.t8 && game.time.events.remove(this.t8), this.t9 && game.time.events.remove(this.t9), this.t10 && this.t10.stop()
}, CookingGame.WrongIngredientsBubble = function(t, e, i, s) {
    "use strict";
    CookingGame.Prefab.call(this, t, e, {
        group: "interface"
    }), this.properties = i, this.game_state = t, this.data = s, this.itemView, this.anchor.set(.5, .5), this.box = this.game_state.game.add.sprite(0, 0, ATLAS, "bula-clienti-fuller"), this.addChild(this.box);
    var a = this.game.add.text(0, 0, "   WRONG\nINGREDIENTS", {
        fill: "#000000",
        boundsAlignH: "center",
        boundsAlignV: "middle"
    });
    a.font = "font-interfata", a.fontSize = 16, a.fontWeight = "normal", a.setTextBounds(2, 14, 87, 53), this.addChild(a), this.trashBtn = this.game_state.game.add.sprite(0, 0, ATLAS, "buton-recycle"), this.addChild(this.trashBtn), this.trashBtn.scale.set(.75), this.trashBtn.position = {
        x: 86,
        y: 20
    }, this.inputEnabled = !0, this.input.useHandCursor = !0
}, CookingGame.WrongIngredientsBubble.prototype = Object.create(CookingGame.Prefab.prototype), CookingGame.WrongIngredientsBubble.prototype.onClick = function(t, e) {
    console.log("WROOOOOONG!!!!!")
};
var game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add(BOOT, new CookingGame.Boot), game.state.add(PRELOADER, new CookingGame.Preloader), game.state.add(MENU, new CookingGame.Menu), game.state.add(MAP, new CookingGame.Map), game.state.add(GAME, new CookingGame.Game), game.state.add(TUTORIAL, new CookingGame.Tutorial), game.state.start(BOOT, !0, !1, "assets/data/data.json");