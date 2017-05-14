/*!
 * ${copyright}
 */

sap.ui.define(['ol', 'sap/ui/base/ManagedObject'],
    function(ol, ManagedObject) {
        "use strict";
        var Style = ManagedObject.extend("incentergy.ol.style.Style", {
            metadata: {
                library: "incentergy.ol",
                properties: {
                    "zIndex": {
                        type: "int",
                        group: "Misc",
                        defaultValue: null
                    }
                },
                aggregations: {
                    "fill": {
                        type: "incentergy.ol.style.Fill",
                        multiple: false
                    },
                    "image": {
                        type: "incentergy.ol.style.Image",
                        multiple: false
                    },
                    "stroke": {
                        type: "incentergy.ol.style.Stroke",
                        multiple: false
                    },
                    "text": {
                        type: "incentergy.ol.style.Text",
                        multiple: false
                    }
                }
            },
            constructor: function() {
                this._style = new ol.style.Style();
                ManagedObject.apply(this, arguments);
            },
            setAggregation: function(name, value) {
                var setterName = "set" + name.charAt(0).toUpperCase() + name.slice(1);
                var propertyName = "_" + name;
                if (propertyName in value) {
                    this._style[setterName](value[propertyName]);
                }
                return ManagedObject.prototype.setAggregation.apply(this, arguments);
            }
        });
        return Style;
    });