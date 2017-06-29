jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "incentergy.ol.library-preload",
	"modules": {
		"incentergy/ol/Feature.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"sap/ui/base/ManagedObject\"],function(e,t){\"use strict\";var r=new e.format.WKT;return t.extend(\"incentergy.ol.Feature\",{metadata:{library:\"incentergy.ol\",properties:{wkt:{type:\"string\",defaultValue:null},name:{type:\"string\",defaultValue:null},CRS:{type:\"string\",defaultValue:\"4326\"}},aggregations:{style:{type:\"incentergy.ol.style.Style\",multiple:!1},geometry:{type:\"incentergy.ol.geom.Geometry\",multiple:!1}},defaultAggregation:\"geometry\"},constructor:function(){this._feature=new e.Feature,this._bFeatureAdded=!1;var r=this;this._pLayerSet=new Promise(function(e,t){r._fnLayerSet=e}),t.apply(this,arguments)},setStyle:function(e){return this._feature.setStyle(e._style),this.setAggregation(\"style\",e)},setGeometry:function(e){return this._feature.setGeometry(e._geometry),this.setAggregation(\"geometry\",e)},setParent:function(e){var r=this;if(null!=e)e.mapSet().then(function(){e.getParent().mapSet().then(function(){e._source.addFeature(r._feature)}),r._fnLayerSet()});else if(this.getParent()){var a=this.getParent();a.mapSet().then(function(){a.getParent().mapSet().then(function(){a._source.removeFeature(r._feature)})})}return t.prototype.setParent.apply(this,arguments)},_layerSet:function(){return this._pLayerSet},setWkt:function(e){var t=this;this._layerSet().then(function(){var a=t.getParent();a.mapSet().then(function(){a.getParent().mapSet().then(function(){jQuery.sap.measure.start(t.getId()+\"---FeatureGeneration\",\"FeatureGeneration of \"+e,[\"ol\"]),t._bFeatureAdded&&a._source.removeFeature(t._feature),t._feature=r.readFeature(e,{dataProjection:\"EPSG:\"+t.getCRS(),featureProjection:\"EPSG:3857\"}),t.getStyle()&&t._feature.setStyle(t.getStyle()._style),a._source.addFeature(t._feature),t._bFeatureAdded=!0,jQuery.sap.measure.end(t.getId()+\"---FeatureGeneration\")})})}),this.setProperty(\"wkt\",e)}})},!0);",
		"incentergy/ol/Map.js": "sap.ui.define([\"ol\",\"sap/ui/core/Control\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.Map\",{metadata:{library:\"incentergy.ol\",properties:{},defaultAggregation:\"layers\",aggregations:{layers:{type:\"incentergy.ol.layer.Base\",multiple:!0,singularName:\"layer\"}}},init:function(){var e=this;this._pRendered=new Promise(function(t,n){e._fnRendered=t}),sap.ui.getCore().attachThemeChanged(function(){e._map&&e._map.updateSize()})},renderer:function(e,t){e.write('<div style=\"height: 100%\" '),e.writeControlData(t),e.write(\">\"),e.write(\"</div>\")},invalidate:function(){},onAfterRendering:function(){this._fnRendered(),this._map=new e.Map({view:new e.View({center:[0,0],zoom:1}),target:this.getId()})},_rendered:function(){return this._pRendered},viewFit:function(e,t){var n=this;this._rendered().then(function(){var i={};t&&(i.duration=500),n._map.getView().fit(e,i)})},centerOn:function(e,t,n){var i=this;this._rendered().then(function(){i._map.getView().centerOn(e,t,n)})},setCenter:function(e){var t=this;this._rendered().then(function(){t._map.getView().setCenter(e)})}})},!0);",
		"incentergy/ol/geom/Circle.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./SimpleGeometry\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.geom.Circle\",{metadata:{properties:{center:{type:\"float[]\"},radius:{type:\"float\"}}},constructor:function(r){this._geometry=new e.geom.Circle([10,10],1),t.apply(this,arguments)},setRadius:function(e){return this._geometry.setRadius(e),this.setProperty(\"radius\",e)},setCenter:function(e){if(\"string\"==typeof e){var t=e.split(/ /);e=[parseFloat(t[0]),parseFloat(t[1])]}return this._geometry.setCenter(e),this.setProperty(\"center\",e)}})},!0);",
		"incentergy/ol/geom/Geometry.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"sap/ui/base/ManagedObject\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.geom.Geometry\",{metadata:{abstract:!0}})},!0);",
		"incentergy/ol/geom/SimpleGeometry.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./Geometry\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.geom.SimpleGeometry\",{metadata:{abstract:!0}})},!0);",
		"incentergy/ol/layer/Base.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"sap/ui/base/Object\",\"sap/ui/base/ManagedObject\",\"sap/ui/Device\",\"jquery.sap.strings\",\"jquery.sap.trace\"],function(t,e,a,n){\"use strict\";return a.extend(\"incentergy.ol.layer.Base\",{metadata:{abstract:!0},constructor:function(){var t=this;this.pMapSet=new Promise(function(e,a){t.fnMapSet=e}),a.apply(this,arguments)},setParent:function(t){var e=this;t._rendered().then(function(){t._map.addLayer(e._layer)});var n=a.prototype.setParent.apply(this,arguments);return this.fnMapSet(),n},mapSet:function(){return this.pMapSet},getExtent:function(){return this._layer?this._layer.getExtent():void 0}})},!0);",
		"incentergy/ol/layer/Layer.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./Base\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.layer.Layer\",{metadata:{properties:{},events:{postcompose:{}}}})},!0);",
		"incentergy/ol/layer/Tile.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./Layer\"],function(e,r){\"use strict\";return r.extend(\"incentergy.ol.layer.Tile\",{metadata:{properties:{},defaultAggregation:\"source\",aggregations:{source:{type:\"incentergy.ol.source.Tile\",multiple:!1,singularName:\"source\"}}},constructor:function(t){r.apply(this,arguments),this._layer=new e.layer.Tile({source:this.getSource()._source})}})},!0);",
		"incentergy/ol/layer/Vector.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./Layer\"],function(e,r){\"use strict\";return r.extend(\"incentergy.ol.layer.Vector\",{metadata:{properties:{},aggregations:{source:{type:\"incentergy.ol.source.Vector\",multiple:!1,singularName:\"source\"}},defaultAggregation:\"source\"},constructor:function(t){r.apply(this,arguments);var o=this.getSource();o&&o._source?this._layer=new e.layer.Vector({source:o._source}):jQuery.sap.log.warning(\"Layer: \"+this.getId()+\" initialized without source.\");var i=this;this._layer.on(\"postcompose\",function(){i.firePostcompose()})}})},!0);",
		"incentergy/ol/library.js": "/*!\n * ${copyright}\n */\nsap.ui.define([],function(){\"use strict\";return sap.ui.getCore().initLibrary({name:\"incentergy.ol\",version:\"4.1.0\",dependencies:[\"sap.ui.core\"],types:[],interfaces:[],controls:[\"incentergy.ol.Map\",\"incentergy.ol.Feature\",\"incentergy.ol.geom.Geometry\",\"incentergy.ol.geom.SimpleGeometry\",\"incentergy.ol.geom.Circle\",\"incentergy.ol.layer.Base\",\"incentergy.ol.layer.Layer\",\"incentergy.ol.layer.Tile\",\"incentergy.ol.layer.Vector\",\"incentergy.ol.source.Vector\",\"incentergy.ol.source.OSM\",\"incentergy.ol.source.BingMaps\",\"incentergy.ol.source.Tile\",\"incentergy.ol.source.UrlTile\",\"incentergy.ol.source.TileImage\",\"incentergy.ol.source.XYZ\"],elements:[]}),incentergy.ol},!1);",
		"incentergy/ol/source/BingMaps.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./TileImage\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.source.BingMaps\",{metadata:{library:\"incentergy.ol\",properties:{cacheSize:{type:\"number\",defaultValue:2048},hidpi:{type:\"boolean\",defaultValue:!1},culture:{type:\"string\",defaultValue:\"en-US\"},key:{type:\"string\",defaultValue:void 0},imagerySet:{type:\"string\",defaultValue:\"AerialWithLabels\"},maxZoom:{type:\"number\",defaultValue:void 0},wrapX:{type:\"boolean\",defaultValue:!1}}},constructor:function(){t.apply(this,arguments),this._source=new e.source.BingMaps({cacheSize:this.getCacheSize(),hidpi:this.getHidpi(),culture:this.getCulture(),key:this.getKey(),imagerySet:this.getImagerySet(),maxZoom:this.getMaxZoom(),wrapX:this.getWrapX()})}})},!0);",
		"incentergy/ol/source/OSM.js": "sap.ui.define([\"ol\",\"./XYZ\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.source.OSM\",{metadata:{library:\"incentergy.ol\"},constructor:function(){t.apply(this,arguments),this._source=new e.source.OSM({url:this.getUrl()})}})},!0);",
		"incentergy/ol/source/Source.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"sap/ui/base/ManagedObject\"],function(t,e){\"use strict\";return e.extend(\"incentergy.ol.source.Source\",{metadata:{library:\"incentergy.ol\",abstract:!0},constructor:function(){var t=this;this.pMapSet=new Promise(function(e,n){t.fnMapSet=e}),e.apply(this,arguments)},setParent:function(t){var n=this,a=e.prototype.setParent.apply(this,arguments);return t.mapSet().then(function(){n.fnMapSet()}),a},mapSet:function(){return this.pMapSet}})},!0);",
		"incentergy/ol/source/Tile.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./Source\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.source.Tile\",{metadata:{library:\"incentergy.ol\",abstract:!0}})},!0);",
		"incentergy/ol/source/TileImage.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./UrlTile\"],function(e,r){\"use strict\";return r.extend(\"incentergy.ol.source.TileImage\",{metadata:{library:\"incentergy.ol\",abstract:!0,properties:{url:{type:\"string\",group:\"Misc\",defaultValue:null}}}})},!0);",
		"incentergy/ol/source/UrlTile.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./Tile\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.source.UrlTile\",{metadata:{library:\"incentergy.ol\",abstract:!0}})},!0);",
		"incentergy/ol/source/Vector.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./Source\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.source.Vector\",{metadata:{library:\"incentergy.ol\",aggregations:{features:{type:\"incentergy.ol.Feature\",multiple:!0,singularName:\"feature\"}},defaultAggregation:\"features\"},constructor:function(){t.apply(this,arguments),this._source=new e.source.Vector},getExtent:function(){return this._source.getExtent()}})},!0);",
		"incentergy/ol/source/XYZ.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"./TileImage\"],function(e,n){\"use strict\";return n.extend(\"incentergy.ol.source.XYZ\",{metadata:{library:\"incentergy.ol\"}})},!0);",
		"incentergy/ol/style/Fill.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"sap/ui/base/ManagedObject\"],function(t,e){\"use strict\";return e.extend(\"incentergy.ol.style.Fill\",{metadata:{library:\"incentergy.ol\",properties:{color:{type:\"string\",group:\"Misc\",defaultValue:null}}},constructor:function(){this._fill=new t.style.Fill,e.apply(this,arguments)},setColor:function(t){if(t){var e=t.match(/rgba\\((\\d+),\\s*(\\d+),\\s*(\\d+),\\s*(\\d(\\.\\d+)?)\\)/);this._fill.setColor([parseInt(e[1]),parseInt(e[2]),parseInt(e[3]),parseFloat(e[4])])}return this.setProperty(\"color\",t)}})});",
		"incentergy/ol/style/Stroke.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"sap/ui/base/ManagedObject\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.style.Stroke\",{metadata:{library:\"incentergy.ol\",properties:{color:{type:\"string\",group:\"Misc\",defaultValue:null},lineCap:{type:\"string\",group:\"Misc\",defaultValue:null},lineJoin:{type:\"string\",group:\"Misc\",defaultValue:null},lineDash:{type:\"string\",group:\"Misc\",defaultValue:null},lineDashOffset:{type:\"int\",group:\"Misc\",defaultValue:0},miterLimit:{type:\"int\",group:\"Misc\",defaultValue:10},width:{type:\"int\",group:\"Misc\",defaultValue:1}}},constructor:function(){this._stroke=new e.style.Stroke,t.apply(this,arguments)},setProperty:function(e,r){var s=\"set\"+e.charAt(0).toUpperCase()+e.slice(1);if(\"lineDash\"===e&&r)r=r.split(/,/).map(function(e){return parseInt(e)});else if(\"color\"==e){var i=r.match(/rgba\\((\\d+),\\s*(\\d+),\\s*(\\d+),\\s*(\\d(\\.\\d+)?)\\)/);r=[parseInt(i[1]),parseInt(i[2]),parseInt(i[3]),parseFloat(i[4])]}return this._stroke[s](r),t.prototype.setProperty.apply(this,arguments)}})});",
		"incentergy/ol/style/Style.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"ol\",\"sap/ui/base/ManagedObject\"],function(e,t){\"use strict\";return t.extend(\"incentergy.ol.style.Style\",{metadata:{library:\"incentergy.ol\",properties:{zIndex:{type:\"int\",group:\"Misc\",defaultValue:null}},aggregations:{fill:{type:\"incentergy.ol.style.Fill\",multiple:!1},image:{type:\"incentergy.ol.style.Image\",multiple:!1},stroke:{type:\"incentergy.ol.style.Stroke\",multiple:!1},text:{type:\"incentergy.ol.style.Text\",multiple:!1}}},constructor:function(){this._style=new e.style.Style,t.apply(this,arguments)},setAggregation:function(e,l){var i=\"set\"+e.charAt(0).toUpperCase()+e.slice(1),n=\"_\"+e;return n in l&&this._style[i](l[n]),t.prototype.setAggregation.apply(this,arguments)}})});"
	}
});