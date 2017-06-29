sap.ui.define(["ol", "sap/ui/core/Control"], function(ol, Control) {
    "use strict";
    /**
     * Constructor for a new Map.
     * 
     * Wraps ol.Map from openlayers:
     * http://www.openlayers.org
     */
    var Map = Control.extend("incentergy.ol.Map", /** @lends incentergy.ol.Map.prototype */ {
        metadata: {
            library: "incentergy.ol",
            properties: {},
            defaultAggregation: "layers",
            aggregations: {
                layers: {
                    type: "incentergy.ol.layer.Base",
                    multiple: true,
                    singularName: "layer"
                }
            }
        },
        init: function() {
            var me = this;
            // Create a promise so other controls can
            // attach actions when this map gets rendered
            this._pRendered = new Promise(function(resolve, reject) {
                me._fnRendered = resolve;
            });
            // When the theme changes we update the size
            // of the map if it is already there
            sap.ui.getCore().attachThemeChanged(function() {
                if (me._map) {
                    me._map.updateSize();
                }
            });
        },
        /**
         * Create a renderer that just renders a div
         * for placing the map on the screen.
         * 
         * @param {RenderManager} oRM
         * @param {Map} oControl
         * @private
         */
        renderer: function(oRM, oControl) {
            oRM.write("<div style=\"height: 100%\" ");
            oRM.writeControlData(oControl);
            oRM.write(">");
            oRM.write("</div>");
        },
        invalidate: function() {
            // do not invalidate this component.
            // We will care for all the updates
            // that would require rerendering
        },
        /**
         * After th rendering create an openlayers
         * map and place if in the generated div container.
         */
        onAfterRendering: function() {
            this._fnRendered();
            this._map = new ol.Map({
                view: new ol.View({
                    center: [0, 0],
                    zoom: 1
                }),
                target: this.getId()
            });
            var me = this;
            //this.attachResize(function() {
            //    me._map.updateSize();
            //});
        },
        /**
         * Returns a promise if this map was already
         * rendered.
         * @private
         */
        _rendered: function() {
            return this._pRendered;
        },
        /**
         * Sets the view extend of the map to the given extent
         * @param {Array} aExtent
         * @param {Boolean} bAnimate should it be animated
         */
        viewFit: function(aExtent, bAnimate) {
            var me = this;
            this._rendered().then(function() {
                var oOptions = {};
                if (bAnimate) {
                    oOptions["duration"] = 500;
                }
                me._map.getView().fit(aExtent, oOptions);
            });
        },
        /**
         * Center on coordinate and view position.
         * @param {ol.Coordinate} coordinate Coordinate.
         * @param {ol.Size} size Box pixel size.
         * @param {ol.Pixel} position Position on the view to center on.
         */
        centerOn: function(coordinate, size, position) {
            var me = this;
            this._rendered().then(function() {
                me._map.getView().centerOn(coordinate, size, position);
            });
        },
        /**
         * Set the center of the current view.
         * @param {ol.Coordinate|undefined} center The center of the view.
         * @observable
         * @api
         */
        setCenter: function(center) {
            var me = this;
            this._rendered().then(function() {
                me._map.getView().setCenter(center);
            });
        }
    });
    return Map;
}, /* bExport= */ true);