sap.ui.define([
    "sap/ui/core/UIComponent",
    "incentergy/model/XMPPJSONPatchSyncModel",
    "sap/m/MessageToast"
], function(UIComponent, XMPPJSONPatchSyncModel, MessageToast) {
    "use strict";
    return UIComponent.extend("incentergy.map.realtime.Component", {
        metadata: {
            rootView: "incentergy.map.realtime.App"
        },
        init: function() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            function guid() {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            }
            // Force a hash in the URL as a node-name
            if (!window.location.hash) {
                window.location.href = window.location.href + "#" + guid();
                return;
            } else {
                // Use a public XMPP server from https://list.jabber.at/ or https://xmpp.net/directory.php
                // We will need:
                // - Anonymous authentification https://xmpp.org/extensions/xep-0175.html
                // - Publish Subscribe https://xmpp.org/extensions/xep-0060.html
                // - WebSockets a.k.a Bidirectional-streams Over Synchronous HTTP (BOSH) https://xmpp.org/extensions/xep-0124.html https://tools.ietf.org/html/rfc7395
                var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel("wss://xmpp.incentergy.de:5280/websocket", window.location.hash.replace(/#/, ''));
                this.setModel(oXMPPJSONPatchSyncModel);
                oXMPPJSONPatchSyncModel.attachEvent("connectionStatus", function(oEvent) {
                    if (oEvent.getParameter("status") == "CONNECTED") {
                        MessageToast.show("XMPP Synchronization established");
                    }
                });
                oXMPPJSONPatchSyncModel.connect();
            }
        }
    });
});
