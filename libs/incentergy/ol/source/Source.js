/*!
 * ${copyright}
 */

sap.ui.define(['ol', 'sap/ui/base/ManagedObject'],
    function(ol, ManagedObject) {
        "use strict";
        var Source = ManagedObject.extend("incentergy.ol.source.Source", {
            metadata: {
                library: "incentergy.ol",
                "abstract": true,
            },
            constructor: function() {
                var me = this;
                this.pMapSet = new Promise(function(resolve, reject) {
                    me.fnMapSet = resolve;
                });
                ManagedObject.apply(this, arguments);
            },
            setParent: function(oParent) {
                var me = this;
                var retVal = ManagedObject.prototype.setParent.apply(this, arguments);
                oParent.mapSet().then(function() {
                    me.fnMapSet();
                });
                return retVal;
            },
            mapSet: function() {
                return this.pMapSet;
            }
        });
        return Source;
    }, /* bExport= */ true);