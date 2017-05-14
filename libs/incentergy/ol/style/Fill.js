/*!
 * ${copyright}
 */

sap.ui.define(['ol', 'sap/ui/base/ManagedObject'],
    function(ol, ManagedObject) {
        "use strict";
        var Fill = ManagedObject.extend("incentergy.ol.style.Fill", {
            metadata: {
                library: "incentergy.ol",
                properties: {
                    "color": {
                        type: "string",
                        group: "Misc",
                        defaultValue: null
                    }
                }
            },
            constructor: function() {
                this._fill = new ol.style.Fill();
                ManagedObject.apply(this, arguments);
            },
            setColor: function(color) {
                if (color) {
                    var m = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d(\.\d+)?)\)/);
                    this._fill.setColor([parseInt(m[1]), parseInt(m[2]), parseInt(m[3]), parseFloat(m[4])]);
                }
                return this.setProperty("color", color);
            }
        });
        return Fill;
    });