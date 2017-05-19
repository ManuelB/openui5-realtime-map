sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
    return Controller.extend("incentergy.map.realtime.App", {
        "onInit": function() {
            var me = this;
        },
        onShowTracks: function() {

        },
        onZoomToExtend: function() {
            var map = this.byId("map");
            var realtimeLayer = map.getLayers()[1];
            var extent = realtimeLayer.getSource().getExtent();
            if (extent) {
                map.viewFit(extent);
            }
        },
        onSendOnLocation: function() {
            var me = this;
            navigator.geolocation.watchPosition(function(geolocation) {
                me.getOwnerComponent().getModel().addItem({
                    time: geolocation.timestamp,
                    agent: "Agent",
                    longitude: geolocation.coords.longitude,
                    latitude: geolocation.coords.latitude,
                    /* WGS 84 */
                    crs: '4326'
                });
            });
        }
    });
});