/*!
 * ${copyright}
 */

// Provides the Geometry class for all geometries.
sap.ui.define(['ol', 'sap/ui/base/ManagedObject'],
    function(ol, ManagedObject) {
        "use strict";
        var Geometry = ManagedObject.extend("incentergy.ol.geom.Geometry", {
            metadata: {
                "abstract": true
            }
        });
        return Geometry;
    }, /* bExport= */ true);