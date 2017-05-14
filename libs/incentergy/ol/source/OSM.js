sap.ui.define(['ol', './XYZ'],
    function(ol, XYZ) {
        "use strict";
        var OSM = XYZ.extend("incentergy.ol.source.OSM", {
            metadata: {
                library: "incentergy.ol"
            },
            constructor: function() {
                XYZ.apply(this, arguments);
                this._source = new ol.source.OSM({ "url": this.getUrl() });
            }
        });
        return OSM;
    }, /* bExport= */ true);