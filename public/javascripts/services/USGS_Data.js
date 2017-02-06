angular.module('myApp')
    .constant('EarthquakeUrl', 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
    .service('MagStyle', function () {
        return {
            MagColor : function (mag) {
                if(mag < 2 && mag >= 0) {
                    return '#f71d1d';
                } else if (mag < 4) {
                    return '#ffe926';
                } else {
                    return '#ff6a00';
                }
            },
            MagRadius: function (mag) {
                return Math.round(mag * 2.5);
            }
        };
    })
    .service('USGS_Data', function ($http, EarthquakeUrl, MagStyle) {
        var tempArr = [];
        $http.get(EarthquakeUrl)
            .then(function(result) {
                result.data.features.forEach(function(feature) {
                    tempArr.push({
                        id: feature.id,
                        properties: {
                            mag: feature.properties.mag,
                            place: feature.properties.place,
                            time: feature.properties.time,
                            url: feature.properties.url,
                            title: feature.properties.title,
                            depth: feature.geometry.coordinates[2],
                            color: MagStyle.MagColor(feature.properties.mag),
                            radius: MagStyle.MagRadius(feature.properties.mag)
                        },
                        geometry: {
                            coordinates: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]]
                        }
                    });
                });
            }).catch(function(err) {
                console.error(err);
            });
        return tempArr;
    });
