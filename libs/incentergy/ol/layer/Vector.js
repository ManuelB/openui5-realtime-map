/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Layer'],
    function(ol, Layer) {
        "use strict";
        var Vector = Layer.extend("incentergy.ol.layer.Vector", /** @lends incentergy.ol.layer.Vector.prototype */ {
            metadata: {
                properties: {},
                defaultAggregation: "source",
                aggregations: {
                    "source": {
                        type: "incentergy.ol.source.Vector",
                        multiple: false,
                        singularName: "source"
                    }
                }
            },
            constructor: function(mProperties) {
                // Call parent constructor
                Layer.apply(this, arguments);
                this._layer = new ol.layer.Vector({ "source": this.getSource()._source });
            }
        });
        return Vector;
    }, /* bExport= */ true);