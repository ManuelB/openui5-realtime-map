/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Layer'],
    function(ol, Layer) {
        "use strict";
        var Vector = Layer.extend("incentergy.ol.layer.Vector", /** @lends incentergy.ol.layer.Vector.prototype */ {
            metadata: {
                properties: {},
                aggregations: {
                    "source": {
                        type: "incentergy.ol.source.Vector",
                        multiple: false,
                        singularName: "source"
                    }
                },
                defaultAggregation: "source"
            },
            constructor: function(mProperties) {
                // Call parent constructor
                Layer.apply(this, arguments);
                var source = this.getSource();
                if (source && source._source) {
                    this._layer = new ol.layer.Vector({ "source": source._source });
                } else {
                    jQuery.sap.log.warning("Layer: " + this.getId() + " initialized without source.");
                }
                var me = this;
                this._layer.on("postcompose", function() {
                    me.firePostcompose();
                });
            }
        });
        return Vector;
    }, /* bExport= */ true);