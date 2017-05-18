var axios = require("axios");



var helper = {
    runQuery: function(place) {
        var place;
        var min_confidence = 9;
        var geocodeAPI = "282fd4ff531cf824eb6466ab401c53d4";
        var queryURL = "http://api.opencagedata.com/geocode/v1/geojson?no_annotations=1&query=" + place + "&min_confidence"+ min_confidence + "&limit=1&pretty=1&key=" + geocodeAPI;

        return axios.get(queryURL).then(function(response) {
            if (response.data.features) {
                return response.data;
            } else { console.log('error') };
        })
    },
/*    graphhopper: function(){
https://graphhopper.com/api/1/isochrone?point=51.131108%2C12.414551&key=5eb0fa4d-cdfa-48e9-b78d-0101405995a1]
    },*/

    getOCData: function() {
        return axios.get("/api");
    },

    postOCData: function(data) {

        return axios.post("/api", {
            results: data
          
        });
              
    }
};

module.exports = helper;
