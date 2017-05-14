/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Layer'],
    function(ol, Layer) {
        "use strict";
        var Tile = Layer.extend("incentergy.ol.layer.Tile", /** @lends incentergy.ol.layer.Tile.prototype */ {
            metadata: {
                properties: {},
                defaultAggregation: "source",
                aggregations: {
                    "source": {
                        type: "incentergy.ol.source.Tile",
                        multiple: false,
                        singularName: "source"
                    }
                }
            },
            constructor: function(mProperties) {
                // Call parent constructor
                Layer.apply(this, arguments);
                this._layer = new ol.layer.Tile({ "source": this.getSource()._source });
            }
        });
        return Tile;
    }, /* bExport= */ true);