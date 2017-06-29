/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ol.
 */
sap.ui.define([], // library dependency
    function() {

        "use strict";

        /**
         * ol controls library.
         *
         * @namespace
         * @name ol
         * @author Incentergy GmbH
         * @version 4.1.0
         * @public
         */

        // delegate further initialization of this library to the Core
        sap.ui.getCore().initLibrary({
            name: "incentergy.ol",
            version: "4.1.0",
            dependencies: ["sap.ui.core"],
            types: [],
            interfaces: [],
            controls: [
                "incentergy.ol.Map",
                "incentergy.ol.Feature",
                "incentergy.ol.geom.Geometry",
                "incentergy.ol.geom.SimpleGeometry",
                "incentergy.ol.geom.Circle",
                "incentergy.ol.layer.Base",
                "incentergy.ol.layer.Layer",
                "incentergy.ol.layer.Tile",
                "incentergy.ol.layer.Vector",
                "incentergy.ol.source.Vector",
                "incentergy.ol.source.OSM",
                "incentergy.ol.source.BingMaps",
                "incentergy.ol.source.Tile",
                "incentergy.ol.source.UrlTile",
                "incentergy.ol.source.TileImage",
                "incentergy.ol.source.XYZ"
            ],
            elements: []
        });

        return incentergy.ol;

    }, /* bExport= */ false);