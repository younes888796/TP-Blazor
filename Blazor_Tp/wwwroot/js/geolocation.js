window.blazorGeolocation = {
    toSerializeable: function (e) {
        return {
            "coords": {
                "latitude": e.coords.latitude,
                "longitude": e.coords.longitude
            },
            "timestamp": new Date(e.timestamp)
        };
    },
    getCurrentPosition: function (geolocationRef, options) {
        function onSuccess(result) {
            return geolocationRef.invokeMethodAsync('RaiseOnGetPosition', blazorGeolocation.toSerializeable(result));
        };

        function onError(er) {
            return geolocationRef.invokeMethodAsync('RaiseOnGetPositionError', er.code);
        };

        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    },

    hasGeolocaitonFeature: function () {
        return navigator.geolocation ? true : false;
    }
};

