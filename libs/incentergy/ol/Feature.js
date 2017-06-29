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
                    "name": {
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
                    },
                    "geometry": {
                        type: "incentergy.ol.geom.Geometry",
                        multiple: false
                    }
                },
                defaultAggregation: "geometry"
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
            setGeometry: function(geometry) {
                this._feature.setGeometry(geometry._geometry);
                return this.setAggregation("geometry", geometry);
            },
            setParent: function(oParent) {
                var me = this;
                if (oParent != null) {
                    // Add the feature
                    oParent.mapSet().then(function() {
                        var oVectorLayer = oParent.getParent();
                        oVectorLayer.mapSet().then(function() {
                            oParent._source.addFeature(me._feature);
                        });
                        me._fnLayerSet();
                    });
                } else if (this.getParent()) {
                    var meParent = this.getParent();
                    // remove the feature
                    meParent.mapSet().then(function() {
                        var oVectorLayer = meParent.getParent();
                        oVectorLayer.mapSet().then(function() {
                            meParent._source.removeFeature(me._feature);
                        });
                    });
                }
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
                            // Start performance measure
                            jQuery.sap.measure.start(me.getId() + "---FeatureGeneration", "FeatureGeneration of " + wkt, ["ol"]);
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

                            // end performance measurement
                            jQuery.sap.measure.end(me.getId() + "---FeatureGeneration");
                        })
                    })
                })
                this.setProperty("wkt", wkt);
            }
        });
        return Feature;
    }, /* bExport= */ true);