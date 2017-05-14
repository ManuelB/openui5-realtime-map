/*!
 * ${copyright}
 */

sap.ui.define(['ol', './UrlTile'],
    function(ol, UrlTile) {
        "use strict";
        var TileImage = UrlTile.extend("incentergy.ol.source.TileImage", {
            metadata: {
                library: "incentergy.ol",
                "abstract": true,
                properties: {
                    /**
                     * The url from where the Tiles should 
                     */
                    url: { type: "string", group: "Misc", defaultValue: null }
                }
            }
        });
        return TileImage;
    }, /* bExport= */ true);