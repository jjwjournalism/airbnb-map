
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleRoad_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "Count_1": {
            "type": "geojson",
            "data": json_Count_1
        }
                    ,
        "20230605_recentEntireShort_small_2": {
            "type": "geojson",
            "data": json_20230605_recentEntireShort_small_2
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
            "id": "lyr_GoogleRoad_0_0",
            "type": "raster",
            "source": "GoogleRoad_0"
        },
        {
            "id": "lyr_Count_1_0",
            "type": "fill",
            "source": "Count_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'NUMPOINTS'], 0.0], ['<=', ['get', 'NUMPOINTS'], 3.0]], 0.75, ['all', ['>', ['get', 'NUMPOINTS'], 3.0], ['<=', ['get', 'NUMPOINTS'], 10.0]], 0.75, ['all', ['>', ['get', 'NUMPOINTS'], 10.0], ['<=', ['get', 'NUMPOINTS'], 22.0]], 0.75, ['all', ['>', ['get', 'NUMPOINTS'], 22.0], ['<=', ['get', 'NUMPOINTS'], 72.0]], 0.75, ['all', ['>', ['get', 'NUMPOINTS'], 72.0], ['<=', ['get', 'NUMPOINTS'], 148.0]], 0.75, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'NUMPOINTS'], 0.0], ['<=', ['get', 'NUMPOINTS'], 3.0]], '#f7fbff', ['all', ['>', ['get', 'NUMPOINTS'], 3.0], ['<=', ['get', 'NUMPOINTS'], 10.0]], '#c8ddf0', ['all', ['>', ['get', 'NUMPOINTS'], 10.0], ['<=', ['get', 'NUMPOINTS'], 22.0]], '#73b3d8', ['all', ['>', ['get', 'NUMPOINTS'], 22.0], ['<=', ['get', 'NUMPOINTS'], 72.0]], '#2879b9', ['all', ['>', ['get', 'NUMPOINTS'], 72.0], ['<=', ['get', 'NUMPOINTS'], 148.0]], '#08306b', '#ffffff']}
        }
,
        {
            "id": "lyr_20230605_recentEntireShort_small_2_0",
            "type": "circle",
            "source": "20230605_recentEntireShort_small_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 5.0, 2], 'circle-color': '#e8718d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}