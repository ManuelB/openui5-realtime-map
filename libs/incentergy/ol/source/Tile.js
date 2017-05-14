/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Source'],
    function(ol, Source) {
        "use strict";
        var Tile = Source.extend("incentergy.ol.source.Tile", {
            metadata: {
                library: "incentergy.ol",
                "abstract": true,
            }
        });
        return Tile;
    }, /* bExport= */ true);