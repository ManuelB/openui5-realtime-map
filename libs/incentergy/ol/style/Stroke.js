/*!
 * ${copyright}
 */

sap.ui.define(['ol', 'sap/ui/base/ManagedObject'],
    function(ol, ManagedObject) {
        "use strict";
        var Stroke = ManagedObject.extend("incentergy.ol.style.Stroke", {
            metadata: {
                library: "incentergy.ol",
                properties: {
                    "color": {
                        type: "string",
                        group: "Misc",
                        defaultValue: null
                    },
                    lineCap: {
                        type: "string",
                        group: "Misc",
                        defaultValue: null
                    },
                    lineJoin: {
                        type: "string",
                        group: "Misc",
                        defaultValue: null
                    },
                    lineDash: {
                        type: "string",
                        group: "Misc",
                        defaultValue: null
                    },
                    lineDashOffset: {
                        type: "int",
                        group: "Misc",
                        defaultValue: 0
                    },
                    miterLimit: {
                        type: "int",
                        group: "Misc",
                        defaultValue: 10
                    },
                    width: {
                        type: "int",
                        group: "Misc",
                        defaultValue: 1
                    }
                }
            },
            constructor: function() {
                this._stroke = new ol.style.Stroke();
                ManagedObject.apply(this, arguments);
            },
            setProperty: function(name, value) {
                var setterName = "set" + name.charAt(0).toUpperCase() + name.slice(1);
                if (name === "lineDash" && value) {
                    value = value.split(/,/).map(function(part) { return parseInt(part); })
                } else if (name == "color") {
                    var m = value.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d(\.\d+)?)\)/);
                    value = [parseInt(m[1]), parseInt(m[2]), parseInt(m[3]), parseFloat(m[4])];
                }
                this._stroke[setterName](value);
                return ManagedObject.prototype.setProperty.apply(this, arguments);
            }
        });
        return Stroke;
    });