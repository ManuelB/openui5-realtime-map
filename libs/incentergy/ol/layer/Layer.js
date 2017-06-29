/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Base'],
    function(ol, Base) {
        "use strict";
        var Layer = Base.extend("incentergy.ol.layer.Layer", /** @lends incentergy.ol.Base.Tile.prototype */ {
            metadata: {
                properties: {},
                events: {
                    postcompose: {

                    }
                }
            },
        });
        return Layer;
    }, /* bExport= */ true);