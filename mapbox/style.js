
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "DiretsoDaragaLegazpi_1": {
            "type": "geojson",
            "data": json_DiretsoDaragaLegazpi_1
        }
                    ,
        "DiretsoDaragaLegazpi_2": {
            "type": "geojson",
            "data": json_DiretsoDaragaLegazpi_2
        }
                    ,
        "DiretsoDaragaLegazpi_3": {
            "type": "geojson",
            "data": json_DiretsoDaragaLegazpi_3
        }
                    ,
        "RoutingResult_4": {
            "type": "geojson",
            "data": json_RoutingResult_4
        }
                    ,
        "RoutingResult_5": {
            "type": "geojson",
            "data": json_RoutingResult_5
        }
                    ,
        "RoutingResult_6": {
            "type": "geojson",
            "data": json_RoutingResult_6
        }
                    ,
        "RoutingResult_7": {
            "type": "geojson",
            "data": json_RoutingResult_7
        }
                    ,
        "RoutingResult_8": {
            "type": "geojson",
            "data": json_RoutingResult_8
        }
                    ,
        "RoutingResult_9": {
            "type": "geojson",
            "data": json_RoutingResult_9
        }
                    ,
        "RoutingResult_10": {
            "type": "geojson",
            "data": json_RoutingResult_10
        }
                    ,
        "RoutingResult_11": {
            "type": "geojson",
            "data": json_RoutingResult_11
        }
                    ,
        "RoutingResult_12": {
            "type": "geojson",
            "data": json_RoutingResult_12
        }
                    ,
        "RoutingResult_13": {
            "type": "geojson",
            "data": json_RoutingResult_13
        }
                    ,
        "RoutingResult_14": {
            "type": "geojson",
            "data": json_RoutingResult_14
        }
                    ,
        "RoutingResult_15": {
            "type": "geojson",
            "data": json_RoutingResult_15
        }
                    ,
        "RoutingResult_16": {
            "type": "geojson",
            "data": json_RoutingResult_16
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_DiretsoDaragaLegazpi_1_0",
            "type": "line",
            "source": "DiretsoDaragaLegazpi_1",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#ff0000'}
        }
,
        {
            "id": "lyr_DiretsoDaragaLegazpi_2_0",
            "type": "line",
            "source": "DiretsoDaragaLegazpi_2",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_DiretsoDaragaLegazpi_3_0",
            "type": "line",
            "source": "DiretsoDaragaLegazpi_3",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_4_0",
            "type": "line",
            "source": "RoutingResult_4",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_5_0",
            "type": "line",
            "source": "RoutingResult_5",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_6_0",
            "type": "line",
            "source": "RoutingResult_6",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_7_0",
            "type": "line",
            "source": "RoutingResult_7",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_8_0",
            "type": "line",
            "source": "RoutingResult_8",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_9_0",
            "type": "line",
            "source": "RoutingResult_9",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_10_0",
            "type": "line",
            "source": "RoutingResult_10",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_11_0",
            "type": "line",
            "source": "RoutingResult_11",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_12_0",
            "type": "line",
            "source": "RoutingResult_12",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_13_0",
            "type": "line",
            "source": "RoutingResult_13",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_14_0",
            "type": "line",
            "source": "RoutingResult_14",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_15_0",
            "type": "line",
            "source": "RoutingResult_15",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RoutingResult_16_0",
            "type": "line",
            "source": "RoutingResult_16",
            "layout": {},
            "paint": {'line-width': 7.142857142857142, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
],
}