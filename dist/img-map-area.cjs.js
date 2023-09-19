'use strict';

var getImageNaturalSize = function (imgEl) {
    var size = {
        w: 0,
        h: 0,
    };
    if (imgEl.naturalWidth) {
        size.w = imgEl.naturalWidth;
        size.h = imgEl.naturalHeight;
    }
    return size;
};

var responsiveImgMapArea = function (imgEl) {
    if (!imgEl)
        return;
    if (typeof imgEl.getAttribute('usemap') === 'undefined')
        return;
    var parseInt = Number.parseInt;
    imgEl.addEventListener('load', function () {
        var w = parseInt(imgEl.getAttribute('width') || '0');
        var h = parseInt(imgEl.getAttribute('height') || '0');
        if (!w || !h) {
            var size = getImageNaturalSize(imgEl);
            if (!w)
                w = size.w;
            if (!h)
                h = size.h;
        }
        var wPercent = imgEl.clientWidth / 100;
        var hPercent = imgEl.clientHeight / 100;
        var mapNameAttr = imgEl.getAttribute('usemap');
        var mapName = typeof mapNameAttr === 'string' ? mapNameAttr.replace('#', '') : '';
        document
            .querySelectorAll('map[name="' + mapName + '"] area')
            .forEach(function (areaEl) {
            var areaElDataset = areaEl.dataset;
            if (!areaElDataset.coords) {
                areaElDataset.coords = areaEl.getAttribute('coords') || '';
            }
            var coords = areaElDataset.coords
                .split(',')
                .map(function (str) { return parseInt(str); });
            var coordsPercent = new Array(coords.length);
            for (var i = 0; i < coordsPercent.length; ++i) {
                if (i % 2 === 0) {
                    coordsPercent[i] = (coords[i] / w) * 100 * wPercent;
                }
                else {
                    coordsPercent[i] = (coords[i] / h) * 100 * hPercent;
                }
            }
            areaEl.setAttribute('coords', coordsPercent.toString());
        });
    });
    imgEl.setAttribute('src', imgEl.getAttribute('src') || '');
};

var createImgMapAreaResponsiveListener = function (imgSelector) {
    if (imgSelector === void 0) { imgSelector = '.map-area-img'; }
    window.addEventListener('load', function () {
        var elements = document.querySelectorAll(imgSelector);
        var resizeHandler = function () {
            elements.forEach(function (imgEl) {
                responsiveImgMapArea(imgEl);
            });
        };
        resizeHandler();
        window.addEventListener('resize', resizeHandler);
    });
};

exports.createImgMapAreaResponsiveListener = createImgMapAreaResponsiveListener;
exports.getImageNaturalSize = getImageNaturalSize;
exports.responsiveImgMapArea = responsiveImgMapArea;
