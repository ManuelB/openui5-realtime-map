/*!
 * ${copyright}
 */

sap.ui.define(['ol', './TileImage'],
    function(ol, TileImage) {
        "use strict";
        var XYZ = TileImage.extend("incentergy.ol.source.XYZ", {
            metadata: {
                library: "incentergy.ol"
            }
        });
        return XYZ;
    }, /* bExport= */ true);