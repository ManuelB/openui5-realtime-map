/*!
 * ${copyright}
 */

// Provides the SimpleGeometry class for all geometries.
sap.ui.define(['ol', './SimpleGeometry'],
    function(ol, SimpleGeometry) {
        "use strict";
        var Circle = SimpleGeometry.extend("incentergy.ol.geom.Circle", {
            metadata: {
                properties: {
                    "center": {
                        type: "float[]"
                    },
                    "radius": {
                        type: "float"
                    }
                }
            },
            constructor: function(mSettings) {
                this._geometry = new ol.geom.Circle([10, 10], 1);
                SimpleGeometry.apply(this, arguments);
            },
            setRadius: function(radius) {
                this._geometry.setRadius(radius);
                return this.setProperty("radius", radius);
            },
            setCenter: function(center) {
                if (typeof center === "string") {
                    var coordinates = center.split(/ /);
                    center = [parseFloat(coordinates[0]), parseFloat(coordinates[1])];
                }
                this._geometry.setCenter(center);
                return this.setProperty("center", center);
            }
        });
        return Circle;
    }, /* bExport= */ true);