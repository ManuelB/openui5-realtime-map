/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Tile'],
    function(ol, Tile) {
        "use strict";
        var UrlTile = Tile.extend("incentergy.ol.source.UrlTile", {
            metadata: {
                library: "incentergy.ol",
                "abstract": true,
            }
        });
        return UrlTile;
    }, /* bExport= */ true);