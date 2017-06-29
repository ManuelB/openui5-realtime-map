/*!
 * ${copyright}
 */

sap.ui.define(['ol', './TileImage'],
    function(ol, TileImage) {
        "use strict";
        var BingMaps = TileImage.extend("incentergy.ol.source.BingMaps", {
            metadata: {
                library: "incentergy.ol",
                properties: {
                    "cacheSize": {
                        type: "number",
                        defaultValue: 2048
                    },
                    "hidpi": {
                        type: "boolean",
                        defaultValue: false
                    },
                    "culture": {
                        type: "string",
                        defaultValue: "en-US"
                    },
                    "key": {
                        type: "string",
                        defaultValue: undefined
                    },
                    "imagerySet": {
                        type: "string",
                        defaultValue: "AerialWithLabels"
                    },
                    "maxZoom": {
                        type: "number",
                        defaultValue: undefined
                    },
                    //"tileLoadFunction" : {
                    //    type: "function"
                    //},
                    "wrapX": {
                        type: "boolean",
                        defaultValue: false
                    }
                }
            },
            constructor: function() {
                TileImage.apply(this, arguments);
                this._source = new ol.source.BingMaps({
                    "cacheSize": this.getCacheSize(),
                    "hidpi": this.getHidpi(),
                    "culture": this.getCulture(),
                    "key": this.getKey(),
                    "imagerySet": this.getImagerySet(),
                    "maxZoom": this.getMaxZoom(),
                    "wrapX": this.getWrapX()
                });
            }
        });
        return BingMaps;
    }, /* bExport= */ true);