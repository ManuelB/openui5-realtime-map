/*!
 * ${copyright}
 */

// Provides the SimpleGeometry class for all geometries.
sap.ui.define(['ol', './Geometry'],
    function(ol, Geometry) {
        "use strict";
        var SimpleGeometry = Geometry.extend("incentergy.ol.geom.SimpleGeometry", {
            metadata: {
                "abstract": true
            }
        });
        return SimpleGeometry;
    }, /* bExport= */ true);