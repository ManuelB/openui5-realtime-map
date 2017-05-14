/*!
 * ${copyright}
 */
sap.ui.define(['ol', 'sap/ui/base/ManagedObject'],
    function(ol, ManagedObject) {
        "use strict";
        var format = new ol.format.WKT();

        var Feature = ManagedObject.extend("incentergy.ol.Feature", {
            metadata: {
                library: "incentergy.ol",
                properties: {
                    "wkt": {
                        type: "string",
                        defaultValue: null
                    },
                    "CRS": {
                        type: "string",
                        defaultValue: "4326"
                    }
                },
                aggregations: {
                    "style": {
                        type: "incentergy.ol.style.Style",
                        multiple: false
                    }
                }
            },
            constructor: function() {
                this._feature = new ol.Feature();
                this._bFeatureAdded = false;
                var me = this;
                this._pLayerSet = new Promise(function(resolve, reject) {
                    me._fnLayerSet = resolve;
                });
                ManagedObject.apply(this, arguments);
            },
            setStyle: function(style) {
                this._feature.setStyle(style._style);
                return this.setAggregation("style", style);
            },
            setParent: function(oParent) {
                var me = this;
                oParent.mapSet().then(
                    function() {
                        var oVectorLayer = oParent.getParent();
                        oVectorLayer.mapSet().then(function() {
                            oParent._source.addFeature(me._feature);
                        });
                        me._fnLayerSet();
                    }
                )
                var retVal = ManagedObject.prototype.setParent.apply(this, arguments);
                return retVal;
            },
            _layerSet: function() {
                return this._pLayerSet;
            },
            setWkt: function(wkt) {
                var me = this;
                this._layerSet().then(function() {
                    var oSource = me.getParent();
                    oSource.mapSet().then(function() {
                        // Map
                        var oVectorLayer = oSource.getParent();
                        oVectorLayer.mapSet().then(function() {
                            if (me._bFeatureAdded) {
                                oSource._source.removeFeature(me._feature);
                            }
                            me._feature = format.readFeature(wkt, {
                                dataProjection: 'EPSG:' + me.getCRS(),
                                featureProjection: 'EPSG:3857'
                            });
                            if (me.getStyle()) {
                                me._feature.setStyle(me.getStyle()._style);
                            }
                            oSource._source.addFeature(me._feature);
                            me._bFeatureAdded = true;
                        })
                    })
                })
                this.setProperty("wkt", wkt);
            }
        });
        return Feature;
    }, /* bExport= */ true);