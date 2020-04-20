var wms_layers = [];


        var lyr_StamenTonerLite_0 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });
var format_TexasCounties_1 = new ol.format.GeoJSON();
var features_TexasCounties_1 = format_TexasCounties_1.readFeatures(json_TexasCounties_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TexasCounties_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TexasCounties_1.addFeatures(features_TexasCounties_1);
var lyr_TexasCounties_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TexasCounties_1, 
                style: style_TexasCounties_1,
                interactive: true,
    title: 'Texas Counties<br />\
    <img src="styles/legend/TexasCounties_1_0.png" /> 0 - 1 <br />\
    <img src="styles/legend/TexasCounties_1_1.png" /> 1 - 50 <br />\
    <img src="styles/legend/TexasCounties_1_2.png" /> 50 - 100 <br />\
    <img src="styles/legend/TexasCounties_1_3.png" /> 100 - 400 <br />\
    <img src="styles/legend/TexasCounties_1_4.png" /> 400 - 700 <br />\
    <img src="styles/legend/TexasCounties_1_5.png" /> 700 - 1000 <br />\
    <img src="styles/legend/TexasCounties_1_6.png" /> 1000 - 2500 <br />\
    <img src="styles/legend/TexasCounties_1_7.png" /> 2500 - 4306 <br />'
        });
var format_TexasCities_2 = new ol.format.GeoJSON();
var features_TexasCities_2 = format_TexasCities_2.readFeatures(json_TexasCities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TexasCities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TexasCities_2.addFeatures(features_TexasCities_2);
var lyr_TexasCities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TexasCities_2, 
                style: style_TexasCities_2,
                interactive: false,
                title: '<img src="styles/legend/TexasCities_2.png" /> Texas Cities'
            });

lyr_StamenTonerLite_0.setVisible(true);lyr_TexasCounties_1.setVisible(true);lyr_TexasCities_2.setVisible(true);
var layersList = [lyr_StamenTonerLite_0,lyr_TexasCounties_1,lyr_TexasCities_2];
lyr_TexasCounties_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID': 'GID', 'CNTY_NM': 'County', 'CNTY_FIPS': 'CNTY_FIPS', 'County': 'County', 'Cases': 'Cases', 'Death': 'Deaths', });
lyr_TexasCities_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID': 'GID', 'CITY_NM': 'CITY_NM', 'CITY_NBR': 'CITY_NBR', 'INC_FLAG': 'INC_FLAG', 'CNTY_SEAT': 'CNTY_SEAT', 'CITY_FIPS': 'CITY_FIPS', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'CNTY_NBR': 'CNTY_NBR', 'DIST_NBR': 'DIST_NBR', });
lyr_TexasCounties_1.set('fieldImages', {'OBJECTID': 'Hidden', 'GID': 'Hidden', 'CNTY_NM': 'TextEdit', 'CNTY_FIPS': 'Hidden', 'County': 'Hidden', 'Cases': 'TextEdit', 'Death': 'TextEdit', });
lyr_TexasCities_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'GID': 'TextEdit', 'CITY_NM': 'TextEdit', 'CITY_NBR': 'TextEdit', 'INC_FLAG': 'TextEdit', 'CNTY_SEAT': 'TextEdit', 'CITY_FIPS': 'TextEdit', 'POP1990': 'TextEdit', 'POP2000': 'TextEdit', 'POP2010': 'TextEdit', 'CNTY_NBR': 'TextEdit', 'DIST_NBR': 'TextEdit', });
lyr_TexasCounties_1.set('fieldLabels', {'CNTY_NM': 'header label', 'Cases': 'header label', 'Death': 'header label', });
lyr_TexasCities_2.set('fieldLabels', {'OBJECTID': 'no label', 'GID': 'no label', 'CITY_NM': 'no label', 'CITY_NBR': 'no label', 'INC_FLAG': 'no label', 'CNTY_SEAT': 'no label', 'CITY_FIPS': 'no label', 'POP1990': 'no label', 'POP2000': 'no label', 'POP2010': 'no label', 'CNTY_NBR': 'no label', 'DIST_NBR': 'no label', });
lyr_TexasCities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});