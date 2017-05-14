/*!
 * ${copyright}
 */

// Provides the XMPPJSONPatchSync model implementation of a property binding
sap.ui.define(['jquery.sap.global', 'sap/ui/model/ChangeReason', 'sap/ui/model/ClientPropertyBinding'],
    function(jQuery, ChangeReason, ClientPropertyBinding) {
        "use strict";


        /**
         *
         * @class
         * Property binding implementation for XMPPJSONPatchSync format
         *
         * @param {incentergy.model.XMPPJSONPatchSyncModel} oModel
         * @param {string} sPath
         * @param {sap.ui.model.Context} oContext
         * @param {object} [mParameters]
         * @alias incentergy.model.XMPPJSONPatchSyncPropertyBinding
         * @extends sap.ui.model.ClientPropertyBinding
         */
        var XMPPJSONPatchSyncPropertyBinding = ClientPropertyBinding.extend("incentergy.model.XMPPJSONPatchSyncPropertyBinding");

        /**
         * @see sap.ui.model.PropertyBinding.prototype.setValue
         */
        XMPPJSONPatchSyncPropertyBinding.prototype.setValue = function(oValue) {
            if (this.bSuspended) {
                return;
            }
            if (!jQuery.sap.equal(this.oValue, oValue)) {
                if (this.oModel.setProperty(this.sPath, oValue, this.oContext, true)) {
                    this.oValue = oValue;
                    this.getDataState().setValue(this.oValue);
                    this.oModel.firePropertyChange({ reason: ChangeReason.Binding, path: this.sPath, context: this.oContext, value: oValue });
                }
            }
        };

        /**
         * Check whether this Binding would provide new values and in case it changed,
         * inform interested parties about this.
         *
         * @param {boolean} bForceupdate
         *
         */
        XMPPJSONPatchSyncPropertyBinding.prototype.checkUpdate = function(bForceupdate) {
            if (this.bSuspended && !bForceupdate) {
                return;
            }

            var oValue = this._getValue();
            if (!jQuery.sap.equal(oValue, this.oValue) || bForceupdate) { // optimize for not firing the events when unneeded
                this.oValue = oValue;
                this.getDataState().setValue(this.oValue);
                this.checkDataState();
                this._fireChange({ reason: ChangeReason.Change });
            }
        };

        return XMPPJSONPatchSyncPropertyBinding;

    });