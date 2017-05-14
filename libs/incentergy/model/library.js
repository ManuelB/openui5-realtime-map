/**
 * Initialization Code and shared classes of library incentergy model.
 */
sap.ui.define([], // library dependency
    function() {

        "use strict";

        /**
         * incentergy model library.
         *
         * @namespace
         * @name incentery.model
         * @author Incentergy GmbH
         * @version 0.0.9
         * @public
         */

        // delegate further initialization of this library to the Core
        sap.ui.getCore().initLibrary({
            name: "incentergy.model",
            version: "0.0.9",
            dependencies: ["sap.ui.core"],
            types: [],
            interfaces: [],
            controls: [],
            elements: [
                "incentergy.model.hash.XXH",
                "incentergy.model.XMPPJSONPatchSyncModel",
                "incentergy.model.XMPPJSONPatchSyncListBinding",
                "incentergy.model.XMPPJSONPatchSyncPropertyBinding"
            ]
        });

        return incentergy.model;

    }, /* bExport= */ true);